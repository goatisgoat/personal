import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SectionSkills = () => {
  const skills_left = useRef(null);
  const skills_right = useRef(null);

  useEffect(() => {
    const observerSkillsLeft = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add("scrolled-top");
      } else {
        entries[0].target.classList.remove("scrolled-top");
      }
    });

    const observerSkillsRight = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add("scrolled-bottom");
        } else {
          entries[0].target.classList.remove("scrolled-bottom");
        }
      }
    );

    skills_left && observerSkillsLeft.observe(skills_left.current);
    skills_right && observerSkillsRight.observe(skills_right.current);
  }, []);

  return (
    <section id="skills" className="skills-bg">
      <div className="skills">
        <aside ref={skills_left} className="skills-left">
          <div className="skills-left-circle"></div>
          <div className="skills-left-text">
            <span className="skills-left-text-svg">
              <FontAwesomeIcon
                color="white"
                size="xs"
                icon={faMagnifyingGlass}
              />
            </span>
            <span>Skills</span>
          </div>
        </aside>
        <aside ref={skills_right} className="skills-right">
          <div className="skills-right-img move-left">
            <img src="https://firebasestorage.googleapis.com/v0/b/belle-ame-405005.appspot.com/o/Frame%2022%20(9).png?alt=media&token=d49fd143-bc3d-47e6-a7e7-32e1152a0678" />
            <img src="https://firebasestorage.googleapis.com/v0/b/belle-ame-405005.appspot.com/o/Frame%2022%20(10).png?alt=media&token=4855f910-122a-4266-8092-decf2dddad44" />
            <img src="https://firebasestorage.googleapis.com/v0/b/belle-ame-405005.appspot.com/o/Frame%2022%20(8).png?alt=media&token=ec3a9b17-2b58-460c-bfd1-00dc5a03a626" />
          </div>
          <div className="skills-right-img move-right">
            <img src="https://firebasestorage.googleapis.com/v0/b/belle-ame-405005.appspot.com/o/Frame%2022%20(13).png?alt=media&token=25c87aa7-ee14-4d8e-b001-5f77cda3ba92" />
            <img src="https://firebasestorage.googleapis.com/v0/b/belle-ame-405005.appspot.com/o/Frame%2022%20(11).png?alt=media&token=b221c2d4-959b-45fb-b81d-4608b3cf806f" />
            <img src="https://firebasestorage.googleapis.com/v0/b/belle-ame-405005.appspot.com/o/Frame%2022%20(14).png?alt=media&token=c4736be1-e1f7-46c3-b598-fd1fc94ceff4" />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default SectionSkills;
