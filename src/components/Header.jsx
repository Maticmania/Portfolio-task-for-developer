import React, { useState } from "react";

const Header = () => {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSetActive = (item) => {
    setActive(item);
    setMenuOpen(false);
  };

  const handleLinkClick = (item) => {
    handleSetActive(item);
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed w-full bg-white drop-shadow-md">
      <div className="px-4 md:px-16 flex justify-between h-20 md:h-[100px] items-center">
        <div className="logo flex items-center gap-2 cursor-pointer">
          <div className="background-image-container"></div>
          <p className="text-[#394149] font-semibold text-xl">JohnDev,</p>
        </div>
        <div className="hidden xl:flex navigate">
          <ul className="flex gap-10 text-lg">
            <li
              className={`cursor-pointer ${
                active === "Home"
                  ? "text-[#5E3BEE] font-bold"
                  : "hover:text-[#5E3BEE]"
              }`}
              onClick={() => handleLinkClick("Home")}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={`cursor-pointer ${
                active === "Portfolio"
                  ? "text-[#5E3BEE] font-bold"
                  : "hover:text-[#5E3BEE]"
              }`}
              onClick={() => handleLinkClick("Portfolio")}
            >
              <a href="#portfolio">Portfolio</a>
            </li>
            <li
              className={`cursor-pointer ${
                active === "About"
                  ? "text-[#5E3BEE] font-bold"
                  : "hover:text-[#5E3BEE]"
              }`}
              onClick={() => handleLinkClick("About")}
            >
              <a href="#about">About me</a>
            </li>
            <li
              className={`cursor-pointer ${
                active === "Testimonials"
                  ? "text-[#5E3BEE] font-bold"
                  : "hover:text-[#5E3BEE]"
              }`}
              onClick={() => handleLinkClick("Testimonials")}
            >
              <a href="#testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
        <div className="hidden xl:block contact">
          <button className="p-4 border px-6 border-[#5E3BEE] text-[#5E3BEE] hover:bg-[#5E3BEE] hover:text-white rounded-md transition-colors">
            <a href="#contact">Contact me</a>
          </button>
        </div>
        <div className="xl:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className=" xl:hidden">
          <ul className="flex flex-col gap-4 text-lg p-4 bg-white shadow-md">
            <li
              className={`cursor-pointer ${
                active === "Home"
                  ? "text-[#5E3BEE] font-bold"
                  : "hover:text-[#5E3BEE]"
              }`}
              onClick={() => handleLinkClick("Home")}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={`cursor-pointer ${
                active === "Portfolio"
                  ? "text-[#5E3BEE] font-bold"
                  : "hover:text-[#5E3BEE]"
              }`}
              onClick={() => handleLinkClick("Portfolio")}
            >
              <a href="#portfolio">Portfolio</a>
            </li>
            <li
              className={`cursor-pointer ${
                active === "About"
                  ? "text-[#5E3BEE] font-bold"
                  : "hover:text-[#5E3BEE]"
              }`}
              onClick={() => handleLinkClick("About")}
            >
              <a href="#about">About me</a>
            </li>
            <li
              className={`cursor-pointer ${
                active === "Testimonials"
                  ? "text-[#5E3BEE] font-bold"
                  : "hover:text-[#5E3BEE]"
              }`}
              onClick={() => handleLinkClick("Testimonials")}
            >
              <a href="#testimonials">Testimonials</a>
            </li>
            <a href="#contact">
              <button className="w-full p-4 border border-[#5E3BEE] text-[#5E3BEE] hover:bg-[#5E3BEE] hover:text-white rounded-md transition-colors">
                Contact me
              </button>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
