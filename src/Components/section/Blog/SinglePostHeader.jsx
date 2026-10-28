import Container from "../../ui/Container";

const ThumbIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 11v9H4v-9h3zM7 11l4-8c1.5 0 2.5 1 2.5 2.5V9H19a2 2 0 0 1 2 2.3l-1.2 7A2 2 0 0 1 17.8 20H7" />
  </svg>
);

const CommentIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
    <path d="M4 5h16v11H9l-5 4V5z" />
  </svg>
);

const ShareIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <circle cx="6" cy="12" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <circle cx="18" cy="18" r="2.5" />
    <path d="M8.2 10.8l7.6-3.6M8.2 13.2l7.6 3.6" />
  </svg>
);

export default function SinglePostHeader({ post }) {
  const {
    tag,
    date,
    title,
    author,
    image,
    avatar,
    likes = 8,
    comments = 4,
    shares = 2,
  } = post;

  return (
    <header>
      <Container>
        <div className="flex flex-col gap-8 pb-8 pt-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl md:leading-[1.2]">
              {title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-300">
              <span className="rounded bg-indigo-50 px-2 py-1 text-indigo-600 dark:bg-gray-800">
                {tag}
              </span>

              <span className="mx-4 h-5 w-px bg-gray-200 dark:bg-gray-700" />
              <span>{date}</span>
              <span className="mx-4 h-5 w-px bg-gray-200 dark:bg-gray-700" />

              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5"><ThumbIcon /> {likes}</span>
                <span className="flex items-center gap-1.5"><CommentIcon /> {comments}</span>
                <span className="flex items-center gap-1.5"><ShareIcon /> {shares}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={avatar}
              alt={author}
              className="h-[60px] w-[60px] rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">Author</p>
              <a href="#" className="text-indigo-500 underline">{author}</a>
            </div>
          </div>
        </div>
      </Container>
      <img
        src={image}
        alt={title}
        className="h-[260px] w-full object-cover md:h-[480px] lg:h-[640px]"
      />
    </header>
  );
}