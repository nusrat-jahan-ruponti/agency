import React from "react";

const alignMap = {
  center: "text-center items-center",
  left: "text-left items-start",
  right: "text-right items-end",
};

export default function SectionHeading({
  title,
  description,
  align = "center",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}) {
  return (
    <div className={`flex flex-col ${alignMap[align] ?? alignMap.center} ${className}`}>
      <h1 className={`text-2xl font-extrabold leading-tight text-[#0c0c1d] dark:text-gray-200 sm:text-[32px] ${titleClassName}`}>
        {title}
      </h1>

      {description && (
        <p className={`mt-4 max-w-[560px] text-sm font-medium leading-6 text-[#8a8da3] sm:text-[15px] ${descriptionClassName}`}>
          {description}
        </p>
      )}
    </div>
  );
}
