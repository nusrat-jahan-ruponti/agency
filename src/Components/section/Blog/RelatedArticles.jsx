import { Link } from "react-router-dom";
import Container from "../../ui/Container";
import BlogCard from "./BlogCard";
import { posts } from "../../../data/posts";

export default function RelatedArticles({ currentId, tag }) {
  const others = posts.filter((p) => p.id !== currentId);
  const related = [
    ...others.filter((p) => p.tag === tag),
    ...others.filter((p) => p.tag !== tag),
  ].slice(0, 3);

  return (
    <section className="pb-20">
      <Container>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Related Articles
          </h2>
          <Link
            to="/blog"
            className="flex items-center gap-2 rounded-lg border border-indigo-200 px-5 py-3 font-medium text-indigo-500 transition-colors hover:bg-indigo-50 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            All posts <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>
      </Container>
    </section>
  );
}