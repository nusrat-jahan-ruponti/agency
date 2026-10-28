import { useEffect, useState } from "react";
import Container from "../../ui/Container";
import Pagination from "../../ui/Pagination";
import BlogCard from "./BlogCard";

export default function BlogGrid({ posts = [], view = "grid" }) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    setPage(1);
  }, [posts]);

  return (
    <Container>
      <div className="py-10">
        {posts.length === 0 ? (
          <p className="py-20 text-center text-slate-500">No posts found.</p>
        ) : (
          <div
            className={
              view === "grid"
                ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                : "flex flex-col gap-6"
            }
          >
            {posts.map((post) => (
              <BlogCard key={post.id} {...post} view={view} />
            ))}
          </div>
        )}
        <Pagination className="mt-12" page={page} onChange={setPage} />
      </div>
    </Container>
  );
}