import { useState } from "react";

const defaultServices = [
  "Custom Software Development",
  "Software Integration",
  "Mobile App Development",
  "Business Analytics",
  "Software Testing",
  "Project Management",
];

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const PhoneIcon = () => (
  <svg className="h-5 w-5 shrink-0 text-indigo-500" viewBox="0 0 24 24" {...stroke}>
    <path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    <path d="M15 4a5 5 0 0 1 5 5M15 7.500a1.500 1.500 0 0 1 1.500 1.500" />
  </svg>
);
const MailIcon = () => (
  <svg className="h-5 w-5 shrink-0 text-indigo-500" viewBox="0 0 24 24" {...stroke}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);
const PinIcon = () => (
  <svg className="h-5 w-5 shrink-0 text-indigo-500" viewBox="0 0 24 24" {...stroke}>
    <path d="M12 21s-7-6.200-7-11.500a7 7 0 0 1 14 0C19 14.800 12 21 12 21z" />
    <circle cx="12" cy="9.500" r="2.500" />
  </svg>
);

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18h-6v-7h2.500l.500-3H15V9.500c0-.9.300-1.500 1.600-1.500H18V5.300c-.3 0-1.200-.1-2.200-.1-2.300 0-3.800 1.400-3.800 3.900V11H9.500v3H12v7H3z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 5.900c-.7.300-1.500.500-2.300.600.800-.500 1.500-1.300 1.800-2.200-.8.500-1.700.800-2.600 1a4.100 4.100 0 0 0-7 3.700A11.600 11.600 0 0 1 3.500 4.800a4.100 4.100 0 0 0 1.300 5.500c-.7 0-1.300-.2-1.900-.5 0 2 1.400 3.700 3.300 4.100-.6.200-1.200.2-1.900.1.500 1.600 2 2.800 3.800 2.800A8.200 8.200 0 0 1 2 18.300 11.600 11.600 0 0 0 8.300 20c7.500 0 11.700-6.300 11.700-11.700v-.5c.8-.6 1.500-1.300 2-2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.500 8.500h-3V20h3zM5 3.500a1.800 1.800 0 1 0 0 3.600 1.800 1.800 0 0 0 0-3.600zM20.500 20h-3v-5.600c0-1.400-.5-2.300-1.700-2.300-1 0-1.500.7-1.800 1.300-.1.200-.1.600-.1.900V20h-3s.1-9.300 0-11.500h3v1.600c.4-.7 1.100-1.600 2.700-1.600 2 0 3.900 1.300 3.900 4.100z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 24 24" {...stroke} strokeWidth={2}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.500" cy="6.500" r=".6" fill="currentColor" />
      </svg>
    ),
  },
];

const inputClass =
  "w-full rounded-md border border-slate-200 bg-white px-4 text-slate-800 placeholder:text-slate-300 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100";

const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="mb-2 block text-[15px] font-medium text-slate-900 dark:text-gray-400">
    {children}
  </label>
);

export default function ContactForm({
  title = "Get in Touch",
  description = "Have a project in mind? To request a quote contact us directly or fill out the form and let us know how we can help.",
  contactTitle = "Contact Info",
  phone = "(406) 555-0120",
  email = "example@gmail.com",
  address = "2464 Royal Ln. Mesa,New Jersey 45463",
  services = defaultServices,
  onSubmit,
}) {
  const [form, setForm] = useState({
    service: "",
    name: "",
    email: "",
    message: "",
    agree: false,
  });

  const change = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const submit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
    setForm({ service: "", name: "", email: "", message: "", agree: false });
  };

  return (
    <section className=" mb-6">
      <div className="bg-[#f3f6ff] dark:bg-gray-900  mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
      
        <div className="lg:pt-12">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-gray-200">{title}</h2>
          <p className="mt-8 max-w-md text-base leading-[26px] text-slate-500">{description}</p>

          <h3 className="mt-20 text-3xl font-extrabold text-slate-900 dark:text-gray-200">{contactTitle}</h3>
          <ul className="mt-6 space-y-4 font-medium text-slate-800">
            <li className="flex items-center gap-3 dark:text-gray-200">
              <PhoneIcon />
              {phone}
            </li>
            <li className="flex items-center gap-3 dark:text-gray-200">
              <MailIcon />
              {email}
            </li>
            <li className="flex items-center gap-3 dark:text-gray-200">
              <PinIcon />
              {address}
            </li>
          </ul>

          <div className="mt-16 flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 bg-[#f7f8ff] text-slate-800 transition hover:border-sky-500 hover:bg-sky-500 hover:text-white hover:shadow-lg hover:shadow-sky-300/60"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

       
        <form
          onSubmit={submit}
          className="rounded-lg bg-white dark:bg-gray-900  p-8 shadow-[0_4px_24px_rgba(60,70,140,0.08)]"
        >
          <div>
            <Label htmlFor="service">Service</Label>
            <div className="relative">
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={change}
                required
                className={`${inputClass} h-[52px] appearance-none pr-12 ${
                  form.service ? "" : "text-slate-300 "
                }`}
              >
                <option value="" disabled>
                  Choose the service you are interested in
                </option>
                {services.map((s) => (
                  <option key={s} value={s} className="text-slate-800">
                    {s}
                  </option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-800"
                viewBox="0 0 24 24"
                {...stroke}
                strokeWidth={2.500}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>

          <div className="mt-6">
            <Label htmlFor="name">Full name</Label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={change}
              className={`${inputClass} h-[52px]`}
            />
          </div>

          <div className="mt-6">
            <Label htmlFor="email">Email address</Label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={change}
              className={`${inputClass} h-[52px]`}
            />
          </div>

          <div className="mt-6">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={form.message}
              onChange={change}
              placeholder="Tell us about your project"
              className={`${inputClass} resize-none py-3`}
            />
          </div>

          <label className="mt-7 flex cursor-pointer items-center gap-3 text-slate-500">
            <input
              type="checkbox"
              name="agree"
              required
              checked={form.agree}
              onChange={change}
              className="h-5 w-5 rounded border-slate-300 text-indigo-500 focus:ring-indigo-300"
            />
            <span>
              I agree to the{" "}
              <a href="#" className="text-indigo-500 underline">Terms</a> &amp;{" "}
              <a href="#" className="text-indigo-500 underline">Conditions</a>.
            </span>
          </label>

          <button
            type="submit"
            className="mt-8 rounded-md bg-indigo-500 px-8 py-3.5 font-medium text-white shadow-lg shadow-indigo-300/60 transition hover:bg-indigo-600"
          >
            Send request
          </button>
        </form>
      </div>
    </section>
  );
}