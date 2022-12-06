import { useEffect } from "react";
import gamesApi from "../api";

function Home({ reviews, setReviews }) {
  useEffect(() => {
    gamesApi
      .get("api/reviews")
      .then((res) => res)
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  });
  return (
    <div>
      <p>Working Home component</p>
    </div>
  );
}

export default Home;
