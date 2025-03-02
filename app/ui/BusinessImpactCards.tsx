"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Users, Globe, Zap } from "lucide-react"

const BusinessImpactCards = () => {
    return (
        <section className="bg-gradient-to-b from-white to-gray-100 text-gray-900 py-24 text-center relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                <motion.h2
                    className="text-4xl font-extrabold text-gray-800 mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Our Performance
                </motion.h2>

                {/* Business Impact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {[
                        { number: "3", text: "Active business partners using our reports", icon: <Users size={24} /> },
                        { number: "2", text: "Business partners using web-platform", icon: <Globe size={24} /> },
                        { number: "10+", text: "Advanced energy models developed", icon: <Zap size={24} /> },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-xl text-center border-t-4 border-[#0ABF53] relative overflow-hidden group"
                            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="absolute top-0 right-0 bg-[#0ABF53] text-white p-2 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowUpRight size={20} />
                            </div>
                            <motion.div
                                className="text-[#0ABF53] mb-4"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                            >
                                {item.icon}
                            </motion.div>
                            <motion.h3
                                className="text-5xl font-bold text-[#0ABF53] mb-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                            >
                                {item.number}
                            </motion.h3>
                            <p className="text-lg mt-2 text-gray-600">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#0ABF53] rounded-full"></div>
                <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#0ABF53] rounded-full"></div>
            </div>
        </section>
    )
}

export default BusinessImpactCards

