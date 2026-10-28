import { useState } from "react";
import Container from "../../ui/Container";

const HomeIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 11l9-8 9 8" />
    <path d="M5 10v10h14V10" />
  </svg>
);

const ListIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M9 6h11M9 12h11M9 18h11" />
    <circle cx="4.5" cy="6" r="1" fill="currentColor" />
    <circle cx="4.5" cy="12" r="1" fill="currentColor" />
    <circle cx="4.5" cy="18" r="1" fill="currentColor" />
  </svg>
);

const GridIcon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
    <rect x="4" y="4" width="6" height="6" rx="1" />
    <rect x="14" y="4" width="6" height="6" rx="1" />
    <rect x="4" y="14" width="6" height="6" rx="1" />
    <rect x="14" y="14" width="6" height="6" rx="1" />
  </svg>
);

const ChevronIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const SearchIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="11" cy="11" r="7" />
    <path d="M20 20l-3.5-3.5" />
  </svg>
);

export default function BlogHeader({
  title = "Grid View no Sidebar",
  categories = ["Business", "Digital", "Design", "Marketing"],
  view: viewProp,
  onViewChange,
  category: categoryProp,
  onCategoryChange,
  search: searchProp,
  onSearchChange,
}) {
  // নিজস্ব state: parent থেকে props না দিলেও কাজ করবে
  const [viewState, setViewState] = useState("grid");
  const [categoryState, setCategoryState] = useState("");
  const [searchState, setSearchState] = useState("");

  const view = viewProp ?? viewState;
  const category = categoryProp ?? categoryState;
  const search = searchProp ?? searchState;

  const changeView = (v) => (onViewChange ? onViewChange(v) : setViewState(v));
  const changeCategory = (v) => (onCategoryChange ? onCategoryChange(v) : setCategoryState(v));
  const changeSearch = (v) => (onSearchChange ? onSearchChange(v) : setSearchState(v));

  const toggleBtn = (active) =>
    `p-1 transition-colors ${
      active
        ? "text-indigo-500"
        : "text-gray-900 hover:text-indigo-500 dark:text-gray-100"
    }`;

  return (
    <Container>      
    <header className="px-4 pt-8 mb-10">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
        <a href="/" className="flex items-center gap-1.5 hover:text-indigo-500">
          <HomeIcon />
          <span>Homepage</span>
        </a>
        <span aria-hidden="true">»</span>
        <span className="text-indigo-500">{title}</span>
      </nav>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h1>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <button type="button" aria-label="List view" onClick={() => changeView("list")} className={toggleBtn(view === "list")}>
              <ListIcon />
            </button>
            <button type="button" aria-label="Grid view" onClick={() => changeView("grid")} className={toggleBtn(view === "grid")}>
              <GridIcon />
            </button>
          </div>
          <div className="relative w-52">
            <select
              value={category}
              onChange={(e) => changeCategory(e.target.value)}
              className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-2.5 pr-10 text-sm text-gray-600 outline-none focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300"
            >
              <option value="">All categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-200">
              <ChevronIcon />
            </span>
          </div>
          <div className="relative w-64">
            <input
              type="text"
              value={search}
              onChange={(e) => changeSearch(e.target.value)}
              placeholder="Search the blog..."
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 pr-10 text-sm text-gray-700 outline-none placeholder:text-gray-400 focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
            />
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-900 dark:text-gray-200">
              <SearchIcon />
            </span>
          </div>
        </div>
      </div>
    </header>
    </Container>
  );
}