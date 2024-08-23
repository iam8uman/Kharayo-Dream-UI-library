import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="py-12 bg-slate-200 dark:bg-slate-900 sm:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-sky-500 flex items-center justify-center gap-5 ">
              <div className="w-6 lg:w-12 h-0.5 lg:h-1.5 rounded-full bg-sky-500"></div>
              <div className="text-4xl font-bold dark:text-slate-200 text-slate-900 font-pj">
                Create a landing page with ease
              </div>
              <div className="w-6 lg:w-12 h-0.5 lg:h-1.5 rounded-full bg-sky-500"></div>
            </div>

            <p className="max-w-md mx-auto mt-5 text-base leading-6 text-gray-500 font-pj">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>

          <div className="max-w-2xl p-8 mx-auto mt-10 overflow-hidden bg-gray-100 dark:bg-slate-800 rounded-3xl relative">
            <span className="absolute inset-0 bg-gradient-to-r from-sky-400 to-purple-500 animate-gradient-x"></span>
            <span className="absolute inset-[2px] bg-white dark:bg-slate-900 rounded-3xl"></span>

            <div className="grid grid-cols-1 text-center sm:grid-cols-3 gap-y-10 gap-x-12 relative z-10">
              <div>
                <div className="flex items-center justify-center mx-auto bg-white border border-gray-200 shadow-md rounded-3xl w-28 h-28">
                  <Image
                    height={100}
                    width={100}
                    className="w-8 h-8"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/7/command-symbol.svg"
                    alt=""
                  />
                  <span className="text-[42px] font-bold text-gray-900 font-pj ml-1 inline-flex">
                    {" "}
                    K{" "}
                  </span>
                </div>
                <p className="mt-4 text-sm font-medium text-gray-600 font-pj">
                  Search UI ⚡
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center mx-auto bg-white border border-gray-200 shadow-md rounded-3xl w-28 h-28">
                  <Image
                    height={100}
                    width={100}
                    className="w-8 h-8"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/7/command-symbol.svg"
                    alt=""
                  />
                  <span className="text-[42px] font-bold text-gray-900 font-pj ml-1 inline-flex">
                    {" "}
                    C{" "}
                  </span>
                </div>
                <p className="mt-4 text-sm font-medium text-gray-600 font-pj">
                  Copy any code you want
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center mx-auto bg-white border border-gray-200 shadow-md rounded-3xl w-28 h-28">
                  <Image
                    height={100}
                    width={100}
                    className="w-8 h-8"
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/7/command-symbol.svg"
                    alt=""
                  />
                  <span className="text-[42px] font-bold text-gray-900 font-pj ml-1 inline-flex">
                    {" "}
                    V{" "}
                  </span>
                </div>
                <p className="mt-4 text-sm font-medium text-gray-600 font-pj">
                  Paste the code
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
