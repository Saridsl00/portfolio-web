import Reveal from "./Reveal";
import Carousel from "./Carousel";
import { projects } from "../data";

export default function Projects() {
  return (
    <Reveal as="section" id="proyek" className="sec">
      <Carousel title="Proyek pilihan">
        {projects.map((p) => (
          <article className="pj" key={p.name}>
            <div className="cover">
              {p.image ? (
                <img src={p.image} alt={p.name} draggable="false" />
              ) : (
                <div className="ph">{p.name}</div>
              )}
            </div>
            <div className="meta">
              <b>{p.name}</b>
              {p.desc && <span className="desc">{p.desc}</span>}
              <div className="chips">{p.tags.map((t) => <i key={t}>{t}</i>)}</div>
              <div className="links">
                {p.github && <a href={p.github} target="_blank" rel="noreferrer">Code ↗</a>}
                {p.demo && <a className="pri" href={p.demo} target="_blank" rel="noreferrer">Demo ↗</a>}
              </div>
            </div>
          </article>
        ))}
      </Carousel>
      <a className="more" href="https://github.com/Saridsl00" target="_blank" rel="noreferrer">Lihat semua proyek di GitHub ↗</a>
    </Reveal>
  );
}