"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    id: 1,
    name: "Cameron Williamson",
    position: "Director of Technology, CreativeGIG",
    company: "cameron-logo.svg",
    quote:
      "Rareblocks made it so simple. Our new site is so much beautiful and easier to work with than my old site.",
    image: "man.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "CEO, TechInnovate",
    company: "cameron-logo.svg",
    quote:
      "Using this product has transformed our business processes. It's intuitive, powerful, and exactly what we needed.",
    image: "man.png",
  },
  {
    id: 3,
    name: "John Doe",
    position: "Marketing Director, GlobalReach",
    company: "cameron-logo.svg",
    quote:
      "I can't imagine running our campaigns without this tool. It's become an indispensable part of our marketing strategy.",
    image: "man.png",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning]);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <div id="testimonial">
      <section className="relative py-12 overflow-hidden bg-slate-200 dark:bg-slate-950 sm:py-16 lg:py-20 xl:py-24">
        <div className="absolute inset-0">
          <Image
            height={406}
            width={601}
            className="object-cover w-full h-full opacity-50"
            src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
            alt=""
          />
        </div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sky-500 flex items-center justify-center gap-5 ">
            <div className="w-6 lg:w-12 h-0.5 lg:h-1.5 rounded-full bg-sky-500"></div>
            Testimonials
            <div className="w-6 lg:w-12 h-0.5 lg:h-1.5 rounded-full bg-sky-500"></div>
          </h2>

          <div className="max-w-7xl mx-auto mt-12 text-center sm:mt-16 lg:mt-20 md:text-left">
            <section className="overflow-hidden">
              <div className="relative pt-12 bg-gray-50 sm:pt-16 lg:pt-24 xl:pt-40">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`testimonial-slide ${
                      index === currentIndex ? "active" : ""
                    }`}
                  >
                    <div className="flex flex-col">
                      <div className="block lg:hidden">
                        <Image
                          height={400}
                          width={400}
                          className="w-full max-w-lg mx-auto"
                          src={`https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/2/${testimonial.image}`}
                          alt=""
                        />
                      </div>

                      <div className="py-8 bg-gray-700 lg:order-2 sm:py-12">
                        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                          <div className="flex flex-col items-center sm:justify-center sm:flex-row lg:justify-start">
                            <Image
                              height={400}
                              width={400}
                              className="w-auto h-8"
                              src={`https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/2/${testimonial.company}`}
                              alt=""
                            />
                            <div className="mt-5 sm:ml-12 sm:mt-0">
                              <p className="text-xl font-bold text-white font-pj">
                                {testimonial.name}
                              </p>
                              <p className="text-sm font-normal font-pj text-white mt-1.5">
                                {testimonial.position}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="flex items-end lg:order-1">
                          <div className="py-12 lg:pt-0 lg:pb-24 lg:w-1/2">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full">
                              <svg
                                className="w-auto h-6 text-white"
                                viewBox="0 0 43 35"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M42.28 34.3H26.04C24.4533 29.1667 23.66 23.8467 23.66 18.34C23.66 12.74 25.1067 8.30666 28 5.03999C30.9867 1.68 35.3733 0 41.16 0V7.84C36.4933 7.84 34.16 10.6867 34.16 16.38V19.04H42.28V34.3ZM18.62 34.3H2.38C0.793333 29.1667 0 23.8467 0 18.34C0 12.74 1.44667 8.30666 4.34 5.03999C7.32667 1.68 11.7133 0 17.5 0V7.84C12.8333 7.84 10.5 10.6867 10.5 16.38V19.04H18.62V34.3Z" />
                              </svg>
                            </div>
                            <blockquote className="text-center lg:text-left">
                              <p className="text-3xl font-montserrat leading-snug text-gray-900">
                                {testimonial.quote}
                              </p>
                            </blockquote>
                          </div>

                          <div className="absolute bottom-0 right-0 hidden w-1/2 lg:block">
                            <Image
                              height={400}
                              width={400}
                              className="w-full max-w-lg ml-10 mr-auto"
                              src={`https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/2/${testimonial.image}`}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="flex items-center justify-between mt-8">
              <button
                type="button"
                onClick={prevSlide}
                className="inline-flex items-center justify-center p-1 -m-1 text-white transition-all duration-200 rounded-full hover:bg-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 17l-5-5m0 0l5-5m-5 5h12"
                  />
                </svg>
              </button>

              <div className="flex items-center justify-center space-x-2.5">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`rounded-full w-2.5 h-2.5 ${
                      index === currentIndex
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500"
                        : "bg-gray-700"
                    }`}
                  ></div>
                ))}
              </div>

              <button
                type="button"
                onClick={nextSlide}
                className="inline-flex items-center justify-center p-1 -m-1 text-white transition-all duration-200 rounded-full hover:bg-gray-900"
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
