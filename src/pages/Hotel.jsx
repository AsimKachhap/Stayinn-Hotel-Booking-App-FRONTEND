import React from "react";
import { AiFillStar } from "react-icons/ai";

const Hotel = () => {
  const hotel = [
    {
      hotelName: "Shangri La",
      city: "New Delhi",
      state: "Delhi",
      address: "19, Ashoka Rd, Janpath, Connauught Place, New Delhi, Delhi",
      PIN: 11001,
      startingPrice: 17500,
      rating: 4,
    },
  ];

  return (
    <div className="">
      <div className="flex-2 w-[vw] max-h-[250px] ">
        <img
          className=" w-full h-full"
          src="/images/hotel1.jpg"
          alt={hotel.hotelName}
        />
        <div className="grid grid-cols-2">
          <div>
            <h2>{hotel.hotelName}</h2>
            <h3>
              {hotel.city}, {hotel.state}
            </h3>
            <div>
              <AiFillStar />
              {hotel.rating}
            </div>
          </div>
          <div>2</div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
