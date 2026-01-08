import { Button } from "@/components/ui/button";
import { LightRays } from "@/components/ui/light-rays";
import { ArrowRight } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";

export function FinalCTA() {
    return (
        <section className="py-24">
            <div className="container mx-auto px-6">
                <div className="relative max-w-4xl mx-auto">
                    <div className="relative bg-gradient-to-br from-card via-card to-secondary/50 border border-border/50 rounded-3xl p-8 md:p-16 text-center shadow-xl overflow-hidden">
                        <LightRays
                            color="rgba(20, 184, 166, 0.1)"
                            count={5}
                            blur={50}
                            speed={20}
                            length="60vh"
                        />

                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Ready to start your{" "}
                                <AuroraText colors={["#2dd4bf", "#14b8a6", "#06b6d4", "#10b981"]} speed={0.6}>
                                    journey
                                </AuroraText>
                                ?
                            </h2>

                            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
                                Join the adventurers turning their goals into achievements.
                            </p>

                            <Button size="lg" className="h-14 px-10 text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all" asChild>
                                <a href="https://app.getquestify.com">
                                    Start using Questify
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>

                            <p className="mt-6 text-sm text-muted-foreground">
                                Free. No pressure. Just progress.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
