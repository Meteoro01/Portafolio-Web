import React from "react";
import nft from "../../assets/img/nft.png";
import reactvsg from "../../assets/icons/React.svg";
import csssvg from "../../assets/icons/Css.svg";
import htmlsvg from "../../assets/icons/Html.svg";
import javascriptsvg from "../../assets/icons/JavaScript.svg";
import GitHubsvg from "../../assets/icons/GitHub.svg";
import Linksvg from "../../assets/icons/LinkBlack.svg";

const NftPro = () => {
  return (
    <div className="lg:my-4 flex  flex-col md:flex-row lg:mx-2">
      <div className="bg-slate-7000 shadow-gr-700 md:w-12/12 my-auto flex h-full w-full rounded-3xl shadow-xl shadow-slate-700 lg:w-6/12">
        <div className=" float-end flex rounded-3xl bg-slate-700 md:pl-4 md:pt-4 lg:pl-6 lg:pt-6">
          <img src={nft} className="rounded-3xl " alt="" />
        </div>
      </div>

      <div className="w-full lg:w-6/12">
        <div className="px-5 py-10">
          <h1 className="text-2xl font-bold text-white">NFT CARDS</h1>
          <p className="mt-3 text-lg text-slate-500">
            application that shows the nfts of different wallets
          </p>
          <div className="flex w-4/6 pt-5">
            <img className="w-[45px]" src={reactvsg} alt="" />
            <img className="w-[45px]" src={csssvg} alt="" />
            <img className="w-[45px]" src={htmlsvg} alt="" />
            <img className="w-[45px]" src={javascriptsvg} alt="" />
          </div>
          <div className="w-/12 flex gap-6  pt-6">
            <a
              className=" flex gap-3 rounded-xl bg-gray-200  px-3 py-2 text-xl font-semibold text-black shadow-md"
              href="https://github.com/Meteoro01/NFTS"
              target="_blank"
            >
              Code <img className="w-[20px]" src={GitHubsvg} alt="" />{" "}
            </a>

            <a
              className="flex w-24 gap-3 rounded-xl  bg-gray-200  px-3  py-2 text-xl font-semibold  text-black transition-all duration-300  hover:w-28 hover:gap-6 "
              href="https://frabjous-croissant-2d3695.netlify.app/"
              target="_blank"
            >
              Live <img className="w-[20px] " src={Linksvg} alt="" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftPro;
