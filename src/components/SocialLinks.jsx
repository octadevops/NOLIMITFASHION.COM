import React from "react";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaTiktok,
  FaSnapchat,
} from "react-icons/fa6";
import pattern from "../assets/pattern.jpg";

const Social = [
  {
    id: "1",
    link: "https://web.facebook.com/NOLIMITUAE",
    icon: <FaFacebook />,
  },
  {
    id: "2",
    link: "https://twitter.com/nolimit_uae",
    icon: <FaXTwitter />,
  },
  {
    id: "3",
    link: "https://www.instagram.com/nolimit.uae/",
    icon: <FaInstagram />,
  },
  {
    id: "4",
    link: "https://www.tiktok.com/@nolimit.uae",
    icon: <FaTiktok />,
  },
  {
    id: "5",
    link: "https://story.snapchat.com/@nolimit_uae",
    icon: <FaSnapchat />,
  },
];

export default function SocialLinks() {
  return (
    <div className=" w-full h-[600px]">
      <div className="absolute z-50 w-full mx-auto px-4">
        <div className="flex flex-col justify-center items-center gap-2 pt-36 z-[1500px] ">
          <h2 className="font-semibold text-3xl text-[#61C3E1]">Follow Us</h2>
          <hr className="h-[2px] border-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-[285px]"></hr>
          <p className="text-white py-3 px-8 md:px-52 text-center">
            Stay connected and never miss an update! Follow us on our social
            media channels for the latest news, exclusive content, and
            behind-the-scenes glimpses into our world.
          </p>
        </div>
        <div className="flex justify-center gap-10 md:text-6xl text-3xl pt-20 z-[1500px] ">
          {Social.map((data, id) => (
            <a
              key={id}
              href={data.link}
              className="hover:text-white duration-300 cursor-pointer"
            >
              {data.icon}
            </a>
          ))}
        </div>
      </div>

      <img
        src={pattern}
        alt="bg-pattern"
        className="bg-cover bg-center h-[600px] w-full relative grayscale opacity-5"
      />
    </div>
  );
}
