const pros = [
  "A eu, ac nunc, volutpat. Augue enim ac justo, at elementum, arcu.",
  "At sodales quam felis ullamcorper iaculis tristique. Felis, etiam felis pellentesque sit neque.",
  "Porta ipsum quis lacus eu ipsum mattis sit quis. Massa, massa lectus porttitor laoreet ultricies odio fermentum arcu quam.",
  "Accumsan arcu neque, nisl, pellentesque fames justo consequat blandit lacus. Eget odio vel nulla vel.",
  "Diam ac phasellus est, eu urna purus blandit aliquam. Vitae accumsan et pellentesque diam in.",
  "Tellus arcu, lectus tincidunt neque nunc. Bibendum lacus, molestie ultrices sed arcu.",
];

const cons = [
  "Donec maecenas justo, et tortor quam elementum pharetra velit. Auctor dictum purus sollicitudin et quam vehicula amet lacus, integer.",
  "Mi elit nibh erat facilisis. Volutpat eget malesuada mi in.",
  "Tincidunt iaculis eleifend arcu egestas. Sit gravida vestibulum quam scelerisque.",
  "Ornare elit, vel, ullamcorper nunc nulla pellentesque ut varius. Vitae tortor nulla a turpis erat fermentum, rhoncus.",
  "Gravida cursus nunc habitant aliquet lacus. Tempus, interdum nullam non quam ipsum ultricies ac.",
];

const body = "text-[15px] leading-7 text-gray-500 dark:text-gray-400";
const h2 = "text-2xl font-bold text-gray-900 dark:text-white";

const CircleIcon = ({ type }) => (
  <svg className="h-4 w-4 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="10" />
    <path d={type === "plus" ? "M12 8v8M8 12h8" : "M8 12h8"} />
  </svg>
);

const List = ({ title, type, items }) => (
  <div>
    <h4 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase text-gray-900 dark:text-white">
      <CircleIcon type={type} /> {title}
    </h4>
    <ul className="space-y-2.5">
      {items.map((text, i) => (
        <li key={i} className={`flex gap-3 text-sm leading-6 text-gray-500 dark:text-gray-400`}>
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
          {text}
        </li>
      ))}
    </ul>
  </div>
);

export default function PostContent({
  videoImage,
  quoteAvatar,
  tags = ["lifestyle", "tech", "business"],
}) {
  return (
    <div className="space-y-8">
      <p className="text-xl font-medium leading-8 text-gray-900 dark:text-white">
        Est quis sit phasellus proin proin fringilla eu quis. Placerat praesent blandit urna eu pellentesque dictum. Aliquam duis quam interdum quis. Urna, rutrum aenean lacus phasellus. Ipsum, ac porttitor lacus orci, cras lacus, quis leo.
      </p>

      <section className="space-y-4">
        <h2 className={h2}>Paragraph Title</h2>
        <p className={body}>
          Purus ornare nisl est nec. Nunc, enim tellus pretium viverra quisque id in metus volutpat. Urna eget velit venenatis, commodo eget massa. Magna donec dictum cras nullam platea. Diam rhoncus massa lectus pellentesque tristique. Amet commodo, egestas vitae bibendum. Volutpat elit condimentum integer tortor porttitor justo vel lobortis risus.
        </p>
      </section>

      <div className="relative h-64 overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800 md:h-[500px]">
        {videoImage && <img src={videoImage} alt="" className="absolute inset-0 h-full w-full object-cover" />}
        <button
          type="button"
          aria-label="Play video"
          className="absolute left-1/2 top-1/2 flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-105"
        >
          <svg className="ml-1 h-6 w-6 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 4l13 8-13 8V4z" />
          </svg>
        </button>
      </div>

      <p className={body}>
        Tempor donec aliquam est, a. Sit arcu tellus pharetra, bibendum hendrerit arcu, sed. Scelerisque dui enim libero sit ac sed lacus lectus. Quam in iaculis scelerisque feugiat nibh mi. Maecenas posuere lobortis praesent iaculis sagittis. Egestas vel at praesent ipsum pretium faucibus adipiscing gravida feugiat.
      </p>

      <blockquote className="border-l-4 border-indigo-500 pl-8">
        <p className="text-xl font-semibold leading-8 text-gray-900 dark:text-white">
          Sollicitudin eget massa, elementum, purus nec fermentum vitae, elementum. Tincidunt vulputate lorem cursus id. Dictum tincidunt mi ornare tristique. Id sit elit pulvinar eu. Tempus vel, mauris sed proin aliquet vulputate cras est. Ut ornare eget a viverra.
        </p>
        <footer className="mt-6 flex items-center gap-4">
          <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
            {quoteAvatar && <img src={quoteAvatar} alt="Jane Cooper" className="h-full w-full object-cover" />}
          </div>
          <div>
            <p className="font-bold text-gray-900 dark:text-white">Jane Cooper</p>
            <p className="text-sm text-gray-400">CEO of Ipsum Company</p>
          </div>
        </footer>
      </blockquote>

      <p className={body}>
        Pellentesque laoreet neque ut dictumst fames scelerisque. In malesuada orci dapibus risus tellus, amet, ultrices sagittis a. Turpis vel tincidunt tristique maecenas cursus tortor, suscipit ut. Ullamcorper at faucibus dolor tortor suspendisse suscipit senectus convallis aliquam.
      </p>

      <section className="space-y-4">
        <h2 className={h2}>Paragraph Title 2</h2>
        <p className={body}>
          Praesent sed pulvinar posuere nisl tincidunt. Iaculis sit quam magna congue. Amet vel non aliquet habitasse. Egestas erat odio et, eleifend turpis etiam blandit interdum. Nec augue ut senectus quisque diam quis. At augue accumsan, in bibendum.
        </p>
      </section>

      <List title="Pros" type="plus" items={pros} />
      <List title="Cons" type="minus" items={cons} />

      <section className="space-y-4">
        <h2 className={h2}>Conclusion</h2>
        <p className={body}>
          Venenatis faucibus platea gravida amet sed sed urna volutpat. Aliquam neque, mi, justo odio semper. Egestas potentiquis neque nunc, rhoncus hendrerit. Viverra gravida pretium dolor eget placerat morbi proin eget.
        </p>
        <p className={body}>
          Velit parturient tellus tellus, congue pulvinar tellus viverra. In cum massa mattis ac. Amet vitae massa ut mi etiam. Auctor aliquam tristique felis donec eu sit nisi.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-3 border-t border-gray-200 pt-6 dark:border-gray-700">
        <span className="font-bold text-gray-900 dark:text-white">Related Tags:</span>
        {tags.map((t) => (
          <a
            key={t}
            href="#"
            className="rounded-md border border-gray-200 px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-indigo-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            #{t}
          </a>
        ))}
      </div>
    </div>
  );
}