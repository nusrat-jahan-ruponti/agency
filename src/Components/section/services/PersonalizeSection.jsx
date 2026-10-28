import { useEffect, useState } from "react";
import Container from "../../ui/Container";


const avatarColors = [
  "from-amber-300 to-orange-400",
  "from-pink-300 to-rose-400",
  "from-indigo-300 to-violet-400",
  "from-emerald-300 to-teal-400",
];

function Avatars({ count = 3, size = "h-7 w-7" }) {
  return (
    <div className="flex -space-x-2">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`${size} rounded-full border-2 border-white bg-gradient-to-br ${
            avatarColors[i % avatarColors.length]
          }`}
        />
      ))}
    </div>
  );
}

const Dots = () => (
  <span className="flex flex-col gap-[3px]" aria-hidden="true">
    <i className="h-[3px] w-[3px] rounded-full bg-slate-800" />
    <i className="h-[3px] w-[3px] rounded-full bg-slate-800" />
    <i className="h-[3px] w-[3px] rounded-full bg-slate-800" />
  </span>
);

const pad = (n) => String(n).padStart(2, "0");


function TaskMasterMock() {
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [selected, setSelected] = useState(11);
  const [progress, setProgress] = useState(45);
  const [done, setDone] = useState(true);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, [running]);

  const time = `${pad(Math.floor(seconds / 3600))}:${pad(Math.floor((seconds % 3600) / 60))}:${pad(seconds % 60)}`;

  const dates = [
    { n: 30, d: "Sun", muted: true }, { n: 31, d: "Mon", muted: true },
    { n: 1, d: "Tue" }, { n: 2, d: "Wed" }, { n: 3, d: "Thu" }, { n: 4, d: "Fri" }, { n: 5, d: "Sat" },
    { n: 6 }, { n: 7 }, { n: 8 }, { n: 9 }, { n: 10 }, { n: 11 }, { n: 12 },
  ];

  const setBar = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setProgress(Math.max(0, Math.min(100, Math.round(((e.clientX - r.left) / r.width) * 100))));
  };

  return (
    <div className="relative h-[430px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-[#f6f8ff] to-[#e9edff] lg:w-[636px]">
      {/* Brand */}
      <div className="absolute left-10 top-[58px] flex items-center gap-2 text-xl font-bold text-slate-900">
        Task Master
        <svg className="h-5 w-5 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
          <path d="M4 20l2-6L18 3l3 3L9 18zM14 7l3 3" />
        </svg>
      </div>
      <div className="absolute left-10 top-[120px] h-[400px] w-[248px] rounded-t-lg bg-white p-5 shadow-[0_4px_20px_rgba(60,70,140,0.08)]">
        <div className="flex items-center gap-3">
          <span className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-300 to-violet-500" />
          <div className="flex-1 leading-tight">
            <div className="text-[11px] font-semibold text-slate-800">John Doe</div>
            <div className="text-[9px] text-slate-400">UI/UX Designer</div>
          </div>
          <svg className="h-4 w-4 text-violet-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9a6 6 0 0 1 12 0c0 6 2 7 2 7H4s2-1 2-7M10 20a2 2 0 0 0 4 0" />
          </svg>
        </div>

        <div className="mt-5 flex items-center justify-between rounded-md bg-[#f1f4ff] p-3">
          <div>
            <div className="text-[10px] font-semibold text-slate-800">Project time tracker</div>
            <div className="mt-1 text-[9px] text-slate-400">
              {running ? time : "You can start tracking"}
            </div>
          </div>
          <button
            onClick={() => setRunning((r) => !r)}
            aria-label={running ? "Pause" : "Start"}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-800 shadow"
          >
            <svg className="h-2.5 w-2.5" viewBox="0 0 10 10" fill="currentColor">
              {running ? <path d="M2 1h2v8H2zM6 1h2v8H6z" /> : <path d="M2 1l7 4-7 4z" />}
            </svg>
          </button>
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <div className="text-[8px] text-slate-400">April 10, 2021</div>
            <div className="text-lg font-bold text-slate-900">Today</div>
          </div>
          <button className="rounded bg-indigo-500 px-3 py-1.5 text-[9px] font-medium text-white">
            + Add task
          </button>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-y-2 text-center text-[8px]">
          {dates.map((x, i) => (
            <div key={i} className="flex flex-col items-center gap-1" style={{ gridColumn: (i % 7) + 1 }}>
              {x.d && <span className="text-slate-400">{x.d}</span>}
              {!x.d && i < 14 && <span className="h-[10px]" />}
              <button
                disabled={x.muted}
                onClick={() => setSelected(x.n)}
                className={`flex h-5 w-5 items-center justify-center rounded-full transition ${
                  x.muted
                    ? "text-slate-300"
                    : selected === x.n && i >= 2
                    ? "bg-indigo-500 font-bold text-white"
                    : "text-slate-700 hover:bg-indigo-50"
                }`}
              >
                {x.n}
              </button>
            </div>
          ))}
        </div>
      </div>

    
      <div className="absolute left-[90px] top-[370px] h-[100px] w-[220px] rounded-lg bg-white p-4 shadow-[0_6px_24px_rgba(60,70,140,0.12)]">
        <div className="flex justify-between text-[10px] font-semibold text-slate-800">
          Team Meeting <span>9:00 AM</span>
        </div>
        <div className="mt-1 text-[8px] text-slate-400">Posuere non amet vivamus</div>
      </div>

      {/* Make Prototypes */}
      <div className="absolute left-[254px] top-[56px] w-[333px] rounded-lg bg-white p-6 shadow-[0_8px_30px_rgba(60,70,140,0.14)]">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[15px] font-bold text-slate-900">Make Prototypes</div>
            <div className="mt-1 text-[10px] text-slate-400">Ipsum malesuada id ac, quis cursus</div>
          </div>
          <Dots />
        </div>
        <div className="mt-3">
          <Avatars size="h-7 w-7" />
        </div>
        <div className="mt-4 flex justify-between text-[10px]">
          <span className="font-medium text-slate-700">Progress</span>
          <span className="font-semibold text-slate-800">{progress}%</span>
        </div>
        <div
          onClick={setBar}
          className="mt-1.5 h-1 cursor-pointer rounded-full bg-indigo-100"
          role="progressbar"
          aria-valuenow={progress}
        >
          <div className="h-1 rounded-full bg-emerald-500 transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>

      
      <div className="absolute left-[370px] top-[212px] w-[300px] rounded-lg bg-white p-6 shadow-[0_8px_30px_rgba(60,70,140,0.12)]">
        <div className="flex justify-between text-[12px] font-semibold text-slate-800">
          Team Meeting <span className="font-normal">9:00 AM</span>
        </div>
        <div className="mt-1 text-[10px] text-slate-400">Posuere non amet vivamus</div>
        <div className="mt-4 flex items-center justify-between">
          <Avatars count={4} size="h-6 w-6" />
          <button
            onClick={() => setDone((d) => !d)}
            aria-label="Toggle done"
            className={`mr-8 flex h-7 w-7 items-center justify-center rounded-full text-white transition ${
              done ? "bg-emerald-500" : "bg-slate-300"
            }`}
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l5 5L20 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}


export default function PersonalizeSection({
  title = "We personalize how we work to fit your project needs",
  text = "Massa enim libero dictumst consectetur in convallis lobortis cursus mi a magna ullamcorper consectetur purus quisque.",
  buttonText = "Start your project",
  buttonHref = "/contact",
  image, 
}) {
  return (
    <Container className="my-[112px]">
      <div className="grid items-center gap-12 lg:grid-cols-[636px_1fr] lg:gap-24">
        {image ? (
          <img src={image} alt="" className="w-full rounded-lg object-cover lg:w-[636px]" />
        ) : (
          <div className="overflow-x-auto lg:overflow-visible">
            <TaskMasterMock />
          </div>
        )}

        <div>
          <h2 className="text-3xl font-extrabold leading-[1.2] text-slate-900 dark:text-white md:text-[44px]">
            {title}
          </h2>
          <p className="mt-8 text-lg leading-8 text-slate-500 dark:text-slate-400">{text}</p>
          <a
            href={buttonHref}
            className="mt-10 inline-block rounded-md bg-indigo-500 px-8 py-4 font-medium text-white shadow-lg shadow-indigo-300/60 transition hover:bg-indigo-600"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </Container>
  );
}