/* eslint-disable @next/next/no-async-client-component */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BlogSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch('/api/blog');
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
        } else {
          console.error("Failed to fetch blog posts");
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    }
    fetchPosts();
  }, []);

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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-darkBlue py-10 px-4 flex justify-center rounded-t-lg">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-3xl p-2"
      >
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Blogs 📝</h1>
        <p className="text-gray-400 text-center mb-10">
          Sharing my thoughts on technology, development, and everything in between.
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link href={`/blog/${post.slug}`}>
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0px 10px 20px rgba(0,0,0,0.4)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="block p-6 border border-gray-700 rounded-lg cursor-pointer transition-shadow bg-gray-800 hover:bg-gray-700"
                >
                  <h2 className="text-xl font-semibold text-white mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {new Date(post.published_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-sm font-medium text-gray-100 hover:text-white">
                      Read More →
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}