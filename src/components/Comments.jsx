import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByReview } from "../api";

function Comments() {
  const [commentClick, setCommentClick] = useState();
  let { review_id } = useParams();
  console.log(review_id);

  useEffect(() => {
    getCommentsByReview(review_id).then((results) => {
      setCommentClick(results.review);
      console.log(commentClick);
    });
  }, []);

  return (
    <div>
      {!commentClick ? (
        <p>Loading...</p>
      ) : (
        <ul>
          <h3 className="Comment-header">Comments</h3>
          {commentClick.map((comment) => {
            return (
              <li className="Comment-list" key={comment.comment_id}>
                <p>Author: {comment.author}</p>
                <p>{comment.body}</p>
                <p>Votes: {comment.votes}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Comments;
