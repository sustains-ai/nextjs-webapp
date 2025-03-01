"use client";

import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";
import Navbar from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1 p-4">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}