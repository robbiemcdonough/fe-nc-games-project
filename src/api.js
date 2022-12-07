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

//export get request here

//add loading state
