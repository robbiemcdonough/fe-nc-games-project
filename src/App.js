import React from "react";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Nav from "./components/Nav";
import SingleReview from "./components/SingleReview";
import Comments from "./components/Comments";

function App() {
  const [user, setUser] = useState("tickle122");
  const [reviews, setReviews] = useState([]);

  return (
    <div className="App">
      <header className="App-header">NC Games
      </header>
      <p id='userName'>Logged in as {user}</p>
      <Nav 
      />
      <Routes>
        <Route
          path="/"
          element={<Home reviews={reviews} setReviews={setReviews} />}
        />
        <Route
          path={"/reviews/:review_id"}
          element={<SingleReview user={user} />}
        />
        <Route path={"/reviews/:review_id/comments"} element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
