import { useState } from 'react';
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button';
import {
  Inbox,
  Sun,
  CalendarDays,
  Repeat2,
  Map,
  TrendingUp,
  BarChart3,
  History,
  Plus,
  CheckCircle2,
  Sparkles,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

type PreviewTab = 'today' | 'stats';

const navItemsToday = [
  { icon: Inbox, label: 'Inbox', active: false },
  { icon: Sun, label: 'Today', active: true },
  { icon: CalendarDays, label: 'Upcoming', active: false },
  { icon: Repeat2, label: 'Habits', active: false },
  { icon: Map, label: 'Regions', active: false },
];

const navItemsStats = [
  { icon: Inbox, label: 'Inbox', active: false },
  { icon: Sun, label: 'Today', active: false },
  { icon: CalendarDays, label: 'Upcoming', active: false },
  { icon: Repeat2, label: 'Habits', active: false },
  { icon: Map, label: 'Regions', active: false },
];

const insightItemsToday = [
  { icon: TrendingUp, label: 'Progress', active: false },
  { icon: BarChart3, label: 'Stats', active: false },
  { icon: History, label: 'History', active: false },
];

const insightItemsStats = [
  { icon: TrendingUp, label: 'Progress', active: false },
  { icon: BarChart3, label: 'Stats', active: true },
  { icon: History, label: 'History', active: false },
];

// Weekly completion data for the bar chart
const weeklyData = [
  { day: 'S', rate: 0, planned: 0 },
  { day: 'S', rate: 50, planned: 2 },
  { day: 'M', rate: 100, planned: 3 },
  { day: 'T', rate: 75, planned: 4 },
  { day: 'W', rate: 100, planned: 2 },
  { day: 'T', rate: 60, planned: 5 },
  { day: 'F', rate: 100, planned: 3 },
];

// Calendar grid data for monthly activity (null = empty, 0-3 = intensity)
const calendarData = [
  [null, null, null, 0, 1, 2, 1],
  [3, 2, 0, 1, 2, 3, 2],
  [1, 3, 1, 2, 3, 2, 1],
  [2, 3, 2, 1, 2, 1, 3],
  [2, 1, 0, 0, 1, 2, 2],
  [0, 0, 0, null, null, null, null],
];

function TodayContent() {
  return (
    <div className="flex-1 p-4 md:p-6 relative space-y-5 overflow-auto">
      {/* Daily Completion Card */}
      <div className="rounded-lg border bg-card p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-muted-foreground" />
            <span className="font-medium">Daily Completion</span>
          </div>
          <span className="text-2xl font-bold text-primary">33%</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-primary rounded-full transition-all" />
        </div>
        <p className="text-sm text-muted-foreground">1 of 3 quests completed</p>
      </div>

      {/* Today's Quests */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold">Today's Quests</h2>
        <div className="space-y-2">
          {/* Quest Card - Active 1 */}
          <div
            className="rounded-lg border bg-card overflow-hidden border-l-[3px] hover:shadow-md transition-all"
            style={{ borderLeftColor: '#3b82f6' }}
          >
            <div className="p-3">
              <div className="flex items-start gap-3">
                <div className="pt-0.5">
                  <div className="w-4 h-4 rounded border-2 border-muted-foreground/40" />
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">💪</span>
                    <h3 className="text-sm font-medium">Complete a 30-min workout</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium bg-muted text-muted-foreground">
                      <Repeat2 className="h-2.5 w-2.5" />
                      Daily
                    </span>
                    <span className="inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-medium bg-yellow-500/15 text-yellow-600">
                      Medium
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-semibold bg-primary/10 text-primary shrink-0">
                  <Sparkles className="h-2.5 w-2.5" />
                  +75 XP
                </span>
              </div>
            </div>
          </div>

          {/* Quest Card - Active 2 */}
          <div
            className="rounded-lg border bg-card overflow-hidden border-l-[3px] hover:shadow-md transition-all"
            style={{ borderLeftColor: '#8b5cf6' }}
          >
            <div className="p-3">
              <div className="flex items-start gap-3">
                <div className="pt-0.5">
                  <div className="w-4 h-4 rounded border-2 border-muted-foreground/40" />
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">💻</span>
                    <h3 className="text-sm font-medium">Review pull requests</h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium bg-muted text-muted-foreground">
                      <Repeat2 className="h-2.5 w-2.5" />
                      Weekly
                    </span>
                    <span className="inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-medium bg-green-500/15 text-green-600">
                      Easy
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-semibold bg-primary/10 text-primary shrink-0">
                  <Sparkles className="h-2.5 w-2.5" />
                  +50 XP
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Completed */}
      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-muted-foreground">Completed</h2>
        <div className="space-y-2">
          {/* Quest Card - Completed */}
          <div
            className="rounded-lg border bg-card overflow-hidden border-l-[3px] opacity-60"
            style={{ borderLeftColor: '#22c55e' }}
          >
            <div className="p-3">
              <div className="flex items-start gap-3">
                <div className="pt-0.5">
                  <div className="w-4 h-4 rounded border-2 border-primary bg-primary flex items-center justify-center">
                    <svg
                      className="w-2.5 h-2.5 text-primary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">📚</span>
                    <h3 className="text-sm font-medium line-through text-muted-foreground">
                      Read 20 pages
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium bg-muted text-muted-foreground opacity-50">
                      <Repeat2 className="h-2.5 w-2.5" />
                      Daily
                    </span>
                    <span className="inline-flex items-center rounded-md px-1.5 py-0.5 text-[10px] font-medium bg-green-500/15 text-green-600 opacity-50">
                      Easy
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-semibold bg-primary/10 text-primary opacity-50 shrink-0">
                  <Sparkles className="h-2.5 w-2.5" />
                  +50 XP
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAB */}
      <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary shadow-md flex items-center justify-center hover:shadow-lg transition-shadow">
        <Plus className="w-5 h-5 text-primary-foreground" />
      </div>
    </div>
  );
}

function StatsContent() {
  const getCompletionColor = (rate: number, hasPlanned: boolean) => {
    if (!hasPlanned) return 'bg-muted/50';
    if (rate >= 100) return 'bg-green-500';
    if (rate >= 75) return 'bg-green-400';
    if (rate >= 50) return 'bg-primary';
    if (rate > 0) return 'bg-primary/60';
    return 'bg-muted/50';
  };

  return (
    <div className="flex-1 p-4 md:p-6 overflow-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Stats</h1>
        <p className="text-muted-foreground">Your activity and consistency over time.</p>
      </div>

      {/* Weekly Consistency Card */}
      <div className="rounded-lg border bg-card">
        <div className="p-4 pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-base font-medium">
              <Calendar className="h-4 w-4" />
              Weekly Consistency
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span>
                <span className="font-medium text-foreground">11</span> quests
              </span>
              <span>
                <span className="font-medium text-foreground">+550</span> XP
              </span>
            </div>
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="flex items-end gap-2 h-16">
            {weeklyData.map((day, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex items-end justify-center h-12">
                  <div
                    className={`w-full max-w-6 rounded-t transition-all ${getCompletionColor(day.rate, day.planned > 0)}`}
                    style={{
                      height: day.planned > 0 ? `${Math.max(day.rate, 8)}%` : '8%',
                    }}
                  />
                </div>
                <span className="text-[10px] text-muted-foreground">{day.day}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 pt-2 border-t flex items-center justify-end gap-3 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-sm bg-green-500" />
              100%
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-sm bg-primary/60" />
              Partial
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-sm bg-muted/50" />
              None
            </span>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="grid gap-4 lg:grid-cols-2">
        {/* Monthly Activity */}
        <div className="rounded-lg border bg-card">
          <div className="py-3 px-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Monthly Activity</span>
              <div className="flex items-center">
                <ChevronLeft className="h-3.5 w-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground w-16 text-center">Jan 2026</span>
                <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
              </div>
            </div>
          </div>
          <div className="px-4 pb-4">
            <div className="flex gap-4">
              {/* Calendar grid */}
              <div className="flex-1 flex items-center justify-center py-2">
                <div className="grid grid-cols-7 gap-[3px]">
                  {calendarData.flat().map((day, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-[3px] ${
                        day === null
                          ? ''
                          : day === 0
                            ? 'bg-muted/20'
                            : day === 1
                              ? 'bg-primary/30'
                              : day === 2
                                ? 'bg-primary/60'
                                : 'bg-primary'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="w-px bg-border/20" />

              {/* Stats */}
              <div className="flex-1 flex flex-col justify-center min-w-[85px] pl-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-xl font-semibold leading-none">11</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">quests</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold leading-none">5</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">active days</p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold leading-none text-primary">+550</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">XP</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4">
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-muted/20" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-primary/30" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-primary/60" />
                  <span className="w-2.5 h-2.5 rounded-[2px] bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* By Region */}
        <div className="rounded-lg border bg-card flex flex-col h-full">
          <div className="pb-0 pt-4 px-4">
            <div className="flex items-center gap-2 text-base font-medium">
              <Map className="h-4 w-4" />
              By Region
            </div>
          </div>
          <div className="p-4 flex-1 flex items-center justify-center">
            <svg viewBox="0 0 240 180" className="w-full max-w-[220px] h-auto">
              {/* Radar grid - pentagon */}
              <polygon
                points="120,25 185,60 165,130 75,130 55,60"
                fill="none"
                stroke="currentColor"
                className="text-border"
                strokeWidth="1"
              />
              <polygon
                points="120,45 165,70 150,115 90,115 75,70"
                fill="none"
                stroke="currentColor"
                className="text-border"
                strokeWidth="0.5"
              />
              {/* Data polygon */}
              <polygon
                points="120,30 180,65 155,125 85,115 65,55"
                fill="currentColor"
                className="text-primary/20"
              />
              <polygon
                points="120,30 180,65 155,125 85,115 65,55"
                fill="none"
                stroke="currentColor"
                className="text-primary"
                strokeWidth="2"
              />
              {/* Points */}
              <circle cx="120" cy="30" r="4" className="fill-primary" />
              <circle cx="180" cy="65" r="4" className="fill-primary" />
              <circle cx="155" cy="125" r="4" className="fill-primary" />
              <circle cx="85" cy="115" r="4" className="fill-primary" />
              <circle cx="65" cy="55" r="4" className="fill-primary" />
              {/* Labels */}
              <text
                x="120"
                y="12"
                textAnchor="middle"
                className="fill-muted-foreground text-[10px]"
              >
                Work
              </text>
              <text x="200" y="65" textAnchor="start" className="fill-muted-foreground text-[10px]">
                Health
              </text>
              <text
                x="165"
                y="145"
                textAnchor="middle"
                className="fill-muted-foreground text-[10px]"
              >
                Learning
              </text>
              <text
                x="75"
                y="145"
                textAnchor="middle"
                className="fill-muted-foreground text-[10px]"
              >
                Personal
              </text>
              <text x="40" y="55" textAnchor="end" className="fill-muted-foreground text-[10px]">
                Social
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AppPreview() {
  const [activeTab, setActiveTab] = useState<PreviewTab>('today');

  const navItems = activeTab === 'today' ? navItemsToday : navItemsStats;
  const insightItems = activeTab === 'today' ? insightItemsToday : insightItemsStats;
  const urlPath = activeTab === 'today' ? 'today' : 'stats';

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
          {/* Tab switcher */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex rounded-lg bg-secondary/50 p-1 border border-border/50">
              <button
                onClick={() => setActiveTab('today')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'today'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Today View
              </button>
              <button
                onClick={() => setActiveTab('stats')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === 'stats'
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Stats View
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 blur-3xl opacity-30" />

            <div className="relative bg-card rounded-2xl border border-border/50 shadow-lg overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background/50 rounded-lg px-4 py-1.5 text-sm text-muted-foreground max-w-md mx-auto text-center truncate">
                    app.getquestify.com/{urlPath}
                  </div>
                </div>
              </div>

              {/* App content */}
              <div className="h-[300px] md:h-[580px] bg-gradient-to-br from-background to-secondary/20 overflow-hidden">
                <div className="flex h-full">
                  {/* Sidebar */}
                  <div className="hidden md:flex flex-col w-52 border-r border-border/50 bg-secondary/20 p-3">
                    {/* User */}
                    <div className="flex items-center gap-2 px-2 py-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xs font-medium text-primary">AF</span>
                      </div>
                      <span className="text-sm font-medium">Axel Frache</span>
                    </div>

                    {/* Navigation */}
                    <div className="text-[10px] uppercase text-muted-foreground/60 font-medium px-2 mb-2">
                      Navigation
                    </div>
                    <div className="space-y-0.5 mb-4">
                      {navItems.map((item) => (
                        <div
                          key={item.label}
                          className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm ${
                            item.active
                              ? 'bg-primary/10 text-primary font-medium'
                              : 'text-muted-foreground hover:bg-secondary/50'
                          }`}
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Insights */}
                    <div className="text-[10px] uppercase text-muted-foreground/60 font-medium px-2 mb-2">
                      Insights
                    </div>
                    <div className="space-y-0.5">
                      {insightItems.map((item) => (
                        <div
                          key={item.label}
                          className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm ${
                            item.active
                              ? 'bg-primary/10 text-primary font-medium'
                              : 'text-muted-foreground hover:bg-secondary/50'
                          }`}
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Main content */}
                  {activeTab === 'today' ? <TodayContent /> : <StatsContent />}
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-muted-foreground text-sm md:text-base mt-6">
            {activeTab === 'today'
              ? 'Your Today view - track daily quests, XP earned, and progress at a glance'
              : 'Your Stats view - visualize your consistency, activity patterns, and regional focus'}
          </p>

          <div className="flex justify-center mt-8">
            <a href="https://app.getquestify.com" target="_blank" rel="noopener noreferrer">
              <InteractiveHoverButton className="border-primary/20 hover:bg-primary">
                Try it yourself
              </InteractiveHoverButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
