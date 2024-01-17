import React from "react";
import userPhoto from "../assets/img/MeteoroDev.jpg";
const CardInfo = () => {
  return (
    <div className="mx-auto md:grid lg:w-8/12 md:w-10/12 w-full grid-cols-10  border-b-4  py-10">
      <div className="col-span-3 flex   justify-center ">
        <div className="rounded-[200px] bg-slate-900">
          <img
            src={userPhoto}
            alt=""
            className="w-[250px] rounded-[200px] p-3"
          />
        </div>
      </div>
      
      <div className=" items-left md:col-span-7 flex flex-col justify-center  mx-auto md:mx-0  gap-2 pl-10">
        <div>
          <h2 className="py-2 text-4xl font-bold text-white">Luis Saavedra</h2>
          <p className=" text-xl text-slate-500">Desarrollador Font-End WEB</p>
        </div>

      </div>
    </div>
  );
};

export default CardInfo;
