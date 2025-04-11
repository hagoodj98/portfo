"use client";

import React from 'react'
 
const Video = (props) => {
  
  return (
    <>
        <video width="1020" height="440" controls preload="none">
          <source src={props.srclink} type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
        
    </>
  )
}

export default Video;
