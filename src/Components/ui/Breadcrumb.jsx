import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);


  if (segments.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex items-center gap-2 text-sm text-slate-500">
          <li>
            <Link to="/" className="hover:text-indigo-500 transition">
              Home
            </Link>
          </li>

          {segments.map((seg, i) => {
            const to = "/" + segments.slice(0, i + 1).join("/");
            const isLast = i === segments.length - 1;
            const label = seg.replace(/-/g, " ");

            return (
              <li key={to} className="flex items-center gap-2">
                <span className="text-slate-300">/</span>
                {isLast ? (
                  <span className="font-medium capitalize text-slate-900 dark:text-gray-500">{label}</span>
                ) : (
                  <Link to={to} className="capitalize hover:text-indigo-500 transition">
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}