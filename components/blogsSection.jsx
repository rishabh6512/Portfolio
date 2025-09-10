/* eslint-disable @next/next/no-async-client-component */
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

async function getBlogPosts() {
  const mockPosts = [
    {
      id: 1,
      title: "Building Scalable APIs with NestJS",
      slug: "building-scalable-apis-with-nestjs",
      excerpt:
        "A deep dive into the architecture and patterns that make NestJS a powerful choice for modern backends.",
      published_at: "2025-09-08",
    },
    {
      id: 2,
      title: "State Management in React: Zustand vs. Redux",
      slug: "zustand-vs-redux",
      excerpt:
        "Comparing two popular state management libraries to help you choose the right one for your next project.",
      published_at: "2025-08-22",
    },
    {
      id: 3,
      title: "Mastering Animations with Framer Motion",
      slug: "mastering-framer-motion",
      excerpt:
        "Learn how to create fluid, beautiful animations in your Next.js application with ease.",
      published_at: "2025-07-15",
    },
  ];

  return mockPosts;
}

export default async function BlogSection() {
  const posts = await getBlogPosts();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-3xl"
    >
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Blogs 📝</h1>
      <p className="text-gray-600 mb-8">
        Sharing my thoughts on technology, development, and everything in
        between.
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <motion.div key={post.id} variants={itemVariants}>
            <Link href={`/blog/${post.slug}`}>
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.05)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="block p-6 border rounded-lg cursor-pointer transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    {new Date(post.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="text-sm font-medium text-gray-800 hover:text-gray-950">
                    Read More →
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
