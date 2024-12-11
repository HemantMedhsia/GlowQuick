import React from "react";
import "./Button2.scss";
import vd3 from "../../assets/Vedio/vd3.mp4";

const Button2 = () => {
  return (
    <div>
      <div class="wrapper">
        <input type="checkbox" />
        <div class="video">
          <video
            src= {vd3}
            loop
            muted
            autoplay
            playsinline
          ></video>
        </div>
        <div class="text">
          <span data-text="Watch the video"></span>
        </div>
      </div>
    </div>
  );
};

export default Button2;
