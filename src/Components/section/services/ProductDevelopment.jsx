import Container from "../../ui/Container";

const Check = () => (
  <svg
    className="h-4 w-4 shrink-0 text-indigo-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12.5l4.500 4.500L19 7.500" />
  </svg>
);

const defaultList = [
  "Quis euismod lacus, at consectetur porta",
  "Dictumst enim lectus dis eget non metus cras",
  "Risus volutpat tellus hendrerit nibh",
];


function Phone({ screen }) {
  return (
    <div className="relative mx-auto w-[254px]">
      
      <div className="rounded-t-[46px] bg-gradient-to-b from-slate-300 via-slate-100 to-slate-300 p-[3px] shadow-[0_0_0_1px_rgba(0,0,0,0.15)]">
       
        <div className="rounded-t-[43px] bg-black p-[8px]">
          
          <div className="relative h-[330px] overflow-hidden rounded-t-[36px] bg-[#0b0f19]">
           
            <div className="absolute left-1/2 top-0 z-10 flex h-[26px] w-[124px] -translate-x-1/2 items-center justify-center gap-3 rounded-b-[16px] bg-black">
              <span className="h-[3px] w-10 rounded-full bg-slate-700" />
              <span className="h-2 w-2 rounded-full border border-slate-600 bg-slate-800" />
            </div>
            {screen}
          </div>
        </div>
      </div>

      
      <span className="absolute -left-[2px] top-[62px] h-4 w-[3px] rounded-l bg-slate-300" />
      <span className="absolute -left-[2px] top-[100px] h-10 w-[3px] rounded-l bg-slate-300" />
      <span className="absolute -left-[2px] top-[150px] h-10 w-[3px] rounded-l bg-slate-300" />
      <span className="absolute -right-[2px] top-[118px] h-16 w-[3px] rounded-r bg-slate-300" />
    </div>
  );
}

export default function ProductDevelopment({
  title = "Product development with the best experience",
  text = "We create diverse, complex, web and mobile solutions for any business need. With us you get quality software and perfect service every time. Quisque integer eget velit facilisis enim malesuada metus, risus amet ultricies.",
  list = defaultList,
  screen, 
  imagePosition = "right", 
}) {
  const imageRight = imagePosition === "right";

  return (
    <Container className="mb-[112px]">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        {/* লেখা */}
        <div className={imageRight ? "" : "lg:order-2"}>
          <h2 className="max-w-[520px] text-4xl font-extrabold leading-[1.2] text-slate-900 dark:text-white md:text-[44px]">
            {title}
          </h2>
          <p className="mt-6 max-w-[580px] text-base leading-[26px] text-slate-500 dark:text-slate-400">
            {text}
          </p>

          <ul className="mt-8 space-y-3.5">
            {list.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-base text-slate-600 dark:text-slate-300"
              >
                <Check />
                {item}
              </li>
            ))}
          </ul>
        </div>

       
        <div
          className={`flex h-[430px] items-end overflow-hidden rounded-lg bg-[#f3f6ff] pt-28 dark:bg-gray-900 ${
            imageRight ? "" : "lg:order-1"
          }`}
        >
          <div className="w-full">
            <Phone screen={screen} />
          </div>
        </div>
      </div>
    </Container>
  );
}