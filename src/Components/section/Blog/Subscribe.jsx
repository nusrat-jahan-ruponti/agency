import { useState } from "react";
import Container from "../../ui/Container";

const options = [
  "Daily Newsletter",
  "Advertising Updates",
  "Week in Review",
  "Event Updates",
  "Startups Weekly",
  "Podcasts",
];

const Squiggle = () => (
  <svg className="h-12 w-14 text-indigo-500" viewBox="0 0 60 56" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 30C6 12 20 4 30 6c9 2 10 14 2 18-8 4-14-4-8-10 6-6 20-4 24 8 2 7 0 14-4 20" />
    <path d="M44 42l1.5 8 7.5-2.5" />
  </svg>
);

const MailIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export default function Subscribe() {
  const [selected, setSelected] = useState(["Advertising Updates"]);
  const [email, setEmail] = useState("");

  const toggle = (name) =>
    setSelected((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, newsletters: selected });
    setEmail("");
  };

  return (
    <section className="bg-[#f3f5ff] py-20 dark:bg-gray-900">
      <Container>
        <div className="mx-auto max-w-4xl">
          {/* Heading */}
          <div className="flex items-start gap-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Don’t Want to Miss Anything?
            </h2>
            <Squiggle />
          </div>

          {/* Newsletter options */}
          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
            <h3 className="shrink-0 text-lg font-bold leading-7 text-gray-900 dark:text-white md:w-48">
              Sign up for <br className="hidden md:block" /> Newsletters
            </h3>

            <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {options.map((name) => {
                const checked = selected.includes(name);
                return (
                  <label key={name} className="flex cursor-pointer items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggle(name)}
                      className="peer sr-only"
                    />
                    <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[3px] border-2 border-gray-300 bg-transparent transition-colors peer-checked:border-indigo-500 peer-checked:bg-indigo-500 peer-focus-visible:ring-2 peer-focus-visible:ring-indigo-500 peer-focus-visible:ring-offset-2 dark:border-gray-600">
                      {checked && (
                        <svg className="h-3 w-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5 9-10" />
                        </svg>
                      )}
                    </span>
                    {name}
                  </label>
                );
              })}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="mt-14 flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <MailIcon />
              </span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="h-[52px] w-full rounded-lg border border-gray-200 bg-white pl-12 pr-4 text-base text-gray-800 outline-none placeholder:text-gray-400 focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
              />
            </div>
            <button
              type="submit"
              className="h-[52px] rounded-lg bg-indigo-500 px-8 text-base font-semibold text-white transition-colors hover:bg-indigo-600"
            >
              Subscribe *
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-400">
            <span className="text-indigo-500">*</span> Yes, I agree to the{" "}
            <a href="#" className="text-indigo-500 underline">terms</a> and{" "}
            <a href="#" className="text-indigo-500 underline">privacy policy</a>.
          </p>
        </div>
      </Container>
    </section>
  );
}