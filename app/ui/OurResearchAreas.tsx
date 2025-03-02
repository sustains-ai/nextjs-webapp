"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Check } from "lucide-react"

const researchAreas = [
    "Electricity Demand Forecasting",
    "EV Sales Analysis & Projections",
    "Energy Optimization & Grid Stability",
    "Renewable Energy Resource Planning",
    "PPA & VPPA Contract Analysis",
    "Battery Storage & Energy Arbitrage",
    "Smart Grid Analytics & Load Flow Analysis",
    "Carbon Market & Emissions Trading",
    "Hydrogen & Alternative Fuels Research",
    "AI-Driven Energy Risk Assessments",
]

const geekyBackgrounds = ["/placeholder.svg?height=1080&width=1920&text=Energy+Equations+Background"]

const OurResearchAreas = () => {
    const [bgImage, setBgImage] = useState(geekyBackgrounds[0])

    return (
        <section
            className="relative py-24 text-gray-900 transition-all duration-1000 ease-in-out bg-cover bg-center"
            style={{
                backgroundImage: `url(${bgImage})`,
                transition: "background-image 1s ease-in-out",
            }}
        >
            {/* Overlay for better contrast */}
            <div className="absolute inset-0 bg-white opacity-80"></div>

            {/* Section Title */}
            <motion.h2
                className="relative z-10 text-4xl font-extrabold text-center text-[#0ABF53] mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Our Areas of Research
            </motion.h2>

            {/* Grid Layout */}
            <div className="relative z-10 container mx-auto px-4">
                <motion.div
                    className="bg-white p-8 rounded-lg shadow-lg text-center border-t-4 border-[#0ABF53] transition-all hover:scale-105 mx-auto w-full md:w-3/4 lg:w-2/3"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                >
                    <h3 className="text-2xl font-semibold text-[#0ABF53] mb-6">Focus Areas in Energy & Sustainability</h3>
                    <ul className="mt-4 space-y-3 text-lg text-gray-800 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {researchAreas.map((area, index) => (
                            <motion.li
                                key={index}
                                className="flex items-center space-x-2 bg-gray-50 p-3 rounded-md shadow-sm"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Check className="text-[#0ABF53] flex-shrink-0" size={20} />
                                <span className="text-left">{area}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden z-10">
                <svg
                    className="relative block w-full h-20"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                        className="fill-white"
                    ></path>
                </svg>
            </div>
        </section>
    )
}

export default OurResearchAreas

