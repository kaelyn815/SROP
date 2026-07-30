/**
 * ============================================================
 * Sacred Roots Operations Platform (SROP)
 * File: Utilities.gs
 * Version: 0.4.0
 * Sprint: Genesis
 * Milestone: 0.4
 * Status: IN DEVELOPMENT
 * ============================================================
 *
 * Description:
 * Shared utility functions used throughout SROP.
 * These functions should be generic and reusable.
 * ============================================================
 */

var SROP = SROP || {};

(function (app) {

  "use strict";

  app.Utilities = {};

  /**
   * Returns true if the supplied value is considered empty.
   *
   * @param {*} value
   * @returns {boolean}
   */
  app.Utilities.isEmpty = function (value) {

    return (
      value === null ||
      value === undefined ||
      value === ""
    );

  };

  /**
   * Returns true if the supplied value is not empty.
   *
   * @param {*} value
   * @returns {boolean}
   */
  app.Utilities.isNotEmpty = function (value) {

    return !app.Utilities.isEmpty(value);

  };

  /**
   * Formats a Date using the script's time zone.
   *
   * @param {Date} date
   * @returns {string}
   */
  app.Utilities.formatDate = function (date) {

    if (!(date instanceof Date)) {
      throw new Error("formatDate() requires a Date object.");
    }

    return Utilities.formatDate(
      date,
      Session.getScriptTimeZone(),
      "yyyy-MM-dd HH:mm:ss"
    );

  };

  /**
   * Generates a lightweight unique identifier.
   *
   * @returns {string}
   */
  app.Utilities.generateId = function () {

    return (
      Date.now().toString(36) +
      "-" +
      Math.random().toString(36).substring(2, 10)
    );

  };

  /**
   * Pauses execution.
   *
   * @param {number} milliseconds
   */
  app.Utilities.sleep = function (milliseconds) {

    if (milliseconds < 0) {
      throw new Error("Sleep duration cannot be negative.");
    }

    Utilities.sleep(milliseconds);

  };

})(SROP);


/**
 * ------------------------------------------------------------
 * Test Function
 * ------------------------------------------------------------
 */

function testUtilities() {

  Logger.clear();

  Logger.log(
    "isEmpty(''): " +
    SROP.Utilities.isEmpty("")
  );

  Logger.log(
    "isNotEmpty('Hello'): " +
    SROP.Utilities.isNotEmpty("Hello")
  );

  Logger.log(
    "Current Time: " +
    SROP.Utilities.formatDate(new Date())
  );

  Logger.log(
    "Generated ID: " +
    SROP.Utilities.generateId()
  );

  SROP.Utilities.sleep(100);

  Logger.log("Utilities test completed.");

}

