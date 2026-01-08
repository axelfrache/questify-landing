export function AppPreview() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See Questify in action</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A clean, focused interface designed for progress
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 blur-3xl opacity-50" />

            <div className="relative bg-card rounded-2xl border border-border/50 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background/50 rounded-lg px-4 py-1.5 text-sm text-muted-foreground max-w-md mx-auto text-center truncate">
                    app.getquestify.com
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-8 min-h-[300px] md:min-h-[400px] bg-gradient-to-br from-background to-secondary/20">
                <div className="flex flex-col md:flex-row gap-6 h-full">
                  {/* Sidebar - Hidden on mobile */}
                  <div className="hidden md:block w-48 space-y-4">
                    <div className="h-10 bg-primary/10 rounded-lg flex items-center px-3 gap-2">
                      <div className="w-5 h-5 rounded bg-primary/30" />
                      <div className="h-3 bg-primary/30 rounded flex-1" />
                    </div>
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-10 bg-secondary/50 rounded-lg flex items-center px-3 gap-2"
                      >
                        <div className="w-5 h-5 rounded bg-muted-foreground/20" />
                        <div className="h-3 bg-muted-foreground/20 rounded w-20" />
                      </div>
                    ))}
                  </div>

                  {/* Main content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="h-8 bg-foreground/10 rounded w-24 md:w-32" />
                      <div className="px-3 py-1.5 bg-accent/20 rounded-full text-accent-foreground text-xs md:text-sm font-medium">
                        +150 XP today
                      </div>
                    </div>

                    {[
                      { title: 'Morning Routine', xp: 25, done: true },
                      { title: 'Complete project proposal', xp: 50, done: true },
                      { title: 'Review team feedback', xp: 30, done: false },
                    ].map((quest, i) => (
                      <div
                        key={i}
                        className={`p-3 md:p-4 rounded-xl border ${quest.done ? 'bg-primary/5 border-primary/20' : 'bg-card border-border/50'}`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${quest.done ? 'border-primary bg-primary' : 'border-muted-foreground/30'}`}
                          >
                            {quest.done && (
                              <span className="text-primary-foreground text-xs">✓</span>
                            )}
                          </div>
                          <span
                            className={`text-sm md:text-base ${quest.done ? 'text-muted-foreground line-through' : ''}`}
                          >
                            {quest.title}
                          </span>
                          <span className="ml-auto text-xs md:text-sm text-accent font-medium shrink-0">
                            +{quest.xp} XP
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-muted-foreground text-sm md:text-base mt-6">
            Your Today view - showing quests, XP earned, and progress at a glance
          </p>
        </div>
      </div>
    </section>
  );
}
