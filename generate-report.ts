import reporter from 'cucumber-html-reporter';

const options: reporter.Options = {
  theme: 'bootstrap', // Choose one of "bootstrap" | "hierarchy" | "foundation" | "simple"
  jsonFile: './reports/cucumber_report.json',
  output: './reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Browser": "None (API Testing)",
    "Platform": "Localhost",
    "Parallel": "Scenarios",
    "Executed": "Local"
  }
};

reporter.generate(options);
