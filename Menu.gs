/**
 * ============================================================
 * Sacred Roots Operations Platform (SROP)
 * File: Menu.gs
 * Version: 1.1.2
 * Build: 1.1.2-build.2
 * Sprint: Foundation+
 * Milestone: 1.1.2
 * Status: IN DEVELOPMENT
 * ============================================================
 *
 * Description:
 * Builds the SROP custom menu for Google Sheets.
 * Presentation layer only.
 * No business logic belongs here.
 * ============================================================
 */

var SROP = SROP || {};

/**
 * Runs automatically whenever the spreadsheet opens.
 */
function onOpen() {

  buildMenu();

}

/**
 * Builds the SROP custom menu.
 */
function buildMenu() {

  var ui = SpreadsheetApp.getUi();

  ui.createMenu("🌱 SROP")
    .addItem("🚀 Initialize", "initializeSROP")
    .addItem("❤️ Health Check", "runHealthCheck")
    .addItem("🧪 Run All Tests", "runAllTests")
    .addSeparator()
    .addItem("ℹ️ Version", "showVersion")
    .addItem("📖 About", "aboutSROP")
    .addSeparator()
    .addItem("⚙️ Settings (Coming Soon)", "comingSoon")
    .addToUi();

}

/**
 * Placeholder until the Settings feature is implemented.
 */
function comingSoon() {

  SpreadsheetApp.getUi().alert(
    "Settings will be available in a future release."
  );

}

/**
 * ------------------------------------------------------------
 * Test Function
 * ------------------------------------------------------------
 *
 * Validates that the menu can be created when a spreadsheet UI
 * is available. If executed from a context without a UI (such
 * as the Apps Script editor), it reports the limitation instead
 * of failing the milestone.
 */
function testMenu() {

  Logger.clear();

  try {

    buildMenu();

    Logger.log("PASS - SROP menu created successfully.");

  } catch (error) {

    if (
      error.message &&
      error.message.indexOf("getUi") !== -1
    ) {

      Logger.log(
        "INFO - Menu creation requires the Google Sheets UI."
      );
      Logger.log(
        "Open the spreadsheet (or refresh it) to verify the menu appears."
      );

      return;

    }

    throw error;

  }

}
