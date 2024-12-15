"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);

      if (currentCount !== countRef.current) {
        setCount(currentCount);
        countRef.current = currentCount;
      }

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, isInView]);

  return { count, setIsInView };
};

const AnimatedNumber = ({
  end,
  duration,
}: {
  end: number;
  duration: number;
}) => {
  const { count, setIsInView } = useCountUp(end, duration);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [setIsInView]);

  return (
    <span ref={ref} className="text-sky-500">
      {count}
    </span>
  );
};

const Announcement = () => {
  return (
    <div>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 h-screen ">
        <Image
          height={100}
          width={100}
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Achivement So Far
            </h2>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
              It has revolutionized the way we design and develop, making it
              more accessible and efficient for everyone. We are proud of the
              positive change we have brought and look forward to continuing our
              journey.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <a href="#">
                Open Dashboard <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#">
                Search Components <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#">
                Copy Codebase <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#">
                Paste it. <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">Unique Components</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  <AnimatedNumber end={12} duration={2000} />
                </dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">
                  Total Codeblocks
                </dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  <AnimatedNumber end={300} duration={2000} /> {"+"}
                </dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">Hours Save</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  <AnimatedNumber end={40} duration={2000} />
                </dd>
              </div>
              <div className="flex flex-col-reverse gap-1">
                <dt className="text-base/7 text-gray-300">Paid time off</dt>
                <dd className="text-4xl font-semibold tracking-tight text-white">
                  Unlimited
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
