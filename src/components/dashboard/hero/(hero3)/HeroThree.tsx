// "use client";
import { AlignJustify, BarChart, Play, X } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Example() {
  return (
    <div className="min-h-screen bg-black dark:bg-gray-900 w-full relative overflow-hidden">
      <nav className="w-full flex justify-between relative h-12 items-center   pt-5 z-30 ">
        <div className="flex items-center justify-start gap-2 text-lg font-bold px-4 ">
          <div className="h-7 w-7 bg-emerald-500"></div>MySAS
        </div>
        <div className="hidden  lg:absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 lg:flex items-center justify-center gap-5 cursor-pointer ">
          <p className=" hover:text-emerald-500 hover:font-bold transition-all duration-300">
            Home
          </p>
          <p className=" hover:text-emerald-500 hover:font-bold transition-all duration-300">
            Services
          </p>
          <p className=" hover:text-emerald-500 hover:font-bold transition-all duration-300">
            Contact us
          </p>
          <p className=" hover:text-emerald-500 hover:font-bold transition-all duration-300">
            About us
          </p>
        </div>
        <div className="hidden lg:flex items-center justify-center gap-5 text-sm">
          <button className="bg-emerald-500 text-white  rounded-sm px-5 py-2">
            Get Started
          </button>
        </div>
      </nav>
      <section className="grid lg:grid-cols-2">
        <div className="p-5 lg:py-20 lg:pl-20 flex flex-col items-start justify-center z-30">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Restaurant Management made as easy as pie
          </h1>
          <p className="text-gray-500 dark:text-gray-300 mt-5 ">
            Plateform will help you manage your store easily with its
            outstanding features. Trusted be ten of thousands of customers all
            over the world.
          </p>
          <div className="flex flex-col lg:flex-row  mt-5 items-center justify-start gap-5   w-full">
            <button className=" text-emerald-500 h-10 px-10  bg-emerald-100 rounded-sm flex items-center  justify-center gap-3">
              <Play size={20} />
              Watch Video
            </button>
            <a
              className="bg-emerald-500 hover:bg-emerald-700 text-white h-10 px-10 rounded-sm flex items-center justify-center"
              href="#"
            >
              Try the demo
            </a>
          </div>
        </div>
        <div className="w-full h-full  flex flex-col items-center px-10 lg:pt-20 z-30 relative">
          <img
            src="https://utfs.io/f/d1aaff50-56a7-4c1d-a4b3-e76bf0b2ee12-3k1fhw.png"
            alt="Image"
            className="lg:w-[80%] h-auto "
          />
        </div>
        <div className="hidden lg:block absolute left-1/2 bottom-1/4 bg-gradient-to-t from-emerald-100 dark:from-emerald-950 to-emerald-50 dark:to-transparent w-[50%] h-[90%] rounded-[70px] rotate-[40deg] origin-bottom-left lg:-translate-x-10"></div>
        <div className="hidden lg:block absolute lg:left-10 bottom-5 bg-emerald-50 dark:bg-emerald-950 w-44 h-44 rounded-3xl rotate-[40deg] origin-bottom-left "></div>
        <div className="hidden lg:block absolute lg:-left-10 -top-40 bg-emerald-50 dark:bg-emerald-950 w-52 h-52 rounded-3xl rotate-[30deg] origin-bottom-left "></div>
        <div className="hidden lg:block absolute lg:left-1/3 top-20 bg-gradient-to-t from-emerald-50 dark:from-emerald-950 to-transparent w-40 h-40 rounded-3xl rotate-[30deg] origin-bottom-left "></div>
      </section>
    </div>
  );
}

export const actualCodeString = `
<div className="min-h-screen bg-black dark:bg-gray-900 w-full relative overflow-hidden">
      <nav className="w-full flex justify-between relative h-12 items-center   pt-5 z-30 ">
        <div className="flex items-center justify-start gap-2 text-lg font-bold px-4 ">
          <div className="h-7 w-7 bg-emerald-500"></div>MySAS
        </div>
        <div className="hidden  lg:absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 lg:flex items-center justify-center gap-5 cursor-pointer ">
          <p className=" hover:text-emerald-500 hover:font-bold transition-all duration-300">
            Home
          </p>
          <p className=" hover:text-emerald-500 hover:font-bold transition-all duration-300">
            Services
          </p>
          <p className=" hover:text-emerald-500 hover:font-bold transition-all duration-300">
            Contact us
          </p>
          <p className=" hover:text-emerald-500 hover:font-bold transition-all duration-300">
            About us
          </p>
        </div>
        <div className="hidden lg:flex items-center justify-center gap-5 text-sm">
          <button className="bg-emerald-500 text-white  rounded-sm px-5 py-2">
            Get Started
          </button>
        </div>
      </nav>
      <section className="grid lg:grid-cols-2">
        <div className="p-5 lg:py-20 lg:pl-20 flex flex-col items-start justify-center z-30">
          <h1 className="text-2xl lg:text-4xl font-bold">
            Restaurant Management made as easy as pie
          </h1>
          <p className="text-gray-500 dark:text-gray-300 mt-5 ">
            Plateform will help you manage your store easily with its
            outstanding features. Trusted be ten of thousands of customers all
            over the world.
          </p>
          <div className="flex flex-col lg:flex-row  mt-5 items-center justify-start gap-5   w-full">
            <button className=" text-emerald-500 h-10 px-10  bg-emerald-100 rounded-sm flex items-center  justify-center gap-3">
              <Play size={20} />
              Watch Video
            </button>
            <a
              className="bg-emerald-500 hover:bg-emerald-700 text-white h-10 px-10 rounded-sm flex items-center justify-center"
              href="#"
            >
              Try the demo
            </a>
          </div>
        </div>
        <div className="w-full h-full  flex flex-col items-center px-10 lg:pt-20 z-30 relative">
          <img
            src="https://utfs.io/f/d1aaff50-56a7-4c1d-a4b3-e76bf0b2ee12-3k1fhw.png"
            alt="Image"
            className="lg:w-[80%] h-auto "
          />
        </div>
        <div className="hidden lg:block absolute left-1/2 bottom-1/4 bg-gradient-to-t from-emerald-100 dark:from-emerald-950 to-emerald-50 dark:to-transparent w-[50%] h-[90%] rounded-[70px] rotate-[40deg] origin-bottom-left lg:-translate-x-10"></div>
        <div className="hidden lg:block absolute lg:left-10 bottom-5 bg-emerald-50 dark:bg-emerald-950 w-44 h-44 rounded-3xl rotate-[40deg] origin-bottom-left "></div>
        <div className="hidden lg:block absolute lg:-left-10 -top-40 bg-emerald-50 dark:bg-emerald-950 w-52 h-52 rounded-3xl rotate-[30deg] origin-bottom-left "></div>
        <div className="hidden lg:block absolute lg:left-1/3 top-20 bg-gradient-to-t from-emerald-50 dark:from-emerald-950 to-transparent w-40 h-40 rounded-3xl rotate-[30deg] origin-bottom-left "></div>
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
