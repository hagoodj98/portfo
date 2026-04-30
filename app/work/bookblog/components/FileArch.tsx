import React from "react";
import ImageZoom from "../../../components/ImageZoom";

const FileArch = ({ image, alt }: { image: string; alt: string }) => {
  return (
    <div className="tw-container tw-mx-auto tw-flex tw-flex-col lg:tw-flex-row-reverse tw-gap-2 tw-my-6">
      <div className="lg:tw-w-4/12 tw-flex tw-flex-col tw-justify-center tw-p-5">
        <div className="tw-py-10">
          <h3 className="tw-text-xl md:tw-text-2xl tw-text-bluegreen tw-font-boldonse">
            File Architecture
          </h3>
          <div className="tw-w-28">
            <hr className="tw-h-2 tw-bg-bluegreen" />
          </div>
          <p className="md:tw-text-base tw-text-black">
            This project is organized by layers so responsibilities stay clear:
            app routes and UI in app/, data operations in repositories, business
            orchestration in services, and PostgreSQL setup in lib/database.
            This structure made testing and feature expansion easier as the
            project grew.
          </p>
        </div>
      </div>
      <div className="tw-relative lg:tw-w-8/12 tw-flex tw-justify-center md:tw-items-center md:tw-justify-normal">
        <div className="tw-w-full tw-flex tw-flex-col tw-gap-3 tw-mx-auto">
          <ImageZoom src={image} width={800} height={600} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default FileArch;
