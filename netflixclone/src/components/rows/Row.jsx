import React, { useEffect, useState } from "react";
import axios from "../Util/axios";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchurl, isLargeRow }) {
  const [movies, setMovies] = useState([]); //this to set all movies
  const [trailerUrl, setTrailerUrl] = useState(""); // to play movies on click
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchurl);
      setMovies(request.data.results);
      console.log(request.data.results);
    }
    fetchData();
  }, [fetchurl]);
  console.log(movies);
  //
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://devloprs.google.com/youtub/player_parameters
      autoplay: true,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          // eg. https://www.youtube.com/watch?v=9O1Iy9od7-A
          setTrailerUrl(urlParams.get("v"));
          console.log(url);
          console.log(urlParams);
        })
        .catch((error) => console.log(error));
    }
  };

  const base_image = "https://image.tmdb.org/t/p/original/";
  return (
    // <<< title>>
    // <<< fecht list of movies >>>

    <div className="row">
      <h2 className="title">{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)} // this method uses function to play movies
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_image}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
        <div />
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoID={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
}

export default Row;
