import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  belle_ame_git,
  belle_ame_link,
  figure_bg_left_bottom,
  figure_bg_right_bottom,
  figure_bg_right_top,
  netflix_git,
  netflix_link,
  tutorang_git,
  tutorang_link,
  work1_img_url_1,
  work1_img_url_2,
  work1_img_url_3,
} from "./utils/utility";

const SectionWork = () => {
  gsap.registerPlugin(ScrollTrigger);

  const work1_h1 = useRef(null);
  const work2_h1 = useRef(null);
  const work3_h1 = useRef(null);

  const work1_img = useRef(null);
  const work2_img = useRef(null);
  const work3_img = useRef(null);

  useEffect(() => {
    const observerText = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add("scrolled-right");
      } else {
        entries[0].target.classList.remove("scrolled-right");
      }
    });

    const observerImg = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add("scrolled-left");
      } else {
        entries[0].target.classList.remove("scrolled-left");
      }
    });

    work1_h1 && observerText.observe(work1_h1.current);
    work2_h1 && observerText.observe(work2_h1.current);
    work3_h1 && observerText.observe(work3_h1.current);

    work1_img && observerImg.observe(work1_img.current);
    work2_img && observerImg.observe(work2_img.current);
    work3_img && observerImg.observe(work3_img.current);
  }, []);

  useEffect(() => {
    const sections = gsap.utils.toArray("#container section");

    const scrollTween = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#container",
        pin: true,
        // snap: 1 / (sections.length - 1),
        scrub: 0.5,
        start: "top top",
        end: 5000,
      },
    });

    gsap.to("#logo", {
      fontSize: "30px",
      top: "30px",
      scrollTrigger: {
        trigger: "#lineSection",
        start: "top top",
        end: 1500,
        scrub: 0.5,
      },
    });

    gsap.to("#line", {
      height: "130px",
      scrollTrigger: {
        trigger: "#lineSection",
        start: "top top",
        end: 2000,
        scrub: 0.5,
      },
    });

    gsap.to("#work-block1", {
      x: "0",
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: "#work-block1",
        start: "top bottom",
        end: "+=" + window.innerWidth,
        scrub: 0.5,
      },
    });

    gsap.to("#work-block2", {
      x: "0",
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: "#work-block2",
        start: "top bottom",
        end: "+=" + window.innerWidth,
        scrub: 0.5,
      },
    });

    gsap.to("#work-block3", {
      x: "0",
      ease: "none",
      scrollTrigger: {
        containerAnimation: scrollTween,
        trigger: "#work-block3",
        start: "top bottom",
        end: "+=" + window.innerWidth,
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <>
      <div id="container" className="work-container">
        {/* logo */}
        <h1 id="logo" className="line-logo">
          <span>W</span>
          <span>o</span>
          <span>r</span>
          <span>k</span>
          <span>s</span>
        </h1>
        {/* section1-line */}
        <section id="lineSection" className="work-line">
          <div id="line" className="line" />
        </section>
        {/* start works */}
        <section id="work-1" className="work">
          <div id="work-block1" className="block" />
          <div className="work-grid">
            <div ref={work1_img} className="work-img">
              <img src={work1_img_url_1} alt="work1-img" />
            </div>
            <aside ref={work1_h1} className="side-div">
              <h1>Belle Ame</h1>
              <p>
                관리자 대시보드까지 갖춘 쇼핑몰 입니다. <br />
                또한 카테로리 기능으로 편리하게 쇼핑할 수 있습니다. <br />
                <p>사용언어: React, Typescript, Node.js</p>
              </p>

              <div className="work-link">
                <span>
                  <a href={belle_ame_link}>Belle Ame</a>
                </span>
                <span>
                  <a href={belle_ame_git}>Git Link</a>
                </span>
              </div>
            </aside>
          </div>
          {/* background-figure */}
          <img
            className="figure-bg-left-bottom"
            src={figure_bg_left_bottom}
            alt="figure-bg-left-bottom"
          />
          <img
            className="figure-bg-right-bottom"
            src={figure_bg_right_bottom}
            alt="figure_bg_right_bottom"
          />
          <img
            className="figure-bg-right-top"
            src={figure_bg_right_top}
            alt="figure_bg_right_top"
          />
        </section>
        <section id="work-2" className="work">
          <div id="work-block2" className="block" />
          <div className="work-grid">
            <div ref={work2_img} className="work-img">
              <img src={work1_img_url_2} />
            </div>
            <aside ref={work2_h1} className="side-div">
              <h1>Tutorang</h1>
              <p>
                온라인/오프라인으로 만나 대화하는 튜터링 매칭 서비스입니다.
                <br />
                실시간 채팅기능과 커뮤니티 기능도 구현했습니다. 반응형으로
                모바일에서도 사용할 수 있습니다.
                <p>사용언어: React, Typescript, Supabase</p>
              </p>
              <div className="work-link">
                <span>
                  <a href={tutorang_link}>Tutorang</a>
                </span>

                <span>
                  <a href={tutorang_git}>Git Link</a>
                </span>
              </div>
            </aside>
          </div>
          {/* background-figure */}
          <img
            className="figure-bg-left-bottom"
            src={figure_bg_left_bottom}
            alt="figure-bg-left-bottom"
          />
          <img
            className="figure-bg-right-bottom"
            src={figure_bg_right_bottom}
            alt="figure_bg_right_bottom"
          />
          <img
            className="figure-bg-right-top"
            src={figure_bg_right_top}
            alt="figure_bg_right_top"
          />
        </section>
        <section id="work-3" className="work">
          <div id="work-block3" className="block" />
          <div className="work-grid">
            <div ref={work3_img} className="work-img">
              <img src={work1_img_url_3} />
            </div>
            <aside ref={work3_h1} className="side-div">
              <h1>Netflix</h1>
              <p>
                직관적이고 사용자 친화적인 인터페이스를 통해 편리한 경험을
                제공합니다. <br />
                또한 인기영화부터 개봉예정 영화까지 다양한 서비스를 이용할 수
                있습니다.
                <p>사용언어: React, Css</p>
              </p>

              <div className="work-link center">
                <span>
                  <a href={netflix_link}>Netflix</a>
                </span>

                <span>
                  <a href={netflix_git}>Git Link</a>
                </span>
              </div>
            </aside>
          </div>
          {/* background-figure */}
          <img
            className="figure-bg-left-bottom"
            src={figure_bg_left_bottom}
            alt="figure-bg-left-bottom"
          />
          <img
            className="figure-bg-right-bottom"
            src={figure_bg_right_bottom}
            alt="figure_bg_right_bottom"
          />
          <img
            className="figure-bg-right-top"
            src={figure_bg_right_top}
            alt="figure_bg_right_top"
          />
        </section>
      </div>
    </>
  );
};

export default SectionWork;
