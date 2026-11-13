import { profile } from "../data";

// ✏️ Atur di sini
const NAME_SCRIPT = "Sari Dosma Santa Lusi"; // tulisan tangan di atas kata "portfolio"
const YEAR = new Date().getFullYear();

const still =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Di HP: coba buka aplikasi dulu, kalau gagal buka web
const openSocial = (web, app) => {
  const mobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (mobile) {
    window.location.href = app;
    setTimeout(() => window.open(web, "_blank"), 500);
  } else window.open(web, "_blank");
};

// Ambil @username dari link (bisa ditimpa dengan field `handle` di data.js)
const handleOf = (s) => {
  if (s.handle) return s.handle;
  try {
    const h = new URL(s.web).pathname.split("/").filter(Boolean).pop() || s.alt;
    return h.startsWith("@") ? h : "@" + h;
  } catch {
    return s.alt;
  }
};

export default function Hero() {
  return (
    <header className="hero">
      <div className="fr-bg" aria-hidden="true">
        <i className="blob b1" />
        <i className="blob b2" />
        <i className="blob b3" />
      </div>
      <span className="spark" style={{ left: "46%", top: "13%", fontSize: 30 }}>✦</span>
      <span className="spark" style={{ left: "52%", top: "8%", fontSize: 16, animationDelay: ".6s" }}>✦</span>
      <span className="spark" style={{ left: "4%", top: "42%", fontSize: 24, animationDelay: "1.2s" }}>✦</span>

      {/* baris atas */}
      <div className="fr-top">
        <div className="fr-role"><span>{profile.role}</span><i /></div>
        <a href="#proyek" className="fr-year">{YEAR} Portfolio <span>→</span></a>
      </div>

      {/* judul tengah: melebar penuh kiri-kanan, tetap di tengah */}
      <h1 className="fr-word">
        <svg viewBox="0 0 1000 270" role="img" aria-label={`portfolio ${NAME_SCRIPT}`}>
          <defs>
            <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#d2c3ff" />
              <stop offset="1" stopColor="#6d4fd8" />
            </linearGradient>
            <clipPath id="wipe">
              <rect x="-20" y="-60" width={still ? 1100 : 0} height="400">
                {!still && <animate attributeName="width" from="0" to="1100" dur="1.8s" begin="1s" fill="freeze" calcMode="spline" keySplines=".5 0 .2 1" keyTimes="0;1" />}
              </rect>
            </clipPath>
          </defs>

          {/* kata "portfolio": textLength = lebar yang diisi (maks 1000) */}
          <text className="w-text" x="500" y="200" textAnchor="middle" fontSize="215"
            textLength="980" lengthAdjust="spacingAndGlyphs" fill="url(#pg)">portfolio</text>

          {/* nama tulisan tangan, muncul seperti ditulis */}
          <g clipPath="url(#wipe)">
            <g transform="rotate(-4 500 140)">
              <text className="n-text" x="500" y="168" textAnchor="middle" fontSize="80"
                textLength="800" lengthAdjust="spacingAndGlyphs"
                fill="#fff" stroke="#fff" strokeWidth="1">{NAME_SCRIPT}</text>
              <path transform="translate(912 86) scale(2.4)" fill="none" stroke="#fff" strokeWidth="0.7"
                d="M12 21s-7-4.6-9.3-9A5.4 5.4 0 0112 6.2 5.4 5.4 0 0121.3 12C19 16.4 12 21 12 21z" />
            </g>
          </g>
        </svg>
      </h1>

      {/* baris bawah: kontak kiri, ilustrasi kanan */}
      <div className="fr-bottom">
        <ul className="fr-contact">
          {profile.socials.map((s) => (
            <li key={s.alt}>
              <button onClick={() => openSocial(s.web, s.app)}>
                <img src={s.icon} alt="" /><span>{handleOf(s)}</span>
              </button>
            </li>
          ))}
          <li>
            <a href={`mailto:${profile.email}`}>
              <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
              <span>{profile.email}</span>
            </a>
          </li>
        </ul>

        <div className="fr-art" aria-hidden="true">
          <div className="orb" />
          <img src="/hero.png" alt="" />
          <svg className="fr-badge" viewBox="0 0 120 120">
            <defs><path id="ringp" d="M60 60m-46 0a46 46 0 1 1 92 0a46 46 0 1 1-92 0" /></defs>
            <g className="ring">
              <text fill="#a78bfa" fontSize="10" letterSpacing="4"><textPath href="#ringp">CODE · DESIGN · DEPLOY · </textPath></text>
            </g>
            <text x="60" y="70" textAnchor="middle" fill="#a78bfa" fontSize="30" className="anton">SDSL</text>
          </svg>
        </div>
      </div>
    </header>
  );
}