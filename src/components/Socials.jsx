import React from "react";
import arroba from "./../assets/icons/arroba.svg";
import LinkeDin from "./../assets/icons/LinkeDin.svg";
import GitHub from "./../assets/icons/GitHubWhite.svg";
import Instagram from "./../assets/icons/Instagram.svg";
import YouTube from "./../assets/icons/YouTube.svg";
import Spotify from "./../assets/icons/spotify.svg";
const Socials = () => {
  return (
    <div className=" mx-auto mt-6 w-11/12 rounded-3xl md:w-10/12 lg:w-8/12">
      <h1 className="ml-3 flex gap-3 py-3  text-2xl  font-bold text-white md:ml-7 md:text-3xl">
        Social <img className="w-[40px]" src={arroba} alt="" />
      </h1>
      <div className="grid grid-cols-2 gap-3  pt-3 md:grid-cols-3 md:gap-4 lg:grid-cols-5  lg:gap-4">
        <div className="mx-auto flex">
          <a
            className="flex w-40 items-center rounded-3xl border-4 border-blue-600 px-5 py-5 font-semibold  shadow-lg transition-all duration-300 hover:shadow-blue-600"
            href="https://www.linkedin.com/in/luis-alfredo-saavedra-falcon-11147723a/" target="_blank"
          >
            <img className="w-[100px]" src={LinkeDin} alt="" />{" "}
          </a>
        </div>
        <div className="mx-auto flex justify-center">
          <a
            className="flex  w-40 items-center gap-4 rounded-3xl border-4 border-white py-5 font-semibold  shadow-lg transition-all duration-300 hover:shadow-white"
            href="https://github.com/Meteoro01" target="_blank"
          >
            <img className="mx-auto h-[30px] w-[100px]" src={GitHub} alt="" />
          </a>
        </div>
        <div className="mx-auto flex justify-center">
          <a
            className=" flex   w-40 gap-1 rounded-3xl border-4 border-pink-600 py-5   font-semibold shadow-lg duration-300 hover:shadow-pink-600"
            href="https://www.instagram.com/meteorodev/" target="_blank"
          >
            <img className="mx-auto w-[100px] " src={Instagram} alt="" />
          </a>
        </div>
        <div className="mx-auto flex justify-center">
          <a
            className="flex items-center gap-1 rounded-3xl border-4 border-red-600 px-7  py-5 font-semibold shadow-lg duration-300 hover:shadow-red-600"
            href="https://www.youtube.com/channel/UCEMuzHUCPoyAu4zIsjLCP1Q" target="_blank"
          >
            <img className="mx-auto h-[30px] w-[100px]" src={YouTube} alt="" />
          </a>
        </div>
        <div className="mx-auto flex justify-center">
          <a
            className="flex  items-center gap-1 rounded-3xl border-4 border-green-500 px-7 py-5 font-semibold  shadow-lg duration-300 hover:shadow-green-600"
            href="https://open.spotify.com/user/21xkvjwwjtu3moisppx6w6r7y" target="_blank"
          >
            <img className="w-[100px]" src={Spotify} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Socials;
