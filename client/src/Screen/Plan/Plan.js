import React, { useEffect, useState } from "react";
import { isValidArray } from "../../Services/Utils";
import { useParams } from "react-router-dom";
import { getProgram } from "../../Services/Service";
import "./Plan.css";
import { BackIcon, NoDataFallBackIcon } from "../../Assets/Icon";

export default function Plan(props) {
  const [loading, setLoading] = useState(true);
  const { planId } = useParams();

  const [program, setProgram] = useState(null);

  useEffect(() => {
    const fetchProgram = async (planId) => {
      if (!loading) setLoading(true);
      const response = await getProgram(planId);

      setProgram(response);
      setLoading(false);
    };

    fetchProgram(planId);

    // eslint-disable-next-line
  }, []);

  return (
    <div className=" inherit-parent-height inherit-parent-width display-flex flex-direction-column overflow-hidden">
      <div
        className="height-50-percentage inherit-parent-width"
        style={{
          position: "relative",
        }}
      >
        {!loading && (
          <>
            <img
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
              src={program?.imageUrl}
              alt="programImage"
            />
            <h2 className=" position-absolute bottom-0 padding-large font-color-white ">
              {program?.title}
            </h2>
          </>
        )}

        {loading && (
          <div
            className="shimmer"
            style={{
              height: "100%",
              width: "100%",
            }}
          />
        )}
      </div>

      <div className=" height-20-percentage inherit-parent-width padding-large background-color-secondary font-color-white ">
        {loading && (
          <>
            <div
              className=" width-80-percentage shimmer margin-bottom-default"
              style={{
                height: "16px",
              }}
            />
            <div
              className=" width-50-percentage shimmer"
              style={{
                height: "16px",
              }}
            />
          </>
        )}
        {!loading && <p className="font-size-medium">{program?.description}</p>}
      </div>

      <div
        className="padding-large inherit-parent-width background-color-black hide-scrollbar"
        style={{
          overflow: "scroll",
          height: "330px",
        }}
      >
        {isValidArray(program?.tracks) &&
          program?.tracks?.map((track) => (
            <div
              className=" inherit-parent-width display-flex flex-direction-column border-bottom-grey padding-top-default padding-bottom-default"
              onClick={() => {
                props.navigate(`track/${track?._id}`);
              }}
            >
              <div
                className=" inherit-parent-width font-color-white font-size-small padding-top-smaller padding-bottom-smaller"
                style={{
                  maxHeight: "30px",
                }}
              >
                {" "}
                {track?.title}
              </div>
              <div
                className=" inherit-parent-width font-color-white font-size-smaller padding-top-smaller padding-bottom-smaller letter-spacing-4-percentage"
                style={{
                  maxHeight: "30px",
                }}
              >
                {" "}
                {track?.description}
              </div>
            </div>
          ))}

        {loading &&
          [...Array(6).keys()].map((element) => (
            <>
              <div
                style={{
                  width: "50%",
                  height: "12px",
                }}
                className="margin-top-default margin-bottom-default shimmer"
              />
              <div
                style={{
                  width: "80%",
                  height: "10px",
                }}
                className="border-bottom-grey margin-top-default margin-bottom-default shimmer"
              />
            </>
          ))}

        {!isValidArray(program?.tracks) && (
          <div className=" display-flex flex-align-items-center flex-justify-content-center inherit-parent-width font-color-white">
            <NoDataFallBackIcon height="150" width="150" />
          </div>
        )}
      </div>

      <div
        className=" position-absolute inherit-parent-width z-index-1 height-10-percentage display-flex flex-align-items-center background-color-black bottom-0 padding-large"
        onClick={() => {
          props.navigate("/");
        }}
      >
        <BackIcon color="orange" />
      </div>
    </div>
  );
}
