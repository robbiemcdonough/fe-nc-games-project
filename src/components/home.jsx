import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReviews } from "../api";
import "../App.css";

function Home({ reviews, setReviews }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getReviews().then((results) => {
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
              <Link className='Link' to={`/reviews/${review.review_id}`} key={review.review_id}>
                <li className="Review-list">
                  <h3>{review.title}</h3>
                  <p>Created by: {review.owner}</p>
                  <p></p>
                  <p>Category: {review.category}</p>
                  <img
                    src={review.review_img_url}
                    alt={review.title}
                    height="100px"
                  />
                  <p>Votes: {review.votes}</p>
                  <p>Comments: {review.comment_count}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Home;
