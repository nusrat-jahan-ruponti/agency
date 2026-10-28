import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import Container from "../ui/Container";



const svgProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "url(#features-gradient)",
  strokeWidth: 2.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  className: "mx-auto mb-[22px] block h-[50px] w-[50px]",
};

export const BulbIcon = () => (
  <svg {...svgProps}>
    <circle cx="24" cy="23" r="21" strokeDasharray="0.1 5.2" />
    <path d="M16 36v-4c-3-2-5-5-5-9a13 13 0 0 1 26 0c0 4-2 7-5 9v4z" fill="white" />
    <path d="M19 41h10M21 45h6" />
    <path d="M18.5 17.5 24 23l5.5-5.5M24 23v6" />
  </svg>
);

export const TrophyIcon = () => (
  <svg {...svgProps}>
    <path d="M13 5h22v13a11 11 0 0 1-22 0z" />
    <path d="M13 8H6v4a7 7 0 0 0 7 7M35 8h7v4a7 7 0 0 1-7 7" />
    <path d="M24 29v7M15 44c0-5 3-8 9-8s9 3 9 8z" />
    <circle cx="24" cy="12" r="2" />
    <path d="M24 14v5" />
  </svg>
);

export const TeamIcon = () => (
  <svg {...svgProps}>
    <circle cx="24" cy="25" r="17" strokeDasharray="7 5" />
    <g fill="white">
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 19c0-3.5 2.5-5 6-5s6 1.5 6 5z" />
      <circle cx="39" cy="8" r="3.5" />
      <path d="M33 19c0-3.5 2.5-5 6-5s6 1.5 6 5z" />
      <circle cx="24" cy="36" r="3.5" />
      <path d="M18 47c0-3.5 2.5-5 6-5s6 1.5 6 5z" />
    </g>
  </svg>
);


const defaultItems = [
  {
    icon: <BulbIcon />,
    title: "Creative Solutions",
    text: "Sed morbi nulla pulvinar lectus tempor vel euismod accumsan.",
  },
  {
    icon: <TrophyIcon />,
    title: "Award Winning",
    text: "Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet.",
  },
  {
    icon: <TeamIcon />,
    title: "Team of Professionals",
    text: "Nam venenatis urna aenean quis feugiat et senectus turpis.",
  },
];


function FeatureItem({ icon, title, text }) {
  return (
   <div className="border-t border-[#e4e2f3] px-6 py-6 text-center first:border-t-0 md:border-l md:border-t-0 md:py-0 md:first:border-l-0 mt-4 mb-4 md:mt-[109px] md:mb-[131px]">
      {icon}
      <h3 className="mb-5 text-[24px] font-extrabold leading-9 text-[#0c0c1d] dark:text-gray-200">
        {title}
      </h3>
      <p className="mx-auto max-w-[320px] text-[16px] font-medium leading-[27px] text-[#5a5e7a]">
        {text}
      </p>
    </div>
  );
}


export default function Features({ items = defaultItems }) {
  return (
    <Container className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-3">
     
      <svg width="0" height="0" className="absolute" aria-hidden="true">
        <defs>
          <linearGradient id="features-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7a5cff" />
            <stop offset="1" stopColor="#d04ee6" />
          </linearGradient>
        </defs>
      </svg>

      {items.map((item) => (
        <FeatureItem key={item.title} {...item} />
      ))}
    </Container>
  );
}
