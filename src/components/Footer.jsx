import LOGO from "../assets/NLM LOGO.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-gray-800 pb-5">
      <div className="flex flex-col justify-center items-center gap-8 text-white pt-16 px-5 text-center">
        <img src={LOGO} alt="Logo" className="h-9 w-[210px]" />
        <p className="tracking-wide">
          specializes in providing high-quality, stylish product for your
          wardrobe
        </p>
        <div className="md:py-10 py-6">
          <ul className="flex md:gap-12 gap-8">
            <Link to={"/home"}>
              <li className="cursor-pointer hover:text-[#61C3E1] duration-300">
                Home
              </li>
            </Link>
            <Link to={"/about"}>
              <li className="cursor-pointer hover:text-[#61C3E1] duration-300">
                About
              </li>
            </Link>
            <Link to={"/contact"}>
              <li className="cursor-pointer hover:text-[#61C3E1] duration-300">
                Contact
              </li>
            </Link>
            <Link to={"/faq"}>
              <li className="cursor-pointer hover:text-[#61C3E1] duration-300">
                FAQs
              </li>
            </Link>
          </ul>
        </div>
        <p className="md:text-sm text-xs pb-10 px-10">
          Copyright &copy; 2024 NOLIMIT. All Rights Reserved |{" "}
          <span>Developed by : </span> Department of IT
        </p>
      </div>
    </div>
  );
}
