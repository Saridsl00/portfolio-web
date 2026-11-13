import { useState } from "react";
import { navLinks } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Klik logo: hapus #hash, balik ke atas, lalu refresh halaman
  const refresh = (e) => {
    e.preventDefault();
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    window.history.replaceState(null, "", window.location.pathname);
    window.scrollTo(0, 0);
    window.location.reload();
  };

  return (
    <nav className="nav">
      <div className="wrap nav-in">
        <a href="/" className="logo anton" onClick={refresh}>SDSL</a>
        <ul className={open ? "open" : ""}>
          {navLinks.map(([n, h]) => (
            <li key={n}><a href={h} onClick={() => setOpen(false)}>{n}</a></li>
          ))}
        </ul>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">{open ? "✕" : "☰"}</button>
      </div>
    </nav>
  );
}