import { useCallback, useLayoutEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isUp, setIsUp] = useState(false);
  const [pageY, setPageY] = useState(0);
  const [isBottom, setIsBottom] = useState(false);

  const [currentHash, setCurrentHash] = useState(
    window.location.hash.substring(1) || "main"
  );

  const handleScroll = useCallback(() => {
    const {
      scrollY,
      document: {
        documentElement: { scrollHeight, clientHeight },
      },
    } = window;

    const deltaY = scrollY - pageY;
    const isUp = scrollY !== 0 && deltaY >= 0;
    const isBottom = scrollHeight - scrollY - clientHeight === 0;

    setIsUp(isUp);
    setPageY(scrollY);
    setIsBottom(isBottom);
    if (isUp) {
    }
  }, [pageY, setIsUp, setPageY, setIsBottom]);

  const throttleHelper = (callback, waitTime) => {
    let timerId = null;

    return () => {
      if (timerId) return;

      timerId = setTimeout(() => {
        callback();
        timerId = null;
      }, waitTime);
    };
  };

  const throttleScroll = throttleHelper(handleScroll, 300);

  // 스크롤 이벤트
  useLayoutEffect(() => {
    document.addEventListener("scroll", throttleScroll);
    return () => document.removeEventListener("scroll", throttleScroll);
  }, [throttleScroll]);

  return (
    <nav
      className={
        isUp
          ? `header-container show`
          : `header-container  ${pageY === 0 ? "height0" : ""}`
      }
    >
      <section className="header-logo">YJ</section>
      <section className="header-links">
        <li onClick={() => setCurrentHash("main")}>
          <a
            href="#main"
            className={currentHash === "main" ? "currentHash" : ""}
          >
            Home
          </a>
        </li>
        <li onClick={() => setCurrentHash("skills")}>
          <a
            href="#skills"
            className={currentHash === "skills" ? "currentHash" : ""}
          >
            Skills
          </a>
        </li>
        <li onClick={() => setCurrentHash("lineSection")}>
          <a
            href="#lineSection"
            className={currentHash === "lineSection" ? "currentHash" : ""}
          >
            Work
          </a>
        </li>
        <li onClick={() => setCurrentHash("about")}>
          <a
            href="#about"
            className={currentHash === "about" ? "currentHash" : ""}
          >
            About
          </a>
        </li>
      </section>

      {/* mobile-side-menu */}
      <FontAwesomeIcon
        icon={faBars}
        className="header-bar"
        onClick={() => setIsModalOpen(!isModalOpen)}
      />
      <div
        className={`header-side-menu-outer ${
          isModalOpen ? "open-modal-outer" : ""
        }`}
        onClick={() => setIsModalOpen(!isModalOpen)}
      ></div>
      <div className={`header-side-menu ${isModalOpen ? "open-modal" : ""}`}>
        <ul>
          <li onClick={() => setCurrentHash("main")}>
            <a
              className={currentHash === "main" ? "current-hash-color" : ""}
              href="#main"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              Home
            </a>
          </li>
          <li onClick={() => setCurrentHash("skills")}>
            <a
              className={currentHash === "skills" ? "current-hash-color" : ""}
              href="#skills"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              Skills
            </a>
          </li>
          <li onClick={() => setCurrentHash("lineSection")}>
            <a
              className={
                currentHash === "lineSection" ? "current-hash-color" : ""
              }
              href="#lineSection"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              Work
            </a>
          </li>
          <li onClick={() => setCurrentHash("about")}>
            <a
              className={currentHash === "about" ? "current-hash-color" : ""}
              href="#about"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
