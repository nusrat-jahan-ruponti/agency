import { Link, useParams } from "react-router-dom";
import SinglePostHeader from "../Components/section/Blog/SinglePostHeader";
import Container from "../Components/ui/Container";
import { posts } from "../data/posts";
import PostSidebar from "../Components/section/Blog/PostSidebar";
import PostContent from "../Components/section/Blog/PostContent";
import thumb from "../assets/blog1.png";
import quoteAvatar from "../assets/avater1.png";
import PostComments from "../Components/section/Blog/PostComments";
import RelatedArticles from "../Components/section/Blog/RelatedArticles";

const SinglePostPage = () => {
  const { id } = useParams();
  const post = posts.find((p) => String(p.id) === id);

  if (!post) {
    return (
      <Container>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold">Post not found</h1>
          <Link
            to="/blog"
            className="mt-4 inline-block text-indigo-500 underline"
          >
            Back to Blog
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <div>
      <SinglePostHeader post={post} />
      <Container>
        <div className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16">
          <div className="min-w-0 space-y-16">
            <PostContent videoImage={thumb} quoteAvatar={quoteAvatar} />
            <PostComments />
          </div>
          <PostSidebar />
        </div>
      </Container>
      <RelatedArticles />
    </div>
  );
};

export default SinglePostPage;
