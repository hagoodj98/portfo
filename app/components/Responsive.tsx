import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

type ResponsiveProps = {
  repsonsive: StaticImageData | string | undefined;
  width?: number | `${number}`;
  height?: number | `${number}`;
};
const Responsive = ({ repsonsive, width, height }: ResponsiveProps) => {
  return (
    <div className="tw-container tw-mx-auto">
      <div>
        {/* Only pass width/height if defined */}
        {width !== undefined && height !== undefined ? (
          <Image
            src={repsonsive || ""}
            className=" tw-mx-auto"
            alt="Project name"
            width={width}
            height={height}
          />
        ) : (
          <Image
            src={repsonsive || ""}
            className=" tw-mx-auto"
            alt="Project name"
          />
        )}
      </div>
    </div>
  );
};

export default Responsive;
