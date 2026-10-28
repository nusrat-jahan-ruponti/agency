import { useState } from "react";
import blog1 from "../../assets/Blog.png";
import blog2 from "../../assets/blog1.png";
import blog3 from "../../assets/blog2.png";
import avatar1 from "../../assets/avater.png";
import avatar2 from "../../assets/avater1.png";
import avatar3 from "../../assets/avater2.png";
import Container from "../ui/Container";

const defaultPosts = [
  {
    id: 1,
    tag: "Digital",
    time: "12 hours ago",
    title: "A study on smartwatch design qualities and people’s preferences",
    image: blog1,
    author: { name: "Jerome Bell", role: "Marketing Specialist", avatar: avatar1 },
    href: "#",
  },
  {
    id: 2,
    tag: "Design",
    time: "1 day ago",
    title: "Brand analysis: second step to the brand identity",
    image: blog2,
    author: { name: "Annette Black", role: "Product Manager", avatar: avatar2 },
    href: "#",
  },
  {
    id: 3,
    tag: "Tips & Advice",
    time: "May 24, 2021",
    title: "How to check the website before releasing it?",
    image: blog3,
    author: { name: "Marvin McKinney", role: "Senior UI/UX Designer", avatar: avatar3 },
    href: "#",
  },
];

const BookmarkIcon = ({ filled }) => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinejoin="round"
  >
    <path d="M6 3h12v18l-6-4.5L6 21z" />
  </svg>
);

function BookmarkButton() {
  const [saved, setSaved] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setSaved((s) => !s)}
      aria-label={saved ? "Remove bookmark" : "Save post"}
      className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-sm hover:scale-105 transition"
    >
      <BookmarkIcon filled={saved} />
    </button>
  );
}

function PostCard({ post, featured = false }) {
  return (
    <article
      className={`bg-white dark:bg-gray-900 rounded-lg shadow-[0_4px_20px_rgba(60,70,140,0.07)] overflow-hidden flex ${
        featured ? "flex-col md:row-span-2" : "flex-col sm:flex-row"
      }`}
    >
      <div
        className={`relative shrink-0 bg-slate-200 ${
          featured ? "h-[264px]" : "h-[220px] sm:h-auto sm:w-[306px]"
        }`}
      >
        <img src={post.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <BookmarkButton />
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center justify-between">
          <span className="text-[13px] font-medium text-indigo-500 bg-indigo-50 rounded px-2 py-0.5">
            {post.tag}
          </span>
          <span className="text-[13px] text-slate-400">{post.time}</span>
        </div>

        <h3 className="mt-4 text-xl font-bold leading-7 text-slate-700 dark:text-gray-300">
          <a href={post.href}>{post.title}</a>
        </h3>

        <div className="mt-auto pt-6">
          <div className="border-t border-slate-100 pt-6 flex items-center gap-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover bg-indigo-100"
            />
            <div>
              <div className="font-semibold text-slate-900 leading-5 dark:text-gray-200">{post.author.name}</div>
              <div className="text-sm text-slate-400">{post.author.role}</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Blog({
  title = "Latest From Our Blog",
  posts = defaultPosts,
  buttonText = "More blog posts",
  onMore,
}) {
  const [first, ...rest] = posts;

  return (
    <section className="bg-[#f3f6ff] dark:bg-gray-900 ">
    <Container className="py-24">
      <div>
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 dark:text-gray-200">
          {title}
        </h2>

        <div className="grid md:grid-cols-[526fr_746fr] gap-6">
          {first && <PostCard post={first} featured />}
          {rest.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            type="button"
            onClick={onMore}
            className="px-8 py-3.5 rounded-md border border-indigo-200 text-indigo-500 font-medium hover:bg-indigo-50 transition"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </Container>
    </section>
  );
}