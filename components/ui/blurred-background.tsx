"use client";

import Image from "next/image";

// Using Nuim Brand and Illustration works to provide a rich dense color
const BACKGROUND_ASSETS = [
    "/works/nuimbrand/1.jpg",
    "/works/nuimbrand/4.jpg",
    "/works/nuimcomms/2.jpg",
    "/works/nuimwear/3.jpg",
];

export function BlurredBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">

            {/* Asset 1: Top Right */}
            <div className="absolute -top-[20%] -right-[10%] w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] opacity-40 mix-blend-screen blur-[120px] md:blur-[150px] rounded-full translate-z-0 will-change-transform">
                <Image
                    src={BACKGROUND_ASSETS[0]}
                    alt="Background Mesh 1"
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
            </div>

            {/* Asset 2: Bottom Left */}
            <div className="absolute -bottom-[20%] -left-[10%] w-[90vw] h-[90vw] max-w-[1200px] max-h-[1200px] opacity-30 mix-blend-screen blur-[120px] md:blur-[180px] rounded-full translate-z-0 will-change-transform">
                <Image
                    src={BACKGROUND_ASSETS[1]}
                    alt="Background Mesh 2"
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                />
            </div>

            {/* Asset 3: Middle Right (Subtle) */}
            <div className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] opacity-20 mix-blend-screen blur-[100px] md:blur-[140px] rounded-full translate-z-0 will-change-transform">
                <Image
                    src={BACKGROUND_ASSETS[2]}
                    alt="Background Mesh 3"
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* Asset 4: Top Left (Subtle High Contrast) */}
            <div className="absolute top-[10%] -left-[20%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] opacity-30 mix-blend-screen blur-[100px] md:blur-[120px] rounded-full translate-z-0 will-change-transform">
                <Image
                    src={BACKGROUND_ASSETS[3]}
                    alt="Background Mesh 4"
                    fill
                    className="object-cover rounded-full"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* Tie-it-together base darkening overlay so text is readable */}
            <div className="absolute inset-0 bg-background/50"></div>
        </div>
    );
}
