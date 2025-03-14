"use client";

import { getAllPosts } from "@/lib/queries";
import { PostListItem } from "@/types/post";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Clock, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import fluidCursor from "@/lib/hooks/useFluidCursor";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Page() {
  const [posts, setPosts] = useState<PostListItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getAllPosts();
      setPosts(fetchedPosts);
      setIsLoading(false);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    fluidCursor();
  }, []);

  return (
    <div className="h-full w-full ">
      <canvas
        id="fluid"
        className=" fixed bottom-0 left-0 right-0 top-0 h-full w-full"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-50"></div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-10 left-4 z-50 ml-4"
      >
        <Button
          variant={"default"}
          onClick={() => router.back()}
          className="inline-flex items-center px-4 py-2 rounded-lg text-white bg-slate-800 hover:bg-slate-900 shadow-md hover:shadow-lg transition-all duration-200 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </Button>
      </motion.div>
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-slate-950 dark:text-white mb-16 text-center"
        >
          Su-manifest ✍️
        </motion.h1>
        <AnimatePresence>
          {isLoading ? (
            <motion.div
              className="space-y-8"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={container}
            >
              {[1, 2, 3].map((n) => (
                <motion.div
                  key={n}
                  variants={item}
                  className="h-64 bg-black rounded-lg animate-pulse"
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 motion-preset-flomoji-🚀"
            >
              {posts.map((post) => (
                <motion.div
                  key={post._id}
                  variants={item}
                  className="[background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.indigo.500)_86%,_theme(colors.indigo.300)_90%,_theme(colors.indigo.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border"
                >
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="transition-all duration-300"
                  >
                    <article className="group bg-black rounded-2xl shadow-lg overflow-hidden transform transition-all duration-200 hover:shadow-xl">
                      <div className="aspect-video relative">
                        {post.mainImage && (
                          <Image
                            src={post.mainImage.asset.url}
                            alt={post.mainImage.alt || post.title}
                            fill
                            className="object-cover group-hover:scale-110 group-hover:translate-y-2 transition duration-300 ease-in-out"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            placeholder={post.mainImage.lqip ? "blur" : "empty"}
                            blurDataURL={post.mainImage.lqip}
                          />
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-2">
                          {post.author.image && (
                            <Image
                              src={post.author.image.asset.url}
                              alt={post.author.name}
                              width={40}
                              height={40}
                              className="rounded-full w-10 h-10 object-cover border border-sky-500"
                            />
                          )}
                          <div className="w-full flex justify-between items-center">
                            <div>
                              <p className="text-sm font-medium text-white">
                                {post.author.name}
                              </p>
                              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                {format(
                                  new Date(post.publishedAt),
                                  "MMMM d, yyyy"
                                )}
                              </div>
                            </div>
                            <div className="flex items-center text-sm text-slate-100 ">
                              <Clock className="w-4 h-4 mr-1" />
                              {post.readingTime} min read
                            </div>
                          </div>
                        </div>
                        <h2 className="text-xl font-semibold text-slate-400  mb-2 group-hover:text-slate-200  line-clamp-2">
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                            {post.excerpt}
                          </p>
                        )}
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex flex-wrap gap-2">
                            {post.categories.slice(0, 2).map((category) => (
                              <Badge
                                key={category._id}
                                className="px-2 py-1 bg-gradient-to-r from-purple-500 to-sky-600 text-white text-xs rounded-full"
                              >
                                {category.title}
                              </Badge>
                            ))}
                            {post.categories.length > 3 && (
                              <Badge className="px-2 py-1 bg-gradient-to-r from-purple-500 to-sky-600 text-white text-xs rounded-full">
                                +{post.categories.length - 3}
                              </Badge>
                            )}
                          </div>
                          <button className=" relative inline-flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-gradient-to-r dark:from-[#070e41] dark:to-[#263381] from-[#c0c7ff] to-[#4c64ff]  font-medium text-neutral-200 border-2 border-[#656fe2] transition-all duration-300 group-hover:w-32">
                            <div className="inline-flex whitespace-nowrap opacity-0 transition-all duration-200 group-hover:-translate-x-3 group-hover:opacity-100">
                              Visit
                            </div>
                            <div className="absolute right-3.5">
                              <svg
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                              >
                                <path
                                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                          </button>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <footer className="py-12 bg-slate-950 border-t-slate-500 sm:pt-16 lg:pt-20 z-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="lg:flex  lg:items-center lg:justify-between mt-14 lg:mt-24">
            <div className="flex flex-row items-center justify-center md:items-start gap-2 text-2xl md:text-4xl font-semibold text-sky-500">
              <Image
                height={40}
                width={40}
                className="w-10 h-10 mx-2 lg:mx-0"
                src="/SUI.png"
                alt=""
              />
              <p>Kharayo - UI</p>
            </div>

            <ul className="flex items-center justify-center mt-8 space-x-6 sm:mt-12 sm:space-x-16 lg:mt-0">
              <li>
                <a
                  href="/"
                  title=""
                  className="text-lg font-medium  transition-all duration-200 font-pj text-sky-600 hover:dark:text-sky-500"
                >
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <Link
                  href="/blog"
                  title=""
                  className="text-lg font-medium  transition-all duration-200 font-pj text-sky-600 hover:dark:text-sky-500"
                >
                  {" "}
                  Blogs{" "}
                </Link>
              </li>

              <li>
                <a
                  href="/"
                  title=""
                  className="text-lg font-medium  transition-all duration-200 font-pj text-sky-600 hover:dark:text-sky-500"
                >
                  {" "}
                  Works{" "}
                </a>
              </li>

              <li>
                <a
                  href="/"
                  title=""
                  className="text-lg font-medium  transition-all duration-200 font-pj text-sky-600 hover:dark:text-sky-500"
                >
                  {" "}
                  Support{" "}
                </a>
              </li>
            </ul>

            <ul className="flex items-center justify-center mt-8 space-x-3 sm:mt-12 lg:justify-end lg:mt-0">
              <li>
                <a
                  href="https://x.com/iam8uman"
                  target="_blank"
                  title=""
                  className="inline-flex items-center justify-center w-10 h-10 text-sky-500 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                  rel="noopener"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://youtube.com/@whysumancode"
                  target="_blank"
                  title=""
                  className="inline-flex items-center justify-center w-10 h-10  transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                  rel="noopener"
                >
                  <svg
                    className="w-6 h-6 text-red-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/whysumancode"
                  target="_blank"
                  title=""
                  className="inline-flex items-center justify-center w-10 h-10 text-pink-500 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                  rel="noopener"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                    <circle cx="16.806" cy="7.207" r="1.078"></circle>
                    <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/iam8uman"
                  target="_blank"
                  title=""
                  className="inline-flex items-center justify-center w-10 h-10 text-green-500 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                  rel="noopener"
                >
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <hr className="mt-10 border-gray-300" />

          <div className="mt-10 md:flex md:items-center md:justify-between">
            <ul className="flex items-center justify-center space-x-6 md:order-2 md:justify-end">
              <li>
                <a
                  href="#"
                  title=""
                  className="text-base font-normal text-slate-500 transition-all duration-200 font-pj hover:text-gray-900"
                >
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  title=""
                  className="text-base font-normal text-slate-500 transition-all duration-200 font-pj hover:text-gray-900"
                >
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>
            </ul>

            <p className="mt-8 text-base font-normal text-center text-slate-500 md:text-left md:mt-0 md:order-1 font-pj">
              © Copyright 2024, All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
