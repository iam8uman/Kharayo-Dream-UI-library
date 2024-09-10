// "use client";
import { AlignJustify, BarChart, X } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function Example() {

  return (
    <div className="w-full h-auto bg-black px-5 @lg:px-12 lg:px-20 py-10">
      <nav className="w-full h-16 ">
        <div className="w-full flex justify-between relative h-16 items-center    ">
          <div className="relative uppercase text-lg font-bold text-white px-4">
            Cri<span className="bg-fuchsia-500 rounded-md">pto</span>
            <span className="h-3 w-3 bg-fuchsia-500 rounded-full absolute top-0 right-0"></span>
          </div>
          <div className="hidden text-white lg:absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 lg:flex items-center justify-center gap-5">
            <a
              className="px-2 py-1.5 hover:bg-black hover:border border-gray-500 hover:text-fuchsia-500 rounded-lg transition-all duration-300"
              href="#"
            >
              Marketplace
            </a>
            <a
              className="px-2 py-1.5 hover:bg-black hover:border border-gray-500 hover:text-fuchsia-500 rounded-lg transition-all duration-300"
              href="#"
            >
              Artist
            </a>
            <a
              className="px-2 py-1.5 hover:bg-black hover:border border-gray-500 hover:text-fuchsia-500 rounded-lg transition-all duration-300"
              href="#"
            >
              Collection
            </a>
            <a
              className="px-2 py-1.5 hover:bg-black hover:border border-gray-500 hover:text-fuchsia-500 rounded-lg transition-all duration-300"
              href="#"
            >
              community
            </a>
          </div>
          <div className="hidden lg:flex items-center justify-center gap-5 ">
            <button className="px-5 py-2 text-white bg-fuchsia-500 rounded-lg hover:opacity-75 transition-all duration-300">
              Contact
            </button>
          </div>
          <AlignJustify
            size={24}
            className="block lg:hidden hover:opacity-80 transition text-gray-100"
          />
        </div>
      </nav>
      <section className="flex flex-col lg:flex-row h-auto w-full my-20">
        <div className="  w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white max-w-sm [object Object]">
            Discover and Collect The Best? NFTs{" "}
            <span className="text-fuchsia-500">Digital Art.</span>
          </h1>
          <p className="text-gray-300 text-sm lg:text-base mt-5">
            Get started with the easiest and most secure platform to buy and
            trade digital ART and NFTs. Start exploring the world of digital art
            and NFTs today and take control of your digital assets with
            confidence!
          </p>
          <div className="mt-10 h-12 flex items-center justify-start gap-3">
            <button className="px-6 py-1.5 h-12 text-white bg-fuchsia-500 rounded-lg hover:opacity-75 transition-all duration-300">
              Explore now
            </button>
            <button className="px-3 py-1.5 text-white  rounded-lg hover:opacity-75 transition-all duration-300">
              Learn more
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 w-full h-auto gap-2 lg:divide-x-[1px] place-content-center">
            <div className="w-full h-20  px-5  flex lg:block items-center justify-center">
              <h2 className=" text-5xl font-bold text-fuchsia-500 ">
                65<span className="[object Object] text-white">K</span>
              </h2>
              <h3 className="text-gray-300 text-sm mt-2 ">Art work</h3>
            </div>
            <div className="w-full h-20  px-5  flex lg:block items-center justify-center">
              <h2 className=" text-5xl font-bold text-fuchsia-500 ">
                1.7<span className="[object Object] text-white">K</span>
              </h2>
              <h3 className="text-gray-300 text-sm mt-2 ">Artist</h3>
            </div>
            <div className="w-full h-20  px-5  flex lg:block items-center justify-center">
              <h2 className=" text-5xl font-bold text-fuchsia-500 ">
                75<span className="[object Object] text-white">K</span>
              </h2>
              <h3 className="text-gray-300 text-sm mt-2 ">Collections</h3>
            </div>
          </div>
        </div>
        <div className=" relative   w-full lg:w-1/2 lg:px-10 flex justify-center ">
          <div className="absolute left-10 top-20 h-[30%] w-[30%] bg-emerald-300 blur-[130px]"></div>
          <img
            src="https://utfs.io/f/d51769d9-d155-4c71-8999-9069edf34040-ym3cpl.png"
            alt=""
            className="h-auto w-[25%] absolute top-[30%] left-10 z-10"
          />
          <img
            src="https://utfs.io/f/f1494cc9-99a0-472c-ae73-3de00d15e91f-df0jcn.jpg"
            alt=""
            className="h-auto w-full md:w-[70%] rounded-3xl"
          />
          <div className="absolute w-[50%]  bg-slate-900 border-t border-fuchsia-500 rounded-xl bottom-0 translate-y-1/2 right-10 z-10 h-auto p-5">
            <div className="flex items-center justify-between mb-5">
              <div className="">
                <p className="text-sm text-fuchsia-500">Ends in</p>
                <p className="text-sm text-white">06:38:46</p>
              </div>
              <div className="">
                <p className="text-sm text-fuchsia-500">Current bid</p>
                <p className="text-sm text-white">03ETH</p>
              </div>
            </div>
            <button className="px-3 py-1.5 w-full text-lime-500 border border-lime-500 rounded-lg hover:opacity-75 transition-all duration-300">
              Place a bid
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export const actualCodeString = `
<div className="w-full h-auto bg-black px-5 @lg:px-12 lg:px-20 py-10">
      <nav className="w-full h-16 ">
        <div className="w-full flex justify-between relative h-16 items-center    ">
          <div className="relative uppercase text-lg font-bold text-white px-4">
            Cri<span className="bg-fuchsia-500 rounded-md">pto</span>
            <span className="h-3 w-3 bg-fuchsia-500 rounded-full absolute top-0 right-0"></span>
          </div>
          <div className="hidden text-white lg:absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 lg:flex items-center justify-center gap-5">
            <a
              className="px-2 py-1.5 hover:bg-black hover:border border-gray-500 hover:text-fuchsia-500 rounded-lg transition-all duration-300"
              href="#"
            >
              Marketplace
            </a>
            <a
              className="px-2 py-1.5 hover:bg-black hover:border border-gray-500 hover:text-fuchsia-500 rounded-lg transition-all duration-300"
              href="#"
            >
              Artist
            </a>
            <a
              className="px-2 py-1.5 hover:bg-black hover:border border-gray-500 hover:text-fuchsia-500 rounded-lg transition-all duration-300"
              href="#"
            >
              Collection
            </a>
            <a
              className="px-2 py-1.5 hover:bg-black hover:border border-gray-500 hover:text-fuchsia-500 rounded-lg transition-all duration-300"
              href="#"
            >
              community
            </a>
          </div>
          <div className="hidden lg:flex items-center justify-center gap-5 ">
            <button className="px-5 py-2 text-white bg-fuchsia-500 rounded-lg hover:opacity-75 transition-all duration-300">
              Contact
            </button>
          </div>
          <AlignJustify
            size={24}
            className="block lg:hidden hover:opacity-80 transition text-gray-100"
          />
        </div>
      </nav>
      <section className="flex flex-col lg:flex-row h-auto w-full my-20">
        <div className="  w-full lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white max-w-sm [object Object]">
            Discover and Collect The Best? NFTs{" "}
            <span className="text-fuchsia-500">Digital Art.</span>
          </h1>
          <p className="text-gray-300 text-sm lg:text-base mt-5">
            Get started with the easiest and most secure platform to buy and
            trade digital ART and NFTs. Start exploring the world of digital art
            and NFTs today and take control of your digital assets with
            confidence!
          </p>
          <div className="mt-10 h-12 flex items-center justify-start gap-3">
            <button className="px-6 py-1.5 h-12 text-white bg-fuchsia-500 rounded-lg hover:opacity-75 transition-all duration-300">
              Explore now
            </button>
            <button className="px-3 py-1.5 text-white  rounded-lg hover:opacity-75 transition-all duration-300">
              Learn more
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 w-full h-auto gap-2 lg:divide-x-[1px] place-content-center">
            <div className="w-full h-20  px-5  flex lg:block items-center justify-center">
              <h2 className=" text-5xl font-bold text-fuchsia-500 ">
                65<span className="[object Object] text-white">K</span>
              </h2>
              <h3 className="text-gray-300 text-sm mt-2 ">Art work</h3>
            </div>
            <div className="w-full h-20  px-5  flex lg:block items-center justify-center">
              <h2 className=" text-5xl font-bold text-fuchsia-500 ">
                1.7<span className="[object Object] text-white">K</span>
              </h2>
              <h3 className="text-gray-300 text-sm mt-2 ">Artist</h3>
            </div>
            <div className="w-full h-20  px-5  flex lg:block items-center justify-center">
              <h2 className=" text-5xl font-bold text-fuchsia-500 ">
                75<span className="[object Object] text-white">K</span>
              </h2>
              <h3 className="text-gray-300 text-sm mt-2 ">Collections</h3>
            </div>
          </div>
        </div>
        <div className=" relative   w-full lg:w-1/2 lg:px-10 flex justify-center ">
          <div className="absolute left-10 top-20 h-[30%] w-[30%] bg-emerald-300 blur-[130px]"></div>
          <img
            src="https://utfs.io/f/d51769d9-d155-4c71-8999-9069edf34040-ym3cpl.png"
            alt=""
            className="h-auto w-[25%] absolute top-[30%] left-10 z-10"
          />
          <img
            src="https://utfs.io/f/f1494cc9-99a0-472c-ae73-3de00d15e91f-df0jcn.jpg"
            alt=""
            className="h-auto w-full md:w-[70%] rounded-3xl"
          />
          <div className="absolute w-[50%]  bg-slate-900 border-t border-fuchsia-500 rounded-xl bottom-0 translate-y-1/2 right-10 z-10 h-auto p-5">
            <div className="flex items-center justify-between mb-5">
              <div className="">
                <p className="text-sm text-fuchsia-500">Ends in</p>
                <p className="text-sm text-white">06:38:46</p>
              </div>
              <div className="">
                <p className="text-sm text-fuchsia-500">Current bid</p>
                <p className="text-sm text-white">03ETH</p>
              </div>
            </div>
            <button className="px-3 py-1.5 w-full text-lime-500 border border-lime-500 rounded-lg hover:opacity-75 transition-all duration-300">
              Place a bid
            </button>
          </div>
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
