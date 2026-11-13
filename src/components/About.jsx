import Reveal from "./Reveal";
import Counter from "./Counter";
import { stats, services, profile } from "../data";

export default function About() {
  return (
    <>
      <Reveal className="stats">
        {stats.map((s) => (<div key={s.label}><Counter to={s.to} suffix={s.suffix} /><span>{s.label}</span></div>))}
      </Reveal>

      <Reveal as="section" id="tentang" className="sec">
        <div className="about">
          <figure className="photo"><img src="/aku.jpeg" alt={profile.name} /></figure>
          <div>
            <h2 className="sec-h grad" style={{ lineHeight: 1 }}>Tentang saya</h2>
            <p className="bio">{profile.bio}</p>
          </div>
        </div>
        <h2 className="sec-h sm" style={{ marginTop: 48 }}>Apa yang saya kerjakan</h2>
        <div className="cards">
          {services.map((s, i) => (
            <div className="card" key={s.t}>
              <svg viewBox="0 0 24 24"><path d={s.p} /></svg>
              <h3>{s.t}</h3><p>{s.d}</p><small>0{i + 1}</small>
            </div>
          ))}
        </div>
      </Reveal>
    </>
  );
}
