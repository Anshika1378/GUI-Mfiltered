import Badge from '@/components/ui/badge';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import ThemeToggle from '@/components/theme-toggle';

const verificationSteps = [
  { label: 'Phone Number Verification', status: 'Active', progress: 100 },
  { label: 'Document Scan (ID Card / Driver’s License)', status: 'Processing', progress: 65 },
  { label: 'Upload ID Document', status: 'Pending', progress: 0 },
];

const history = [
  { date: '2023-10-27', user: '+1 (555) 123-4567', type: 'Phone & ID', status: 'Pending' },
  { date: '2023-10-26', user: '+1 (555) 123-4567', type: 'Phone & ID', status: 'Verified' },
  { date: '2023-10-24', user: '+1 (555) 123-4567', type: 'Phone & ID', status: 'Failed' },
];

export default function UserIdentityPage() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:px-6 lg:px-8 text-black dark:text-slate-100">
      <div className="mb-8 rounded-[2rem] border border-slate-200/70 bg-white/90 p-6 shadow-soft dark:border-slate-800/70 dark:bg-slate-950/80 text-black dark:text-slate-100">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-600 dark:text-brand-400">Identity verification</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">User identity and verification workflow</h1>
            <p className="max-w-2xl text-slate-700 dark:text-slate-300">
              Manage user onboarding with clear identity signals, audit-ready verification steps, and fast anomaly detection.
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

      <section className="grid gap-6 xl:grid-cols-[0.34fr_0.66fr]">
        <aside className="space-y-6">
          <Card className="bg-white/90 text-black dark:bg-slate-950/80 dark:text-slate-100">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Verification steps</p>
              <h2 className="mt-3 text-2xl font-semibold">Pipeline progress</h2>
            </div>
            <div className="mt-6 space-y-4">
              {verificationSteps.map((step) => (
                <div key={step.label} className="rounded-3xl border border-slate-200/80 bg-slate-50/90 p-4 dark:border-slate-800/70 dark:bg-slate-900/80">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{step.label}</p>
                      <p className="mt-2 text-lg font-semibold text-black dark:text-slate-100">{step.status}</p>
                    </div>
                    <Badge variant={step.status === 'Active' ? 'success' : step.status === 'Processing' ? 'warning' : 'default'}>
                      {step.status}
                    </Badge>
                  </div>
                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                    <div className="h-full rounded-full bg-brand-600" style={{ width: `${step.progress}%` }} />
                  </div>
                  <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">{step.progress}% complete</p>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-white/90 text-slate-900 dark:bg-slate-950/80 dark:text-slate-100">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Scan results</p>
              <h2 className="mt-3 text-2xl font-semibold">Verification trace</h2>
            </div>
            <div className="mt-6 space-y-4 rounded-3xl border border-slate-200/80 bg-slate-50/90 p-5 dark:border-slate-800/70 dark:bg-slate-900/80">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Phone Number Scan</p>
                <p className="mt-2 text-lg font-semibold text-black dark:text-slate-100">+1 (555) 123-4567</p>
                <p className="text-sm text-emerald-600 dark:text-emerald-300">Verified</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">ID Document Scan</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Analyzing document. Extracting details…</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Face Match</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Comparing uploaded photo to ID...</p>
              </div>
            </div>
            <Button className="w-full mt-4">Review pending scans</Button>
          </Card>
        </aside>

        <section className="space-y-6">
          <Card className="bg-white/90 text-black dark:bg-slate-950/80 dark:text-slate-100">
            <div className="flex items-center justify-between gap-4 pb-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Profile</p>
                <h2 className="mt-2 text-2xl font-semibold">User profile snapshot</h2>
              </div>
              <Badge>Verifying</Badge>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200/80 bg-slate-50/90 p-5 dark:border-slate-800/70 dark:bg-slate-900/80">
                <p className="text-sm text-slate-500 dark:text-slate-400">Full name</p>
                <p className="mt-3 text-lg font-semibold text-black dark:text-slate-100">Jane Doe</p>
              </div>
              <div className="rounded-3xl border border-slate-200/80 bg-slate-50/90 p-5 dark:border-slate-800/70 dark:bg-slate-900/80">
                <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                <p className="mt-3 text-lg font-semibold text-black dark:text-slate-100">jane.doe@example.com</p>
              </div>
            </div>
          </Card>

          <Card className="bg-white/90 text-black dark:bg-slate-950/80 dark:text-slate-100">
            <div className="flex items-center justify-between gap-4 pb-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Performance</p>
                <h2 className="mt-2 text-2xl font-semibold">Verification success rate</h2>
              </div>
              <Badge variant="success">Stable</Badge>
            </div>
            <div className="rounded-[2rem] bg-slate-50/90 p-5 dark:bg-slate-900/80">
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <span>Monthly score</span>
                <span>82%</span>
              </div>
              <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-full rounded-full bg-emerald-500" style={{ width: '82%' }} />
              </div>
            </div>
          </Card>

          <Card className="space-y-5 bg-white/90 text-black dark:bg-slate-950/80 dark:text-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">User status</p>
                <h2 className="mt-2 text-2xl font-semibold">Verification distribution</h2>
              </div>
              <Badge>Live</Badge>
            </div>
            <div className="grid gap-4 rounded-[2rem] bg-slate-50/90 p-5 dark:bg-slate-900/80">
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <span>Verified</span>
                <span>68%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-full w-2/3 rounded-full bg-emerald-500" />
              </div>
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <span>Pending</span>
                <span>22%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-full w-1/4 rounded-full bg-amber-400" />
              </div>
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <span>Failed</span>
                <span>10%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div className="h-full w-1/5 rounded-full bg-rose-500" />
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center justify-between pb-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Verification history</p>
                <h2 className="mt-2 text-2xl font-semibold">Recent scans</h2>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-50/90 dark:border-slate-800/70 dark:bg-slate-900/80">
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm text-slate-700 dark:divide-slate-800 dark:text-slate-300">
                <thead className="bg-slate-100 text-slate-500 dark:bg-slate-900/80 dark:text-slate-400">
                  <tr>
                    <th className="px-4 py-4">Date</th>
                    <th className="px-4 py-4">User</th>
                    <th className="px-4 py-4">Type</th>
                    <th className="px-4 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {history.map((entry) => (
                    <tr key={`${entry.date}-${entry.user}`}>
                      <td className="px-4 py-4">{entry.date}</td>
                      <td className="px-4 py-4">{entry.user}</td>
                      <td className="px-4 py-4">{entry.type}</td>
                      <td className="px-4 py-4">{entry.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="rounded-[2rem] bg-slate-950/80 p-6 dark:bg-slate-950/80 dark:text-slate-100 text-slate-300">
            <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Experience</p>
            <p className="mt-4 text-lg text-white">The module is built for fast decision making, with clear verification pipelines and responsive navigation across desktop and mobile.</p>
          </Card>
        </section>
      </section>
    </main>
  );
}
