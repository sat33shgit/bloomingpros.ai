export type CoverageMetric = {
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

export const testCoverageReport: TestCoverageReport = {
  "generatedAt": "2026-03-26T19:08:01.256Z",
  "artifactPath": "client/coverage/coverage-final.json",
  "refreshCommand": "npm run test:coverage",
  "totals": {
    "fileCount": 80,
    "testedFileCount": 58,
    "fullyCoveredFileCount": 44,
    "untestedFileCount": 22
  },
  "overall": {
    "statements": {
      "covered": 9326,
      "total": 10224,
      "pct": 91.22
    },
    "branches": {
      "covered": 568,
      "total": 648,
      "pct": 87.65
    },
    "functions": {
      "covered": 292,
      "total": 335,
      "pct": 87.16
    },
    "lines": {
      "covered": 9326,
      "total": 10224,
      "pct": 91.22
    }
  },
  "groups": [
    {
      "group": "generated",
      "fileCount": 1,
      "statements": {
        "covered": 2229,
        "total": 2229,
        "pct": 100
      },
      "branches": {
        "covered": 0,
        "total": 0,
        "pct": 100
      },
      "functions": {
        "covered": 0,
        "total": 0,
        "pct": 100
      },
      "lines": {
        "covered": 2229,
        "total": 2229,
        "pct": 100
      }
    },
    {
      "group": "lib",
      "fileCount": 1,
      "statements": {
        "covered": 4,
        "total": 4,
        "pct": 100
      },
      "branches": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "functions": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "lines": {
        "covered": 4,
        "total": 4,
        "pct": 100
      }
    },
    {
      "group": "pages",
      "fileCount": 14,
      "statements": {
        "covered": 2720,
        "total": 2759,
        "pct": 98.59
      },
      "branches": {
        "covered": 105,
        "total": 109,
        "pct": 96.33
      },
      "functions": {
        "covered": 33,
        "total": 34,
        "pct": 97.06
      },
      "lines": {
        "covered": 2720,
        "total": 2759,
        "pct": 98.59
      }
    },
    {
      "group": "contexts",
      "fileCount": 1,
      "statements": {
        "covered": 40,
        "total": 42,
        "pct": 95.24
      },
      "branches": {
        "covered": 12,
        "total": 15,
        "pct": 80
      },
      "functions": {
        "covered": 3,
        "total": 3,
        "pct": 100
      },
      "lines": {
        "covered": 40,
        "total": 42,
        "pct": 95.24
      }
    },
    {
      "group": "hooks",
      "fileCount": 3,
      "statements": {
        "covered": 74,
        "total": 80,
        "pct": 92.5
      },
      "branches": {
        "covered": 16,
        "total": 18,
        "pct": 88.89
      },
      "functions": {
        "covered": 5,
        "total": 5,
        "pct": 100
      },
      "lines": {
        "covered": 74,
        "total": 80,
        "pct": 92.5
      }
    },
    {
      "group": "components",
      "fileCount": 4,
      "statements": {
        "covered": 312,
        "total": 363,
        "pct": 85.95
      },
      "branches": {
        "covered": 46,
        "total": 51,
        "pct": 90.2
      },
      "functions": {
        "covered": 11,
        "total": 12,
        "pct": 91.67
      },
      "lines": {
        "covered": 312,
        "total": 363,
        "pct": 85.95
      }
    },
    {
      "group": "components/ui",
      "fileCount": 53,
      "statements": {
        "covered": 3895,
        "total": 4678,
        "pct": 83.26
      },
      "branches": {
        "covered": 386,
        "total": 450,
        "pct": 85.78
      },
      "functions": {
        "covered": 237,
        "total": 276,
        "pct": 85.87
      },
      "lines": {
        "covered": 3895,
        "total": 4678,
        "pct": 83.26
      }
    },
    {
      "group": "app-shell",
      "fileCount": 3,
      "statements": {
        "covered": 52,
        "total": 69,
        "pct": 75.36
      },
      "branches": {
        "covered": 2,
        "total": 4,
        "pct": 50
      },
      "functions": {
        "covered": 2,
        "total": 4,
        "pct": 50
      },
      "lines": {
        "covered": 52,
        "total": 69,
        "pct": 75.36
      }
    }
  ],
  "files": [
    {
      "path": "App.tsx",
      "group": "app-shell",
      "statements": {
        "covered": 52,
        "total": 52,
        "pct": 100
      },
      "branches": {
        "covered": 2,
        "total": 2,
        "pct": 100
      },
      "functions": {
        "covered": 2,
        "total": 2,
        "pct": 100
      },
      "lines": {
        "covered": 52,
        "total": 52,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ErrorBoundary.tsx",
      "group": "components",
      "statements": {
        "covered": 0,
        "total": 42,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 42,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "components/ManusDialog.tsx",
      "group": "components",
      "statements": {
        "covered": 54,
        "total": 54,
        "pct": 100
      },
      "branches": {
        "covered": 13,
        "total": 13,
        "pct": 100
      },
      "functions": {
        "covered": 2,
        "total": 2,
        "pct": 100
      },
      "lines": {
        "covered": 54,
        "total": 54,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/Map.tsx",
      "group": "components",
      "statements": {
        "covered": 52,
        "total": 55,
        "pct": 94.55
      },
      "branches": {
        "covered": 9,
        "total": 10,
        "pct": 90
      },
      "functions": {
        "covered": 4,
        "total": 4,
        "pct": 100
      },
      "lines": {
        "covered": 52,
        "total": 55,
        "pct": 94.55
      },
      "band": "strong"
    },
    {
      "path": "components/Navigation.tsx",
      "group": "components",
      "statements": {
        "covered": 206,
        "total": 212,
        "pct": 97.17
      },
      "branches": {
        "covered": 24,
        "total": 27,
        "pct": 88.89
      },
      "functions": {
        "covered": 5,
        "total": 5,
        "pct": 100
      },
      "lines": {
        "covered": 206,
        "total": 212,
        "pct": 97.17
      },
      "band": "strong"
    },
    {
      "path": "components/ui/accordion.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 0,
        "total": 49,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 49,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "components/ui/alert-dialog.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 116,
        "total": 116,
        "pct": 100
      },
      "branches": {
        "covered": 11,
        "total": 11,
        "pct": 100
      },
      "functions": {
        "covered": 11,
        "total": 11,
        "pct": 100
      },
      "lines": {
        "covered": 116,
        "total": 116,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/alert.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 54,
        "total": 54,
        "pct": 100
      },
      "branches": {
        "covered": 3,
        "total": 3,
        "pct": 100
      },
      "functions": {
        "covered": 3,
        "total": 3,
        "pct": 100
      },
      "lines": {
        "covered": 54,
        "total": 54,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/aspect-ratio.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 0,
        "total": 6,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 6,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "components/ui/avatar.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 0,
        "total": 40,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 40,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "components/ui/badge.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 0,
        "total": 36,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 36,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "components/ui/breadcrumb.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 78,
        "total": 78,
        "pct": 100
      },
      "branches": {
        "covered": 10,
        "total": 10,
        "pct": 100
      },
      "functions": {
        "covered": 7,
        "total": 7,
        "pct": 100
      },
      "lines": {
        "covered": 78,
        "total": 78,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/button-group.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 63,
        "total": 63,
        "pct": 100
      },
      "branches": {
        "covered": 5,
        "total": 5,
        "pct": 100
      },
      "functions": {
        "covered": 3,
        "total": 3,
        "pct": 100
      },
      "lines": {
        "covered": 63,
        "total": 63,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/button.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 48,
        "total": 48,
        "pct": 100
      },
      "branches": {
        "covered": 3,
        "total": 3,
        "pct": 100
      },
      "functions": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "lines": {
        "covered": 48,
        "total": 48,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/calendar.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 184,
        "total": 184,
        "pct": 100
      },
      "branches": {
        "covered": 15,
        "total": 15,
        "pct": 100
      },
      "functions": {
        "covered": 6,
        "total": 6,
        "pct": 100
      },
      "lines": {
        "covered": 184,
        "total": 184,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/card.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 66,
        "total": 66,
        "pct": 100
      },
      "branches": {
        "covered": 7,
        "total": 7,
        "pct": 100
      },
      "functions": {
        "covered": 7,
        "total": 7,
        "pct": 100
      },
      "lines": {
        "covered": 66,
        "total": 66,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/carousel.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 171,
        "total": 171,
        "pct": 100
      },
      "branches": {
        "covered": 35,
        "total": 36,
        "pct": 97.22
      },
      "functions": {
        "covered": 6,
        "total": 6,
        "pct": 100
      },
      "lines": {
        "covered": 171,
        "total": 171,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/chart.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 215,
        "total": 259,
        "pct": 83.01
      },
      "branches": {
        "covered": 32,
        "total": 62,
        "pct": 51.61
      },
      "functions": {
        "covered": 6,
        "total": 6,
        "pct": 100
      },
      "lines": {
        "covered": 215,
        "total": 259,
        "pct": 83.01
      },
      "band": "strong"
    },
    {
      "path": "components/ui/checkbox.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 0,
        "total": 20,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 20,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "components/ui/collapsible.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 0,
        "total": 24,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 24,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "components/ui/command.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 135,
        "total": 135,
        "pct": 100
      },
      "branches": {
        "covered": 9,
        "total": 9,
        "pct": 100
      },
      "functions": {
        "covered": 9,
        "total": 9,
        "pct": 100
      },
      "lines": {
        "covered": 135,
        "total": 135,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/context-menu.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 193,
        "total": 193,
        "pct": 100
      },
      "branches": {
        "covered": 15,
        "total": 15,
        "pct": 100
      },
      "functions": {
        "covered": 15,
        "total": 15,
        "pct": 100
      },
      "lines": {
        "covered": 193,
        "total": 193,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/dialog.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 11,
        "total": 153,
        "pct": 7.19
      },
      "branches": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "functions": {
        "covered": 1,
        "total": 15,
        "pct": 6.67
      },
      "lines": {
        "covered": 11,
        "total": 153,
        "pct": 7.19
      },
      "band": "weak"
    },
    {
      "path": "components/ui/drawer.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 100,
        "total": 100,
        "pct": 100
      },
      "branches": {
        "covered": 10,
        "total": 10,
        "pct": 100
      },
      "functions": {
        "covered": 10,
        "total": 10,
        "pct": 100
      },
      "lines": {
        "covered": 100,
        "total": 100,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/dropdown-menu.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 198,
        "total": 198,
        "pct": 100
      },
      "branches": {
        "covered": 15,
        "total": 15,
        "pct": 100
      },
      "functions": {
        "covered": 15,
        "total": 15,
        "pct": 100
      },
      "lines": {
        "covered": 198,
        "total": 198,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/empty.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 80,
        "total": 80,
        "pct": 100
      },
      "branches": {
        "covered": 6,
        "total": 6,
        "pct": 100
      },
      "functions": {
        "covered": 6,
        "total": 6,
        "pct": 100
      },
      "lines": {
        "covered": 80,
        "total": 80,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/field.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 191,
        "total": 191,
        "pct": 100
      },
      "branches": {
        "covered": 22,
        "total": 22,
        "pct": 100
      },
      "functions": {
        "covered": 10,
        "total": 10,
        "pct": 100
      },
      "lines": {
        "covered": 191,
        "total": 191,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/form.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 99,
        "total": 101,
        "pct": 98.02
      },
      "branches": {
        "covered": 12,
        "total": 14,
        "pct": 85.71
      },
      "functions": {
        "covered": 7,
        "total": 7,
        "pct": 100
      },
      "lines": {
        "covered": 99,
        "total": 101,
        "pct": 98.02
      },
      "band": "strong"
    },
    {
      "path": "components/ui/hover-card.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 0,
        "total": 32,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 32,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "components/ui/input-group.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 132,
        "total": 132,
        "pct": 100
      },
      "branches": {
        "covered": 9,
        "total": 9,
        "pct": 100
      },
      "functions": {
        "covered": 7,
        "total": 7,
        "pct": 100
      },
      "lines": {
        "covered": 132,
        "total": 132,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/input-otp.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 56,
        "total": 56,
        "pct": 100
      },
      "branches": {
        "covered": 6,
        "total": 6,
        "pct": 100
      },
      "functions": {
        "covered": 4,
        "total": 4,
        "pct": 100
      },
      "lines": {
        "covered": 56,
        "total": 56,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/input.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 35,
        "total": 50,
        "pct": 70
      },
      "branches": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "functions": {
        "covered": 1,
        "total": 4,
        "pct": 25
      },
      "lines": {
        "covered": 35,
        "total": 50,
        "pct": 70
      },
      "band": "moderate"
    },
    {
      "path": "components/ui/item.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 153,
        "total": 153,
        "pct": 100
      },
      "branches": {
        "covered": 12,
        "total": 12,
        "pct": 100
      },
      "functions": {
        "covered": 10,
        "total": 10,
        "pct": 100
      },
      "lines": {
        "covered": 153,
        "total": 153,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/kbd.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 0,
        "total": 22,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 22,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "components/ui/label.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 15,
        "total": 15,
        "pct": 100
      },
      "branches": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "functions": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "lines": {
        "covered": 15,
        "total": 15,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/menubar.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 216,
        "total": 216,
        "pct": 100
      },
      "branches": {
        "covered": 16,
        "total": 16,
        "pct": 100
      },
      "functions": {
        "covered": 16,
        "total": 16,
        "pct": 100
      },
      "lines": {
        "covered": 216,
        "total": 216,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/navigation-menu.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 129,
        "total": 129,
        "pct": 100
      },
      "branches": {
        "covered": 9,
        "total": 9,
        "pct": 100
      },
      "functions": {
        "covered": 8,
        "total": 8,
        "pct": 100
      },
      "lines": {
        "covered": 129,
        "total": 129,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/pagination.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 88,
        "total": 88,
        "pct": 100
      },
      "branches": {
        "covered": 11,
        "total": 11,
        "pct": 100
      },
      "functions": {
        "covered": 7,
        "total": 7,
        "pct": 100
      },
      "lines": {
        "covered": 88,
        "total": 88,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/popover.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 0,
        "total": 36,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 36,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "components/ui/progress.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 0,
        "total": 21,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 21,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "components/ui/radio-group.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 0,
        "total": 31,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 31,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "components/ui/resizable.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 0,
        "total": 40,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 40,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "components/ui/scroll-area.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 0,
        "total": 44,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 44,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "components/ui/select.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 144,
        "total": 144,
        "pct": 100
      },
      "branches": {
        "covered": 12,
        "total": 12,
        "pct": 100
      },
      "functions": {
        "covered": 10,
        "total": 10,
        "pct": 100
      },
      "lines": {
        "covered": 144,
        "total": 144,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/separator.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 19,
        "total": 19,
        "pct": 100
      },
      "branches": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "functions": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "lines": {
        "covered": 19,
        "total": 19,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/sheet.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 104,
        "total": 104,
        "pct": 100
      },
      "branches": {
        "covered": 14,
        "total": 14,
        "pct": 100
      },
      "functions": {
        "covered": 10,
        "total": 10,
        "pct": 100
      },
      "lines": {
        "covered": 104,
        "total": 104,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/sidebar.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 550,
        "total": 556,
        "pct": 98.92
      },
      "branches": {
        "covered": 60,
        "total": 73,
        "pct": 82.19
      },
      "functions": {
        "covered": 26,
        "total": 26,
        "pct": 100
      },
      "lines": {
        "covered": 550,
        "total": 556,
        "pct": 98.92
      },
      "band": "strong"
    },
    {
      "path": "components/ui/skeleton.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 9,
        "total": 9,
        "pct": 100
      },
      "branches": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "functions": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "lines": {
        "covered": 9,
        "total": 9,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/slider.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 51,
        "total": 51,
        "pct": 100
      },
      "branches": {
        "covered": 7,
        "total": 7,
        "pct": 100
      },
      "functions": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "lines": {
        "covered": 51,
        "total": 51,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/sonner.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 0,
        "total": 16,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 16,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "components/ui/spinner.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 0,
        "total": 10,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 10,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "components/ui/switch.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 0,
        "total": 21,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 21,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "components/ui/table.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 84,
        "total": 84,
        "pct": 100
      },
      "branches": {
        "covered": 8,
        "total": 8,
        "pct": 100
      },
      "functions": {
        "covered": 8,
        "total": 8,
        "pct": 100
      },
      "lines": {
        "covered": 84,
        "total": 84,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/tabs.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 0,
        "total": 51,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 51,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "components/ui/textarea.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 31,
        "total": 46,
        "pct": 67.39
      },
      "branches": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "functions": {
        "covered": 1,
        "total": 4,
        "pct": 25
      },
      "lines": {
        "covered": 31,
        "total": 46,
        "pct": 67.39
      },
      "band": "moderate"
    },
    {
      "path": "components/ui/toggle-group.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 55,
        "total": 55,
        "pct": 100
      },
      "branches": {
        "covered": 6,
        "total": 6,
        "pct": 100
      },
      "functions": {
        "covered": 2,
        "total": 2,
        "pct": 100
      },
      "lines": {
        "covered": 55,
        "total": 55,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "components/ui/toggle.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 22,
        "total": 36,
        "pct": 61.11
      },
      "branches": {
        "covered": 0,
        "total": 0,
        "pct": 100
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 22,
        "total": 36,
        "pct": 61.11
      },
      "band": "moderate"
    },
    {
      "path": "components/ui/tooltip.tsx",
      "group": "components/ui",
      "statements": {
        "covered": 0,
        "total": 46,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 46,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "const.ts",
      "group": "app-shell",
      "statements": {
        "covered": 0,
        "total": 13,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 13,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "contexts/ThemeContext.tsx",
      "group": "contexts",
      "statements": {
        "covered": 40,
        "total": 42,
        "pct": 95.24
      },
      "branches": {
        "covered": 12,
        "total": 15,
        "pct": 80
      },
      "functions": {
        "covered": 3,
        "total": 3,
        "pct": 100
      },
      "lines": {
        "covered": 40,
        "total": 42,
        "pct": 95.24
      },
      "band": "strong"
    },
    {
      "path": "generated/testCoverageReport.ts",
      "group": "generated",
      "statements": {
        "covered": 2229,
        "total": 2229,
        "pct": 100
      },
      "branches": {
        "covered": 0,
        "total": 0,
        "pct": 100
      },
      "functions": {
        "covered": 0,
        "total": 0,
        "pct": 100
      },
      "lines": {
        "covered": 2229,
        "total": 2229,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "hooks/useComposition.ts",
      "group": "hooks",
      "statements": {
        "covered": 45,
        "total": 51,
        "pct": 88.24
      },
      "branches": {
        "covered": 9,
        "total": 11,
        "pct": 81.82
      },
      "functions": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "lines": {
        "covered": 45,
        "total": 51,
        "pct": 88.24
      },
      "band": "strong"
    },
    {
      "path": "hooks/useMobile.tsx",
      "group": "hooks",
      "statements": {
        "covered": 17,
        "total": 17,
        "pct": 100
      },
      "branches": {
        "covered": 4,
        "total": 4,
        "pct": 100
      },
      "functions": {
        "covered": 2,
        "total": 2,
        "pct": 100
      },
      "lines": {
        "covered": 17,
        "total": 17,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "hooks/usePersistFn.ts",
      "group": "hooks",
      "statements": {
        "covered": 12,
        "total": 12,
        "pct": 100
      },
      "branches": {
        "covered": 3,
        "total": 3,
        "pct": 100
      },
      "functions": {
        "covered": 2,
        "total": 2,
        "pct": 100
      },
      "lines": {
        "covered": 12,
        "total": 12,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "lib/utils.ts",
      "group": "lib",
      "statements": {
        "covered": 4,
        "total": 4,
        "pct": 100
      },
      "branches": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "functions": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "lines": {
        "covered": 4,
        "total": 4,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "main.tsx",
      "group": "app-shell",
      "statements": {
        "covered": 0,
        "total": 4,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 4,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "pages/About.tsx",
      "group": "pages",
      "statements": {
        "covered": 203,
        "total": 203,
        "pct": 100
      },
      "branches": {
        "covered": 3,
        "total": 3,
        "pct": 100
      },
      "functions": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "lines": {
        "covered": 203,
        "total": 203,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "pages/Blog.tsx",
      "group": "pages",
      "statements": {
        "covered": 226,
        "total": 226,
        "pct": 100
      },
      "branches": {
        "covered": 16,
        "total": 16,
        "pct": 100
      },
      "functions": {
        "covered": 4,
        "total": 4,
        "pct": 100
      },
      "lines": {
        "covered": 226,
        "total": 226,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "pages/Colleges.tsx",
      "group": "pages",
      "statements": {
        "covered": 166,
        "total": 166,
        "pct": 100
      },
      "branches": {
        "covered": 2,
        "total": 2,
        "pct": 100
      },
      "functions": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "lines": {
        "covered": 166,
        "total": 166,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "pages/Companies.tsx",
      "group": "pages",
      "statements": {
        "covered": 227,
        "total": 227,
        "pct": 100
      },
      "branches": {
        "covered": 2,
        "total": 2,
        "pct": 100
      },
      "functions": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "lines": {
        "covered": 227,
        "total": 227,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "pages/Contact.tsx",
      "group": "pages",
      "statements": {
        "covered": 292,
        "total": 294,
        "pct": 99.32
      },
      "branches": {
        "covered": 13,
        "total": 15,
        "pct": 86.67
      },
      "functions": {
        "covered": 4,
        "total": 4,
        "pct": 100
      },
      "lines": {
        "covered": 292,
        "total": 294,
        "pct": 99.32
      },
      "band": "strong"
    },
    {
      "path": "pages/FAQ.tsx",
      "group": "pages",
      "statements": {
        "covered": 175,
        "total": 175,
        "pct": 100
      },
      "branches": {
        "covered": 9,
        "total": 9,
        "pct": 100
      },
      "functions": {
        "covered": 3,
        "total": 3,
        "pct": 100
      },
      "lines": {
        "covered": 175,
        "total": 175,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "pages/Home.tsx",
      "group": "pages",
      "statements": {
        "covered": 181,
        "total": 181,
        "pct": 100
      },
      "branches": {
        "covered": 3,
        "total": 3,
        "pct": 100
      },
      "functions": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "lines": {
        "covered": 181,
        "total": 181,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "pages/Login.tsx",
      "group": "pages",
      "statements": {
        "covered": 176,
        "total": 176,
        "pct": 100
      },
      "branches": {
        "covered": 22,
        "total": 22,
        "pct": 100
      },
      "functions": {
        "covered": 9,
        "total": 9,
        "pct": 100
      },
      "lines": {
        "covered": 176,
        "total": 176,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "pages/NotFound.tsx",
      "group": "pages",
      "statements": {
        "covered": 0,
        "total": 35,
        "pct": 0
      },
      "branches": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "functions": {
        "covered": 0,
        "total": 1,
        "pct": 0
      },
      "lines": {
        "covered": 0,
        "total": 35,
        "pct": 0
      },
      "band": "untested"
    },
    {
      "path": "pages/Privacy.tsx",
      "group": "pages",
      "statements": {
        "covered": 189,
        "total": 189,
        "pct": 100
      },
      "branches": {
        "covered": 4,
        "total": 4,
        "pct": 100
      },
      "functions": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "lines": {
        "covered": 189,
        "total": 189,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "pages/Signup.tsx",
      "group": "pages",
      "statements": {
        "covered": 142,
        "total": 142,
        "pct": 100
      },
      "branches": {
        "covered": 4,
        "total": 4,
        "pct": 100
      },
      "functions": {
        "covered": 3,
        "total": 3,
        "pct": 100
      },
      "lines": {
        "covered": 142,
        "total": 142,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "pages/Students.tsx",
      "group": "pages",
      "statements": {
        "covered": 195,
        "total": 195,
        "pct": 100
      },
      "branches": {
        "covered": 4,
        "total": 4,
        "pct": 100
      },
      "functions": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "lines": {
        "covered": 195,
        "total": 195,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "pages/Terms.tsx",
      "group": "pages",
      "statements": {
        "covered": 210,
        "total": 210,
        "pct": 100
      },
      "branches": {
        "covered": 3,
        "total": 3,
        "pct": 100
      },
      "functions": {
        "covered": 1,
        "total": 1,
        "pct": 100
      },
      "lines": {
        "covered": 210,
        "total": 210,
        "pct": 100
      },
      "band": "perfect"
    },
    {
      "path": "pages/TestCoverageReport.tsx",
      "group": "pages",
      "statements": {
        "covered": 338,
        "total": 340,
        "pct": 99.41
      },
      "branches": {
        "covered": 20,
        "total": 21,
        "pct": 95.24
      },
      "functions": {
        "covered": 3,
        "total": 3,
        "pct": 100
      },
      "lines": {
        "covered": 338,
        "total": 340,
        "pct": 99.41
      },
      "band": "strong"
    }
  ]
};
