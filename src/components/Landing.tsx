import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import Image from "next/image";

const Landing = () => {
  return (
    <div>
      <ScrollArea className="h-[90vh]">
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div>
            <section className="pt-12 pb-48 overflow-hidden bg-gray-900 sm:pb-80 sm:pt-16 lg:pt-20 xl:pt-24 xl:pb-96">
              <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-xl mx-auto text-center">
                  <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl xl:text-7xl sm:tracking-tight">
                    Grow SaaS Fast
                  </h1>
                  <p className="mt-6 text-lg leading-7 text-white lg:leading-8 lg:text-xl">
                    Clarity gives you the blocks & components you need to create
                    a truly professional website.
                  </p>
                  <div className="mt-8">
                    <Link
                      href="/dashboard"
                      title=""
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
                      role="button"
                    >
                      Get 14 Days Free Trial
                    </Link>
                  </div>
                  <p className="mt-8 text-sm font-normal text-gray-400">
                    No credit card required • Cancel anytime
                  </p>
                </div>

                <div className="relative mt-12 sm:mt-16 lg:mt-20">
                  <Image
                    height={500}
                    width={500}
                    className="absolute top-auto w-full max-w-5xl mx-auto -mb-48 -translate-x-1/2 left-1/2"
                    src="https://landingfoliocom.imgix.net/store/collection/saasui/images/hero/2/video-mockup.svg"
                    alt=""
                  />

                  <div className="absolute inset-0 grid w-full h-full mt-20 sm:mt-36 lg:mt-40 xl:mt-44 place-items-center">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white transition-all duration-200 border border-white lg:text-base lg:py-4 lg:px-8 rounded-xl bg-white/10 backdrop-blur-lg hover:bg-white/20"
                    >
                      <svg
                        className="w-auto h-4 mr-3 -ml-1 lg:h-5"
                        viewBox="0 0 15 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 3.80425V14.1958C1 15.7666 2.7279 16.7243 4.06 15.8917L12.3732 10.696C13.6265 9.91266 13.6265 8.08734 12.3732 7.304L4.06 2.10825C2.7279 1.27569 1 2.23338 1 3.80425Z"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Play 1 min video
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </ScrollArea>
    </div>
  );
};

export default Landing;
