import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsArrowUpRight } from "react-icons/bs";
import project1 from "../assets/Images/project 1.png";
import project2 from "../assets/Images/project 2.png";
import project3 from "../assets/Images/project 3.png";

const projects = [
  {
    title: "Ahuse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    link: "https://google.com",
    image: project1,
  },
  {
    title: "App Dashboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    link: "https://google.com",
    image: project2,
  },
  {
    title: "Easy Rent",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    link: "https://google.com",
    image: project3,
  },
];

const Portfolio = () => {
  return (
    <div className="container mx-auto px-4 xl:px-16 py-10" id="portfolio">
      <div className="flex flex-col justify-center items-center xl:justify-between xl:items-center xl:flex-row">
        <div className="text-center xl:text-left">
          <h3 className="text-lg text-gray-600">Recent Projects</h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            My Portfolio
          </h2>
        </div>
        <button className="bg-[#7E69D3] text-white p-4 rounded-md inline-flex items-center">
            <a href="https://github.com/Maticmania" target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
          <FaGithub className="mr-2" /> Visit My GitHub
            </a>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg mb-4"
            />
            <h4 className="text-2xl font-semibold text-gray-900 mb-2">
              {project.title}
            </h4>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="border-b-black">
              <a
                href={project.link}
                className="font-semibold inline-flex items-center border-b-2 border-[#5E3BEE]"
                target="_blank"
                rel="noopener noreferrer"
              >
                View website{" "}
                <span className="ml-2 text-xl font-bold text-[#006B6A]">
                  <BsArrowUpRight />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
