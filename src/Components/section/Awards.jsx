import Container from "../ui/Container";

const WebbyLogo = () => (
  <svg viewBox="0 0 100 48" className="h-12 w-auto" fill="currentColor" aria-label="The Webby Awards">
    {[0, 6, 12, 18, 24, 30, 36].map((y) => (
      <rect key={y} x="2" y={4 + y} width="20" height="3.5" rx="1" />
    ))}
    <rect x="2" y="42" width="20" height="3" rx="1" />
    <text x="30" y="14" fontSize="7" fontWeight="600">THE</text>
    <text x="30" y="30" fontSize="17" fontWeight="800">WeBBY</text>
    <text x="30" y="42" fontSize="8" fontWeight="600" letterSpacing="1">AWARDS</text>
  </svg>
);

const CssdaLogo = () => (
  <svg viewBox="0 0 70 48" className="h-12 w-auto" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" aria-label="CSSDA">
    <path d="M2 14 L22 2 H68 V16 L48 28 H2 Z" fill="currentColor" stroke="none" opacity=".35" />
    <path d="M2 14 L22 2 H68 M2 14 H48 L68 2 M48 30 L68 18 V30 L48 44 H2 V30 Z" />
    <text x="14" y="23" fontSize="12" fontWeight="800" fill="currentColor" stroke="none">CSSDA</text>
  </svg>
);

const WLogo = () => (
  <svg viewBox="0 0 90 48" className="h-12 w-auto" fill="currentColor" aria-label="Awwwards">
    <text x="0" y="44" fontSize="56" fontWeight="800">W.</text>
  </svg>
);

const FwaLogo = () => (
  <svg viewBox="0 0 84 36" className="h-10 w-auto" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-label="FWA">
    <path d="M8 10 H30 M8 18 H24 M8 10 V28" />
    <path d="M30 10 L36 28 L42 14 L48 28 L54 10" />
    <path d="M62 28 L70 10 L78 28 M65 22 H75" />
    <rect x="2" y="3" width="80" height="30" rx="14" strokeWidth="2.5" opacity=".6" />
  </svg>
);

const defaultAwards = [
  { logo: <WebbyLogo />, label: "4x mobile of the day" },
  { logo: <CssdaLogo />, label: "1x Kudos" },
  { logo: <WLogo />, label: "3x website of the day" },
  { logo: <FwaLogo />, label: "2x best website" },
];

export default function Awards({
  title = (
    <>
      Award-winning designs
      <br />
      featured by
    </>
  ),
  awards = defaultAwards,
}) {
  return (
    <Container className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
        <h2 className="text-3xl font-extrabold leading-tight text-slate-900 lg:w-[360px] shrink-0 dark:text-gray-200">
          {title}
        </h2>

        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-1">
          {awards.map((a, i) => (
            <li key={i} className="flex flex-col items-center text-center">
              <div className="h-14 flex items-center justify-center text-slate-300">
                {a.logo}
              </div>
              <span className="mt-3 text-sm text-slate-500 whitespace-nowrap">
                {a.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}