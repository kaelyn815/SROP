/**
 * ============================================================
 * Sacred Roots Operations Platform (SROP)
 * File: Config.gs
 * Version: 0.2.0
 * Sprint: Genesis
 * Milestone: 0.2
 * ============================================================
 */

var SROP = SROP || {};

(function (app) {

  "use strict";

  const DEFAULTS = {
    DEBUG_MODE: "false",
    LOG_LEVEL: "INFO"
  };

  const props = PropertiesService.getScriptProperties();

  app.Config = {};

  app.Config.initialize = function () {

    Object.keys(DEFAULTS).forEach(function (key) {

      if (props.getProperty(key) === null) {
        props.setProperty(key, DEFAULTS[key]);
      }

    });

    Logger.log("[SROP] Configuration initialized.");

  };

  app.Config.get = function (key) {
    return props.getProperty(key);
  };

  app.Config.set = function (key, value) {
    props.setProperty(key, String(value));
  };

  app.Config.all = function () {
    return props.getProperties();
  };

  app.Config.reset = function () {

    props.deleteAllProperties();

    Object.keys(DEFAULTS).forEach(function (key) {
      props.setProperty(key, DEFAULTS[key]);
    });

    Logger.log("[SROP] Configuration reset.");

  };

})(SROP);

function testConfig() {

  Logger.clear();

  SROP.Config.initialize();

  Logger.log(SROP.Config.all());

}

