import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles, Eye } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";

const principles = [
    {
        icon: Heart,
        title: "No guilt",
        description: "Miss a day? No problem. Life happens, and that's okay.",
    },
    {
        icon: Sparkles,
        title: "No streak pressure",
        description: "Progress matters more than perfect attendance.",
    },
    {
        icon: Eye,
        title: "Visible progress",
        description: "Watch your journey unfold with meaningful insights.",
    },
];

export function Philosophy() {
    return (
        <section id="philosophy" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Productivity should feel{" "}
                            <AuroraText colors={["#2dd4bf", "#14b8a6", "#06b6d4", "#10b981"]} speed={0.6}>
                                rewarding
                            </AuroraText>
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Questify is built on a simple belief: sustainable progress beats burnout.
                            We celebrate consistency, not perfection.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {principles.map((principle) => (
                            <Card
                                key={principle.title}
                                className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <CardContent className="relative pt-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <principle.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{principle.title}</h3>
                                    <p className="text-muted-foreground text-sm">{principle.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
