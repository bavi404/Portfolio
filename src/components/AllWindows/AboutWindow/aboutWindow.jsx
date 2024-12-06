import Window from "../../Window/window";
import notepad_small from "../../../assets/notepad_small.svg";
import "./aboutWindow.scss";

import reactLogo from "../../../assets/projectImages/react.png";
import htmlLogo from "../../../assets/projectImages/html.png";
import cssLogo from "../../../assets/projectImages/css.png";
import JSLogo from "../../../assets/projectImages/javascript.png";
import scssLogo from "../../../assets/projectImages/scss.png";
import figmaLogo from "../../../assets/projectImages/figma.png";

function AboutWindow({ onClose }) {
  return (
    <Window
      title="About Me - Notepad"
      iconSrc={notepad_small}
      onClose={onClose}
    >
      <div className="about-content">
        <h2>------------------------------------</h2>
        <h2>About Me</h2>
        <p>
          I'm Bavishya Sankaranarayanan, a 19-year-old Computer Science student based in India. 
          Passionate about web development, artificial intelligence, and creating intuitive user experiences, 
          I'm constantly striving to bring innovative ideas to life.
        </p>
        <h2>------------------------------------</h2>
        <h3>More About Me</h3>
        <p>
          Beyond coding, I enjoy writing poetry, playing the guitar, and exploring creative outlets. 
          I love collaborating on meaningful projects and value lifelong learning and teamwork.
        </p>
        <h2>------------------------------------</h2>
        <h3>The technologies I use</h3>
      </div>

      <div className="about-technologies">
        <div className="about-technologies-logo">
          <img src={htmlLogo} alt="HTML Logo" />
          <h4>HTML</h4>
        </div>
        <div className="about-technologies-logo">
          <img src={cssLogo} alt="CSS Logo" />
          <h4>CSS</h4>
        </div>
        <div className="about-technologies-logo">
          <img src={scssLogo} alt="SCSS Logo" />
          <h4>SCSS</h4>
        </div>
        <div className="about-technologies-logo">
          <img src={JSLogo} alt="JavaScript Logo" />
          <h4>JavaScript</h4>
        </div>
        <div className="about-technologies-logo">
          <img src={reactLogo} alt="ReactJS Logo" />
          <h4>ReactJS</h4>
        </div>
        <div className="about-technologies-logo">
          <img src={figmaLogo} alt="Figma Logo" />
          <h4>Figma</h4>
        </div>
      </div>
    </Window>
  );
}

export default AboutWindow;
