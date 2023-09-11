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
      image: "./1.png",
      text: "Lotas temple",
    },
    {
      image: "./3.png",
      text: "Taj mahal",
    },
    {
      image: "./5.png",
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
