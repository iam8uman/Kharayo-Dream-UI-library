// "use client";
import { AlignJustify, BarChart, X } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Example() {
  return (
    <div className="">
      <nav className="w-full flex justify-between relative h-16 items-center  border-b  px-3 md:px-10 lg:px-20 ">
        <div className="flex items-center gap-2">
          <img
            src="https://utfs.io/f/2d4c57c8-5af1-423d-8616-780911a0cf5e-jwvcuq.png"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="sr-only">Shop Logo</span>
          <p className="undefined text-[#432010]">The Coffee Cup</p>
        </div>
        <ul className="hidden font-semibold text-[#432010] dark:text-white  lg:absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 lg:flex flex-row items-center justify-center gap-5">
          <li>
            <a
              className="hover:bg-gray-100 px-2 py-1.5 rounded-md dark:hover:text-[#432010] cursor-pointer"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:bg-gray-100 px-2 py-1.5 rounded-md dark:hover:text-[#432010] cursor-pointer"
              href="#"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="hover:bg-gray-100 px-2 py-1.5 rounded-md dark:hover:text-[#432010] cursor-pointer"
              href="#"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              className="hover:bg-gray-100 px-2 py-1.5 rounded-md dark:hover:text-[#432010] cursor-pointer"
              href="#"
            >
              Reviews
            </a>
          </li>
        </ul>
        <div className="hidden lg:flex items-center justify-center gap-5 text-[#432010] text-sm ">
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
            className="lucide lucide-shopping-cart"
          >
            <circle cx="8" cy="21" r="1"></circle>
            <circle cx="19" cy="21" r="1"></circle>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
          </svg>
          <span className="sr-only">Cart Icon</span>
          <button className="flex items-center justify-center">
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
              className="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <span className="sr-only">Search Buttons</span>
          </button>
          <button className="border-gray-900 border rounded-full text-white font-semibold bg-[#432010] px-8 py-2 hover:scale-95 cursor-pointer hover:opacity-80 transition">
            Sign Up
          </button>
        </div>
        <AlignJustify
          size={24}
          className="block lg:hidden hover:opacity-80 transition text-gray-100"
        />
        <span className="sr-only">Mobile Menu Icon</span>
      </nav>
      <section className="w-full h-auto flex flex-col lg:flex-row-reverse  lg:px-16">
        <div className="w-full lg:w-[50%] flex items-center justify-center overflow-hidden">
          <img
            src="https://utfs.io/f/8fe57dc0-605e-45c5-a2d3-e04383d86d67-99rcna.png"
            alt="Coffee cup image"
            className="object-cover h-full w-full scale-125"
          />
        </div>
        <div className="w-full h-auto lg:w-[50%] flex flex-col mt-5 md:mt-10 lg:mt-20 ">
          <h1 className="text-3xl md:text-4xl lg:text-7xl [object Object] px-2 lg:px-0 text-center lg:text-left">
            Discover the Art of Perfect Coffee.
          </h1>
          <p className="text-sm lg:text-lg mt-5 mx-2 px-5 lg:px-0 text-center lg:text-left">
            Experience the difference as we meticulously select and roast the
            finest beans to create a truly unforgettable cup of coffee. Join us
            on a journey of taste and awaken your senses one sip at a time.
          </p>
          <button className="h-12 w-52 bg-[#432010] flex items-center justify-start rounded-full mt-5 p-1.5 mx-5 hover:opacity-80 transition ">
            <span className="flex flex-1 items-center justify-center text-white text-lg font-bold">
              Order Now
            </span>
            <div className=" h-9 w-9 bg-white rounded-full flex items-center justify-center -rotate-45 ">
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
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
              <span className="sr-only">Arrow Right Icon</span>
            </div>
          </button>
          <ul className="flex items-center justify-start gap-5 lg:gap-12 h-28 mt-5 z-10">
            <li className="flex flex-col items-center font-bold p-5 shadow-lg rounded-lg ">
              <p className="text-3xl lg:text-5xl">
                1K<span className="text-yellow-700">+</span>
              </p>
              <p>menu</p>
            </li>
            <li className="flex flex-col items-center font-bold p-5 shadow-lg rounded-lg">
              <p className="text-3xl lg:text-5xl">
                10K<span className="text-yellow-700">+</span>
              </p>
              <p>Best Sale</p>
            </li>
            <li className="flex flex-col items-center font-bold p-5 shadow-lg rounded-lg">
              <p className="text-3xl lg:text-5xl">
                3K<span className="text-yellow-700">+</span>
              </p>
              <p>reviews</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export const actualCodeString = `
<div className="">
      <nav className="w-full flex justify-between relative h-16 items-center  border-b  px-3 md:px-10 lg:px-20 ">
        <div className="flex items-center gap-2">
          <img
            src="https://utfs.io/f/2d4c57c8-5af1-423d-8616-780911a0cf5e-jwvcuq.png"
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="sr-only">Shop Logo</span>
          <p className="undefined text-[#432010]">The Coffee Cup</p>
        </div>
        <ul className="hidden font-semibold text-[#432010] dark:text-white  lg:absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 lg:flex flex-row items-center justify-center gap-5">
          <li>
            <a
              className="hover:bg-gray-100 px-2 py-1.5 rounded-md dark:hover:text-[#432010] cursor-pointer"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:bg-gray-100 px-2 py-1.5 rounded-md dark:hover:text-[#432010] cursor-pointer"
              href="#"
            >
              Services
            </a>
          </li>
          <li>
            <a
              className="hover:bg-gray-100 px-2 py-1.5 rounded-md dark:hover:text-[#432010] cursor-pointer"
              href="#"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              className="hover:bg-gray-100 px-2 py-1.5 rounded-md dark:hover:text-[#432010] cursor-pointer"
              href="#"
            >
              Reviews
            </a>
          </li>
        </ul>
        <div className="hidden lg:flex items-center justify-center gap-5 text-[#432010] text-sm ">
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
            className="lucide lucide-shopping-cart"
          >
            <circle cx="8" cy="21" r="1"></circle>
            <circle cx="19" cy="21" r="1"></circle>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
          </svg>
          <span className="sr-only">Cart Icon</span>
          <button className="flex items-center justify-center">
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
              className="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <span className="sr-only">Search Buttons</span>
          </button>
          <button className="border-gray-900 border rounded-full text-white font-semibold bg-[#432010] px-8 py-2 hover:scale-95 cursor-pointer hover:opacity-80 transition">
            Sign Up
          </button>
        </div>
        <AlignJustify
          size={24}
          className="block lg:hidden hover:opacity-80 transition text-gray-100"
        />
        <span className="sr-only">Mobile Menu Icon</span>
      </nav>
      <section className="w-full h-auto flex flex-col lg:flex-row-reverse  lg:px-16">
        <div className="w-full lg:w-[50%] flex items-center justify-center overflow-hidden">
          <img
            src="https://utfs.io/f/8fe57dc0-605e-45c5-a2d3-e04383d86d67-99rcna.png"
            alt="Coffee cup image"
            className="object-cover h-full w-full scale-125"
          />
        </div>
        <div className="w-full h-auto lg:w-[50%] flex flex-col mt-5 md:mt-10 lg:mt-20 ">
          <h1 className="text-3xl md:text-4xl lg:text-7xl [object Object] px-2 lg:px-0 text-center lg:text-left">
            Discover the Art of Perfect Coffee.
          </h1>
          <p className="text-sm lg:text-lg mt-5 mx-2 px-5 lg:px-0 text-center lg:text-left">
            Experience the difference as we meticulously select and roast the
            finest beans to create a truly unforgettable cup of coffee. Join us
            on a journey of taste and awaken your senses one sip at a time.
          </p>
          <button className="h-12 w-52 bg-[#432010] flex items-center justify-start rounded-full mt-5 p-1.5 mx-5 hover:opacity-80 transition ">
            <span className="flex flex-1 items-center justify-center text-white text-lg font-bold">
              Order Now
            </span>
            <div className=" h-9 w-9 bg-white rounded-full flex items-center justify-center -rotate-45 ">
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
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
              <span className="sr-only">Arrow Right Icon</span>
            </div>
          </button>
          <ul className="flex items-center justify-start gap-5 lg:gap-12 h-28 mt-5 z-10">
            <li className="flex flex-col items-center font-bold p-5 shadow-lg rounded-lg ">
              <p className="text-3xl lg:text-5xl">
                1K<span className="text-yellow-700">+</span>
              </p>
              <p>menu</p>
            </li>
            <li className="flex flex-col items-center font-bold p-5 shadow-lg rounded-lg">
              <p className="text-3xl lg:text-5xl">
                10K<span className="text-yellow-700">+</span>
              </p>
              <p>Best Sale</p>
            </li>
            <li className="flex flex-col items-center font-bold p-5 shadow-lg rounded-lg">
              <p className="text-3xl lg:text-5xl">
                3K<span className="text-yellow-700">+</span>
              </p>
              <p>reviews</p>
            </li>
          </ul>
      </div>
    </section>
</div>
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
