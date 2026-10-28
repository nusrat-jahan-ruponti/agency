import { Link } from "react-router-dom";

const HomeIcon = () => (
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
    <path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
  </svg>
);

const Separator = () => <span className="text-slate-400">»</span>;

export default function ServiceHero({
  title,
  description,
  buttonText = "Start your project",
  buttonHref = "/contact",
  breadcrumb = [
    { label: "Homepage", to: "/" },
    { label: "Services Page", to: "/services" },
    { label: "Single Service" },
  ],
}) {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="pt-10 text-sm">
          <ol className="flex flex-wrap items-center gap-3">
            {breadcrumb.map((b, i) => {
              const last = i === breadcrumb.length - 1;
              return (
                <li key={b.label} className="flex items-center gap-3">
                  {i > 0 && <Separator />}
                  {last ? (
                    <span className="text-indigo-500">{b.label}</span>
                  ) : (
                    <Link
                      to={b.to}
                      className="flex items-center gap-1.5 text-slate-400 transition hover:text-indigo-500"
                    >
                      {i === 0 && <HomeIcon />}
                      {b.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Title + description */}
        <div className="grid items-start gap-10 border-b border-slate-200 py-16 dark:border-slate-800 md:grid-cols-2 md:gap-16 md:py-20">
          <h1 className="text-5xl font-extrabold leading-[1.15] text-slate-900 dark:text-white md:text-[56px]">
            {title}
          </h1>

          <div className="md:pt-3">
            <p className="text-lg leading-8 text-slate-500 dark:text-slate-400">
              {description}
            </p>
            <Link
              to={buttonHref}
              className="mt-8 inline-block rounded-md bg-indigo-500 px-8 py-3.5 font-medium text-white shadow-lg shadow-indigo-300/60 transition hover:bg-indigo-600"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}