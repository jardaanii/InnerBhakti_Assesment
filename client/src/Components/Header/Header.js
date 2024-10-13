import React from "react";
import "./Header.css";
import {
  AddIcon,
  ConcentricCirclesIcon,
  DashedCircleIcon,
} from "../../Assets/Icon";

export default function Header() {
  return (
    <div className="inherit-parent-width height-fit-to-content  display-flex padding-large flex-justify-content-space-between flex-align-items-center background-linear-gradient-red-white font-color-red">
      <div className=" flex-direction-row flex-align-items-center">
        <>
          <ConcentricCirclesIcon />
        </>
        <h2 className=" letter-spacing-large padding-left-default">
          InnerBhakthi
        </h2>
      </div>

      <div className=" flex-direction-row  flex-align-items-center">
        <div className="padding-right-default">
          <DashedCircleIcon />
        </div>

        <div className=" padding-left-default">
          <AddIcon />
        </div>
      </div>
    </div>
  );
}
