import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview } from "../api";

function SingleReview() {
  const [singleReview, setSingleReview] = useState();
  let { review_id } = useParams();

  useEffect(() => {
    getSingleReview(review_id).then((results) => {
      setSingleReview(results);
    });
  }, [singleReview]);

  return (
    <div>
      {!singleReview ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <li className="Review-list" key={singleReview.review_id}>
            <h3>{singleReview.title}</h3>
            <p>Created by: {singleReview.owner}</p>
            <p>Category: {singleReview.category}</p>
            <img
              src={singleReview.review_img_url}
              alt={singleReview.title}
              height="100px"
            />
            <p>{singleReview.review_body}</p>
            <p>Votes: {singleReview.votes}</p>
          </li>
        </ul>
      )}
    </div>
  );
}
export default SingleReview;
