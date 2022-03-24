import React, { useEffect, useRef } from "react";
import TeamWork from "./teamwork.mp4";
import "./BackgroundVideo.scss"
const BackgroundVideo = () => {
  // const ref = useRef();

  // useEffect(() => {
  //   setTimeout(() => {
  //     ref.current.pause();
  //   }, 6000)
  // }, []);

  return (
    <div id="video-fond">
      <video id="mavideo" autoPlay muted src={TeamWork} type="video/mp4"/>
    </div>
  );
};

export default BackgroundVideo;
