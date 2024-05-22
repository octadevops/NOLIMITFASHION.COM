import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DXB from "../assets/dubai.jpg";

function About() {
  return (
    <div>
      <Navbar />
      <div className="bg-[#33383F] w-full flex flex-col items-center justify-center text-center ">
        <div
          style={{ "--image-url": `url(${DXB})` }}
          className="bg-[image:var(--image-url)] bg-cover h-screen "
        >
          <div className="w-full h-full bg-gradient-to-t from-black to-transparent  flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-semibold text-3xl text-[#61C3E1] ">
                About Us
              </h1>
              <hr className="h-[2px] border-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-[285px]"></hr>

              <p className="text-white px-8 md:px-32 text-center py-3">
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

      <Footer />
    </div>
  );
}

export default About;
