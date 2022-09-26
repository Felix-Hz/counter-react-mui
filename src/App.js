import { Navbar, Counter, About, Contact, Footer } from "./components/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import CountContext from "./context/CountContext";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="app">
      <CountContext.Provider value={{ value, setValue }}>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route exact path="/counter" element={<Counter />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/" element={<Counter />} />
          </Routes>
          <Footer />
        </div>
      </CountContext.Provider>
    </div>
  );
}
export default App;
