/**
 * ============================================================
 * Sacred Roots Operations Platform (SROP)
 * File: Dialog.gs
 * Version: 1.1.3
 * Build: 1.1.3-build.1
 * Sprint: Foundation+
 * Milestone: 1.1.3
 * Status: IN DEVELOPMENT
 * ============================================================
 *
 * Description:
 * Centralized UI dialog service for SROP.
 * Presentation layer only.
 * ============================================================
 */

var SROP = SROP || {};

(function (app) {

  "use strict";

  app.Dialog = {};

  /**
   * Displays an informational dialog.
   *
   * @param {string} title
   * @param {string} message
   */
  app.Dialog.info = function (title, message) {

    SpreadsheetApp.getUi().alert(
      title,
      message,
      SpreadsheetApp.getUi().ButtonSet.OK
    );

  };

  /**
   * Displays the About dialog.
   */
  app.Dialog.about = function () {

    app.Dialog.info(
      "About SROP",
      app.info()
    );

  };

})(SROP);


/**
 * ------------------------------------------------------------
 * Test Function
 * ------------------------------------------------------------
 */

function testDialog() {

  Logger.clear();

  try {

    SROP.Dialog.about();

    Logger.log("PASS - About dialog displayed.");

  } catch (error) {

    if (
      error.message &&
      error.message.indexOf("getUi") !== -1
    ) {

      Logger.log(
        "INFO - Dialogs require the Google Sheets UI."
      );

      Logger.log(
        "Open the spreadsheet and execute the About menu item to verify."
      );

      return;

    }

    throw error;

  }

}
