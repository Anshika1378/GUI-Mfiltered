import Badge from '@/components/ui/badge';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import ThemeToggle from '@/components/theme-toggle';

const stats = [
  { label: 'Total Traffic', value: '1,245,678', accent: 'text-brand-600' },
  { label: 'Valid Traffic', value: '1,141,010', accent: 'text-emerald-600' },
  { label: 'Invalid Traffic', value: '104,668', accent: 'text-amber-500' },
  { label: 'Revenue Saved', value: '$3,240', accent: 'text-cyan-500' },
];

const filters = [
  { title: 'Date range', items: ['This month', 'Oct 1 - Oct 25, 2024'] },
  { title: 'Campaigns', items: ['All campaigns', 'Holiday Sale', 'Mobile Launch', 'Retention'] },
  { title: 'Traffic sources', items: ['DSPs', 'AdNetworks', 'Direct', 'Affiliates'] },
  { title: 'Fraud types', items: ['Bot', 'Click farming', 'Invalid traffic', 'Proxy'] },
];

const sources = [
  { name: 'Traffic Farm', share: '28%', color: 'bg-brand-600' },
  { name: 'Geo Locker', share: '24%', color: 'bg-emerald-600' },
  { name: 'Click Bot', share: '19%', color: 'bg-amber-500' },
  { name: 'Invalid DSP', share: '16%', color: 'bg-rose-500' },
];

const incidents = [
  { id: 'AF-102', campaign: 'Retail GTM', type: 'Click', score: 'High IVT', location: 'US', status: 'Blocked' },
  { id: 'AF-108', campaign: 'Holiday Promo', type: 'Bot', score: 'Critical', location: 'CA', status: 'Blocked' },
  { id: 'AF-111', campaign: 'App Launch', type: 'Traffic Farm', score: 'High IVT', location: 'BR', status: 'Review' },
];

export default function AdFraudPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:px-8 text-black dark:text-slate-200">
      <div className="mb-8 rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-soft dark:border-slate-800/70 dark:bg-slate-950/80 text-black dark:text-slate-200">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-600 dark:text-brand-400">Ad Fraud Detection</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Fraud dashboard and traffic intelligence</h1>
            <p className="max-w-2xl text-slate-700 dark:text-slate-300">
              Investigate suspicious sources with confidence. The dashboard surfaces realtime fraud signals, campaign risk, and revenue impact.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ThemeToggle />
            <Button
              href="/"
              className="border border-slate-200 !bg-slate-100 !text-slate-900 shadow-sm shadow-slate-200/50 hover:!bg-slate-200 dark:border-slate-700 dark:!bg-slate-900 dark:!text-slate-100 dark:hover:!bg-slate-800"
            >
              Back to home
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.32fr_0.68fr]">
        <aside className="space-y-6">
          <Card className="bg-white/90 text-black dark:bg-slate-950/80 dark:text-slate-100">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Filters</p>
              <h2 className="mt-3 text-2xl font-semibold">Campaign controls</h2>
            </div>
            <div className="space-y-5 mt-6">
              {filters.map((filter) => (
                <div key={filter.title} className="rounded-3xl border border-slate-200/80 bg-slate-50/90 p-4 dark:border-slate-800/70 dark:bg-slate-900/80">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{filter.title}</p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    {filter.items.map((item) => (
                      <li key={item} className="rounded-2xl bg-slate-100/90 px-3 py-2 dark:bg-slate-950/90">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-white/90 text-black dark:bg-slate-950/80 dark:text-slate-100">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Traffic status</p>
                <h3 className="mt-2 text-xl font-semibold">Current risk snapshot</h3>
              </div>
              <Badge variant="warning">High</Badge>
            </div>
            <div className="mt-6 grid gap-3">
              {stats.slice(0, 3).map((item) => (
                <div key={item.label} className="rounded-3xl border border-slate-200/80 bg-slate-50/90 p-4 dark:border-slate-800/70 dark:bg-slate-900/80">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{item.label}</p>
                  <p className={`mt-3 text-2xl font-semibold ${item.accent}`}>{item.value}</p>
                </div>
              ))}
            </div>
          </Card>
        </aside>

        <section className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <Card key={item.label} className="bg-white/90 text-black dark:bg-slate-950/80 dark:text-slate-100 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{item.label}</p>
                <p className={`mt-4 text-3xl font-semibold ${item.accent}`}>{item.value}</p>
              </Card>
            ))}
          </div>

          <Card className="bg-white/90 dark:bg-slate-950/80">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Traffic trend</p>
                <h2 className="mt-2 text-2xl font-semibold">Daily fraud signal</h2>
              </div>
              <Badge variant="success">Realtime</Badge>
            </div>
            <div className="mt-6 grid gap-3 rounded-[2rem] bg-slate-100/90 p-5 text-slate-700 dark:bg-slate-900/80 dark:text-slate-300 sm:grid-cols-5">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((day, index) => (
                <div key={day} className="flex flex-col items-center gap-3">
                  <div className="w-10 rounded-full bg-slate-200 dark:bg-slate-800" style={{ height: `${24 + index * 12}px` }} />
                  <span className="text-xs">{day}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid gap-6 lg:grid-cols-[0.55fr_0.45fr]">
          <Card className="bg-white/90 text-black dark:bg-slate-950/80 dark:text-slate-100">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Sources</p>
                  <h3 className="mt-2 text-2xl font-semibold">Top fraudulent sources</h3>
                </div>
                <Badge>Live</Badge>
              </div>
              <div className="mt-6 space-y-4">
                {sources.map((source) => (
                  <div key={source.name} className="flex items-center justify-between gap-4 rounded-3xl border border-slate-200/80 bg-slate-50/90 p-4 dark:border-slate-800/70 dark:bg-slate-900/80">
                    <div className="flex items-center gap-4">
                      <span className={`h-3.5 w-3.5 rounded-full ${source.color}`} />
                      <p>{source.name}</p>
                    </div>
                    <p className="font-semibold">{source.share}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-white/90 text-black dark:bg-slate-950/80 dark:text-slate-100">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Recent incidents</p>
                  <h3 className="mt-2 text-2xl font-semibold">Latest alerts</h3>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                {incidents.map((incident) => (
                  <div key={incident.id} className="rounded-3xl border border-slate-200/80 bg-slate-50/90 p-4 dark:border-slate-800/70 dark:bg-slate-900/80">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold">{incident.campaign}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{incident.id} · {incident.location}</p>
                      </div>
                      <Badge variant={incident.status === 'Blocked' ? 'danger' : 'warning'}>{incident.status}</Badge>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <span>{incident.type}</span>
                      <span className="h-1 w-1 rounded-full bg-slate-400 dark:bg-slate-600" />
                      <span>{incident.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}
