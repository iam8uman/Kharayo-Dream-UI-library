import Image from "next/image";
import React from "react";

const featureItems = [
  {
    icon: (
      <svg
        className="w-9 h-9 flex-shrink-0 text-sky-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M11.782 5.72a4.773 4.773 0 0 0-4.8 4.173 3.43 3.43 0 0 1 2.741-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.934-2.865 3.137-3.921-.969 1.379-2.44 2.207-4.259 1.231-1.253-.673-2.19-3.438-5.959-3.318ZM6.8 11.979A4.772 4.772 0 0 0 2 16.151a3.431 3.431 0 0 1 2.745-1.687c1.689 0 2.974 1.972 3.758 2.587a5.733 5.733 0 0 0 5.382.935c2-.638 2.933-2.865 3.137-3.921-.97 1.379-2.44 2.208-4.259 1.231-1.253-.673-2.19-3.443-5.963-3.317Z" />
      </svg>
    ),
    title: "Powered by Nextjs & Shadcn",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
  {
    icon: (
      <svg
        className="flex-shrink-0 text-green-500 w-9 h-9"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
        />
      </svg>
    ),
    title: "Simply Copy & Paste",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
  {
    icon: (
      <svg
        className="flex-shrink-0 text-blue-600 w-9 h-9"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Easy to Customize",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
  {
    icon: (
      <svg
        className="flex-shrink-0 text-red-500 w-9 h-9"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: "Made with TailwindCSS",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
  },
];

const Feature = () => {
  return (
    <div id="about">
      <section className="py-10 bg-slate-200 dark:bg-slate-950 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sky-500 flex items-center justify-center gap-5 ">
              <div className="w-6 lg:w-12 h-0.5 lg:h-1.5 rounded-full bg-sky-500"></div>
              130+ Handcoded Blocks
              <div className="w-6 lg:w-12 h-0.5 lg:h-1.5 rounded-full bg-sky-500"></div>
            </h2>
          </div>

          <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
            <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
              {featureItems.map((item, index) => (
                <div key={index} className="flex items-start">
                  {item.icon}
                  <div className="ml-5">
                    <h3 className="text-xl font-semibold text-black dark:text-slate-100">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-3">
              <Image
                height={300}
                width={300}
                className="w-full rounded-lg shadow-xl"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/features/7/dashboard-screenshot.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
