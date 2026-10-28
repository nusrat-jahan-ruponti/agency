import { useEffect, useState } from "react";
import cover from "../../../assets/cover.png";
import cover1 from "../../../assets/cover (1).png";
import cover2 from "../../../assets/cover (2).png";
import cover3 from "../../../assets/cover (3).png";
import cover4 from "../../../assets/cover (4).png";
import cover5 from "../../../assets/cover (5).png";
import Container from "../../ui/Container";
import Pagination from "../../ui/Pagination";
const defaultProjects = [
  {
    id: 1,
    title: "Astronaut & Flashing Neon Lights",
    categories: ["Graphic Design", "Art", "Motion Design"],
    image: cover,
  },
  {
    id: 2,
    title: "Scene of Sunglasses & Headphone on Human Head",
    categories: ["NFT", "Graphic Design", "Art", "Identity", "Motion Design"],
    image: cover1,
  },
  {
    id: 3,
    title: "Plaster Antique Sculpture in a Pop Art Style",
    categories: ["Graphic Design", "Art", "Branding"],
    image: cover2,
  },
  {
    id: 4,
    title: "Big Blue Whale Shape",
    categories: ["Graphic Design", "Motion Design"],
    image: cover3,
  },
  {
    id: 5,
    title: "3D Shape Illustration",
    categories: ["Graphic Design", "Art"],
    image: cover4,
  },
  {
    id: 6,
    title: "Mannequin Hands Holding Phone",
    categories: ["UI / UX", "Graphic Design", "Branding"],
    image: cover5,
  },
];

function ChevronRight() {
  return (
    <svg
      className="h-3.5 w-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

function ProjectCard({ project, narrow }) {
  return (
    <article className={`group ${narrow ? "lg:col-span-5" : "lg:col-span-7"}`}>
      <a href={project.href ?? "#"} className="block focus:outline-none">
        <div className="overflow-hidden rounded-lg bg-gray-100">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-64 w-full object-cover sm:h-80 lg:h-[420px]"
          />
        </div>

        <h3 className="mt-6 text-xl font-bold leading-snug text-[#3b3a52] transition-colors group-hover:text-[#5b5fe8] group-focus-visible:text-[#5b5fe8] lg:text-2xl dark:text-gray-200">
          {project.title}
        </h3>

        <p className="mt-2 min-h-[1.5rem] text-sm font-light text-gray-400 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          {project.categories.join(" / ")}
        </p>
      </a>
    </article>
  );
}

export default function ProjectGrid({
  projects = defaultProjects,
  activeCategory = "All Works",
  pageSize = 6,
}) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [activeCategory]);

  const filtered =
    activeCategory === "All Works"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const visible = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <Container className="bg-white dark:bg-gray-900">
      {visible.length === 0 ? (
        <p className="py-20 text-center text-gray-500"></p>
      ) : (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-12">
          {visible.map((project, i) => {
            const row = Math.floor(i / 2);
            const isLeft = i % 2 === 0;

            const narrow = isLeft === (row % 2 === 0);
            return (
              <ProjectCard key={project.id} project={project} narrow={narrow} />
            );
          })}
        </div>
      )}

      {totalPages > 1 && (
        <div className="w-full">
          <Pagination
            total={totalPages}
            page={page}
            onChange={setPage}
            align="left"
          />
        </div>
      )}
    </Container>
  );
}
