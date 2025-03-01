"use client";

import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar({ onSidenavToggle }: { onSidenavToggle?: () => void }) {
    return (
        <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
            <button
                onClick={onSidenavToggle} // This will only work if onSidenavToggle is provided
                className="md:hidden"
            >
                <Bars3Icon className="w-6 h-6" />
            </button>
            <div className="space-x-4">
                <Link href="/" className="hover:text-gray-300">
                    Home
                </Link>
                <Link href="/dashboard" className="hover:text-gray-300">
                    Dashboard
                </Link>
            </div>
        </nav>
    );
}