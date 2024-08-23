import {
  ChefHat,
  Layers,
  LogInIcon,
  Ratio,
  Ship,
  User2Icon,
  UserCheck2,
} from "lucide-react";
import React from "react";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Hero = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div>
      <section className="relative h-auto w-full flex flex-col items-center pt-32 bg-slate-200 dark:bg-slate-950">
        <div className="absolute h-[20%] w-[20%] top-[20%] left-[50%] -translate-x-1/2 bg-sky-500 rounded-full blur-[110px]"></div>
        <h1 className="w-full text-3xl md:text-4xl lg:text-7xl max-w-2xl text-slate-950 dark:text-slate-100 font-bold text-center">
          SUI Your
        </h1>
        <h1 className="w-full text-3xl md:text-4xl lg:text-7xl max-w-3xl text-slate-950 dark:text-slate-100 font-bold text-center mt-3">
          Dream UI <span className="text-sky-500">Library!</span>
        </h1>
        <div className="text-center lg:text-xl text-slate-95/70 dark:text-slate-100/70 mx-2 mt-10 max-w-xl">
          We care about your productivity and effeciency. Powered by{" "}
          <span>
            {" "}
            Nextjs, Typescript, Tailwindcss, Framer-motion and ShadcnUI{" "}
          </span>
          .
        </div>
        {user ? (
          <LoginLink className="flex flex-row gap-2">
            <button className="relative py-3 px-5 rounded-full text-slate-950 dark:text-slate-100 mt-16 hover:bg-sky-600 transition flex flex-row gap-2 overflow-hidden">
              <span className="relative z-10">
                <UserCheck2 className="h-5 w-5 inline-block" />
                Get Started →
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-sky-400 to-purple-500 animate-gradient-x"></span>
              <span className="absolute inset-[2px] bg-white dark:bg-slate-900 rounded-full"></span>
            </button>
          </LoginLink>
        ) : (
          <RegisterLink>
            <button className="relative py-3 px-5 rounded-full text-slate-950 dark:text-slate-100 mt-16 hover:bg-sky-600 transition flex flex-row gap-2 overflow-hidden">
              <span className="relative z-10">
                <UserCheck2 className="h-5 w-5 inline-block" />
                Get Started →
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-sky-400 to-purple-500 animate-gradient-x"></span>
              <span className="absolute inset-[2px] bg-white dark:bg-slate-900 rounded-full"></span>
            </button>
          </RegisterLink>
        )}

        <div className="flex items-center justify-center gap-5 uppercase text-slate-950 dark:text-slate-100 text-sm lg:text-xl font-semibold mt-10">
          <div className="w-6 lg:w-12 h-0.5 lg:h-1.5 rounded-full bg-sky-500"></div>
          trusted by{" "}
          <span className="bg-sky-500 px-2 text-slate-950 dark:text-slate-100">
            amazing
          </span>{" "}
          brand
          <div className="w-6 lg:w-12 h-0.5 lg:h-1.5 rounded-full bg-sky-500"></div>
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-5 lg:gap-8 items-center justify-center w-[90%] sm:w-[85%] md:w-[80%] mx-auto border shadow-sm backdrop-blur-sm shadow-sky-500 border-slate-600 my-6 sm:my-8 md:my-10 p-4 sm:p-5 md:p-6 rounded-3xl transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-sky-600">
          &#x2190;
          {[
            { icon: <Layers size={24} />, text: "Layers" },
            { icon: <Ship size={24} />, text: "Quotient" },
            { icon: <Ratio size={24} />, text: "HoruGlass" },
            { icon: <Ratio size={24} />, text: "Beneto" },
            { icon: <ChefHat size={24} />, text: "ChefHat" },
          ].map((item, index) => (
            <div
              key={index}
              className="w-auto h-auto flex items-center justify-center gap-2 sm:gap-3 md:gap-4 text-slate-950 dark:text-slate-100 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold transition-all duration-300 ease-in-out hover:scale-105"
            >
              <span className="transition-transform duration-300 ease-in-out hover:rotate-12">
                {item.icon}
              </span>
              {item.text}
            </div>
          ))}
          &#x2192;
        </div>
      </section>
    </div>
  );
};

export default Hero;
