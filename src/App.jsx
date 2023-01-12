import "./App.css";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import HeyThere from "./components/AboutMe/HeyThere";
import TechStack from "./components/AboutMe/TechStack";
import Navigation from "./components/Navigation/Navigation";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  const queryParams = document.location.search
  const queryParam = queryParams.match(/\?q=([\w+|+]+)/)
  return (
    <div className="App">
      <Navigation />
      <Header />
      <HeyThere companyName={queryParam? queryParam[1]:null}/>
      <TechStack />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
