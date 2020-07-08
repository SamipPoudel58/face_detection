import React from "react";
import "./FaceRecognition.css";

function FaceRecognition({ imgUrl, box }) {
  return (
    <div className="center ma">
      <div className="absolute mt3">
        <img id="inputimage" src={imgUrl} width="600px" height="auto" alt="" />
        <div
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
          className="bounding-box"
        ></div>
      </div>
    </div>
  );
}

export default FaceRecognition;
