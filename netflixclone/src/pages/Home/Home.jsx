import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header1.jsx";
import Banner from "../../components/Banner/Banner";
// import Row from "../../components/rows/Row.jsx";
// import requests from "../../components/Util/requests";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      {/* <Row
        title="Netflix Orginals"
        fetchUrl={requests.fetchNetflexOrginals}
        isLargeRow={true}
      />
      <Row title="Trendings" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated " fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies " fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies " fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies " fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies " fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries " fetchUrl={requests.fetchDocumentaries} />
      <br></br>
      <br></br>
      <br></br> */}
      <Footer />
    </>
  );
};

export default Home;
