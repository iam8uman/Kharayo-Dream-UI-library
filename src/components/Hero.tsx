import { ChefHat, Layers, Ratio, Ship } from "lucide-react";

import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="relative h-auto  w-full flex flex-col  items-center pt-10 lg:pt-32 bg-black">
        <div className="absolute h-[20%] w-[20%] top-[20%] left-[50%] -translate-x-1/2 bg-sky-500 rounded-full blur-[110px]"></div>
        <h1 className="w-full text-3xl md:text-4xl lg:text-7xl max-w-2xl text-white font-bold  text-center">
          Bring Your
        </h1>
        <h1 className="w-full text-3xl md:text-4xl lg:text-7xl max-w-2xl text-white font-bold  text-center mt-3">
          Dream into <span className="text-sky-500 ">Reality</span>
        </h1>
        <p className="text-center lg:text-xl text-sky-200 mt-10 max-w-xl">
          We increase revenue and maintain sustainable growth of your business
          through powerful website of next js
        </p>
        <button className="py-3 px-5 rounded-md bg-sky-500 text-black mt-16 hover:bg-sky-600 transition">
          Book a Meeting
        </button>
        <div className="flex items-center justify-center gap-5 uppercase text-white text-sm lg:text-xl font-semibold mt-10">
          <div className="w-6 lg:w-12 h-0.5 lg:h-1.5 rounded-full bg-sky-500"></div>
          trusted by amazing brand
          <div className="w-6 lg:w-12 h-0.5 lg:h-1.5 rounded-full bg-sky-500"></div>
        </div>
        <div className=" flex flex-wrap gap-5 md:flex md:flex-row items-center justify-center  lg:gap-14 lg:h-24 h-auto w-[80%] lg:mx-auto mx-2 lg:bg-zinc-900 my-2 lg:my-10 rounded-3xl">
          <div className="w-auto h-auto flex items-center justify-center gap-4 text-white text-sm md:text-xl lg:text-2xl font-bold">
            <Layers size={24} /> Layers
          </div>
          <div className="w-auto h-auto flex items-center justify-center gap-4 text-white text-sm md:text-xl lg:text-2xl font-bold">
            <Ship size={24} /> Quotient
          </div>
          <div className="w-auto h-auto flex items-center justify-center gap-4 text-white text-sm md:text-xl lg:text-2xl font-bold">
            <Ratio size={24} /> HoruGlass
          </div>
          <div className="w-auto h-auto flex items-center justify-center gap-4 text-white text-sm md:text-xl lg:text-2xl font-bold">
            <Ratio size={24} /> Beneto
          </div>
          <div className="w-auto h-auto flex items-center justify-center gap-4 text-white text-sm md:text-xl lg:text-2xl font-bold">
            <ChefHat size={24} /> ChefHat
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
