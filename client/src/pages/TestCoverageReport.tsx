import { Footer, Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { testCoverageReport } from "@/generated/testCoverageReport";
import { ArrowRight, BarChart3, CheckCircle2, CircleAlert, Files, RefreshCcw } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "wouter";

const groupLabels: Record<string, string> = {
  "app-shell": "App Shell",
  components: "Components",
  "components/ui": "UI Components",
  contexts: "Contexts",
  hooks: "Hooks",
  lib: "Utilities",
  pages: "Pages",
};

const bandStyles: Record<string, string> = {
  perfect: "bg-emerald-100 text-emerald-800 border-emerald-200",
  strong: "bg-teal-100 text-teal-800 border-teal-200",
  moderate: "bg-amber-100 text-amber-800 border-amber-200",
  weak: "bg-orange-100 text-orange-800 border-orange-200",
  untested: "bg-rose-100 text-rose-800 border-rose-200",
};

function formatPercent(value: number) {
  return `${value.toFixed(value % 1 === 0 ? 0 : 2)}%`;
}

function formatGeneratedAt(value: string) {
  return new Date(value).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default function TestCoverageReport() {
  const [location] = useLocation();

  useEffect(() => {
    if (location === "/test-coverage") {
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch {
        window.scrollTo(0, 0);
      }
    }
  }, [location]);

  const weakestFiles = [...testCoverageReport.files]
    .sort(
      (left, right) =>
        left.statements.pct - right.statements.pct ||
        right.statements.total - left.statements.total ||
        left.path.localeCompare(right.path)
    )
    .slice(0, 8);

  const strongestFiles = [...testCoverageReport.files]
    .sort(
      (left, right) =>
        right.statements.pct - left.statements.pct ||
        right.branches.pct - left.branches.pct ||
        left.path.localeCompare(right.path)
    )
    .slice(0, 8);

  const primaryMetrics = [
    { label: "Statements", value: testCoverageReport.overall.statements.pct },
    { label: "Branches", value: testCoverageReport.overall.branches.pct },
    { label: "Functions", value: testCoverageReport.overall.functions.pct },
    { label: "Lines", value: testCoverageReport.overall.lines.pct },
  ];

  const summaryCards = [
    {
      icon: CheckCircle2,
      label: "Tested Files",
      value: testCoverageReport.totals.testedFileCount,
      description: `Out of ${testCoverageReport.totals.fileCount} tracked source files`,
    },
    {
      icon: Files,
      label: "Fully Covered",
      value: testCoverageReport.totals.fullyCoveredFileCount,
      description: "Files with 100% across every primary metric",
    },
    {
      icon: CircleAlert,
      label: "Untested Files",
      value: testCoverageReport.totals.untestedFileCount,
      description: "Files still sitting at 0% statement coverage",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 overflow-x-hidden">
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div className="max-w-3xl">
                <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6] mb-6"></div>
                <h1 className="text-4xl font-bold text-foreground sm:text-5xl md:text-6xl">
                  Test Coverage Report
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  A synced snapshot of the current Vitest coverage artifact, surfaced
                  inside the app so gaps and progress are visible without opening the
                  raw coverage JSON.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button asChild className="bg-gradient-to-r from-[#1F2937] to-[#14B8A6] hover:shadow-lg transition-shadow">
                    <Link href="/about">
                      Back to Site
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3 text-foreground">
                  <BarChart3 className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-semibold">Sync Metadata</h2>
                </div>
                <dl className="mt-6 space-y-4 text-sm">
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-muted-foreground">Generated</dt>
                    <dd className="text-right font-medium text-foreground">
                      {formatGeneratedAt(testCoverageReport.generatedAt)}
                    </dd>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <dt className="text-muted-foreground">Artifact</dt>
                    <dd className="text-right font-mono text-xs text-foreground">
                      {testCoverageReport.artifactPath}
                    </dd>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex items-center gap-2 text-foreground">
                      <RefreshCcw className="h-4 w-4 text-accent" />
                      <span className="font-medium">Refresh Command</span>
                    </div>
                    <pre className="mt-3 overflow-x-auto rounded-2xl bg-slate-950 px-4 py-3 text-sm text-slate-100">
                      <code>{testCoverageReport.refreshCommand}</code>
                    </pre>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-white py-16">
          <div className="container">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {primaryMetrics.map((metric) => (
                <article key={metric.label} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
                    {metric.label}
                  </p>
                  <p className="mt-4 text-4xl font-bold text-foreground">
                    {formatPercent(metric.value)}
                  </p>
                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#1F2937] to-[#14B8A6]"
                      style={{ width: `${Math.min(metric.value, 100)}%` }}
                    />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {summaryCards.map(({ icon: Icon, label, value, description }) => (
                <article key={label} className="rounded-3xl border border-border bg-slate-50 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1F2937]/10 to-[#14B8A6]/20">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{label}</p>
                      <p className="text-3xl font-bold text-foreground">{value}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="container">
            <div className="max-w-3xl">
              <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6] mb-6"></div>
              <h2 className="text-4xl font-bold text-foreground">Coverage By Area</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                The grouped view makes it obvious where the current test investment is
                paying off and which areas still need direct attention.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {testCoverageReport.groups.map((group) => (
                <article key={group.group} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {groupLabels[group.group] ?? group.group}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {group.fileCount} tracked files
                      </p>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-foreground">
                      {formatPercent(group.statements.pct)}
                    </span>
                  </div>

                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#1F2937] to-[#14B8A6]"
                      style={{ width: `${Math.min(group.statements.pct, 100)}%` }}
                    />
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-2xl bg-slate-50 p-3">
                      <p className="text-muted-foreground">Branches</p>
                      <p className="mt-1 font-semibold text-foreground">
                        {formatPercent(group.branches.pct)}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-slate-50 p-3">
                      <p className="text-muted-foreground">Functions</p>
                      <p className="mt-1 font-semibold text-foreground">
                        {formatPercent(group.functions.pct)}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-y border-border">
          <div className="container">
            <div className="grid gap-8 xl:grid-cols-2">
              <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground">Priority Gaps</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Lowest statement coverage first, weighted toward larger files.
                </p>
                <div className="mt-6 space-y-4">
                  {weakestFiles.map((file) => (
                    <div key={file.path} className="rounded-2xl border border-border bg-slate-50 p-4">
                      <div className="flex items-start justify-between gap-4">
                        <p className="font-mono text-sm text-foreground">{file.path}</p>
                        <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${bandStyles[file.band]}`}>
                          {file.band}
                        </span>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Statements</span>
                        <span className="font-semibold text-foreground">
                          {formatPercent(file.statements.pct)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-foreground">Strongest Coverage</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Files that are already in solid shape and can be used as testing references.
                </p>
                <div className="mt-6 space-y-4">
                  {strongestFiles.map((file) => (
                    <div key={file.path} className="rounded-2xl border border-border bg-slate-50 p-4">
                      <div className="flex items-start justify-between gap-4">
                        <p className="font-mono text-sm text-foreground">{file.path}</p>
                        <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${bandStyles[file.band]}`}>
                          {file.band}
                        </span>
                      </div>
                      <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="text-muted-foreground">Statements</span>
                          <p className="font-semibold text-foreground">
                            {formatPercent(file.statements.pct)}
                          </p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Branches</span>
                          <p className="font-semibold text-foreground">
                            {formatPercent(file.branches.pct)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="max-w-3xl">
              <div className="h-1 w-16 bg-gradient-to-r from-[#1F2937] to-[#14B8A6] mb-6"></div>
              <h2 className="text-4xl font-bold text-foreground">File Matrix</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Full file-by-file coverage detail from the last synced artifact.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-50 text-muted-foreground">
                    <tr>
                      <th className="px-6 py-4 font-medium">File</th>
                      <th className="px-4 py-4 font-medium">Statements</th>
                      <th className="px-4 py-4 font-medium">Branches</th>
                      <th className="px-4 py-4 font-medium">Functions</th>
                      <th className="px-4 py-4 font-medium">Lines</th>
                      <th className="px-6 py-4 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {testCoverageReport.files.map((file) => (
                      <tr key={file.path} className="border-t border-border align-top">
                        <td className="px-6 py-4">
                          <div className="font-mono text-xs text-foreground">{file.path}</div>
                          <div className="mt-1 text-xs text-muted-foreground">
                            {groupLabels[file.group] ?? file.group}
                          </div>
                        </td>
                        <td className="px-4 py-4 font-semibold text-foreground">
                          {formatPercent(file.statements.pct)}
                        </td>
                        <td className="px-4 py-4 font-semibold text-foreground">
                          {formatPercent(file.branches.pct)}
                        </td>
                        <td className="px-4 py-4 font-semibold text-foreground">
                          {formatPercent(file.functions.pct)}
                        </td>
                        <td className="px-4 py-4 font-semibold text-foreground">
                          {formatPercent(file.lines.pct)}
                        </td>
                        <td className="px-6 py-4">
                          <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${bandStyles[file.band]}`}>
                            {file.band}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
