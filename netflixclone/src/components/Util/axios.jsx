import axios from "axios";

const instance = axios.create({
  basURL: "https://api.themoviedb.org/3/",
});
export default instance;


// bring base url from TMDB to make request the movies



