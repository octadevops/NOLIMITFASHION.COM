import Navbar from "../components/Navbar";
import Main from "../assets/main.webp";
import Card from "../components/Card";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="bg-[#33383F] w-full text-white flex flex-col items-center justify-center text-center py-10">
        <div className="flex flex-col items-center justify-center ">
          <div>
            {/* <img src={Main} alt="image" /> */}
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
