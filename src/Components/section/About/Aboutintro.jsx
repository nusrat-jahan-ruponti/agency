import clutchLog from "../../../assets/clutch.png";
import Container from "../../ui/Container";

const Star = () => (
  <svg viewBox="0 0 20 20" className="h-[18px] w-[18px] fill-[#f5474f]" aria-hidden="true">
    <path d="m10 1.5 2.5 5.6 6.1.6-4.6 4.1 1.3 6-5.3-3.1-5.3 3.1 1.3-6L1.4 7.7l6.1-.6L10 1.5Z" />
  </svg>
);

const DEFAULT_STATS = [
  { value: "2,480", bold: "Remote", text: " Sales", sub: "Experts" },
  { value: "1,200", bold: "Requests", sub: "per Week" },
  { value: "760", bold: "New Clients", sub: "per Month" },
];

export default function AboutIntro({
  title = "About Silicon",
  description = "We are a dedicated team of passionate product managers, full stack developers, UX/UI designers, QA engineers and marketing experts helping businesses of every size — from new startups to public companies — launch their projects using our software.",
  clutchLogo = clutchLog,
  reviewCount = 49,
  reviewHref = "#",
  stats = DEFAULT_STATS,
}) {
  return (
    <Container>
    <section className="max-w-[526px] text-gray-900 dark:text-white">
      <h1 className="text-[44px] font-bold leading-tight tracking-tight">{title}</h1>

      <p className="mt-5 text-[22px] leading-8 text-slate-500 dark:text-gray-400">
        {description}
      </p>

    
      <a href={reviewHref} className="mt-12 flex items-center gap-4 no-underline">
        <div className="min-h-[56px] min-w-[88px]">
          {clutchLogo && <img src={clutchLogo} alt="Reviewed on Clutch" className="h-14 w-auto dark:invert" />}
        </div>
        <div>
          <div className="flex gap-1" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} />
            ))}
          </div>
          <p className="mt-1 text-base text-slate-500 dark:text-gray-400">{reviewCount} reviews</p>
        </div>
      </a>

  
      <dl className="mt-16 grid grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.value}>
            <dt className="text-[34px] font-bold leading-tight">{s.value}</dt>
            <dd className="mt-2 text-lg leading-7 text-slate-500 dark:text-gray-400">
              <span className="font-bold text-slate-600 dark:text-gray-300">{s.bold}</span>
              {s.text}
              <br />
              {s.sub}
            </dd>
          </div>
        ))}
      </dl>
    </section>
    </Container>
  );
}