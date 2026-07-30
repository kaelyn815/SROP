/**
 * ============================================================
 * Sacred Roots Operations Platform (SROP)
 * File: TestRunner.gs
 * Version: 1.1.1
 * Sprint: Foundation+
 * Milestone: 1.1.1
 * Status: IN DEVELOPMENT
 * ============================================================
 *
 * Description:
 * Executes all SROP platform tests and produces a summary report.
 * ============================================================
 */

var SROP = SROP || {};

(function (app) {

  "use strict";

  app.TestRunner = {};

  /**
   * Executes all registered platform tests.
   *
   * @returns {Object}
   */
  app.TestRunner.run = function () {

    var tests = [
      { name: "App", fn: testSROP },
      { name: "Config", fn: testConfig },
      { name: "Logging", fn: testLogging },
      { name: "Utilities", fn: testUtilities },
      { name: "HealthCheck", fn: testHealthCheck },
      { name: "Main", fn: testMain }
    ];

    var report = {
      total: tests.length,
      passed: 0,
      failed: 0,
      results: []
    };

    tests.forEach(function (test) {

      try {

        test.fn();

        report.results.push({
          name: test.name,
          passed: true
        });

        report.passed++;

      } catch (error) {

        report.results.push({
          name: test.name,
          passed: false,
          error: error.message
        });

        report.failed++;

      }

    });

    return report;

  };

  /**
   * Logs a summary report.
   *
   * @param {Object} report
   */
  app.TestRunner.report = function (report) {

    Logger.clear();

    Logger.log("========================================");
    Logger.log("SROP Test Runner");
    Logger.log("========================================");

    report.results.forEach(function (result) {

      Logger.log(
        (result.passed ? "PASS " : "FAIL ") +
        result.name
      );

      if (!result.passed) {
        Logger.log("  Error: " + result.error);
      }

    });

    Logger.log("----------------------------------------");
    Logger.log("Tests Run : " + report.total);
    Logger.log("Passed    : " + report.passed);
    Logger.log("Failed    : " + report.failed);
    Logger.log("----------------------------------------");
    Logger.log(
      "OVERALL RESULT: " +
      (report.failed === 0 ? "PASS" : "FAIL")
    );
    Logger.log("========================================");

  };

})(SROP);

/**
 * ------------------------------------------------------------
 * Public Entry Point
 * ------------------------------------------------------------
 */

function runAllTests() {

  var report = SROP.TestRunner.run();

  SROP.TestRunner.report(report);

  return report;

}
