import "./App.css";
import AboutMe from "./components/AboutMe/AboutMe";
import HeyThere from "./components/AboutMe/HeyThere";
import TechStack from "./components/AboutMe/TechStack";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <HeyThere />
      <TechStack />
      <AboutMe />
    </div>
  );
}

export default App;
