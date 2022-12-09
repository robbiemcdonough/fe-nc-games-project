import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { patchVotesByReview } from "../api";

function Votes({ reviewVotes, voteCount, setVoteCount }) {
  const [vote, setVote] = useState(0);


  let { review_id } = useParams();

  const increment = (vote, review_id) => {
    patchVotesByReview(vote, review_id);
    setVoteCount((current) => current + vote);
  };

  return (
    <div>
      <button onClick={() => increment(1, review_id)}>Up-vote</button>
      <button onClick={() => increment(-1, review_id)}>Down-vote</button>
    </div>
  );
}
export default Votes;
