import React, { useState, useEffect } from "react";
import axios from "../Axios/axios";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]); // run once when the row loads and don't run again ----empty 

  return (
    <div className="row">
      <h2>{title}</h2>
      {/* <div>
        {movies.map((movie) => (
          <img
            className="row_poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}/>
        ))}
      </div> */}
    </div>
  );
}

export default Row;