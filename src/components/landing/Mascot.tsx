import { Ripple } from '@/components/ui/ripple';
import chappyMascot from '@/assets/chappy.svg';

export function Mascot() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background overflow-visible">
      <div className="container mx-auto px-6 overflow-visible">
        <div className="max-w-3xl mx-auto text-center overflow-visible">
          <div className="relative inline-flex items-center justify-center mb-10 w-80 h-80 overflow-visible">
            <Ripple mainCircleSize={140} mainCircleOpacity={0.12} numCircles={4} />

            <div className="relative z-10 animate-float-slow">
              <img src={chappyMascot} alt="Chappy mascot" className="w-28 h-28" />
              <div className="absolute -top-3 -right-6 px-3 py-1 rounded-full bg-accent/90 text-accent-foreground text-xs font-semibold shadow-lg whitespace-nowrap">
                +5 XP for showing up
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Slow. Steady. Always moving forward.
          </h2>

          <p className="text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
            Your companion on a long journey.
            <br />
            <span className="text-foreground/80">
              No rush, no pressure - just one step at a time.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
