import ctaImage from "../../../assets/ctabanner.png";
import Container from "../../ui/Container";

const CSS = `
.cta { --cta-bg:#f4f5ff; --cta-circle:#dcdefd; --cta-accent:#6366f1; --cta-ink:#12121f; --cta-muted:#5b5b78;
  position:relative; overflow:hidden; display:grid; grid-template-columns:1fr 1fr; align-items:center;
  min-height:440px; border-radius:12px; background:var(--cta-bg);
  font-family:"Manrope","Plus Jakarta Sans",system-ui,sans-serif; }
.cta::after { content:""; position:absolute; top:50%; left:51%; width:1100px; height:1100px;
  transform:translateY(-50%); border-radius:50%; background:var(--cta-circle); }
.cta-text { position:relative; z-index:1; padding:48px 0 48px 110px; }
.cta-eyebrow { margin:0 0 24px; font-size:22px; color:var(--cta-muted); }
.cta-title { margin:0 0 40px; font-size:40px; line-height:1.3; font-weight:800; color:var(--cta-ink); }
.cta-title span { color:var(--cta-accent); }
.cta-btn { display:inline-block; padding:16px 32px; border-radius:8px; background:var(--cta-accent); color:#fff;
  font:inherit; font-size:16px; font-weight:600; text-decoration:none; border:0; cursor:pointer;
  box-shadow:0 10px 22px rgba(99,102,241,.35); transition:transform .15s, box-shadow .15s; }
.cta-btn:hover { transform:translateY(-2px); box-shadow:0 14px 26px rgba(99,102,241,.4); }
.cta-btn:focus-visible { outline:2px solid var(--cta-ink); outline-offset:3px; }
.cta-media { position:relative; z-index:1; display:flex; justify-content:center; align-items:center; padding:32px; }
.cta-media img, .cta-media svg { width:100%; max-width:420px; height:auto; }
@media (max-width:900px) {
  .cta { grid-template-columns:1fr; }
  .cta::after { left:auto; right:-300px; top:auto; bottom:-500px; transform:none; width:800px; height:800px; }
  .cta-text { padding:40px 24px 8px; }
  .cta-title { font-size:30px; margin-bottom:28px; }
  .cta-eyebrow { font-size:18px; }
}
@media (prefers-reduced-motion:reduce) { .cta-btn { transition:none; } }
.dark .cta {
  --cta-bg: #18181b;
  --cta-circle: #27272a;
  --cta-ink: #f4f4f5;
  --cta-muted: #d4d4d8;
  --cta-accent: #818cf8;
}
`;

function Placeholder() {
  return (
    <svg viewBox="0 0 340 300" role="img" aria-label="Illustration">
      <rect x="150" y="10" width="170" height="110" rx="10" fill="#7fd6d0" />
      <path d="M200 100 L255 55 L305 100Z" fill="#f1f1f1" />
      <rect x="10" y="60" width="290" height="190" rx="18" fill="#8d8be0" />
      <rect x="10" y="60" width="95" height="190" rx="18" fill="#2a2563" />
      <rect x="125" y="95" width="125" height="110" rx="12" fill="#a6a4e6" />
      <circle cx="270" cy="220" r="14" fill="#5b57e6" />
      <path d="M120 250 H190 L215 285 H100Z" fill="#d8d2d2" />
    </svg>
  );
}

export default function CtaBanner({
  eyebrow = "Ready to get started?",
  before = "Take Your",
  highlight = "Business",
  after = "to the Next Level",
  buttonText = "Work with us",
  href = "#",
  onClick,
  image=ctaImage,
  imageAlt = "",
}) {
  return (
    <Container className="cta mt-[113px] ">
      <style>{CSS}</style>

      <div className="cta-text">
        <p className="cta-eyebrow">{eyebrow}</p>
        <h2 className="cta-title">
          {before} <span>{highlight}</span>
          <br />
          {after}
        </h2>
        <a className="cta-btn" href={href} onClick={onClick}>
          {buttonText}
        </a>
      </div>

      <div className="cta-media">
        {image ? <img src={ctaImage} alt={imageAlt} /> : <Placeholder />}
      </div>
    </Container>
  );
}