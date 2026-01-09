import { Button } from '@/components/ui/button';
import { AuroraText } from '@/components/ui/aurora-text';
import { ArrowRight, Play } from 'lucide-react';
import peakImage from '@/assets/peak.svg';

export function Hero() {
  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Base background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(20,184,166,0.08),transparent_70%)]" />

      {/* Mountain layer - visual anchor/socle, hidden on mobile for perf */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none hidden md:block"
        aria-hidden="true"
        style={{
          height: 'clamp(300px, 55vh, 600px)',
          backgroundImage: `url(${peakImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center 25%',
          backgroundSize: 'cover',
          opacity: 0.18,
          filter: 'brightness(0.7) saturate(0.8)',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,1) 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,1) 100%)',
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Built for consistency
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text">
              Turn your goals into
            </span>
            <br />
            <AuroraText colors={['#2dd4bf', '#14b8a6', '#06b6d4', '#10b981']} speed={0.6}>
              quests
            </AuroraText>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            A productivity app that rewards{' '}
            <span className="text-foreground font-medium">consistency</span>, not pressure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Button
              size="lg"
              className="h-14 px-8 text-lg rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
              asChild
            >
              <a href="https://app.getquestify.com">
                Start your journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-8 text-lg rounded-xl hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all"
              asChild
            >
              <a href="#how-it-works">
                <Play className="mr-2 h-5 w-5" />
                See how it works
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
