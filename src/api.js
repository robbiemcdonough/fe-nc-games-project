import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://nice-lime-firefly-hose.cyclic.app/",
});

export default gamesApi;
