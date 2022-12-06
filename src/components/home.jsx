import { useEffect, useState } from "react";
import { getReviews } from "../api";
import "../App.css";

function Home({ reviews, setReviews }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getReviews()
      .then((res) => res)
      .then((results) => {
        setReviews(results);
        console.log(reviews);

        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {reviews.map((review) => {
            return (
              <li key={review.review_id} className="Review-list">
                <h3>{review.title}</h3>
                <p>Category: {review.category}</p>
                <img
                  src={review.review_img_url}
                  alt={review.title}
                  height="100px"
                />
                <p>Votes: {review.votes}</p>
                <p>Comments: {review.comment_count}</p>
                <button className="Full-review-button">See full review</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Home;
