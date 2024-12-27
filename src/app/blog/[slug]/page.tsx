"use client";

import { getPost } from "@/lib/queries";
import { Post } from "@/types/post";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PortableText } from "@portabletext/react";
import { format } from "date-fns";
import { Clock, Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { TracingBeam } from "@/components/ui/tracking-beam";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { urlFor } from "@/lib/sanity";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Page({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

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
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
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
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-10 left-4 z-50 ml-4"
      >
        <Button
          variant={"default"}
          onClick={() => router.back()}
          className="inline-flex items-center px-4 py-2 rounded-lg text-white bg-slate-800 hover:bg-slate-900 shadow-md hover:shadow-lg transition-all duration-200 group "
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          <span>Back</span>
        </Button>
      </motion.div>

      <TracingBeam className="px-6">
        <article className="container mx-auto px-4 py-16 max-w-4xl bg-transparent">
          <motion.header
            initial="hidden"
            animate="show"
            variants={fadeIn}
            className="mb-16"
          >
            <motion.h1
              className="text-5xl font-bold text-slate-950 dark:text-white mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {post.title}
            </motion.h1>
            <div className="flex flex-wrap items-center gap-6 mb-8 text-sm">
              <div className="flex items-center text-lg text-slate-500">
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
              <div className="flex items-center text-slate-500">
                <Calendar className="w-5 h-5 mr-2" />
                {format(new Date(post.publishedAt), "MMMM d, yyyy")}
              </div>
              <div className="flex items-center text-slate-500">
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
                  className="rounded-lg h-full w-full object-cover"
                  placeholder={post.mainImage.lqip ? "blur" : "empty"}
                  blurDataURL={post.mainImage.lqip}
                />
              </motion.div>
            )}
          </motion.header>

          <Separator className="bg-sky-500 my-12" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="prose dark:prose-invert prose-lg"
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
                  h1: ({ children }) => (
                    <motion.h1
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-4xl font-bold mt-8 mb-4"
                    >
                      {children}
                    </motion.h1>
                  ),
                  h2: ({ children }) => (
                    <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-3xl font-bold mt-8 mb-4"
                    >
                      {children}
                    </motion.h2>
                  ),
                },
                types: {
                  image: ({ value }) => {
                    if (!value?.asset) {
                      return null;
                    }
                    return (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="relative my-8 rounded-lg overflow-hidden"
                      >
                        <Image
                          src={urlFor(value).url()}
                          alt={value.alt || " "}
                          width={800}
                          height={450}
                          className="rounded-lg h-full w-full object-contain"
                          placeholder={
                            value.asset.metadata?.lqip ? "blur" : "empty"
                          }
                          blurDataURL={value.asset.metadata?.lqip}
                        />
                        {value.caption && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
                            {value.caption}
                          </p>
                        )}
                      </motion.div>
                    );
                  },
                },
                marks: {
                  link: ({ children, value }) => {
                    const rel = !value.href.startsWith("/")
                      ? "noreferrer noopener"
                      : undefined;
                    return (
                      <a
                        href={value.href}
                        rel={rel}
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {children}
                      </a>
                    );
                  },
                },
                list: {
                  bullet: ({ children }) => (
                    <motion.ul
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="list-disc list-outside ml-4 mt-4"
                    >
                      {children}
                    </motion.ul>
                  ),
                  number: ({ children }) => (
                    <motion.ol
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="list-decimal list-outside ml-4 mt-4"
                    >
                      {children}
                    </motion.ol>
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
            <h2 className="text-2xl font-bold text-slate-950 dark:text-white mb-4">Categories</h2>
            <div className="flex flex-wrap gap-2 mb-8">
              {post.categories.map((category) => (
                <Badge
                  key={category._id}
                  className="px-4 py-1"
                >
                  {`#${category.title}`}
                </Badge>
              ))}
            </div>
            {post.relatedPosts && post.relatedPosts.length > 0 && (
              <>
                <Separator className="bg-sky-500 my-6" />
                <h2 className="text-2xl font-bold text-slate-950 dark:text-white mb-4">
                  Related Posts
                </h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {post.relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost._id}
                      href={`/blog/${relatedPost.slug.current}`}
                      className=" rounded-lg shadow-lg overflow-hidden transform transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
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
                          <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 line-clamp-2">
                            {post.title}
                          </div>
                          {post.excerpt && (
                            <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                              {post.excerpt}
                            </p>
                          )}
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
