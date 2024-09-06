"use client";

import React from "react";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import Image from "next/image";

// Import Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define slide type
interface Slide {
  src: string;
  alt: string;
}

// Custom Arrow Button component with Tailwind CSS class names
function SampleNextArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center z-10 right-4 hover:bg-opacity-75`}
      onClick={onClick}
    >
      <span className="text-white">&gt;</span>
    </div>
  );
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center z-10 left-4 hover:bg-opacity-75`}
      onClick={onClick}
    >
      <span className="text-white">&lt;</span>
    </div>
  );
}

export default function Jumbotron() {
  const slides: Slide[] = [
    {
      src: "/banner_test.webp",
      alt: "Slide 1",
    },
    {
      src: "/banner_test.webp",
      alt: "Slide 2",
    },
    {
      src: "/banner_test.webp",
      alt: "Slide 3",
    },
  ];

  // Slick settings with TypeScript annotations
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative">
        <Slider {...settings} className="!static">
          {slides.map((slide, index) => (
            <div key={index} className="outline-none">
              <div className="relative w-full">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={1200}
                  height={600}
                  priority={true}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1200px) 90vw, 1200px"
                  style={{ objectFit: "cover" }}
                  className="rounded-3xl"
                  quality={80}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
