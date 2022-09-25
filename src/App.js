import { Navbar, Counter } from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CountContext from "./context/CountContext";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  return (
    <Router className="app">
      <CountContext.Provider value={{ value, setValue }}>
        <Navbar />
        <Counter />
        <Routes>
          <Route exact path="/counter" element={<Counter />} />
        </Routes>
      </CountContext.Provider>
    </Router>
  );
}
export default App;
