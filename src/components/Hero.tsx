import { ChefHat, Layers, Ratio, Ship } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="relative h-auto w-full flex flex-col items-center pt-10 lg:pt-32 bg-slate-200 dark:bg-slate-950">
        <div className="absolute h-[20%] w-[20%] top-[20%] left-[50%] -translate-x-1/2 bg-sky-500 rounded-full blur-[110px]"></div>
        <h1 className="w-full text-3xl md:text-4xl lg:text-7xl max-w-2xl text-slate-950 dark:text-slate-100 font-bold text-center">
          SUI Your
        </h1>
        <h1 className="w-full text-3xl md:text-4xl lg:text-7xl max-w-3xl text-slate-950 dark:text-slate-100 font-bold text-center mt-3">
          Dream UI <span className="text-sky-500">Library!</span>
        </h1>
        <div className="text-center lg:text-xl text-slate-95/70 dark:text-slate-100/70  mt-10 max-w-xl">
          We care about your productivity and effeciency. Powered by{" "}
          <span>
            {" "}
            Nextjs, Typescript, Tailwindcss, Framer-motion and ShadcnUI{" "}
          </span>
          .
        </div>
        <button className="py-3 px-5 rounded-md bg-sky-500 text-slate-950 dark:text-slate-100 mt-16 hover:bg-sky-600 transition">
          Book a Meeting
        </button>
        <div className="flex items-center justify-center gap-5 uppercase text-slate-950 dark:text-slate-100 text-sm lg:text-xl font-semibold mt-10">
          <div className="w-6 lg:w-12 h-0.5 lg:h-1.5 rounded-full bg-sky-500"></div>
          trusted by amazing brand
          <div className="w-6 lg:w-12 h-0.5 lg:h-1.5 rounded-full bg-sky-500"></div>
        </div>
        <div className="flex flex-wrap gap-5 md:flex md:flex-row items-center justify-center lg:gap-14 lg:h-24 h-auto w-[80%] lg:mx-auto mx-2 lg:bg-secondary/10 dark:lg:bg-primary/10 my-2 lg:my-10 rounded-3xl">
          <div className="w-auto h-auto flex items-center justify-center gap-4 text-slate-950 dark:text-slate-100 text-sm md:text-xl lg:text-2xl font-bold">
            <Layers size={24} /> Layers
          </div>
          <div className="w-auto h-auto flex items-center justify-center gap-4 text-slate-950 dark:text-slate-100 text-sm md:text-xl lg:text-2xl font-bold">
            <Ship size={24} /> Quotient
          </div>
          <div className="w-auto h-auto flex items-center justify-center gap-4 text-slate-950 dark:text-slate-100 text-sm md:text-xl lg:text-2xl font-bold">
            <Ratio size={24} /> HoruGlass
          </div>
          <div className="w-auto h-auto flex items-center justify-center gap-4 text-slate-950 dark:text-slate-100 text-sm md:text-xl lg:text-2xl font-bold">
            <Ratio size={24} /> Beneto
          </div>
          <div className="w-auto h-auto flex items-center justify-center gap-4 text-slate-950 dark:text-slate-100 text-sm md:text-xl lg:text-2xl font-bold">
            <ChefHat size={24} /> ChefHat
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
