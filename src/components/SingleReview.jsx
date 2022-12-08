import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview } from "../api";
import Comments from "./Comments";
import Votes from "./Votes";

function SingleReview() {
  const [voteCount, setVoteCount] = useState();
  const [singleReview, setSingleReview] = useState();
  const [isShown, setIsShown] = useState(false);
  let { review_id } = useParams();

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  useEffect(() => {
    getSingleReview(review_id).then((results) => {
      setSingleReview(results);
      setVoteCount(results.votes);
    });
  }, []);

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
            <p>Votes: {voteCount}</p>
            <Votes
              reviewVotes={singleReview.votes}
              voteCount={voteCount}
              setVoteCount={setVoteCount}
            />
            <button onClick={handleClick}>Show Comments</button>
          </li>
        </ul>
      )}
      {isShown ? <Comments /> : null}
    </div>
  );
}
export default SingleReview;
