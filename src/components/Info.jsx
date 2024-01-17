import React from "react";
import reactvsg from "../assets/icons/React.svg";
import csssvg from "../assets/icons/Css.svg";
import htmlsvg from "../assets/icons/Html.svg";
import javascriptsvg from "../assets/icons/JavaScript.svg";
import TailwindCsssvg from "../assets/icons/TailwindCss.svg";
import Sqlsvg from "../assets/icons/Sql.svg";

const Info = () => {
  return (
    <div className="mx-auto  lg:w-8/12 md:w-10/12 w-11/12 py-6">
      <h1 className="md:ml-7 ml-3 md:text-3xl text-2xl font-bold text-white">About Me</h1>
      <div className="py-4 md:pl-10 pl-5 md:pr-32 pr-4 text-left">
        <p className="md:text-xl text-lg text-justify text-white ">
          I am a Software Development student with a focus on Front-End. I am
          passionate about creating attractive user interfaces and functional
          that meets the needs of users.
        </p>
      </div>
      <div className="py-4">
        <h1 className="md:ml-7 ml-3  md:text-3xl text-2xl  font-semibold text-white">Skills</h1>
        <div className="md:flex md:justify-around grid grid-cols-3 gap-4 md:flex-row  px-8 py-8">
          <img className="lg:w-[110px] lg:p-0 md:w-[75px] md:p-1 w-[50px]" src={htmlsvg} alt="" />
          <img className="lg:w-[105px] lg:p-0 md:w-[75px] md:p-1 w-[50px]" src={csssvg} alt="" srcset="" />
          <img className="lg:w-[100px] lg:p-0 md:w-[75px] md:p-1 w-[50px]" src={javascriptsvg} alt="" />
          <img className="lg:w-[110px] lg:p-0 md:w-[75px] md:p-1 w-[50px]" src={reactvsg} alt="" />
          <img className="lg:w-[110px] lg:p-0 md:w-[75px] md:p-1 w-[50px]" src={TailwindCsssvg} alt="" />
          <img className="lg:w-[110px] lg:p-0 md:w-[75px] md:p-1 w-[50px]" src={Sqlsvg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Info;
