import Navbar from "../components/Navbar";
import Card from "../components/Card";
import SocialLinks from "../components/SocialLinks";
import Footer from "../components/Footer";
import DXB from "../assets/dubai.jpg";

function Contact() {
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
              <h1 className="font-semibold text-3xl text-[#61C3E1]">
                Contact Us
              </h1>
              <hr className="h-[2px] border-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-[285px]"></hr>
              <p className="text-xl text-white py-3 px-8 md:px-32 text-center">
                Have a question, comment, or inquiry?
              </p>
              <p className="text-white px-8 md:px-32 text-center ">
                We're here to help! Whether you're looking for assistance with a
                product, have a suggestion for improvement, or simply want to
                say hello, feel free to reach out to us using any of the social
                media links. We value your feedback and strive to provide prompt
                and personalized assistance to ensure your experience with us is
                exceptional. Get in touch today!
              </p>
            </div>
          </div>
        </div>
        <SocialLinks />
        <div className="flex flex-col items-center justify-center ">
          <div className="pt-10">
            {/* <img src={Main} alt="image" /> */}
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
