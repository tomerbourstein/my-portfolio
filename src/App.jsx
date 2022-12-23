import "./App.css";
import HeyThere from "./components/AboutMe/HeyThere";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <HeyThere />
    </div>
  );
}

export default App;
