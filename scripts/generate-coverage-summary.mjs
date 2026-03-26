import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const coverageFile = path.join(projectRoot, "client", "coverage", "coverage-final.json");
const sourceRoot = path.join(projectRoot, "client", "src");
const outputDir = path.join(sourceRoot, "generated");
const outputFile = path.join(outputDir, "testCoverageReport.ts");

function round(value) {
  return Number(value.toFixed(2));
}

function createMetric(covered, total) {
  return {
    covered,
    total,
    pct: total === 0 ? 100 : round((covered / total) * 100),
  };
}

function normalizePath(filePath) {
  return filePath.replaceAll("\\", "/");
}

function relativeSourcePath(filePath) {
  return normalizePath(path.relative(sourceRoot, filePath));
}

function getGroup(relativePath) {
  const segments = relativePath.split("/");

  if (segments.length === 1) {
    return "app-shell";
  }

  if (segments[0] === "components" && segments[1] === "ui") {
    return "components/ui";
  }

  return segments[0];
}

function getCoverageBand(statementsPct) {
  if (statementsPct === 100) return "perfect";
  if (statementsPct >= 80) return "strong";
  if (statementsPct >= 50) return "moderate";
  if (statementsPct > 0) return "weak";
  return "untested";
}

function summarizeFile(entry) {
  const statementCounts = Object.values(entry.s ?? {});
  const functionCounts = Object.values(entry.f ?? {});
  const branchCounts = Object.values(entry.b ?? {}).flatMap((branchHits) => branchHits);

  const totalLines = new Set();
  const coveredLines = new Set();

  for (const [statementId, location] of Object.entries(entry.statementMap ?? {})) {
    const lineNumber = location.start.line;
    totalLines.add(lineNumber);
    if ((entry.s?.[statementId] ?? 0) > 0) {
      coveredLines.add(lineNumber);
    }
  }

  const relativePath = relativeSourcePath(entry.path);
  const statements = createMetric(
    statementCounts.filter((count) => count > 0).length,
    statementCounts.length
  );
  const branches = createMetric(
    branchCounts.filter((count) => count > 0).length,
    branchCounts.length
  );
  const functions = createMetric(
    functionCounts.filter((count) => count > 0).length,
    functionCounts.length
  );
  const lines = createMetric(coveredLines.size, totalLines.size);

  return {
    path: relativePath,
    group: getGroup(relativePath),
    statements,
    branches,
    functions,
    lines,
    band: getCoverageBand(statements.pct),
  };
}

function aggregateMetrics(files, metricKey) {
  const covered = files.reduce((total, file) => total + file[metricKey].covered, 0);
  const total = files.reduce((sum, file) => sum + file[metricKey].total, 0);

  return createMetric(covered, total);
}

async function main() {
  let rawCoverage;

  try {
    rawCoverage = JSON.parse(await fs.readFile(coverageFile, "utf8"));
  } catch (error) {
    throw new Error(
      `Unable to read coverage artifact at ${coverageFile}. Run "npm run test:coverage" after generating coverage.`
    );
  }

  const files = Object.values(rawCoverage)
    .filter((entry) => typeof entry?.path === "string")
    .map(summarizeFile)
    .sort((left, right) => left.path.localeCompare(right.path));

  const groupMap = new Map();
  for (const file of files) {
    const existing =
      groupMap.get(file.group) ??
      {
        group: file.group,
        fileCount: 0,
        statements: createMetric(0, 0),
        branches: createMetric(0, 0),
        functions: createMetric(0, 0),
        lines: createMetric(0, 0),
      };

    existing.fileCount += 1;
    existing.statements = createMetric(
      existing.statements.covered + file.statements.covered,
      existing.statements.total + file.statements.total
    );
    existing.branches = createMetric(
      existing.branches.covered + file.branches.covered,
      existing.branches.total + file.branches.total
    );
    existing.functions = createMetric(
      existing.functions.covered + file.functions.covered,
      existing.functions.total + file.functions.total
    );
    existing.lines = createMetric(
      existing.lines.covered + file.lines.covered,
      existing.lines.total + file.lines.total
    );

    groupMap.set(file.group, existing);
  }

  const groups = Array.from(groupMap.values()).sort(
    (left, right) => right.statements.pct - left.statements.pct || left.group.localeCompare(right.group)
  );

  const report = {
    generatedAt: new Date().toISOString(),
    artifactPath: "client/coverage/coverage-final.json",
    refreshCommand: "npm run test:coverage",
    totals: {
      fileCount: files.length,
      testedFileCount: files.filter((file) => file.statements.covered > 0).length,
      fullyCoveredFileCount: files.filter(
        (file) =>
          file.statements.pct === 100 &&
          file.branches.pct === 100 &&
          file.functions.pct === 100 &&
          file.lines.pct === 100
      ).length,
      untestedFileCount: files.filter((file) => file.statements.covered === 0).length,
    },
    overall: {
      statements: aggregateMetrics(files, "statements"),
      branches: aggregateMetrics(files, "branches"),
      functions: aggregateMetrics(files, "functions"),
      lines: aggregateMetrics(files, "lines"),
    },
    groups,
    files,
  };

  const output = `export type CoverageMetric = {
  covered: number;
  total: number;
  pct: number;
};

export type TestCoverageBand = "perfect" | "strong" | "moderate" | "weak" | "untested";

export type TestCoverageFileSummary = {
  path: string;
  group: string;
  statements: CoverageMetric;
  branches: CoverageMetric;
  functions: CoverageMetric;
  lines: CoverageMetric;
  band: TestCoverageBand;
};

export type TestCoverageGroupSummary = {
  group: string;
  fileCount: number;
  statements: CoverageMetric;
  branches: CoverageMetric;
  functions: CoverageMetric;
  lines: CoverageMetric;
};

export type TestCoverageReport = {
  generatedAt: string;
  artifactPath: string;
  refreshCommand: string;
  totals: {
    fileCount: number;
    testedFileCount: number;
    fullyCoveredFileCount: number;
    untestedFileCount: number;
  };
  overall: {
    statements: CoverageMetric;
    branches: CoverageMetric;
    functions: CoverageMetric;
    lines: CoverageMetric;
  };
  groups: TestCoverageGroupSummary[];
  files: TestCoverageFileSummary[];
};

export const testCoverageReport: TestCoverageReport = ${JSON.stringify(report, null, 2)};
`;

  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(outputFile, output, "utf8");
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
