export default function CTA({
  eyebrow = "Ready to get started?",
  title = "Launch Your Project with Us",
  buttonText = "",
  href = "#",
}) {
  return (
    <section className="w-full bg-[#1a1d26] px-6 py-24 font-[Manrope,ui-sans-serif,system-ui,sans-serif]">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="text-lg font-light text-gray-400">{eyebrow}</p>
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-tight">
          {title}
        </h2>
        <a
          href={href}
          aria-label={buttonText}
          className="mt-12 inline-flex h-[52px] w-[162px] items-center justify-start overflow-hidden rounded-lg bg-white p-0 shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:shadow-indigo-500/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
        >
          <span className="flex h-full w-16 shrink-0 items-center justify-center rounded-lg bg-[#6366f1] transition-all duration-300 hover:bg-[#7477ff]">
            <span className="text-sm font-medium text-white">{buttonText}</span>
          </span>
        </a>        
      </div>
    </section>
  );
}
