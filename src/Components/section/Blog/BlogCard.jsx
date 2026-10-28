import { Link } from "react-router-dom";

export default function BlogCard({ id, tag, date, title, author, image, avatar }) {
  return (
    <Link to={`/blog/${id}`} className="block h-full">
      <article className="h-full overflow-hidden rounded-xl bg-white shadow-md dark:bg-gray-900">
        <div className="relative h-60 overflow-hidden bg-gray-200 dark:bg-gray-800">
          {image && <img src={image} alt={title} className="h-full w-full object-cover" />}
          <button
            type="button"
            aria-label="Save"
            onClick={(e) => e.preventDefault()}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-800 shadow"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
              <path d="M6 3h12v18l-6-4-6 4V3z" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <div className="mb-3 flex items-center justify-between text-xs">
            <span className="rounded bg-indigo-50 px-2 py-1 text-gray-600 dark:bg-gray-800 dark:text-gray-300">{tag}</span>
            <span className="text-gray-400">{date}</span>
          </div>
          <h3 className="min-h-[56px] text-lg font-semibold leading-7 text-gray-900 dark:text-white">{title}</h3>
          <div className="mt-6 flex items-center gap-3 border-t border-gray-200 pt-6 dark:border-gray-700">
            <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
              {avatar && <img src={avatar} alt={author} className="h-full w-full object-cover" />}
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">{author}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}