"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Dribbble, Instagram, Check } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

type Inputs = {
    name: string;
    email: string;
    service: string;
    message: string;
};

export default function Footer() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [focusedInput, setFocusedInput] = useState<string | null>(null);

    const emailValue = watch("email");
    const isEmailValid = emailValue && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    const onSubmit = (data: Inputs) => {
        setIsSubmitting(true);
        // Simulate network request
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => setIsSuccess(false), 3000); // Reset after 3s
        }, 1500);
    };

    return (
        <footer id="contact" className="relative bg-black py-16 px-6 overflow-hidden scroll-mt-24">
            {/* Spotlight Background */}
            <div className="pointer-events-none absolute inset-0 right-0 left-auto w-1/2 h-full z-0 opacity-40">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-600/40 via-violet-900/20 to-transparent blur-3xl rounded-full" />
            </div>

            <div className="container relative z-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                {/* Left Column: The Hook */}
                <div className="flex flex-col justify-between h-full">
                    <div>
                        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
                            <span className="relative flex h-3 w-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                            </span>
                            <span className="text-sm font-medium tracking-wide text-white/90">Currently accepting new projects</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">Ready to start <br /> a new project?</h2>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                            I'm currently available for freelance work. Drop a message to discuss UI design, branding, or digital art commissions, and I'll get back to you shortly.
                        </p>
                    </div>

                    <div className="mt-16 md:mt-auto pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/10">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-xl font-bold">NuiM</h3>
                            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} NuiM. All rights reserved.</p>
                        </div>
                        <div className="flex items-center gap-6">
                            <Link href="#" className="text-muted-foreground transition-colors hover:text-white">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-muted-foreground transition-colors hover:text-white">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-muted-foreground transition-colors hover:text-white">
                                <span className="sr-only">Dribbble</span>
                                <Dribbble className="h-6 w-6" />
                            </Link>
                            <Link href="https://instagram.com/nil_m1" target="_blank" className="text-muted-foreground transition-colors hover:text-white">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-6 w-6" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Column: The Terminal Grid Form */}
                <div className="flex flex-col justify-center">
                    <div className="relative w-full max-w-lg mx-auto lg:ml-auto lg:mr-0 p-8 md:p-12 rounded-3xl bg-white/5 backdrop-blur-md border shadow-2xl overflow-hidden transition-colors duration-500 border-white/10 focus-within:border-blue-500/50">

                        {/* Inner form glass reflection */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 pointer-events-none rounded-3xl" />

                        <form onSubmit={handleSubmit(onSubmit)} className="relative z-10 flex flex-col gap-8">

                            {/* Name Input */}
                            <motion.div
                                className={cn(
                                    "flex flex-col gap-2 p-1 border-b transition-all duration-300",
                                    focusedInput === "name" ? "border-blue-500 shadow-[0_4px_16px_rgba(59,130,246,0.3)] bg-blue-500/5 rounded-t-lg" : "border-white/20"
                                )}
                            >
                                <label htmlFor="name" className="text-xs font-semibold text-white/50 uppercase tracking-widest px-2">Name</label>
                                <input
                                    {...register("name", { required: true })}
                                    onFocus={() => setFocusedInput("name")}
                                    onBlur={() => setFocusedInput(null)}
                                    type="text"
                                    id="name"
                                    placeholder="Enter your name"
                                    className="bg-transparent pb-2 px-2 text-lg focus:outline-none placeholder:text-white/20 w-full text-white"
                                />
                            </motion.div>

                            {/* Email Input */}
                            <motion.div
                                className={cn(
                                    "flex flex-col gap-2 p-1 border-b transition-all duration-300 relative",
                                    focusedInput === "email" ? "border-blue-500 shadow-[0_4px_16px_rgba(59,130,246,0.3)] bg-blue-500/5 rounded-t-lg" : "border-white/20"
                                )}
                            >
                                <label htmlFor="email" className="text-xs font-semibold text-white/50 uppercase tracking-widest px-2">Email</label>
                                <div className="relative w-full flex items-center">
                                    <input
                                        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                                        onFocus={() => setFocusedInput("email")}
                                        onBlur={() => setFocusedInput(null)}
                                        type="email"
                                        id="email"
                                        placeholder="name@example.com"
                                        className="bg-transparent pb-2 px-2 text-lg focus:outline-none placeholder:text-white/20 w-full text-white pr-10"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: isEmailValid ? 1 : 0, scale: isEmailValid ? 1 : 0.8 }}
                                        className="absolute right-2 top-0 pointer-events-none text-green-400"
                                    >
                                        <Check className="w-5 h-5" />
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Service Type Select */}
                            <motion.div
                                className={cn(
                                    "flex flex-col gap-2 p-1 border-b transition-all duration-300",
                                    focusedInput === "service" ? "border-blue-500 shadow-[0_4px_16px_rgba(59,130,246,0.3)] bg-blue-500/5 rounded-t-lg" : "border-white/20"
                                )}
                            >
                                <label htmlFor="service" className="text-xs font-semibold text-white/50 uppercase tracking-widest px-2">Service Type</label>
                                <select
                                    {...register("service", { required: true })}
                                    onFocus={() => setFocusedInput("service")}
                                    onBlur={() => setFocusedInput(null)}
                                    id="service"
                                    defaultValue=""
                                    className="bg-transparent pb-2 px-2 text-lg focus:outline-none w-full text-white cursor-pointer appearance-none outline-none"
                                >
                                    <option value="" disabled className="text-white/20 bg-black">Select a service</option>
                                    <option value="ui_design" className="bg-black text-white">UI Design</option>
                                    <option value="branding" className="bg-black text-white">Branding</option>
                                    <option value="illustration" className="bg-black text-white">Illustration</option>
                                    <option value="other" className="bg-black text-white">Other</option>
                                </select>
                            </motion.div>

                            {/* Message Textarea */}
                            <motion.div
                                className={cn(
                                    "flex flex-col gap-2 p-1 border-b transition-all duration-300",
                                    focusedInput === "message" ? "border-blue-500 shadow-[0_4px_16px_rgba(59,130,246,0.3)] bg-blue-500/5 rounded-t-lg" : "border-white/20"
                                )}
                            >
                                <label htmlFor="message" className="text-xs font-semibold text-white/50 uppercase tracking-widest px-2">Message</label>
                                <textarea
                                    {...register("message", { required: true })}
                                    onFocus={() => setFocusedInput("message")}
                                    onBlur={() => setFocusedInput(null)}
                                    id="message"
                                    placeholder="Tell me about your project..."
                                    rows={3}
                                    className="bg-transparent pb-2 px-2 text-lg focus:outline-none placeholder:text-white/20 resize-none w-full text-white min-h-[80px]"
                                ></textarea>
                            </motion.div>

                            {/* Magnetic Submit Button */}
                            <div className="mt-4">
                                <MagneticButton
                                    type="submit"
                                    disabled={isSubmitting || isSuccess}
                                    className={cn(
                                        "w-full h-16 rounded-xl font-medium text-lg tracking-wide transition-all duration-300 overflow-hidden relative group border border-white/10",
                                        isSuccess ? "bg-green-500/20 text-green-400 border-green-500/50" : "bg-white/5 hover:bg-white/10 text-white"
                                    )}
                                >
                                    {/* Gradient Hover Background */}
                                    {!isSuccess && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    )}

                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {isSuccess ? (
                                            <>
                                                <Check className="w-5 h-5" />
                                                Message Sent
                                            </>
                                        ) : isSubmitting ? (
                                            "Sending..."
                                        ) : (
                                            "Send Message"
                                        )}
                                    </span>
                                </MagneticButton>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </footer>
    );
}
