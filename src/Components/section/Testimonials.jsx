import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import Container from "../ui/Container";
import testimonial from "../../assets/testimonial.png";

const defaultItems = [
  {
    name: "Sarah Johnson",
    role: "CEO, Acme Inc.",
    image: "/images/sarah.jpg",
    text: "Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Product Designer",
    image: "/images/michael.jpg",
    text: "Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris.",
    rating: 5,
  },
  {
    name: "Ralph Edwards",
    role: "Head of Marketing",
    image: "/images/ralph.jpg",
    text: "Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa. Tortor ullamcorper lacus. Pellentesque lectus adipiscing aenean volutpat tortor habitant.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Operations Lead",
    image: "/images/emily.jpg",
    text: "Sagittis gravida vitae porta enim, nulla arcu fermentum massa. Tortor ullamcorper lacus. Pellentesque lectus adipiscing aenean volutpat tortor habitant.",
    rating: 5,
  },
];

const Star = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
    <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8 4.8 17.6l1-5.8L1.5 7.7l5.9-.9z" />
  </svg>
);

const Chevron = ({ dir }) => (
  <svg
    className="w-3 h-3"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
  >
    <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
  </svg>
);

export default function Testimonials({
  title = "What They Say About Us",
  items = defaultItems,
  logo = <span className="text-2xl font-extrabold tracking-wider">LOGO</span>,
  initialIndex = 2,
}) {
  const [current, setCurrent] = useState(initialIndex);
  const t = items[current];

  const go = (i) => {
    if (i >= 0 && i < items.length) setCurrent(i);
  };

  const btn =
    "w-9 h-9 rounded-md flex items-center justify-center text-sm font-medium transition";

  return (
    <Container className="">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-slate-900 mb-14 dark:text-gray-200">
        {title}
      </h2>

      <div className="grid md:grid-cols-[1fr_380px] gap-10 md:gap-16 items-start">
        <div>
          <div className="relative pt-5">
            <div className="absolute left-12 top-0 z-10 w-[52px] h-[52px] rounded-xl bg-indigo-500 shadow-lg shadow-indigo-300 flex items-center justify-center text-white text-5xl font-extrabold leading-none pt-3">
              “
            </div>
            <div className="rounded-lg bg-white dark:bg-gray-900 shadow-[0_6px_24px_rgba(30,30,80,0.08)] px-12 pt-14 pb-10">
              <p className="text-slate-600 text-[17px] leading-8">{t.text}</p>
              <div className="flex gap-1 mt-6 text-amber-400">
                {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-2 mt-10 text-slate-700">
            <button
              onClick={() => go(current - 1)}
              className={`${btn} hover:bg-indigo-50`}
              aria-label="Previous"
            >
              <Chevron dir="left" />
            </button>
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className={`${btn} ${
                  i === current
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-300"
                    : "hover:bg-indigo-50"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => go(current + 1)}
              className={`${btn} hover:bg-indigo-50`}
              aria-label="Next"
            >
              <Chevron dir="right" />
            </button>
          </nav>
        </div>
        <div className="w-full min-w-0">
          <div className="w-full overflow-hidden rounded-xl">
            <img
              src={testimonial}
              alt={t.name}
              className="block h-auto w-full max-w-full object-contain"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-6 md:mt-8">
            <div className="text-slate-300 border-r border-slate-200 pr-6 py-2">
              {logo}
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900 dark:text-gray-200">{t.name}</div>
              <div className="text-sm text-slate-400">{t.role}</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
