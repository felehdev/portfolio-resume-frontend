import PerfectScrollbar from "perfect-scrollbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Quotes from "./components/Quotes";
import Resume from "./components/Resume";
import Skills from "./components/Skills";

import "./assets/styles/main.scss";

function App() {
  new PerfectScrollbar("#root", {});

  return (
    <>
      <Home />
      <About />
      <Skills />
      <Resume />
      <Quotes />
      <Contact />
    </>
  );
}

export default App;
