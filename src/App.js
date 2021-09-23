import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <>
        {/* Header (Nav) Component */}
        <Header />
        {/* Home (Hero) Component */}
        <Home />
      </>
    </div>
  );
}

export default App;
