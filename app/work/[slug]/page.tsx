import { PROJECTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ProjectGallery } from "@/components/work/project-gallery";

export function generateStaticParams() {
    return PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const project = PROJECTS.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background text-text">
            <Header />

            <div className="container mx-auto px-6 pt-32 pb-24">
                <Link href="/" className="inline-block mb-12">
                    <MagneticButton className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        <span>Back to Home</span>
                    </MagneticButton>
                </Link>

                <header className="mb-16">
                    <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">{project.category}</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8">{project.title}</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        A collection of designs and assets created for {project.title}.
                        Explorations in {project.category.toLowerCase()} and visual identity.
                    </p>
                </header>

                <ProjectGallery images={project.images} title={project.title} />
            </div>

            <Footer />
        </main>
    );
}
