import "./assets/styles/main.scss";
import useInitApp from "./hooks/useInitApp";
import Home from "./components/Home";
import Contact from "./components/Contact";

function App() {
  useInitApp();

  return (
    <>
      <Home />
      <Contact />
    </>
  );
}

export default App;
