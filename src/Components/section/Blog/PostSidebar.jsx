import { useState } from "react";

const iconBtn =
  "flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-gray-800 transition-colors hover:bg-sky-500 hover:text-white dark:bg-gray-800 dark:text-gray-200";

const ShareButtons = () => (
  <div className="flex gap-3">
    <a href="#" aria-label="Share on LinkedIn" className={iconBtn}>
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    </a>
    <a href="#" aria-label="Share on Facebook" className={iconBtn}>
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    </a>
    <a href="#" aria-label="Share on Twitter" className={iconBtn}>
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    </a>
    <a href="#" aria-label="Share on Google Plus" className={`${iconBtn} text-sm font-bold`}>
      G+
    </a>
  </div>
);

export default function PostSidebar({ readTime = "5 min read", likes = 8 }) {
  const [liked, setLiked] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log({ email });
    setEmail("");
  };

  return (
    <aside className="flex h-full flex-col justify-between gap-16">
      <div className="space-y-8 lg:sticky lg:top-24">
        <p className="text-gray-500 dark:text-gray-400">{readTime}</p>

        <div>
          <h4 className="mb-4 font-bold text-gray-900 dark:text-white">Share this post:</h4>
          <ShareButtons />
        </div>

        <button
          type="button"
          onClick={() => setLiked((v) => !v)}
          className="flex items-center gap-3 rounded-lg border border-gray-200 px-6 py-3 text-gray-800 transition-colors hover:border-indigo-500 dark:border-gray-700 dark:text-gray-100"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 11v9H4v-9h3zM7 11l4-8c1.5 0 2.5 1 2.5 2.5V9H19a2 2 0 0 1 2 2.3l-1.2 7A2 2 0 0 1 17.8 20H7" />
          </svg>
          <span>Like it</span>
          <span className="rounded bg-indigo-500 px-2 py-0.5 text-xs font-semibold text-white">
            {liked ? likes + 1 : likes}
          </span>
        </button>
      </div>
      <div className="space-y-10">
        <form onSubmit={handleSubscribe} className="space-y-4">
          <h4 className="text-lg font-bold leading-7 text-gray-900 dark:text-white">
            Enjoy this post? Join our newsletter
          </h4>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="h-12 w-full rounded-lg border border-gray-200 bg-white pl-12 pr-4 text-sm outline-none placeholder:text-gray-400 focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-900"
            />
          </div>
          <button type="submit" className="h-12 w-full rounded-lg bg-indigo-500 font-semibold text-white transition-colors hover:bg-indigo-600">
            Subscribe
          </button>
        </form>

        <div>
          <h4 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Don’t forget to share it</h4>
          <ShareButtons />
        </div>
      </div>
    </aside>
  );
}