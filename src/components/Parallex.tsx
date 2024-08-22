import Image from "next/image";
import React from "react";

const Parallex = () => {
  return (
    <div>
      <div className="relative bg-[url('/image/dark.jpeg')] w-full h-screen  bg-no-repeat bg-cover bg-center bg-fixed ">
        <div className="absolute top-0 left-0">
          <Image
            hidden
            alt="logo"
            loading="lazy"
            width="200"
            height="200"
            decoding="async"
            data-nimg="1"
            src="/_next/image?url=%2Fimage%2Fbutterfly.png&amp;w=640&amp;q=75"
            style={{ color: "transparent" }}
          />
        </div>
        <div className="hidden lg:block fill-sky-700">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill=""
              fill-opacity="0.3"
              d="M0320L120282.7C240245480171720133.3C96096120096132096L144096L14400L13200C1200096007200C480024001200L00Z"
            ></path>
          </svg>
          <div className="absolute top-0 left-0 flex flex-row h-[10%] w-full items-center justify-end  ">
            <ul className="w-[35%] px-10 flex flex-row items-center justify-between">
              <li className="relative group">
                <a href="/ui" className="text-cyan-100">
                  Home
                </a>
                <div
                  className="absolute bottom-[-5px] left-0 h-[3px]
               w-0 group-hover:w-full bg-sky-300 transition-all duration-700"
                ></div>
              </li>
              <li className="relative group">
                <a href="/ui" className="text-cyan-100">
                  About
                </a>
                <div
                  className="absolute bottom-[-5px] left-0 h-[3px]
               w-0 group-hover:w-full bg-sky-300 transition-all duration-700"
                ></div>
              </li>
              <li className="relative group">
                <a href="/ui" className="text-cyan-100">
                  Contact
                </a>
                <div
                  className="absolute bottom-[-5px] left-0 h-[3px]
               w-0 group-hover:w-full bg-sky-300 transition-all duration-700"
                ></div>
              </li>
              <li className="relative group">
                <a href="/ui" className="text-cyan-100">
                  Gallary
                </a>
                <div
                  className="absolute bottom-[-5px] left-0 h-[3px]
               w-0 group-hover:w-full bg-sky-300 transition-all duration-700"
                ></div>
              </li>
              <li className="relative group">
                <a href="/ui" className="text-cyan-100">
                  More
                </a>
                <div
                  className="absolute bottom-[-5px] left-0 h-[3px]
               w-0 group-hover:w-full bg-sky-300 transition-all duration-700"
                ></div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-16 text-white lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="bg-white/50 rounded-md"
          >
            <line x1="21" x2="3" y1="6" y2="6"></line>
            <line x1="17" x2="7" y1="12" y2="12"></line>
            <line x1="19" x2="5" y1="18" y2="18"></line>
          </svg>
        </div>
        <div className="lg:absolute lg:top-[40%] lg:left-[26%] flex flex-col items-center justify-center mt-32 lg:mt-1">
          <div className="relative text-6xl font-bold my-5 text-gray-100 ">
            BUILD YOUR WEBSITE...
            <h1 className="absolute top-0 left-0 text-6xl font-bold h-full w-0 overflow-hidden animate-animate text-sky-300 ">
              BUILD YOUR WEBSITE...
            </h1>
          </div>
          <p className="text-lg text-gray-100">
            With knowing no code with Easi Ui
          </p>
          <div className="flex flex-row items-center justify-between mt-6">
            <button className="relative z-0 group overflow-hidden mx-5 my-4 px-7 py-1 h-auto w-auto font-bold bg-transparent text-cyan-100 text-lg border-[2px] border-cyan-200 rounded-full ">
              <span className="absolute text-sm left-0 bottom-0 h-full w-0 group-hover:w-full z-[-1] rounded-full bg-sky-500 transition-all duration-700"></span>
              Get Started
            </button>
            <button className="relative z-0 group overflow-hidden mx-5 my-4 px-7 py-1 h-auto w-auto font-bold bg-transparent text-cyan-100 text-lg border-[2px] border-cyan-200 rounded-full ">
              <span className="absolute text-sm left-0 bottom-0 h-full w-0 group-hover:w-full z-[-1] rounded-full bg-sky-500  transition-all duration-700"></span>
              Talk with us
            </button>
          </div>
        </div>
        <div className="lg:absolute lg:left-10 lg:top-[70%]  h-10 w-auto px-5 my-10">
          <div className="text-xl text-white font-semibold">
            You are on the Wright Place for
          </div>
          <span className=" text-[#FC6D6D] text-4xl border-r-[1px] border-[#FC6D6D]">
            Educationa
          </span>
        </div>
      </div>
    </div>
  );
};

export default Parallex;
