"use client";

import React from "react";
import { Magnifier } from "react-image-magnifiers";
import { StaticImageData } from "next/image";

type ImageZoomProps = {
  src: string | StaticImageData;
  alt?: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  className?: string;
};

const ImageZoom = (props: ImageZoomProps) => {
  // Handle StaticImageData (from next/image imports) or string
  const src = typeof props.src === "string" ? props.src : props.src.src;
  return (
    <div className={"tw-group tw-relative tw-flex " + (props.className || "")}>
      {props.width !== undefined && props.height !== undefined ? (
        <Magnifier
          imageSrc={src}
          imageAlt={props.alt || ""}
          imageWidth={Number(props.width)}
          imageHeight={Number(props.height)}
        />
      ) : (
        <Magnifier imageSrc={src} imageAlt={props.alt || ""} />
      )}
      <div className="tw-absolute  tw-flex  tw-border-2 tw-right-1 tw-h-[20px] tw-w-20  tw-justify-center tw-items-center tw-bg-yellow  tw-transition-all tw-opacity-0 group-hover:tw-opacity-100 tw-z-10">
        <h3 className="tw-text-white tw-text-sm">Zoom***</h3>
      </div>
    </div>
  );
};

export default ImageZoom;
