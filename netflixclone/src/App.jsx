import React from "react";
import "./App.css";
import Row from "./components/rows/Row";
import request from "./components/Util/requests.jsx";


function App() {
  return (
    <div className="App">
      <Row title="NetflexOrginals" fetchUrl={request.fetchNetflexOrginals} />
      <Row title="Treding Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
