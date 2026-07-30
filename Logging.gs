/**
 * ============================================================
 * Sacred Roots Operations Platform (SROP)
 * File: Logging.gs
 * Version: 0.3.0
 * Sprint: Genesis
 * Milestone: 0.3
 * ============================================================
 *
 * Description:
 * Central logging service for SROP.
 * All future modules should log through this service instead
 * of calling Logger.log() directly.
 * ============================================================
 */

var SROP = SROP || {};

(function (app) {

  "use strict";

  app.Logging = {};

  /**
   * Internal logging function.
   */
  function write(level, message) {

    Logger.log("[" + level + "] " + message);

  }

  /**
   * Information message.
   */
  app.Logging.info = function (message) {

    write("INFO", message);

  };

  /**
   * Success message.
   */
  app.Logging.success = function (message) {

    write("SUCCESS", message);

  };

  /**
   * Warning message.
   */
  app.Logging.warning = function (message) {

    write("WARNING", message);

  };

  /**
   * Error message.
   */
  app.Logging.error = function (message) {

    write("ERROR", message);

  };

  /**
   * Debug message.
   */
  app.Logging.debug = function (message) {

    if (SROP.Config.get("DEBUG_MODE") === "true") {

      write("DEBUG", message);

    }

  };

})(SROP);


/**
 * ------------------------------------------------------------
 * Test Function
 * ------------------------------------------------------------
 */

function testLogging() {

  Logger.clear();

  SROP.Config.initialize();

  SROP.Logging.info("Information");

  SROP.Logging.success("Success");

  SROP.Logging.warning("Warning");

  SROP.Logging.error("Error");

  SROP.Logging.debug("Debug");

}
