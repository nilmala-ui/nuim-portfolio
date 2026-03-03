"use client";

export function Nebula() {
    return (
        <div className="w-full h-32 md:h-48 relative flex items-center justify-center overflow-hidden pointer-events-none -z-10">
            <div className="absolute w-[80vw] max-w-[800px] h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-violet-600/10 to-transparent blur-[80px] md:blur-[100px] opacity-40 mix-blend-screen transform-gpu translate-z-0 will-change-transform" />
        </div>
    );
}
