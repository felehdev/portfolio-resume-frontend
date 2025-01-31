import "./assets/styles/main.scss";
import useInitApp from "./hooks/useInitApp";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Quotes from "./components/Quotes";
import Contact from "./components/Contact";

function App() {
  useInitApp();

  return (
    <>
      <Home />
      <Skills />
      <Resume />
      <Quotes />
      <Contact />
    </>
  );
}

export default App;
