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

export default function ContactSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const nameInputRef = useRef(null);

    useEffect(() => {
        if (nameInputRef.current) nameInputRef.current.focus();
    }, []);

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => setShowToast(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name.trim()) tempErrors.name = "Name is required.";
        else if (/\d/.test(formData.name)) tempErrors.name = "Name cannot contain numbers.";
        if (!formData.email.trim()) tempErrors.email = "Email is required.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is not valid.";
        if (!formData.message.trim()) tempErrors.message = "Message is required.";
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitting(true);
            try {
                const res = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                });
                if (res.ok) {
                    setShowToast(true);
                    setFormData({ name: "", email: "", message: "" });
                    setErrors({});
                } else {
                    const errorData = await res.json();
                    console.error("Submission error:", errorData.error);
                }
            } catch (err) {
                console.error("Network error:", err);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-darkBlue py-10 px-4 flex justify-center items-start rounded-t-lg">
            <AnimatePresence>
                {showToast && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50, transition: { ease: "easeOut", duration: 0.3 } }}
                        className="fixed top-5 z-50 flex items-center bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-2"
                    >
                        <CheckIcon />
                        <p className="text-gray-100 font-medium">Message sent successfully!</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-full max-w-5xl p-8 bg-gray-900 rounded-xl shadow-xl"
            >
                <h1 className="text-3xl font-bold text-white mb-6 text-center">
                    Get in Touch
                </h1>

                <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                        <input
                            ref={nameInputRef}
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className={`pl-4 p-3 rounded-lg text-sm bg-gray-800 border ${errors.name ? "border-red-500" : "border-gray-700"
                                } text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
                            required
                        />
                        {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className={`pl-4 p-3 rounded-lg text-sm bg-gray-800 border ${errors.email ? "border-red-500" : "border-gray-700"
                                } text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
                            required
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                    </div>

                    <div className="flex flex-col space-y-2">
                        <textarea
                            name="message"
                            rows={8}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can I help you?"
                            className={`pl-4 p-3 rounded-lg text-sm bg-gray-800 border ${errors.message ? "border-red-500" : "border-gray-700"
                                } text-gray-100 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors`}
                            required
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                    </div>

                    <div className="lg:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-lg transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}