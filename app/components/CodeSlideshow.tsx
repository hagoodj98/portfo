"use client";

import React, { useState } from "react";

function CodeSlideshow({ slides = [] }) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  if (!total) return null;

  const active = slides[index];
  const imageSrc = active.image?.src || active.image;

  const goNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="tw-bg-[#0E1424] tw-rounded-2xl tw-border tw-border-[#243255] tw-overflow-hidden tw-shadow-xl">
      <div className="tw-flex tw-items-center tw-justify-between tw-gap-3 tw-bg-[#131d33] tw-px-4 tw-py-3 tw-border-b tw-border-[#243255]">
        <div>
          <h4 className="tw-text-white tw-font-semibold tw-text-sm md:tw-text-base">
            {active.title}
          </h4>
          <p className="tw-text-[#A5B4D6] tw-text-xs md:tw-text-sm tw-mb-0">
            {active.summary}
          </p>
        </div>
        <span className="tw-text-[#9DB0DA] tw-text-xs tw-whitespace-nowrap">
          {index + 1} / {total}
        </span>
      </div>

      <div className="tw-bg-[#0B1020] tw-p-4 md:tw-p-6">
        <img
          src={imageSrc}
          alt={active.alt}
          className="tw-w-full tw-h-auto tw-rounded-xl tw-border tw-border-[#243255]"
        />
      </div>

      <div className="tw-flex tw-items-center tw-justify-between tw-gap-3 tw-px-4 tw-py-3 tw-border-t tw-border-[#243255] tw-bg-[#131d33]">
        <button
          type="button"
          onClick={goPrev}
          className="tw-text-sm tw-bg-[#223457] tw-text-white tw-px-3 tw-py-1.5 tw-rounded-md hover:tw-bg-[#2F4877] tw-transition-colors"
        >
          Previous
        </button>

        <div className="tw-flex tw-gap-2 tw-overflow-x-auto tw-max-w-[55%]">
          {slides.map((slide, slideIndex) => {
            const thumbSrc = slide.image?.src || slide.image;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => {
                  setIndex(slideIndex);
                }}
                className={`tw-rounded tw-border ${
                  slideIndex === index
                    ? "tw-border-yellow tw-opacity-100"
                    : "tw-border-[#304266] tw-opacity-60"
                }`}
                aria-label={`Show slide ${slideIndex + 1}`}
              >
                <img
                  src={thumbSrc}
                  alt={slide.alt}
                  className="tw-h-10 tw-w-16 tw-object-cover tw-rounded"
                />
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={goNext}
          className="tw-text-sm tw-bg-[#223457] tw-text-white tw-px-3 tw-py-1.5 tw-rounded-md hover:tw-bg-[#2F4877] tw-transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CodeSlideshow;
