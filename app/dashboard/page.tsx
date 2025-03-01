"use client";

import { useState } from "react";
import EVSalesChart from "@/app/dashboard/EVSalesChart";
import Link from "next/link";
import { ChevronRight, ChevronLeft, BarChart2, TrendingUp, PieChart } from "lucide-react";

export default function DashboardPage() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedChart, setSelectedChart] = useState("ev-sales");

    const chartComponents = {
        "ev-sales": <EVSalesChart />,
        "market-trends": (
            <div className="h-[600px] flex items-center justify-center">
                <p className="text-gray-500">Market Trends Chart (Coming Soon)</p>
            </div>
        ),
        "regional-analysis": (
            <div className="h-[600px] flex items-center justify-center">
                <p className="text-gray-500">Regional Analysis Chart (Coming Soon)</p>
            </div>
        ),
    };

    const navItems = [
        { id: "ev-sales", label: "EV Sales", icon: <BarChart2 className="w-5 h-5" /> },
        { id: "market-trends", label: "Market Trends", icon: <TrendingUp className="w-5 h-5" /> },
        { id: "regional-analysis", label: "Regional Analysis", icon: <PieChart className="w-5 h-5" /> },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <aside
                className={`${
                    isSidebarOpen ? "w-64" : "w-16"
                } bg-gray-800 text-white transition-all duration-300 flex-shrink-0`}
            >
                <div className="p-4 flex justify-between items-center">
                    {isSidebarOpen && <h1 className="text-xl font-bold">Banana Dashboard</h1>}
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-1 rounded-full hover:bg-gray-700"
                    >
                        {isSidebarOpen ? <ChevronLeft /> : <ChevronRight />}
                    </button>
                </div>

                <nav className="mt-6">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setSelectedChart(item.id)}
                            className={`w-full flex items-center p-4 hover:bg-gray-700 ${
                                selectedChart === item.id ? "bg-gray-900" : ""
                            }`}
                        >
                            {item.icon}
                            {isSidebarOpen && <span className="ml-3">{item.label}</span>}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-8 max-w-7xl mx-auto">
                {/* Header */}
                <header className="mb-12">
                    <h1 className="text-3xl font-bold text-gray-800">Advanced Data Insights</h1>
                    <p className="mt-2 text-gray-600">
                        Discover cutting-edge research and visualizations for your business needs
                    </p>
                </header>

                {/* Chart Section */}
                <section className="mb-12 bg-white rounded-xl shadow-lg p-6">
                    <h2 className="text-2xl font-semibold mb-4 capitalize">
                        {navItems.find((item) => item.id === selectedChart)?.label}
                    </h2>
                    {chartComponents[selectedChart as keyof typeof chartComponents]}
                </section>

                {/* Additional Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Reports */}
                    <section className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Latest Reports</h2>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/reports/ev-sales-2023.pdf" className="text-blue-600 hover:underline">
                                    EV Sales Report 2023
                                </Link>
                                <p className="text-sm text-gray-600">Comprehensive analysis of EV market</p>
                            </li>
                            <li>
                                <Link href="/reports/market-trends-2024.pdf" className="text-blue-600 hover:underline">
                                    Market Trends 2024
                                </Link>
                                <p className="text-sm text-gray-600">Forecasts and key indicators</p>
                            </li>
                        </ul>
                    </section>

                    {/* Consultancy */}
                    <section className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Consultancy Services</h2>
                        <p className="text-gray-600 mb-4">
                            Tailored research and data analysis solutions for your business
                        </p>
                        <Link
                            href="/contact"
                            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Get in Touch
                        </Link>
                    </section>
                </div>
            </main>
        </div>
    );
}