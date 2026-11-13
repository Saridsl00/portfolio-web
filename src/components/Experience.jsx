import Reveal from "./Reveal";
import { experiences } from "../data";

export default function Experience() {
  return (
    <Reveal as="section" id="pengalaman" className="sec">
      <h2 className="sec-h">Pengalaman kerja</h2>
      <div className="timeline">
        {experiences.map((x) => (
          <article className="xp" key={x.role + x.period}>
            <div className="box xp-card">
              <div className="xp-head">
                <div>
                  <h3>{x.role}</h3>
                  <p className="xp-co">{x.company}</p>
                </div>
                <div className="xp-meta">
                  <span className="xp-badge">{x.type}</span>
                  <span className="xp-date">{x.period}</span>
                </div>
              </div>
              <ul className="xp-list">
                {x.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
              <div className="chips">{x.tags.map((t) => <i key={t}>{t}</i>)}</div>
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}