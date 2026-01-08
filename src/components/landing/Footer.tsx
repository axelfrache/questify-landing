import { Github } from "lucide-react";
import chappyLogo from "@/assets/chappy.svg";

export function Footer() {
    return (
        <footer className="py-12 border-t border-border/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div className="flex items-center gap-2">
                        <img src={chappyLogo} alt="Questify" className="w-8 h-8" />
                        <span className="font-semibold text-lg">Questify</span>
                    </div>

                    <p className="text-muted-foreground text-sm max-w-xs">
                        Slow. Steady. Always moving forward.
                    </p>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>© 2026 Questify</span>
                        <span className="text-border">•</span>
                        <a
                            href="https://github.com/axelfrache/questify"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:text-primary transition-colors"
                        >
                            <Github className="w-3.5 h-3.5" />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
