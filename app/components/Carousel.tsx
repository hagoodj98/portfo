"use client";

import React, { useState } from "react";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Image from "next/image";
import { StaticImageData } from "next/image";
import styles from "./Carousel.module.css";
import { DataItem } from "./datai";

type CarouselSlide = {
  id: string | number;
  image?: StaticImageData;
  alt?: string;
  title?: string;
  summary?: string;
  description?: string;
  custom?: React.ReactNode;
};

type CarouselProps = {
  wireframeslides: CarouselSlide[] | DataItem[];
  imagewidth?: number;
  imageheight?: number;
  width?: number | string;
  height?: number | string;
  classname?: string;
};

const CarouselControlled = ({
  wireframeslides,
  width,
  height = 400,
  classname,
}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = wireframeslides.length;

  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);
  const handleNext = () => setActiveIndex((prev) => (prev + 1) % total);

  return (
    <div style={{ position: "relative", width: width, margin: "0 auto" }}>
      <div>
        {wireframeslides.map((piece, idx) => (
          <Slide
            key={piece.id}
            direction="left"
            in={idx === activeIndex}
            mountOnEnter
            unmountOnExit
          >
            <div
              className={styles["carousel-slide-scrollable"]}
              style={{
                width: width,
                height: height,
                display: idx === activeIndex ? "block" : "none",
                borderRadius: 16,
                // Removed overflow: 'hidden' to avoid React warning
                boxShadow: "0 4px 16px 0 rgba(31, 38, 135, 0.17)",
                background: "#181f2a",
                padding: 24,
                boxSizing: "border-box",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {"title" in piece ||
              "summary" in piece ||
              "description" in piece ? (
                <div className={classname} style={{ width: "100%" }}>
                  {piece.title && (
                    <h4
                      className="tw-text-bluegreen tw-font-semibold tw-mb-2"
                      style={{
                        color: "#24a3bf",
                        fontWeight: 600,
                        fontSize: 20,
                      }}
                    >
                      {piece.title}
                    </h4>
                  )}
                  {piece.summary && (
                    <p
                      className="tw-text-white tw-text-sm tw-mb-3"
                      style={{ color: "#fff", fontSize: 16 }}
                    >
                      {piece.summary}
                    </p>
                  )}
                  {piece.description && (
                    <div className={styles["carousel-code-scrollable"]}>
                      <pre
                        className="tw-bg-[#1a2332] tw-rounded tw-p-3 tw-text-xs tw-text-[#e0e0e0]"
                        style={{
                          background: "#1a2332",
                          color: "#e0e0e0",
                          borderRadius: 8,
                          padding: 40,
                          fontSize: 14,
                          margin: 0,
                        }}
                      >
                        <code>{piece.description}</code>
                      </pre>
                    </div>
                  )}
                </div>
              ) : "custom" in piece ? (
                // Render custom JSX slide if present
                piece.custom
              ) : piece.image ? (
                <div
                  className={
                    classname
                      ? classname + " " + styles["carousel-image-container"]
                      : styles["carousel-image-container"]
                  }
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <div
                    className={styles["carousel-image-scrollable"]}
                    style={{
                      width: "100%",
                      height: height,
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <Image
                      src={`${piece.image}`}
                      fill
                      alt={"alt" in piece ? piece.alt : "slide image"}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        display: "block",
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div style={{ color: "#fff", background: "#c00", padding: 16 }}>
                  No image provided for this slide.
                </div>
              )}
            </div>
          </Slide>
        ))}
        <Button
          onClick={handlePrev}
          style={{
            position: "absolute",
            left: 12,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            minWidth: 0,
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "#24a3bf",
            color: "#fff",
          }}
          variant="contained"
        >
          <ArrowBackIosRoundedIcon />
        </Button>
        <Button
          onClick={handleNext}
          style={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            minWidth: 0,
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "#24a3bf",
            color: "#fff",
          }}
          variant="contained"
        >
          <ArrowForwardIosRoundedIcon />
        </Button>

        {/* Dots navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            marginTop: 24,
          }}
        >
          {wireframeslides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                border: "none",
                background: idx === activeIndex ? "#24a3bf" : "#334155",
                opacity: idx === activeIndex ? 1 : 0.5,
                transition: "background 0.2s, opacity 0.2s",
                cursor: "pointer",
                outline: "none",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselControlled;
