import { Link } from "react-router-dom";
import {
  MonitorCog,
  Rocket,
  Smartphone,
  LineChart,
  SearchCheck,
  Timer,
} from "lucide-react";
import Container from "../../ui/Container";

const iconProps = { className: "h-10 w-10 text-white", strokeWidth: 1.5 };

const icons = {
  software: <MonitorCog {...iconProps} />,
  integration: <Rocket {...iconProps} />,
  mobile: <Smartphone {...iconProps} />,
  analytics: <LineChart {...iconProps} />,
  testing: <SearchCheck {...iconProps} />,
  management: <Timer {...iconProps} />,
};

export const defaultServices = [
  {
    id: 1,
    slug: "custom-software-development",
    title: "Custom Software Development",
    icon: icons.software,
    text: "Nisi, dis sed cursus eget pellentesque mattis. Odio eu proin aliquam a. Semper bibendum tellus non tellus, facilisi dignissim in quam massa. Aliquam, feugiat ut cum tellus, sit. Quis consectetur gravida ac ac lectus cursus egestas.",
  },
  {
    id: 2,
    slug: "software-integration",
    title: "Software Integration",
    icon: icons.integration,
    slug: "software-integration",
    text: "Id eget blandit sapien cras massa lectus lorem placerat. Quam dolor commodo fermentum bibendum dictumst. Risus pretium eget at viverra eget. Sit neque adipiscing malesuada blandit justo, quam.",
  },
  {
    id: 3,
    slug: "mobile-app-development",
    title: "Mobile App Development",
    icon: icons.mobile,
    href: "#",
    text: "Nunc, justo, diam orci, dictum purus convallis risus. Suscipit hendrerit at egestas id id blandit interdum est. Integer fames placerat turpis pretium quis hac leo lacus. Orci, dictum nunc mus quis semper eu bibendum enim, morbi.",
  },
  {
    id: 4,
    slug: "business-analytics",
    title: "Business Analytics",
    icon: icons.analytics,
    href: "#",
    text: "Gravida eget euismod tempus diam dignissim quam. Dignissim magnis blandit faucibus convallis augue nisl, etiam. Feugiat ut molestie non arcu senectus sed. Diam pellentesque sit mattis nec amet varius nunc a sed.",
  },
  {
    id: 5,
    slug: "software-testing",
    title: "Software Testing",
    icon: icons.testing,
    href: "#",
    text: "Quis rhoncus quam venenatis facilisi. Risus dis libero nisl condimentum quis. Tincidunt ultricies vulputate ornare nunc rhoncus in. Ultrices dolor eu natoque volutpat praesent curabitur ultricies.",
  },
  {
    id: 6,
    slug: "project-management",
    title: "Project Management",
    icon: icons.management,
    href: "#",
    text: "Massa dis morbi sagittis, tellus sit gravida. Id ut non ut in faucibus eu, ac. Tempus feugiat enim id pellentesque a sagittis vitae, convallis. Nunc, arcu enim orci ullamcorper aenean. Scelerisque eget a nibh bibendum commodo.",
  },
];

const ArrowCircle = () => (
  <svg
    className="h-6 w-6 shrink-0 text-indigo-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M7.500 12h9M13 8.500l3.500 3.500-3.500 3.500" />
  </svg>
);

export default function ServicesList({ services = defaultServices }) {
  return (
    <Container className="bg-[#F3F6FF] dark:bg-gray-900  py-20">
      <h1 className="text-[40px] font-extrabold pb-10">Services Page</h1>
      <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
        {services.map((s) => (
          <article
            key={s.id}
            className="relative mt-10 rounded-lg bg-white dark:bg-gray-900  px-6 sm:px-10 pb-10 pt-16 shadow-[0_4px_24px_rgba(60,70,140,0.08)]"
          >
            <div className="absolute -top-10 left-6 sm:left-10 flex h-20 w-20 items-center justify-center rounded-lg bg-indigo-500 shadow-lg shadow-indigo-300/60">
              {s.icon}
            </div>

            <h3 className="flex items-center gap-3 text-2xl font-bold text-slate-900">
              <Link
                to={`/services/${s.slug}`}
                className="flex items-center gap-3 hover:text-indigo-500 transition dark:text-gray-200"
              >
                {s.title}
                <ArrowCircle />
              </Link>
            </h3>

            <p className="mt-4 text-sm leading-[22px] text-slate-500">
              {s.text}
            </p>
          </article>
        ))}
      </div>
    </Container>
  );
}
