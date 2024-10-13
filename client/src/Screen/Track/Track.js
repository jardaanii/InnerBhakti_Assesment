import React, { useEffect, useRef, useState } from "react";
// import sampleAudio from "../../Assets/Sample.mp3";
import {
  AudioLoading,
  BackIcon,
  CloseIcon,
  ForwardIcon,
  PauseIcon,
  PlayIcon,
  RewindIcon,
} from "../../Assets/Icon";
import { getTrack } from "../../Services/Service";
import "./Track.css";
import { isValidArray, isValidObject } from "../../Services/Utils";
import { useParams } from "react-router-dom";

export default function Track(props) {
  const [programs] = useState(
    Object.values(JSON.parse(localStorage.getItem("programs")))?.length > 0
      ? JSON.parse(localStorage.getItem("programs"))?.programs
      : []
  );
  const [src, setSrc] = useState(null);
  const { trackId } = useParams();

  useEffect(() => {
    const fetchTrack = async () => {
      const response = await getTrack(trackId);

      setSrc(response);
    };

    fetchTrack();
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className="inherit-parent-height inherit-parent-width overflow-hidden"
      style={{
        position: "relative",
      }}
    >
      <img
        alt="background"
        src={`${
          isValidArray(programs) &&
          programs?.filter((program) => program?._id === src?.program)?.[0]
            ?.imageUrl
        }`}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "0px",
        }}
        className="z-index-1 inherit-parent-height inherit-parent-width padding-larger"
      >
        <div className=" inherit-parent-width height-fit-to-content display-flex flex-justify-content-space-between">
          <div
            style={{ width: "20px", height: "20px" }}
            onClick={() => {
              props.navigate(`plan/${src?.program}`);
            }}
          >
            <BackIcon color="black" height="20" width="20" />
          </div>

          <div
            style={{ width: "24px", height: "24px" }}
            onClick={() => {
              props.navigate(`plan/${src?.program}`);
            }}
          >
            <CloseIcon height="28" width="28" />
          </div>
        </div>
        <div className="display-flex flex-direction-column flex-justify-content-space-between inherit-parent-height">
          <div className=" inherit-parent-width display-flex flex-direction-column padding-vertical-large font-color-white flex-align-items-center">
            <div className=" padding-vertical-default font-size-default font-color-secondary font-weight-400 ">
              {src?.title}
            </div>

            <div className=" padding-vertical-default font-size-medium font-color-secondary">
              {src?.description}
            </div>
          </div>

          <div
            className=" inherit-parent-width 
      display-flex flex-align-items-center flex-justify-content-center"
          >
            <AudioPlayer src={src?.audioUrl} duration={src?.duration} />
          </div>
        </div>
      </div>
    </div>
  );
}

const AudioPlayer = (props) => {
  const [play, setPlay] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(false);
  const audio = useRef(null);
  const isGetAudioAndPlay = useRef(false);

  const audioPlayHandler = () => {
    if (
      audio.current &&
      typeof props.src === "string" &&
      props.src.length > 0
    ) {
      if (play === false) {
        audio.current.play();
        setPlay(true);
      } else if (play === true && currentTime > 0) {
        audio.current.pause();
        setPlay(false);
      }
    } else if (typeof props.getDownloadURL === "function") {
      setLoading(true);
      isGetAudioAndPlay.current = true;
      props.getDownloadURL();
    }
  };

  //to audio play method
  useEffect(() => {
    if (
      isGetAudioAndPlay.current === true &&
      audio.current &&
      typeof props.src === "string" &&
      props.src.length > 0
    ) {
      if (play === false) {
        audio.current.play();
        setPlay(true);
      } else {
        audio.current.pause();
        setPlay(false);
      }
      audio.current.onended = () => {
        setPlay(false);
      };
    }
    audio.current.onended = () => {
      setPlay(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.src, audio.current]);

  //audio change listerner
  useEffect(() => {
    if (
      audio.current &&
      typeof props.src === "string" &&
      props.src.length > 0
    ) {
      if (isValidObject(audio.current) && audio.current.tagName === "AUDIO") {
        audio.current.addEventListener("timeupdate", function () {
          if (isValidObject(audio.current)) {
            setCurrentTime(Math.ceil(audio.current.currentTime));
          }
        });
        audio.current.addEventListener("durationchange", function () {
          if (
            isValidObject(audio.current) &&
            audio.current.tagName === "AUDIO" &&
            typeof audio.current.duration === "number" &&
            audio.current.duration !== Infinity
          ) {
            if (loading === true) {
              setLoading(false);
            }
            setDuration(Math.ceil(audio.current.duration));
          }
        });
      }
    }
    return () => {
      window.removeEventListener("timeupdate", function () {
        setCurrentTime(0);
      });

      window.removeEventListener("durationchange", function () {
        setDuration(0);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.src]);

  useEffect(() => {
    const value = (currentTime / props?.duration) * 100;
    const element = document.getElementById("seek-slider");
    element.style.background = `linear-gradient(to right, black ${value}%, rgb(110, 110, 110) ${value}%)`;
    // eslint-disable-next-line
  }, [currentTime]);

  return (
    <div className="inherit-parent-width">
      <audio
        allow="microphone"
        src={props.src || ""}
        ref={audio}
        type="audio/mpeg"
        className="display-none"
      ></audio>
      <div>
        <input
          disabled={props.loading || !props.src || props.src === ""}
          type="range"
          id="seek-slider"
          max={duration}
          className="inherit-parent-width cursor-pointer"
          value={currentTime}
          onChange={(event) => {
            const value = (event.target.value / event.target.max) * 100;
            event.target.style.background = `linear-gradient(to right, black ${value}%, rgb(110, 110, 110) ${value}%)`;
            audio.current.currentTime = event.target.value;
          }}
        />
        <div className="display-flex flex-justify-content-space-between padding-top-default">
          {" "}
          <div
            className="font-color-secondary font-size-small white-space-nowWrap audio-duration-content-size font-family-gilroy-regular"
            data-cy="audio-player-duration"
          >
            {currentTime > 0
              ? `${Math.floor(currentTime / 60)}:${
                  Math.ceil(currentTime % 60) > 9
                    ? Math.ceil(currentTime % 60)
                    : "0" + Math.ceil(currentTime % 60)
                }`
              : duration > 0
              ? `${Math.floor(duration / 60)}:${
                  Math.ceil(duration % 60) > 9
                    ? Math.ceil(duration % 60)
                    : "0" + Math.ceil(duration % 60)
                }`
              : "0:00"}
          </div>
          <div
            className="font-color-secondary font-size-small white-space-nowWrap audio-duration-content-size font-family-gilroy-regular"
            data-cy="audio-player-duration"
          >
            {props?.duration > 0
              ? `${Math.floor(props?.duration / 60)}:${
                  Math.ceil(props?.duration % 60) > 9
                    ? Math.ceil(props?.duration % 60)
                    : "0" + Math.ceil(props?.duration % 60)
                }`
              : "0:00"}
          </div>
        </div>
        <div className="inherit-parent-width flex-justify-content-center flex-align-items-end">
          {loading && <AudioLoading height={60} width={60} />}
          <div
            className=" padding-left-default padding-right-default  cursor-pointer"
            onClick={() => {
              audio.current.currentTime = audio.current.currentTime - 10;
            }}
          >
            <RewindIcon height="40px" width="40px" />
          </div>

          {!loading && play && (
            <div
              onClick={() => {
                audioPlayHandler();
              }}
              className="cursor-pointer"
            >
              <PauseIcon height={60} width={60} />
            </div>
          )}

          {!loading && !play && (
            <div
              onClick={() => {
                audioPlayHandler();
              }}
              className="cursor-pointer"
            >
              <PlayIcon height={60} width={60} />
            </div>
          )}

          <div
            className=" padding-left-default padding-right-default cursor-pointer"
            onClick={() => {
              audio.current.currentTime = audio.current.currentTime + 10;
            }}
          >
            <ForwardIcon height="40px" width="40px" />
          </div>
        </div>
      </div>
    </div>
  );
};
