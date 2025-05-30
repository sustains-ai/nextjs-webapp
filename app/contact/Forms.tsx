"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const Form = () => {
    return (
        <main className="relative bg-white text-black py-24 px-6">
            <motion.div
                className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Left Column - Office Info */}
                <div>
                    <motion.h3
                        className="text-4xl font-extrabold text-[#0ABF53]"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Our Office
                    </motion.h3>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <Image
                            className="rounded-lg mt-6 shadow-xl"
                            src="/img/Office.jpg"
                            alt="Sustainability-Driven Insights"
                            width={500}
                            height={400}
                        />
                    </motion.div>

                    <motion.address
                        className="mt-6 text-lg text-gray-700 leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <span className="block font-semibold text-[#0ABF53] text-xl">Bengaluru:</span>
                        #23, CJ Ventatadas Road <br />
                        Padmanabhanagar <br />
                        Bengaluru
                    </motion.address>
                </div>

                {/* Right Column - Contact Form */}
                <motion.div
                    className="bg-white shadow-xl rounded-lg p-10 border border-gray-200 relative flex flex-col items-center"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <h4 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h4>
                    <form>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* First Name */}
                            <div>
                                <label className="block text-gray-700 font-semibold">First Name</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ABF53] focus:outline-none transition-all duration-300 hover:shadow-lg"
                                    placeholder="Jacob"
                                />
                            </div>

                            {/* Last Name */}
                            <div>
                                <label className="block text-gray-700 font-semibold">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ABF53] focus:outline-none transition-all duration-300 hover:shadow-lg"
                                    placeholder="Williams"
                                />
                            </div>

                            {/* Email */}
                            <div className="mt-6 col-span-2">
                                <label className="block text-gray-700 font-semibold">Work Email</label>
                                <input
                                    type="email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ABF53] focus:outline-none transition-all duration-300 hover:shadow-lg"
                                    placeholder="email@site.com"
                                />
                            </div>

                            {/* Message */}
                            <div className="mt-6 col-span-2">
                                <label className="block text-gray-700 font-semibold">Message</label>
                                <textarea
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ABF53] focus:outline-none transition-all duration-300 hover:shadow-lg"
                                    rows={4}
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <motion.div
                            className="mt-8"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <button className="w-full bg-[#0ABF53] text-white py-3 px-6 text-lg font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-all duration-300">
                                Send Inquiry
                            </button>
                        </motion.div>
                    </form>
                </motion.div>
            </motion.div>
        </main>
    );
};

export default Form;