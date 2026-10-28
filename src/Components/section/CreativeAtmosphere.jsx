import React from "react";
import creativeAtmosphereImg from "../../assets/creativeatmosphere.png";
import Container from "../ui/Container";

const Arrows = ({ className = "" }) => (
  <svg
    className={`text-indigo-500 ${className}`}
    width="84"
    height="56"
    viewBox="0 0 84 56"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinejoin="round"
    strokeLinecap="round"
    aria-hidden="true"
  >
    {[
      [0, 0],
      [24, 8],
      [50, 20],
    ].map(([x, y], i) => (
      <path
        key={i}
        d="M2 2 L26 12 L2 22 L8 12 Z"
        transform={`translate(${x} ${y}) rotate(35 14 12)`}
      />
    ))}
  </svg>
);

export default function CreativeAtmosphere({
  title = "Our Creative Atmosphere",
  image = "/images/office.jpg",
  alt = "Our team working together in the office",
}) {
  return (
    <Container className="mb-24 mt-[112px]">
      <div className="flex items-start gap-8 mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-gray-200">
          {title}
        </h2>
        <Arrows className="hidden sm:block mt-3" />
      </div>

      <img
        src={creativeAtmosphereImg}
        alt={alt}
        className="w-full h-[260px] sm:h-[380px] md:h-[560px] object-cover rounded-lg bg-slate-100"
      />
    </Container>
  );
}