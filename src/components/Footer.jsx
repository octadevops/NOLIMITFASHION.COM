import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import LOGO from "../assets/NLM LOGO.png";
import { Link } from "react-router-dom";

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

export default function Footer() {
  return (
    <div className="bg-gray-800 pb-5">
      <div className="md:grid grid-cols-3 justify-center items-center text-white py-16 px-10 text-center">
        <div className="flex flex-col justify-center md:items-start items-center px-8">
          <img src={LOGO} alt="Logo" className="w-[200px]" />
          <p className="tracking-wide md:text-start pt-5 md:pr-8">
            specializes in providing high-quality, stylish product for your
            wardrobe
          </p>
        </div>
        <div className="md:py-10 py-6">
          <ul className="flex justify-center md:gap-8 gap-4">
            <Link to={"/home"}>
              <li className="cursor-pointer hover:text-[#61C3E1] hover:bg-slate-900 rounded-lg p-2 duration-300">
                Home
              </li>
            </Link>
            <Link to={"/about"}>
              <li className="cursor-pointer hover:text-[#61C3E1] hover:bg-slate-900 rounded-lg p-2 duration-300">
                About
              </li>
            </Link>
            <Link to={"/contact"}>
              <li className="cursor-pointer hover:text-[#61C3E1] hover:bg-slate-900 rounded-lg p-2 duration-300">
                Contact
              </li>
            </Link>
            <Link to={"/faq"}>
              <li className="cursor-pointer hover:text-[#61C3E1] hover:bg-slate-900 rounded-lg p-2 duration-300">
                FAQs
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex gap-6 md:justify-end justify-center items-center px-8">
          {Social.map((data, id) => (
            <a
              key={id}
              href={data.link}
              className=" hover:text-cyan-500 duration-300 cursor-pointer"
            >
              {data.icon}
            </a>
          ))}
        </div>
      </div>
      <p className="md:text-sm text-xs pb-5 px-10 text-center text-white">
        Copyright &copy; 2024 NOLIMIT. All Rights Reserved |{" "}
        <span>Developed by : </span> Department of IT
      </p>
    </div>
  );
}
