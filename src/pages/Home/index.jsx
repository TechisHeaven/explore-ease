import React from "react";
import Header from "../../components/Header";
import SearchFilter from "../../components/SearchFilter";
import Carousel from "../../components/Carousel";
import PopularSearch from "../../components/PopularSearch";
import Catogery from "../../components/Catogery";
import AboutHome from "../../components/AboutHome";
import TopDestination from "../../components/TopDestination";
import Footer from "../../components/Footer";

const index = () => {
  const images = [
    {
      image: "./1-banner.png",
      text: "Lotas temple",
    },
    {
      image: "./2-banner.png",
      text: "Taj mahal",
    },
    {
      image: "./3-banner.png",
      text: "gateway of india",
    },

    // Add more image URLs here
  ];
  return (
    <>
      <Header />
      <Carousel slides={images} />
      <SearchFilter />
      <PopularSearch />
      <Catogery />
      <AboutHome />
      <TopDestination />
      <Footer />
    </>
  );
};

export default index;
