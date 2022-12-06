import React from "react";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Nav from "./components/Nav";

function App() {
  const [reviews, setReviews] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home reviews={reviews} setReviews={setReviews} />}
        />
      </Routes>
    </div>
  );
}

export default App;
