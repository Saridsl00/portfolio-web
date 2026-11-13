import Reveal from "./Reveal";
import { skills, steps } from "../data";

export default function Skill() {
  return (
    <Reveal as="section" id="skill" className="sec">
      <h2 className="sec-h">Skill &amp; toolkit</h2>
      <div className="skills">
        {skills.map((s) => (
          <div className="skill" key={s.name}>
            <div className="skill-top">
              <span className="ico"><img src={s.icon} alt="" /></span>
              <b>{s.name}</b>
              <em>{s.level}%</em>
            </div>
            <div className="bar"><i style={{ "--w": `${s.level}%` }} /></div>
          </div>
        ))}
      </div>
      <div className="box" style={{ marginTop: 16 }}>
        <h2 className="sec-h sm">Alur kerja</h2>
        <ol className="steps">{steps.map(([t, d], i) => (<li key={t} data-n={i + 1}><b>{t}</b>{d}</li>))}</ol>
      </div>
    </Reveal>
  );
}
