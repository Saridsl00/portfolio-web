import { useState } from "react";
import { navLinks } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="wrap nav-in">
        <a href="#" className="logo anton">SDSL</a>
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
