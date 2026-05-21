"use client";

import React, { useState } from "react";
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
  const [origin, setOrigin] = useState("50% 50%");

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    // Clamp values so transform-origin always stays inside the element.
    const clampedX = Math.max(0, Math.min(100, x));
    const clampedY = Math.max(0, Math.min(100, y));
    setOrigin(`${clampedX}% ${clampedY}%`);
  };

  return (
    <div
      className={
        "tw-group tw-relative tw-overflow-hidden " + (props.className || "")
      }
      style={{ display: "inline-block" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setOrigin("50% 50%")}
    >
      <NextImage
        src={src}
        alt={props.alt || ""}
        width={w}
        height={h}
        loading="eager"
        style={{
          transition: "transform 0.3s ease",
          display: "block",
          height: "auto",
          transformOrigin: origin,
        }}
        className="group-hover:tw-scale-125 tw-transition-transform tw-duration-300"
      />
    </div>
  );
};

export default ImageZoom;
