import { useState } from "react";
import BlogGrid from "../Components/section/Blog/BlogGrid";
import BlogHeader from "../Components/section/Blog/BlogHeader";
import Subscribe from "../Components/section/Blog/Subscribe";
import { posts } from "../data/posts";


const categories = [...new Set(posts.map((p) => p.tag))];

export default function BlogPage() {
  const [view, setView] = useState("grid");
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const filtered = posts.filter((p) => {
    const matchCategory = category === "" || p.tag === category;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      <BlogHeader
        categories={categories}
        view={view}
        onViewChange={setView}
        category={category}
        onCategoryChange={setCategory}
        search={search}
        onSearchChange={setSearch}
      />

      <BlogGrid posts={filtered} view={view} />

      <Subscribe />
    </>
  );
}