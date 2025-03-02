"use client";
import HeroSection from "./ui/HeroSection";
import FeaturesSection from "./ui/FeaturesSection";
import Reports from "./ui/Reports";
import Testimonials from "./ui/Testimonials";
import Quotes from "./ui/Quotes";
import OurResearchAreas from "./ui/OurResearchAreas";
import BusinessImpactCards from "./ui/BusinessImpactCards";
import TeamSection from "@/app/ui/TeamSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <BusinessImpactCards />
            <Testimonials />
            <OurResearchAreas/>
            <Reports />
            <TeamSection />
            <Quotes />
        </>
    );
}