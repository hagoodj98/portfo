import React from "react";
import CarouselControlled from "./Carousel";
import { DataItem } from "./datai";

type WireframeSlideProps = {
  processWireframes: DataItem[];
  children: React.ReactNode;
};

const WireframeSlide = ({
  processWireframes,
  children,
}: WireframeSlideProps) => {
  return (
    <div className="  tw-bg-[#F7FBFF] tw-overflow-hidden">
      <div className="tw-grid lg:tw-grid-cols-12">
        {children}
        <div className="lg:tw-col-span-8 tw-bg-white tw-p-4 md:tw-p-6">
          <CarouselControlled
            wireframeslides={processWireframes}
            width="100%"
            height="500px"
          />
        </div>
      </div>
    </div>
  );
};

export default WireframeSlide;
