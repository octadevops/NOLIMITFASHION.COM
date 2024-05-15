import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.jpg";

const location = [
  {
    id: "1",
    image: img2,
    strname: "NOLIMIT - AL GURAIR CENTER",
    address: "Al Rigga Rd - Deira - Dubai - United Arab Emirates",
    link: "https://maps.app.goo.gl/oJroAeyw4N7zzMbE8",
  },

  {
    id: "2",
    image: img3,
    strname: "NOLIMIT - CITY CENTER DEIRA",
    address: "E003 - Center, Ground floor - Deira City - Dubai ",
    link: "https://maps.app.goo.gl/ejzCsb33tFu2RXft7",
  },
  {
    id: "3",
    image: img1,
    strname: "NOLIMIT - AL WAHDA MALL",
    address:
      "1 Hazza ' Bin Zayed The First St - Al Nahyan - Zone 1 - Abu Dhabi - United Arab Emirates",
    link: "https://maps.app.goo.gl/dzpfjX6hdZEHfnwZ6",
  },
  {
    id: "4",
    image: img4,
    strname: "NOLIMIT - CITY CENTER SHARJAH",
    address: "Al Nahdha - Industrial Area - Sharjah - United Arab Emirates",
    link: "https://maps.app.goo.gl/tuTWiCPyNQizyuFf9",
  },
];

export default function Card() {
  return (
    <div className="w-full md:flex justify-center flex-col">
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="font-semibold text-3xl text-[#61C3E1]">
          Step into the NOLIMIT experience at
        </h2>
        <hr className="h-[2px] border-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-[285px] mt-5" />
      </div>
      <div className="md:flex md:gap-6 text-white md:flex-row flex flex-col items-center justify-center ">
        {location.map((data, id) => (
          <div
            key={id}
            className="rounded-2xl shadow-lg w-[290px] h-[500px] bg-slate-800 flex flex-col justify-between my-8"
          >
            <img
              className="w-full h-[220px] rounded-2xl shadow-xl"
              src={data.image}
              alt="Store Image"
            />
            <div className="text-center py-4 px-6">
              <div className="font-bold text-xl mb-2">{data.strname}</div>
              <p className="text-gray-400 text-base">{data.address}</p>
            </div>
            <div className="px-6 py-6 text-center ">
              <a
                href={data.link}
                className="inline-block bg-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-600 duration-300 hover:text-white"
              >
                View on Map
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
