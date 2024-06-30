import React from "react";
import { FaStar } from "react-icons/fa";
import user1 from "../assets/Images/user1.png";
import user2 from "../assets/Images/user2.png";
import user3 from "../assets/Images/user3.png";

const testimonials = [
  {
    name: "Dianne Russell",
    company: "Starbucks",
    image: user1,
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
  },
  {
    name: "Kristin Watson",
    company: "Louis Vuitton",
    image: user2,
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
  },
  {
    name: "Kathryn Murphy",
    company: "McDonald's",
    image: user3,
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.",
  },
];

const Testimonial = ({ image, name, company, rating, text }) => (
  <div className="p-8 py-10 rounded-md border-2 border-[#006B6A] space-y-8">
    <div className="flex items-center mb-4">
      {[...Array(rating)].map((_, i) => (
        <FaStar key={i} className="text-[#006B6A] mr-1 text-xl" />
      ))}
    </div>
    <p className="text-gray-700 mb-6">{`"${text}"`}</p>
    <div className="flex items-center">
      <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-gray-600">{company}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <div className="">
      <div
        className="container bg-[#F5FCFF] mx-auto px-4 xl:px-16 py-16 place-content-center space-y-12 xl:space-y-20"
        id="testimonials"
      >
        <div className="space-y-4 ">
          <h3 className="text-xl text-gray-600 font-medium">
            Clients Feedback
          </h3>
          <h2 className="text-3xl xl:text-5xl font-bold text-gray-900">
            Customer Testimonials
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
