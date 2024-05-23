import "./App.css";
import NavigationComponent from "./component/navigation/navigation.component";
import HeroComponent from "./component/hero/hero.component";
import ProjectComponent from "./component/project/project.component";
import ExperienceComponent from "./component/experience/experience.component";
import FooterComponent from "./component/footer/footer.component";

function App() {
  return (
    <div className="app_container">
      <NavigationComponent />
      <HeroComponent />
      <ProjectComponent />
      {/* <ExperienceComponent /> */}
      <FooterComponent />
    </div>
  );
}

export default App;
