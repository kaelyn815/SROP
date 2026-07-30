/**
 * ============================================================
 * Sacred Roots Operations Platform (SROP)
 * File: HealthCheck.gs
 * Version: 0.5.0
 * Sprint: Genesis
 * Milestone: 0.5
 * Status: IN DEVELOPMENT
 * ============================================================
 *
 * Description:
 * Performs application health checks to verify that
 * core SROP services are available.
 * ============================================================
 */

var SROP = SROP || {};

(function (app) {

  "use strict";

  app.HealthCheck = {};

  /**
   * Runs all health checks.
   *
   * @returns {Object}
   */
  app.HealthCheck.run = function () {

    var report = {
      healthy: true,
      checks: []
    };

    function check(name, passed) {

      report.checks.push({
        name: name,
        passed: passed
      });

      if (!passed) {
        report.healthy = false;
      }

    }

    check("SROP Namespace", typeof SROP === "object");
    check("Config Service", !!app.Config);
    check("Logging Service", !!app.Logging);
    check("Utilities Service", !!app.Utilities);

    return report;

  };

})(SROP);


/**
 * ------------------------------------------------------------
 * Test Function
 * ------------------------------------------------------------
 */

function testHealthCheck() {

  Logger.clear();

  var report = SROP.HealthCheck.run();

  report.checks.forEach(function (check) {

    Logger.log(
      (check.passed ? "PASS" : "FAIL") +
      " - " +
      check.name
    );

  });

  Logger.log("");
  Logger.log("Overall Health: " + (report.healthy ? "HEALTHY" : "UNHEALTHY"));

}

