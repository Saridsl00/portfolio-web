import { useEffect, useRef, useState } from "react";

// Angka yang menghitung naik saat terlihat
export default function Counter({ to, duration = 1200, suffix = "+" }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf;
    const o = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      o.disconnect();
      let s = null;
      const tick = (t) => {
        s = s ?? t;
        const p = Math.min((t - s) / duration, 1);
        setN(Math.round(to * p));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    o.observe(ref.current);
    return () => { o.disconnect(); cancelAnimationFrame(raf); };
  }, [to, duration]);
  return <b ref={ref}>{n}{n === to ? suffix : ""}</b>;
}
