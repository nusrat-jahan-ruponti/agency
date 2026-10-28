import { useState } from "react";
import { Rocket, ThumbsUp, Users, Clock } from "lucide-react";
import Container from "../../ui/Container";



const iconProps = { className: "h-8 w-8 text-indigo-500", strokeWidth: 1.6 };

const defaultItems = [
  {
    id: 1,
    icon: <Rocket {...iconProps} />,
    title: "Innovative Solutions",
    text: "Massa enim libero dictum consectetur convallis lobortis cursus mi a magna ullamcorper consectetur.",
  },
  {
    id: 2,
    icon: <ThumbsUp {...iconProps} />,
    title: "Success Guarantee",
    text: "At ultricies id non quisque integer eget velit. Facilisis enim malesuada metus, risus amet ultricies magna aliquam.",
  },
  {
    id: 3,
    icon: <Users {...iconProps} />,
    title: "Professional Team",
    text: "Pellentesque rhoncus viverra vestibu, purus purus quisque qui vestibulum facilisis dictumst consequat.",
  },
  {
    id: 4,
    icon: <Clock {...iconProps} />,
    title: "On Time Service",
    text: "Quam dolor commodo fermentum bibendum dictumst. Risus pretium eget at viverra eget neque adipiscing.",
  },
];

export default function WhatWeOffer({
  title = "What We Offer",
  items = defaultItems,
}) {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-[1610px] items-center gap-12 lg:grid-cols-[48fr_52fr] lg:gap-0">     
        <div
          className="pr-4 lg:pr-12"
          style={{
            paddingLeft:
              "max(1rem, calc((min(100vw, 1610px) - 80rem) / 2 + 1rem))",
          }}
        >
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white md:text-5xl">
            {title}
          </h2>

          <ul className="mt-14 grid list-none gap-x-10 gap-y-12 p-0 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item.id}>
                {item.icon}
                <h3 className="mt-6 text-[22px] font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-lg leading-[26px] text-slate-500 dark:text-slate-400">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-4 lg:px-0">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}



const stats = [
  { id: "Singles", value: 18, up: true, bg: "from-pink-500 to-fuchsia-400" },
  { id: "Doubles", value: 20, up: true, bg: "from-indigo-400 to-sky-400" },
  { id: "Mixed Doubles", value: 16, up: false, bg: "from-emerald-400 to-teal-400" },
];

const chartData = {
  Singles: {
    Income: [6100, 7600, 6800, 7400, 8600, 7500, 8700],
    Expenses: [5400, 6200, 5800, 6500, 7000, 6400, 7100],
  },
  Doubles: {
    Income: [5600, 6400, 7800, 7200, 6900, 8100, 8400],
    Expenses: [5200, 5600, 6100, 6800, 6300, 7000, 7300],
  },
  "Mixed Doubles": {
    Income: [7200, 6600, 6200, 7000, 7800, 8200, 7600],
    Expenses: [6100, 5900, 5500, 6300, 6600, 7100, 6800],
  },
};

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const weekdays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const savings = [
  { label: "Travel", value: 480, color: "#a78bfa" },
  { label: "Food", value: 320, color: "#e056c8" },
  { label: "Bills", value: 260, color: "#4cc9f0" },
];

const navCount = 7;


const smoothPath = (pts) =>
  pts.reduce((d, [x, y], i) => {
    if (i === 0) return `M${x} ${y}`;
    const [px, py] = pts[i - 1];
    const cx = (px + x) / 2;
    return `${d} C${cx} ${py} ${cx} ${y} ${x} ${y}`;
  }, "");

const W = 560;
const H = 200;
const toPoints = (values) =>
  values.map((v, i) => [
    30 + (i * (W - 50)) / (values.length - 1),
    H - 30 - ((v - 5000) / 4000) * (H - 70),
  ]);


function LineChart({ series }) {
  const [metric, setMetric] = useState("Income");
  const [hover, setHover] = useState(null);

  const pts = toPoints(series[metric]);
  const line = smoothPath(pts);
  const area = `${line} L${pts[pts.length - 1][0]} ${H - 30} L${pts[0][0]} ${H - 30} Z`;

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="mb-1 flex justify-end gap-5 text-[9px] text-slate-400">
        {["Income", "Expenses"].map((m) => (
          <button
            key={m}
            onClick={() => setMetric(m)}
            className={`flex flex-col items-center transition ${
              metric === m ? "font-semibold text-indigo-500" : ""
            }`}
          >
            {m}
            <span
              className={`mt-0.5 h-1 w-1 rounded-full ${
                metric === m ? "bg-indigo-500" : "bg-transparent"
              }`}
            />
          </button>
        ))}
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
        <defs>
          <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8b5cf6" stopOpacity=".18" />
            <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[5000, 6000, 7000, 8000, 9000].map((v) => {
          const y = H - 30 - ((v - 5000) / 4000) * (H - 70);
          return (
            <text key={v} x="0" y={y + 3} fontSize="8" fill="#9ca3af">
              {v.toLocaleString()}
            </text>
          );
        })}

        <path d={area} fill="url(#area)" />
        <path d={line} fill="none" stroke="#8b5cf6" strokeWidth="2" />

        {pts.map(([x, y], i) => (
          <g key={i} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
            <circle cx={x} cy={y} r="14" fill="transparent" className="cursor-pointer" />
            {hover === i && (
              <>
                <circle cx={x} cy={y} r="4" fill="#8b5cf6" />
                <rect x={x - 22} y={y - 28} width="44" height="18" rx="4" fill="#2a2644" />
                <text x={x} y={y - 16} fontSize="9" fill="#fff" textAnchor="middle">
                  {series[metric][i].toLocaleString()}
                </text>
              </>
            )}
            <text x={x} y={H - 8} fontSize="8" fill="#9ca3af" textAnchor="middle">
              {days[i]}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const sameDay = (a, b) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

function Calendar() {
  const [view, setView] = useState({ y: 2022, m: 7 }); // August 2022
  const [selected, setSelected] = useState(new Date(2022, 7, 12));

  const lead = (new Date(view.y, view.m, 1).getDay() + 6) % 7; 
  const daysInMonth = new Date(view.y, view.m + 1, 0).getDate();
  const total = Math.ceil((lead + daysInMonth) / 7) * 7;

  const cells = Array.from({ length: total }, (_, i) => {
    const date = new Date(view.y, view.m, 1 - lead + i);
    return { date, out: date.getMonth() !== view.m };
  });

  const shift = (delta) => {
    const d = new Date(view.y, view.m + delta, 1);
    setView({ y: d.getFullYear(), m: d.getMonth() });
  };

  const pick = (date, out) => {
    setSelected(date);
    if (out) setView({ y: date.getFullYear(), m: date.getMonth() });
  };

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="text-[10px] font-semibold text-slate-800">Pay Schedule</div>

      <div className="mt-3 flex items-center justify-between text-sm font-semibold text-slate-700">
        <button
          onClick={() => shift(-1)}
          aria-label="Previous month"
          className="flex h-5 w-5 items-center justify-center rounded hover:bg-indigo-50"
        >
          ‹
        </button>
        <span>
          {monthNames[view.m]} <span className="font-normal">{view.y}</span>
        </span>
        <button
          onClick={() => shift(1)}
          aria-label="Next month"
          className="flex h-5 w-5 items-center justify-center rounded hover:bg-indigo-50"
        >
          ›
        </button>
      </div>

      <div className="mt-3 grid grid-cols-7 gap-y-1.5 text-center text-[8px]">
        {weekdays.map((d) => (
          <span key={d} className="text-slate-400">
            {d}
          </span>
        ))}
        {cells.map(({ date, out }, i) => (
          <button
            key={i}
            onClick={() => pick(date, out)}
            className={`mx-auto flex h-5 w-5 items-center justify-center rounded-full font-semibold transition ${
              sameDay(date, selected)
                ? "bg-indigo-500 text-white"
                : out
                ? "text-slate-300 hover:bg-indigo-50"
                : "text-slate-700 hover:bg-indigo-50"
            }`}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  );
}


function Savings() {
  const [active, setActive] = useState(0);
  const total = savings.reduce((s, x) => s + x.value, 0);
  const R = 52;
  const C = 2 * Math.PI * R;
  let offset = 0;

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="text-[11px] font-semibold text-slate-800">Savings</div>
      <div className="relative mx-auto mt-3 h-36 w-36">
        <svg viewBox="0 0 140 140" className="h-full w-full -rotate-90">
          {savings.map((s, i) => {
            const len = (s.value / total) * C;
            const el = (
              <circle
                key={s.label}
                cx="70"
                cy="70"
                r={R}
                fill="none"
                stroke={s.color}
                strokeWidth={active === i ? 22 : 18}
                strokeDasharray={`${len - 2} ${C - len + 2}`}
                strokeDashoffset={-offset}
                className="cursor-pointer transition-all"
                onClick={() => setActive(i)}
              />
            );
            offset += len;
            return el;
          })}
        </svg>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[9px] text-slate-400">{savings[active].label}</span>
          <span className="text-sm font-bold text-slate-800">${savings[active].value}</span>
        </div>
      </div>
    </div>
  );
}


function Tx({ initial, color, name, note, amount, action, onAction }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <span
          className="flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold text-white"
          style={{ background: color }}
        >
          {initial}
        </span>
        <span className="text-[9px] font-semibold text-slate-800">{name}</span>
        <span className="text-[8px] text-slate-400">{note}</span>
      </div>
      <div className="mt-3 flex items-center justify-between text-[9px]">
        <span className="font-semibold text-emerald-500">{amount}</span>
        <button onClick={onAction} className="text-indigo-500 hover:underline">
          {action}
        </button>
      </div>
    </div>
  );
}


function DashboardPreview({ className = "" }) {
  const [nav, setNav] = useState(0);
  const [stat, setStat] = useState("Singles");

  return (
    <div
      className={`flex overflow-hidden rounded-lg bg-[#f3f6ff] lg:rounded-l-[24px] lg:rounded-r-none ${className}`}
    >
      
      <aside className="flex w-[56px] shrink-0 flex-col items-center gap-3 bg-[#2a2644] py-5 sm:w-[68px]">
        <span className="mb-6 h-8 w-8 rounded-full bg-gradient-to-br from-fuchsia-400 via-indigo-400 to-sky-400 ring-4 ring-white/10" />
        {Array.from({ length: navCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => setNav(i)}
            aria-label={`Menu ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              nav === i ? "w-6 bg-white" : "w-6 bg-slate-500/70 hover:bg-slate-400"
            }`}
          />
        ))}
      </aside>

     
      <div className="min-w-0 flex-1 p-4 sm:p-6">
     
        <div className="mb-5 flex items-center justify-between">
          <span className="h-2.5 w-28 rounded-full bg-indigo-200" />
          <div className="flex items-center gap-3">
            <span className="rounded bg-indigo-500 px-2 py-0.5 text-[8px] font-semibold text-white">
              15
            </span>
            <span className="h-6 w-6 rounded-full bg-gradient-to-br from-amber-300 to-orange-400" />
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[1fr_190px]">
         
          <div className="min-w-0 space-y-4">
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setStat(s.id)}
                  className={`rounded-lg bg-gradient-to-br ${s.bg} p-3 text-left text-white transition ${
                    stat === s.id ? "ring-2 ring-white ring-offset-2 ring-offset-[#f3f6ff]" : "opacity-90 hover:opacity-100"
                  }`}
                >
                  <div className="text-[9px]">{s.id}</div>
                  <div className="mt-1 text-base font-bold">
                    {s.value} <span className="text-xs">{s.up ? "↑" : "↓"}</span>
                  </div>
                </button>
              ))}
            </div>

            <LineChart key={stat} series={chartData[stat]} />

            <div className="grid grid-cols-2 gap-3">
              <Tx
                initial="L"
                color="#10b981"
                name="Lottie Marsh"
                note="Sent you a coin"
                amount="+380.234"
                action="Open my wallet"
                onAction={() => alert("Open my wallet")}
              />
              <Tx
                initial="B"
                color="#e056c8"
                name="BTC"
                note="News"
                amount="▲ +39.69%"
                action="Trade now"
                onAction={() => alert("Trade now")}
              />
            </div>
          </div>

          
          <div className="space-y-4">
            <Calendar />
            <Savings />
          </div>
        </div>
      </div>
    </div>
  );
}