"use client";
import HeroSection from "./ui/HeroSection";
import FeaturesSection from "./ui/FeaturesSection";
import Blogs from "./ui/blogs";
import Testimonials from "./ui/Testimonials";
import Quotes from "./ui/Quotes";
import KeyTerms from "./ui/KeyTerms";
import BusinessImpactCards from "./ui/BusinessImpactCards";
import TeamSection from "@/app/ui/TeamSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <BusinessImpactCards />
            <Testimonials />
            <KeyTerms/>
            <Blogs />
            <TeamSection />
            <Quotes />
        </>
    );
}