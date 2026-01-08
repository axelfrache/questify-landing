import { FileEdit, Puzzle, Star, TrendingUp, ChevronRight } from "lucide-react";

const steps = [
    {
        icon: FileEdit,
        title: "Create quests",
        description: "Define your goals as meaningful quests",
    },
    {
        icon: Puzzle,
        title: "Break into subquests",
        description: "Split big goals into manageable steps",
    },
    {
        icon: Star,
        title: "Earn XP consistently",
        description: "Small wins add up over time",
    },
    {
        icon: TrendingUp,
        title: "Track long-term progress",
        description: "Watch your journey unfold",
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        How Questify Works
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Simple steps to transform your productivity journey
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 lg:gap-0 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={step.title} className="flex items-center">
                            <div className="relative group w-64 h-full">
                                <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 h-full">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-lg z-10">
                                        {index + 1}
                                    </div>
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 mt-2 group-hover:bg-primary/20 transition-colors">
                                        <step.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm flex-1">{step.description}</p>
                                </div>
                            </div>

                            {index < steps.length - 1 && (
                                <div className="hidden lg:flex items-center justify-center w-12 mx-2">
                                    <ChevronRight className="w-8 h-8 text-primary/50" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
