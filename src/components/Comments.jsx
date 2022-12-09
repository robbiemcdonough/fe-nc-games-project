import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByReview } from "../api";

function Comments() {
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);
  let { review_id } = useParams();

  useEffect(() => {
    setLoadingComments(true);
    getCommentsByReview(review_id).then((results) => {
      setComments(results.review);
      console.log(comments);
      setLoadingComments(false);
    });
  }, [review_id]);

  return (
    <div>
      {loadingComments ? (
        <p>Loading...</p>
      ) : comments.length === 0 ? (
        <h3 className="Comment-header">No comments have been left</h3>
      ) : (
        <ul>
          <h3 className="Comment-header">Comments</h3>
          {comments.map((comment) => {
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
