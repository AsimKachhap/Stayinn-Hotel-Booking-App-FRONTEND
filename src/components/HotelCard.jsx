import { React, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const HotelCard = () => {
  const [isLiked, setIsLiked] = useState(false);

  const hotels = [
    {
      hotelName: "Shangri La",
      city: "New Delhi",
      address: "19, Ashoka Rd, Janpath, Connauught Place, New Delhi, Delhi",
      PIN: 11001,
      startingPrice: 17500,
    },
  ];

  return hotels.map((item) => {
    return (
      <div className=" hotelCard flex flex-col  bg-[#F0F0F0] rounded-lg">
        <div className="flex-2 w-[vw] max-h-[250px] rounded-lg">
          <img className="rounded-t-md" src="/images/hotel1.jpg" alt="" />
        </div>

        <div className="flex-3 grid grid-rows-2 p-2 gap-4">
          <div className="">
            <h2 className="font-bold text-2xl">{item.hotelName}</h2>
            <div className="flex flex-row gap-2 items-center ">
              <MdLocationOn className=" text-yellow-500 " />
              <span className="text-gray-500 font-semibold ">{item.city}</span>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center mb-4">
            <div>
              <p>Starts from </p>
              <p>
                <span className="text-2xl font-semibold">
                  $ {item.startingPrice}
                </span>
                <span className="text-gray-500">/NIGHT</span>
              </p>
            </div>
            <div className="h-[30px] w-[30px] rounded-md flex items-center justify-center mr-2 ">
              {isLiked ? (
                <AiFillHeart
                  className="text-pink-600 h-[30px] w-[25px] "
                  onClick={() => {
                    setIsLiked(false);
                  }}
                />
              ) : (
                <AiOutlineHeart
                  className="text-gray-600 bg-transparent h-[30px] w-[25px] "
                  onClick={() => {
                    setIsLiked(true);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default HotelCard;
