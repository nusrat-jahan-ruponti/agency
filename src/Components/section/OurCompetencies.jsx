import { useState } from "react";
import SectionHeading from "../ui/SectionHeading";
import webDevImg from "../../assets/image.png";
import Container from "../ui/Container";

const LOREM =
  "Vitae varius euismod egestas egestas lacus. Augue vitae arcu sollicitudin metus iaculis amet, eu at amet. Netus pulvinar tristique ridiculus sed. Viverra ut viverra aenean nisl. Tortor lorem cum congue a. Orci mattis massa tortor magna massa nisi, aliquet risus. Ornare cras aenean pellentesque quam pulvinar at. Libero mollis tortor erat sed. Adipiscing lectus nisi commodo vel. Id augue vitae, hendrerit iaculis.";

const items = [
  { title: "Digital Marketing", text: LOREM, image: null },
  { title: "Web Development", text: LOREM, image: webDevImg },
  { title: "Application Development", text: LOREM, image: null },
  { title: "Strategy", text: LOREM, image: null },
  { title: "Digital Advertising", text: LOREM, image: null },
];

function Chevron({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function OurCompetencies() {

  const [openIndex, setOpenIndex] = useState(1);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    
    <section className="bg-[#f3f6ff] dark:bg-gray-900 max-w-7xl mx-auto mb-25 py-25">
        <Container>

        <SectionHeading
        title="Our Competencies"
        description="We fully understand your business. If you need to update something, we are more than happy to help you with the services we are providing."
        className=""
        />

          <div className="mx-auto mt-10 flex max-w-[856px] flex-col gap-4">
        {items.map((item, i) => {
          const open = openIndex === i;
          return (
            <div
              key={item.title}
              className="rounded-lg bg-white dark:bg-gray-900 shadow-[0_2px_8px_rgba(60,70,120,0.08)]"
            >
             
              <button
                type="button"
                onClick={() => toggle(i)}
                aria-expanded={open}
                className="flex h-[68px] w-full items-center justify-between px-6 text-left"
              >
                <span className="text-xl font-medium text-[#0b0f18] dark:text-gray-200">{item.title}</span>
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-300 ${
                    open ? "bg-[#6366f1] text-white shadow-md shadow-indigo-300" : "bg-[#f3f6ff] text-[#0b0f18]"
                  }`}
                >
                  <Chevron open={open} />
                </span>
              </button>

              
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="flex flex-col gap-6 px-6 pb-[22px] pt-[22px] md:flex-row md:items-start md:gap-10">
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-[180px] w-[200px] shrink-0 object-contain"
                      />
                    )}
                    <p className="text-base leading-[26px] text-[#5b5f7e] md:pt-0">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
          </div>
        </Container>
    </section>
   
  );
}