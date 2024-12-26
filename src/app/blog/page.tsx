'use client'

import { getAllPosts } from '@/lib/queries'
import { PostListItem } from '@/types/post'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { Clock, Calendar } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Page() {
  const [posts, setPosts] = useState<PostListItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getAllPosts()
      setPosts(fetchedPosts)
      setIsLoading(false)
    }
    fetchPosts()
  }, [])

  return (
    <div className="min-h-screen bg-transparent">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-gray-900 dark:text-white mb-16 text-center"
        >
          Our Blog
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
                  <Link href={`/blog/${post.slug.current}`}>
                    <article className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
                      <div className="aspect-video relative">
                        {post.mainImage && (
                          <Image
                            src={post.mainImage.asset.url}
                            alt={post.mainImage.alt || post.title}
                            fill
                            className="object-cover"
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
                              className="rounded-full"
                            />
                          )}
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                              {post.author.name}
                            </p>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Calendar className="w-4 h-4 mr-1" />
                              {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                            </div>
                          </div>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
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
                              <span
                                key={category._id}
                                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-300"
                              >
                                {category.title}
                              </span>
                            ))}
                            {post.categories.length > 2 && (
                              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-300">
                                +{post.categories.length - 2}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
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
  )
}

