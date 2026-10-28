import { useRef } from "react";
import client1 from "../../assets/logoipsum.png";
import client2 from "../../assets/logoipsum (1).png";
import client3 from "../../assets/logoipsum (2).png";
import client4 from "../../assets/logoipsum (3).png";
import client5 from "../../assets/logoipsum (4).png";
import client6 from "../../assets/logoipsum (5).png";
import Container from "../ui/Container";

const clients = [
  { src: client1, alt: "Client 1" },
  { src: client2, alt: "Client 2" },
  { src: client3, alt: "Client 3" },
  { src: client4, alt: "Client 4" },
  { src: client5, alt: "Client 5" },
  { src: client6, alt: "Client 6" },
];

function Arrow({ direction }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline
        points={direction === "left" ? "15 6 9 12 15 18" : "9 6 15 12 9 18"}
      />
    </svg>
  );
}

export default function TrustedClients({
  title = "Trusted by Awesome Clients",
  align = "left",
}) {
  const centered = align === "center";
  const trackRef = useRef(null);

  const scroll = (dir) => {
    const track = trackRef.current;
    if (!track || !track.firstElementChild) return;
    const step = track.firstElementChild.offsetWidth + 24;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const btn =
    "flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0b0f18] shadow-[0_2px_8px_rgba(60,70,120,0.12)] transition hover:bg-[#6366f1] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500";

  return (
    <Container className="bg-white dark:bg-gray-900 mb-[112px]">
      <div>
        <div
          className={
            centered
              ? "grid grid-cols-[1fr_auto_1fr] items-center gap-4"
              : "flex items-center justify-between gap-4"
          }
        >
          {centered && <div aria-hidden="true" />}

          <h2
            className={`text-2xl font-bold leading-10 text-[#0b0f18] dark:text-white sm:text-[32px] ${
              centered ? "text-center" : ""
            }`}
          >
            {title}
          </h2>

          <div
            className={`flex shrink-0 gap-3 ${
              centered ? "justify-self-end" : ""
            }`}
          >
            <button
              type="button"
              aria-label="Previous"
              onClick={() => scroll(-1)}
              className={btn}
            >
              <Arrow direction="left" />
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => scroll(1)}
              className={btn}
            >
              <Arrow direction="right" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {clients.map((c) => (
            <div
              key={c.alt}
              className="flex h-[100px] shrink-0 basis-[calc((100%-24px)/2)] snap-start items-center justify-center rounded-lg border border-[#e6e8f3] bg-white sm:basis-[calc((100%-48px)/3)] lg:basis-[calc((100%-120px)/6)]"
            >
              <img
                src={c.src}
                alt={c.alt}
                className="max-h-[40%] max-w-[80%] object-contain  dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}