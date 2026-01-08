import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Github, Star, Code2, Heart, Sparkles } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";

const values = [
    {
        icon: Code2,
        title: "Transparent",
        description: "No dark patterns. Every line of code is open for you to explore.",
    },
    {
        icon: Heart,
        title: "Community-shaped",
        description: "Your ideas and feedback help guide what we build next.",
    },
    {
        icon: Sparkles,
        title: "Crafted with intention",
        description: "Thoughtful design focused on what actually helps you progress.",
    },
];

export function OpenSource() {
    return (
        <section id="open-source" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Built in the{" "}
                            <AuroraText colors={["#2dd4bf", "#14b8a6", "#06b6d4", "#10b981"]} speed={0.6}>
                                open
                            </AuroraText>
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-4">
                            Questify is open-source. Follow along, suggest ideas, or contribute -
                            we're building this together, one commit at a time.
                        </p>

                        <p className="text-sm text-muted-foreground/70">
                            Built publicly on GitHub
                        </p>
                    </div>

                    {/* Value Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {values.map((value) => (
                            <Card
                                key={value.title}
                                className="group border-border/50 hover:border-primary/30 transition-all duration-300"
                            >
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <value.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                                    <p className="text-muted-foreground text-sm">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" variant="outline" className="h-12 px-6 rounded-xl hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all" asChild>
                            <a href="https://github.com/axelfrache/questify" target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-5 w-5" />
                                View on GitHub
                            </a>
                        </Button>
                        <RainbowButton size="lg" className="h-12 px-6 rounded-xl" asChild>
                            <a href="https://github.com/axelfrache/questify" target="_blank" rel="noopener noreferrer">
                                <Star className="mr-2 h-5 w-5" />
                                Star the project
                            </a>
                        </RainbowButton>
                    </div>

                    {/* Signature */}
                    <p className="text-center text-sm text-muted-foreground/60 mt-10">
                        🐢 Slow progress is still progress.
                    </p>
                </div>
            </div>
        </section>
    );
}
