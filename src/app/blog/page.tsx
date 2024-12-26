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

  return (
    <div className="min-h-screen">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="sticky top-10 left-4 z-50 ml-4"
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
          className="text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center"
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
                  className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse"
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {posts.map((post) => (
                <motion.div key={post._id} variants={item}>
                  <Link
                    href={`/blog/${post.slug.current}`}
                    className="group-hover:-bottom-5 right-0 h-64 w-[80%] group-hover:border-4 border-4 group-hover:border-[#76aaf82d] rounded-lg object-cover transition-all duration-300"
                  >
                    <article className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
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
                        <div className="flex items-center gap-4 mb-4">
                          {post.author.image && (
                            <Image
                              src={post.author.image.asset.url}
                              alt={post.author.name}
                              width={40}
                              height={40}
                              className="rounded-full w-10 h-10 object-cover"
                            />
                          )}
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {post.author.name}
                            </p>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              {format(
                                new Date(post.publishedAt),
                                "MMMM d, yyyy"
                              )}
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
                                className="px-2 py-1 bg-gray-100 dark:bg-sky-600 text-xs rounded-full text-gray-600 dark:text-gray-300"
                              >
                                {category.title}
                              </Badge>
                            ))}
                            {post.categories.length > 2 && (
                              <Badge className="px-2 py-1 bg-gray-100 text-white dark:bg-sky-700 text-xs rounded-full">
                                +{post.categories.length - 2}
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center text-sm text-slate-100 ">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readingTime} min read
                          </div>
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
    </div>
  );
}
