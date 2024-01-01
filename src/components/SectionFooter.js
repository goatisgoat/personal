import { useEffect, useRef } from "react";

const SectionFooter = () => {
  const about_content = useRef(null);

  useEffect(() => {
    const observerAbout = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add("scrolled-about-up");
      } else {
        entries[0].target.classList.remove("scrolled-about-up");
      }
    });

    about_content && observerAbout.observe(about_content.current);
  }, []);

  return (
    <footer id="about">
      <div className="about-bg">
        <div className="about-size">
          <div ref={about_content} className="about-content-div">
            <h1>Thank you for watching!</h1>
            <ul className="about-ul">
              <li>
                <a href="https://github.com/goatisgoat">
                  <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                </a>
              </li>
              <li>
                <a href="https://velog.io/@yj0509_11/posts">
                  <img src="https://images.velog.io/images/velog/profile/9aa07f66-5fcd-41f4-84f2-91d73afcec28/green%20favicon.png" />
                </a>
              </li>
            </ul>
            <p className="rights"> &copy; 2023 YJ All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SectionFooter;
