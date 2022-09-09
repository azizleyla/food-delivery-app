import React from "react";
import foodImg from "../img/c3.png";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";

const RowContainer = ({ flag, data }) => {
  return (
    <div
      className={`w-full flex items-center gap-3 my-12 scroll-smooth ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden"
      }`}
    >
      {data && data.length > 0
        ? data.map((item) => (
            <div
              key={item.id}
              className="hover:drop-shadow-lg w-300 min-w-[340px] md:w-340 my-12 h-auto bg-gray-100 p-2  rounded-lg backdrop-blur-lg cursor-pointer"
            >
              <div className="w-full flex items-center justify-between">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  className="w-40 drop-shadow-2xl -mt-8"
                  src={item.imageUrl}
                  alt=""
                />

                <motion.div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md">
                  <MdShoppingBasket className="text-white" />
                </motion.div>
              </div>

              <div className="w-full flex flex-col gap-4 items-end justify-end">
                <p className="text-textColor font-semibold text-base md:text-lg">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {item.calories}
                </p>
                <div className="flex items-center gap-8">
                  <p className="text-lg text-headingColor font-semibold">
                    <span className=" text-sm text-red-500">$</span>
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default RowContainer;
