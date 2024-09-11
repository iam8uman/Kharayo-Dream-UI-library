// "use client";
import { AlignJustify, BarChart, Play, X } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Example() {
  return (
    <section className="relative w-full h-full min-h-screen bg-slate-900 pb-10">
      <nav className="w-full flex justify-between bg-slate-900 relative h-16 items-center  px-3 md:px-6 lg:px-10">
        <div className="flex items-center gap-2">
          <p className="font-bold text-xl ">
            <span className="text-pink-600">Tweet</span>
            <span className="text-gray-600">Me</span>
          </p>
        </div>
        <div className="hidden text-white  lg:flex items-center justify-center gap-7 lg:absolute left-[50%] -translate-x-[50%]">
          <p className="hover:text-pink-500 hover:underline hover:underline-pink-500 cursor-pointer underline-offset-8">
            Home
          </p>
          <p className="hover:text-pink-500 hover:underline hover:underline-pink-500 cursor-pointer underline-offset-8">
            Features
          </p>
          <p className="hover:text-pink-500 hover:underline hover:underline-pink-500 cursor-pointer underline-offset-8">
            Blog
          </p>
          <p className="hover:text-pink-500 hover:underline hover:underline-pink-500 cursor-pointer underline-offset-8">
            Contact us
          </p>
          <p className="hover:text-pink-500 hover:underline hover:underline-pink-500 cursor-pointer underline-offset-8">
            About
          </p>
        </div>
        <div className="hidden lg:flex items-center justify-center gap-1 text-[#432010] text-sm">
          <button className=" rounded-full text-white  border-pink-500 px-8 py-2 hover:opacity-80">
            Sign Up
          </button>
          <button className=" rounded-full text-white font-semibold bg-pink-500 px-8 py-2 hover:opacity-80">
            Sign In
          </button>
        </div>
        <AlignJustify
          size={20}
          className="lg:hidden text-gray-200 cursor-pointer hover:scale-95"
        />
      </nav>
      <div className="hidden absolute left-0 top-12 w-full h-auto bg-white/90  px-4 py-2  flex-col md:flex-row">
        <button
          className="uppercase text-gray-800 text-xs lg:text-sm font-bold focus:bg-pink-300
                 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300"
        >
          Home
        </button>
        <button
          className="uppercase text-gray-800 text-xs lg:text-sm font-bold focus:bg-pink-300
                 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300"
        >
          Features
        </button>
        <button
          className="uppercase text-gray-800 text-xs lg:text-sm font-bold focus:bg-pink-300
                 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300"
        >
          Blog
        </button>
        <button
          className="uppercase text-gray-800 text-xs lg:text-sm font-bold focus:bg-pink-300
                 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300"
        >
          Contact us
        </button>
        <button
          className="uppercase text-gray-800 text-xs lg:text-sm font-bold focus:bg-pink-300
                 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300"
        >
          About
        </button>
      </div>
      <main className=" w-full h-full relative dark:bg-slate-900  ">
        <div className="flex flex-col-reverse lg:flex-row mt-16 ">
          <section className="w-full lg:w-[50%] flex flex-col lg:translate-x-10 @md:px-2 lg:px-0 p-5 lg:p-10 lg:p-0">
            <div className="w-full h-auto  lg:pt-7  ">
              <h1 className="__classNameName_e826f1 text-3xl  lg:text-7xl text-white font-extrabold  ">
                Build your best{" "}
              </h1>
              <h1 className="__classNameName_e826f1 text-3xl  lg:text-7xl text-white font-extrabold  ">
                community{" "}
              </h1>
              <h1 className="__classNameName_e826f1 text-3xl  lg:text-7xl text-white font-extrabold  ">
                starting from here.{" "}
              </h1>
              <p className="max-w-sm py-5 text-gray-400 lg:text-lg">
                Meet and communicate with the best people to run projects events
                or other activities in a more effective and fun way
              </p>
              <div className="w-full flex items-center text-white justify-start gap-2">
                <button className="h-10 w-32 rounded-lg bg-pink-600 text-white">
                  Get Started
                </button>
                <span className="underline pl-5 cursor-pointer">
                  Learn More
                </span>{" "}
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
                  className="lucide lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16"></path>
                  <path d="M2 12H22"></path>
                </svg>
              </div>
              <div className="w-full grid grid-cols-1 lg:grid-cols-3  mt-10">
                <div className="w-full h-20 p-3 flex items-center gap-3 max-w-md">
                  <div className="h-14 w-14 p-2 rounded-xl bg-slate-800 flex items-center justify-center">
                    <img
                      src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
                      alt="Build Community"
                      className="h-10 w-10 object-cover"
                    />
                  </div>
                  <p className="text-slate-100 text-sm">Build Community</p>
                </div>
                <div className="w-full h-20 p-3 flex items-center gap-3 max-w-md">
                  <div className="h-14 w-14 p-2 rounded-xl bg-slate-800 flex items-center justify-center">
                    <img
                      src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
                      alt="Share Events"
                      className="h-10 w-10 object-cover"
                    />
                  </div>
                  <p className="text-slate-100 text-sm">Share Events</p>
                </div>
                <div className="w-full h-20 p-3 flex items-center gap-3 max-w-md">
                  <div className="h-14 w-14 p-2 rounded-xl bg-slate-800 flex items-center justify-center">
                    <img
                      src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
                      alt="Get Information"
                      className="h-10 w-10 object-cover"
                    />
                  </div>
                  <p className="text-slate-100 text-sm">Get Information</p>
                </div>
              </div>
            </div>
          </section>
          <section className="relative w-full lg:w-[50%] flex  items-center  justify-center p-10 ">
            <img
              src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
              alt="Hero Image"
              className="h-full w-full object-contain z-10"
            />
          </section>
        </div>
      </main>
    </section>
  );
}

export const actualCodeString = `
<section className="relative w-full h-full min-h-screen bg-slate-900 pb-10">
      <nav className="w-full flex justify-between bg-slate-900 relative h-16 items-center  px-3 md:px-6 lg:px-10 z-20">
        <div className="flex items-center gap-2">
          <p className="font-bold text-xl ">
            <span className="text-pink-600">Tweet</span>
            <span className="text-gray-600">Me</span>
          </p>
        </div>
        <div className="hidden text-white  lg:flex items-center justify-center gap-7 lg:absolute left-[50%] -translate-x-[50%]">
          <p className="hover:text-pink-500 hover:underline hover:underline-pink-500 cursor-pointer underline-offset-8">
            Home
          </p>
          <p className="hover:text-pink-500 hover:underline hover:underline-pink-500 cursor-pointer underline-offset-8">
            Features
          </p>
          <p className="hover:text-pink-500 hover:underline hover:underline-pink-500 cursor-pointer underline-offset-8">
            Blog
          </p>
          <p className="hover:text-pink-500 hover:underline hover:underline-pink-500 cursor-pointer underline-offset-8">
            Contact us
          </p>
          <p className="hover:text-pink-500 hover:underline hover:underline-pink-500 cursor-pointer underline-offset-8">
            About
          </p>
        </div>
        <div className="hidden lg:flex items-center justify-center gap-1 text-[#432010] text-sm">
          <button className=" rounded-full text-white  border-pink-500 px-8 py-2 hover:opacity-80">
            Sign Up
          </button>
          <button className=" rounded-full text-white font-semibold bg-pink-500 px-8 py-2 hover:opacity-80">
            Sign In
          </button>
        </div>
        <AlignJustify
          size={20}
          className="lg:hidden text-gray-200 cursor-pointer hover:scale-95"
        />
      </nav>
      <div className="hidden absolute z-20 left-0 top-12 w-full h-auto bg-white/90  px-4 py-2  flex-col md:flex-row">
        <button
          className="uppercase text-gray-800 text-xs lg:text-sm font-bold focus:bg-pink-300
                 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300"
        >
          Home
        </button>
        <button
          className="uppercase text-gray-800 text-xs lg:text-sm font-bold focus:bg-pink-300
                 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300"
        >
          Features
        </button>
        <button
          className="uppercase text-gray-800 text-xs lg:text-sm font-bold focus:bg-pink-300
                 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300"
        >
          Blog
        </button>
        <button
          className="uppercase text-gray-800 text-xs lg:text-sm font-bold focus:bg-pink-300
                 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300"
        >
          Contact us
        </button>
        <button
          className="uppercase text-gray-800 text-xs lg:text-sm font-bold focus:bg-pink-300
                 hover:bg-pink-300 px-2 h-full py-1 rounded transition-all duration-300"
        >
          About
        </button>
      </div>
      <main className=" w-full h-full relative dark:bg-slate-900  ">
        <div className="flex flex-col-reverse lg:flex-row mt-16 ">
          <section className="w-full lg:w-[50%] flex flex-col lg:translate-x-10 @md:px-2 lg:px-0 p-5 lg:p-10 lg:p-0">
            <div className="w-full h-auto  lg:pt-7  ">
              <h1 className="__classNameName_e826f1 text-3xl  lg:text-7xl text-white font-extrabold  ">
                Build your best{" "}
              </h1>
              <h1 className="__classNameName_e826f1 text-3xl  lg:text-7xl text-white font-extrabold  ">
                community{" "}
              </h1>
              <h1 className="__classNameName_e826f1 text-3xl  lg:text-7xl text-white font-extrabold  ">
                starting from here.{" "}
              </h1>
              <p className="max-w-sm py-5 text-gray-400 lg:text-lg">
                Meet and communicate with the best people to run projects events
                or other activities in a more effective and fun way
              </p>
              <div className="w-full flex items-center text-white justify-start gap-2">
                <button className="h-10 w-32 rounded-lg bg-pink-600 text-white">
                  Get Started
                </button>
                <span className="underline pl-5 cursor-pointer">
                  Learn More
                </span>{" "}
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
                  className="lucide lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16"></path>
                  <path d="M2 12H22"></path>
                </svg>
              </div>
              <div className="w-full grid grid-cols-1 lg:grid-cols-3  mt-10">
                <div className="w-full h-20 p-3 flex items-center gap-3 max-w-md">
                  <div className="h-14 w-14 p-2 rounded-xl bg-slate-800 flex items-center justify-center">
                    <img
                      src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
                      alt="Build Community"
                      className="h-10 w-10 object-cover"
                    />
                  </div>
                  <p className="text-slate-100 text-sm">Build Community</p>
                </div>
                <div className="w-full h-20 p-3 flex items-center gap-3 max-w-md">
                  <div className="h-14 w-14 p-2 rounded-xl bg-slate-800 flex items-center justify-center">
                    <img
                      src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
                      alt="Share Events"
                      className="h-10 w-10 object-cover"
                    />
                  </div>
                  <p className="text-slate-100 text-sm">Share Events</p>
                </div>
                <div className="w-full h-20 p-3 flex items-center gap-3 max-w-md">
                  <div className="h-14 w-14 p-2 rounded-xl bg-slate-800 flex items-center justify-center">
                    <img
                      src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
                      alt="Get Information"
                      className="h-10 w-10 object-cover"
                    />
                  </div>
                  <p className="text-slate-100 text-sm">Get Information</p>
                </div>
              </div>
            </div>
          </section>
          <section className="relative w-full lg:w-[50%] flex  items-center  justify-center p-10 ">
            <img
              src="https://utfs.io/f/4c9f7186-8ad0-4680-aece-a5abea608705-k6t10e.png"
              alt="Hero Image"
              className="h-full w-full object-contain z-10"
            />
          </section>
        </div>
      </main>
    </section>
`;

const InstallationStep: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    {children}
  </div>
);

interface InstallationPageProps {
  steps: {
    title: string;
    content: React.ReactNode;
  }[];
}

export function InstallationPage({ steps }: InstallationPageProps) {
  return (
    <div className="min-h-screen pt-6 bg-white text-black dark:bg-gray-900 dark:text-white mt-16">
      <h1 className="text-3xl font-bold mb-6">Installation</h1>

      <Tabs defaultValue="manual" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="cli">CLI</TabsTrigger>
          <TabsTrigger value="manual">Manual</TabsTrigger>
        </TabsList>

        <TabsContent value="cli">
          <p>CLI Installation Comming Soon!!!</p>
        </TabsContent>

        <TabsContent value="manual">
          <Card className="bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="pt-6">
              {steps.map((step, index) => (
                <InstallationStep key={index} title={step.title}>
                  {step.content}
                </InstallationStep>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
