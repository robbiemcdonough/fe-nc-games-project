import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postCommentsByReview } from "../api";

function PostComments({ user, setComments }) {
  const [newComment, setNewComment] = useState("");
 // const [isError, setIsError] = useState(false); state to be used later in error handling
  const [successfulSubmit, setSuccessfulSubmit] = useState(false);

  let { review_id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    setComments((currentComment) => {
      let comment = {
        comment_id: new Date(),
        author: user,
        body: newComment,
        votes: 0,
      };
      return [comment, ...currentComment];
    });

    postCommentsByReview(user, newComment, review_id)
      .then(() => {
        setSuccessfulSubmit(true);
      })
    //   .catch((error) => {
    //     setIsError(true);
    //   });

    setNewComment("");

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
          placeholder="Write your comment here"
        />

        <button type="submit">Submit</button>
      </form>
      {successfulSubmit ? <p>Comment added</p> : null}
    </div>
  );
}

export default PostComments;
