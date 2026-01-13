import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Button } from '@/components/ui/button';
import { AuroraText } from '@/components/ui/aurora-text';
import { ArrowRight, Play } from 'lucide-react';
import peakImage from '@/assets/peak.svg';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const mountainY = useTransform(scrollYProgress, [0, 1], [0, 350]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* Base background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(20,184,166,0.08),transparent_70%)]" />

      {/* Mountain layer - visual anchor with parallax effect */}
      <motion.div
        className="absolute inset-x-0 bottom-0 pointer-events-none hidden md:block"
        aria-hidden="true"
        style={{
          height: 'clamp(500px, 95vh, 1100px)',
          backgroundImage: `url(${peakImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center top',
          backgroundSize: '100% auto',
          opacity: 0.2,
          filter: 'brightness(0.6) saturate(0.65)',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 5%, rgba(0,0,0,0.9) 15%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 5%, rgba(0,0,0,0.9) 15%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%)',
          y: mountainY,
        }}
      />

      {/* Persistent bottom fade overlay - stays fixed while mountain moves */}
      <div
        className="absolute inset-x-0 bottom-0 h-72 pointer-events-none hidden md:block z-[5] bg-gradient-to-t from-background via-background/50 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Subtle glow behind text for local contrast */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[600px] h-[300px] bg-background/40 blur-[80px] rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 backdrop-blur-sm">
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
            <span className="drop-shadow-[0_0_25px_rgba(20,184,166,0.4)]">
              <AuroraText colors={['#2dd4bf', '#14b8a6', '#06b6d4', '#10b981']} speed={0.6}>
                quests
              </AuroraText>
            </span>
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
              className="h-14 px-8 text-lg rounded-xl bg-background/50 border-border/50 backdrop-blur-sm hover:bg-primary/10 hover:text-primary hover:border-primary/50 transition-all"
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
