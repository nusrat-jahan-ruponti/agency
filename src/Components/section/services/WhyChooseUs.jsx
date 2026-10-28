import Container from "../../ui/Container";


 const accent = "#6366f1";

const Svg = ({ children }) => (
  <svg
    className="h-9 w-9"
    viewBox="0 0 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const Icon24 = () => (
  <Svg>
    <path d="M9 14a13 13 0 0 1 22-3" />
    <path d="M32 6v6h-6" />
    <path d="M31 26a13 13 0 0 1-22 3" />
    <path d="M8 34v-6h6" />
    <text
      x="20"
      y="24"
      textAnchor="middle"
      fontSize="11"
      fontWeight="800"
      fill={accent}
      stroke="none"
    >
      24
    </text>
  </Svg>
);

const IconBoard = () => (
  <Svg>
    <path d="M4 6h32" />
    <rect x="7" y="6" width="26" height="18" rx="1.500" />
    <path d="M20 24v6M20 30l-6 6M20 30l6 6" />
    <path d="M12 19l5-5 4 3 8-7" stroke={accent} />
    <path d="M25 10h4v4" stroke={accent} />
  </Svg>
);

const IconLaptop = () => (
  <Svg>
    <rect x="8" y="8" width="24" height="17" rx="2" />
    <path d="M3 28h34v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z" />
    <path d="M15 21v-4M20 21v-8M25 21v-5" stroke={accent} strokeWidth="2.200" />
  </Svg>
);

const IconChat = () => (
  <Svg>
    <path d="M20 7C12.500 7 6.500 12 6.500 18.300c0 3.300 1.700 6.200 4.300 8.200L9.500 32l5.800-2.800c1.500.4 3 .6 4.700.6 7.500 0 13.500-5 13.500-11.300S27.500 7 20 7z" />
    <circle cx="14" cy="18.500" r="1.300" fill={accent} stroke="none" />
    <circle cx="20" cy="18.500" r="1.300" fill={accent} stroke="none" />
    <circle cx="26" cy="18.500" r="1.300" fill={accent} stroke="none" />
  </Svg>
);

const defaultItems = [
  { id: 1, icon: <Icon24 />, title: "Build a functional prototype in 24 hrs" },
  { id: 2, icon: <IconBoard />, title: "Create an MVP within two weeks" },
  { id: 3, icon: <IconLaptop />, title: "Kickstart software development" },
  { id: 4, icon: <IconChat />, title: "Get 24/7 tech & business support" },
];

export default function WhyChooseUs({
  title = "Why Choose Us?",
  subtitle = "We personalize how we work to fit your project needs. Our approach helps augment innovation.",
  items = defaultItems,
}) {
  return (
    <section className="mb-[112px]">
    <Container>
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl dark:text-gray-200">{title}</h2>
        <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400">{subtitle}</p>
      </div>

      <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <li
            key={item.id}
            className={`flex flex-col items-center py-6 text-center
              ${i !== 0 ? "lg:border-l lg:border-slate-200" : ""}
              ${i % 2 !== 0 ? "sm:border-l sm:border-slate-200 lg:border-l" : ""}`}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#8f94c9] shadow-[0_6px_20px_rgba(80,90,180,0.15)]">
              {item.icon}
            </div>
            <h3 className="mt-8 max-w-[240px] text-lg font-bold leading-7 text-slate-900 dark:text-gray-400">
              {item.title}
            </h3>
          </li>
        ))}
      </ul>
    </Container>
    </section>
  );
}