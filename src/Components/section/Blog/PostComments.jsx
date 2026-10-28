import { useEffect, useRef, useState } from "react";
import avater from "../../../assets/avater.png";
import avater1 from "../../../assets/avater1.png";
import avater2 from "../../../assets/avater2.png";

const initialComments = [
  {
    id: 1,
    name: "Esther Howard",
    time: "4 min ago",
    avatar: avater,
    text: "Nibh enim porta ut augue felis, donec sit luctus. Quis ullamcorper dolor sit mauris. Hendrerit eu libero, eu tristique sodales ultrices etiam adipiscing. Donec viverra sodales arcu gravida nibh at. Neque lobortis quis porta integer et placerat lectus scelerisque. Velit eget malesuada morbi faucibus at sed euismod. Tortor, eu ut id tincidunt leo placerat luctus.",
    replies: [],
  },
  {
    id: 2,
    name: "Ralph Edwards",
    time: "September 9 at 12:48",
    avatar: avater1,
    text: "Eget amet, ac scelerisque tellus sed. Sapien duis sit neque pulvinar. Est sit aenean nisl etiam donec mattis ut diam. Luctus massa eu nunc aliquam viverra tempus, eu amet, luctus. Ac faucibus vestibulum eu lacus. Ullamcorper sem ultrices tincidunt pharetra?",
    replies: [
      {
        id: 21,
        name: "Albert Flores",
        time: "16 hours ago",
        avatar: avater2,
        mention: "Ralph Edwards",
        text: "Vulputate malesuada amet, consequat ullamcorper. Orci, cras maecenas in sit purus pellentesque. Ridiculus blandit pellentesque eget arcu morbi nisl. Morbi volutpat adipiscing sapien sed ut tempor.",
      },
    ],
  },
  {
    id: 3,
    name: "Cameron Williamson",
    time: "March 24 at 8:20",
    avatar: avater,
    text: "Mattis id ut sed arcu metus elit faucibus condimentum aliquam. Nam adipiscing diam et suspendisse. Sagittis massa maecenas laoreet nulla amet nunc sagittis, pulvinar neque. Duis imperdiet ipsum suspendisse massa lectus habitasse. Id ante volutpat hendrerit augue parturient eget. Ac vitae posuere leo morbi vitae at hac lectus. Nibh neque quam quis amet mattis sit. Faucibus risus at sit tempus ut.",
    replies: [],
  },
];

const ReplyIcon = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 14L4 9l5-5" />
    <path d="M4 9h10a6 6 0 0 1 6 6v3" />
  </svg>
);

const Avatar = ({ src, name }) =>
  src ? (
    <img src={src} alt={name} className="h-12 w-12 rounded-full object-cover" />
  ) : (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-600">
      {name?.[0]?.toUpperCase()}
    </div>
  );

const CommentItem = ({ comment, onReply }) => (
  <div>
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-4">
        <Avatar src={comment.avatar} name={comment.name} />
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">{comment.name}</p>
          <p className="text-sm text-gray-400">{comment.time}</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onReply}
        className="flex items-center gap-2 text-sm font-medium text-gray-800 transition-colors hover:text-indigo-500 dark:text-gray-200"
      >
        <ReplyIcon /> Reply
      </button>
    </div>
    <p className="mt-4 text-[15px] leading-7 text-gray-500 dark:text-gray-400">
      {comment.mention && (
        <span className="font-medium text-indigo-500">@{comment.mention} </span>
      )}
      {comment.text}
    </p>
  </div>
);

export default function PostComments() {
  const [comments, setComments] = useState(initialComments);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [remember, setRemember] = useState(false);
  const [replyTo, setReplyTo] = useState(null); // { parentId, name }

  const formRef = useRef(null);
  const textRef = useRef(null);

  const total = comments.reduce((n, c) => n + 1 + c.replies.length, 0);
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("commentUser"));
      if (saved) {
        setName(saved.name || "");
        setEmail(saved.email || "");
        setRemember(true);
      }
    } catch {
    }
  }, []);

  const handleReply = (parentId, authorName) => {
    setReplyTo({ parentId, name: authorName });
    setText(`@${authorName} `);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => textRef.current?.focus(), 300);
  };

  const cancelReply = () => {
    setReplyTo(null);
    setText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = replyTo ? text.replace(`@${replyTo.name}`, "").trim() : text.trim();
    if (!body) return;

    const item = { id: Date.now(), name: name.trim(), time: "Just now", avatar: "", text: body };

    if (replyTo) {
      setComments((prev) =>
        prev.map((c) =>
          c.id === replyTo.parentId
            ? { ...c, replies: [...c.replies, { ...item, mention: replyTo.name }] }
            : c
        )
      );
    } else {
      setComments((prev) => [...prev, { ...item, replies: [] }]);
    }

    try {
      if (remember) localStorage.setItem("commentUser", JSON.stringify({ name, email }));
      else localStorage.removeItem("commentUser");
    } catch {
    }

    if (!remember) {
      setName("");
      setEmail("");
    }
    setText("");
    setReplyTo(null);
  };

  const inputCls =
    "h-[52px] w-full rounded-lg border border-gray-200 bg-white px-4 text-base outline-none focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-900";

  return (
    <section>
      <h2 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
        {total} comments
      </h2>

      <div>
        {comments.map((c) => (
          <div key={c.id} className="border-b border-gray-200 py-8 first:pt-0 dark:border-gray-700">
            <CommentItem comment={c} onReply={() => handleReply(c.id, c.name)} />

            {c.replies.map((r) => (
              <div key={r.id} className="mt-8 border-l-2 border-indigo-500 pl-6 md:pl-10">
                <CommentItem comment={r} onReply={() => handleReply(c.id, r.name)} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-16 rounded-xl bg-[#f3f5ff] p-6 dark:bg-gray-900 md:px-[110px] md:py-16"
      >
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Leave a Comment</h3>

        {replyTo && (
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Replying to <span className="font-semibold text-indigo-500">{replyTo.name}</span> ·{" "}
            <button type="button" onClick={cancelReply} className="underline hover:text-indigo-500">
              Cancel
            </button>
          </p>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block font-medium text-gray-900 dark:text-white">Name</span>
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className={inputCls} />
          </label>
          <label className="block">
            <span className="mb-2 block font-medium text-gray-900 dark:text-white">Email</span>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls} />
          </label>
        </div>

        <label className="mt-6 block">
          <span className="mb-2 block font-medium text-gray-900 dark:text-white">Comment</span>
          <textarea
            ref={textRef}
            required
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your comment here..."
            className="w-full rounded-lg border border-gray-200 bg-white p-4 text-base outline-none placeholder:text-gray-400 focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-900"
          />
        </label>

        <label className="mt-6 flex cursor-pointer items-center gap-3 text-gray-500 dark:text-gray-400">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="h-[18px] w-[18px] accent-indigo-500"
          />
          Save my name and email in this browser for the next time I comment.
        </label>

        <button
          type="submit"
          className="mt-8 h-[52px] rounded-lg bg-indigo-500 px-8 font-semibold text-white transition-colors hover:bg-indigo-600"
        >
          Post comment
        </button>
      </form>
    </section>
  );
}