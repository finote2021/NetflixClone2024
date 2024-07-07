import React from "react";
const API_KEY = "process.env.REACT_APP_API_KEY";
const GENRES = {
  ACTION: 28,
  COMEDY: 35,
  HORROR: 27,
  ROMANCE: 10749,
  DOCUMENTARY: 99,
};

const requests = {
  fetchNetflexOrginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=${GENRES.ACTION}`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=${GENRES.COMEDY}`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=${GENRES.HORROR}`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=${GENRES.ROMANCE}`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=${GENRES.DOCUMENTARY}`,
};

console.log(requests);

export default requests;
