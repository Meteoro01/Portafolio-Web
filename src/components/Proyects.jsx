import React from "react";

import NftPro from "./proyects/NftPro";
import VetPro from "./proyects/VetPro";
import RestaurantPro from "./proyects/RestaurantPro";
import TodoListPro from "./proyects/TodoListPro";


const Proyects = () => {
  return (
    <div className=" mx-auto rounded-3xl lg:w-8/12 md:w-10/12 w-11/12 mt-6">
      <h1 className="text-white text-2xl md:text-3xl md:ml-7 ml-3  font-bold py-3 ">Proyects</h1>
      <div className=" flex flex-col bg-gray-800  rounded-3xl lg:mx-auto    ">
        <RestaurantPro />
        <VetPro />
        <NftPro />
        <TodoListPro/>
      </div>

    </div>
  );
};

export default Proyects;
