/**
 * ============================================================
 * Sacred Roots Operations Platform (SROP)
 * File: Metadata.gs
 * Version: 1.1.4
 * Build: 1.1.4-build.1
 * Sprint: Foundation+
 * Milestone: 1.1.4
 * Status: IN DEVELOPMENT
 * ============================================================
 *
 * Description:
 * Centralized application metadata service.
 * Provides a single source of truth for application identity.
 * ============================================================
 */

var SROP = SROP || {};

(function (app) {

  "use strict";

  /**
   * Private metadata store.
   * Not accessible outside this module.
   */
  const metadata = Object.freeze({

    applicationName: "Sacred Roots Operations Platform",

    acronym: "SROP",

    version: "1.1.4",

    build: "1.1.4-build.1"

  });

  app.Metadata = {};

  /**
   * Returns the application name.
   *
   * @returns {string}
   */
  app.Metadata.getApplicationName = function () {

    return metadata.applicationName;

  };

  /**
   * Returns the application acronym.
   *
   * @returns {string}
   */
  app.Metadata.getAcronym = function () {

    return metadata.acronym;

  };

  /**
   * Returns the application version.
   *
   * @returns {string}
   */
  app.Metadata.getVersion = function () {

    return metadata.version;

  };

  /**
   * Returns the current build number.
   *
   * @returns {string}
   */
  app.Metadata.getBuild = function () {

    return metadata.build;

  };

  /**
   * Returns a copy of all metadata.
   *
   * @returns {Object}
   */
  app.Metadata.getInfo = function () {

    return {

      applicationName: metadata.applicationName,
      acronym: metadata.acronym,
      version: metadata.version,
      build: metadata.build

    };

  };

})(SROP);

/**
 * ------------------------------------------------------------
 * Test Function
 * ------------------------------------------------------------
 */

function testMetadata() {

  Logger.clear();

  Logger.log("===== Metadata Test =====");

  Logger.log(
    "Application: " +
    SROP.Metadata.getApplicationName()
  );

  Logger.log(
    "Acronym: " +
    SROP.Metadata.getAcronym()
  );

  Logger.log(
    "Version: " +
    SROP.Metadata.getVersion()
  );

  Logger.log(
    "Build: " +
    SROP.Metadata.getBuild()
  );

  Logger.log(
    JSON.stringify(
      SROP.Metadata.getInfo(),
      null,
      2
    )
  );

  Logger.log("PASS - Metadata service operational.");

}
