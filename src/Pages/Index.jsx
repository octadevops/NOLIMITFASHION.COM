import React from "react";
import Logo from "../assets/NLM LOGO.png";
import NLM from "../assets/nolimit.jpg";
import { Link } from "react-router-dom";
import SLF from "../assets/SL_flag.png";
import UAEF from "../assets/UAE_flag.png";

export default function Index() {
  return (
    <div className="bg-[#33383F] w-full max-h-screen text-white flex flex-col items-center justify-center text-center">
      <img
        src={NLM}
        alt="NLM Image"
        className="bg-cover object-cover w-full h-screen absolute opacity-10"
      />

      <div className="relative flex flex-col items-center justify-center h-screen">
        <div className="py-4 flex flex-col justify-center items-center px-4">
          <img src={Logo} alt="Logo" className="md:w-[400px] w-[300px] pb-4" />
          <p className="text-2xl font-semibold">
            Welcome to Nolimit Fashion Chain
          </p>
          <p className="text-xl pt-10">Please select the region</p>
        </div>
        <div className="flex md:gap-10 gap-5 px-10">
          <a
            href="https://nolimit.lk"
            className="px-6 py-2 bg-white bg-opacity-10 bg-blur-md rounded-lg text-xl text-white font-semibold hover:bg-white hover:text-white hover:bg-opacity-40 duration-300 md:w-[250px] w-[150px] "
          >
            <img src={SLF} alt="SL Flag" className="w-[200px]" />
            Sri Lanka
          </a>
          <Link to={"/home"}>
            <p className="px-6 py-2 bg-white bg-opacity-10 bg-blur-md rounded-lg text-xl text-white font-semibold hover:bg-white hover:text-white hover:bg-opacity-40 duration-300 md:w-[250px] w-[150px] ">
              <img src={UAEF} alt="UAE Flag" className="w-[200px]" />
              UAE
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
