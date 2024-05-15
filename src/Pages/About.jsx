import React from "react";
import Navbar from "../components/Navbar";
import Main from "../assets/main.webp";

function About() {
  return (
    <div>
      <Navbar />
      <div className="bg-[#33383F] w-full max-h-screen text-white flex flex-col items-center justify-center text-center">
        <div className="relative flex flex-col items-center justify-center h-screen">
          <div>
            {/* <img src={Main} alt="image" /> */}
            <div className="flex flex-col justify-center items-center gap-2 ">
              <h2 className="font-semibold text-3xl text-[#61C3E1]">
                About Us
              </h2>
              <hr className="h-[2px] border-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-[285px]"></hr>
              <p className="text-white py-3 px-8 md:px-52 text-center">
                Discover NOLIMIT, the premier fashion destination born in 1992
                in Sri Lanka and now spanning the globe. From our humble
                beginnings to becoming the nation's foremost fashion emporium by
                2014, we've remained dedicated to delivering exceptional style
                experiences. With our swift expansion into the UAE in 2022,
                boasting four outlets across three emirates within a year, our
                commitment to global fashion excellence is undeniable. At
                NOLIMIT, customer satisfaction is paramount. Our diverse,
                globally sourced team is rigorously trained to ensure
                unparalleled service, crafting a shopping experience that caters
                to every family member's fashion needs. We curate the finest
                designs while maintaining stringent quality control, offering a
                comprehensive range that's synonymous with style and quality.
                More than a retailer, NOLIMIT is a haven where affordability
                meets top-tier offerings, ensuring every purchase brings joy and
                satisfaction. Welcome to NOLIMIT, where fashion knows no
                boundaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
