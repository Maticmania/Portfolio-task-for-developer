import React from "react";
import me from '../assets/Images/AboutPic.png';

const About = () => {
  return (
    <div
      className="container mx-auto flex flex-col-reverse xl:flex-row max-h-[1000px] px-4 xl:px-16"
      id="about"
    >
      <div className="w-full xl:w-1/2 h-full">
        <img src={me} alt="matic" className="h-full w-full object-cover" />
      </div>
      <div className="w-full xl:w-1/2 space-y-4 place-content-center text-center xl:text-left">
        <h2 className="text-[#282938] text-lg font-medium">About</h2>
        <h4 className="text-[#282938] text-4xl xl:text-6xl font-bold">About me</h4>
        <p className="text-[#1C1E53] text-base xl:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
        </p>
        <p className="text-[#1C1E53] text-base xl:text-xl">
          Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.
        </p>
      </div>
    </div>
  );
};

export default About;
