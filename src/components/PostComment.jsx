import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postCommentsByReview } from "../api";

function PostComments({ user, setComments }) {
  const [newComment, setNewComment] = useState("");
  const [isError, setIsError] = useState(false);
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);
  const [postingComment, setPostingComment] = useState(false);

  let { review_id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.length > 0) {
      setPostingComment(true);
      setComments((currentComment) => {
        let comment = {
          comment_id: new Date(),
          author: user,
          body: newComment,
          votes: 0,
        };
        return [comment, ...currentComment];
      });
    }

    postCommentsByReview(user, newComment, review_id)
      .then(() => {
        setSuccessfulSubmit(true);
      })
      .catch((error) => {
        setIsError(true);
      });
    setTimeout(() => setPostingComment(false), 1000);

    setNewComment("");
  };

  return (
    <div>
      <form className="Comment-form" onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          placeholder="Write your comment here"
        />

        <button type="submit" disabled={postingComment ? true : false}>
          Submit
        </button>
      </form>
      {isError ? <p>Cannot submit empty comment</p> : null}
      {successfulSubmit ? <p>Comment added</p> : null}
    </div>
  );
}

export default PostComments;
