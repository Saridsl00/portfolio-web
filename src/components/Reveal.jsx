import { useEffect, useRef, useState } from "react";

// Memunculkan elemen saat masuk viewport
export default function Reveal({ children, className = "", as: Tag = "div", ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); o.disconnect(); }
    }, { threshold: 0.12 });
    o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return <Tag ref={ref} className={`rv ${seen ? "in" : ""} ${className}`} {...rest}>{children}</Tag>;
}
