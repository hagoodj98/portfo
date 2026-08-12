"use client";

import React from "react";
import Link from "next/link";

const VideoSection = (props: {
  srclink: string;
  githubLink?: string;
  muted?: boolean;
  joke?: boolean;
  children?: React.ReactNode;
  hideGithubLink?: boolean;
  liveLink?: string;
}) => {
  const srcLower = props.srclink.toLowerCase();
  const videoType = srcLower.endsWith(".webm")
    ? "video/webm"
    : srcLower.endsWith(".mov")
      ? "video/quicktime"
      : "video/mp4";

  return (
    <div className="tw-container tw-mx-auto tw-h-auto ">
      <h3 className="tw-text-2xl md:tw-text-3xl tw-text-bluegreen tw-text-center tw-font-boldonse tw-mb-5">
        {props.joke ? "Short Film  " : "Final Demo..."}
      </h3>
      <div className="tw-mx-auto lg:tw-w-2/3  tw-h-full ">
        <video
          width="1020"
          playsInline
          height="440"
          muted={props.muted}
          controls
          preload="none"
        >
          <source src={props.srclink} type={videoType} />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
        {props.children ? (
          <div>{props.children}</div>
        ) : (
          <>
            {!props.hideGithubLink && (
              <Link
                href={props.githubLink || "#"}
                className="tw-text-bluegreen tw-text-center tw-underline tw-mt-2 tw-block"
              >
                {" "}
                Project on Github
              </Link>
            )}
            {props.liveLink && (
              <Link
                href={props.liveLink}
                className="tw-text-bluegreen tw-text-center tw-underline tw-mt-2 tw-block"
              >
                Live Demo
              </Link>
            )}
          </>
        )}
        {props.joke && (
          <div className="tw-mt-5 tw-p-3 tw-bg-gray-100 tw-rounded">
            <h4 className="tw-text-lg tw-font-semibold tw-mb-2">Joke:</h4>
            <p>
              You are home alone and decide to take a nap. You wake up in the
              middle of the night and see a shadowy figure in your room. You
              can&apos;t move or scream because you are paralyzed with fear,
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
