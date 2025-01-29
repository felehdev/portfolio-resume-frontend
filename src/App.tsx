import "./assets/styles/main.scss";
import useInitApp from "./hooks/useInitApp";
import Home from "./components/Home";

function App() {
  useInitApp();

  return (
    <>
      <Home />
    </>
  );
}

export default App;
