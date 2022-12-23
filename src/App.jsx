import "./App.css";
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
    </div>
  );
}

export default App;
