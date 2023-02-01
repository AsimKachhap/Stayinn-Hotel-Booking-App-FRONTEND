import React from "react";
import HotelCard from "../components/HotelCard";
import { CgSearch } from "react-icons/cg";
import { BsFilterCircle } from "react-icons/bs";

const Home = () => {
  return (
    <div className="">
      <div
        className="p-2 my-2 min-w-full flex flex-row items-center justify-between text-black bg-slate-400 border-[1px]
       border-black rounded-full  "
      >
        <div className="h-10 w-10">
          <CgSearch className="min-h-full min-w-full" />
        </div>
        <div>Search for Any Location</div>
        <div>
          <BsFilterCircle />
        </div>
      </div>

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
