"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Energy & Research Reports
const researchReports = [
    {
        id: 1,
        title: "EV Sales Report",
        description:
            "A detailed analysis of global electric vehicle sales trends, market penetration, and future projections.",
        image: "/img/Reports/EV_Sales.jpg",
        link: "/reports/ev-sales",
    },
    {
        id: 2,
        title: "Electricity Demand Report",
        description:
            "Insights into electricity consumption trends, forecasting models, and grid stability challenges.",
        image: "/img/Reports/Electricity_Demand.jpg",
        link: "/reports/electricity-demand",
    },
    {
        id: 3,
        title: "Energy Prices Monthly Report",
        description:
            "Monthly updates on energy prices, market fluctuations, and price forecasting for key energy sectors.",
        image: "/img/Reports/Energy_Prices.jpg",
        link: "/reports/energy-prices",
    },
];

const Reports = () => {
    return (
        <section className="bg-white py-24">
            <div className="container mx-auto px-6">
                {/* Section Heading */}
                <motion.h2
                    className="text-4xl font-extrabold text-center text-gray-900 mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Energy & Research Reports
                </motion.h2>

                {/* Reports Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {researchReports.map((report) => (
                        <motion.div
                            key={report.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-[#0ABF53] hover:scale-105 transition-transform"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: report.id * 0.2 }}
                        >
                            {/* Report Image */}
                            <div className="w-full h-[250px]">
                                <Image
                                    src={report.image}
                                    alt={report.title}
                                    width={400}
                                    height={250}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Report Content */}
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-gray-900">{report.title}</h3>
                                <p className="text-gray-700 mt-3">{report.description}</p>
                                <a
                                    href={report.link}
                                    className="inline-block mt-4 text-[#0ABF53] font-bold hover:underline"
                                >
                                    Read More →
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reports;
