// "use client";
import { AlignJustify, BarChart, Play, X } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Example() {
  return (
    <div className="relative bg-gradient-to-b from-green-50 to-green-100">
      <header className="absolute inset-x-0 top-0 z-10 w-full">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <Link href="#" title="" className="flex">
                <img
                  className="w-auto h-8"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/logo.svg"
                  alt=""
                />
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex items-center p-2 text-sm text-white uppercase transition-all duration-200 bg-black lg:hidden focus:bg-gray-800 hover:bg-gray-800"
            >
              <svg
                className="block w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className="hidden w-6 h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              Menu
            </button>

            <div className="hidden lg:flex lg:items-center lg:justify-center lg:ml-10 lg:mr-auto lg:space-x-10">
              <Link
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Features{" "}
              </Link>

              <Link
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Solutions{" "}
              </Link>

              <Link
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Resources{" "}
              </Link>

              <Link
                href="#"
                title=""
                className="text-base text-black transition-all duration-200 hover:text-opacity-80"
              >
                {" "}
                Pricing{" "}
              </Link>
            </div>

            <Link
              href="#"
              title=""
              className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
              role="button"
            >
              {" "}
              Try for free{" "}
            </Link>
          </div>
        </div>
      </header>

      <section className="overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:max-h-[900px] lg:min-h-[900px]">
          <div className="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
            <div className="h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14">
              <div className="flex flex-col justify-between flex-1 h-full">
                <div>
                  <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-7xl">
                    Take control <br />
                    on your daily expenses
                  </h1>
                  <p className="mt-6 text-base text-black sm:text-xl">
                    Our A.I helps you to predict your expenses based on your
                    previous activity and shares how you should manage you
                    money.
                  </p>
                  <Link
                    href="#"
                    title=""
                    className="inline-flex items-center px-6 py-5 text-base font-semibold text-black transition-all duration-200 bg-green-300 mt-9 hover:bg-green-400 focus:bg-green-400"
                    role="button"
                  >
                    {" "}
                    Get started for free{" "}
                  </Link>
                </div>

                <div className="mt-8 border-t-2 border-black lg:mt-auto sm:mt-14">
                  <div className="pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14">
                    <p className="text-base font-semibold text-black">
                      App available on
                    </p>

                    <div className="flex items-center mt-5 space-x-5 sm:mt-0">
                      <Link
                        href="#"
                        title=""
                        className="block transition-all duration-200 hover:opacity-80 focus:opacity-80"
                        role="button"
                      >
                        <Image
                        height={100}
                        width={100}
                          className="w-auto rounded h-14 sm:h-16"
                          src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png"
                          alt=""
                        />
                      </Link>

                      <Link
                        href="#"
                        title=""
                        className="block transition-all duration-200 hover:opacity-80 focus:opacity-80"
                        role="button"
                      >
                        <img
                          className="w-auto rounded h-14 sm:h-16"
                          src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png"
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full overflow-hidden lg:w-5/12 lg:order-1">
            <div className="lg:absolute lg:bottom-0 lg:left-0">
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/phone-mockup.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
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
                or other activities in Link more effective and fun way
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
