import "./assets/styles/main.scss";
import useInitApp from "./hooks/useInitApp";
import Home from "./components/Home";
import Quotes from "./components/Quotes";
import Contact from "./components/Contact";

function App() {
  useInitApp();

  return (
    <>
      <Home />
      <Quotes />
      <Contact />
    </>
  );
}

export default App;
