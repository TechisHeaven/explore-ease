import React from "react";

const PopularSearch = () => {
  const popular = [
    {
      name: "Lotus temple",
    },
    {
      name: "Taj mahal",
    },
    {
      name: "Eifiel tower",
    },
    {
      name: "Gateway of India",
    },
    {
      name: "The grand palace",
    },
    {
      name: "Taman sari",
    },
    {
      name: "Red fort",
    },
  ];
  return (
    <div className="flex flex-col gap-4 items-center p-6 relative">
      <img
        src="./popular.png"
        className="absolute w-20 right-[40%] top-0"
        alt=""
      />
      <h1 className="font-semibold text-2xl">PopularSearch</h1>
      <div className="popularSearches flex flex-wrap gap-4 px-10 py-4 capitalize">
        {popular.map((data, index) => {
          return (
            <div className="searchResult px-8 text-[#8a898b] text-lg py-2 border border-[#8a898b] cursor-pointer rounded-xl font-semibold">
              {data.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularSearch;
