import Container from "../ui/Container";

const curves = [
  { dx: 0, o: 0.9 },
  { dx: 55, o: 0.65 },
  { dx: 112, o: 0.4 },
  { dx: 172, o: 0.22 },
];

function LeftLines() {
  return (
    <svg
      className="absolute left-0 top-0 h-full w-auto pointer-events-none"
      viewBox="0 0 400 406"
      preserveAspectRatio="xMinYMin slice"
      fill="none"
      aria-hidden="true"
    >
      {curves.map(({ dx, o }, i) => (
        <path
          key={i}
          d={`M${62 + dx} -10 L${100 + dx} 62 Q${128 + dx} 112 ${84 + dx} 140 L-20 ${205 + dx * 0.55}`}
          stroke="white"
          strokeOpacity={o}
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

function Rays() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
      style={{
        background:
          "repeating-conic-gradient(from 180deg at 100% 0%, rgba(255,255,255,0.10) 0deg 3deg, transparent 3deg 6deg)",
        WebkitMaskImage: "radial-gradient(circle at 100% 0%, #000 0%, transparent 65%)",
        maskImage: "radial-gradient(circle at 100% 0%, #000 0%, transparent 65%)",
      }}
    />
  );
}

export default function Contact({
  text = "Want to work with us? Let’s talk",
  email = "example@gmail.com",
  buttonText = "Contact us",
  href,
  onClick,
}) {
  return (
    <Container className="py-12">
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-6 py-16 md:py-24 text-center">
        <LeftLines />
        <Rays />

        <div className="relative">
          <p className="text-lg md:text-xl text-white/70">{text}</p>

          <a
            href={`mailto:${email}`}
            className="inline-block mt-6 text-3xl md:text-4xl font-extrabold text-white underline underline-offset-4 decoration-2 break-all"
          >
            {email}
          </a>

          <div className="mt-12">
            <a
              href={href}
              onClick={onClick}
              className="inline-block rounded-md bg-white px-8 py-3.5 text-[15px] font-medium text-slate-800 shadow-[0_8px_24px_rgba(60,40,160,0.25)] hover:-translate-y-0.5 transition"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
}