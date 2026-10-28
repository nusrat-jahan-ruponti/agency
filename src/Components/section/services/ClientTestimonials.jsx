import { useState } from "react";

import testimonial from "../../../assets/testimonial.png";
import Container from "../../ui/Container";


const defaultItems = [
  {
    id: 1,
    name: "Ralph Edwards",
    role: "Head of Marketing",
    image: testimonial,
    logo: <span className="text-xl font-extrabold tracking-tight">logoipsum</span>,
    text: "Dolor, a eget elementum, integer nulla volutpat, nunc, sit. Quam iaculis varius mauris magna sem. Egestas sed sed suscipit dolor faucibus dui imperdiet at eget. Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "CEO, Acme Inc.",
    image: testimonial,
    logo: <span className="text-xl font-extrabold tracking-tight">logoipsum</span>,
    text: "Tincidunt imperdiet quis hendrerit aliquam feugiat neque cras sed. Dictum quam integer volutpat tellus, faucibus platea. Pulvinar turpis proin faucibus at mauris. Sagittis gravida vitae porta enim, nulla arcu fermentum massa.",
  },
];

const Chevron = ({ dir }) => (
  <svg
    className="h-3 w-3"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <path d={dir === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
  </svg>
);

export default function ClientTestimonials({
  title = "What Our Clients Say",
  items = defaultItems,
}) {
  const [current, setCurrent] = useState(0);
  const t = items[current];
  const go = (i) => i >= 0 && i < items.length && setCurrent(i);

  const arrowBtn =
    "flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-800 shadow-md transition hover:scale-105 disabled:opacity-40 disabled:hover:scale-100";

  return (
    <Container className="dark:bg-gray-900 ">
      <h2 className="mb-12 text-3xl font-extrabold text-slate-900 md:text-4xl dark:text-gray-200">
        {title}
      </h2>

      <div className="grid items-start gap-10 md:grid-cols-[416px_1fr] md:gap-20">
        
        <div>
          <img
            src={t.image}
            alt={t.name}
            className="aspect-[416/360] w-full bg-sky-100 object-cover dark:bg-gray-900 "
          />
          <div className="mt-8 flex gap-4">
            <button
              type="button"
              onClick={() => go(current - 1)}
              disabled={current === 0}
              aria-label="Previous"
              className={arrowBtn}
            >
              <Chevron dir="left" />
            </button>
            <button
              type="button"
              onClick={() => go(current + 1)}
              disabled={current === items.length - 1}
              aria-label="Next"
              className={arrowBtn}
            >
              <Chevron dir="right" />
            </button>
          </div>
        </div>

        <div className="relative pt-5">
          <div className="absolute left-12 top-0 z-10 flex h-[52px] w-[52px] items-center justify-center rounded-xl bg-indigo-500 pt-3 text-5xl font-extrabold leading-none text-white shadow-lg shadow-indigo-300">
            “
          </div>

          <div className="rounded-lg bg-white dark:bg-gray-900  px-12 pb-10 pt-14 shadow-[0_6px_24px_rgba(30,30,80,0.08)]">
            <p className="text-[17px] leading-8 text-slate-600 dark:text-gray-400">{t.text}</p>

            <div className="mt-8 flex items-center gap-6">
              <div>
                <div className="text-lg font-bold text-slate-900 dark:text-gray-200">{t.name}</div>
                <div className="text-sm text-slate-400">{t.role}</div>
              </div>
              {t.logo && (
                <div className="border-l border-slate-200 py-3 pl-6 text-slate-300">
                  {t.logo}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}