/**
 * ============================================================
 * Sacred Roots Operations Platform (SROP)
 * File: App.gs
 * Version: 0.1.0
 * Sprint: Genesis
 * Milestone: 0.1
 * ============================================================
 *
 * Description:
 * Core application bootstrap for SROP.
 * This milestone establishes the global namespace and
 * verifies that the application can initialize successfully.
 *
 * NOTE:
 * No architectural changes will be made during this milestone.
 * Any improvements discovered during testing will be evaluated
 * after Milestone 0.1 is complete.
 * ============================================================
 */

/**
 * Global SROP namespace.
 * Future modules will attach to this object.
 */
var SROP = SROP || {};

(function (app) {

  "use strict";

  const VERSION = "0.1.0";
  const NAME = "Sacred Roots Operations Platform";

  let initialized = false;

  /**
   * Initializes the application.
   */
  app.initialize = function () {

    if (initialized) {
      Logger.log("[SROP] Already initialized.");
      return;
    }

    initialized = true;

    Logger.log("========================================");
    Logger.log(NAME);
    Logger.log("Version : " + VERSION);
    Logger.log("Status  : Initialized");
    Logger.log("========================================");
  };

  /**
   * Returns the current version.
   */
  app.version = function () {
    return VERSION;
  };

  /**
   * Returns the application status.
   */
  app.info = function () {

    return {
      name: NAME,
      version: VERSION,
      initialized: initialized
    };

  };

})(SROP);

/**
 * ------------------------------------------------------------
 * Test Function
 * ------------------------------------------------------------
 * Executes the bootstrap sequence.
 */
function testSROP() {

  Logger.clear();

  SROP.initialize();

  Logger.log(SROP.info());

}


