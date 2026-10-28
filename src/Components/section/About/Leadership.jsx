import Container from "../../ui/Container";
import leader from "../../../assets/leader.png"
import leader1 from "../../../assets/leader1.png"

const TEAM = [
  { name: "Jenny Wilson", role: "Founder & CEO", image: leader },
  { name: "Ralph Edwards", role: "Co-Founder", image: leader1},
  { name: "Cameron Williamson", role: "Strategic Advisor", image: "" },
  { name: "Jerome Bell", role: "Marketing Specialist", image: "" },
  { name: "Marvin McKinney", role: "Product Manager", image: "" },
  { name: "Esther Howard", role: "VP of Strategy", image: "" },
  { name: "Darrell Steward", role: "Senior Project Manager", image: "" },
  { name: "Jane Cooper", role: "Principal Consultant", image: "" },
];

export default function Leadership() {
  return (
    <Container className="mb-[112px]">
      <h2 className="text-center text-[40px] font-bold leading-tight text-gray-900 dark:text-white mt-[112] mb-[112px]">
        Our Leadership
      </h2>

      <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {TEAM.map((p) => (
          <li key={p.name} className="text-center">
            <div className="h-80 w-full overflow-hidden rounded-md bg-slate-100 dark:bg-gray-800">
              {p.image && (
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-gray-900 dark:text-white">
              {p.name}
            </h3>
            <p className="mt-2 text-sm text-slate-500 dark:text-gray-400">
              {p.role}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
}
