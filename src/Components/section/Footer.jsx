import { useState } from "react";
import logoImg from '../../assets/solid.png'
import Container from "../ui/Container";

const mainLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Services", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "Blog", href: "#" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const socialLinks = [
  { label: "Facebook", href: "#" },
  { label: "Linkedin", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
];

const LogoMark = () => (
  <span className="relative inline-flex h-11 w-11 items-center justify-center">
    <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="si-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366f1" />
          <stop offset="1" stopColor="#d946ef" />
        </linearGradient>
      </defs>
      <path d="M24 2l17 9 5 17-12 16H14L2 28l5-17z" fill="url(#si-grad)" />
    </svg>
    <span className="relative text-sm font-extrabold text-white">Si</span>
    <span className="absolute right-1 top-1 text-[7px] font-bold text-white">14</span>
  </span>
);

const MailIcon = () => (
  <svg
    className="h-5 w-5 text-slate-400"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinejoin="round"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const linkClass = "text-slate-700 hover:text-indigo-500 transition";

function LinkList({ items }) {
  return (
    <ul className="space-y-4">
      {items.map((l) => (
        <li key={l.label} className=" dark:invert">
          <a href={l.href} className={linkClass}>
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer({
  brand = "",
  logo = <img src={logoImg} alt="" className=" dark:invert" />,
  description = "Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor ullamcorper sodales ultrices eros.",
  email = "example@gmail.com",
  copyright = "2021. All rights reserved. Silicon Template",
  onSubscribe,
}) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubscribe?.(value);
    setValue("");
  };

  return (
    <footer className="bg-white dark:bg-gray-900">
      <Container className="pt-16 pb-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
        
          <div>
            <a href="#" className="inline-flex items-center gap-2">
              {logo}
              <span className="text-xl font-bold text-slate-900">{brand}</span>
            </a>

            <p className="mt-5 text-sm leading-[22px] text-slate-500">{description}</p>

            <div className="mt-14">
              <label htmlFor="newsletter" className="text-sm font-semibold text-slate-900">
                Subscribe to our newsletter
              </label>
              <form onSubmit={handleSubmit} className="mt-3 flex">
                <div className="flex flex-1 items-center gap-3 rounded-l-md border border-r-0 border-slate-200 px-4">
                  <MailIcon />
                  <input
                    id="newsletter"
                    type="email"
                    required
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Your Email"
                    className="h-[42px] w-full min-w-0 bg-transparent text-sm text-slate-700 placeholder:text-slate-300 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-r-md bg-indigo-500 px-7 text-sm font-medium text-white hover:bg-indigo-600 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:pl-20">
            <div>
              <LinkList items={mainLinks} />
              <div className="mt-12">
                <LinkList items={legalLinks} />
              </div>
            </div>

            <div>
              <LinkList items={socialLinks} />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <div className="font-medium text-slate-900">Contact Us</div>
              <a
                href={`mailto:${email}`}
                className="mt-4 inline-block text-indigo-500 underline break-all"
              >
                {email}
              </a>
            </div>
          </div>
        </div>

        <p className="mt-16 text-xs text-slate-400">{copyright}</p>
      </Container>
    </footer>
  );
}