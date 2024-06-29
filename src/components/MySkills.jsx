import React from 'react';
import { IoIosPhonePortrait } from "react-icons/io";
import { IoMdPricetags } from "react-icons/io";
import { SiRotaryinternational } from "react-icons/si";
import { HiCode } from "react-icons/hi";



const skills = [
  {
    title: 'Responsive Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    icon: <IoIosPhonePortrait /> , 
  },
  {
    title: 'Front-End Frameworks',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    icon: <IoMdPricetags/>,
  },
  {
    title: 'Testing and Debugging',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    icon: <SiRotaryinternational/>,
  },
  {
    title: 'Cloud Services',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    icon: <HiCode/>, 
  },
];

const Skills = () => {
  return (
    <div className='container mx-auto py-16 px-4 xl:px-16 space-y-8'>
      <h2 className='text-sm font-semibold text-gray-700'>My Skills</h2>
      <h1 className='text-4xl font-bold text-gray-900 mb-8'>My Expertise</h1>
      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
        {skills.map((skill, index) => (
          <div key={index} className='bg-[#F5FCFF] rounded-lg shadow-md p-6 text-left hover:shadow-lg border-b-0 hover:border-b-4 border-[#5E3BEE] transition-shadow transition-border duration-300 cursor-pointer'>
            <div className='text-[50px] mb-4 text-[#006B6A] rounded-md shadow-md max-w-[60px] flex items-center justify-center'>{skill.icon}</div>
            <h3 className='text-2xl font-semibold text-[#282938] mb-2'>{skill.title}</h3>
            <p className='text-gray-600'>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
