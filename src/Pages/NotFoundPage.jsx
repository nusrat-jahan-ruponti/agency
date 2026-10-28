import { Link } from "react-router-dom";
import Container from "../Components/ui/Container";
import robot from "../assets/robot.png";

const HomeIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11l9-8 9 8" />
    <path d="M5 10v10h14V10" />
    <path d="M10 20v-6h4v6" />
  </svg>
);

export default function NotFoundPage() {
  return (
    <section className="flex min-h-screen flex-col bg-gradient-to-b from-white via-purple-50/50 to-indigo-50/60 dark:from-gray-950 dark:via-gray-950 dark:to-gray-900">
      <Container className="flex flex-1 items-center py-16">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* বাঁ দিক */}
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-7xl">
              Error 404
            </h1>
            <p className="mt-8 max-w-md text-xl leading-9 text-gray-500 dark:text-gray-400">
              The page you are looking for was moved, removed or might never existed.
            </p>
            <Link
              to="/"
              className="mt-10 inline-flex h-[52px] items-center gap-2 rounded-lg bg-indigo-500 px-6 font-medium text-white shadow-lg shadow-indigo-500/30 transition-colors hover:bg-indigo-600"
            >
              <HomeIcon /> Go to homepage
            </Link>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={robot}
              alt="Broken robot illustration"
              className="w-full max-w-[460px] object-contain"
            />
          </div>
        </div>
      </Container>

      <Container>
        <p className="pb-8 text-sm font-medium text-gray-400">
          2021. All rights reserved. Silicon Template
        </p>
      </Container>
    </section>
  );
}