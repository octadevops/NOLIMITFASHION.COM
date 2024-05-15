import Navbar from "../components/Navbar";
import Video from "../assets/banner.mp4";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import IMG1 from "../assets/img1.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import Card from "../components/Card";
import SocialLinks from "../components/SocialLinks";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="w-full h-full bg-[#33383F] scroll-smooth ">
        <Navbar />
        <section id="banner">
          <div className="flex flex-col items-center justify-center ">
            <video
              src={Video}
              className="w-full h-screen object-cover"
              autoPlay={true}
              loop={true}
              muted={true}
            />
            <div className="hidden md:flex justify-center items-center bg-white rounded-full opacity-40 h-10 w-10 text-2xl absolute lg:bottom-30 bottom-0 animate-ping">
              <MdOutlineKeyboardDoubleArrowDown />
            </div>
          </div>
        </section>
        {/* our story section */}
        <section className="flex justify-center items-center">
          <div className=" md:grid md:grid-cols-2 items-center justify-center py-20 md:z-50 md:absolute lg:py-20 max-w-7xl mx-auto  px-8">
            <div>
              <img
                src={IMG1}
                alt=""
                className="w-[500px] h-[400px] object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col md:items-start justify-center items-center ">
              <div className="pt-8 pb-4">
                <h2 className="text-3xl font-bold text-[#61C3E1]">Our Story</h2>
                <hr className="h-[2px] border-0 w-[350px] bg-gradient-to-r from-[#61C3E1] to-transparent mt-4" />
              </div>
              <div className="pt-4 pb-8 text-start">
                <p className="text-white">
                  Discover NOLIMIT, the premier fashion destination born in 1992
                  in Sri Lanka and now spanning the globe. From our humble
                  beginnings to becoming the nation's foremost fashion emporium
                  by 2014, we've remained dedicated to delivering exceptional
                  style experiences. With our swift expansion into the UAE in
                  2022, boasting four outlets across three emirates within a
                  year, our commitment to global fashion excellence is
                  undeniable. At NOLIMIT, customer satisfaction is paramount.
                  Our diverse, globally sourced team is rigorously trained to
                  ensure unparalleled service, crafting a shopping experience
                  that caters to every family member's fashion needs. We curate
                  the finest designs while maintaining stringent quality
                  control, offering a comprehensive range that's synonymous with
                  style and quality. More than a retailer, NOLIMIT is a haven
                  where affordability meets top-tier offerings, ensuring every
                  purchase brings joy and satisfaction. Welcome to NOLIMIT,
                  where fashion knows no boundaries.
                </p>
              </div>
              <div className="p-3 bg-[#61C3E1] flex justify-center items-center gap-3 rounded-full w-[220px] hover:bg-cyan-700 hover:text-white duration-300 cursor-pointer">
                <a
                  href="https://web.facebook.com/NOLIMITUAE"
                  className="flex items-center justify-center gap-4 cursor-pointer"
                >
                  <p className="">Learn More</p>
                  <IoIosArrowRoundForward />
                </a>
              </div>
            </div>
          </div>
          <img
            src={IMG1}
            alt="bg-pattern"
            className="hidden md:block md:bg-cover md:bg-center md:w-full md:relative grayscale opacity-5"
          />
        </section>
        <section className="md:px-32 md:py-20">
          <Card />
        </section>
        <section>
          <SocialLinks />
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Home;
