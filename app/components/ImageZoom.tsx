"use client";

import React from "react";
import NextImage, { StaticImageData } from "next/image";

type ImageZoomProps = {
  src: string | StaticImageData;
  alt?: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  className?: string;
};

const ImageZoom = (props: ImageZoomProps) => {
  const src = typeof props.src === "string" ? props.src : props.src.src;
  const w = props.width !== undefined ? Number(props.width) : 800;
  const h = props.height !== undefined ? Number(props.height) : 600;

  return (
    <div
      className={
        "tw-group tw-relative tw-overflow-hidden " + (props.className || "")
      }
      style={{ display: "inline-block" }}
    >
      <NextImage
        src={src}
        alt={props.alt || ""}
        width={w}
        height={h}
        style={{
          transition: "transform 0.3s ease",
          display: "block",
        }}
        className="group-hover:tw-scale-125 tw-transition-transform tw-duration-300"
      />
    </div>
  );
};

export default ImageZoom;
