module.exports = {
    testEnvironment: "allure-jest/node",
    reporters: [
      "default",
      ["jest-html-reporter", {
        pageTitle: "Test Report",
        outputPath: "./reports/test-report.html"
      }]
    ]
  };

