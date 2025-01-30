import "./assets/styles/main.scss";
import useInitApp from "./hooks/useInitApp";
import Home from "./components/Home";
import Quotes from "./components/Quotes";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  useInitApp();

  return (
    <>
      <Home />
      <Skills />
      <Quotes />
      <Contact />
    </>
  );
}

export default App;
