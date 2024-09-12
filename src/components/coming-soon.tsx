import Image from "next/image";
import React from "react";

const CommingSoon = () => {
  return (
    <div>
      <section className="relative py-12 bg-gray-900 sm:py-16 lg:py-20">

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-end max-w-6xl mx-auto">
            <div className="w-full text-center lg:text-left  rounded-xl bg-white/90 backdrop-blur-lg">
              <div className="px-10 py-12 lg:px-12 lg:py-14">
                <p className="text-5xl">👟</p>
                <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                  This section will be live  <br className="block sm:hidden" />
                  Soon!
                </h2>
                <p className="mt-5 text-base font-normal text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  nunc nisl eu consectetur. Mi massa elementum odio eu viverra
                  amet.
                </p>

                <div className="mt-9">
                  <a
                    href="/dashboard"
                    title=""
                    className="inline-flex items-center justify-center px-8 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommingSoon;
