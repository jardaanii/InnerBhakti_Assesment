import React from "react";
import "./PlanCard.css";
import { LockIcon } from "../../Assets/Icon";

export default function PlanCard(props) {
  return (
    <div
      className={`border-radius-default ${props?.className}`}
      style={{
        width: "160px",
        height: "160px",
        position: "relative",
      }}
      onClick={props.onClick}
    >
      <img
        style={{
          borderRadius: "8px",
          width: "160px",
          height: "160px",
          objectFit: "cover",
        }}
        src={props.data?.imageUrl}
        alt="test"
      />
      <LockButton />
      <div
        className=" display-flex flex-direction-column position-absolute bottom-0"
        style={{ width: "160px" }}
      >
        <div className=" padding-left-default padding-right-default font-size-small font-color-white letter-spacing-4-percentage">
          {props.data.title}
        </div>
        <div
          style={{
            fontSize: "8px",
          }}
          className="padding-top-smaller padding-right-default padding-bottom-default padding-left-default font-color-white text-overflow-ellipsis"
        >
          {props.data.description}
        </div>
      </div>
    </div>
  );
}

const LockButton = () => {
  return (
    <div className=" padding-default position-absolute top-0 right-0 padding-default border-radius-50-percentage backdrop-filter-blur flex-justify-content-center flex-align-items-center">
      <LockIcon />
    </div>
  );
};
