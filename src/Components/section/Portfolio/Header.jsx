import { useState } from "react";
import Container from "../../ui/Container";

const defaultTabs = [
  "All Works",
  "Web Design",
  "Graphic Design",
  "Branding",
  "UI / UX",
  "Motion Design",
];

function HomeIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V20h14V9.5" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

export default function Header({
  title = "Grid View",
  homeLabel = "Homepage",
  homeHref = "/",
  tabs = defaultTabs,
  defaultActive = tabs[0],
  onTabChange,
}) {
  const [active, setActive] = useState(defaultActive);

  const handleClick = (tab) => {
    setActive(tab);
    onTabChange?.(tab);
  };

  return (
    <Container className="w-full bg-white dark:bg-gray-900 mb-10">
      <nav aria-label="Breadcrumb" className="flex items-center gap-3 text-sm">
        <a
          href={homeHref}
          className="flex items-center gap-1.5 text-gray-400 transition hover:text-gray-600"
        >
          <HomeIcon />
          {homeLabel}
        </a>
        <span className="text-gray-400" aria-hidden="true">
          »
        </span>
        <span className="font-medium text-[#5b5fe8]" aria-current="page">
          {title}
        </span>
      </nav>
      <div className="mt-8 flex flex-col gap-6 border-b border-gray-200 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
        <h1 className="pb-3 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          {title}
        </h1>

        <div className="-mb-px overflow-x-auto">
          <ul className="flex min-w-max items-center gap-8" role="tablist">
            {tabs.map((tab) => {
              const isActive = tab === active;
              return (
                <li key={tab} role="presentation">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleClick(tab)}
                    className={`border-b-2 px-1 pb-3 dark:text-gray-400 cursor-pointer text-sm font-medium transition focus:outline-none focus-visible:text-[#5b5fe8] ${
                      isActive
                        ? "border-gray-400 text-[#5b5fe8]"
                        : "border-transparent text-gray-800 hover:text-[#5b5fe8]"
                    }`}
                  >
                    {tab}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
}