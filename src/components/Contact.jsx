import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal";
import { emailjs as cfg } from "../data";

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | ok | err

  const send = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs.sendForm(cfg.service, cfg.template, form.current, cfg.key)
      .then(() => { setStatus("ok"); form.current.reset(); })
      .catch(() => setStatus("err"));
  };

  return (
    <Reveal as="section" id="kontak" className="sec contact">
      <div className="box cta">
        <h2>Ayo bangun sesuatu yang luar biasa.</h2>
        <p>Saya terbuka untuk peluang dan kolaborasi baru. Kirim pesan lewat form ini.</p>
      </div>
      <form ref={form} onSubmit={send} className="box form">
        <div className="row">
          <input name="first_name" placeholder="Nama depan" required />
          <input name="last_name" placeholder="Nama belakang" required />
          <input name="email" type="email" placeholder="Email" required />
          <input name="phone" type="tel" placeholder="No. telepon" required />
        </div>
        <textarea name="message" rows="4" placeholder="Pesan kamu" required />
        <button className="btn pri" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Mengirim…" : "Kirim pesan"}
        </button>
        {status === "ok" && <p className="msg ok">Pesan berhasil dikirim! 🚀</p>}
        {status === "err" && <p className="msg err">Gagal mengirim pesan, coba lagi.</p>}
      </form>
    </Reveal>
  );
}
