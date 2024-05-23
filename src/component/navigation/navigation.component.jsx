import "./navigation.css";
import Button from "../../ui/button/button.ui.jsx";

function NavigationComponent() {
  return (
    <div className="navigation_container">
      <h1>Yogesh B.</h1>
      <div className="navigation_action_center">
        <Button>Project</Button>
        <Button>Experience</Button>
      </div>
    </div>
  );
}

export default NavigationComponent;
