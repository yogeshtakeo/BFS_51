import "./App.css";
import NavigationComponent from "./component/navigation/navigation.component.jsx";
// import HeroComponent from "./component/hero/hero.component.jsx";
import ProjectComponent from "./component/project/project.component.jsx";
import FooterComponent from "./component/footer/footer.component.jsx";

function App() {
  return (
    <div className="app_container">
      <NavigationComponent />
      {/* <HeroComponent /> */}
      <ProjectComponent />
      {/* <ExperienceComponent /> */}
      <FooterComponent />
    </div>
  );
}

export default App;
