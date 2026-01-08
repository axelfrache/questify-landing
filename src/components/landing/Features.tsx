import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FolderKanban, CalendarCheck, BarChart3, Trophy } from 'lucide-react';
import { AuroraText } from '@/components/ui/aurora-text';

const features = [
  {
    icon: FolderKanban,
    title: 'Projects & Subquests',
    description:
      'Organize goals into projects and break them down into smaller, achievable subquests.',
  },
  {
    icon: CalendarCheck,
    title: 'Daily & Weekly Habits',
    description: 'Build consistency with recurring quests that fit naturally into your routine.',
  },
  {
    icon: BarChart3,
    title: 'Progress & Stats',
    description: 'Visualize your journey with beautiful charts and meaningful statistics.',
  },
  {
    icon: Trophy,
    title: 'XP, Grades & Milestones',
    description: 'Earn experience points, level up, and celebrate your achievements.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to{' '}
            <AuroraText colors={['#2dd4bf', '#14b8a6', '#06b6d4', '#10b981']} speed={0.6}>
              level up
            </AuroraText>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Powerful features designed to make progress feel rewarding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
