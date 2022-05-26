import React, { createContext } from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HistoryPage from "./Pages/HistoryPage";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mintfunds-react" element={<HomePage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
