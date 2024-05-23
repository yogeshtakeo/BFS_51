import Button from "../../ui/button/button.ui.jsx";
import "./heroStyle.css";

function HeroComponent() {
  return (
    <div className="hero_section">
      <div className="content_hero">
        <h1>Hello World! Its Frontend Dev</h1>
        <p>
          If you are looking for a quality and creative developer. I have 6
          years of experience in the planet earth as a developer. Feel Free to
          reach me our on my contact bio or my social media platform.
        </p>
        <div className="action_container">
          <Button>Contact Me</Button>
          <Button>Download Resume</Button>
        </div>
      </div>
      <div className="image_container">
        <img src={""} alt="Yogesh" />
      </div>
    </div>
  );
}

export default HeroComponent;
