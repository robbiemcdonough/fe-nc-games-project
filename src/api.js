import axios from "axios";

export const gamesApi = axios.create({
  baseURL: "https://nice-lime-firefly-hose.cyclic.app/",
});

export const getReviews = () => {
  return gamesApi.get("/api/reviews").then(({ data: { reviews } }) => {
    return reviews;
  });
};

export const getSingleReview = (review_id) => {
  return gamesApi.get(`/api/reviews/${review_id}`).then(({ data: review }) => {
    return review.review;
  });
};

export const getCommentsByReview = (review_id) => {
  return gamesApi
    .get(`/api/reviews/${review_id}/comments`)
    .then(({ data: comments }) => {
      return comments;
    });
};

export const patchVotesByReview = (voteValue, review_id) => {
  const voteUpdate = { inc_vote: voteValue };
  return gamesApi
    .patch(`/api/reviews/${review_id}`, voteUpdate)
    .then((response) => {})
    .catch((err) => {
      console.log(err);
    });
};
