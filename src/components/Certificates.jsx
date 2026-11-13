import Reveal from "./Reveal";
import Carousel from "./Carousel";
import { certificates } from "../data";

export default function Certificates() {
  return (
    <Reveal as="section" id="sertifikat" className="sec">
      <Carousel title="Sertifikat">
        {certificates.map((c) => (
          <article className="cert" key={c.title}>
            <img src={c.thumb} alt={c.title} draggable="false" />
            <h3>{c.title}</h3>
            <p>{c.issuer}</p>
            <div className="links">
              <a className="pri" href={c.file} target="_blank" rel="noreferrer">Lihat</a>
              <a href={c.file} download>Unduh</a>
            </div>
          </article>
        ))}
      </Carousel>
    </Reveal>
  );
}
