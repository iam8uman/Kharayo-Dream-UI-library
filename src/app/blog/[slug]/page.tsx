"use client";

import { getPost } from "@/lib/queries";
import { Post } from "@/types/post";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import { Clock, Calendar, User } from "lucide-react";
import Link from "next/link";
import { TracingBeam } from "@/components/ui/tracking-beam";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Page({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await getPost(params.slug);
      setPost(fetchedPost);
      setIsLoading(false);
    };
    fetchPost();
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <motion.div
            className="space-y-8"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
            <div className="h-96 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/6" />
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Post not found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent">
      <TracingBeam className="px-6">
        <article className="container mx-auto px-4 py-16 max-w-4xl">
          <motion.header
            initial="hidden"
            animate="show"
            variants={fadeIn}
            className="mb-16"
          >
            <motion.h1
              className="text-5xl font-bold text-gray-900 dark:text-white mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {post.title}
            </motion.h1>
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">
              <div className="flex items-center text-lg text-slate-400">
                <Image
                  src={
                    post.author.image?.asset?.url ||
                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  }
                  height={60}
                  width={60}
                  alt={post.author.image?.alt || post.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder={post.author.image?.lqip ? "blur" : "empty"}
                  blurDataURL={post.author.image?.lqip}
                  className="w-8  h-8 mr-2 rounded-full border border-sky-500 object-cover"
                />
                {post.author.name}
              </div>
              <div className="flex items-center text-slate-400">
                <Calendar className="w-5 h-5 mr-2" />
                {format(new Date(post.publishedAt), "MMMM d, yyyy")}
              </div>
              <div className="flex items-center text-slate-400">
                <Clock className="w-5 h-5 mr-2" />
                {post.readingTime} min read
              </div>
            </div>
            {post.mainImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="aspect-video relative rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={post.mainImage.asset.url}
                  alt={post.mainImage.alt || post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder={post.mainImage.lqip ? "blur" : "empty"}
                  blurDataURL={post.mainImage.lqip}
                />
              </motion.div>
            )}
          </motion.header>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="prose prose-lg dark:prose-invert"
          >
            <PortableText
              value={post.body}
              components={{
                block: {
                  normal: ({ children }) => (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {children}
                    </motion.p>
                  ),
                },
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Categories
            </h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {post.categories.map((category) => (
                <span
                  key={category._id}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300"
                >
                  {category.title}
                </span>
              ))}
            </div>
            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Related Posts
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {post.relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost._id}
                      href={`/post/${relatedPost.slug.current}`}
                    >
                      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        {relatedPost.mainImage && (
                          <div className="aspect-video relative">
                            <Image
                              src={relatedPost.mainImage.asset.url}
                              alt={
                                relatedPost.mainImage.alt || relatedPost.title
                              }
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {relatedPost.title}
                          </h3>
                          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                            <span>
                              {format(
                                new Date(relatedPost.publishedAt),
                                "MMM d, yyyy"
                              )}
                            </span>
                            <span>{relatedPost.readingTime} min read</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        </article>
      </TracingBeam>
    </div>
  );
}
