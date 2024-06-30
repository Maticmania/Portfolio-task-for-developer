import React from 'react';
import me from '../assets/Images/HomePic.png';

const Home = () => {
  return (
    <div className=''>
    <div className='container bg-[#F5FCFF] mx-auto flex flex-col-reverse place-content-center xl:flex-row px-4 xl:px-16 pt-[80px] md:space-y-16 xl:space-y-0 xl:pt-[120px] py-12' id='home'>
      <div className="flex flex-col justify-center items-center xl:items-start xl:w-1/2 space-y-2 xl:space-y-4 text-center xl:text-left mt-8 md:mt-0 md:space-y-8 xl:mt-0 ">
        <h3 className='text-lg font-[600]'>Hey, I am John</h3>
        <h1 className='text-3xl xl:text-[55px] font-[700] leading-tight'>I develop dynamic and User-Centered Web Applications</h1>
        <h2 className='font-normal md:font-medium text-xl xl:text-[24px] leading-tight'>My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs.</h2>
        <button className='bg-[#5E3BEE] p-4 px-6 text-white rounded-md'><a href="#contact">Get In Touch</a></button>
      </div>
      <div className="flex justify-center items-center xl:w-1/2 mt-8 xl:mt-0">
        <img src={me} alt="matic" className="w-full max-w-xs xl:max-w-full" />
      </div>
    </div>
    </div>
  );
}

export default Home;
