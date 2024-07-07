import React from "react";
import Header from "../../components/Header/Header.jsx";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/rows/Row";
import requests from "../../components/Util/requests";
import Footer from "../../components/Footer/Footer.jsx";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Row title="NetflexOrginals" fetchUrl={requests.fetchNetflexOrginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default Home;
