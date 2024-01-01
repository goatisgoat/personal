import { useEffect, useRef } from "react";
import {
  main_bg_donut,
  main_bg_flower,
  main_bg_left_bottom,
  main_bg_right_bottom,
} from "./utils/utility";

const SectionMain = () => {
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);

  const pFlowerRef = useRef(null);
  const pDonutRef = useRef(null);

  const handleParallax = () => {
    const value = window.scrollY;

    if (p1Ref.current) {
      p1Ref.current.style.top = 100 + value * -1.5 + "px";
    }

    if (p2Ref.current) {
      p2Ref.current.style.top = 100 + value * -2.5 + "px";
    }

    if (pFlowerRef.current) {
      pFlowerRef.current.style.top = 180 + value * -0.5 + "px";
    }

    if (pDonutRef.current) {
      pDonutRef.current.style.top = 150 + value * -1 + "px";
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleParallax);
    return () => document.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <section id="main" className="main-section">
      <h1 className="portfolio-text">portfolio</h1>
      <p className="bottom-text">Hi I'm Web Developer</p>
      <section className="main-bg-img">
        <img src={main_bg_left_bottom} />
        <img src={main_bg_right_bottom} />
        <div ref={p1Ref} className="particle-1"></div>
        <div ref={p2Ref} className="particle-2"></div>
        <img
          ref={pFlowerRef}
          className="particle-flower"
          src={main_bg_flower}
          alt="flower"
        />
        <img
          ref={pDonutRef}
          className="particle-donut"
          src={main_bg_donut}
          alt="donut"
        />
      </section>
    </section>
  );
};

export default SectionMain;
