import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import FAQs from "./Pages/FAQs";
import { useEffect, useState } from "react";
import axios from "axios";
import Denied from "./assets/403-error-forbidden-animate.svg";
import Loader from "./assets/loader.svg";

function App() {
  const [access, setAccess] = useState(null);

  useEffect(() => {
    const checkLocation = async () => {
      try {
        // Get the user's IP address using ipify
        const ipResponse = await axios.get("https://api.ipify.org?format=json");
        const userIp = ipResponse.data.ip;
        console.log("User IP:", userIp); // Log the user IP for debugging

        // Get geolocation information based on the IP address using ipgeolocation.io
        const geoResponse = await axios.get(
          `https://api.ipgeolocation.io/ipgeo?apiKey=9d6e1916554a4c568a5fdfec8e605976&ip=${userIp}`
        );
        console.log("Geolocation API Response:", geoResponse.data); // Log the geolocation response for debugging

        const { country_code2 } = geoResponse.data;
        console.log("Country:", country_code2); // Log the country code for debugging

        if (country_code2 === "AE") {
          setAccess(true);
        } else {
          setAccess(false);
        }
      } catch (error) {
        console.error("Error verifying location:", error);
        setAccess(false);
      }
    };

    checkLocation();
  }, []);

  if (access === null)
    return (
      <div className="w-full h-screen flex items-center justify-center bg-slate-800">
        <img src={Loader} alt="Loader" className="items-center" />
      </div>
    );
  if (access === false)
    return (
      <div className="w-full h-screen bg-red-800 text-white flex flex-col justify-center items-center text-center">
        <p className="text-4xl font-bold uppercase tracking-widest">
          Access Denied
        </p>
        <img src={Denied} alt="403 Forbidden" className="w-[700px]" />
        <p className="text-2xl">Access Limited by Region </p>
      </div>
    );

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Index />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQs />} />
      </Routes>
    </>
  );
}

export default App;
