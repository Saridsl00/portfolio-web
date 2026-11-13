import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap foot-in">
        <div><h3>Portofolio</h3><a>Full stack Developer &amp; UI/UX Designer</a></div>
        <div><h3>Mari terhubung</h3>{profile.socials.map((s) => (<a key={s.alt} href={s.web} target="_blank" rel="noreferrer">{s.alt}</a>))}</div>
      </div>
      <p className="copy">© {new Date().getFullYear()} made by SDSL</p>
    </footer>
  );
}
