import Container from "../../ui/Container";

const defaultSteps = [
  {
    id: 1,
    title: "Identifying the problem",
    text: "Massa enim libero dictumst consectetur in convallis lobortis cursus mi a magna ullamcorper consectetur.",
  },
  {
    id: 2,
    title: "Conducting a research",
    text: "At ultricies id non quisque integer eget velit. Facilisis enim malesuada metus, risus amet ultricies magna aliquam.",
  },
  {
    id: 3,
    title: "Creating low-fidelity prototypes",
    text: "Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque vestibulum facilisis dictumst consequat.",
  },
  {
    id: 4,
    title: "Building an MVP version",
    text: "Massa enim libero dictumst consectetur in convallis lobortis cursus mi a magna ullamcorper consectetur.",
  },
];

export default function HowWeWork({
  title = "How We Work?",
  steps = defaultSteps,
}) {
  return (
    <Container className="mt-[96px] mb-[112px]">
      <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">
        {title}
      </h2>

      <ol className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {steps.map((step, i) => (
          <li key={step.id} className="relative lg:pr-10">
           
            {i !== steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-20 right-0 top-10 hidden h-px bg-slate-200 dark:bg-slate-800 lg:block"
              />
            )}

           
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#f3f6ff] dark:bg-gray-900">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-xl font-bold text-slate-900 shadow-[0_6px_16px_rgba(60,70,140,0.12)] dark:bg-gray-800 dark:text-white">
                {step.id}
              </span>
            </div>

            <h3 className="mt-10 max-w-[240px] text-2xl font-bold leading-8 text-slate-900 dark:text-white">
              {step.title}
            </h3>
            <p className="mt-4 max-w-[240px] text-[15px] leading-[26px] text-slate-500 dark:text-slate-400">
              {step.text}
            </p>
          </li>
        ))}
      </ol>
    </Container>
  );
}