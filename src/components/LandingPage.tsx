import { Hero } from "./landing/Hero";
import { HowItWorks } from "./landing/HowItWorks";
import { Features } from "./landing/Features";
import { AppPreview } from "./landing/AppPreview";
import { Philosophy } from "./landing/Philosophy";
import { Mascot } from "./landing/Mascot";
import { OpenSource } from "./landing/OpenSource";
import { FinalCTA } from "./landing/FinalCTA";
import { Footer } from "./landing/Footer";
import { ThemeToggle } from "./ThemeToggle";
import chappyLogo from "@/assets/chappy.svg";

export function LandingPage() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src={chappyLogo} alt="Chappy" className="w-10 h-10" />
                        <span className="font-bold text-xl">Questify</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            How it works
                        </a>
                        <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Features
                        </a>
                        <a href="#philosophy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Philosophy
                        </a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <a
                            href="https://app.getquestify.com"
                            className="hidden sm:inline-flex items-center justify-center h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                        >
                            Launch App
                        </a>
                    </div>
                </div>
            </header>

            <main className="pt-16">
                <Hero />
                <HowItWorks />
                <Features />
                <AppPreview />
                <Philosophy />
                <Mascot />
                <OpenSource />
                <FinalCTA />
            </main>

            <Footer />
        </div>
    );
}
