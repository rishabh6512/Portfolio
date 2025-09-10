"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-green-500 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// The main Contact Section Component
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
    } else if (/\d/.test(formData.name)) {
      tempErrors.name = "Name cannot contain numbers.";
    }
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is not valid.";
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setShowToast(true);
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <div className="relative w-full flex justify-center">
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -50,
              transition: { ease: "easeOut", duration: 0.3 },
            }}
            className="fixed top-5 z-50 flex items-center bg-white border border-gray-200 rounded-lg shadow-lg p-4"
          >
            <CheckIcon />
            <p className="text-gray-800 font-medium">
              Message sent successfully!
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="max-w-2xl w-full mb-auto"
      >
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex items-center w-full flex-col relative bottom-8"
        >
          <h1 className="font-medium text-gray-900 mt-2 text-xl font-heading mb-4">
            Get in Touch
          </h1>

          {/* Name Input */}
          <div className="w-11/12 lg:w-[342px] mb-4">
            <input
              ref={nameInputRef}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`pl-4 p-2 border rounded-lg w-full text-sm outline-none transition-colors ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your name"
              required
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div className="w-11/12 lg:w-[342px] mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`pl-4 p-2 border rounded-lg w-full text-sm outline-none transition-colors ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message Textarea */}
          <div className="w-11/12 lg:w-[342px] mb-4">
            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`pl-4 p-2 border rounded-lg w-full text-sm outline-none transition-colors ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="How can I help you?"
              required
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="text-white bg-black text-sm px-4 py-2 rounded-md relative hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            <span className="relative z-10">
              {isSubmitting ? "Submitting..." : "Submit"}
            </span>
          </button>
        </form>
      </motion.div>
    </div>
  );
}