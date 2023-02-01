import React from "react";
import HotelCard from "../components/HotelCard";

const Home = () => {
  return (
    <div className=" ">
      <div></div>
      <div className=" grid gap-2 md:grid-cols-3 lg:grid-cols-4 ">
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
        <HotelCard />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
