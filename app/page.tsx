import Link from 'next/link';
import ThemeToggle from '@/components/theme-toggle';
import Card from '@/components/ui/card';
import Button from '@/components/ui/button';

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-8 px-6 py-10 sm:px-8 lg:px-12 text-black dark:text-slate-100">
      <header className="flex flex-col gap-6 rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 shadow-soft dark:border-slate-800/70 dark:bg-slate-950/80 text-black dark:text-slate-100 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm uppercase tracking-[0.32em] text-brand-600 dark:text-brand-400">MFILTERED Studio</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">Ad fraud and identity verification made elegant.</h1>
          <p className="text-slate-700 dark:text-slate-300 sm:text-lg">
            Explore both modules in one responsive dashboard. Use the menu to switch between fraud analytics and identity verification workflows.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/ad-fraud">Open Ad Fraud Module</Button>
            <Button href="/user-identity">Open Identity Module</Button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 rounded-[2rem] bg-slate-100/90 p-6 shadow-soft dark:bg-slate-900/95">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Theme control</p>
            <p className="mt-2 text-lg font-medium">Switch display mode</p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-[1.3fr_0.9fr]">
        <Card className="order-2 md:order-1 bg-white/90 text-black dark:bg-slate-950/80 dark:text-slate-100">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Use case</p>
              <h2 className="mt-3 text-2xl font-semibold">Custom dashboards for every audience</h2>
            </div>
            <div className="rounded-3xl bg-brand-500/10 px-4 py-3 text-brand-600 dark:text-brand-300">Live preview</div>
          </div>
          <div className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">
            <p>Choose the module that fits your workflow. The ad fraud dashboard surfaces trends, suspicious sources, and recovery impact.</p>
            <p>The identity verification screen helps admins review scan progress, documents, and verification history in a single pane.</p>
          </div>
        </Card>
        <Card className="order-1 md:order-2 bg-white/90 text-black dark:bg-slate-950/80 dark:text-slate-100">
          <h2 className="text-2xl font-semibold">Quick links</h2>
          <div className="mt-6 grid gap-4">
            <Link href="/ad-fraud" className="block rounded-3xl border border-slate-200/70 bg-slate-100/90 p-5 transition hover:border-brand-500/60 dark:border-slate-800/70 dark:bg-slate-900/80">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Ad Fraud</p>
              <p className="mt-2 text-lg font-semibold">Analytics dashboard</p>
            </Link>
            <Link href="/user-identity" className="block rounded-3xl border border-slate-200/70 bg-slate-100/90 p-5 transition hover:border-brand-500/60 dark:border-slate-800/70 dark:bg-slate-900/80">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400">Identity</p>
              <p className="mt-2 text-lg font-semibold">Verification workflow</p>
            </Link>
          </div>
        </Card>
      </section>
    </main>
  );
}
