import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { SocialProof } from "@/components/sections/social-proof";
import { SectionSeparator } from "@/components/ui/section-separator";

import dynamic from "next/dynamic";

const DynamicAbout = dynamic(() => import("@/components/sections/about"));
const DynamicWork = dynamic(() => import("@/components/sections/work"));
const DynamicServices = dynamic(() => import("@/components/sections/services"));
const DynamicFooter = dynamic(() => import("@/components/layout/footer"));

export default function Home() {
    return (
        <>
            <main className="bg-[#020617] w-full">
                <Header />
                <Hero />
                <SectionSeparator />
                <DynamicAbout />
                <SectionSeparator />
                <DynamicServices />
                <SectionSeparator />
                <DynamicWork />
                <SectionSeparator />
            </main>
            <DynamicFooter />
        </>
    );
}
