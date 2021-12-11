import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./images/retinkLogo.png";
import Login from "./images/login.png";

const NavBar = () => {
  const [toggle, setToggle] = useState(
    "md:hidden absolute -right-full transition--all duration-500 ease-in-out"
  );
  const handleMenu = () => {
    if (
      toggle ===
      "md:hidden absolute -right-full transition--all duration-500 ease-in-out"
    ) {
      setToggle("absolute right-0 transition--all duration-500 ease-in-out");
    } else {
      setToggle(
        "md:hidden absolute -right-full transition--all duration-500 ease-in-out"
      );
    }
  };
  return (
    <nav className="bg-white-900 font-sans shadow-xl">
      <div className="bg-white flex justify-between items-center mx-auto max-w-8xl px-12 py-4 ">
        <Link to="/">
          <img src={Logo} alt="Retink Logo" />
        </Link>
        <ul className="hidden md:flex justify-center font-medium text-blueText">
          <li>
            <Link to="/" className="p-4 px-6">
              Home
            </Link>
          </li>
          <li>
            <Link to="services" className="p-4 px-6">
              Services
            </Link>
          </li>
          <li>
            <Link to="about-us" className="p-4 px-6">
              About Us
            </Link>
          </li>
        </ul>
        <button className="px-4 py-2 bg-blueButton rounded text-white hidden md:flex items-center">
          <img src={Login} alt="Login icon" className="mr-2" />
          Login
        </button>
        <button onClick={handleMenu} className="md:hidden">
          <svg
            className="h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
      </div>
      <div className={toggle}>
        <div className=" flex flex-col items-center justify-around h-screen w-screen bg-white">
          <ul
            onClick={() =>
              setToggle(
                "absolute -right-full transition--all duration-500 ease-in-out"
              )
            }
            className=" h-60 flex flex-col justify-around items-center font-medium text-blueText text-xl"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="services">Services</Link>
            </li>
            <li>
              <Link to="about-us">About Us</Link>
            </li>
          </ul>
          <button className="px-4 py-2 my-8 bg-blueButton rounded text-white flex items-center">
            <img src={Login} alt="Login icon" className="mr-2" />
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
