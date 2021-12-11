import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import AboutUs from "./AboutUs";
import NavBar from "./NavBar";
import Services from "./Services";

function App() {
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
    }, 3000);
  }, []);
  return spinner ? (
    <Loader
      className="flex justify-center items-center bg-white w-screen h-screen"
      type="Rings"
      color="#DE0030"
      height={100}
      width={100}
      visible={spinner}
    />
  ) : (
    <div className="relative overflow-hidden">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
