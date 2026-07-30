/**
 * ============================================================
 * Sacred Roots Operations Platform (SROP)
 * File: Main.gs
 * Version: 0.6.0
 * Sprint: Genesis
 * Milestone: 0.6
 * Status: IN DEVELOPMENT
 * ============================================================
 *
 * Description:
 * Public entry points for the SROP application.
 * This file coordinates core services but does not contain
 * business logic.
 * ============================================================
 */

var SROP = SROP || {};

/**
 * Initializes the SROP application.
 */
function initializeSROP() {

  SROP.initialize();

  SROP.Logging.info("SROP initialized.");

}


/**
 * Runs the application health check.
 *
 * @returns {Object}
 */
function runHealthCheck() {

  var report = SROP.HealthCheck.run();

  if (!report || !report.checks) {
    throw new Error("HealthCheck returned an invalid report.");
  }

  report.checks.forEach(function (check) {

    SROP.Logging.info(
      (check.passed ? "PASS" : "FAIL") +
      " - " +
      check.name
    );

  });

  SROP.Logging.info(
    "Overall Health: " +
    (report.healthy ? "HEALTHY" : "UNHEALTHY")
  );

  return report;

}


/**
 * Logs the current SROP version.
 */
function showVersion() {

  SROP.Logging.info(
    "SROP Version: " + SROP.version()
  );

}


/**
 * Logs information about SROP.
 */
function aboutSROP() {

  SROP.Logging.info(
    SROP.info()
  );

}


/**
 * ------------------------------------------------------------
 * Test Function
 * ------------------------------------------------------------
 *
 * Executes the public entry points for Genesis.
 */
function testMain() {

  Logger.clear();

  initializeSROP();

  runHealthCheck();

  showVersion();

  aboutSROP();

}
