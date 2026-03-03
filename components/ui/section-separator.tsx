export function SectionSeparator() {
    return (
        <div className="w-full relative py-16 flex items-center justify-center pointer-events-none">
            {/* Left Fading Line */}
            <div className="h-[1px] w-full max-w-[200px] md:max-w-md bg-gradient-to-r from-transparent to-white/10" />

            {/* NuiM Branding */}
            <div className="px-6 text-xs font-bold tracking-[0.3em] uppercase">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#7C3AED]">N</span>
                <span className="text-white">uiM</span>
            </div>

            {/* Right Fading Line */}
            <div className="h-[1px] w-full max-w-[200px] md:max-w-md bg-gradient-to-l from-transparent to-white/10" />
        </div>
    );
}
