import React from "react";
import ImageZoom from "./ImageZoom";

const Diagram = ({
  image,
  alt,
  children,
}: {
  image: string;
  alt: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="tw-container tw-mx-auto tw-p-5 tw-my-10">
      <h3 className="tw-text-2xl md:tw-text-4xl tw-text-bluegreen tw-font-boldonse">
        Overview Diagram
      </h3>
      <div className="tw-w-64">
        <hr className="tw-h-2 tw-bg-bluegreen" />
      </div>
      {children}
      <ImageZoom width={1000} height={600} alt={alt} src={image} />
    </div>
  );
};

export default Diagram;
