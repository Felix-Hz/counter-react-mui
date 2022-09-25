import { Navbar } from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router className="app">
      <Navbar />
      {/* <Router>
        <div className="App">Hola</div>
        <Navbar />
      </Router> */}
    </Router>
  );
}
export default App;
