!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in p||(p[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==v.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=p[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(v.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=p[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return x[e]||(x[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=p[s],v=x[s];v?l=v.exports:c&&!c.declarative?l=c.esModule:c?(d(c),v=c.module,l=v.exports):l=f(s),v&&v.importers?(v.importers.push(t),t.dependencies.push(v)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=p[e];if(t)t.declarative?c(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=f(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=p[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){if(r===e)return r;var t={};if("object"==typeof r||"function"==typeof r)if(g){var n;for(var o in r)(n=Object.getOwnPropertyDescriptor(r,o))&&h(t,o,n)}else{var a=r&&r.hasOwnProperty;for(var o in r)(!a||r.hasOwnProperty(o))&&(t[o]=r[o])}return t["default"]=r,h(t,"__useDefault",{value:!0}),t}function c(r,t){var n=p[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==v.call(t,u)&&(p[u]?c(u,t):f(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function f(e){if(D[e])return D[e];if("@node/"==e.substr(0,6))return y(e.substr(6));var r=p[e];if(!r)throw"Module "+e+" not present.";return a(e),c(e,[]),p[e]=void 0,r.declarative&&h(r.module.exports,"__esModule",{value:!0}),D[e]=r.declarative?r.module.exports:r.esModule}var p={},v=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},g=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(m){g=!1}var h;!function(){try{Object.defineProperty({},"a",{})&&(h=Object.defineProperty)}catch(e){h=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var x={},y="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,D={"@empty":{}};return function(e,n,o){return function(a){a(function(a){for(var u={_nodeRequire:y,register:r,registerDynamic:t,get:f,set:function(e,r){D[e]=r},newModule:function(e){return e}},d=0;d<n.length;d++)(function(e,r){r&&r.__esModule?D[e]=r:D[e]=s(r)})(n[d],arguments[d]);o(u);var i=f(e[0]);if(e.length>1)for(var d=1;d<e.length;d++)f(e[d]);return i.__useDefault?i["default"]:i})}}}("undefined"!=typeof self?self:global)

(["1"], [], function($__System, require) {

$__System.registerDynamic("2", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YAccelerometerProxy = exports.YAccelerometer = exports.Y_ZVALUE_INVALID = exports.Y_YVALUE_INVALID = exports.Y_XVALUE_INVALID = exports.Y_GRAVITYCANCELLATION_INVALID = exports.Y_GRAVITYCANCELLATION_ON = exports.Y_GRAVITYCANCELLATION_OFF = undefined;
  exports.yFindAccelerometer = yFindAccelerometer;
  exports.yFirstAccelerometer = yFirstAccelerometer;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_GRAVITYCANCELLATION_OFF = exports.Y_GRAVITYCANCELLATION_OFF = 0;
  var Y_GRAVITYCANCELLATION_ON = exports.Y_GRAVITYCANCELLATION_ON = 1;
  var Y_GRAVITYCANCELLATION_INVALID = exports.Y_GRAVITYCANCELLATION_INVALID = -1;
  var Y_XVALUE_INVALID = exports.Y_XVALUE_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_YVALUE_INVALID = exports.Y_YVALUE_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_ZVALUE_INVALID = exports.Y_ZVALUE_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  class YAccelerometer extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Accelerometer';
      this._xValue = Y_XVALUE_INVALID;
      this._yValue = Y_YVALUE_INVALID;
      this._zValue = Y_ZVALUE_INVALID;
      this._gravityCancellation = Y_GRAVITYCANCELLATION_INVALID;
      this.imm_setConst({
        XVALUE_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        YVALUE_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        ZVALUE_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        GRAVITYCANCELLATION_OFF: 0,
        GRAVITYCANCELLATION_ON: 1,
        GRAVITYCANCELLATION_INVALID: -1
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YAccelerometerProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'xValue':
          this._xValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'yValue':
          this._yValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'zValue':
          this._zValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'gravityCancellation':
          this._gravityCancellation = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_xValue() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_XVALUE_INVALID;
          }
        }
        return _this2._xValue;
      })();
    }
    get_yValue() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        if (_this3._cacheExpiration <= _this3._yapi.GetTickCount()) {
          if ((yield _this3.load(_this3._yapi.defaultCacheValidity)) != _this3._yapi.SUCCESS) {
            return Y_YVALUE_INVALID;
          }
        }
        return _this3._yValue;
      })();
    }
    get_zValue() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_ZVALUE_INVALID;
          }
        }
        return _this4._zValue;
      })();
    }
    get_gravityCancellation() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        if (_this5._cacheExpiration <= _this5._yapi.GetTickCount()) {
          if ((yield _this5.load(_this5._yapi.defaultCacheValidity)) != _this5._yapi.SUCCESS) {
            return Y_GRAVITYCANCELLATION_INVALID;
          }
        }
        return _this5._gravityCancellation;
      })();
    }
    set_gravityCancellation(newval) {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this6._setAttr('gravityCancellation', rest_val);
      })();
    }
    static FindAccelerometer(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Accelerometer', func);
      if (obj == null) {
        obj = new YAccelerometer(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Accelerometer', func, obj);
      }
      return obj;
    }
    static FindAccelerometerInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Accelerometer', func);
      if (obj == null) {
        obj = new YAccelerometer(yctx, func);
        _yocto_api.YFunction._AddToCache('Accelerometer', func, obj);
      }
      return obj;
    }
    nextAccelerometer() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YAccelerometer.FindAccelerometerInContext(this._yapi, next_hwid);
    }
    static FirstAccelerometer() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Accelerometer');
      if (next_hwid == null)
        return null;
      return YAccelerometer.FindAccelerometer(next_hwid);
    }
    static FirstAccelerometerInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Accelerometer');
      if (next_hwid == null)
        return null;
      return YAccelerometer.FindAccelerometerInContext(yctx, next_hwid);
    }
  }
  exports.YAccelerometer = YAccelerometer;
  class YAccelerometerProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_xValue() {
      return this.liveFunc._xValue;
    }
    get_yValue() {
      return this.liveFunc._yValue;
    }
    get_zValue() {
      return this.liveFunc._zValue;
    }
    get_gravityCancellation() {
      return this.liveFunc._gravityCancellation;
    }
    set_gravityCancellation(newval) {
      this.liveFunc.set_gravityCancellation(newval);
      return this._yapi.SUCCESS;
    }
  }
  exports.YAccelerometerProxy = YAccelerometerProxy;
  function yFindAccelerometer(func) {
    return YAccelerometer.FindAccelerometer(func);
  }
  function yFirstAccelerometer() {
    return YAccelerometer.FirstAccelerometer();
  }
  return module.exports;
});

$__System.registerDynamic("4", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YAltitudeProxy = exports.YAltitude = exports.Y_TECHNOLOGY_INVALID = exports.Y_QNH_INVALID = undefined;
  exports.yFindAltitude = yFindAltitude;
  exports.yFirstAltitude = yFirstAltitude;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_QNH_INVALID = exports.Y_QNH_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_TECHNOLOGY_INVALID = exports.Y_TECHNOLOGY_INVALID = _yocto_api.YAPI.INVALID_STRING;
  class YAltitude extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Altitude';
      this._qnh = Y_QNH_INVALID;
      this._technology = Y_TECHNOLOGY_INVALID;
      this.imm_setConst({
        QNH_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        TECHNOLOGY_INVALID: _yocto_api.YAPI.INVALID_STRING
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YAltitudeProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'qnh':
          this._qnh = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'technology':
          this._technology = val;
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    set_currentValue(newval) {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this2._setAttr('currentValue', rest_val);
      })();
    }
    set_qnh(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this3._setAttr('qnh', rest_val);
      })();
    }
    get_qnh() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_QNH_INVALID;
          }
        }
        return _this4._qnh;
      })();
    }
    get_technology() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        if (_this5._cacheExpiration <= _this5._yapi.GetTickCount()) {
          if ((yield _this5.load(_this5._yapi.defaultCacheValidity)) != _this5._yapi.SUCCESS) {
            return Y_TECHNOLOGY_INVALID;
          }
        }
        return _this5._technology;
      })();
    }
    static FindAltitude(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Altitude', func);
      if (obj == null) {
        obj = new YAltitude(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Altitude', func, obj);
      }
      return obj;
    }
    static FindAltitudeInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Altitude', func);
      if (obj == null) {
        obj = new YAltitude(yctx, func);
        _yocto_api.YFunction._AddToCache('Altitude', func, obj);
      }
      return obj;
    }
    nextAltitude() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YAltitude.FindAltitudeInContext(this._yapi, next_hwid);
    }
    static FirstAltitude() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Altitude');
      if (next_hwid == null)
        return null;
      return YAltitude.FindAltitude(next_hwid);
    }
    static FirstAltitudeInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Altitude');
      if (next_hwid == null)
        return null;
      return YAltitude.FindAltitudeInContext(yctx, next_hwid);
    }
  }
  exports.YAltitude = YAltitude;
  class YAltitudeProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    set_currentValue(newval) {
      this.liveFunc.set_currentValue(newval);
      return this._yapi.SUCCESS;
    }
    set_qnh(newval) {
      this.liveFunc.set_qnh(newval);
      return this._yapi.SUCCESS;
    }
    get_qnh() {
      return this.liveFunc._qnh;
    }
    get_technology() {
      return this.liveFunc._technology;
    }
  }
  exports.YAltitudeProxy = YAltitudeProxy;
  function yFindAltitude(func) {
    return YAltitude.FindAltitude(func);
  }
  function yFirstAltitude() {
    return YAltitude.FirstAltitude();
  }
  return module.exports;
});

$__System.registerDynamic("5", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YAnButtonProxy = exports.YAnButton = exports.Y_PULSETIMER_INVALID = exports.Y_PULSECOUNTER_INVALID = exports.Y_LASTTIMERELEASED_INVALID = exports.Y_LASTTIMEPRESSED_INVALID = exports.Y_SENSITIVITY_INVALID = exports.Y_CALIBRATIONMIN_INVALID = exports.Y_CALIBRATIONMAX_INVALID = exports.Y_RAWVALUE_INVALID = exports.Y_CALIBRATEDVALUE_INVALID = exports.Y_ISPRESSED_INVALID = exports.Y_ISPRESSED_TRUE = exports.Y_ISPRESSED_FALSE = exports.Y_ANALOGCALIBRATION_INVALID = exports.Y_ANALOGCALIBRATION_ON = exports.Y_ANALOGCALIBRATION_OFF = undefined;
  exports.yFindAnButton = yFindAnButton;
  exports.yFirstAnButton = yFirstAnButton;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_ANALOGCALIBRATION_OFF = exports.Y_ANALOGCALIBRATION_OFF = 0;
  var Y_ANALOGCALIBRATION_ON = exports.Y_ANALOGCALIBRATION_ON = 1;
  var Y_ANALOGCALIBRATION_INVALID = exports.Y_ANALOGCALIBRATION_INVALID = -1;
  var Y_ISPRESSED_FALSE = exports.Y_ISPRESSED_FALSE = 0;
  var Y_ISPRESSED_TRUE = exports.Y_ISPRESSED_TRUE = 1;
  var Y_ISPRESSED_INVALID = exports.Y_ISPRESSED_INVALID = -1;
  var Y_CALIBRATEDVALUE_INVALID = exports.Y_CALIBRATEDVALUE_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_RAWVALUE_INVALID = exports.Y_RAWVALUE_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_CALIBRATIONMAX_INVALID = exports.Y_CALIBRATIONMAX_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_CALIBRATIONMIN_INVALID = exports.Y_CALIBRATIONMIN_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_SENSITIVITY_INVALID = exports.Y_SENSITIVITY_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_LASTTIMEPRESSED_INVALID = exports.Y_LASTTIMEPRESSED_INVALID = _yocto_api.YAPI.INVALID_LONG;
  var Y_LASTTIMERELEASED_INVALID = exports.Y_LASTTIMERELEASED_INVALID = _yocto_api.YAPI.INVALID_LONG;
  var Y_PULSECOUNTER_INVALID = exports.Y_PULSECOUNTER_INVALID = _yocto_api.YAPI.INVALID_LONG;
  var Y_PULSETIMER_INVALID = exports.Y_PULSETIMER_INVALID = _yocto_api.YAPI.INVALID_LONG;
  class YAnButton extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'AnButton';
      this._calibratedValue = Y_CALIBRATEDVALUE_INVALID;
      this._rawValue = Y_RAWVALUE_INVALID;
      this._analogCalibration = Y_ANALOGCALIBRATION_INVALID;
      this._calibrationMax = Y_CALIBRATIONMAX_INVALID;
      this._calibrationMin = Y_CALIBRATIONMIN_INVALID;
      this._sensitivity = Y_SENSITIVITY_INVALID;
      this._isPressed = Y_ISPRESSED_INVALID;
      this._lastTimePressed = Y_LASTTIMEPRESSED_INVALID;
      this._lastTimeReleased = Y_LASTTIMERELEASED_INVALID;
      this._pulseCounter = Y_PULSECOUNTER_INVALID;
      this._pulseTimer = Y_PULSETIMER_INVALID;
      this.imm_setConst({
        CALIBRATEDVALUE_INVALID: _yocto_api.YAPI.INVALID_UINT,
        RAWVALUE_INVALID: _yocto_api.YAPI.INVALID_UINT,
        ANALOGCALIBRATION_OFF: 0,
        ANALOGCALIBRATION_ON: 1,
        ANALOGCALIBRATION_INVALID: -1,
        CALIBRATIONMAX_INVALID: _yocto_api.YAPI.INVALID_UINT,
        CALIBRATIONMIN_INVALID: _yocto_api.YAPI.INVALID_UINT,
        SENSITIVITY_INVALID: _yocto_api.YAPI.INVALID_UINT,
        ISPRESSED_FALSE: 0,
        ISPRESSED_TRUE: 1,
        ISPRESSED_INVALID: -1,
        LASTTIMEPRESSED_INVALID: _yocto_api.YAPI.INVALID_LONG,
        LASTTIMERELEASED_INVALID: _yocto_api.YAPI.INVALID_LONG,
        PULSECOUNTER_INVALID: _yocto_api.YAPI.INVALID_LONG,
        PULSETIMER_INVALID: _yocto_api.YAPI.INVALID_LONG
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YAnButtonProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'calibratedValue':
          this._calibratedValue = parseInt(val);
          return 1;
        case 'rawValue':
          this._rawValue = parseInt(val);
          return 1;
        case 'analogCalibration':
          this._analogCalibration = parseInt(val);
          return 1;
        case 'calibrationMax':
          this._calibrationMax = parseInt(val);
          return 1;
        case 'calibrationMin':
          this._calibrationMin = parseInt(val);
          return 1;
        case 'sensitivity':
          this._sensitivity = parseInt(val);
          return 1;
        case 'isPressed':
          this._isPressed = parseInt(val);
          return 1;
        case 'lastTimePressed':
          this._lastTimePressed = parseInt(val);
          return 1;
        case 'lastTimeReleased':
          this._lastTimeReleased = parseInt(val);
          return 1;
        case 'pulseCounter':
          this._pulseCounter = parseInt(val);
          return 1;
        case 'pulseTimer':
          this._pulseTimer = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_calibratedValue() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_CALIBRATEDVALUE_INVALID;
          }
        }
        return _this2._calibratedValue;
      })();
    }
    get_rawValue() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        if (_this3._cacheExpiration <= _this3._yapi.GetTickCount()) {
          if ((yield _this3.load(_this3._yapi.defaultCacheValidity)) != _this3._yapi.SUCCESS) {
            return Y_RAWVALUE_INVALID;
          }
        }
        return _this3._rawValue;
      })();
    }
    get_analogCalibration() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_ANALOGCALIBRATION_INVALID;
          }
        }
        return _this4._analogCalibration;
      })();
    }
    set_analogCalibration(newval) {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this5._setAttr('analogCalibration', rest_val);
      })();
    }
    get_calibrationMax() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_CALIBRATIONMAX_INVALID;
          }
        }
        return _this6._calibrationMax;
      })();
    }
    set_calibrationMax(newval) {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this7._setAttr('calibrationMax', rest_val);
      })();
    }
    get_calibrationMin() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        if (_this8._cacheExpiration <= _this8._yapi.GetTickCount()) {
          if ((yield _this8.load(_this8._yapi.defaultCacheValidity)) != _this8._yapi.SUCCESS) {
            return Y_CALIBRATIONMIN_INVALID;
          }
        }
        return _this8._calibrationMin;
      })();
    }
    set_calibrationMin(newval) {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this9._setAttr('calibrationMin', rest_val);
      })();
    }
    get_sensitivity() {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        if (_this10._cacheExpiration <= _this10._yapi.GetTickCount()) {
          if ((yield _this10.load(_this10._yapi.defaultCacheValidity)) != _this10._yapi.SUCCESS) {
            return Y_SENSITIVITY_INVALID;
          }
        }
        return _this10._sensitivity;
      })();
    }
    set_sensitivity(newval) {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this11._setAttr('sensitivity', rest_val);
      })();
    }
    get_isPressed() {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        if (_this12._cacheExpiration <= _this12._yapi.GetTickCount()) {
          if ((yield _this12.load(_this12._yapi.defaultCacheValidity)) != _this12._yapi.SUCCESS) {
            return Y_ISPRESSED_INVALID;
          }
        }
        return _this12._isPressed;
      })();
    }
    get_lastTimePressed() {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        if (_this13._cacheExpiration <= _this13._yapi.GetTickCount()) {
          if ((yield _this13.load(_this13._yapi.defaultCacheValidity)) != _this13._yapi.SUCCESS) {
            return Y_LASTTIMEPRESSED_INVALID;
          }
        }
        return _this13._lastTimePressed;
      })();
    }
    get_lastTimeReleased() {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        if (_this14._cacheExpiration <= _this14._yapi.GetTickCount()) {
          if ((yield _this14.load(_this14._yapi.defaultCacheValidity)) != _this14._yapi.SUCCESS) {
            return Y_LASTTIMERELEASED_INVALID;
          }
        }
        return _this14._lastTimeReleased;
      })();
    }
    get_pulseCounter() {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        if (_this15._cacheExpiration <= _this15._yapi.GetTickCount()) {
          if ((yield _this15.load(_this15._yapi.defaultCacheValidity)) != _this15._yapi.SUCCESS) {
            return Y_PULSECOUNTER_INVALID;
          }
        }
        return _this15._pulseCounter;
      })();
    }
    set_pulseCounter(newval) {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this16._setAttr('pulseCounter', rest_val);
      })();
    }
    get_pulseTimer() {
      var _this17 = this;
      return _asyncToGenerator(function*() {
        if (_this17._cacheExpiration <= _this17._yapi.GetTickCount()) {
          if ((yield _this17.load(_this17._yapi.defaultCacheValidity)) != _this17._yapi.SUCCESS) {
            return Y_PULSETIMER_INVALID;
          }
        }
        return _this17._pulseTimer;
      })();
    }
    static FindAnButton(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('AnButton', func);
      if (obj == null) {
        obj = new YAnButton(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('AnButton', func, obj);
      }
      return obj;
    }
    static FindAnButtonInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'AnButton', func);
      if (obj == null) {
        obj = new YAnButton(yctx, func);
        _yocto_api.YFunction._AddToCache('AnButton', func, obj);
      }
      return obj;
    }
    resetCounter() {
      var _this18 = this;
      return _asyncToGenerator(function*() {
        return yield _this18.set_pulseCounter(0);
      })();
    }
    nextAnButton() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YAnButton.FindAnButtonInContext(this._yapi, next_hwid);
    }
    static FirstAnButton() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('AnButton');
      if (next_hwid == null)
        return null;
      return YAnButton.FindAnButton(next_hwid);
    }
    static FirstAnButtonInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('AnButton');
      if (next_hwid == null)
        return null;
      return YAnButton.FindAnButtonInContext(yctx, next_hwid);
    }
  }
  exports.YAnButton = YAnButton;
  class YAnButtonProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_calibratedValue() {
      return this.liveFunc._calibratedValue;
    }
    get_rawValue() {
      return this.liveFunc._rawValue;
    }
    get_analogCalibration() {
      return this.liveFunc._analogCalibration;
    }
    set_analogCalibration(newval) {
      this.liveFunc.set_analogCalibration(newval);
      return this._yapi.SUCCESS;
    }
    get_calibrationMax() {
      return this.liveFunc._calibrationMax;
    }
    set_calibrationMax(newval) {
      this.liveFunc.set_calibrationMax(newval);
      return this._yapi.SUCCESS;
    }
    get_calibrationMin() {
      return this.liveFunc._calibrationMin;
    }
    set_calibrationMin(newval) {
      this.liveFunc.set_calibrationMin(newval);
      return this._yapi.SUCCESS;
    }
    get_sensitivity() {
      return this.liveFunc._sensitivity;
    }
    set_sensitivity(newval) {
      this.liveFunc.set_sensitivity(newval);
      return this._yapi.SUCCESS;
    }
    get_isPressed() {
      return this.liveFunc._isPressed;
    }
    get_lastTimePressed() {
      return this.liveFunc._lastTimePressed;
    }
    get_lastTimeReleased() {
      return this.liveFunc._lastTimeReleased;
    }
    get_pulseCounter() {
      return this.liveFunc._pulseCounter;
    }
    set_pulseCounter(newval) {
      this.liveFunc.set_pulseCounter(newval);
      return this._yapi.SUCCESS;
    }
    get_pulseTimer() {
      return this.liveFunc._pulseTimer;
    }
    resetCounter() {
      this.liveFunc.resetCounter();
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YAnButtonProxy = YAnButtonProxy;
  function yFindAnButton(func) {
    return YAnButton.FindAnButton(func);
  }
  function yFirstAnButton() {
    return YAnButton.FirstAnButton();
  }
  return module.exports;
});

$__System.registerDynamic("6", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YAudioInProxy = exports.YAudioIn = exports.Y_NOSIGNALFOR_INVALID = exports.Y_SIGNAL_INVALID = exports.Y_VOLUMERANGE_INVALID = exports.Y_VOLUME_INVALID = exports.Y_MUTE_INVALID = exports.Y_MUTE_TRUE = exports.Y_MUTE_FALSE = undefined;
  exports.yFindAudioIn = yFindAudioIn;
  exports.yFirstAudioIn = yFirstAudioIn;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_MUTE_FALSE = exports.Y_MUTE_FALSE = 0;
  var Y_MUTE_TRUE = exports.Y_MUTE_TRUE = 1;
  var Y_MUTE_INVALID = exports.Y_MUTE_INVALID = -1;
  var Y_VOLUME_INVALID = exports.Y_VOLUME_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_VOLUMERANGE_INVALID = exports.Y_VOLUMERANGE_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_SIGNAL_INVALID = exports.Y_SIGNAL_INVALID = _yocto_api.YAPI.INVALID_INT;
  var Y_NOSIGNALFOR_INVALID = exports.Y_NOSIGNALFOR_INVALID = _yocto_api.YAPI.INVALID_INT;
  class YAudioIn extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'AudioIn';
      this._volume = Y_VOLUME_INVALID;
      this._mute = Y_MUTE_INVALID;
      this._volumeRange = Y_VOLUMERANGE_INVALID;
      this._signal = Y_SIGNAL_INVALID;
      this._noSignalFor = Y_NOSIGNALFOR_INVALID;
      this.imm_setConst({
        VOLUME_INVALID: _yocto_api.YAPI.INVALID_UINT,
        MUTE_FALSE: 0,
        MUTE_TRUE: 1,
        MUTE_INVALID: -1,
        VOLUMERANGE_INVALID: _yocto_api.YAPI.INVALID_STRING,
        SIGNAL_INVALID: _yocto_api.YAPI.INVALID_INT,
        NOSIGNALFOR_INVALID: _yocto_api.YAPI.INVALID_INT
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YAudioInProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'volume':
          this._volume = parseInt(val);
          return 1;
        case 'mute':
          this._mute = parseInt(val);
          return 1;
        case 'volumeRange':
          this._volumeRange = val;
          return 1;
        case 'signal':
          this._signal = parseInt(val);
          return 1;
        case 'noSignalFor':
          this._noSignalFor = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_volume() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_VOLUME_INVALID;
          }
        }
        return _this2._volume;
      })();
    }
    set_volume(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this3._setAttr('volume', rest_val);
      })();
    }
    get_mute() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_MUTE_INVALID;
          }
        }
        return _this4._mute;
      })();
    }
    set_mute(newval) {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this5._setAttr('mute', rest_val);
      })();
    }
    get_volumeRange() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_VOLUMERANGE_INVALID;
          }
        }
        return _this6._volumeRange;
      })();
    }
    get_signal() {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        if (_this7._cacheExpiration <= _this7._yapi.GetTickCount()) {
          if ((yield _this7.load(_this7._yapi.defaultCacheValidity)) != _this7._yapi.SUCCESS) {
            return Y_SIGNAL_INVALID;
          }
        }
        return _this7._signal;
      })();
    }
    get_noSignalFor() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        if (_this8._cacheExpiration <= _this8._yapi.GetTickCount()) {
          if ((yield _this8.load(_this8._yapi.defaultCacheValidity)) != _this8._yapi.SUCCESS) {
            return Y_NOSIGNALFOR_INVALID;
          }
        }
        return _this8._noSignalFor;
      })();
    }
    static FindAudioIn(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('AudioIn', func);
      if (obj == null) {
        obj = new YAudioIn(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('AudioIn', func, obj);
      }
      return obj;
    }
    static FindAudioInInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'AudioIn', func);
      if (obj == null) {
        obj = new YAudioIn(yctx, func);
        _yocto_api.YFunction._AddToCache('AudioIn', func, obj);
      }
      return obj;
    }
    nextAudioIn() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YAudioIn.FindAudioInInContext(this._yapi, next_hwid);
    }
    static FirstAudioIn() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('AudioIn');
      if (next_hwid == null)
        return null;
      return YAudioIn.FindAudioIn(next_hwid);
    }
    static FirstAudioInInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('AudioIn');
      if (next_hwid == null)
        return null;
      return YAudioIn.FindAudioInInContext(yctx, next_hwid);
    }
  }
  exports.YAudioIn = YAudioIn;
  class YAudioInProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_volume() {
      return this.liveFunc._volume;
    }
    set_volume(newval) {
      this.liveFunc.set_volume(newval);
      return this._yapi.SUCCESS;
    }
    get_mute() {
      return this.liveFunc._mute;
    }
    set_mute(newval) {
      this.liveFunc.set_mute(newval);
      return this._yapi.SUCCESS;
    }
    get_volumeRange() {
      return this.liveFunc._volumeRange;
    }
    get_signal() {
      return this.liveFunc._signal;
    }
    get_noSignalFor() {
      return this.liveFunc._noSignalFor;
    }
  }
  exports.YAudioInProxy = YAudioInProxy;
  function yFindAudioIn(func) {
    return YAudioIn.FindAudioIn(func);
  }
  function yFirstAudioIn() {
    return YAudioIn.FirstAudioIn();
  }
  return module.exports;
});

$__System.registerDynamic("7", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YAudioOutProxy = exports.YAudioOut = exports.Y_NOSIGNALFOR_INVALID = exports.Y_SIGNAL_INVALID = exports.Y_VOLUMERANGE_INVALID = exports.Y_VOLUME_INVALID = exports.Y_MUTE_INVALID = exports.Y_MUTE_TRUE = exports.Y_MUTE_FALSE = undefined;
  exports.yFindAudioOut = yFindAudioOut;
  exports.yFirstAudioOut = yFirstAudioOut;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_MUTE_FALSE = exports.Y_MUTE_FALSE = 0;
  var Y_MUTE_TRUE = exports.Y_MUTE_TRUE = 1;
  var Y_MUTE_INVALID = exports.Y_MUTE_INVALID = -1;
  var Y_VOLUME_INVALID = exports.Y_VOLUME_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_VOLUMERANGE_INVALID = exports.Y_VOLUMERANGE_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_SIGNAL_INVALID = exports.Y_SIGNAL_INVALID = _yocto_api.YAPI.INVALID_INT;
  var Y_NOSIGNALFOR_INVALID = exports.Y_NOSIGNALFOR_INVALID = _yocto_api.YAPI.INVALID_INT;
  class YAudioOut extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'AudioOut';
      this._volume = Y_VOLUME_INVALID;
      this._mute = Y_MUTE_INVALID;
      this._volumeRange = Y_VOLUMERANGE_INVALID;
      this._signal = Y_SIGNAL_INVALID;
      this._noSignalFor = Y_NOSIGNALFOR_INVALID;
      this.imm_setConst({
        VOLUME_INVALID: _yocto_api.YAPI.INVALID_UINT,
        MUTE_FALSE: 0,
        MUTE_TRUE: 1,
        MUTE_INVALID: -1,
        VOLUMERANGE_INVALID: _yocto_api.YAPI.INVALID_STRING,
        SIGNAL_INVALID: _yocto_api.YAPI.INVALID_INT,
        NOSIGNALFOR_INVALID: _yocto_api.YAPI.INVALID_INT
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YAudioOutProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'volume':
          this._volume = parseInt(val);
          return 1;
        case 'mute':
          this._mute = parseInt(val);
          return 1;
        case 'volumeRange':
          this._volumeRange = val;
          return 1;
        case 'signal':
          this._signal = parseInt(val);
          return 1;
        case 'noSignalFor':
          this._noSignalFor = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_volume() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_VOLUME_INVALID;
          }
        }
        return _this2._volume;
      })();
    }
    set_volume(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this3._setAttr('volume', rest_val);
      })();
    }
    get_mute() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_MUTE_INVALID;
          }
        }
        return _this4._mute;
      })();
    }
    set_mute(newval) {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this5._setAttr('mute', rest_val);
      })();
    }
    get_volumeRange() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_VOLUMERANGE_INVALID;
          }
        }
        return _this6._volumeRange;
      })();
    }
    get_signal() {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        if (_this7._cacheExpiration <= _this7._yapi.GetTickCount()) {
          if ((yield _this7.load(_this7._yapi.defaultCacheValidity)) != _this7._yapi.SUCCESS) {
            return Y_SIGNAL_INVALID;
          }
        }
        return _this7._signal;
      })();
    }
    get_noSignalFor() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        if (_this8._cacheExpiration <= _this8._yapi.GetTickCount()) {
          if ((yield _this8.load(_this8._yapi.defaultCacheValidity)) != _this8._yapi.SUCCESS) {
            return Y_NOSIGNALFOR_INVALID;
          }
        }
        return _this8._noSignalFor;
      })();
    }
    static FindAudioOut(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('AudioOut', func);
      if (obj == null) {
        obj = new YAudioOut(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('AudioOut', func, obj);
      }
      return obj;
    }
    static FindAudioOutInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'AudioOut', func);
      if (obj == null) {
        obj = new YAudioOut(yctx, func);
        _yocto_api.YFunction._AddToCache('AudioOut', func, obj);
      }
      return obj;
    }
    nextAudioOut() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YAudioOut.FindAudioOutInContext(this._yapi, next_hwid);
    }
    static FirstAudioOut() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('AudioOut');
      if (next_hwid == null)
        return null;
      return YAudioOut.FindAudioOut(next_hwid);
    }
    static FirstAudioOutInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('AudioOut');
      if (next_hwid == null)
        return null;
      return YAudioOut.FindAudioOutInContext(yctx, next_hwid);
    }
  }
  exports.YAudioOut = YAudioOut;
  class YAudioOutProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_volume() {
      return this.liveFunc._volume;
    }
    set_volume(newval) {
      this.liveFunc.set_volume(newval);
      return this._yapi.SUCCESS;
    }
    get_mute() {
      return this.liveFunc._mute;
    }
    set_mute(newval) {
      this.liveFunc.set_mute(newval);
      return this._yapi.SUCCESS;
    }
    get_volumeRange() {
      return this.liveFunc._volumeRange;
    }
    get_signal() {
      return this.liveFunc._signal;
    }
    get_noSignalFor() {
      return this.liveFunc._noSignalFor;
    }
  }
  exports.YAudioOutProxy = YAudioOutProxy;
  function yFindAudioOut(func) {
    return YAudioOut.FindAudioOut(func);
  }
  function yFirstAudioOut() {
    return YAudioOut.FirstAudioOut();
  }
  return module.exports;
});

$__System.registerDynamic("8", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YBluetoothLinkProxy = exports.YBluetoothLink = exports.Y_COMMAND_INVALID = exports.Y_LINKQUALITY_INVALID = exports.Y_VOLUME_INVALID = exports.Y_PREAMPLIFIER_INVALID = exports.Y_REMOTENAME_INVALID = exports.Y_REMOTEADDRESS_INVALID = exports.Y_PAIRINGPIN_INVALID = exports.Y_OWNADDRESS_INVALID = exports.Y_LINKSTATE_INVALID = exports.Y_LINKSTATE_PLAY = exports.Y_LINKSTATE_LINKED = exports.Y_LINKSTATE_EXISTS = exports.Y_LINKSTATE_SEARCH = exports.Y_LINKSTATE_FREE = exports.Y_LINKSTATE_DOWN = exports.Y_MUTE_INVALID = exports.Y_MUTE_TRUE = exports.Y_MUTE_FALSE = undefined;
  exports.yFindBluetoothLink = yFindBluetoothLink;
  exports.yFirstBluetoothLink = yFirstBluetoothLink;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_MUTE_FALSE = exports.Y_MUTE_FALSE = 0;
  var Y_MUTE_TRUE = exports.Y_MUTE_TRUE = 1;
  var Y_MUTE_INVALID = exports.Y_MUTE_INVALID = -1;
  var Y_LINKSTATE_DOWN = exports.Y_LINKSTATE_DOWN = 0;
  var Y_LINKSTATE_FREE = exports.Y_LINKSTATE_FREE = 1;
  var Y_LINKSTATE_SEARCH = exports.Y_LINKSTATE_SEARCH = 2;
  var Y_LINKSTATE_EXISTS = exports.Y_LINKSTATE_EXISTS = 3;
  var Y_LINKSTATE_LINKED = exports.Y_LINKSTATE_LINKED = 4;
  var Y_LINKSTATE_PLAY = exports.Y_LINKSTATE_PLAY = 5;
  var Y_LINKSTATE_INVALID = exports.Y_LINKSTATE_INVALID = -1;
  var Y_OWNADDRESS_INVALID = exports.Y_OWNADDRESS_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_PAIRINGPIN_INVALID = exports.Y_PAIRINGPIN_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_REMOTEADDRESS_INVALID = exports.Y_REMOTEADDRESS_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_REMOTENAME_INVALID = exports.Y_REMOTENAME_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_PREAMPLIFIER_INVALID = exports.Y_PREAMPLIFIER_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_VOLUME_INVALID = exports.Y_VOLUME_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_LINKQUALITY_INVALID = exports.Y_LINKQUALITY_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_COMMAND_INVALID = exports.Y_COMMAND_INVALID = _yocto_api.YAPI.INVALID_STRING;
  class YBluetoothLink extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'BluetoothLink';
      this._ownAddress = Y_OWNADDRESS_INVALID;
      this._pairingPin = Y_PAIRINGPIN_INVALID;
      this._remoteAddress = Y_REMOTEADDRESS_INVALID;
      this._remoteName = Y_REMOTENAME_INVALID;
      this._mute = Y_MUTE_INVALID;
      this._preAmplifier = Y_PREAMPLIFIER_INVALID;
      this._volume = Y_VOLUME_INVALID;
      this._linkState = Y_LINKSTATE_INVALID;
      this._linkQuality = Y_LINKQUALITY_INVALID;
      this._command = Y_COMMAND_INVALID;
      this.imm_setConst({
        OWNADDRESS_INVALID: _yocto_api.YAPI.INVALID_STRING,
        PAIRINGPIN_INVALID: _yocto_api.YAPI.INVALID_STRING,
        REMOTEADDRESS_INVALID: _yocto_api.YAPI.INVALID_STRING,
        REMOTENAME_INVALID: _yocto_api.YAPI.INVALID_STRING,
        MUTE_FALSE: 0,
        MUTE_TRUE: 1,
        MUTE_INVALID: -1,
        PREAMPLIFIER_INVALID: _yocto_api.YAPI.INVALID_UINT,
        VOLUME_INVALID: _yocto_api.YAPI.INVALID_UINT,
        LINKSTATE_DOWN: 0,
        LINKSTATE_FREE: 1,
        LINKSTATE_SEARCH: 2,
        LINKSTATE_EXISTS: 3,
        LINKSTATE_LINKED: 4,
        LINKSTATE_PLAY: 5,
        LINKSTATE_INVALID: -1,
        LINKQUALITY_INVALID: _yocto_api.YAPI.INVALID_UINT,
        COMMAND_INVALID: _yocto_api.YAPI.INVALID_STRING
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YBluetoothLinkProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'ownAddress':
          this._ownAddress = val;
          return 1;
        case 'pairingPin':
          this._pairingPin = val;
          return 1;
        case 'remoteAddress':
          this._remoteAddress = val;
          return 1;
        case 'remoteName':
          this._remoteName = val;
          return 1;
        case 'mute':
          this._mute = parseInt(val);
          return 1;
        case 'preAmplifier':
          this._preAmplifier = parseInt(val);
          return 1;
        case 'volume':
          this._volume = parseInt(val);
          return 1;
        case 'linkState':
          this._linkState = parseInt(val);
          return 1;
        case 'linkQuality':
          this._linkQuality = parseInt(val);
          return 1;
        case 'command':
          this._command = val;
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_ownAddress() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_OWNADDRESS_INVALID;
          }
        }
        return _this2._ownAddress;
      })();
    }
    get_pairingPin() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        if (_this3._cacheExpiration <= _this3._yapi.GetTickCount()) {
          if ((yield _this3.load(_this3._yapi.defaultCacheValidity)) != _this3._yapi.SUCCESS) {
            return Y_PAIRINGPIN_INVALID;
          }
        }
        return _this3._pairingPin;
      })();
    }
    set_pairingPin(newval) {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this4._setAttr('pairingPin', rest_val);
      })();
    }
    get_remoteAddress() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        if (_this5._cacheExpiration <= _this5._yapi.GetTickCount()) {
          if ((yield _this5.load(_this5._yapi.defaultCacheValidity)) != _this5._yapi.SUCCESS) {
            return Y_REMOTEADDRESS_INVALID;
          }
        }
        return _this5._remoteAddress;
      })();
    }
    set_remoteAddress(newval) {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this6._setAttr('remoteAddress', rest_val);
      })();
    }
    get_remoteName() {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        if (_this7._cacheExpiration <= _this7._yapi.GetTickCount()) {
          if ((yield _this7.load(_this7._yapi.defaultCacheValidity)) != _this7._yapi.SUCCESS) {
            return Y_REMOTENAME_INVALID;
          }
        }
        return _this7._remoteName;
      })();
    }
    get_mute() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        if (_this8._cacheExpiration <= _this8._yapi.GetTickCount()) {
          if ((yield _this8.load(_this8._yapi.defaultCacheValidity)) != _this8._yapi.SUCCESS) {
            return Y_MUTE_INVALID;
          }
        }
        return _this8._mute;
      })();
    }
    set_mute(newval) {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this9._setAttr('mute', rest_val);
      })();
    }
    get_preAmplifier() {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        if (_this10._cacheExpiration <= _this10._yapi.GetTickCount()) {
          if ((yield _this10.load(_this10._yapi.defaultCacheValidity)) != _this10._yapi.SUCCESS) {
            return Y_PREAMPLIFIER_INVALID;
          }
        }
        return _this10._preAmplifier;
      })();
    }
    set_preAmplifier(newval) {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this11._setAttr('preAmplifier', rest_val);
      })();
    }
    get_volume() {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        if (_this12._cacheExpiration <= _this12._yapi.GetTickCount()) {
          if ((yield _this12.load(_this12._yapi.defaultCacheValidity)) != _this12._yapi.SUCCESS) {
            return Y_VOLUME_INVALID;
          }
        }
        return _this12._volume;
      })();
    }
    set_volume(newval) {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this13._setAttr('volume', rest_val);
      })();
    }
    get_linkState() {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        if (_this14._cacheExpiration <= _this14._yapi.GetTickCount()) {
          if ((yield _this14.load(_this14._yapi.defaultCacheValidity)) != _this14._yapi.SUCCESS) {
            return Y_LINKSTATE_INVALID;
          }
        }
        return _this14._linkState;
      })();
    }
    get_linkQuality() {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        if (_this15._cacheExpiration <= _this15._yapi.GetTickCount()) {
          if ((yield _this15.load(_this15._yapi.defaultCacheValidity)) != _this15._yapi.SUCCESS) {
            return Y_LINKQUALITY_INVALID;
          }
        }
        return _this15._linkQuality;
      })();
    }
    get_command() {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        if (_this16._cacheExpiration <= _this16._yapi.GetTickCount()) {
          if ((yield _this16.load(_this16._yapi.defaultCacheValidity)) != _this16._yapi.SUCCESS) {
            return Y_COMMAND_INVALID;
          }
        }
        return _this16._command;
      })();
    }
    set_command(newval) {
      var _this17 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this17._setAttr('command', rest_val);
      })();
    }
    static FindBluetoothLink(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('BluetoothLink', func);
      if (obj == null) {
        obj = new YBluetoothLink(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('BluetoothLink', func, obj);
      }
      return obj;
    }
    static FindBluetoothLinkInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'BluetoothLink', func);
      if (obj == null) {
        obj = new YBluetoothLink(yctx, func);
        _yocto_api.YFunction._AddToCache('BluetoothLink', func, obj);
      }
      return obj;
    }
    connect() {
      var _this18 = this;
      return _asyncToGenerator(function*() {
        return yield _this18.set_command('C');
      })();
    }
    disconnect() {
      var _this19 = this;
      return _asyncToGenerator(function*() {
        return yield _this19.set_command('D');
      })();
    }
    nextBluetoothLink() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YBluetoothLink.FindBluetoothLinkInContext(this._yapi, next_hwid);
    }
    static FirstBluetoothLink() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('BluetoothLink');
      if (next_hwid == null)
        return null;
      return YBluetoothLink.FindBluetoothLink(next_hwid);
    }
    static FirstBluetoothLinkInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('BluetoothLink');
      if (next_hwid == null)
        return null;
      return YBluetoothLink.FindBluetoothLinkInContext(yctx, next_hwid);
    }
  }
  exports.YBluetoothLink = YBluetoothLink;
  class YBluetoothLinkProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_ownAddress() {
      return this.liveFunc._ownAddress;
    }
    get_pairingPin() {
      return this.liveFunc._pairingPin;
    }
    set_pairingPin(newval) {
      this.liveFunc.set_pairingPin(newval);
      return this._yapi.SUCCESS;
    }
    get_remoteAddress() {
      return this.liveFunc._remoteAddress;
    }
    set_remoteAddress(newval) {
      this.liveFunc.set_remoteAddress(newval);
      return this._yapi.SUCCESS;
    }
    get_remoteName() {
      return this.liveFunc._remoteName;
    }
    get_mute() {
      return this.liveFunc._mute;
    }
    set_mute(newval) {
      this.liveFunc.set_mute(newval);
      return this._yapi.SUCCESS;
    }
    get_preAmplifier() {
      return this.liveFunc._preAmplifier;
    }
    set_preAmplifier(newval) {
      this.liveFunc.set_preAmplifier(newval);
      return this._yapi.SUCCESS;
    }
    get_volume() {
      return this.liveFunc._volume;
    }
    set_volume(newval) {
      this.liveFunc.set_volume(newval);
      return this._yapi.SUCCESS;
    }
    get_linkState() {
      return this.liveFunc._linkState;
    }
    get_linkQuality() {
      return this.liveFunc._linkQuality;
    }
    get_command() {
      return this.liveFunc._command;
    }
    set_command(newval) {
      this.liveFunc.set_command(newval);
      return this._yapi.SUCCESS;
    }
    connect() {
      this.liveFunc.connect();
      return _yocto_api.YAPI_SUCCESS;
    }
    disconnect() {
      this.liveFunc.disconnect();
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YBluetoothLinkProxy = YBluetoothLinkProxy;
  function yFindBluetoothLink(func) {
    return YBluetoothLink.FindBluetoothLink(func);
  }
  function yFirstBluetoothLink() {
    return YBluetoothLink.FirstBluetoothLink();
  }
  return module.exports;
});

$__System.registerDynamic("9", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YBuzzerProxy = exports.YBuzzer = exports.Y_COMMAND_INVALID = exports.Y_PLAYSEQSIGNATURE_INVALID = exports.Y_PLAYSEQMAXSIZE_INVALID = exports.Y_PLAYSEQSIZE_INVALID = exports.Y_VOLUME_INVALID = exports.Y_FREQUENCY_INVALID = undefined;
  exports.yFindBuzzer = yFindBuzzer;
  exports.yFirstBuzzer = yFirstBuzzer;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_FREQUENCY_INVALID = exports.Y_FREQUENCY_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_VOLUME_INVALID = exports.Y_VOLUME_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_PLAYSEQSIZE_INVALID = exports.Y_PLAYSEQSIZE_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_PLAYSEQMAXSIZE_INVALID = exports.Y_PLAYSEQMAXSIZE_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_PLAYSEQSIGNATURE_INVALID = exports.Y_PLAYSEQSIGNATURE_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_COMMAND_INVALID = exports.Y_COMMAND_INVALID = _yocto_api.YAPI.INVALID_STRING;
  class YBuzzer extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Buzzer';
      this._frequency = Y_FREQUENCY_INVALID;
      this._volume = Y_VOLUME_INVALID;
      this._playSeqSize = Y_PLAYSEQSIZE_INVALID;
      this._playSeqMaxSize = Y_PLAYSEQMAXSIZE_INVALID;
      this._playSeqSignature = Y_PLAYSEQSIGNATURE_INVALID;
      this._command = Y_COMMAND_INVALID;
      this.imm_setConst({
        FREQUENCY_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        VOLUME_INVALID: _yocto_api.YAPI.INVALID_UINT,
        PLAYSEQSIZE_INVALID: _yocto_api.YAPI.INVALID_UINT,
        PLAYSEQMAXSIZE_INVALID: _yocto_api.YAPI.INVALID_UINT,
        PLAYSEQSIGNATURE_INVALID: _yocto_api.YAPI.INVALID_UINT,
        COMMAND_INVALID: _yocto_api.YAPI.INVALID_STRING
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YBuzzerProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'frequency':
          this._frequency = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'volume':
          this._volume = parseInt(val);
          return 1;
        case 'playSeqSize':
          this._playSeqSize = parseInt(val);
          return 1;
        case 'playSeqMaxSize':
          this._playSeqMaxSize = parseInt(val);
          return 1;
        case 'playSeqSignature':
          this._playSeqSignature = parseInt(val);
          return 1;
        case 'command':
          this._command = val;
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    set_frequency(newval) {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this2._setAttr('frequency', rest_val);
      })();
    }
    get_frequency() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        if (_this3._cacheExpiration <= _this3._yapi.GetTickCount()) {
          if ((yield _this3.load(_this3._yapi.defaultCacheValidity)) != _this3._yapi.SUCCESS) {
            return Y_FREQUENCY_INVALID;
          }
        }
        return _this3._frequency;
      })();
    }
    get_volume() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_VOLUME_INVALID;
          }
        }
        return _this4._volume;
      })();
    }
    set_volume(newval) {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this5._setAttr('volume', rest_val);
      })();
    }
    get_playSeqSize() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_PLAYSEQSIZE_INVALID;
          }
        }
        return _this6._playSeqSize;
      })();
    }
    get_playSeqMaxSize() {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        if (_this7._cacheExpiration == 0) {
          if ((yield _this7.load(_this7._yapi.defaultCacheValidity)) != _this7._yapi.SUCCESS) {
            return Y_PLAYSEQMAXSIZE_INVALID;
          }
        }
        return _this7._playSeqMaxSize;
      })();
    }
    get_playSeqSignature() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        if (_this8._cacheExpiration <= _this8._yapi.GetTickCount()) {
          if ((yield _this8.load(_this8._yapi.defaultCacheValidity)) != _this8._yapi.SUCCESS) {
            return Y_PLAYSEQSIGNATURE_INVALID;
          }
        }
        return _this8._playSeqSignature;
      })();
    }
    get_command() {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        if (_this9._cacheExpiration <= _this9._yapi.GetTickCount()) {
          if ((yield _this9.load(_this9._yapi.defaultCacheValidity)) != _this9._yapi.SUCCESS) {
            return Y_COMMAND_INVALID;
          }
        }
        return _this9._command;
      })();
    }
    set_command(newval) {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this10._setAttr('command', rest_val);
      })();
    }
    static FindBuzzer(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Buzzer', func);
      if (obj == null) {
        obj = new YBuzzer(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Buzzer', func, obj);
      }
      return obj;
    }
    static FindBuzzerInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Buzzer', func);
      if (obj == null) {
        obj = new YBuzzer(yctx, func);
        _yocto_api.YFunction._AddToCache('Buzzer', func, obj);
      }
      return obj;
    }
    sendCommand(command) {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        return yield _this11.set_command(command);
      })();
    }
    addFreqMoveToPlaySeq(freq, msDelay) {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        return yield _this12.sendCommand('A' + String(Math.round(freq)) + ',' + String(Math.round(msDelay)));
      })();
    }
    addPulseToPlaySeq(freq, msDuration) {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        return yield _this13.sendCommand('B' + String(Math.round(freq)) + ',' + String(Math.round(msDuration)));
      })();
    }
    addVolMoveToPlaySeq(volume, msDuration) {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        return yield _this14.sendCommand('C' + String(Math.round(volume)) + ',' + String(Math.round(msDuration)));
      })();
    }
    startPlaySeq() {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        return yield _this15.sendCommand('S');
      })();
    }
    stopPlaySeq() {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        return yield _this16.sendCommand('X');
      })();
    }
    resetPlaySeq() {
      var _this17 = this;
      return _asyncToGenerator(function*() {
        return yield _this17.sendCommand('Z');
      })();
    }
    pulse(frequency, duration) {
      var _this18 = this;
      return _asyncToGenerator(function*() {
        return yield _this18.set_command('P' + String(Math.round(frequency)) + ',' + String(Math.round(duration)));
      })();
    }
    freqMove(frequency, duration) {
      var _this19 = this;
      return _asyncToGenerator(function*() {
        return yield _this19.set_command('F' + String(Math.round(frequency)) + ',' + String(Math.round(duration)));
      })();
    }
    volumeMove(volume, duration) {
      var _this20 = this;
      return _asyncToGenerator(function*() {
        return yield _this20.set_command('V' + String(Math.round(volume)) + ',' + String(Math.round(duration)));
      })();
    }
    nextBuzzer() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YBuzzer.FindBuzzerInContext(this._yapi, next_hwid);
    }
    static FirstBuzzer() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Buzzer');
      if (next_hwid == null)
        return null;
      return YBuzzer.FindBuzzer(next_hwid);
    }
    static FirstBuzzerInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Buzzer');
      if (next_hwid == null)
        return null;
      return YBuzzer.FindBuzzerInContext(yctx, next_hwid);
    }
  }
  exports.YBuzzer = YBuzzer;
  class YBuzzerProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    set_frequency(newval) {
      this.liveFunc.set_frequency(newval);
      return this._yapi.SUCCESS;
    }
    get_frequency() {
      return this.liveFunc._frequency;
    }
    get_volume() {
      return this.liveFunc._volume;
    }
    set_volume(newval) {
      this.liveFunc.set_volume(newval);
      return this._yapi.SUCCESS;
    }
    get_playSeqSize() {
      return this.liveFunc._playSeqSize;
    }
    get_playSeqMaxSize() {
      return this.liveFunc._playSeqMaxSize;
    }
    get_playSeqSignature() {
      return this.liveFunc._playSeqSignature;
    }
    get_command() {
      return this.liveFunc._command;
    }
    set_command(newval) {
      this.liveFunc.set_command(newval);
      return this._yapi.SUCCESS;
    }
    sendCommand(command) {
      this.liveFunc.sendCommand(command);
      return _yocto_api.YAPI_SUCCESS;
    }
    addFreqMoveToPlaySeq(freq, msDelay) {
      this.liveFunc.addFreqMoveToPlaySeq(freq, msDelay);
      return _yocto_api.YAPI_SUCCESS;
    }
    addPulseToPlaySeq(freq, msDuration) {
      this.liveFunc.addPulseToPlaySeq(freq, msDuration);
      return _yocto_api.YAPI_SUCCESS;
    }
    addVolMoveToPlaySeq(volume, msDuration) {
      this.liveFunc.addVolMoveToPlaySeq(volume, msDuration);
      return _yocto_api.YAPI_SUCCESS;
    }
    startPlaySeq() {
      this.liveFunc.startPlaySeq();
      return _yocto_api.YAPI_SUCCESS;
    }
    stopPlaySeq() {
      this.liveFunc.stopPlaySeq();
      return _yocto_api.YAPI_SUCCESS;
    }
    resetPlaySeq() {
      this.liveFunc.resetPlaySeq();
      return _yocto_api.YAPI_SUCCESS;
    }
    pulse(frequency, duration) {
      this.liveFunc.pulse(frequency, duration);
      return _yocto_api.YAPI_SUCCESS;
    }
    freqMove(frequency, duration) {
      this.liveFunc.freqMove(frequency, duration);
      return _yocto_api.YAPI_SUCCESS;
    }
    volumeMove(volume, duration) {
      this.liveFunc.volumeMove(volume, duration);
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YBuzzerProxy = YBuzzerProxy;
  function yFindBuzzer(func) {
    return YBuzzer.FindBuzzer(func);
  }
  function yFirstBuzzer() {
    return YBuzzer.FirstBuzzer();
  }
  return module.exports;
});

$__System.registerDynamic("a", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YCarbonDioxideProxy = exports.YCarbonDioxide = exports.Y_COMMAND_INVALID = exports.Y_ABCPERIOD_INVALID = undefined;
  exports.yFindCarbonDioxide = yFindCarbonDioxide;
  exports.yFirstCarbonDioxide = yFirstCarbonDioxide;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_ABCPERIOD_INVALID = exports.Y_ABCPERIOD_INVALID = _yocto_api.YAPI.INVALID_INT;
  var Y_COMMAND_INVALID = exports.Y_COMMAND_INVALID = _yocto_api.YAPI.INVALID_STRING;
  class YCarbonDioxide extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'CarbonDioxide';
      this._abcPeriod = Y_ABCPERIOD_INVALID;
      this._command = Y_COMMAND_INVALID;
      this.imm_setConst({
        ABCPERIOD_INVALID: _yocto_api.YAPI.INVALID_INT,
        COMMAND_INVALID: _yocto_api.YAPI.INVALID_STRING
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YCarbonDioxideProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'abcPeriod':
          this._abcPeriod = parseInt(val);
          return 1;
        case 'command':
          this._command = val;
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_abcPeriod() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_ABCPERIOD_INVALID;
          }
        }
        return _this2._abcPeriod;
      })();
    }
    set_abcPeriod(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this3._setAttr('abcPeriod', rest_val);
      })();
    }
    get_command() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_COMMAND_INVALID;
          }
        }
        return _this4._command;
      })();
    }
    set_command(newval) {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this5._setAttr('command', rest_val);
      })();
    }
    static FindCarbonDioxide(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('CarbonDioxide', func);
      if (obj == null) {
        obj = new YCarbonDioxide(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('CarbonDioxide', func, obj);
      }
      return obj;
    }
    static FindCarbonDioxideInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'CarbonDioxide', func);
      if (obj == null) {
        obj = new YCarbonDioxide(yctx, func);
        _yocto_api.YFunction._AddToCache('CarbonDioxide', func, obj);
      }
      return obj;
    }
    triggetBaselineCalibration() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        return yield _this6.set_command('BC');
      })();
    }
    triggetZeroCalibration() {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        return yield _this7.set_command('ZC');
      })();
    }
    nextCarbonDioxide() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YCarbonDioxide.FindCarbonDioxideInContext(this._yapi, next_hwid);
    }
    static FirstCarbonDioxide() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('CarbonDioxide');
      if (next_hwid == null)
        return null;
      return YCarbonDioxide.FindCarbonDioxide(next_hwid);
    }
    static FirstCarbonDioxideInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('CarbonDioxide');
      if (next_hwid == null)
        return null;
      return YCarbonDioxide.FindCarbonDioxideInContext(yctx, next_hwid);
    }
  }
  exports.YCarbonDioxide = YCarbonDioxide;
  class YCarbonDioxideProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_abcPeriod() {
      return this.liveFunc._abcPeriod;
    }
    set_abcPeriod(newval) {
      this.liveFunc.set_abcPeriod(newval);
      return this._yapi.SUCCESS;
    }
    get_command() {
      return this.liveFunc._command;
    }
    set_command(newval) {
      this.liveFunc.set_command(newval);
      return this._yapi.SUCCESS;
    }
    triggetBaselineCalibration() {
      this.liveFunc.triggetBaselineCalibration();
      return _yocto_api.YAPI_SUCCESS;
    }
    triggetZeroCalibration() {
      this.liveFunc.triggetZeroCalibration();
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YCarbonDioxideProxy = YCarbonDioxideProxy;
  function yFindCarbonDioxide(func) {
    return YCarbonDioxide.FindCarbonDioxide(func);
  }
  function yFirstCarbonDioxide() {
    return YCarbonDioxide.FirstCarbonDioxide();
  }
  return module.exports;
});

$__System.registerDynamic("b", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YCellularProxy = exports.YCellular = exports.Y_COMMAND_INVALID = exports.Y_APNSECRET_INVALID = exports.Y_APN_INVALID = exports.Y_LOCKEDOPERATOR_INVALID = exports.Y_PIN_INVALID = exports.Y_MESSAGE_INVALID = exports.Y_IMSI_INVALID = exports.Y_CELLIDENTIFIER_INVALID = exports.Y_CELLOPERATOR_INVALID = exports.Y_LINKQUALITY_INVALID = exports.Y_ENABLEDATA_INVALID = exports.Y_ENABLEDATA_NEVER = exports.Y_ENABLEDATA_ROAMING = exports.Y_ENABLEDATA_HOMENETWORK = exports.Y_AIRPLANEMODE_INVALID = exports.Y_AIRPLANEMODE_ON = exports.Y_AIRPLANEMODE_OFF = exports.Y_CELLTYPE_INVALID = exports.Y_CELLTYPE_CDMA = exports.Y_CELLTYPE_NONE = exports.Y_CELLTYPE_HSDPA = exports.Y_CELLTYPE_WCDMA = exports.Y_CELLTYPE_EGPRS = exports.Y_CELLTYPE_GPRS = exports.YCellRecord = undefined;
  exports.yFindCellular = yFindCellular;
  exports.yFirstCellular = yFirstCellular;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  class YCellRecord {
    constructor(int_mcc, int_mnc, int_lac, int_cellId, int_dbm, int_tad, str_oper) {
      this._oper = '';
      this._mcc = 0;
      this._mnc = 0;
      this._lac = 0;
      this._cid = 0;
      this._dbm = 0;
      this._tad = 0;
      this._oper = str_oper;
      this._mcc = int_mcc;
      this._mnc = int_mnc;
      this._lac = int_lac;
      this._cid = int_cellId;
      this._dbm = int_dbm;
      this._tad = int_tad;
    }
    get_cellOperator() {
      return this._oper;
    }
    get_mobileCountryCode() {
      return this._mcc;
    }
    get_mobileNetworkCode() {
      return this._mnc;
    }
    get_locationAreaCode() {
      return this._lac;
    }
    get_cellId() {
      return this._cid;
    }
    get_signalStrength() {
      return this._dbm;
    }
    get_timingAdvance() {
      return this._tad;
    }
  }
  exports.YCellRecord = YCellRecord;
  var Y_CELLTYPE_GPRS = exports.Y_CELLTYPE_GPRS = 0;
  var Y_CELLTYPE_EGPRS = exports.Y_CELLTYPE_EGPRS = 1;
  var Y_CELLTYPE_WCDMA = exports.Y_CELLTYPE_WCDMA = 2;
  var Y_CELLTYPE_HSDPA = exports.Y_CELLTYPE_HSDPA = 3;
  var Y_CELLTYPE_NONE = exports.Y_CELLTYPE_NONE = 4;
  var Y_CELLTYPE_CDMA = exports.Y_CELLTYPE_CDMA = 5;
  var Y_CELLTYPE_INVALID = exports.Y_CELLTYPE_INVALID = -1;
  var Y_AIRPLANEMODE_OFF = exports.Y_AIRPLANEMODE_OFF = 0;
  var Y_AIRPLANEMODE_ON = exports.Y_AIRPLANEMODE_ON = 1;
  var Y_AIRPLANEMODE_INVALID = exports.Y_AIRPLANEMODE_INVALID = -1;
  var Y_ENABLEDATA_HOMENETWORK = exports.Y_ENABLEDATA_HOMENETWORK = 0;
  var Y_ENABLEDATA_ROAMING = exports.Y_ENABLEDATA_ROAMING = 1;
  var Y_ENABLEDATA_NEVER = exports.Y_ENABLEDATA_NEVER = 2;
  var Y_ENABLEDATA_INVALID = exports.Y_ENABLEDATA_INVALID = -1;
  var Y_LINKQUALITY_INVALID = exports.Y_LINKQUALITY_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_CELLOPERATOR_INVALID = exports.Y_CELLOPERATOR_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_CELLIDENTIFIER_INVALID = exports.Y_CELLIDENTIFIER_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_IMSI_INVALID = exports.Y_IMSI_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_MESSAGE_INVALID = exports.Y_MESSAGE_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_PIN_INVALID = exports.Y_PIN_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_LOCKEDOPERATOR_INVALID = exports.Y_LOCKEDOPERATOR_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_APN_INVALID = exports.Y_APN_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_APNSECRET_INVALID = exports.Y_APNSECRET_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_COMMAND_INVALID = exports.Y_COMMAND_INVALID = _yocto_api.YAPI.INVALID_STRING;
  class YCellular extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Cellular';
      this._linkQuality = Y_LINKQUALITY_INVALID;
      this._cellOperator = Y_CELLOPERATOR_INVALID;
      this._cellIdentifier = Y_CELLIDENTIFIER_INVALID;
      this._cellType = Y_CELLTYPE_INVALID;
      this._imsi = Y_IMSI_INVALID;
      this._message = Y_MESSAGE_INVALID;
      this._pin = Y_PIN_INVALID;
      this._lockedOperator = Y_LOCKEDOPERATOR_INVALID;
      this._airplaneMode = Y_AIRPLANEMODE_INVALID;
      this._enableData = Y_ENABLEDATA_INVALID;
      this._apn = Y_APN_INVALID;
      this._apnSecret = Y_APNSECRET_INVALID;
      this._command = Y_COMMAND_INVALID;
      this.imm_setConst({
        LINKQUALITY_INVALID: _yocto_api.YAPI.INVALID_UINT,
        CELLOPERATOR_INVALID: _yocto_api.YAPI.INVALID_STRING,
        CELLIDENTIFIER_INVALID: _yocto_api.YAPI.INVALID_STRING,
        CELLTYPE_GPRS: 0,
        CELLTYPE_EGPRS: 1,
        CELLTYPE_WCDMA: 2,
        CELLTYPE_HSDPA: 3,
        CELLTYPE_NONE: 4,
        CELLTYPE_CDMA: 5,
        CELLTYPE_INVALID: -1,
        IMSI_INVALID: _yocto_api.YAPI.INVALID_STRING,
        MESSAGE_INVALID: _yocto_api.YAPI.INVALID_STRING,
        PIN_INVALID: _yocto_api.YAPI.INVALID_STRING,
        LOCKEDOPERATOR_INVALID: _yocto_api.YAPI.INVALID_STRING,
        AIRPLANEMODE_OFF: 0,
        AIRPLANEMODE_ON: 1,
        AIRPLANEMODE_INVALID: -1,
        ENABLEDATA_HOMENETWORK: 0,
        ENABLEDATA_ROAMING: 1,
        ENABLEDATA_NEVER: 2,
        ENABLEDATA_INVALID: -1,
        APN_INVALID: _yocto_api.YAPI.INVALID_STRING,
        APNSECRET_INVALID: _yocto_api.YAPI.INVALID_STRING,
        COMMAND_INVALID: _yocto_api.YAPI.INVALID_STRING
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YCellularProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'linkQuality':
          this._linkQuality = parseInt(val);
          return 1;
        case 'cellOperator':
          this._cellOperator = val;
          return 1;
        case 'cellIdentifier':
          this._cellIdentifier = val;
          return 1;
        case 'cellType':
          this._cellType = parseInt(val);
          return 1;
        case 'imsi':
          this._imsi = val;
          return 1;
        case 'message':
          this._message = val;
          return 1;
        case 'pin':
          this._pin = val;
          return 1;
        case 'lockedOperator':
          this._lockedOperator = val;
          return 1;
        case 'airplaneMode':
          this._airplaneMode = parseInt(val);
          return 1;
        case 'enableData':
          this._enableData = parseInt(val);
          return 1;
        case 'apn':
          this._apn = val;
          return 1;
        case 'apnSecret':
          this._apnSecret = val;
          return 1;
        case 'command':
          this._command = val;
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_linkQuality() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_LINKQUALITY_INVALID;
          }
        }
        return _this2._linkQuality;
      })();
    }
    get_cellOperator() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        if (_this3._cacheExpiration <= _this3._yapi.GetTickCount()) {
          if ((yield _this3.load(_this3._yapi.defaultCacheValidity)) != _this3._yapi.SUCCESS) {
            return Y_CELLOPERATOR_INVALID;
          }
        }
        return _this3._cellOperator;
      })();
    }
    get_cellIdentifier() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_CELLIDENTIFIER_INVALID;
          }
        }
        return _this4._cellIdentifier;
      })();
    }
    get_cellType() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        if (_this5._cacheExpiration <= _this5._yapi.GetTickCount()) {
          if ((yield _this5.load(_this5._yapi.defaultCacheValidity)) != _this5._yapi.SUCCESS) {
            return Y_CELLTYPE_INVALID;
          }
        }
        return _this5._cellType;
      })();
    }
    get_imsi() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_IMSI_INVALID;
          }
        }
        return _this6._imsi;
      })();
    }
    get_message() {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        if (_this7._cacheExpiration <= _this7._yapi.GetTickCount()) {
          if ((yield _this7.load(_this7._yapi.defaultCacheValidity)) != _this7._yapi.SUCCESS) {
            return Y_MESSAGE_INVALID;
          }
        }
        return _this7._message;
      })();
    }
    get_pin() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        if (_this8._cacheExpiration <= _this8._yapi.GetTickCount()) {
          if ((yield _this8.load(_this8._yapi.defaultCacheValidity)) != _this8._yapi.SUCCESS) {
            return Y_PIN_INVALID;
          }
        }
        return _this8._pin;
      })();
    }
    set_pin(newval) {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this9._setAttr('pin', rest_val);
      })();
    }
    get_lockedOperator() {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        if (_this10._cacheExpiration <= _this10._yapi.GetTickCount()) {
          if ((yield _this10.load(_this10._yapi.defaultCacheValidity)) != _this10._yapi.SUCCESS) {
            return Y_LOCKEDOPERATOR_INVALID;
          }
        }
        return _this10._lockedOperator;
      })();
    }
    set_lockedOperator(newval) {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this11._setAttr('lockedOperator', rest_val);
      })();
    }
    get_airplaneMode() {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        if (_this12._cacheExpiration <= _this12._yapi.GetTickCount()) {
          if ((yield _this12.load(_this12._yapi.defaultCacheValidity)) != _this12._yapi.SUCCESS) {
            return Y_AIRPLANEMODE_INVALID;
          }
        }
        return _this12._airplaneMode;
      })();
    }
    set_airplaneMode(newval) {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this13._setAttr('airplaneMode', rest_val);
      })();
    }
    get_enableData() {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        if (_this14._cacheExpiration <= _this14._yapi.GetTickCount()) {
          if ((yield _this14.load(_this14._yapi.defaultCacheValidity)) != _this14._yapi.SUCCESS) {
            return Y_ENABLEDATA_INVALID;
          }
        }
        return _this14._enableData;
      })();
    }
    set_enableData(newval) {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this15._setAttr('enableData', rest_val);
      })();
    }
    get_apn() {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        if (_this16._cacheExpiration <= _this16._yapi.GetTickCount()) {
          if ((yield _this16.load(_this16._yapi.defaultCacheValidity)) != _this16._yapi.SUCCESS) {
            return Y_APN_INVALID;
          }
        }
        return _this16._apn;
      })();
    }
    set_apn(newval) {
      var _this17 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this17._setAttr('apn', rest_val);
      })();
    }
    get_apnSecret() {
      var _this18 = this;
      return _asyncToGenerator(function*() {
        if (_this18._cacheExpiration <= _this18._yapi.GetTickCount()) {
          if ((yield _this18.load(_this18._yapi.defaultCacheValidity)) != _this18._yapi.SUCCESS) {
            return Y_APNSECRET_INVALID;
          }
        }
        return _this18._apnSecret;
      })();
    }
    set_apnSecret(newval) {
      var _this19 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this19._setAttr('apnSecret', rest_val);
      })();
    }
    get_command() {
      var _this20 = this;
      return _asyncToGenerator(function*() {
        if (_this20._cacheExpiration <= _this20._yapi.GetTickCount()) {
          if ((yield _this20.load(_this20._yapi.defaultCacheValidity)) != _this20._yapi.SUCCESS) {
            return Y_COMMAND_INVALID;
          }
        }
        return _this20._command;
      })();
    }
    set_command(newval) {
      var _this21 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this21._setAttr('command', rest_val);
      })();
    }
    static FindCellular(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Cellular', func);
      if (obj == null) {
        obj = new YCellular(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Cellular', func, obj);
      }
      return obj;
    }
    static FindCellularInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Cellular', func);
      if (obj == null) {
        obj = new YCellular(yctx, func);
        _yocto_api.YFunction._AddToCache('Cellular', func, obj);
      }
      return obj;
    }
    sendPUK(puk, newPin) {
      var _this22 = this;
      return _asyncToGenerator(function*() {
        let gsmMsg;
        gsmMsg = yield _this22.get_message();
        if (!(gsmMsg == 'Enter SIM PUK')) {
          return _this22._throw(_this22._yapi.INVALID_ARGUMENT, 'PUK not expected at this time', _this22._yapi.INVALID_ARGUMENT);
        }
        if (newPin == '') {
          return yield _this22.set_command('AT+CPIN=' + puk + ',0000;+CLCK=SC,0,0000');
        }
        return yield _this22.set_command('AT+CPIN=' + puk + ',' + newPin);
      })();
    }
    set_apnAuth(username, password) {
      var _this23 = this;
      return _asyncToGenerator(function*() {
        return yield _this23.set_apnSecret(username + ',' + password);
      })();
    }
    _AT(cmd) {
      var _this24 = this;
      return _asyncToGenerator(function*() {
        let chrPos;
        let cmdLen;
        let waitMore;
        let res;
        let buff;
        let bufflen;
        let buffstr;
        let buffstrlen;
        let idx;
        let suffixlen;
        cmdLen = cmd.length;
        chrPos = cmd.indexOf('#');
        while (chrPos >= 0) {
          cmd = cmd.substr(0, chrPos) + '' + String.fromCharCode(37) + '23' + cmd.substr(chrPos + 1, cmdLen - chrPos - 1);
          cmdLen = cmdLen + 2;
          chrPos = cmd.indexOf('#');
        }
        chrPos = cmd.indexOf('+');
        while (chrPos >= 0) {
          cmd = cmd.substr(0, chrPos) + '' + String.fromCharCode(37) + '2B' + cmd.substr(chrPos + 1, cmdLen - chrPos - 1);
          cmdLen = cmdLen + 2;
          chrPos = cmd.indexOf('+');
        }
        chrPos = cmd.indexOf('=');
        while (chrPos >= 0) {
          cmd = cmd.substr(0, chrPos) + '' + String.fromCharCode(37) + '3D' + cmd.substr(chrPos + 1, cmdLen - chrPos - 1);
          cmdLen = cmdLen + 2;
          chrPos = cmd.indexOf('=');
        }
        cmd = 'at.txt?cmd=' + cmd;
        res = '';
        waitMore = 24;
        while (waitMore > 0) {
          buff = yield _this24._download(cmd);
          bufflen = buff.length;
          buffstr = _this24._yapi.imm_bin2str(buff);
          buffstrlen = buffstr.length;
          idx = bufflen - 1;
          while (idx > 0 && buff[idx] != 64 && buff[idx] != 10 && buff[idx] != 13) {
            idx = idx - 1;
          }
          if (buff[idx] == 64) {
            suffixlen = bufflen - idx;
            cmd = 'at.txt?cmd=' + buffstr.substr(buffstrlen - suffixlen, suffixlen);
            buffstr = buffstr.substr(0, buffstrlen - suffixlen);
            waitMore = waitMore - 1;
          } else {
            waitMore = 0;
          }
          res = res + '' + buffstr;
        }
        return res;
      })();
    }
    get_availableOperators() {
      var _this25 = this;
      return _asyncToGenerator(function*() {
        let cops;
        let idx;
        let slen;
        let res = [];
        cops = yield _this25._AT('+COPS=?');
        slen = cops.length;
        res.length = 0;
        idx = cops.indexOf('(');
        while (idx >= 0) {
          slen = slen - (idx + 1);
          cops = cops.substr(idx + 1, slen);
          idx = cops.indexOf('"');
          if (idx > 0) {
            slen = slen - (idx + 1);
            cops = cops.substr(idx + 1, slen);
            idx = cops.indexOf('"');
            if (idx > 0) {
              res.push(cops.substr(0, idx));
            }
          }
          idx = cops.indexOf('(');
        }
        return res;
      })();
    }
    quickCellSurvey() {
      var _this26 = this;
      return _asyncToGenerator(function*() {
        let moni;
        let recs = [];
        let llen;
        let mccs;
        let mcc;
        let mncs;
        let mnc;
        let lac;
        let cellId;
        let dbms;
        let dbm;
        let tads;
        let tad;
        let oper;
        let res = [];
        moni = yield _this26._AT('+CCED=0;#MONI=7;#MONI');
        mccs = moni.substr(7, 3);
        if (mccs.substr(0, 1) == '0') {
          mccs = mccs.substr(1, 2);
        }
        if (mccs.substr(0, 1) == '0') {
          mccs = mccs.substr(1, 1);
        }
        mcc = _this26._yapi.imm_atoi(mccs);
        mncs = moni.substr(11, 3);
        if (mncs.substr(2, 1) == ',') {
          mncs = mncs.substr(0, 2);
        }
        if (mncs.substr(0, 1) == '0') {
          mncs = mncs.substr(1, mncs.length - 1);
        }
        mnc = _this26._yapi.imm_atoi(mncs);
        recs = moni.split('#');
        res.length = 0;
        for (let ii in recs) {
          llen = recs[ii].length - 2;
          if (llen >= 44) {
            if (recs[ii].substr(41, 3) == 'dbm') {
              lac = parseInt(recs[ii].substr(16, 4), 16);
              cellId = parseInt(recs[ii].substr(23, 4), 16);
              dbms = recs[ii].substr(37, 4);
              if (dbms.substr(0, 1) == ' ') {
                dbms = dbms.substr(1, 3);
              }
              dbm = _this26._yapi.imm_atoi(dbms);
              if (llen > 66) {
                tads = recs[ii].substr(54, 2);
                if (tads.substr(0, 1) == ' ') {
                  tads = tads.substr(1, 3);
                }
                tad = _this26._yapi.imm_atoi(tads);
                oper = recs[ii].substr(66, llen - 66);
              } else {
                tad = -1;
                oper = '';
              }
              if (lac < 65535) {
                res.push(new YCellRecord(mcc, mnc, lac, cellId, dbm, tad, oper));
              }
            }
          }
          ;
          ;
        }
        return res;
      })();
    }
    nextCellular() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YCellular.FindCellularInContext(this._yapi, next_hwid);
    }
    static FirstCellular() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Cellular');
      if (next_hwid == null)
        return null;
      return YCellular.FindCellular(next_hwid);
    }
    static FirstCellularInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Cellular');
      if (next_hwid == null)
        return null;
      return YCellular.FindCellularInContext(yctx, next_hwid);
    }
  }
  exports.YCellular = YCellular;
  class YCellularProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_linkQuality() {
      return this.liveFunc._linkQuality;
    }
    get_cellOperator() {
      return this.liveFunc._cellOperator;
    }
    get_cellIdentifier() {
      return this.liveFunc._cellIdentifier;
    }
    get_cellType() {
      return this.liveFunc._cellType;
    }
    get_imsi() {
      return this.liveFunc._imsi;
    }
    get_message() {
      return this.liveFunc._message;
    }
    get_pin() {
      return this.liveFunc._pin;
    }
    set_pin(newval) {
      this.liveFunc.set_pin(newval);
      return this._yapi.SUCCESS;
    }
    get_lockedOperator() {
      return this.liveFunc._lockedOperator;
    }
    set_lockedOperator(newval) {
      this.liveFunc.set_lockedOperator(newval);
      return this._yapi.SUCCESS;
    }
    get_airplaneMode() {
      return this.liveFunc._airplaneMode;
    }
    set_airplaneMode(newval) {
      this.liveFunc.set_airplaneMode(newval);
      return this._yapi.SUCCESS;
    }
    get_enableData() {
      return this.liveFunc._enableData;
    }
    set_enableData(newval) {
      this.liveFunc.set_enableData(newval);
      return this._yapi.SUCCESS;
    }
    get_apn() {
      return this.liveFunc._apn;
    }
    set_apn(newval) {
      this.liveFunc.set_apn(newval);
      return this._yapi.SUCCESS;
    }
    get_apnSecret() {
      return this.liveFunc._apnSecret;
    }
    set_apnSecret(newval) {
      this.liveFunc.set_apnSecret(newval);
      return this._yapi.SUCCESS;
    }
    get_command() {
      return this.liveFunc._command;
    }
    set_command(newval) {
      this.liveFunc.set_command(newval);
      return this._yapi.SUCCESS;
    }
    sendPUK(puk, newPin) {
      this.liveFunc.sendPUK(puk, newPin);
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YCellularProxy = YCellularProxy;
  function yFindCellular(func) {
    return YCellular.FindCellular(func);
  }
  function yFirstCellular() {
    return YCellular.FirstCellular();
  }
  return module.exports;
});

$__System.registerDynamic("c", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YColorLedProxy = exports.YColorLed = exports.Y_COMMAND_INVALID = exports.Y_BLINKSEQSIGNATURE_INVALID = exports.Y_BLINKSEQMAXSIZE_INVALID = exports.Y_BLINKSEQSIZE_INVALID = exports.Y_RGBCOLORATPOWERON_INVALID = exports.Y_HSLMOVE_INVALID = exports.Y_RGBMOVE_INVALID = exports.Y_HSLCOLOR_INVALID = exports.Y_RGBCOLOR_INVALID = undefined;
  exports.yFindColorLed = yFindColorLed;
  exports.yFirstColorLed = yFirstColorLed;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_RGBCOLOR_INVALID = exports.Y_RGBCOLOR_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_HSLCOLOR_INVALID = exports.Y_HSLCOLOR_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_RGBMOVE_INVALID = exports.Y_RGBMOVE_INVALID = null;
  var Y_HSLMOVE_INVALID = exports.Y_HSLMOVE_INVALID = null;
  var Y_RGBCOLORATPOWERON_INVALID = exports.Y_RGBCOLORATPOWERON_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_BLINKSEQSIZE_INVALID = exports.Y_BLINKSEQSIZE_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_BLINKSEQMAXSIZE_INVALID = exports.Y_BLINKSEQMAXSIZE_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_BLINKSEQSIGNATURE_INVALID = exports.Y_BLINKSEQSIGNATURE_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_COMMAND_INVALID = exports.Y_COMMAND_INVALID = _yocto_api.YAPI.INVALID_STRING;
  class YColorLed extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'ColorLed';
      this._rgbColor = Y_RGBCOLOR_INVALID;
      this._hslColor = Y_HSLCOLOR_INVALID;
      this._rgbMove = Y_RGBMOVE_INVALID;
      this._hslMove = Y_HSLMOVE_INVALID;
      this._rgbColorAtPowerOn = Y_RGBCOLORATPOWERON_INVALID;
      this._blinkSeqSize = Y_BLINKSEQSIZE_INVALID;
      this._blinkSeqMaxSize = Y_BLINKSEQMAXSIZE_INVALID;
      this._blinkSeqSignature = Y_BLINKSEQSIGNATURE_INVALID;
      this._command = Y_COMMAND_INVALID;
      this.imm_setConst({
        RGBCOLOR_INVALID: _yocto_api.YAPI.INVALID_UINT,
        HSLCOLOR_INVALID: _yocto_api.YAPI.INVALID_UINT,
        RGBCOLORATPOWERON_INVALID: _yocto_api.YAPI.INVALID_UINT,
        BLINKSEQSIZE_INVALID: _yocto_api.YAPI.INVALID_UINT,
        BLINKSEQMAXSIZE_INVALID: _yocto_api.YAPI.INVALID_UINT,
        BLINKSEQSIGNATURE_INVALID: _yocto_api.YAPI.INVALID_UINT,
        COMMAND_INVALID: _yocto_api.YAPI.INVALID_STRING
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YColorLedProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'rgbColor':
          this._rgbColor = parseInt(val);
          return 1;
        case 'hslColor':
          this._hslColor = parseInt(val);
          return 1;
        case 'rgbMove':
          this._rgbMove = val;
          return 1;
        case 'hslMove':
          this._hslMove = val;
          return 1;
        case 'rgbColorAtPowerOn':
          this._rgbColorAtPowerOn = parseInt(val);
          return 1;
        case 'blinkSeqSize':
          this._blinkSeqSize = parseInt(val);
          return 1;
        case 'blinkSeqMaxSize':
          this._blinkSeqMaxSize = parseInt(val);
          return 1;
        case 'blinkSeqSignature':
          this._blinkSeqSignature = parseInt(val);
          return 1;
        case 'command':
          this._command = val;
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_rgbColor() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_RGBCOLOR_INVALID;
          }
        }
        return _this2._rgbColor;
      })();
    }
    set_rgbColor(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = '0x' + newval.toString(16);
        return yield _this3._setAttr('rgbColor', rest_val);
      })();
    }
    get_hslColor() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_HSLCOLOR_INVALID;
          }
        }
        return _this4._hslColor;
      })();
    }
    set_hslColor(newval) {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = '0x' + newval.toString(16);
        return yield _this5._setAttr('hslColor', rest_val);
      })();
    }
    get_rgbMove() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_RGBMOVE_INVALID;
          }
        }
        return _this6._rgbMove;
      })();
    }
    set_rgbMove(newval) {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval.target) + ':' + String(newval.ms);
        return yield _this7._setAttr('rgbMove', rest_val);
      })();
    }
    rgbMove(rgb_target, ms_duration) {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(rgb_target) + ':' + String(ms_duration);
        return yield _this8._setAttr('rgbMove', rest_val);
      })();
    }
    get_hslMove() {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        if (_this9._cacheExpiration <= _this9._yapi.GetTickCount()) {
          if ((yield _this9.load(_this9._yapi.defaultCacheValidity)) != _this9._yapi.SUCCESS) {
            return Y_HSLMOVE_INVALID;
          }
        }
        return _this9._hslMove;
      })();
    }
    set_hslMove(newval) {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval.target) + ':' + String(newval.ms);
        return yield _this10._setAttr('hslMove', rest_val);
      })();
    }
    hslMove(hsl_target, ms_duration) {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(hsl_target) + ':' + String(ms_duration);
        return yield _this11._setAttr('hslMove', rest_val);
      })();
    }
    get_rgbColorAtPowerOn() {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        if (_this12._cacheExpiration <= _this12._yapi.GetTickCount()) {
          if ((yield _this12.load(_this12._yapi.defaultCacheValidity)) != _this12._yapi.SUCCESS) {
            return Y_RGBCOLORATPOWERON_INVALID;
          }
        }
        return _this12._rgbColorAtPowerOn;
      })();
    }
    set_rgbColorAtPowerOn(newval) {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = '0x' + newval.toString(16);
        return yield _this13._setAttr('rgbColorAtPowerOn', rest_val);
      })();
    }
    get_blinkSeqSize() {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        if (_this14._cacheExpiration <= _this14._yapi.GetTickCount()) {
          if ((yield _this14.load(_this14._yapi.defaultCacheValidity)) != _this14._yapi.SUCCESS) {
            return Y_BLINKSEQSIZE_INVALID;
          }
        }
        return _this14._blinkSeqSize;
      })();
    }
    get_blinkSeqMaxSize() {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        if (_this15._cacheExpiration == 0) {
          if ((yield _this15.load(_this15._yapi.defaultCacheValidity)) != _this15._yapi.SUCCESS) {
            return Y_BLINKSEQMAXSIZE_INVALID;
          }
        }
        return _this15._blinkSeqMaxSize;
      })();
    }
    get_blinkSeqSignature() {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        if (_this16._cacheExpiration <= _this16._yapi.GetTickCount()) {
          if ((yield _this16.load(_this16._yapi.defaultCacheValidity)) != _this16._yapi.SUCCESS) {
            return Y_BLINKSEQSIGNATURE_INVALID;
          }
        }
        return _this16._blinkSeqSignature;
      })();
    }
    get_command() {
      var _this17 = this;
      return _asyncToGenerator(function*() {
        if (_this17._cacheExpiration <= _this17._yapi.GetTickCount()) {
          if ((yield _this17.load(_this17._yapi.defaultCacheValidity)) != _this17._yapi.SUCCESS) {
            return Y_COMMAND_INVALID;
          }
        }
        return _this17._command;
      })();
    }
    set_command(newval) {
      var _this18 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this18._setAttr('command', rest_val);
      })();
    }
    static FindColorLed(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('ColorLed', func);
      if (obj == null) {
        obj = new YColorLed(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('ColorLed', func, obj);
      }
      return obj;
    }
    static FindColorLedInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'ColorLed', func);
      if (obj == null) {
        obj = new YColorLed(yctx, func);
        _yocto_api.YFunction._AddToCache('ColorLed', func, obj);
      }
      return obj;
    }
    sendCommand(command) {
      var _this19 = this;
      return _asyncToGenerator(function*() {
        return yield _this19.set_command(command);
      })();
    }
    addHslMoveToBlinkSeq(HSLcolor, msDelay) {
      var _this20 = this;
      return _asyncToGenerator(function*() {
        return yield _this20.sendCommand('H' + String(Math.round(HSLcolor)) + ',' + String(Math.round(msDelay)));
      })();
    }
    addRgbMoveToBlinkSeq(RGBcolor, msDelay) {
      var _this21 = this;
      return _asyncToGenerator(function*() {
        return yield _this21.sendCommand('R' + String(Math.round(RGBcolor)) + ',' + String(Math.round(msDelay)));
      })();
    }
    startBlinkSeq() {
      var _this22 = this;
      return _asyncToGenerator(function*() {
        return yield _this22.sendCommand('S');
      })();
    }
    stopBlinkSeq() {
      var _this23 = this;
      return _asyncToGenerator(function*() {
        return yield _this23.sendCommand('X');
      })();
    }
    resetBlinkSeq() {
      var _this24 = this;
      return _asyncToGenerator(function*() {
        return yield _this24.sendCommand('Z');
      })();
    }
    nextColorLed() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YColorLed.FindColorLedInContext(this._yapi, next_hwid);
    }
    static FirstColorLed() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('ColorLed');
      if (next_hwid == null)
        return null;
      return YColorLed.FindColorLed(next_hwid);
    }
    static FirstColorLedInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('ColorLed');
      if (next_hwid == null)
        return null;
      return YColorLed.FindColorLedInContext(yctx, next_hwid);
    }
  }
  exports.YColorLed = YColorLed;
  class YColorLedProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_rgbColor() {
      return this.liveFunc._rgbColor;
    }
    set_rgbColor(newval) {
      this.liveFunc.set_rgbColor(newval);
      return this._yapi.SUCCESS;
    }
    get_hslColor() {
      return this.liveFunc._hslColor;
    }
    set_hslColor(newval) {
      this.liveFunc.set_hslColor(newval);
      return this._yapi.SUCCESS;
    }
    get_rgbMove() {
      return this.liveFunc._rgbMove;
    }
    set_rgbMove(newval) {
      this.liveFunc.set_rgbMove(newval);
      return this._yapi.SUCCESS;
    }
    get_hslMove() {
      return this.liveFunc._hslMove;
    }
    set_hslMove(newval) {
      this.liveFunc.set_hslMove(newval);
      return this._yapi.SUCCESS;
    }
    get_rgbColorAtPowerOn() {
      return this.liveFunc._rgbColorAtPowerOn;
    }
    set_rgbColorAtPowerOn(newval) {
      this.liveFunc.set_rgbColorAtPowerOn(newval);
      return this._yapi.SUCCESS;
    }
    get_blinkSeqSize() {
      return this.liveFunc._blinkSeqSize;
    }
    get_blinkSeqMaxSize() {
      return this.liveFunc._blinkSeqMaxSize;
    }
    get_blinkSeqSignature() {
      return this.liveFunc._blinkSeqSignature;
    }
    get_command() {
      return this.liveFunc._command;
    }
    set_command(newval) {
      this.liveFunc.set_command(newval);
      return this._yapi.SUCCESS;
    }
    sendCommand(command) {
      this.liveFunc.sendCommand(command);
      return _yocto_api.YAPI_SUCCESS;
    }
    addHslMoveToBlinkSeq(HSLcolor, msDelay) {
      this.liveFunc.addHslMoveToBlinkSeq(HSLcolor, msDelay);
      return _yocto_api.YAPI_SUCCESS;
    }
    addRgbMoveToBlinkSeq(RGBcolor, msDelay) {
      this.liveFunc.addRgbMoveToBlinkSeq(RGBcolor, msDelay);
      return _yocto_api.YAPI_SUCCESS;
    }
    startBlinkSeq() {
      this.liveFunc.startBlinkSeq();
      return _yocto_api.YAPI_SUCCESS;
    }
    stopBlinkSeq() {
      this.liveFunc.stopBlinkSeq();
      return _yocto_api.YAPI_SUCCESS;
    }
    resetBlinkSeq() {
      this.liveFunc.resetBlinkSeq();
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YColorLedProxy = YColorLedProxy;
  function yFindColorLed(func) {
    return YColorLed.FindColorLed(func);
  }
  function yFirstColorLed() {
    return YColorLed.FirstColorLed();
  }
  return module.exports;
});

$__System.registerDynamic("d", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YColorLedClusterProxy = exports.YColorLedCluster = exports.Y_COMMAND_INVALID = exports.Y_BLINKSEQMAXSIZE_INVALID = exports.Y_BLINKSEQMAXCOUNT_INVALID = exports.Y_MAXLEDCOUNT_INVALID = exports.Y_ACTIVELEDCOUNT_INVALID = undefined;
  exports.yFindColorLedCluster = yFindColorLedCluster;
  exports.yFirstColorLedCluster = yFirstColorLedCluster;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_ACTIVELEDCOUNT_INVALID = exports.Y_ACTIVELEDCOUNT_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_MAXLEDCOUNT_INVALID = exports.Y_MAXLEDCOUNT_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_BLINKSEQMAXCOUNT_INVALID = exports.Y_BLINKSEQMAXCOUNT_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_BLINKSEQMAXSIZE_INVALID = exports.Y_BLINKSEQMAXSIZE_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_COMMAND_INVALID = exports.Y_COMMAND_INVALID = _yocto_api.YAPI.INVALID_STRING;
  class YColorLedCluster extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'ColorLedCluster';
      this._activeLedCount = Y_ACTIVELEDCOUNT_INVALID;
      this._maxLedCount = Y_MAXLEDCOUNT_INVALID;
      this._blinkSeqMaxCount = Y_BLINKSEQMAXCOUNT_INVALID;
      this._blinkSeqMaxSize = Y_BLINKSEQMAXSIZE_INVALID;
      this._command = Y_COMMAND_INVALID;
      this.imm_setConst({
        ACTIVELEDCOUNT_INVALID: _yocto_api.YAPI.INVALID_UINT,
        MAXLEDCOUNT_INVALID: _yocto_api.YAPI.INVALID_UINT,
        BLINKSEQMAXCOUNT_INVALID: _yocto_api.YAPI.INVALID_UINT,
        BLINKSEQMAXSIZE_INVALID: _yocto_api.YAPI.INVALID_UINT,
        COMMAND_INVALID: _yocto_api.YAPI.INVALID_STRING
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YColorLedClusterProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'activeLedCount':
          this._activeLedCount = parseInt(val);
          return 1;
        case 'maxLedCount':
          this._maxLedCount = parseInt(val);
          return 1;
        case 'blinkSeqMaxCount':
          this._blinkSeqMaxCount = parseInt(val);
          return 1;
        case 'blinkSeqMaxSize':
          this._blinkSeqMaxSize = parseInt(val);
          return 1;
        case 'command':
          this._command = val;
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_activeLedCount() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_ACTIVELEDCOUNT_INVALID;
          }
        }
        return _this2._activeLedCount;
      })();
    }
    set_activeLedCount(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this3._setAttr('activeLedCount', rest_val);
      })();
    }
    get_maxLedCount() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration == 0) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_MAXLEDCOUNT_INVALID;
          }
        }
        return _this4._maxLedCount;
      })();
    }
    get_blinkSeqMaxCount() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        if (_this5._cacheExpiration == 0) {
          if ((yield _this5.load(_this5._yapi.defaultCacheValidity)) != _this5._yapi.SUCCESS) {
            return Y_BLINKSEQMAXCOUNT_INVALID;
          }
        }
        return _this5._blinkSeqMaxCount;
      })();
    }
    get_blinkSeqMaxSize() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration == 0) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_BLINKSEQMAXSIZE_INVALID;
          }
        }
        return _this6._blinkSeqMaxSize;
      })();
    }
    get_command() {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        if (_this7._cacheExpiration <= _this7._yapi.GetTickCount()) {
          if ((yield _this7.load(_this7._yapi.defaultCacheValidity)) != _this7._yapi.SUCCESS) {
            return Y_COMMAND_INVALID;
          }
        }
        return _this7._command;
      })();
    }
    set_command(newval) {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this8._setAttr('command', rest_val);
      })();
    }
    static FindColorLedCluster(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('ColorLedCluster', func);
      if (obj == null) {
        obj = new YColorLedCluster(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('ColorLedCluster', func, obj);
      }
      return obj;
    }
    static FindColorLedClusterInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'ColorLedCluster', func);
      if (obj == null) {
        obj = new YColorLedCluster(yctx, func);
        _yocto_api.YFunction._AddToCache('ColorLedCluster', func, obj);
      }
      return obj;
    }
    sendCommand(command) {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        return yield _this9.set_command(command);
      })();
    }
    set_rgbColor(ledIndex, count, rgbValue) {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        return yield _this10.sendCommand('SR' + String(Math.round(ledIndex)) + ',' + String(Math.round(count)) + ',' + rgbValue.toString(16));
      })();
    }
    set_hslColor(ledIndex, count, hslValue) {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        return yield _this11.sendCommand('SH' + String(Math.round(ledIndex)) + ',' + String(Math.round(count)) + ',' + hslValue.toString(16));
      })();
    }
    rgb_move(ledIndex, count, rgbValue, delay) {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        return yield _this12.sendCommand('MR' + String(Math.round(ledIndex)) + ',' + String(Math.round(count)) + ',' + rgbValue.toString(16) + ',' + String(Math.round(delay)));
      })();
    }
    hsl_move(ledIndex, count, hslValue, delay) {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        return yield _this13.sendCommand('MH' + String(Math.round(ledIndex)) + ',' + String(Math.round(count)) + ',' + hslValue.toString(16) + ',' + String(Math.round(delay)));
      })();
    }
    addRgbMoveToBlinkSeq(seqIndex, rgbValue, delay) {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        return yield _this14.sendCommand('AR' + String(Math.round(seqIndex)) + ',' + rgbValue.toString(16) + ',' + String(Math.round(delay)));
      })();
    }
    addHslMoveToBlinkSeq(seqIndex, hslValue, delay) {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        return yield _this15.sendCommand('AH' + String(Math.round(seqIndex)) + ',' + hslValue.toString(16) + ',' + String(Math.round(delay)));
      })();
    }
    linkLedToBlinkSeq(ledIndex, count, seqIndex, offset) {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        return yield _this16.sendCommand('LS' + String(Math.round(ledIndex)) + ',' + String(Math.round(count)) + ',' + String(Math.round(seqIndex)) + ',' + String(Math.round(offset)));
      })();
    }
    unlinkLedFromBlinkSeq(ledIndex, count) {
      var _this17 = this;
      return _asyncToGenerator(function*() {
        return yield _this17.sendCommand('US' + String(Math.round(ledIndex)) + ',' + String(Math.round(count)));
      })();
    }
    startBlinkSeq(seqIndex) {
      var _this18 = this;
      return _asyncToGenerator(function*() {
        return yield _this18.sendCommand('SS' + String(Math.round(seqIndex)));
      })();
    }
    stopBlinkSeq(seqIndex) {
      var _this19 = this;
      return _asyncToGenerator(function*() {
        return yield _this19.sendCommand('XS' + String(Math.round(seqIndex)));
      })();
    }
    resetBlinkSeq(seqIndex) {
      var _this20 = this;
      return _asyncToGenerator(function*() {
        return yield _this20.sendCommand('ZS' + String(Math.round(seqIndex)));
      })();
    }
    saveLedsState() {
      var _this21 = this;
      return _asyncToGenerator(function*() {
        return yield _this21.sendCommand('SL');
      })();
    }
    set_rgbBuffer(buff) {
      var _this22 = this;
      return _asyncToGenerator(function*() {
        return yield _this22._upload('rgb:0', buff);
      })();
    }
    set_rgbArray(rgbList) {
      var _this23 = this;
      return _asyncToGenerator(function*() {
        let listlen;
        let buff;
        let idx;
        let rgb;
        let res;
        listlen = rgbList.length;
        buff = new Uint8Array(3 * listlen);
        idx = 0;
        while (idx < listlen) {
          rgb = rgbList[idx];
          buff.set([rgb >> 16 & 255], 3 * idx);
          buff.set([rgb >> 8 & 255], 3 * idx + 1);
          buff.set([rgb & 255], 3 * idx + 2);
          idx = idx + 1;
        }
        res = yield _this23._upload('rgb:0', buff);
        return res;
      })();
    }
    rgbArray_move(rgbList, delay) {
      var _this24 = this;
      return _asyncToGenerator(function*() {
        let listlen;
        let buff;
        let idx;
        let rgb;
        let res;
        listlen = rgbList.length;
        buff = new Uint8Array(3 * listlen);
        idx = 0;
        while (idx < listlen) {
          rgb = rgbList[idx];
          buff.set([rgb >> 16 & 255], 3 * idx);
          buff.set([rgb >> 8 & 255], 3 * idx + 1);
          buff.set([rgb & 255], 3 * idx + 2);
          idx = idx + 1;
        }
        res = yield _this24._upload('rgb:' + String(Math.round(delay)), buff);
        return res;
      })();
    }
    set_hslBuffer(buff) {
      var _this25 = this;
      return _asyncToGenerator(function*() {
        return yield _this25._upload('hsl:0', buff);
      })();
    }
    set_hslArray(hslList) {
      var _this26 = this;
      return _asyncToGenerator(function*() {
        let listlen;
        let buff;
        let idx;
        let hsl;
        let res;
        listlen = hslList.length;
        buff = new Uint8Array(3 * listlen);
        idx = 0;
        while (idx < listlen) {
          hsl = hslList[idx];
          buff.set([hsl >> 16 & 255], 3 * idx);
          buff.set([hsl >> 8 & 255], 3 * idx + 1);
          buff.set([hsl & 255], 3 * idx + 2);
          idx = idx + 1;
        }
        res = yield _this26._upload('hsl:0', buff);
        return res;
      })();
    }
    hslArray_move(hslList, delay) {
      var _this27 = this;
      return _asyncToGenerator(function*() {
        let listlen;
        let buff;
        let idx;
        let hsl;
        let res;
        listlen = hslList.length;
        buff = new Uint8Array(3 * listlen);
        idx = 0;
        while (idx < listlen) {
          hsl = hslList[idx];
          buff.set([hsl >> 16 & 255], 3 * idx);
          buff.set([hsl >> 8 & 255], 3 * idx + 1);
          buff.set([hsl & 255], 3 * idx + 2);
          idx = idx + 1;
        }
        res = yield _this27._upload('hsl:' + String(Math.round(delay)), buff);
        return res;
      })();
    }
    get_rgbColorBuffer(ledIndex, count) {
      var _this28 = this;
      return _asyncToGenerator(function*() {
        return yield _this28._download('rgb.bin?typ=0&pos=' + String(Math.round(3 * ledIndex)) + '&len=' + String(Math.round(3 * count)));
      })();
    }
    get_rgbColorArray(ledIndex, count) {
      var _this29 = this;
      return _asyncToGenerator(function*() {
        let buff;
        let res = [];
        let idx;
        let r;
        let g;
        let b;
        buff = yield _this29._download('rgb.bin?typ=0&pos=' + String(Math.round(3 * ledIndex)) + '&len=' + String(Math.round(3 * count)));
        res.length = 0;
        idx = 0;
        while (idx < count) {
          r = buff[3 * idx];
          g = buff[3 * idx + 1];
          b = buff[3 * idx + 2];
          res.push(r * 65536 + g * 256 + b);
          idx = idx + 1;
        }
        return res;
      })();
    }
    get_linkedSeqArray(ledIndex, count) {
      var _this30 = this;
      return _asyncToGenerator(function*() {
        let buff;
        let res = [];
        let idx;
        let seq;
        buff = yield _this30._download('rgb.bin?typ=1&pos=' + String(Math.round(ledIndex)) + '&len=' + String(Math.round(count)));
        res.length = 0;
        idx = 0;
        while (idx < count) {
          seq = buff[idx];
          res.push(seq);
          idx = idx + 1;
        }
        return res;
      })();
    }
    get_blinkSeqSignatures(seqIndex, count) {
      var _this31 = this;
      return _asyncToGenerator(function*() {
        let buff;
        let res = [];
        let idx;
        let hh;
        let hl;
        let lh;
        let ll;
        buff = yield _this31._download('rgb.bin?typ=2&pos=' + String(Math.round(4 * seqIndex)) + '&len=' + String(Math.round(4 * count)));
        res.length = 0;
        idx = 0;
        while (idx < count) {
          hh = buff[4 * idx];
          hl = buff[4 * idx + 1];
          lh = buff[4 * idx + 2];
          ll = buff[4 * idx + 3];
          res.push((hh << 24) + (hl << 16) + (lh << 8) + ll);
          idx = idx + 1;
        }
        return res;
      })();
    }
    get_blinkSeqState(seqIndex, count) {
      var _this32 = this;
      return _asyncToGenerator(function*() {
        let buff;
        let res = [];
        let idx;
        let started;
        buff = yield _this32._download('rgb.bin?typ=3&pos=' + String(Math.round(seqIndex)) + '&len=' + String(Math.round(count)));
        res.length = 0;
        idx = 0;
        while (idx < count) {
          started = buff[idx] != 0;
          res.push(started);
          idx = idx + 1;
        }
        return res;
      })();
    }
    nextColorLedCluster() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YColorLedCluster.FindColorLedClusterInContext(this._yapi, next_hwid);
    }
    static FirstColorLedCluster() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('ColorLedCluster');
      if (next_hwid == null)
        return null;
      return YColorLedCluster.FindColorLedCluster(next_hwid);
    }
    static FirstColorLedClusterInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('ColorLedCluster');
      if (next_hwid == null)
        return null;
      return YColorLedCluster.FindColorLedClusterInContext(yctx, next_hwid);
    }
  }
  exports.YColorLedCluster = YColorLedCluster;
  class YColorLedClusterProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_activeLedCount() {
      return this.liveFunc._activeLedCount;
    }
    set_activeLedCount(newval) {
      this.liveFunc.set_activeLedCount(newval);
      return this._yapi.SUCCESS;
    }
    get_maxLedCount() {
      return this.liveFunc._maxLedCount;
    }
    get_blinkSeqMaxCount() {
      return this.liveFunc._blinkSeqMaxCount;
    }
    get_blinkSeqMaxSize() {
      return this.liveFunc._blinkSeqMaxSize;
    }
    get_command() {
      return this.liveFunc._command;
    }
    set_command(newval) {
      this.liveFunc.set_command(newval);
      return this._yapi.SUCCESS;
    }
    sendCommand(command) {
      this.liveFunc.sendCommand(command);
      return _yocto_api.YAPI_SUCCESS;
    }
    rgb_move(ledIndex, count, rgbValue, delay) {
      this.liveFunc.rgb_move(ledIndex, count, rgbValue, delay);
      return _yocto_api.YAPI_SUCCESS;
    }
    hsl_move(ledIndex, count, hslValue, delay) {
      this.liveFunc.hsl_move(ledIndex, count, hslValue, delay);
      return _yocto_api.YAPI_SUCCESS;
    }
    addRgbMoveToBlinkSeq(seqIndex, rgbValue, delay) {
      this.liveFunc.addRgbMoveToBlinkSeq(seqIndex, rgbValue, delay);
      return _yocto_api.YAPI_SUCCESS;
    }
    addHslMoveToBlinkSeq(seqIndex, hslValue, delay) {
      this.liveFunc.addHslMoveToBlinkSeq(seqIndex, hslValue, delay);
      return _yocto_api.YAPI_SUCCESS;
    }
    linkLedToBlinkSeq(ledIndex, count, seqIndex, offset) {
      this.liveFunc.linkLedToBlinkSeq(ledIndex, count, seqIndex, offset);
      return _yocto_api.YAPI_SUCCESS;
    }
    unlinkLedFromBlinkSeq(ledIndex, count) {
      this.liveFunc.unlinkLedFromBlinkSeq(ledIndex, count);
      return _yocto_api.YAPI_SUCCESS;
    }
    startBlinkSeq(seqIndex) {
      this.liveFunc.startBlinkSeq(seqIndex);
      return _yocto_api.YAPI_SUCCESS;
    }
    stopBlinkSeq(seqIndex) {
      this.liveFunc.stopBlinkSeq(seqIndex);
      return _yocto_api.YAPI_SUCCESS;
    }
    resetBlinkSeq(seqIndex) {
      this.liveFunc.resetBlinkSeq(seqIndex);
      return _yocto_api.YAPI_SUCCESS;
    }
    saveLedsState() {
      this.liveFunc.saveLedsState();
      return _yocto_api.YAPI_SUCCESS;
    }
    rgbArray_move(rgbList, delay) {
      this.liveFunc.rgbArray_move(rgbList, delay);
      return _yocto_api.YAPI_SUCCESS;
    }
    hslArray_move(hslList, delay) {
      this.liveFunc.hslArray_move(hslList, delay);
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YColorLedClusterProxy = YColorLedClusterProxy;
  function yFindColorLedCluster(func) {
    return YColorLedCluster.FindColorLedCluster(func);
  }
  function yFirstColorLedCluster() {
    return YColorLedCluster.FirstColorLedCluster();
  }
  return module.exports;
});

$__System.registerDynamic("e", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YCompassProxy = exports.YCompass = exports.Y_MAGNETICHEADING_INVALID = exports.Y_AXIS_INVALID = exports.Y_AXIS_Z = exports.Y_AXIS_Y = exports.Y_AXIS_X = undefined;
  exports.yFindCompass = yFindCompass;
  exports.yFirstCompass = yFirstCompass;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_AXIS_X = exports.Y_AXIS_X = 0;
  var Y_AXIS_Y = exports.Y_AXIS_Y = 1;
  var Y_AXIS_Z = exports.Y_AXIS_Z = 2;
  var Y_AXIS_INVALID = exports.Y_AXIS_INVALID = -1;
  var Y_MAGNETICHEADING_INVALID = exports.Y_MAGNETICHEADING_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  class YCompass extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Compass';
      this._axis = Y_AXIS_INVALID;
      this._magneticHeading = Y_MAGNETICHEADING_INVALID;
      this.imm_setConst({
        AXIS_X: 0,
        AXIS_Y: 1,
        AXIS_Z: 2,
        AXIS_INVALID: -1,
        MAGNETICHEADING_INVALID: _yocto_api.YAPI.INVALID_DOUBLE
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YCompassProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'axis':
          this._axis = parseInt(val);
          return 1;
        case 'magneticHeading':
          this._magneticHeading = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_axis() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_AXIS_INVALID;
          }
        }
        return _this2._axis;
      })();
    }
    get_magneticHeading() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        if (_this3._cacheExpiration <= _this3._yapi.GetTickCount()) {
          if ((yield _this3.load(_this3._yapi.defaultCacheValidity)) != _this3._yapi.SUCCESS) {
            return Y_MAGNETICHEADING_INVALID;
          }
        }
        return _this3._magneticHeading;
      })();
    }
    static FindCompass(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Compass', func);
      if (obj == null) {
        obj = new YCompass(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Compass', func, obj);
      }
      return obj;
    }
    static FindCompassInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Compass', func);
      if (obj == null) {
        obj = new YCompass(yctx, func);
        _yocto_api.YFunction._AddToCache('Compass', func, obj);
      }
      return obj;
    }
    nextCompass() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YCompass.FindCompassInContext(this._yapi, next_hwid);
    }
    static FirstCompass() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Compass');
      if (next_hwid == null)
        return null;
      return YCompass.FindCompass(next_hwid);
    }
    static FirstCompassInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Compass');
      if (next_hwid == null)
        return null;
      return YCompass.FindCompassInContext(yctx, next_hwid);
    }
  }
  exports.YCompass = YCompass;
  class YCompassProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_axis() {
      return this.liveFunc._axis;
    }
    get_magneticHeading() {
      return this.liveFunc._magneticHeading;
    }
  }
  exports.YCompassProxy = YCompassProxy;
  function yFindCompass(func) {
    return YCompass.FindCompass(func);
  }
  function yFirstCompass() {
    return YCompass.FirstCompass();
  }
  return module.exports;
});

$__System.registerDynamic("f", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YCurrentProxy = exports.YCurrent = undefined;
  exports.yFindCurrent = yFindCurrent;
  exports.yFirstCurrent = yFirstCurrent;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  class YCurrent extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Current';
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YCurrentProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    static FindCurrent(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Current', func);
      if (obj == null) {
        obj = new YCurrent(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Current', func, obj);
      }
      return obj;
    }
    static FindCurrentInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Current', func);
      if (obj == null) {
        obj = new YCurrent(yctx, func);
        _yocto_api.YFunction._AddToCache('Current', func, obj);
      }
      return obj;
    }
    nextCurrent() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YCurrent.FindCurrentInContext(this._yapi, next_hwid);
    }
    static FirstCurrent() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Current');
      if (next_hwid == null)
        return null;
      return YCurrent.FindCurrent(next_hwid);
    }
    static FirstCurrentInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Current');
      if (next_hwid == null)
        return null;
      return YCurrent.FindCurrentInContext(yctx, next_hwid);
    }
  }
  exports.YCurrent = YCurrent;
  class YCurrentProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
  }
  exports.YCurrentProxy = YCurrentProxy;
  function yFindCurrent(func) {
    return YCurrent.FindCurrent(func);
  }
  function yFirstCurrent() {
    return YCurrent.FirstCurrent();
  }
  return module.exports;
});

$__System.registerDynamic("10", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YCurrentLoopOutputProxy = exports.YCurrentLoopOutput = exports.Y_CURRENTATSTARTUP_INVALID = exports.Y_CURRENTTRANSITION_INVALID = exports.Y_CURRENT_INVALID = exports.Y_LOOPPOWER_INVALID = exports.Y_LOOPPOWER_POWEROK = exports.Y_LOOPPOWER_LOWPWR = exports.Y_LOOPPOWER_NOPWR = undefined;
  exports.yFindCurrentLoopOutput = yFindCurrentLoopOutput;
  exports.yFirstCurrentLoopOutput = yFirstCurrentLoopOutput;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_LOOPPOWER_NOPWR = exports.Y_LOOPPOWER_NOPWR = 0;
  var Y_LOOPPOWER_LOWPWR = exports.Y_LOOPPOWER_LOWPWR = 1;
  var Y_LOOPPOWER_POWEROK = exports.Y_LOOPPOWER_POWEROK = 2;
  var Y_LOOPPOWER_INVALID = exports.Y_LOOPPOWER_INVALID = -1;
  var Y_CURRENT_INVALID = exports.Y_CURRENT_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_CURRENTTRANSITION_INVALID = exports.Y_CURRENTTRANSITION_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_CURRENTATSTARTUP_INVALID = exports.Y_CURRENTATSTARTUP_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  class YCurrentLoopOutput extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'CurrentLoopOutput';
      this._current = Y_CURRENT_INVALID;
      this._currentTransition = Y_CURRENTTRANSITION_INVALID;
      this._currentAtStartUp = Y_CURRENTATSTARTUP_INVALID;
      this._loopPower = Y_LOOPPOWER_INVALID;
      this.imm_setConst({
        CURRENT_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        CURRENTTRANSITION_INVALID: _yocto_api.YAPI.INVALID_STRING,
        CURRENTATSTARTUP_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        LOOPPOWER_NOPWR: 0,
        LOOPPOWER_LOWPWR: 1,
        LOOPPOWER_POWEROK: 2,
        LOOPPOWER_INVALID: -1
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YCurrentLoopOutputProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'current':
          this._current = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'currentTransition':
          this._currentTransition = val;
          return 1;
        case 'currentAtStartUp':
          this._currentAtStartUp = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'loopPower':
          this._loopPower = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    set_current(newval) {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this2._setAttr('current', rest_val);
      })();
    }
    get_current() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        if (_this3._cacheExpiration <= _this3._yapi.GetTickCount()) {
          if ((yield _this3.load(_this3._yapi.defaultCacheValidity)) != _this3._yapi.SUCCESS) {
            return Y_CURRENT_INVALID;
          }
        }
        return _this3._current;
      })();
    }
    get_currentTransition() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_CURRENTTRANSITION_INVALID;
          }
        }
        return _this4._currentTransition;
      })();
    }
    set_currentTransition(newval) {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this5._setAttr('currentTransition', rest_val);
      })();
    }
    set_currentAtStartUp(newval) {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this6._setAttr('currentAtStartUp', rest_val);
      })();
    }
    get_currentAtStartUp() {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        if (_this7._cacheExpiration <= _this7._yapi.GetTickCount()) {
          if ((yield _this7.load(_this7._yapi.defaultCacheValidity)) != _this7._yapi.SUCCESS) {
            return Y_CURRENTATSTARTUP_INVALID;
          }
        }
        return _this7._currentAtStartUp;
      })();
    }
    get_loopPower() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        if (_this8._cacheExpiration <= _this8._yapi.GetTickCount()) {
          if ((yield _this8.load(_this8._yapi.defaultCacheValidity)) != _this8._yapi.SUCCESS) {
            return Y_LOOPPOWER_INVALID;
          }
        }
        return _this8._loopPower;
      })();
    }
    static FindCurrentLoopOutput(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('CurrentLoopOutput', func);
      if (obj == null) {
        obj = new YCurrentLoopOutput(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('CurrentLoopOutput', func, obj);
      }
      return obj;
    }
    static FindCurrentLoopOutputInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'CurrentLoopOutput', func);
      if (obj == null) {
        obj = new YCurrentLoopOutput(yctx, func);
        _yocto_api.YFunction._AddToCache('CurrentLoopOutput', func, obj);
      }
      return obj;
    }
    currentMove(mA_target, ms_duration) {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        let newval;
        if (mA_target < 3.0) {
          mA_target = 3.0;
        }
        if (mA_target > 21.0) {
          mA_target = 21.0;
        }
        newval = String(Math.round(Math.round(mA_target * 1000))) + ':' + String(Math.round(ms_duration));
        return yield _this9.set_currentTransition(newval);
      })();
    }
    nextCurrentLoopOutput() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YCurrentLoopOutput.FindCurrentLoopOutputInContext(this._yapi, next_hwid);
    }
    static FirstCurrentLoopOutput() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('CurrentLoopOutput');
      if (next_hwid == null)
        return null;
      return YCurrentLoopOutput.FindCurrentLoopOutput(next_hwid);
    }
    static FirstCurrentLoopOutputInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('CurrentLoopOutput');
      if (next_hwid == null)
        return null;
      return YCurrentLoopOutput.FindCurrentLoopOutputInContext(yctx, next_hwid);
    }
  }
  exports.YCurrentLoopOutput = YCurrentLoopOutput;
  class YCurrentLoopOutputProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    set_current(newval) {
      this.liveFunc.set_current(newval);
      return this._yapi.SUCCESS;
    }
    get_current() {
      return this.liveFunc._current;
    }
    get_currentTransition() {
      return this.liveFunc._currentTransition;
    }
    set_currentTransition(newval) {
      this.liveFunc.set_currentTransition(newval);
      return this._yapi.SUCCESS;
    }
    set_currentAtStartUp(newval) {
      this.liveFunc.set_currentAtStartUp(newval);
      return this._yapi.SUCCESS;
    }
    get_currentAtStartUp() {
      return this.liveFunc._currentAtStartUp;
    }
    get_loopPower() {
      return this.liveFunc._loopPower;
    }
    currentMove(mA_target, ms_duration) {
      this.liveFunc.currentMove(mA_target, ms_duration);
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YCurrentLoopOutputProxy = YCurrentLoopOutputProxy;
  function yFindCurrentLoopOutput(func) {
    return YCurrentLoopOutput.FindCurrentLoopOutput(func);
  }
  function yFirstCurrentLoopOutput() {
    return YCurrentLoopOutput.FirstCurrentLoopOutput();
  }
  return module.exports;
});

$__System.registerDynamic("11", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YDataLoggerProxy = exports.YDataLogger = exports.YOldDataStream = exports.Y_MAXVALUE_INVALID = exports.Y_AVERAGEVALUE_INVALID = exports.Y_MINVALUE_INVALID = exports.Y_TIMEUTC_INVALID = exports.Y_CURRENTRUNINDEX_INVALID = exports.Y_CLEARHISTORY_INVALID = exports.Y_CLEARHISTORY_TRUE = exports.Y_CLEARHISTORY_FALSE = exports.Y_BEACONDRIVEN_INVALID = exports.Y_BEACONDRIVEN_ON = exports.Y_BEACONDRIVEN_OFF = exports.Y_AUTOSTART_INVALID = exports.Y_AUTOSTART_ON = exports.Y_AUTOSTART_OFF = exports.Y_RECORDING_INVALID = exports.Y_RECORDING_PENDING = exports.Y_RECORDING_ON = exports.Y_RECORDING_OFF = undefined;
  exports.yFindDataLogger = yFindDataLogger;
  exports.yFirstDataLogger = yFirstDataLogger;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_RECORDING_OFF = exports.Y_RECORDING_OFF = 0;
  var Y_RECORDING_ON = exports.Y_RECORDING_ON = 1;
  var Y_RECORDING_PENDING = exports.Y_RECORDING_PENDING = 2;
  var Y_RECORDING_INVALID = exports.Y_RECORDING_INVALID = -1;
  var Y_AUTOSTART_OFF = exports.Y_AUTOSTART_OFF = 0;
  var Y_AUTOSTART_ON = exports.Y_AUTOSTART_ON = 1;
  var Y_AUTOSTART_INVALID = exports.Y_AUTOSTART_INVALID = -1;
  var Y_BEACONDRIVEN_OFF = exports.Y_BEACONDRIVEN_OFF = 0;
  var Y_BEACONDRIVEN_ON = exports.Y_BEACONDRIVEN_ON = 1;
  var Y_BEACONDRIVEN_INVALID = exports.Y_BEACONDRIVEN_INVALID = -1;
  var Y_CLEARHISTORY_FALSE = exports.Y_CLEARHISTORY_FALSE = 0;
  var Y_CLEARHISTORY_TRUE = exports.Y_CLEARHISTORY_TRUE = 1;
  var Y_CLEARHISTORY_INVALID = exports.Y_CLEARHISTORY_INVALID = -1;
  var Y_CURRENTRUNINDEX_INVALID = exports.Y_CURRENTRUNINDEX_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_TIMEUTC_INVALID = exports.Y_TIMEUTC_INVALID = _yocto_api.YAPI.INVALID_LONG;
  const Y_MINVALUE_INVALID = exports.Y_MINVALUE_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  const Y_AVERAGEVALUE_INVALID = exports.Y_AVERAGEVALUE_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  const Y_MAXVALUE_INVALID = exports.Y_MAXVALUE_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  class YOldDataStream extends _yocto_api.YDataStream {
    constructor(obj_parent, int_run, int_stamp, int_utc, int_itv) {
      super(obj_parent);
      this._dataLogger = obj_parent;
      this._runNo = int_run;
      this._timeStamp = int_stamp;
      this._utcStamp = int_utc == null ? -1 : int_utc;
      this._interval = int_itv == null ? 0 : int_itv;
      this._samplesPerHour = this._interval == 0 ? 3600 : 3600 / this._interval;
      this._isClosed = 1;
      this._minVal = this.DATA_INVALID;
      this._avgVal = this.DATA_INVALID;
      this._maxVal = this.DATA_INVALID;
    }
    loadStream() {
      var _this = this;
      return _asyncToGenerator(function*() {
        var coldiv = null;
        var coltyp = null;
        var colscl = null;
        var colofs = null;
        var calhdl = null;
        var caltyp = null;
        var calpar = null;
        var calraw = null;
        var calref = null;
        var c,
            i;
        var loadval = _this._dataLogger.getData(_this._runNo, _this._timeStamp);
        if (loadval == null) {
          return _this._dataLogger.get_errorType();
        }
        if (loadval['time'] != null)
          _this._timeStamp = loadval['time'];
        if (loadval['UTC'] != null)
          _this._utcStamp = loadval['UTC'];
        if (loadval['interval'] != null)
          _this._interval = loadval['interval'];
        if (loadval['nRows'] != null)
          _this._nRows = loadval['nRows'];
        if (loadval['keys'] != null) {
          _this._columnNames = loadval['keys'];
          if (_this._nCols == 0) {
            _this._nCols = _this._columnNames.length;
          } else if (_this._nCols != _this._columnNames.length) {
            _this._nCols = 0;
            return _yocto_api.YAPI.IO_ERROR;
          }
        }
        if (loadval['div'] != null) {
          coldiv = loadval['div'];
          if (_this._nCols == 0) {
            _this._nCols = coldiv.length;
          } else if (_this._nCols != coldiv.length) {
            _this._nCols = 0;
            return _yocto_api.YAPI.IO_ERROR;
          }
        }
        if (loadval['type'] != null) {
          coltyp = loadval['type'];
          if (_this._nCols == 0) {
            _this._nCols = coltyp.length;
          } else if (_this._nCols != coltyp.length) {
            _this._nCols = 0;
            return _yocto_api.YAPI.IO_ERROR;
          }
        }
        if (loadval['scal'] != null) {
          colscl = loadval['scal'];
          colofs = [];
          if (_this._nCols != colscl.length) {
            _this._nCols = 0;
            return _yocto_api.YAPI.IO_ERROR;
          }
          for (i = 0; i < colscl.length; i++) {
            colscl[i] /= 65536.0;
            colofs[i] = coltyp[i] != 0 ? -32767 : 0;
          }
        } else {
          colscl = [];
          colofs = [];
          for (i = 0; i < coldiv.length; i++) {
            colscl[i] = 1.0 / coldiv[i];
            colofs[i] = coltyp[i] != 0 ? -32767 : 0;
          }
        }
        if (loadval['cal'] != null) {
          calhdl = new Array(_this._nCols);
          caltyp = new Array(_this._nCols);
          calpar = new Array(_this._nCols);
          calraw = new Array(_this._nCols);
          calref = new Array(_this._nCols);
          for (c = 0; c < _this._nCols; c++) {
            var params = loadval['cal'][c];
            if (!params)
              continue;
            params = params.split(',');
            if (params.length < 11)
              continue;
            calhdl[c] = _yocto_api.YAPI._getCalibrationHandler(params[0]);
            if (!calhdl[c])
              continue;
            caltyp[c] = parseInt(params[0]);
            calpar[c] = new Array(params.length - 1);
            calraw[c] = new Array(params.length >> 1);
            calref[c] = new Array(params.length >> 1);
            for (i = 1; i < params.length; i += 2) {
              calpar[c][i - 1] = parseInt(params[i]);
              calpar[c][i] = parseInt(params[i + 1]);
              if (caltyp[c] <= 10) {
                calraw[c][i >> 1] = (calpar[c][i - 1] + colofs[c]) / coldiv[c];
                calref[c][i >> 1] = (calpar[c][i] + colofs[c]) / coldiv[c];
              } else {
                calraw[c][i >> 1] = _yocto_api.YAPI._decimalToDouble(calpar[c][i - 1]);
                calref[c][i >> 1] = _yocto_api.YAPI._decimalToDouble(calpar[c][i]);
              }
            }
          }
        }
        if (loadval['data'] != null) {
          if (_this._nCols == 0 || coldiv == null || coltyp == null) {
            return _yocto_api.YAPI.IO_ERROR;
          }
          _this._values = [];
          var data = loadval['data'];
          if (typeof data == 'string') {
            data = _yocto_api.YAPI._decodeWords(data);
          }
          var dat = [];
          c = 0;
          for (var idx in data) {
            var val;
            if (coltyp[c] < 2) {
              val = (data[idx] + colofs[c]) * colscl[c];
            } else {
              val = _yocto_api.YAPI._decimalToDouble(data[idx] - 32767);
            }
            if (calhdl && calhdl[c]) {
              if (caltyp[c] <= 10) {
                val = calhdl[c]((data[idx] + colofs[c]) / coldiv[c], caltyp[c], calpar[c], calraw[c], calref[c]);
              } else if (caltyp[c] > 20) {
                val = calhdl[c](val, caltyp[c], calpar[c], calraw[c], calref[c]);
              }
            }
            dat.push(val);
            if (++c == _this._nCols) {
              _this._values.push(dat);
              dat = [];
              c = 0;
            }
          }
        }
        return _yocto_api.YAPI_SUCCESS;
      })();
    }
    get_startTime() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        return _this2._timeStamp;
      })();
    }
    get_dataSamplesInterval() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        if (_this3._interval == 0)
          yield _this3.loadStream();
        return _this3._interval;
      })();
    }
  }
  exports.YOldDataStream = YOldDataStream;
  class YDataLogger extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'DataLogger';
      this._currentRunIndex = Y_CURRENTRUNINDEX_INVALID;
      this._timeUTC = Y_TIMEUTC_INVALID;
      this._recording = Y_RECORDING_INVALID;
      this._autoStart = Y_AUTOSTART_INVALID;
      this._beaconDriven = Y_BEACONDRIVEN_INVALID;
      this._clearHistory = Y_CLEARHISTORY_INVALID;
      this.imm_setConst({
        CURRENTRUNINDEX_INVALID: _yocto_api.YAPI.INVALID_UINT,
        TIMEUTC_INVALID: _yocto_api.YAPI.INVALID_LONG,
        RECORDING_OFF: 0,
        RECORDING_ON: 1,
        RECORDING_PENDING: 2,
        RECORDING_INVALID: -1,
        AUTOSTART_OFF: 0,
        AUTOSTART_ON: 1,
        AUTOSTART_INVALID: -1,
        BEACONDRIVEN_OFF: 0,
        BEACONDRIVEN_ON: 1,
        BEACONDRIVEN_INVALID: -1,
        CLEARHISTORY_FALSE: 0,
        CLEARHISTORY_TRUE: 1,
        CLEARHISTORY_INVALID: -1
      });
    }
    getData(runIdx, timeIdx) {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        var loadval;
        if (_this4.dataLoggerURL == undefined) {
          _this4.dataLoggerURL = '/logger.json';
        }
        var devid = _this4.module().get_serialNumber();
        if (devid == _yocto_api.YModule.SERIALNUMBER_INVALID) {
          return null;
        }
        var httpreq = 'GET ' + _this4.dataLoggerURL;
        if (timeIdx) {
          httpreq += '?run=' + runIdx + '&time=' + timeIdx;
        }
        var yreq = yield _yocto_api.YAPI.devRequest(devid, httpreq);
        if (yreq.errorType != _yocto_api.YAPI_SUCCESS) {
          if (yreq.errorMsg.indexOf('HTTP status 404') >= 0 && _this4.dataLoggerURL != '/dataLogger.json') {
            _this4.dataLoggerURL = '/dataLogger.json';
            return yield _this4.getData(runIdx, timeIdx);
          }
          return _this4._throw(yreq.errorType, yreq.errorMsg, null);
        }
        return JSON.parse(yreq.result);
      })();
    }
    get_dataStreams(v) {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        var loadval = yield _this5.getData(null, null);
        if (loadval == null) {
          return _this5.get_errorType();
        }
        if (loadval.length == 0) {
          return _yocto_api.YAPI_SUCCESS;
        }
        if (Array.isArray(loadval[0])) {
          for (var idx in loadval) {
            var arr = loadval[idx];
            if (arr.length < 4) {
              _throw(_yocto_api.YAPI.IO_ERROR, 'Unexpected JSON reply format');
              return _yocto_api.YAPI.IO_ERROR;
            }
            v.push(new YOldDataStream(_this5, arr[0], arr[1], arr[2], arr[3]));
          }
        } else {
          var sets = _this5.parse_dataSets(JSON.stringify(loadval));
          for (var i = 0; i < sets.length; i++) {
            var ds = sets[i].get_privateDataStreams();
            for (var si = 0; si < ds.length; si++) {
              v.push(ds[si]);
            }
          }
        }
        return _yocto_api.YAPI_SUCCESS;
      })();
    }
    get_syncProxy() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          try {
            yield _this6.load(_this6._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YDataLoggerProxy(_this6);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'currentRunIndex':
          this._currentRunIndex = parseInt(val);
          return 1;
        case 'timeUTC':
          this._timeUTC = parseInt(val);
          return 1;
        case 'recording':
          this._recording = parseInt(val);
          return 1;
        case 'autoStart':
          this._autoStart = parseInt(val);
          return 1;
        case 'beaconDriven':
          this._beaconDriven = parseInt(val);
          return 1;
        case 'clearHistory':
          this._clearHistory = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_currentRunIndex() {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        if (_this7._cacheExpiration <= _this7._yapi.GetTickCount()) {
          if ((yield _this7.load(_this7._yapi.defaultCacheValidity)) != _this7._yapi.SUCCESS) {
            return Y_CURRENTRUNINDEX_INVALID;
          }
        }
        return _this7._currentRunIndex;
      })();
    }
    get_timeUTC() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        if (_this8._cacheExpiration <= _this8._yapi.GetTickCount()) {
          if ((yield _this8.load(_this8._yapi.defaultCacheValidity)) != _this8._yapi.SUCCESS) {
            return Y_TIMEUTC_INVALID;
          }
        }
        return _this8._timeUTC;
      })();
    }
    set_timeUTC(newval) {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this9._setAttr('timeUTC', rest_val);
      })();
    }
    get_recording() {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        if (_this10._cacheExpiration <= _this10._yapi.GetTickCount()) {
          if ((yield _this10.load(_this10._yapi.defaultCacheValidity)) != _this10._yapi.SUCCESS) {
            return Y_RECORDING_INVALID;
          }
        }
        return _this10._recording;
      })();
    }
    set_recording(newval) {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this11._setAttr('recording', rest_val);
      })();
    }
    get_autoStart() {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        if (_this12._cacheExpiration <= _this12._yapi.GetTickCount()) {
          if ((yield _this12.load(_this12._yapi.defaultCacheValidity)) != _this12._yapi.SUCCESS) {
            return Y_AUTOSTART_INVALID;
          }
        }
        return _this12._autoStart;
      })();
    }
    set_autoStart(newval) {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this13._setAttr('autoStart', rest_val);
      })();
    }
    get_beaconDriven() {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        if (_this14._cacheExpiration <= _this14._yapi.GetTickCount()) {
          if ((yield _this14.load(_this14._yapi.defaultCacheValidity)) != _this14._yapi.SUCCESS) {
            return Y_BEACONDRIVEN_INVALID;
          }
        }
        return _this14._beaconDriven;
      })();
    }
    set_beaconDriven(newval) {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this15._setAttr('beaconDriven', rest_val);
      })();
    }
    get_clearHistory() {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        if (_this16._cacheExpiration <= _this16._yapi.GetTickCount()) {
          if ((yield _this16.load(_this16._yapi.defaultCacheValidity)) != _this16._yapi.SUCCESS) {
            return Y_CLEARHISTORY_INVALID;
          }
        }
        return _this16._clearHistory;
      })();
    }
    set_clearHistory(newval) {
      var _this17 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this17._setAttr('clearHistory', rest_val);
      })();
    }
    static FindDataLogger(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('DataLogger', func);
      if (obj == null) {
        obj = new YDataLogger(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('DataLogger', func, obj);
      }
      return obj;
    }
    static FindDataLoggerInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'DataLogger', func);
      if (obj == null) {
        obj = new YDataLogger(yctx, func);
        _yocto_api.YFunction._AddToCache('DataLogger', func, obj);
      }
      return obj;
    }
    forgetAllDataStreams() {
      var _this18 = this;
      return _asyncToGenerator(function*() {
        return yield _this18.set_clearHistory(Y_CLEARHISTORY_TRUE);
      })();
    }
    get_dataSets() {
      var _this19 = this;
      return _asyncToGenerator(function*() {
        return yield _this19.parse_dataSets((yield _this19._download('logger.json')));
      })();
    }
    parse_dataSets(json) {
      var _this20 = this;
      return _asyncToGenerator(function*() {
        let dslist = [];
        let dataset;
        let res = [];
        dslist = _this20.imm_json_get_array(json);
        res.length = 0;
        for (let ii in dslist) {
          dataset = new _yocto_api.YDataSet(_this20);
          yield dataset._parse(dslist[ii]);
          res.push(dataset);
          ;
        }
        return res;
      })();
    }
    nextDataLogger() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YDataLogger.FindDataLoggerInContext(this._yapi, next_hwid);
    }
    static FirstDataLogger() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('DataLogger');
      if (next_hwid == null)
        return null;
      return YDataLogger.FindDataLogger(next_hwid);
    }
    static FirstDataLoggerInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('DataLogger');
      if (next_hwid == null)
        return null;
      return YDataLogger.FindDataLoggerInContext(yctx, next_hwid);
    }
  }
  exports.YDataLogger = YDataLogger;
  class YDataLoggerProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_currentRunIndex() {
      return this.liveFunc._currentRunIndex;
    }
    get_timeUTC() {
      return this.liveFunc._timeUTC;
    }
    set_timeUTC(newval) {
      this.liveFunc.set_timeUTC(newval);
      return this._yapi.SUCCESS;
    }
    get_recording() {
      return this.liveFunc._recording;
    }
    set_recording(newval) {
      this.liveFunc.set_recording(newval);
      return this._yapi.SUCCESS;
    }
    get_autoStart() {
      return this.liveFunc._autoStart;
    }
    set_autoStart(newval) {
      this.liveFunc.set_autoStart(newval);
      return this._yapi.SUCCESS;
    }
    get_beaconDriven() {
      return this.liveFunc._beaconDriven;
    }
    set_beaconDriven(newval) {
      this.liveFunc.set_beaconDriven(newval);
      return this._yapi.SUCCESS;
    }
    get_clearHistory() {
      return this.liveFunc._clearHistory;
    }
    set_clearHistory(newval) {
      this.liveFunc.set_clearHistory(newval);
      return this._yapi.SUCCESS;
    }
    forgetAllDataStreams() {
      this.liveFunc.forgetAllDataStreams();
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YDataLoggerProxy = YDataLoggerProxy;
  function yFindDataLogger(func) {
    return YDataLogger.FindDataLogger(func);
  }
  function yFirstDataLogger() {
    return YDataLogger.FirstDataLogger();
  }
  return module.exports;
});

$__System.registerDynamic("12", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YDigitalIOProxy = exports.YDigitalIO = exports.Y_COMMAND_INVALID = exports.Y_PORTSIZE_INVALID = exports.Y_PORTPOLARITY_INVALID = exports.Y_PORTOPENDRAIN_INVALID = exports.Y_PORTDIRECTION_INVALID = exports.Y_PORTSTATE_INVALID = exports.Y_OUTPUTVOLTAGE_INVALID = exports.Y_OUTPUTVOLTAGE_EXT_V = exports.Y_OUTPUTVOLTAGE_USB_3V = exports.Y_OUTPUTVOLTAGE_USB_5V = undefined;
  exports.yFindDigitalIO = yFindDigitalIO;
  exports.yFirstDigitalIO = yFirstDigitalIO;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_OUTPUTVOLTAGE_USB_5V = exports.Y_OUTPUTVOLTAGE_USB_5V = 0;
  var Y_OUTPUTVOLTAGE_USB_3V = exports.Y_OUTPUTVOLTAGE_USB_3V = 1;
  var Y_OUTPUTVOLTAGE_EXT_V = exports.Y_OUTPUTVOLTAGE_EXT_V = 2;
  var Y_OUTPUTVOLTAGE_INVALID = exports.Y_OUTPUTVOLTAGE_INVALID = -1;
  var Y_PORTSTATE_INVALID = exports.Y_PORTSTATE_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_PORTDIRECTION_INVALID = exports.Y_PORTDIRECTION_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_PORTOPENDRAIN_INVALID = exports.Y_PORTOPENDRAIN_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_PORTPOLARITY_INVALID = exports.Y_PORTPOLARITY_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_PORTSIZE_INVALID = exports.Y_PORTSIZE_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_COMMAND_INVALID = exports.Y_COMMAND_INVALID = _yocto_api.YAPI.INVALID_STRING;
  class YDigitalIO extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'DigitalIO';
      this._portState = Y_PORTSTATE_INVALID;
      this._portDirection = Y_PORTDIRECTION_INVALID;
      this._portOpenDrain = Y_PORTOPENDRAIN_INVALID;
      this._portPolarity = Y_PORTPOLARITY_INVALID;
      this._portSize = Y_PORTSIZE_INVALID;
      this._outputVoltage = Y_OUTPUTVOLTAGE_INVALID;
      this._command = Y_COMMAND_INVALID;
      this.imm_setConst({
        PORTSTATE_INVALID: _yocto_api.YAPI.INVALID_UINT,
        PORTDIRECTION_INVALID: _yocto_api.YAPI.INVALID_UINT,
        PORTOPENDRAIN_INVALID: _yocto_api.YAPI.INVALID_UINT,
        PORTPOLARITY_INVALID: _yocto_api.YAPI.INVALID_UINT,
        PORTSIZE_INVALID: _yocto_api.YAPI.INVALID_UINT,
        OUTPUTVOLTAGE_USB_5V: 0,
        OUTPUTVOLTAGE_USB_3V: 1,
        OUTPUTVOLTAGE_EXT_V: 2,
        OUTPUTVOLTAGE_INVALID: -1,
        COMMAND_INVALID: _yocto_api.YAPI.INVALID_STRING
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YDigitalIOProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'portState':
          this._portState = parseInt(val);
          return 1;
        case 'portDirection':
          this._portDirection = parseInt(val);
          return 1;
        case 'portOpenDrain':
          this._portOpenDrain = parseInt(val);
          return 1;
        case 'portPolarity':
          this._portPolarity = parseInt(val);
          return 1;
        case 'portSize':
          this._portSize = parseInt(val);
          return 1;
        case 'outputVoltage':
          this._outputVoltage = parseInt(val);
          return 1;
        case 'command':
          this._command = val;
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_portState() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_PORTSTATE_INVALID;
          }
        }
        return _this2._portState;
      })();
    }
    set_portState(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this3._setAttr('portState', rest_val);
      })();
    }
    get_portDirection() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_PORTDIRECTION_INVALID;
          }
        }
        return _this4._portDirection;
      })();
    }
    set_portDirection(newval) {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this5._setAttr('portDirection', rest_val);
      })();
    }
    get_portOpenDrain() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_PORTOPENDRAIN_INVALID;
          }
        }
        return _this6._portOpenDrain;
      })();
    }
    set_portOpenDrain(newval) {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this7._setAttr('portOpenDrain', rest_val);
      })();
    }
    get_portPolarity() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        if (_this8._cacheExpiration <= _this8._yapi.GetTickCount()) {
          if ((yield _this8.load(_this8._yapi.defaultCacheValidity)) != _this8._yapi.SUCCESS) {
            return Y_PORTPOLARITY_INVALID;
          }
        }
        return _this8._portPolarity;
      })();
    }
    set_portPolarity(newval) {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this9._setAttr('portPolarity', rest_val);
      })();
    }
    get_portSize() {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        if (_this10._cacheExpiration <= _this10._yapi.GetTickCount()) {
          if ((yield _this10.load(_this10._yapi.defaultCacheValidity)) != _this10._yapi.SUCCESS) {
            return Y_PORTSIZE_INVALID;
          }
        }
        return _this10._portSize;
      })();
    }
    get_outputVoltage() {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        if (_this11._cacheExpiration <= _this11._yapi.GetTickCount()) {
          if ((yield _this11.load(_this11._yapi.defaultCacheValidity)) != _this11._yapi.SUCCESS) {
            return Y_OUTPUTVOLTAGE_INVALID;
          }
        }
        return _this11._outputVoltage;
      })();
    }
    set_outputVoltage(newval) {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this12._setAttr('outputVoltage', rest_val);
      })();
    }
    get_command() {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        if (_this13._cacheExpiration <= _this13._yapi.GetTickCount()) {
          if ((yield _this13.load(_this13._yapi.defaultCacheValidity)) != _this13._yapi.SUCCESS) {
            return Y_COMMAND_INVALID;
          }
        }
        return _this13._command;
      })();
    }
    set_command(newval) {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this14._setAttr('command', rest_val);
      })();
    }
    static FindDigitalIO(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('DigitalIO', func);
      if (obj == null) {
        obj = new YDigitalIO(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('DigitalIO', func, obj);
      }
      return obj;
    }
    static FindDigitalIOInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'DigitalIO', func);
      if (obj == null) {
        obj = new YDigitalIO(yctx, func);
        _yocto_api.YFunction._AddToCache('DigitalIO', func, obj);
      }
      return obj;
    }
    set_bitState(bitno, bitstate) {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        if (!(bitstate >= 0)) {
          return _this15._throw(_this15._yapi.INVALID_ARGUMENT, 'invalid bitstate', _this15._yapi.INVALID_ARGUMENT);
        }
        if (!(bitstate <= 1)) {
          return _this15._throw(_this15._yapi.INVALID_ARGUMENT, 'invalid bitstate', _this15._yapi.INVALID_ARGUMENT);
        }
        return yield _this15.set_command(String.fromCharCode(82 + bitstate) + '' + String(Math.round(bitno)));
      })();
    }
    get_bitState(bitno) {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        let portVal;
        portVal = yield _this16.get_portState();
        return portVal >> bitno & 1;
      })();
    }
    toggle_bitState(bitno) {
      var _this17 = this;
      return _asyncToGenerator(function*() {
        return yield _this17.set_command('T' + String(Math.round(bitno)));
      })();
    }
    set_bitDirection(bitno, bitdirection) {
      var _this18 = this;
      return _asyncToGenerator(function*() {
        if (!(bitdirection >= 0)) {
          return _this18._throw(_this18._yapi.INVALID_ARGUMENT, 'invalid direction', _this18._yapi.INVALID_ARGUMENT);
        }
        if (!(bitdirection <= 1)) {
          return _this18._throw(_this18._yapi.INVALID_ARGUMENT, 'invalid direction', _this18._yapi.INVALID_ARGUMENT);
        }
        return yield _this18.set_command(String.fromCharCode(73 + 6 * bitdirection) + '' + String(Math.round(bitno)));
      })();
    }
    get_bitDirection(bitno) {
      var _this19 = this;
      return _asyncToGenerator(function*() {
        let portDir;
        portDir = yield _this19.get_portDirection();
        return portDir >> bitno & 1;
      })();
    }
    set_bitPolarity(bitno, bitpolarity) {
      var _this20 = this;
      return _asyncToGenerator(function*() {
        if (!(bitpolarity >= 0)) {
          return _this20._throw(_this20._yapi.INVALID_ARGUMENT, 'invalid bitpolarity', _this20._yapi.INVALID_ARGUMENT);
        }
        if (!(bitpolarity <= 1)) {
          return _this20._throw(_this20._yapi.INVALID_ARGUMENT, 'invalid bitpolarity', _this20._yapi.INVALID_ARGUMENT);
        }
        return yield _this20.set_command(String.fromCharCode(110 + 4 * bitpolarity) + '' + String(Math.round(bitno)));
      })();
    }
    get_bitPolarity(bitno) {
      var _this21 = this;
      return _asyncToGenerator(function*() {
        let portPol;
        portPol = yield _this21.get_portPolarity();
        return portPol >> bitno & 1;
      })();
    }
    set_bitOpenDrain(bitno, opendrain) {
      var _this22 = this;
      return _asyncToGenerator(function*() {
        if (!(opendrain >= 0)) {
          return _this22._throw(_this22._yapi.INVALID_ARGUMENT, 'invalid state', _this22._yapi.INVALID_ARGUMENT);
        }
        if (!(opendrain <= 1)) {
          return _this22._throw(_this22._yapi.INVALID_ARGUMENT, 'invalid state', _this22._yapi.INVALID_ARGUMENT);
        }
        return yield _this22.set_command(String.fromCharCode(100 - 32 * opendrain) + '' + String(Math.round(bitno)));
      })();
    }
    get_bitOpenDrain(bitno) {
      var _this23 = this;
      return _asyncToGenerator(function*() {
        let portOpenDrain;
        portOpenDrain = yield _this23.get_portOpenDrain();
        return portOpenDrain >> bitno & 1;
      })();
    }
    pulse(bitno, ms_duration) {
      var _this24 = this;
      return _asyncToGenerator(function*() {
        return yield _this24.set_command('Z' + String(Math.round(bitno)) + ',0,' + String(Math.round(ms_duration)));
      })();
    }
    delayedPulse(bitno, ms_delay, ms_duration) {
      var _this25 = this;
      return _asyncToGenerator(function*() {
        return yield _this25.set_command('Z' + String(Math.round(bitno)) + ',' + String(Math.round(ms_delay)) + ',' + String(Math.round(ms_duration)));
      })();
    }
    nextDigitalIO() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YDigitalIO.FindDigitalIOInContext(this._yapi, next_hwid);
    }
    static FirstDigitalIO() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('DigitalIO');
      if (next_hwid == null)
        return null;
      return YDigitalIO.FindDigitalIO(next_hwid);
    }
    static FirstDigitalIOInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('DigitalIO');
      if (next_hwid == null)
        return null;
      return YDigitalIO.FindDigitalIOInContext(yctx, next_hwid);
    }
  }
  exports.YDigitalIO = YDigitalIO;
  class YDigitalIOProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_portState() {
      return this.liveFunc._portState;
    }
    set_portState(newval) {
      this.liveFunc.set_portState(newval);
      return this._yapi.SUCCESS;
    }
    get_portDirection() {
      return this.liveFunc._portDirection;
    }
    set_portDirection(newval) {
      this.liveFunc.set_portDirection(newval);
      return this._yapi.SUCCESS;
    }
    get_portOpenDrain() {
      return this.liveFunc._portOpenDrain;
    }
    set_portOpenDrain(newval) {
      this.liveFunc.set_portOpenDrain(newval);
      return this._yapi.SUCCESS;
    }
    get_portPolarity() {
      return this.liveFunc._portPolarity;
    }
    set_portPolarity(newval) {
      this.liveFunc.set_portPolarity(newval);
      return this._yapi.SUCCESS;
    }
    get_portSize() {
      return this.liveFunc._portSize;
    }
    get_outputVoltage() {
      return this.liveFunc._outputVoltage;
    }
    set_outputVoltage(newval) {
      this.liveFunc.set_outputVoltage(newval);
      return this._yapi.SUCCESS;
    }
    get_command() {
      return this.liveFunc._command;
    }
    set_command(newval) {
      this.liveFunc.set_command(newval);
      return this._yapi.SUCCESS;
    }
    toggle_bitState(bitno) {
      this.liveFunc.toggle_bitState(bitno);
      return _yocto_api.YAPI_SUCCESS;
    }
    pulse(bitno, ms_duration) {
      this.liveFunc.pulse(bitno, ms_duration);
      return _yocto_api.YAPI_SUCCESS;
    }
    delayedPulse(bitno, ms_delay, ms_duration) {
      this.liveFunc.delayedPulse(bitno, ms_delay, ms_duration);
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YDigitalIOProxy = YDigitalIOProxy;
  function yFindDigitalIO(func) {
    return YDigitalIO.FindDigitalIO(func);
  }
  function yFirstDigitalIO() {
    return YDigitalIO.FirstDigitalIO();
  }
  return module.exports;
});

$__System.registerDynamic("13", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YDisplayProxy = exports.YDisplay = exports.Y_ALIGN_BOTTOM_RIGHT = exports.Y_ALIGN_BASELINE_RIGHT = exports.Y_ALIGN_CENTER_RIGHT = exports.Y_ALIGN_TOP_RIGHT = exports.Y_ALIGN_BOTTOM_DECIMAL = exports.Y_ALIGN_BASELINE_DECIMAL = exports.Y_ALIGN_CENTER_DECIMAL = exports.Y_ALIGN_TOP_DECIMAL = exports.Y_ALIGN_BOTTOM_CENTER = exports.Y_ALIGN_BASELINE_CENTER = exports.Y_ALIGN_CENTER = exports.Y_ALIGN_TOP_CENTER = exports.Y_ALIGN_BOTTOM_LEFT = exports.Y_ALIGN_BASELINE_LEFT = exports.Y_ALIGN_CENTER_LEFT = exports.Y_ALIGN_TOP_LEFT = exports.Y_COMMAND_INVALID = exports.Y_LAYERCOUNT_INVALID = exports.Y_LAYERHEIGHT_INVALID = exports.Y_LAYERWIDTH_INVALID = exports.Y_DISPLAYHEIGHT_INVALID = exports.Y_DISPLAYWIDTH_INVALID = exports.Y_BRIGHTNESS_INVALID = exports.Y_STARTUPSEQ_INVALID = exports.Y_DISPLAYTYPE_INVALID = exports.Y_DISPLAYTYPE_RGB = exports.Y_DISPLAYTYPE_GRAY = exports.Y_DISPLAYTYPE_MONO = exports.Y_ORIENTATION_INVALID = exports.Y_ORIENTATION_DOWN = exports.Y_ORIENTATION_RIGHT = exports.Y_ORIENTATION_UP = exports.Y_ORIENTATION_LEFT = exports.Y_ENABLED_INVALID = exports.Y_ENABLED_TRUE = exports.Y_ENABLED_FALSE = undefined;
  exports.yFindDisplay = yFindDisplay;
  exports.yFirstDisplay = yFirstDisplay;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_ENABLED_FALSE = exports.Y_ENABLED_FALSE = 0;
  var Y_ENABLED_TRUE = exports.Y_ENABLED_TRUE = 1;
  var Y_ENABLED_INVALID = exports.Y_ENABLED_INVALID = -1;
  var Y_ORIENTATION_LEFT = exports.Y_ORIENTATION_LEFT = 0;
  var Y_ORIENTATION_UP = exports.Y_ORIENTATION_UP = 1;
  var Y_ORIENTATION_RIGHT = exports.Y_ORIENTATION_RIGHT = 2;
  var Y_ORIENTATION_DOWN = exports.Y_ORIENTATION_DOWN = 3;
  var Y_ORIENTATION_INVALID = exports.Y_ORIENTATION_INVALID = -1;
  var Y_DISPLAYTYPE_MONO = exports.Y_DISPLAYTYPE_MONO = 0;
  var Y_DISPLAYTYPE_GRAY = exports.Y_DISPLAYTYPE_GRAY = 1;
  var Y_DISPLAYTYPE_RGB = exports.Y_DISPLAYTYPE_RGB = 2;
  var Y_DISPLAYTYPE_INVALID = exports.Y_DISPLAYTYPE_INVALID = -1;
  var Y_STARTUPSEQ_INVALID = exports.Y_STARTUPSEQ_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_BRIGHTNESS_INVALID = exports.Y_BRIGHTNESS_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_DISPLAYWIDTH_INVALID = exports.Y_DISPLAYWIDTH_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_DISPLAYHEIGHT_INVALID = exports.Y_DISPLAYHEIGHT_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_LAYERWIDTH_INVALID = exports.Y_LAYERWIDTH_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_LAYERHEIGHT_INVALID = exports.Y_LAYERHEIGHT_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_LAYERCOUNT_INVALID = exports.Y_LAYERCOUNT_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_COMMAND_INVALID = exports.Y_COMMAND_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_ALIGN_TOP_LEFT = exports.Y_ALIGN_TOP_LEFT = 0;
  var Y_ALIGN_CENTER_LEFT = exports.Y_ALIGN_CENTER_LEFT = 1;
  var Y_ALIGN_BASELINE_LEFT = exports.Y_ALIGN_BASELINE_LEFT = 2;
  var Y_ALIGN_BOTTOM_LEFT = exports.Y_ALIGN_BOTTOM_LEFT = 3;
  var Y_ALIGN_TOP_CENTER = exports.Y_ALIGN_TOP_CENTER = 4;
  var Y_ALIGN_CENTER = exports.Y_ALIGN_CENTER = 5;
  var Y_ALIGN_BASELINE_CENTER = exports.Y_ALIGN_BASELINE_CENTER = 6;
  var Y_ALIGN_BOTTOM_CENTER = exports.Y_ALIGN_BOTTOM_CENTER = 7;
  var Y_ALIGN_TOP_DECIMAL = exports.Y_ALIGN_TOP_DECIMAL = 8;
  var Y_ALIGN_CENTER_DECIMAL = exports.Y_ALIGN_CENTER_DECIMAL = 9;
  var Y_ALIGN_BASELINE_DECIMAL = exports.Y_ALIGN_BASELINE_DECIMAL = 10;
  var Y_ALIGN_BOTTOM_DECIMAL = exports.Y_ALIGN_BOTTOM_DECIMAL = 11;
  var Y_ALIGN_TOP_RIGHT = exports.Y_ALIGN_TOP_RIGHT = 12;
  var Y_ALIGN_CENTER_RIGHT = exports.Y_ALIGN_CENTER_RIGHT = 13;
  var Y_ALIGN_BASELINE_RIGHT = exports.Y_ALIGN_BASELINE_RIGHT = 14;
  var Y_ALIGN_BOTTOM_RIGHT = exports.Y_ALIGN_BOTTOM_RIGHT = 15;
  class YDisplayLayer {
    constructor(obj_parent, str_id) {
      this._yapi = obj_parent._yapi;
      this._display = obj_parent;
      this._id = str_id;
      this._cmdbuff = '';
      this._hidden = false;
      this.ALIGN_TOP_LEFT = 0;
      this.ALIGN_CENTER_LEFT = 1;
      this.ALIGN_BASELINE_LEFT = 2;
      this.ALIGN_BOTTOM_LEFT = 3;
      this.ALIGN_TOP_CENTER = 4;
      this.ALIGN_CENTER = 5;
      this.ALIGN_BASELINE_CENTER = 6;
      this.ALIGN_BOTTOM_CENTER = 7;
      this.ALIGN_TOP_DECIMAL = 8;
      this.ALIGN_CENTER_DECIMAL = 9;
      this.ALIGN_BASELINE_DECIMAL = 10;
      this.ALIGN_BOTTOM_DECIMAL = 11;
      this.ALIGN_TOP_RIGHT = 12;
      this.ALIGN_CENTER_RIGHT = 13;
      this.ALIGN_BASELINE_RIGHT = 14;
      this.ALIGN_BOTTOM_RIGHT = 15;
    }
    imm_must_be_flushed() {
      return this._cmdbuff != '';
    }
    imm_resetHiddenFlag() {
      this._hidden = false;
      return this._yapi.SUCCESS;
    }
    flush_now() {
      var _this = this;
      return _asyncToGenerator(function*() {
        var res = _yocto_api.YAPI_SUCCESS;
        if (_this._cmdbuff != '') {
          res = yield _this._display.sendCommand(_this._cmdbuff);
          _this._cmdbuff = '';
        }
        return res;
      })();
    }
    command_push(str_cmd) {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        var res = _yocto_api.YAPI_SUCCESS;
        if (_this2._cmdbuff.length + str_cmd.length >= 100) {
          res = yield _this2.flush_now();
        }
        if (_this2._cmdbuff == '') {
          _this2._cmdbuff = _this2._id;
        }
        _this2._cmdbuff += str_cmd;
        return res;
      })();
    }
    command_flush(str_cmd) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        var res = yield _this3.command_push(str_cmd);
        if (_this3._hidden) {
          return res;
        }
        return yield _this3.flush_now();
      })();
    }
    reset() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        _this4._hidden = false;
        return yield _this4.command_flush('X');
      })();
    }
    clear() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        return yield _this5.command_flush('x');
      })();
    }
    selectColorPen(color) {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        return yield _this6.command_push('c' + ('000000' + color.toString(16)).slice(-6));
      })();
    }
    selectGrayPen(graylevel) {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        return yield _this7.command_push('g' + String(Math.round(graylevel)));
      })();
    }
    selectEraser() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        return yield _this8.command_push('e');
      })();
    }
    setAntialiasingMode(mode) {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        return yield _this9.command_push('a' + (mode ? "1" : "0"));
      })();
    }
    drawPixel(x, y) {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        return yield _this10.command_flush('P' + String(Math.round(x)) + ',' + String(Math.round(y)));
      })();
    }
    drawRect(x1, y1, x2, y2) {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        return yield _this11.command_flush('R' + String(Math.round(x1)) + ',' + String(Math.round(y1)) + ',' + String(Math.round(x2)) + ',' + String(Math.round(y2)));
      })();
    }
    drawBar(x1, y1, x2, y2) {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        return yield _this12.command_flush('B' + String(Math.round(x1)) + ',' + String(Math.round(y1)) + ',' + String(Math.round(x2)) + ',' + String(Math.round(y2)));
      })();
    }
    drawCircle(x, y, r) {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        return yield _this13.command_flush('C' + String(Math.round(x)) + ',' + String(Math.round(y)) + ',' + String(Math.round(r)));
      })();
    }
    drawDisc(x, y, r) {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        return yield _this14.command_flush('D' + String(Math.round(x)) + ',' + String(Math.round(y)) + ',' + String(Math.round(r)));
      })();
    }
    selectFont(fontname) {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        return yield _this15.command_push('&' + fontname + '' + String.fromCharCode(27));
      })();
    }
    drawText(x, y, anchor, text) {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        return yield _this16.command_flush('T' + String(Math.round(x)) + ',' + String(Math.round(y)) + ',' + String(anchor) + ',' + text + '' + String.fromCharCode(27));
      })();
    }
    drawImage(x, y, imagename) {
      var _this17 = this;
      return _asyncToGenerator(function*() {
        return yield _this17.command_flush('*' + String(Math.round(x)) + ',' + String(Math.round(y)) + ',' + imagename + '' + String.fromCharCode(27));
      })();
    }
    drawBitmap(x, y, w, bitmap, bgcol) {
      var _this18 = this;
      return _asyncToGenerator(function*() {
        let destname;
        destname = 'layer' + String(Math.round(_this18._id)) + ':' + String(Math.round(w)) + ',' + String(Math.round(bgcol)) + '@' + String(Math.round(x)) + ',' + String(Math.round(y));
        return yield _this18._display.upload(destname, bitmap);
      })();
    }
    moveTo(x, y) {
      var _this19 = this;
      return _asyncToGenerator(function*() {
        return yield _this19.command_push('@' + String(Math.round(x)) + ',' + String(Math.round(y)));
      })();
    }
    lineTo(x, y) {
      var _this20 = this;
      return _asyncToGenerator(function*() {
        return yield _this20.command_flush('-' + String(Math.round(x)) + ',' + String(Math.round(y)));
      })();
    }
    consoleOut(text) {
      var _this21 = this;
      return _asyncToGenerator(function*() {
        return yield _this21.command_flush('!' + text + '' + String.fromCharCode(27));
      })();
    }
    setConsoleMargins(x1, y1, x2, y2) {
      var _this22 = this;
      return _asyncToGenerator(function*() {
        return yield _this22.command_push('m' + String(Math.round(x1)) + ',' + String(Math.round(y1)) + ',' + String(Math.round(x2)) + ',' + String(Math.round(y2)));
      })();
    }
    setConsoleBackground(bgcol) {
      var _this23 = this;
      return _asyncToGenerator(function*() {
        return yield _this23.command_push('b' + String(Math.round(bgcol)));
      })();
    }
    setConsoleWordWrap(wordwrap) {
      var _this24 = this;
      return _asyncToGenerator(function*() {
        return yield _this24.command_push('w' + (wordwrap ? "1" : "0"));
      })();
    }
    clearConsole() {
      var _this25 = this;
      return _asyncToGenerator(function*() {
        return yield _this25.command_flush('^');
      })();
    }
    setLayerPosition(x, y, scrollTime) {
      var _this26 = this;
      return _asyncToGenerator(function*() {
        return yield _this26.command_flush('#' + String(Math.round(x)) + ',' + String(Math.round(y)) + ',' + String(Math.round(scrollTime)));
      })();
    }
    hide() {
      var _this27 = this;
      return _asyncToGenerator(function*() {
        yield _this27.command_push('h');
        _this27._hidden = true;
        return yield _this27.flush_now();
      })();
    }
    unhide() {
      var _this28 = this;
      return _asyncToGenerator(function*() {
        _this28._hidden = false;
        return yield _this28.command_flush('s');
      })();
    }
    get_display() {
      var _this29 = this;
      return _asyncToGenerator(function*() {
        return _this29._display;
      })();
    }
    get_displayWidth() {
      var _this30 = this;
      return _asyncToGenerator(function*() {
        return yield _this30._display.get_displayWidth();
      })();
    }
    get_displayHeight() {
      var _this31 = this;
      return _asyncToGenerator(function*() {
        return yield _this31._display.get_displayHeight();
      })();
    }
    get_layerWidth() {
      var _this32 = this;
      return _asyncToGenerator(function*() {
        return yield _this32._display.get_layerWidth();
      })();
    }
    get_layerHeight() {
      var _this33 = this;
      return _asyncToGenerator(function*() {
        return yield _this33._display.get_layerHeight();
      })();
    }
    resetHiddenFlag() {
      var _this34 = this;
      return _asyncToGenerator(function*() {
        _this34._hidden = false;
        return _this34._yapi.SUCCESS;
      })();
    }
  }
  ;
  class YDisplay extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Display';
      this._enabled = Y_ENABLED_INVALID;
      this._startupSeq = Y_STARTUPSEQ_INVALID;
      this._brightness = Y_BRIGHTNESS_INVALID;
      this._orientation = Y_ORIENTATION_INVALID;
      this._displayWidth = Y_DISPLAYWIDTH_INVALID;
      this._displayHeight = Y_DISPLAYHEIGHT_INVALID;
      this._displayType = Y_DISPLAYTYPE_INVALID;
      this._layerWidth = Y_LAYERWIDTH_INVALID;
      this._layerHeight = Y_LAYERHEIGHT_INVALID;
      this._layerCount = Y_LAYERCOUNT_INVALID;
      this._command = Y_COMMAND_INVALID;
      this.imm_setConst({
        ENABLED_FALSE: 0,
        ENABLED_TRUE: 1,
        ENABLED_INVALID: -1,
        STARTUPSEQ_INVALID: _yocto_api.YAPI.INVALID_STRING,
        BRIGHTNESS_INVALID: _yocto_api.YAPI.INVALID_UINT,
        ORIENTATION_LEFT: 0,
        ORIENTATION_UP: 1,
        ORIENTATION_RIGHT: 2,
        ORIENTATION_DOWN: 3,
        ORIENTATION_INVALID: -1,
        DISPLAYWIDTH_INVALID: _yocto_api.YAPI.INVALID_UINT,
        DISPLAYHEIGHT_INVALID: _yocto_api.YAPI.INVALID_UINT,
        DISPLAYTYPE_MONO: 0,
        DISPLAYTYPE_GRAY: 1,
        DISPLAYTYPE_RGB: 2,
        DISPLAYTYPE_INVALID: -1,
        LAYERWIDTH_INVALID: _yocto_api.YAPI.INVALID_UINT,
        LAYERHEIGHT_INVALID: _yocto_api.YAPI.INVALID_UINT,
        LAYERCOUNT_INVALID: _yocto_api.YAPI.INVALID_UINT,
        COMMAND_INVALID: _yocto_api.YAPI.INVALID_STRING
      });
      this._allDisplayLayers = null;
      this._sequence = '';
      this._recording = false;
    }
    get_syncProxy() {
      var _this35 = this;
      return _asyncToGenerator(function*() {
        if (_this35._cacheExpiration <= _this35._yapi.GetTickCount()) {
          try {
            yield _this35.load(_this35._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YDisplayProxy(_this35);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'enabled':
          this._enabled = parseInt(val);
          return 1;
        case 'startupSeq':
          this._startupSeq = val;
          return 1;
        case 'brightness':
          this._brightness = parseInt(val);
          return 1;
        case 'orientation':
          this._orientation = parseInt(val);
          return 1;
        case 'displayWidth':
          this._displayWidth = parseInt(val);
          return 1;
        case 'displayHeight':
          this._displayHeight = parseInt(val);
          return 1;
        case 'displayType':
          this._displayType = parseInt(val);
          return 1;
        case 'layerWidth':
          this._layerWidth = parseInt(val);
          return 1;
        case 'layerHeight':
          this._layerHeight = parseInt(val);
          return 1;
        case 'layerCount':
          this._layerCount = parseInt(val);
          return 1;
        case 'command':
          this._command = val;
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_enabled() {
      var _this36 = this;
      return _asyncToGenerator(function*() {
        if (_this36._cacheExpiration <= _this36._yapi.GetTickCount()) {
          if ((yield _this36.load(_this36._yapi.defaultCacheValidity)) != _this36._yapi.SUCCESS) {
            return Y_ENABLED_INVALID;
          }
        }
        return _this36._enabled;
      })();
    }
    set_enabled(newval) {
      var _this37 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this37._setAttr('enabled', rest_val);
      })();
    }
    get_startupSeq() {
      var _this38 = this;
      return _asyncToGenerator(function*() {
        if (_this38._cacheExpiration <= _this38._yapi.GetTickCount()) {
          if ((yield _this38.load(_this38._yapi.defaultCacheValidity)) != _this38._yapi.SUCCESS) {
            return Y_STARTUPSEQ_INVALID;
          }
        }
        return _this38._startupSeq;
      })();
    }
    set_startupSeq(newval) {
      var _this39 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this39._setAttr('startupSeq', rest_val);
      })();
    }
    get_brightness() {
      var _this40 = this;
      return _asyncToGenerator(function*() {
        if (_this40._cacheExpiration <= _this40._yapi.GetTickCount()) {
          if ((yield _this40.load(_this40._yapi.defaultCacheValidity)) != _this40._yapi.SUCCESS) {
            return Y_BRIGHTNESS_INVALID;
          }
        }
        return _this40._brightness;
      })();
    }
    set_brightness(newval) {
      var _this41 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this41._setAttr('brightness', rest_val);
      })();
    }
    get_orientation() {
      var _this42 = this;
      return _asyncToGenerator(function*() {
        if (_this42._cacheExpiration <= _this42._yapi.GetTickCount()) {
          if ((yield _this42.load(_this42._yapi.defaultCacheValidity)) != _this42._yapi.SUCCESS) {
            return Y_ORIENTATION_INVALID;
          }
        }
        return _this42._orientation;
      })();
    }
    set_orientation(newval) {
      var _this43 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this43._setAttr('orientation', rest_val);
      })();
    }
    get_displayWidth() {
      var _this44 = this;
      return _asyncToGenerator(function*() {
        if (_this44._cacheExpiration <= _this44._yapi.GetTickCount()) {
          if ((yield _this44.load(_this44._yapi.defaultCacheValidity)) != _this44._yapi.SUCCESS) {
            return Y_DISPLAYWIDTH_INVALID;
          }
        }
        return _this44._displayWidth;
      })();
    }
    get_displayHeight() {
      var _this45 = this;
      return _asyncToGenerator(function*() {
        if (_this45._cacheExpiration <= _this45._yapi.GetTickCount()) {
          if ((yield _this45.load(_this45._yapi.defaultCacheValidity)) != _this45._yapi.SUCCESS) {
            return Y_DISPLAYHEIGHT_INVALID;
          }
        }
        return _this45._displayHeight;
      })();
    }
    get_displayType() {
      var _this46 = this;
      return _asyncToGenerator(function*() {
        if (_this46._cacheExpiration == 0) {
          if ((yield _this46.load(_this46._yapi.defaultCacheValidity)) != _this46._yapi.SUCCESS) {
            return Y_DISPLAYTYPE_INVALID;
          }
        }
        return _this46._displayType;
      })();
    }
    get_layerWidth() {
      var _this47 = this;
      return _asyncToGenerator(function*() {
        if (_this47._cacheExpiration == 0) {
          if ((yield _this47.load(_this47._yapi.defaultCacheValidity)) != _this47._yapi.SUCCESS) {
            return Y_LAYERWIDTH_INVALID;
          }
        }
        return _this47._layerWidth;
      })();
    }
    get_layerHeight() {
      var _this48 = this;
      return _asyncToGenerator(function*() {
        if (_this48._cacheExpiration == 0) {
          if ((yield _this48.load(_this48._yapi.defaultCacheValidity)) != _this48._yapi.SUCCESS) {
            return Y_LAYERHEIGHT_INVALID;
          }
        }
        return _this48._layerHeight;
      })();
    }
    get_layerCount() {
      var _this49 = this;
      return _asyncToGenerator(function*() {
        if (_this49._cacheExpiration == 0) {
          if ((yield _this49.load(_this49._yapi.defaultCacheValidity)) != _this49._yapi.SUCCESS) {
            return Y_LAYERCOUNT_INVALID;
          }
        }
        return _this49._layerCount;
      })();
    }
    get_command() {
      var _this50 = this;
      return _asyncToGenerator(function*() {
        if (_this50._cacheExpiration <= _this50._yapi.GetTickCount()) {
          if ((yield _this50.load(_this50._yapi.defaultCacheValidity)) != _this50._yapi.SUCCESS) {
            return Y_COMMAND_INVALID;
          }
        }
        return _this50._command;
      })();
    }
    set_command(newval) {
      var _this51 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this51._setAttr('command', rest_val);
      })();
    }
    static FindDisplay(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Display', func);
      if (obj == null) {
        obj = new YDisplay(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Display', func, obj);
      }
      return obj;
    }
    static FindDisplayInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Display', func);
      if (obj == null) {
        obj = new YDisplay(yctx, func);
        _yocto_api.YFunction._AddToCache('Display', func, obj);
      }
      return obj;
    }
    resetAll() {
      var _this52 = this;
      return _asyncToGenerator(function*() {
        yield _this52.flushLayers();
        _this52.imm_resetHiddenLayerFlags();
        return yield _this52.sendCommand('Z');
      })();
    }
    fade(brightness, duration) {
      var _this53 = this;
      return _asyncToGenerator(function*() {
        yield _this53.flushLayers();
        return yield _this53.sendCommand('+' + String(Math.round(brightness)) + ',' + String(Math.round(duration)));
      })();
    }
    newSequence() {
      var _this54 = this;
      return _asyncToGenerator(function*() {
        yield _this54.flushLayers();
        _this54._sequence = '';
        _this54._recording = true;
        return _this54._yapi.SUCCESS;
      })();
    }
    saveSequence(sequenceName) {
      var _this55 = this;
      return _asyncToGenerator(function*() {
        yield _this55.flushLayers();
        _this55._recording = false;
        yield _this55._upload(sequenceName, _this55._yapi.imm_str2bin(_this55._sequence));
        _this55._sequence = '';
        return _this55._yapi.SUCCESS;
      })();
    }
    playSequence(sequenceName) {
      var _this56 = this;
      return _asyncToGenerator(function*() {
        yield _this56.flushLayers();
        return yield _this56.sendCommand('S' + sequenceName);
      })();
    }
    pauseSequence(delay_ms) {
      var _this57 = this;
      return _asyncToGenerator(function*() {
        yield _this57.flushLayers();
        return yield _this57.sendCommand('W' + String(Math.round(delay_ms)));
      })();
    }
    stopSequence() {
      var _this58 = this;
      return _asyncToGenerator(function*() {
        yield _this58.flushLayers();
        return yield _this58.sendCommand('S');
      })();
    }
    upload(pathname, content) {
      var _this59 = this;
      return _asyncToGenerator(function*() {
        return yield _this59._upload(pathname, content);
      })();
    }
    copyLayerContent(srcLayerId, dstLayerId) {
      var _this60 = this;
      return _asyncToGenerator(function*() {
        yield _this60.flushLayers();
        return yield _this60.sendCommand('o' + String(Math.round(srcLayerId)) + ',' + String(Math.round(dstLayerId)));
      })();
    }
    swapLayerContent(layerIdA, layerIdB) {
      var _this61 = this;
      return _asyncToGenerator(function*() {
        yield _this61.flushLayers();
        return yield _this61.sendCommand('E' + String(Math.round(layerIdA)) + ',' + String(Math.round(layerIdB)));
      })();
    }
    nextDisplay() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YDisplay.FindDisplayInContext(this._yapi, next_hwid);
    }
    static FirstDisplay() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Display');
      if (next_hwid == null)
        return null;
      return YDisplay.FindDisplay(next_hwid);
    }
    static FirstDisplayInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Display');
      if (next_hwid == null)
        return null;
      return YDisplay.FindDisplayInContext(yctx, next_hwid);
    }
    get_displayLayer(layerId) {
      var _this62 = this;
      return _asyncToGenerator(function*() {
        if (!_this62._allDisplayLayers) {
          var nb_display_layer = yield _this62.get_layerCount();
          _this62._allDisplayLayers = [];
          for (var i = 0; i < nb_display_layer; i++) {
            _this62._allDisplayLayers[i] = new YDisplayLayer(_this62, '' + i);
          }
        }
        if (layerId < 0 || layerId >= _this62._allDisplayLayers.length) {
          throw new YAPI_Exception(_yocto_api.YAPI.INVALID_ARGUMENT, 'Invalid layerId');
        }
        return _this62._allDisplayLayers[layerId];
      })();
    }
    flushLayers() {
      var _this63 = this;
      return _asyncToGenerator(function*() {
        if (_this63._allDisplayLayers) {
          for (var i = 0; i < _this63._allDisplayLayers.length; i++) {
            if (_this63._allDisplayLayers[i].imm_must_be_flushed()) {
              yield _this63._allDisplayLayers[i].flush_now();
            }
          }
        }
        return _yocto_api.YAPI_SUCCESS;
      })();
    }
    resetHiddenLayerFlags() {
      var _this64 = this;
      return _asyncToGenerator(function*() {
        if (_this64._allDisplayLayers) {
          for (var i = 0; i < _this64._allDisplayLayers.length; i++) {
            yield _this64._allDisplayLayers[i].resetHiddenFlag();
          }
        }
      })();
    }
    imm_resetHiddenLayerFlags() {
      if (this._allDisplayLayers) {
        for (var i = 0; i < this._allDisplayLayers.length; i++) {
          this._allDisplayLayers[i].imm_resetHiddenFlag();
        }
      }
    }
    sendCommand(cmd) {
      var _this65 = this;
      return _asyncToGenerator(function*() {
        if (!_this65._recording) {
          console.log('sendCommand: ' + cmd);
          return yield _this65.set_command(cmd);
        }
        _this65._sequence += cmd + '\n';
        return _yocto_api.YAPI_SUCCESS;
      })();
    }
  }
  exports.YDisplay = YDisplay;
  class YDisplayProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    _asyncInit() {
      var _this66 = this;
      return _asyncToGenerator(function*() {
        yield _this66.liveFunc.get_displayLayer();
      })();
    }
    get_enabled() {
      return this.liveFunc._enabled;
    }
    set_enabled(newval) {
      this.liveFunc.set_enabled(newval);
      return this._yapi.SUCCESS;
    }
    get_startupSeq() {
      return this.liveFunc._startupSeq;
    }
    set_startupSeq(newval) {
      this.liveFunc.set_startupSeq(newval);
      return this._yapi.SUCCESS;
    }
    get_brightness() {
      return this.liveFunc._brightness;
    }
    set_brightness(newval) {
      this.liveFunc.set_brightness(newval);
      return this._yapi.SUCCESS;
    }
    get_orientation() {
      return this.liveFunc._orientation;
    }
    set_orientation(newval) {
      this.liveFunc.set_orientation(newval);
      return this._yapi.SUCCESS;
    }
    get_displayWidth() {
      return this.liveFunc._displayWidth;
    }
    get_displayHeight() {
      return this.liveFunc._displayHeight;
    }
    get_displayType() {
      return this.liveFunc._displayType;
    }
    get_layerWidth() {
      return this.liveFunc._layerWidth;
    }
    get_layerHeight() {
      return this.liveFunc._layerHeight;
    }
    get_layerCount() {
      return this.liveFunc._layerCount;
    }
    get_command() {
      return this.liveFunc._command;
    }
    set_command(newval) {
      this.liveFunc.set_command(newval);
      return this._yapi.SUCCESS;
    }
    resetAll() {
      this.liveFunc.resetAll();
      return _yocto_api.YAPI_SUCCESS;
    }
    fade(brightness, duration) {
      this.liveFunc.fade(brightness, duration);
      return _yocto_api.YAPI_SUCCESS;
    }
    newSequence() {
      this.liveFunc.newSequence();
      return _yocto_api.YAPI_SUCCESS;
    }
    saveSequence(sequenceName) {
      this.liveFunc.saveSequence(sequenceName);
      return _yocto_api.YAPI_SUCCESS;
    }
    playSequence(sequenceName) {
      this.liveFunc.playSequence(sequenceName);
      return _yocto_api.YAPI_SUCCESS;
    }
    pauseSequence(delay_ms) {
      this.liveFunc.pauseSequence(delay_ms);
      return _yocto_api.YAPI_SUCCESS;
    }
    stopSequence() {
      this.liveFunc.stopSequence();
      return _yocto_api.YAPI_SUCCESS;
    }
    upload(pathname, content) {
      this.liveFunc.upload(pathname, content);
      return _yocto_api.YAPI_SUCCESS;
    }
    copyLayerContent(srcLayerId, dstLayerId) {
      this.liveFunc.copyLayerContent(srcLayerId, dstLayerId);
      return _yocto_api.YAPI_SUCCESS;
    }
    swapLayerContent(layerIdA, layerIdB) {
      this.liveFunc.swapLayerContent(layerIdA, layerIdB);
      return _yocto_api.YAPI_SUCCESS;
    }
    get_displayLayer(layerId) {
      return this.liveFunc._allDisplayLayers[layerId];
    }
    flushLayers() {
      this.liveFunc.flushLayers();
      return _yocto_api.YAPI_SUCCESS;
    }
    resetHiddenLayerFlags() {
      this.liveFunc.resetHiddenLayerFlags();
      return _yocto_api.YAPI_SUCCESS;
    }
    sendCommand(cmd) {
      this.liveFunc.sendCommand(cmd);
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YDisplayProxy = YDisplayProxy;
  function yFindDisplay(func) {
    return YDisplay.FindDisplay(func);
  }
  function yFirstDisplay() {
    return YDisplay.FirstDisplay();
  }
  return module.exports;
});

$__System.registerDynamic("14", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YDualPowerProxy = exports.YDualPower = exports.Y_EXTVOLTAGE_INVALID = exports.Y_POWERCONTROL_INVALID = exports.Y_POWERCONTROL_OFF = exports.Y_POWERCONTROL_FROM_EXT = exports.Y_POWERCONTROL_FROM_USB = exports.Y_POWERCONTROL_AUTO = exports.Y_POWERSTATE_INVALID = exports.Y_POWERSTATE_FROM_EXT = exports.Y_POWERSTATE_FROM_USB = exports.Y_POWERSTATE_OFF = undefined;
  exports.yFindDualPower = yFindDualPower;
  exports.yFirstDualPower = yFirstDualPower;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_POWERSTATE_OFF = exports.Y_POWERSTATE_OFF = 0;
  var Y_POWERSTATE_FROM_USB = exports.Y_POWERSTATE_FROM_USB = 1;
  var Y_POWERSTATE_FROM_EXT = exports.Y_POWERSTATE_FROM_EXT = 2;
  var Y_POWERSTATE_INVALID = exports.Y_POWERSTATE_INVALID = -1;
  var Y_POWERCONTROL_AUTO = exports.Y_POWERCONTROL_AUTO = 0;
  var Y_POWERCONTROL_FROM_USB = exports.Y_POWERCONTROL_FROM_USB = 1;
  var Y_POWERCONTROL_FROM_EXT = exports.Y_POWERCONTROL_FROM_EXT = 2;
  var Y_POWERCONTROL_OFF = exports.Y_POWERCONTROL_OFF = 3;
  var Y_POWERCONTROL_INVALID = exports.Y_POWERCONTROL_INVALID = -1;
  var Y_EXTVOLTAGE_INVALID = exports.Y_EXTVOLTAGE_INVALID = _yocto_api.YAPI.INVALID_UINT;
  class YDualPower extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'DualPower';
      this._powerState = Y_POWERSTATE_INVALID;
      this._powerControl = Y_POWERCONTROL_INVALID;
      this._extVoltage = Y_EXTVOLTAGE_INVALID;
      this.imm_setConst({
        POWERSTATE_OFF: 0,
        POWERSTATE_FROM_USB: 1,
        POWERSTATE_FROM_EXT: 2,
        POWERSTATE_INVALID: -1,
        POWERCONTROL_AUTO: 0,
        POWERCONTROL_FROM_USB: 1,
        POWERCONTROL_FROM_EXT: 2,
        POWERCONTROL_OFF: 3,
        POWERCONTROL_INVALID: -1,
        EXTVOLTAGE_INVALID: _yocto_api.YAPI.INVALID_UINT
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YDualPowerProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'powerState':
          this._powerState = parseInt(val);
          return 1;
        case 'powerControl':
          this._powerControl = parseInt(val);
          return 1;
        case 'extVoltage':
          this._extVoltage = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_powerState() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_POWERSTATE_INVALID;
          }
        }
        return _this2._powerState;
      })();
    }
    get_powerControl() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        if (_this3._cacheExpiration <= _this3._yapi.GetTickCount()) {
          if ((yield _this3.load(_this3._yapi.defaultCacheValidity)) != _this3._yapi.SUCCESS) {
            return Y_POWERCONTROL_INVALID;
          }
        }
        return _this3._powerControl;
      })();
    }
    set_powerControl(newval) {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this4._setAttr('powerControl', rest_val);
      })();
    }
    get_extVoltage() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        if (_this5._cacheExpiration <= _this5._yapi.GetTickCount()) {
          if ((yield _this5.load(_this5._yapi.defaultCacheValidity)) != _this5._yapi.SUCCESS) {
            return Y_EXTVOLTAGE_INVALID;
          }
        }
        return _this5._extVoltage;
      })();
    }
    static FindDualPower(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('DualPower', func);
      if (obj == null) {
        obj = new YDualPower(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('DualPower', func, obj);
      }
      return obj;
    }
    static FindDualPowerInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'DualPower', func);
      if (obj == null) {
        obj = new YDualPower(yctx, func);
        _yocto_api.YFunction._AddToCache('DualPower', func, obj);
      }
      return obj;
    }
    nextDualPower() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YDualPower.FindDualPowerInContext(this._yapi, next_hwid);
    }
    static FirstDualPower() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('DualPower');
      if (next_hwid == null)
        return null;
      return YDualPower.FindDualPower(next_hwid);
    }
    static FirstDualPowerInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('DualPower');
      if (next_hwid == null)
        return null;
      return YDualPower.FindDualPowerInContext(yctx, next_hwid);
    }
  }
  exports.YDualPower = YDualPower;
  class YDualPowerProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_powerState() {
      return this.liveFunc._powerState;
    }
    get_powerControl() {
      return this.liveFunc._powerControl;
    }
    set_powerControl(newval) {
      this.liveFunc.set_powerControl(newval);
      return this._yapi.SUCCESS;
    }
    get_extVoltage() {
      return this.liveFunc._extVoltage;
    }
  }
  exports.YDualPowerProxy = YDualPowerProxy;
  function yFindDualPower(func) {
    return YDualPower.FindDualPower(func);
  }
  function yFirstDualPower() {
    return YDualPower.FirstDualPower();
  }
  return module.exports;
});

$__System.registerDynamic("15", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YFilesProxy = exports.YFiles = exports.Y_FREESPACE_INVALID = exports.Y_FILESCOUNT_INVALID = undefined;
  exports.yFindFiles = yFindFiles;
  exports.yFirstFiles = yFirstFiles;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_FILESCOUNT_INVALID = exports.Y_FILESCOUNT_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_FREESPACE_INVALID = exports.Y_FREESPACE_INVALID = _yocto_api.YAPI.INVALID_UINT;
  class YFileRecord {
    constructor(str_json) {
      this._name = '';
      this._size = 0;
      this._crc = 0;
      var loadval = JSON.parse(str_json);
      this._name = loadval.name;
      this._size = loadval.size;
      this._crc = loadval.crc;
    }
    get_name() {
      var _this = this;
      return _asyncToGenerator(function*() {
        return _this._name;
      })();
    }
    get_size() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        return _this2._size;
      })();
    }
    get_crc() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        return _this3._crc;
      })();
    }
  }
  class YFiles extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Files';
      this._filesCount = Y_FILESCOUNT_INVALID;
      this._freeSpace = Y_FREESPACE_INVALID;
      this.imm_setConst({
        FILESCOUNT_INVALID: _yocto_api.YAPI.INVALID_UINT,
        FREESPACE_INVALID: _yocto_api.YAPI.INVALID_UINT
      });
    }
    get_syncProxy() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          try {
            yield _this4.load(_this4._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YFilesProxy(_this4);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'filesCount':
          this._filesCount = parseInt(val);
          return 1;
        case 'freeSpace':
          this._freeSpace = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_filesCount() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        if (_this5._cacheExpiration <= _this5._yapi.GetTickCount()) {
          if ((yield _this5.load(_this5._yapi.defaultCacheValidity)) != _this5._yapi.SUCCESS) {
            return Y_FILESCOUNT_INVALID;
          }
        }
        return _this5._filesCount;
      })();
    }
    get_freeSpace() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_FREESPACE_INVALID;
          }
        }
        return _this6._freeSpace;
      })();
    }
    static FindFiles(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Files', func);
      if (obj == null) {
        obj = new YFiles(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Files', func, obj);
      }
      return obj;
    }
    static FindFilesInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Files', func);
      if (obj == null) {
        obj = new YFiles(yctx, func);
        _yocto_api.YFunction._AddToCache('Files', func, obj);
      }
      return obj;
    }
    sendCommand(command) {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        let url;
        url = 'files.json?a=' + command;
        return yield _this7._download(url);
      })();
    }
    format_fs() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        let json;
        let res;
        json = yield _this8.sendCommand('format');
        res = _this8.imm_json_get_key(json, 'res');
        if (!(res == 'ok')) {
          return _this8._throw(_this8._yapi.IO_ERROR, 'format failed', _this8._yapi.IO_ERROR);
        }
        return _this8._yapi.SUCCESS;
      })();
    }
    get_list(pattern) {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        let json;
        let filelist = [];
        let res = [];
        json = yield _this9.sendCommand('dir&f=' + pattern);
        filelist = _this9.imm_json_get_array(json);
        res.length = 0;
        for (let ii in filelist) {
          res.push(new YFileRecord(filelist[ii]));
        }
        return res;
      })();
    }
    fileExist(filename) {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        let json;
        let filelist = [];
        if (filename.length == 0) {
          return false;
        }
        json = yield _this10.sendCommand('dir&f=' + filename);
        filelist = _this10.imm_json_get_array(json);
        if (filelist.length > 0) {
          return true;
        }
        return false;
      })();
    }
    download(pathname) {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        return yield _this11._download(pathname);
      })();
    }
    upload(pathname, content) {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        return yield _this12._upload(pathname, content);
      })();
    }
    remove(pathname) {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        let json;
        let res;
        json = yield _this13.sendCommand('del&f=' + pathname);
        res = _this13.imm_json_get_key(json, 'res');
        if (!(res == 'ok')) {
          return _this13._throw(_this13._yapi.IO_ERROR, 'unable to remove file', _this13._yapi.IO_ERROR);
        }
        return _this13._yapi.SUCCESS;
      })();
    }
    nextFiles() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YFiles.FindFilesInContext(this._yapi, next_hwid);
    }
    static FirstFiles() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Files');
      if (next_hwid == null)
        return null;
      return YFiles.FindFiles(next_hwid);
    }
    static FirstFilesInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Files');
      if (next_hwid == null)
        return null;
      return YFiles.FindFilesInContext(yctx, next_hwid);
    }
  }
  exports.YFiles = YFiles;
  class YFilesProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    _asyncInit() {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        _this14.liveFunc._cachedFileList = yield _this14.liveFunc.get_list('');
      })();
    }
    get_list(pattern) {
      var files = this.liveFunc._cachedFileList;
      var res = [];
      var regExp = new RegExp(pattern.replace(/([+.^])/g, '\\$1').replace(/[*]/g, '.*').replace(/[?]/g, '.'));
      for (let i = 0; i < files.length; i++) {
        if (regExp.test(files[i]._name)) {
          let recProxy = {
            _name: files[i]._name,
            _size: files[i]._size,
            _crc: files[i]._crc
          };
          recProxy.get_name = function() {
            return this._name;
          };
          recProxy.get_size = function() {
            return this._size;
          };
          recProxy.get_crc = function() {
            return this._crc;
          };
          recProxy.name = recProxy.get_name;
          recProxy.size = recProxy.get_size;
          recProxy.crc = recProxy.get_crc;
          res.push(recProxy);
        }
      }
      return res;
    }
    download_async(pathname, callback, context) {
      var _this15 = this;
      this.liveFunc.download(pathname).then(function(data) {
        callback(context, _this15, _this15._yapi.imm_bin2str(data));
      });
    }
    upload(pathname, content) {
      var _this16 = this;
      this.liveFunc.upload(pathname, content).then(function() {
        _this16._asyncInit();
      });
      return _yocto_api.YAPI_SUCCESS;
    }
    remove(pathname) {
      var _this17 = this;
      this.liveFunc.remove(pathname).then(function() {
        _this17._asyncInit();
      });
      return _yocto_api.YAPI_SUCCESS;
    }
    get_filesCount() {
      return this.liveFunc._filesCount;
    }
    get_freeSpace() {
      return this.liveFunc._freeSpace;
    }
    format_fs() {
      this.liveFunc.format_fs();
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YFilesProxy = YFilesProxy;
  function yFindFiles(func) {
    return YFiles.FindFiles(func);
  }
  function yFirstFiles() {
    return YFiles.FirstFiles();
  }
  return module.exports;
});

$__System.registerDynamic("16", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YGenericSensorProxy = exports.YGenericSensor = exports.Y_SIGNALBIAS_INVALID = exports.Y_VALUERANGE_INVALID = exports.Y_SIGNALRANGE_INVALID = exports.Y_SIGNALUNIT_INVALID = exports.Y_SIGNALVALUE_INVALID = exports.Y_SIGNALSAMPLING_INVALID = exports.Y_SIGNALSAMPLING_LOW_NOISE_FILTERED = exports.Y_SIGNALSAMPLING_LOW_NOISE = exports.Y_SIGNALSAMPLING_HIGH_RATE_FILTERED = exports.Y_SIGNALSAMPLING_HIGH_RATE = undefined;
  exports.yFindGenericSensor = yFindGenericSensor;
  exports.yFirstGenericSensor = yFirstGenericSensor;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_SIGNALSAMPLING_HIGH_RATE = exports.Y_SIGNALSAMPLING_HIGH_RATE = 0;
  var Y_SIGNALSAMPLING_HIGH_RATE_FILTERED = exports.Y_SIGNALSAMPLING_HIGH_RATE_FILTERED = 1;
  var Y_SIGNALSAMPLING_LOW_NOISE = exports.Y_SIGNALSAMPLING_LOW_NOISE = 2;
  var Y_SIGNALSAMPLING_LOW_NOISE_FILTERED = exports.Y_SIGNALSAMPLING_LOW_NOISE_FILTERED = 3;
  var Y_SIGNALSAMPLING_INVALID = exports.Y_SIGNALSAMPLING_INVALID = -1;
  var Y_SIGNALVALUE_INVALID = exports.Y_SIGNALVALUE_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_SIGNALUNIT_INVALID = exports.Y_SIGNALUNIT_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_SIGNALRANGE_INVALID = exports.Y_SIGNALRANGE_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_VALUERANGE_INVALID = exports.Y_VALUERANGE_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_SIGNALBIAS_INVALID = exports.Y_SIGNALBIAS_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  class YGenericSensor extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'GenericSensor';
      this._signalValue = Y_SIGNALVALUE_INVALID;
      this._signalUnit = Y_SIGNALUNIT_INVALID;
      this._signalRange = Y_SIGNALRANGE_INVALID;
      this._valueRange = Y_VALUERANGE_INVALID;
      this._signalBias = Y_SIGNALBIAS_INVALID;
      this._signalSampling = Y_SIGNALSAMPLING_INVALID;
      this.imm_setConst({
        SIGNALVALUE_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        SIGNALUNIT_INVALID: _yocto_api.YAPI.INVALID_STRING,
        SIGNALRANGE_INVALID: _yocto_api.YAPI.INVALID_STRING,
        VALUERANGE_INVALID: _yocto_api.YAPI.INVALID_STRING,
        SIGNALBIAS_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        SIGNALSAMPLING_HIGH_RATE: 0,
        SIGNALSAMPLING_HIGH_RATE_FILTERED: 1,
        SIGNALSAMPLING_LOW_NOISE: 2,
        SIGNALSAMPLING_LOW_NOISE_FILTERED: 3,
        SIGNALSAMPLING_INVALID: -1
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YGenericSensorProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'signalValue':
          this._signalValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'signalUnit':
          this._signalUnit = val;
          return 1;
        case 'signalRange':
          this._signalRange = val;
          return 1;
        case 'valueRange':
          this._valueRange = val;
          return 1;
        case 'signalBias':
          this._signalBias = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'signalSampling':
          this._signalSampling = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    set_unit(newval) {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this2._setAttr('unit', rest_val);
      })();
    }
    get_signalValue() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        if (_this3._cacheExpiration <= _this3._yapi.GetTickCount()) {
          if ((yield _this3.load(_this3._yapi.defaultCacheValidity)) != _this3._yapi.SUCCESS) {
            return Y_SIGNALVALUE_INVALID;
          }
        }
        return Math.round(_this3._signalValue * 1000) / 1000;
      })();
    }
    get_signalUnit() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration == 0) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_SIGNALUNIT_INVALID;
          }
        }
        return _this4._signalUnit;
      })();
    }
    get_signalRange() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        if (_this5._cacheExpiration <= _this5._yapi.GetTickCount()) {
          if ((yield _this5.load(_this5._yapi.defaultCacheValidity)) != _this5._yapi.SUCCESS) {
            return Y_SIGNALRANGE_INVALID;
          }
        }
        return _this5._signalRange;
      })();
    }
    set_signalRange(newval) {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this6._setAttr('signalRange', rest_val);
      })();
    }
    get_valueRange() {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        if (_this7._cacheExpiration <= _this7._yapi.GetTickCount()) {
          if ((yield _this7.load(_this7._yapi.defaultCacheValidity)) != _this7._yapi.SUCCESS) {
            return Y_VALUERANGE_INVALID;
          }
        }
        return _this7._valueRange;
      })();
    }
    set_valueRange(newval) {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this8._setAttr('valueRange', rest_val);
      })();
    }
    set_signalBias(newval) {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this9._setAttr('signalBias', rest_val);
      })();
    }
    get_signalBias() {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        if (_this10._cacheExpiration <= _this10._yapi.GetTickCount()) {
          if ((yield _this10.load(_this10._yapi.defaultCacheValidity)) != _this10._yapi.SUCCESS) {
            return Y_SIGNALBIAS_INVALID;
          }
        }
        return _this10._signalBias;
      })();
    }
    get_signalSampling() {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        if (_this11._cacheExpiration <= _this11._yapi.GetTickCount()) {
          if ((yield _this11.load(_this11._yapi.defaultCacheValidity)) != _this11._yapi.SUCCESS) {
            return Y_SIGNALSAMPLING_INVALID;
          }
        }
        return _this11._signalSampling;
      })();
    }
    set_signalSampling(newval) {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this12._setAttr('signalSampling', rest_val);
      })();
    }
    static FindGenericSensor(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('GenericSensor', func);
      if (obj == null) {
        obj = new YGenericSensor(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('GenericSensor', func, obj);
      }
      return obj;
    }
    static FindGenericSensorInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'GenericSensor', func);
      if (obj == null) {
        obj = new YGenericSensor(yctx, func);
        _yocto_api.YFunction._AddToCache('GenericSensor', func, obj);
      }
      return obj;
    }
    zeroAdjust() {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        let currSignal;
        let currBias;
        currSignal = yield _this13.get_signalValue();
        currBias = yield _this13.get_signalBias();
        return yield _this13.set_signalBias(currSignal + currBias);
      })();
    }
    nextGenericSensor() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YGenericSensor.FindGenericSensorInContext(this._yapi, next_hwid);
    }
    static FirstGenericSensor() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('GenericSensor');
      if (next_hwid == null)
        return null;
      return YGenericSensor.FindGenericSensor(next_hwid);
    }
    static FirstGenericSensorInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('GenericSensor');
      if (next_hwid == null)
        return null;
      return YGenericSensor.FindGenericSensorInContext(yctx, next_hwid);
    }
  }
  exports.YGenericSensor = YGenericSensor;
  class YGenericSensorProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    set_unit(newval) {
      this.liveFunc.set_unit(newval);
      return this._yapi.SUCCESS;
    }
    get_signalValue() {
      return this.liveFunc._signalValue;
    }
    get_signalUnit() {
      return this.liveFunc._signalUnit;
    }
    get_signalRange() {
      return this.liveFunc._signalRange;
    }
    set_signalRange(newval) {
      this.liveFunc.set_signalRange(newval);
      return this._yapi.SUCCESS;
    }
    get_valueRange() {
      return this.liveFunc._valueRange;
    }
    set_valueRange(newval) {
      this.liveFunc.set_valueRange(newval);
      return this._yapi.SUCCESS;
    }
    set_signalBias(newval) {
      this.liveFunc.set_signalBias(newval);
      return this._yapi.SUCCESS;
    }
    get_signalBias() {
      return this.liveFunc._signalBias;
    }
    get_signalSampling() {
      return this.liveFunc._signalSampling;
    }
    set_signalSampling(newval) {
      this.liveFunc.set_signalSampling(newval);
      return this._yapi.SUCCESS;
    }
    zeroAdjust() {
      this.liveFunc.zeroAdjust();
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YGenericSensorProxy = YGenericSensorProxy;
  function yFindGenericSensor(func) {
    return YGenericSensor.FindGenericSensor(func);
  }
  function yFirstGenericSensor() {
    return YGenericSensor.FirstGenericSensor();
  }
  return module.exports;
});

$__System.registerDynamic("17", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YGpsProxy = exports.YGps = exports.Y_COMMAND_INVALID = exports.Y_UTCOFFSET_INVALID = exports.Y_DATETIME_INVALID = exports.Y_UNIXTIME_INVALID = exports.Y_DIRECTION_INVALID = exports.Y_GROUNDSPEED_INVALID = exports.Y_ALTITUDE_INVALID = exports.Y_DILUTION_INVALID = exports.Y_LONGITUDE_INVALID = exports.Y_LATITUDE_INVALID = exports.Y_SATCOUNT_INVALID = exports.Y_COORDSYSTEM_INVALID = exports.Y_COORDSYSTEM_GPS_D = exports.Y_COORDSYSTEM_GPS_DM = exports.Y_COORDSYSTEM_GPS_DMS = exports.Y_ISFIXED_INVALID = exports.Y_ISFIXED_TRUE = exports.Y_ISFIXED_FALSE = undefined;
  exports.yFindGps = yFindGps;
  exports.yFirstGps = yFirstGps;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_ISFIXED_FALSE = exports.Y_ISFIXED_FALSE = 0;
  var Y_ISFIXED_TRUE = exports.Y_ISFIXED_TRUE = 1;
  var Y_ISFIXED_INVALID = exports.Y_ISFIXED_INVALID = -1;
  var Y_COORDSYSTEM_GPS_DMS = exports.Y_COORDSYSTEM_GPS_DMS = 0;
  var Y_COORDSYSTEM_GPS_DM = exports.Y_COORDSYSTEM_GPS_DM = 1;
  var Y_COORDSYSTEM_GPS_D = exports.Y_COORDSYSTEM_GPS_D = 2;
  var Y_COORDSYSTEM_INVALID = exports.Y_COORDSYSTEM_INVALID = -1;
  var Y_SATCOUNT_INVALID = exports.Y_SATCOUNT_INVALID = _yocto_api.YAPI.INVALID_LONG;
  var Y_LATITUDE_INVALID = exports.Y_LATITUDE_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_LONGITUDE_INVALID = exports.Y_LONGITUDE_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_DILUTION_INVALID = exports.Y_DILUTION_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_ALTITUDE_INVALID = exports.Y_ALTITUDE_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_GROUNDSPEED_INVALID = exports.Y_GROUNDSPEED_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_DIRECTION_INVALID = exports.Y_DIRECTION_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_UNIXTIME_INVALID = exports.Y_UNIXTIME_INVALID = _yocto_api.YAPI.INVALID_LONG;
  var Y_DATETIME_INVALID = exports.Y_DATETIME_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_UTCOFFSET_INVALID = exports.Y_UTCOFFSET_INVALID = _yocto_api.YAPI.INVALID_INT;
  var Y_COMMAND_INVALID = exports.Y_COMMAND_INVALID = _yocto_api.YAPI.INVALID_STRING;
  class YGps extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Gps';
      this._isFixed = Y_ISFIXED_INVALID;
      this._satCount = Y_SATCOUNT_INVALID;
      this._coordSystem = Y_COORDSYSTEM_INVALID;
      this._latitude = Y_LATITUDE_INVALID;
      this._longitude = Y_LONGITUDE_INVALID;
      this._dilution = Y_DILUTION_INVALID;
      this._altitude = Y_ALTITUDE_INVALID;
      this._groundSpeed = Y_GROUNDSPEED_INVALID;
      this._direction = Y_DIRECTION_INVALID;
      this._unixTime = Y_UNIXTIME_INVALID;
      this._dateTime = Y_DATETIME_INVALID;
      this._utcOffset = Y_UTCOFFSET_INVALID;
      this._command = Y_COMMAND_INVALID;
      this.imm_setConst({
        ISFIXED_FALSE: 0,
        ISFIXED_TRUE: 1,
        ISFIXED_INVALID: -1,
        SATCOUNT_INVALID: _yocto_api.YAPI.INVALID_LONG,
        COORDSYSTEM_GPS_DMS: 0,
        COORDSYSTEM_GPS_DM: 1,
        COORDSYSTEM_GPS_D: 2,
        COORDSYSTEM_INVALID: -1,
        LATITUDE_INVALID: _yocto_api.YAPI.INVALID_STRING,
        LONGITUDE_INVALID: _yocto_api.YAPI.INVALID_STRING,
        DILUTION_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        ALTITUDE_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        GROUNDSPEED_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        DIRECTION_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        UNIXTIME_INVALID: _yocto_api.YAPI.INVALID_LONG,
        DATETIME_INVALID: _yocto_api.YAPI.INVALID_STRING,
        UTCOFFSET_INVALID: _yocto_api.YAPI.INVALID_INT,
        COMMAND_INVALID: _yocto_api.YAPI.INVALID_STRING
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YGpsProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'isFixed':
          this._isFixed = parseInt(val);
          return 1;
        case 'satCount':
          this._satCount = parseInt(val);
          return 1;
        case 'coordSystem':
          this._coordSystem = parseInt(val);
          return 1;
        case 'latitude':
          this._latitude = val;
          return 1;
        case 'longitude':
          this._longitude = val;
          return 1;
        case 'dilution':
          this._dilution = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'altitude':
          this._altitude = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'groundSpeed':
          this._groundSpeed = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'direction':
          this._direction = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'unixTime':
          this._unixTime = parseInt(val);
          return 1;
        case 'dateTime':
          this._dateTime = val;
          return 1;
        case 'utcOffset':
          this._utcOffset = parseInt(val);
          return 1;
        case 'command':
          this._command = val;
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_isFixed() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_ISFIXED_INVALID;
          }
        }
        return _this2._isFixed;
      })();
    }
    get_satCount() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        if (_this3._cacheExpiration <= _this3._yapi.GetTickCount()) {
          if ((yield _this3.load(_this3._yapi.defaultCacheValidity)) != _this3._yapi.SUCCESS) {
            return Y_SATCOUNT_INVALID;
          }
        }
        return _this3._satCount;
      })();
    }
    get_coordSystem() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_COORDSYSTEM_INVALID;
          }
        }
        return _this4._coordSystem;
      })();
    }
    set_coordSystem(newval) {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this5._setAttr('coordSystem', rest_val);
      })();
    }
    get_latitude() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_LATITUDE_INVALID;
          }
        }
        return _this6._latitude;
      })();
    }
    get_longitude() {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        if (_this7._cacheExpiration <= _this7._yapi.GetTickCount()) {
          if ((yield _this7.load(_this7._yapi.defaultCacheValidity)) != _this7._yapi.SUCCESS) {
            return Y_LONGITUDE_INVALID;
          }
        }
        return _this7._longitude;
      })();
    }
    get_dilution() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        if (_this8._cacheExpiration <= _this8._yapi.GetTickCount()) {
          if ((yield _this8.load(_this8._yapi.defaultCacheValidity)) != _this8._yapi.SUCCESS) {
            return Y_DILUTION_INVALID;
          }
        }
        return _this8._dilution;
      })();
    }
    get_altitude() {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        if (_this9._cacheExpiration <= _this9._yapi.GetTickCount()) {
          if ((yield _this9.load(_this9._yapi.defaultCacheValidity)) != _this9._yapi.SUCCESS) {
            return Y_ALTITUDE_INVALID;
          }
        }
        return _this9._altitude;
      })();
    }
    get_groundSpeed() {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        if (_this10._cacheExpiration <= _this10._yapi.GetTickCount()) {
          if ((yield _this10.load(_this10._yapi.defaultCacheValidity)) != _this10._yapi.SUCCESS) {
            return Y_GROUNDSPEED_INVALID;
          }
        }
        return _this10._groundSpeed;
      })();
    }
    get_direction() {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        if (_this11._cacheExpiration <= _this11._yapi.GetTickCount()) {
          if ((yield _this11.load(_this11._yapi.defaultCacheValidity)) != _this11._yapi.SUCCESS) {
            return Y_DIRECTION_INVALID;
          }
        }
        return _this11._direction;
      })();
    }
    get_unixTime() {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        if (_this12._cacheExpiration <= _this12._yapi.GetTickCount()) {
          if ((yield _this12.load(_this12._yapi.defaultCacheValidity)) != _this12._yapi.SUCCESS) {
            return Y_UNIXTIME_INVALID;
          }
        }
        return _this12._unixTime;
      })();
    }
    get_dateTime() {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        if (_this13._cacheExpiration <= _this13._yapi.GetTickCount()) {
          if ((yield _this13.load(_this13._yapi.defaultCacheValidity)) != _this13._yapi.SUCCESS) {
            return Y_DATETIME_INVALID;
          }
        }
        return _this13._dateTime;
      })();
    }
    get_utcOffset() {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        if (_this14._cacheExpiration <= _this14._yapi.GetTickCount()) {
          if ((yield _this14.load(_this14._yapi.defaultCacheValidity)) != _this14._yapi.SUCCESS) {
            return Y_UTCOFFSET_INVALID;
          }
        }
        return _this14._utcOffset;
      })();
    }
    set_utcOffset(newval) {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this15._setAttr('utcOffset', rest_val);
      })();
    }
    get_command() {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        if (_this16._cacheExpiration <= _this16._yapi.GetTickCount()) {
          if ((yield _this16.load(_this16._yapi.defaultCacheValidity)) != _this16._yapi.SUCCESS) {
            return Y_COMMAND_INVALID;
          }
        }
        return _this16._command;
      })();
    }
    set_command(newval) {
      var _this17 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this17._setAttr('command', rest_val);
      })();
    }
    static FindGps(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Gps', func);
      if (obj == null) {
        obj = new YGps(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Gps', func, obj);
      }
      return obj;
    }
    static FindGpsInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Gps', func);
      if (obj == null) {
        obj = new YGps(yctx, func);
        _yocto_api.YFunction._AddToCache('Gps', func, obj);
      }
      return obj;
    }
    nextGps() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YGps.FindGpsInContext(this._yapi, next_hwid);
    }
    static FirstGps() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Gps');
      if (next_hwid == null)
        return null;
      return YGps.FindGps(next_hwid);
    }
    static FirstGpsInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Gps');
      if (next_hwid == null)
        return null;
      return YGps.FindGpsInContext(yctx, next_hwid);
    }
  }
  exports.YGps = YGps;
  class YGpsProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_isFixed() {
      return this.liveFunc._isFixed;
    }
    get_satCount() {
      return this.liveFunc._satCount;
    }
    get_coordSystem() {
      return this.liveFunc._coordSystem;
    }
    set_coordSystem(newval) {
      this.liveFunc.set_coordSystem(newval);
      return this._yapi.SUCCESS;
    }
    get_latitude() {
      return this.liveFunc._latitude;
    }
    get_longitude() {
      return this.liveFunc._longitude;
    }
    get_dilution() {
      return this.liveFunc._dilution;
    }
    get_altitude() {
      return this.liveFunc._altitude;
    }
    get_groundSpeed() {
      return this.liveFunc._groundSpeed;
    }
    get_direction() {
      return this.liveFunc._direction;
    }
    get_unixTime() {
      return this.liveFunc._unixTime;
    }
    get_dateTime() {
      return this.liveFunc._dateTime;
    }
    get_utcOffset() {
      return this.liveFunc._utcOffset;
    }
    set_utcOffset(newval) {
      this.liveFunc.set_utcOffset(newval);
      return this._yapi.SUCCESS;
    }
    get_command() {
      return this.liveFunc._command;
    }
    set_command(newval) {
      this.liveFunc.set_command(newval);
      return this._yapi.SUCCESS;
    }
  }
  exports.YGpsProxy = YGpsProxy;
  function yFindGps(func) {
    return YGps.FindGps(func);
  }
  function yFirstGps() {
    return YGps.FirstGps();
  }
  return module.exports;
});

$__System.registerDynamic("18", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YGroundSpeedProxy = exports.YGroundSpeed = undefined;
  exports.yFindGroundSpeed = yFindGroundSpeed;
  exports.yFirstGroundSpeed = yFirstGroundSpeed;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  class YGroundSpeed extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'GroundSpeed';
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YGroundSpeedProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    static FindGroundSpeed(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('GroundSpeed', func);
      if (obj == null) {
        obj = new YGroundSpeed(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('GroundSpeed', func, obj);
      }
      return obj;
    }
    static FindGroundSpeedInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'GroundSpeed', func);
      if (obj == null) {
        obj = new YGroundSpeed(yctx, func);
        _yocto_api.YFunction._AddToCache('GroundSpeed', func, obj);
      }
      return obj;
    }
    nextGroundSpeed() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YGroundSpeed.FindGroundSpeedInContext(this._yapi, next_hwid);
    }
    static FirstGroundSpeed() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('GroundSpeed');
      if (next_hwid == null)
        return null;
      return YGroundSpeed.FindGroundSpeed(next_hwid);
    }
    static FirstGroundSpeedInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('GroundSpeed');
      if (next_hwid == null)
        return null;
      return YGroundSpeed.FindGroundSpeedInContext(yctx, next_hwid);
    }
  }
  exports.YGroundSpeed = YGroundSpeed;
  class YGroundSpeedProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
  }
  exports.YGroundSpeedProxy = YGroundSpeedProxy;
  function yFindGroundSpeed(func) {
    return YGroundSpeed.FindGroundSpeed(func);
  }
  function yFirstGroundSpeed() {
    return YGroundSpeed.FirstGroundSpeed();
  }
  return module.exports;
});

$__System.registerDynamic("19", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YGyroProxy = exports.YGyro = exports.YQtProxy = exports.YQt = exports.Y_ZVALUE_INVALID = exports.Y_YVALUE_INVALID = exports.Y_XVALUE_INVALID = undefined;
  let yInternalGyroCallback = function() {
    var ref = _asyncToGenerator(function*(YQt_obj, str_value) {
      var gyro = yield YQt_obj.get_userData();
      if (!gyro)
        return;
      var idx = parseInt(YQt_obj.imm_get_functionId().slice(2));
      gyro._invokeGyroCallbacks(idx, parseInt(str_value));
    });
    return function yInternalGyroCallback(_x, _x2) {
      return ref.apply(this, arguments);
    };
  }();
  exports.yFindQt = yFindQt;
  exports.yFirstQt = yFirstQt;
  exports.yFindGyro = yFindGyro;
  exports.yFirstGyro = yFirstGyro;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_XVALUE_INVALID = exports.Y_XVALUE_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_YVALUE_INVALID = exports.Y_YVALUE_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_ZVALUE_INVALID = exports.Y_ZVALUE_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  class YQt extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Qt';
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YQtProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    static FindQt(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Qt', func);
      if (obj == null) {
        obj = new YQt(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Qt', func, obj);
      }
      return obj;
    }
    static FindQtInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Qt', func);
      if (obj == null) {
        obj = new YQt(yctx, func);
        _yocto_api.YFunction._AddToCache('Qt', func, obj);
      }
      return obj;
    }
    nextQt() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YQt.FindQtInContext(this._yapi, next_hwid);
    }
    static FirstQt() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Qt');
      if (next_hwid == null)
        return null;
      return YQt.FindQt(next_hwid);
    }
    static FirstQtInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Qt');
      if (next_hwid == null)
        return null;
      return YQt.FindQtInContext(yctx, next_hwid);
    }
  }
  exports.YQt = YQt;
  function yFindQt(func) {
    return YQt.FindQt(func);
  }
  function yFirstQt() {
    return YQt.FirstQt();
  }
  class YQtProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
  }
  exports.YQtProxy = YQtProxy;
  class YGyro extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Gyro';
      this._xValue = Y_XVALUE_INVALID;
      this._yValue = Y_YVALUE_INVALID;
      this._zValue = Y_ZVALUE_INVALID;
      this._qt_stamp = 0;
      this._qt_w = null;
      this._qt_x = null;
      this._qt_y = null;
      this._qt_z = null;
      this._w = 0;
      this._x = 0;
      this._y = 0;
      this._z = 0;
      this._angles_stamp = 0;
      this._head = 0;
      this._pitch = 0;
      this._roll = 0;
      this._quatCallback = null;
      this._anglesCallback = null;
      this.imm_setConst({
        XVALUE_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        YVALUE_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        ZVALUE_INVALID: _yocto_api.YAPI.INVALID_DOUBLE
      });
    }
    get_syncProxy() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          try {
            yield _this2.load(_this2._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YGyroProxy(_this2);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'xValue':
          this._xValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'yValue':
          this._yValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'zValue':
          this._zValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_xValue() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        if (_this3._cacheExpiration <= _this3._yapi.GetTickCount()) {
          if ((yield _this3.load(_this3._yapi.defaultCacheValidity)) != _this3._yapi.SUCCESS) {
            return Y_XVALUE_INVALID;
          }
        }
        return _this3._xValue;
      })();
    }
    get_yValue() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_YVALUE_INVALID;
          }
        }
        return _this4._yValue;
      })();
    }
    get_zValue() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        if (_this5._cacheExpiration <= _this5._yapi.GetTickCount()) {
          if ((yield _this5.load(_this5._yapi.defaultCacheValidity)) != _this5._yapi.SUCCESS) {
            return Y_ZVALUE_INVALID;
          }
        }
        return _this5._zValue;
      })();
    }
    static FindGyro(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Gyro', func);
      if (obj == null) {
        obj = new YGyro(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Gyro', func, obj);
      }
      return obj;
    }
    static FindGyroInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Gyro', func);
      if (obj == null) {
        obj = new YGyro(yctx, func);
        _yocto_api.YFunction._AddToCache('Gyro', func, obj);
      }
      return obj;
    }
    _loadQuaternion() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        let now_stamp;
        let age_ms;
        now_stamp = _this6._yapi.GetTickCount() & 0x7FFFFFFF;
        age_ms = now_stamp - _this6._qt_stamp & 0x7FFFFFFF;
        if (age_ms >= 10 || _this6._qt_stamp == 0) {
          if ((yield _this6.load(10)) != _this6._yapi.SUCCESS) {
            return _this6._yapi.DEVICE_NOT_FOUND;
          }
          if (_this6._qt_stamp == 0) {
            _this6._qt_w = yield YQt.FindQtInContext(_this6._yapi, _this6._serial + '.qt1');
            _this6._qt_x = yield YQt.FindQtInContext(_this6._yapi, _this6._serial + '.qt2');
            _this6._qt_y = yield YQt.FindQtInContext(_this6._yapi, _this6._serial + '.qt3');
            _this6._qt_z = yield YQt.FindQtInContext(_this6._yapi, _this6._serial + '.qt4');
          }
          if ((yield _this6._qt_w.load(9)) != _this6._yapi.SUCCESS) {
            return _this6._yapi.DEVICE_NOT_FOUND;
          }
          if ((yield _this6._qt_x.load(9)) != _this6._yapi.SUCCESS) {
            return _this6._yapi.DEVICE_NOT_FOUND;
          }
          if ((yield _this6._qt_y.load(9)) != _this6._yapi.SUCCESS) {
            return _this6._yapi.DEVICE_NOT_FOUND;
          }
          if ((yield _this6._qt_z.load(9)) != _this6._yapi.SUCCESS) {
            return _this6._yapi.DEVICE_NOT_FOUND;
          }
          _this6._w = yield _this6._qt_w.get_currentValue();
          _this6._x = yield _this6._qt_x.get_currentValue();
          _this6._y = yield _this6._qt_y.get_currentValue();
          _this6._z = yield _this6._qt_z.get_currentValue();
          _this6._qt_stamp = now_stamp;
        }
        return _this6._yapi.SUCCESS;
      })();
    }
    _loadAngles() {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        let sqw;
        let sqx;
        let sqy;
        let sqz;
        let norm;
        let delta;
        if ((yield _this7._loadQuaternion()) != _this7._yapi.SUCCESS) {
          return _this7._yapi.DEVICE_NOT_FOUND;
        }
        if (_this7._angles_stamp != _this7._qt_stamp) {
          sqw = _this7._w * _this7._w;
          sqx = _this7._x * _this7._x;
          sqy = _this7._y * _this7._y;
          sqz = _this7._z * _this7._z;
          norm = sqx + sqy + sqz + sqw;
          delta = _this7._y * _this7._w - _this7._x * _this7._z;
          if (delta > 0.499 * norm) {
            _this7._pitch = 90.0;
            _this7._head = Math.round(2.0 * 1800.0 / Math.PI * Math.atan2(_this7._x, _this7._w)) / 10.0;
          } else {
            if (delta < -0.499 * norm) {
              _this7._pitch = -90.0;
              _this7._head = Math.round(-2.0 * 1800.0 / Math.PI * Math.atan2(_this7._x, _this7._w)) / 10.0;
            } else {
              _this7._roll = Math.round(1800.0 / Math.PI * Math.atan2(2.0 * (_this7._w * _this7._x + _this7._y * _this7._z), sqw - sqx - sqy + sqz)) / 10.0;
              _this7._pitch = Math.round(1800.0 / Math.PI * Math.asin(2.0 * delta / norm)) / 10.0;
              _this7._head = Math.round(1800.0 / Math.PI * Math.atan2(2.0 * (_this7._x * _this7._y + _this7._z * _this7._w), sqw + sqx - sqy - sqz)) / 10.0;
            }
          }
          _this7._angles_stamp = _this7._qt_stamp;
        }
        return _this7._yapi.SUCCESS;
      })();
    }
    get_roll() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        yield _this8._loadAngles();
        return _this8._roll;
      })();
    }
    get_pitch() {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        yield _this9._loadAngles();
        return _this9._pitch;
      })();
    }
    get_heading() {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        yield _this10._loadAngles();
        return _this10._head;
      })();
    }
    get_quaternionW() {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        yield _this11._loadQuaternion();
        return _this11._w;
      })();
    }
    get_quaternionX() {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        yield _this12._loadQuaternion();
        return _this12._x;
      })();
    }
    get_quaternionY() {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        yield _this13._loadQuaternion();
        return _this13._y;
      })();
    }
    get_quaternionZ() {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        yield _this14._loadQuaternion();
        return _this14._z;
      })();
    }
    registerQuaternionCallback(callback) {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        _this15._quatCallback = callback;
        if (callback != null) {
          if ((yield _this15._loadQuaternion()) != _this15._yapi.SUCCESS) {
            return _this15._yapi.DEVICE_NOT_FOUND;
          }
          yield _this15._qt_w.set_userData(_this15);
          yield _this15._qt_x.set_userData(_this15);
          yield _this15._qt_y.set_userData(_this15);
          yield _this15._qt_z.set_userData(_this15);
          yield _this15._qt_w.registerValueCallback(yInternalGyroCallback);
          yield _this15._qt_x.registerValueCallback(yInternalGyroCallback);
          yield _this15._qt_y.registerValueCallback(yInternalGyroCallback);
          yield _this15._qt_z.registerValueCallback(yInternalGyroCallback);
        } else {
          if (!(_this15._anglesCallback != null)) {
            yield _this15._qt_w.registerValueCallback(null);
            yield _this15._qt_x.registerValueCallback(null);
            yield _this15._qt_y.registerValueCallback(null);
            yield _this15._qt_z.registerValueCallback(null);
          }
        }
        return 0;
      })();
    }
    registerAnglesCallback(callback) {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        _this16._anglesCallback = callback;
        if (callback != null) {
          if ((yield _this16._loadQuaternion()) != _this16._yapi.SUCCESS) {
            return _this16._yapi.DEVICE_NOT_FOUND;
          }
          yield _this16._qt_w.set_userData(_this16);
          yield _this16._qt_x.set_userData(_this16);
          yield _this16._qt_y.set_userData(_this16);
          yield _this16._qt_z.set_userData(_this16);
          yield _this16._qt_w.registerValueCallback(yInternalGyroCallback);
          yield _this16._qt_x.registerValueCallback(yInternalGyroCallback);
          yield _this16._qt_y.registerValueCallback(yInternalGyroCallback);
          yield _this16._qt_z.registerValueCallback(yInternalGyroCallback);
        } else {
          if (!(_this16._quatCallback != null)) {
            yield _this16._qt_w.registerValueCallback(null);
            yield _this16._qt_x.registerValueCallback(null);
            yield _this16._qt_y.registerValueCallback(null);
            yield _this16._qt_z.registerValueCallback(null);
          }
        }
        return 0;
      })();
    }
    _invokeGyroCallbacks(qtIndex, qtValue) {
      var _this17 = this;
      return _asyncToGenerator(function*() {
        switch (qtIndex - 1) {
          case 0:
            _this17._w = qtValue;
            break;
          case 1:
            _this17._x = qtValue;
            break;
          case 2:
            _this17._y = qtValue;
            break;
          case 3:
            _this17._z = qtValue;
            break;
        }
        if (qtIndex < 4) {
          return 0;
        }
        _this17._qt_stamp = _this17._yapi.GetTickCount() & 0x7FFFFFFF;
        if (_this17._quatCallback != null) {
          yield _this17._quatCallback(_this17, _this17._w, _this17._x, _this17._y, _this17._z);
        }
        if (_this17._anglesCallback != null) {
          yield _this17._loadAngles();
          yield _this17._anglesCallback(_this17, _this17._roll, _this17._pitch, _this17._head);
        }
        return 0;
      })();
    }
    nextGyro() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YGyro.FindGyroInContext(this._yapi, next_hwid);
    }
    static FirstGyro() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Gyro');
      if (next_hwid == null)
        return null;
      return YGyro.FindGyro(next_hwid);
    }
    static FirstGyroInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Gyro');
      if (next_hwid == null)
        return null;
      return YGyro.FindGyroInContext(yctx, next_hwid);
    }
  }
  exports.YGyro = YGyro;
  function yFindGyro(func) {
    return YGyro.FindGyro(func);
  }
  function yFirstGyro() {
    return YGyro.FirstGyro();
  }
  class YGyroProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_xValue() {
      return this.liveFunc._xValue;
    }
    get_yValue() {
      return this.liveFunc._yValue;
    }
    get_zValue() {
      return this.liveFunc._zValue;
    }
    registerQuaternionCallback(callback) {
      this.liveFunc.registerQuaternionCallback(callback);
      return _yocto_api.YAPI_SUCCESS;
    }
    registerAnglesCallback(callback) {
      this.liveFunc.registerAnglesCallback(callback);
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YGyroProxy = YGyroProxy;
  return module.exports;
});

$__System.registerDynamic("1a", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YHubPortProxy = exports.YHubPort = exports.Y_BAUDRATE_INVALID = exports.Y_PORTSTATE_INVALID = exports.Y_PORTSTATE_PROG = exports.Y_PORTSTATE_RUN = exports.Y_PORTSTATE_ON = exports.Y_PORTSTATE_OVRLD = exports.Y_PORTSTATE_OFF = exports.Y_ENABLED_INVALID = exports.Y_ENABLED_TRUE = exports.Y_ENABLED_FALSE = undefined;
  exports.yFindHubPort = yFindHubPort;
  exports.yFirstHubPort = yFirstHubPort;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_ENABLED_FALSE = exports.Y_ENABLED_FALSE = 0;
  var Y_ENABLED_TRUE = exports.Y_ENABLED_TRUE = 1;
  var Y_ENABLED_INVALID = exports.Y_ENABLED_INVALID = -1;
  var Y_PORTSTATE_OFF = exports.Y_PORTSTATE_OFF = 0;
  var Y_PORTSTATE_OVRLD = exports.Y_PORTSTATE_OVRLD = 1;
  var Y_PORTSTATE_ON = exports.Y_PORTSTATE_ON = 2;
  var Y_PORTSTATE_RUN = exports.Y_PORTSTATE_RUN = 3;
  var Y_PORTSTATE_PROG = exports.Y_PORTSTATE_PROG = 4;
  var Y_PORTSTATE_INVALID = exports.Y_PORTSTATE_INVALID = -1;
  var Y_BAUDRATE_INVALID = exports.Y_BAUDRATE_INVALID = _yocto_api.YAPI.INVALID_UINT;
  class YHubPort extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'HubPort';
      this._enabled = Y_ENABLED_INVALID;
      this._portState = Y_PORTSTATE_INVALID;
      this._baudRate = Y_BAUDRATE_INVALID;
      this.imm_setConst({
        ENABLED_FALSE: 0,
        ENABLED_TRUE: 1,
        ENABLED_INVALID: -1,
        PORTSTATE_OFF: 0,
        PORTSTATE_OVRLD: 1,
        PORTSTATE_ON: 2,
        PORTSTATE_RUN: 3,
        PORTSTATE_PROG: 4,
        PORTSTATE_INVALID: -1,
        BAUDRATE_INVALID: _yocto_api.YAPI.INVALID_UINT
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YHubPortProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'enabled':
          this._enabled = parseInt(val);
          return 1;
        case 'portState':
          this._portState = parseInt(val);
          return 1;
        case 'baudRate':
          this._baudRate = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_enabled() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_ENABLED_INVALID;
          }
        }
        return _this2._enabled;
      })();
    }
    set_enabled(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this3._setAttr('enabled', rest_val);
      })();
    }
    get_portState() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_PORTSTATE_INVALID;
          }
        }
        return _this4._portState;
      })();
    }
    get_baudRate() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        if (_this5._cacheExpiration <= _this5._yapi.GetTickCount()) {
          if ((yield _this5.load(_this5._yapi.defaultCacheValidity)) != _this5._yapi.SUCCESS) {
            return Y_BAUDRATE_INVALID;
          }
        }
        return _this5._baudRate;
      })();
    }
    static FindHubPort(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('HubPort', func);
      if (obj == null) {
        obj = new YHubPort(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('HubPort', func, obj);
      }
      return obj;
    }
    static FindHubPortInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'HubPort', func);
      if (obj == null) {
        obj = new YHubPort(yctx, func);
        _yocto_api.YFunction._AddToCache('HubPort', func, obj);
      }
      return obj;
    }
    nextHubPort() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YHubPort.FindHubPortInContext(this._yapi, next_hwid);
    }
    static FirstHubPort() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('HubPort');
      if (next_hwid == null)
        return null;
      return YHubPort.FindHubPort(next_hwid);
    }
    static FirstHubPortInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('HubPort');
      if (next_hwid == null)
        return null;
      return YHubPort.FindHubPortInContext(yctx, next_hwid);
    }
  }
  exports.YHubPort = YHubPort;
  class YHubPortProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_enabled() {
      return this.liveFunc._enabled;
    }
    set_enabled(newval) {
      this.liveFunc.set_enabled(newval);
      return this._yapi.SUCCESS;
    }
    get_portState() {
      return this.liveFunc._portState;
    }
    get_baudRate() {
      return this.liveFunc._baudRate;
    }
  }
  exports.YHubPortProxy = YHubPortProxy;
  function yFindHubPort(func) {
    return YHubPort.FindHubPort(func);
  }
  function yFirstHubPort() {
    return YHubPort.FirstHubPort();
  }
  return module.exports;
});

$__System.registerDynamic("1b", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YHumidityProxy = exports.YHumidity = exports.Y_ABSHUM_INVALID = exports.Y_RELHUM_INVALID = undefined;
  exports.yFindHumidity = yFindHumidity;
  exports.yFirstHumidity = yFirstHumidity;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_RELHUM_INVALID = exports.Y_RELHUM_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_ABSHUM_INVALID = exports.Y_ABSHUM_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  class YHumidity extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Humidity';
      this._relHum = Y_RELHUM_INVALID;
      this._absHum = Y_ABSHUM_INVALID;
      this.imm_setConst({
        RELHUM_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        ABSHUM_INVALID: _yocto_api.YAPI.INVALID_DOUBLE
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YHumidityProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'relHum':
          this._relHum = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'absHum':
          this._absHum = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    set_unit(newval) {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this2._setAttr('unit', rest_val);
      })();
    }
    get_relHum() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        if (_this3._cacheExpiration <= _this3._yapi.GetTickCount()) {
          if ((yield _this3.load(_this3._yapi.defaultCacheValidity)) != _this3._yapi.SUCCESS) {
            return Y_RELHUM_INVALID;
          }
        }
        return _this3._relHum;
      })();
    }
    get_absHum() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_ABSHUM_INVALID;
          }
        }
        return _this4._absHum;
      })();
    }
    static FindHumidity(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Humidity', func);
      if (obj == null) {
        obj = new YHumidity(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Humidity', func, obj);
      }
      return obj;
    }
    static FindHumidityInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Humidity', func);
      if (obj == null) {
        obj = new YHumidity(yctx, func);
        _yocto_api.YFunction._AddToCache('Humidity', func, obj);
      }
      return obj;
    }
    nextHumidity() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YHumidity.FindHumidityInContext(this._yapi, next_hwid);
    }
    static FirstHumidity() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Humidity');
      if (next_hwid == null)
        return null;
      return YHumidity.FindHumidity(next_hwid);
    }
    static FirstHumidityInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Humidity');
      if (next_hwid == null)
        return null;
      return YHumidity.FindHumidityInContext(yctx, next_hwid);
    }
  }
  exports.YHumidity = YHumidity;
  class YHumidityProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    set_unit(newval) {
      this.liveFunc.set_unit(newval);
      return this._yapi.SUCCESS;
    }
    get_relHum() {
      return this.liveFunc._relHum;
    }
    get_absHum() {
      return this.liveFunc._absHum;
    }
  }
  exports.YHumidityProxy = YHumidityProxy;
  function yFindHumidity(func) {
    return YHumidity.FindHumidity(func);
  }
  function yFirstHumidity() {
    return YHumidity.FirstHumidity();
  }
  return module.exports;
});

$__System.registerDynamic("1c", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YLatitudeProxy = exports.YLatitude = undefined;
  exports.yFindLatitude = yFindLatitude;
  exports.yFirstLatitude = yFirstLatitude;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  class YLatitude extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Latitude';
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YLatitudeProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    static FindLatitude(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Latitude', func);
      if (obj == null) {
        obj = new YLatitude(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Latitude', func, obj);
      }
      return obj;
    }
    static FindLatitudeInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Latitude', func);
      if (obj == null) {
        obj = new YLatitude(yctx, func);
        _yocto_api.YFunction._AddToCache('Latitude', func, obj);
      }
      return obj;
    }
    nextLatitude() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YLatitude.FindLatitudeInContext(this._yapi, next_hwid);
    }
    static FirstLatitude() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Latitude');
      if (next_hwid == null)
        return null;
      return YLatitude.FindLatitude(next_hwid);
    }
    static FirstLatitudeInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Latitude');
      if (next_hwid == null)
        return null;
      return YLatitude.FindLatitudeInContext(yctx, next_hwid);
    }
  }
  exports.YLatitude = YLatitude;
  class YLatitudeProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
  }
  exports.YLatitudeProxy = YLatitudeProxy;
  function yFindLatitude(func) {
    return YLatitude.FindLatitude(func);
  }
  function yFirstLatitude() {
    return YLatitude.FirstLatitude();
  }
  return module.exports;
});

$__System.registerDynamic("1d", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YLedProxy = exports.YLed = exports.Y_LUMINOSITY_INVALID = exports.Y_BLINKING_INVALID = exports.Y_BLINKING_PANIC = exports.Y_BLINKING_CALL = exports.Y_BLINKING_RUN = exports.Y_BLINKING_AWARE = exports.Y_BLINKING_RELAX = exports.Y_BLINKING_STILL = exports.Y_POWER_INVALID = exports.Y_POWER_ON = exports.Y_POWER_OFF = undefined;
  exports.yFindLed = yFindLed;
  exports.yFirstLed = yFirstLed;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_POWER_OFF = exports.Y_POWER_OFF = 0;
  var Y_POWER_ON = exports.Y_POWER_ON = 1;
  var Y_POWER_INVALID = exports.Y_POWER_INVALID = -1;
  var Y_BLINKING_STILL = exports.Y_BLINKING_STILL = 0;
  var Y_BLINKING_RELAX = exports.Y_BLINKING_RELAX = 1;
  var Y_BLINKING_AWARE = exports.Y_BLINKING_AWARE = 2;
  var Y_BLINKING_RUN = exports.Y_BLINKING_RUN = 3;
  var Y_BLINKING_CALL = exports.Y_BLINKING_CALL = 4;
  var Y_BLINKING_PANIC = exports.Y_BLINKING_PANIC = 5;
  var Y_BLINKING_INVALID = exports.Y_BLINKING_INVALID = -1;
  var Y_LUMINOSITY_INVALID = exports.Y_LUMINOSITY_INVALID = _yocto_api.YAPI.INVALID_UINT;
  class YLed extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Led';
      this._power = Y_POWER_INVALID;
      this._luminosity = Y_LUMINOSITY_INVALID;
      this._blinking = Y_BLINKING_INVALID;
      this.imm_setConst({
        POWER_OFF: 0,
        POWER_ON: 1,
        POWER_INVALID: -1,
        LUMINOSITY_INVALID: _yocto_api.YAPI.INVALID_UINT,
        BLINKING_STILL: 0,
        BLINKING_RELAX: 1,
        BLINKING_AWARE: 2,
        BLINKING_RUN: 3,
        BLINKING_CALL: 4,
        BLINKING_PANIC: 5,
        BLINKING_INVALID: -1
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YLedProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'power':
          this._power = parseInt(val);
          return 1;
        case 'luminosity':
          this._luminosity = parseInt(val);
          return 1;
        case 'blinking':
          this._blinking = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_power() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_POWER_INVALID;
          }
        }
        return _this2._power;
      })();
    }
    set_power(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this3._setAttr('power', rest_val);
      })();
    }
    get_luminosity() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_LUMINOSITY_INVALID;
          }
        }
        return _this4._luminosity;
      })();
    }
    set_luminosity(newval) {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this5._setAttr('luminosity', rest_val);
      })();
    }
    get_blinking() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_BLINKING_INVALID;
          }
        }
        return _this6._blinking;
      })();
    }
    set_blinking(newval) {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this7._setAttr('blinking', rest_val);
      })();
    }
    static FindLed(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Led', func);
      if (obj == null) {
        obj = new YLed(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Led', func, obj);
      }
      return obj;
    }
    static FindLedInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Led', func);
      if (obj == null) {
        obj = new YLed(yctx, func);
        _yocto_api.YFunction._AddToCache('Led', func, obj);
      }
      return obj;
    }
    nextLed() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YLed.FindLedInContext(this._yapi, next_hwid);
    }
    static FirstLed() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Led');
      if (next_hwid == null)
        return null;
      return YLed.FindLed(next_hwid);
    }
    static FirstLedInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Led');
      if (next_hwid == null)
        return null;
      return YLed.FindLedInContext(yctx, next_hwid);
    }
  }
  exports.YLed = YLed;
  class YLedProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_power() {
      return this.liveFunc._power;
    }
    set_power(newval) {
      this.liveFunc.set_power(newval);
      return this._yapi.SUCCESS;
    }
    get_luminosity() {
      return this.liveFunc._luminosity;
    }
    set_luminosity(newval) {
      this.liveFunc.set_luminosity(newval);
      return this._yapi.SUCCESS;
    }
    get_blinking() {
      return this.liveFunc._blinking;
    }
    set_blinking(newval) {
      this.liveFunc.set_blinking(newval);
      return this._yapi.SUCCESS;
    }
  }
  exports.YLedProxy = YLedProxy;
  function yFindLed(func) {
    return YLed.FindLed(func);
  }
  function yFirstLed() {
    return YLed.FirstLed();
  }
  return module.exports;
});

$__System.registerDynamic("1e", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YLightSensorProxy = exports.YLightSensor = exports.Y_MEASURETYPE_INVALID = exports.Y_MEASURETYPE_HIGH_ENERGY = exports.Y_MEASURETYPE_HIGH_RATE = exports.Y_MEASURETYPE_INFRARED = exports.Y_MEASURETYPE_WIDE_SPECTRUM = exports.Y_MEASURETYPE_HUMAN_EYE = undefined;
  exports.yFindLightSensor = yFindLightSensor;
  exports.yFirstLightSensor = yFirstLightSensor;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_MEASURETYPE_HUMAN_EYE = exports.Y_MEASURETYPE_HUMAN_EYE = 0;
  var Y_MEASURETYPE_WIDE_SPECTRUM = exports.Y_MEASURETYPE_WIDE_SPECTRUM = 1;
  var Y_MEASURETYPE_INFRARED = exports.Y_MEASURETYPE_INFRARED = 2;
  var Y_MEASURETYPE_HIGH_RATE = exports.Y_MEASURETYPE_HIGH_RATE = 3;
  var Y_MEASURETYPE_HIGH_ENERGY = exports.Y_MEASURETYPE_HIGH_ENERGY = 4;
  var Y_MEASURETYPE_INVALID = exports.Y_MEASURETYPE_INVALID = -1;
  class YLightSensor extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'LightSensor';
      this._measureType = Y_MEASURETYPE_INVALID;
      this.imm_setConst({
        MEASURETYPE_HUMAN_EYE: 0,
        MEASURETYPE_WIDE_SPECTRUM: 1,
        MEASURETYPE_INFRARED: 2,
        MEASURETYPE_HIGH_RATE: 3,
        MEASURETYPE_HIGH_ENERGY: 4,
        MEASURETYPE_INVALID: -1
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YLightSensorProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'measureType':
          this._measureType = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    set_currentValue(newval) {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this2._setAttr('currentValue', rest_val);
      })();
    }
    calibrate(calibratedVal) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(calibratedVal * 65536.0));
        return yield _this3._setAttr('currentValue', rest_val);
      })();
    }
    get_measureType() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_MEASURETYPE_INVALID;
          }
        }
        return _this4._measureType;
      })();
    }
    set_measureType(newval) {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this5._setAttr('measureType', rest_val);
      })();
    }
    static FindLightSensor(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('LightSensor', func);
      if (obj == null) {
        obj = new YLightSensor(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('LightSensor', func, obj);
      }
      return obj;
    }
    static FindLightSensorInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'LightSensor', func);
      if (obj == null) {
        obj = new YLightSensor(yctx, func);
        _yocto_api.YFunction._AddToCache('LightSensor', func, obj);
      }
      return obj;
    }
    nextLightSensor() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YLightSensor.FindLightSensorInContext(this._yapi, next_hwid);
    }
    static FirstLightSensor() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('LightSensor');
      if (next_hwid == null)
        return null;
      return YLightSensor.FindLightSensor(next_hwid);
    }
    static FirstLightSensorInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('LightSensor');
      if (next_hwid == null)
        return null;
      return YLightSensor.FindLightSensorInContext(yctx, next_hwid);
    }
  }
  exports.YLightSensor = YLightSensor;
  class YLightSensorProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    set_currentValue(newval) {
      this.liveFunc.set_currentValue(newval);
      return this._yapi.SUCCESS;
    }
    get_measureType() {
      return this.liveFunc._measureType;
    }
    set_measureType(newval) {
      this.liveFunc.set_measureType(newval);
      return this._yapi.SUCCESS;
    }
  }
  exports.YLightSensorProxy = YLightSensorProxy;
  function yFindLightSensor(func) {
    return YLightSensor.FindLightSensor(func);
  }
  function yFirstLightSensor() {
    return YLightSensor.FirstLightSensor();
  }
  return module.exports;
});

$__System.registerDynamic("1f", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YLongitudeProxy = exports.YLongitude = undefined;
  exports.yFindLongitude = yFindLongitude;
  exports.yFirstLongitude = yFirstLongitude;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  class YLongitude extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Longitude';
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YLongitudeProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    static FindLongitude(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Longitude', func);
      if (obj == null) {
        obj = new YLongitude(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Longitude', func, obj);
      }
      return obj;
    }
    static FindLongitudeInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Longitude', func);
      if (obj == null) {
        obj = new YLongitude(yctx, func);
        _yocto_api.YFunction._AddToCache('Longitude', func, obj);
      }
      return obj;
    }
    nextLongitude() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YLongitude.FindLongitudeInContext(this._yapi, next_hwid);
    }
    static FirstLongitude() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Longitude');
      if (next_hwid == null)
        return null;
      return YLongitude.FindLongitude(next_hwid);
    }
    static FirstLongitudeInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Longitude');
      if (next_hwid == null)
        return null;
      return YLongitude.FindLongitudeInContext(yctx, next_hwid);
    }
  }
  exports.YLongitude = YLongitude;
  class YLongitudeProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
  }
  exports.YLongitudeProxy = YLongitudeProxy;
  function yFindLongitude(func) {
    return YLongitude.FindLongitude(func);
  }
  function yFirstLongitude() {
    return YLongitude.FirstLongitude();
  }
  return module.exports;
});

$__System.registerDynamic("20", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YMagnetometerProxy = exports.YMagnetometer = exports.Y_ZVALUE_INVALID = exports.Y_YVALUE_INVALID = exports.Y_XVALUE_INVALID = undefined;
  exports.yFindMagnetometer = yFindMagnetometer;
  exports.yFirstMagnetometer = yFirstMagnetometer;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_XVALUE_INVALID = exports.Y_XVALUE_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_YVALUE_INVALID = exports.Y_YVALUE_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_ZVALUE_INVALID = exports.Y_ZVALUE_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  class YMagnetometer extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Magnetometer';
      this._xValue = Y_XVALUE_INVALID;
      this._yValue = Y_YVALUE_INVALID;
      this._zValue = Y_ZVALUE_INVALID;
      this.imm_setConst({
        XVALUE_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        YVALUE_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        ZVALUE_INVALID: _yocto_api.YAPI.INVALID_DOUBLE
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YMagnetometerProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'xValue':
          this._xValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'yValue':
          this._yValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'zValue':
          this._zValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_xValue() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_XVALUE_INVALID;
          }
        }
        return _this2._xValue;
      })();
    }
    get_yValue() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        if (_this3._cacheExpiration <= _this3._yapi.GetTickCount()) {
          if ((yield _this3.load(_this3._yapi.defaultCacheValidity)) != _this3._yapi.SUCCESS) {
            return Y_YVALUE_INVALID;
          }
        }
        return _this3._yValue;
      })();
    }
    get_zValue() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_ZVALUE_INVALID;
          }
        }
        return _this4._zValue;
      })();
    }
    static FindMagnetometer(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Magnetometer', func);
      if (obj == null) {
        obj = new YMagnetometer(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Magnetometer', func, obj);
      }
      return obj;
    }
    static FindMagnetometerInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Magnetometer', func);
      if (obj == null) {
        obj = new YMagnetometer(yctx, func);
        _yocto_api.YFunction._AddToCache('Magnetometer', func, obj);
      }
      return obj;
    }
    nextMagnetometer() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YMagnetometer.FindMagnetometerInContext(this._yapi, next_hwid);
    }
    static FirstMagnetometer() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Magnetometer');
      if (next_hwid == null)
        return null;
      return YMagnetometer.FindMagnetometer(next_hwid);
    }
    static FirstMagnetometerInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Magnetometer');
      if (next_hwid == null)
        return null;
      return YMagnetometer.FindMagnetometerInContext(yctx, next_hwid);
    }
  }
  exports.YMagnetometer = YMagnetometer;
  class YMagnetometerProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_xValue() {
      return this.liveFunc._xValue;
    }
    get_yValue() {
      return this.liveFunc._yValue;
    }
    get_zValue() {
      return this.liveFunc._zValue;
    }
  }
  exports.YMagnetometerProxy = YMagnetometerProxy;
  function yFindMagnetometer(func) {
    return YMagnetometer.FindMagnetometer(func);
  }
  function yFirstMagnetometer() {
    return YMagnetometer.FirstMagnetometer();
  }
  return module.exports;
});

$__System.registerDynamic("21", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YMotorProxy = exports.YMotor = exports.Y_COMMAND_INVALID = exports.Y_FAILSAFETIMEOUT_INVALID = exports.Y_STARTERTIME_INVALID = exports.Y_FREQUENCY_INVALID = exports.Y_OVERCURRENTLIMIT_INVALID = exports.Y_CUTOFFVOLTAGE_INVALID = exports.Y_BRAKINGFORCE_INVALID = exports.Y_DRIVINGFORCE_INVALID = exports.Y_MOTORSTATUS_INVALID = exports.Y_MOTORSTATUS_FAILSF = exports.Y_MOTORSTATUS_HIHEAT = exports.Y_MOTORSTATUS_HICURR = exports.Y_MOTORSTATUS_LOVOLT = exports.Y_MOTORSTATUS_BACKWD = exports.Y_MOTORSTATUS_FORWD = exports.Y_MOTORSTATUS_BRAKE = exports.Y_MOTORSTATUS_IDLE = undefined;
  exports.yFindMotor = yFindMotor;
  exports.yFirstMotor = yFirstMotor;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_MOTORSTATUS_IDLE = exports.Y_MOTORSTATUS_IDLE = 0;
  var Y_MOTORSTATUS_BRAKE = exports.Y_MOTORSTATUS_BRAKE = 1;
  var Y_MOTORSTATUS_FORWD = exports.Y_MOTORSTATUS_FORWD = 2;
  var Y_MOTORSTATUS_BACKWD = exports.Y_MOTORSTATUS_BACKWD = 3;
  var Y_MOTORSTATUS_LOVOLT = exports.Y_MOTORSTATUS_LOVOLT = 4;
  var Y_MOTORSTATUS_HICURR = exports.Y_MOTORSTATUS_HICURR = 5;
  var Y_MOTORSTATUS_HIHEAT = exports.Y_MOTORSTATUS_HIHEAT = 6;
  var Y_MOTORSTATUS_FAILSF = exports.Y_MOTORSTATUS_FAILSF = 7;
  var Y_MOTORSTATUS_INVALID = exports.Y_MOTORSTATUS_INVALID = -1;
  var Y_DRIVINGFORCE_INVALID = exports.Y_DRIVINGFORCE_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_BRAKINGFORCE_INVALID = exports.Y_BRAKINGFORCE_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_CUTOFFVOLTAGE_INVALID = exports.Y_CUTOFFVOLTAGE_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_OVERCURRENTLIMIT_INVALID = exports.Y_OVERCURRENTLIMIT_INVALID = _yocto_api.YAPI.INVALID_INT;
  var Y_FREQUENCY_INVALID = exports.Y_FREQUENCY_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_STARTERTIME_INVALID = exports.Y_STARTERTIME_INVALID = _yocto_api.YAPI.INVALID_INT;
  var Y_FAILSAFETIMEOUT_INVALID = exports.Y_FAILSAFETIMEOUT_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_COMMAND_INVALID = exports.Y_COMMAND_INVALID = _yocto_api.YAPI.INVALID_STRING;
  class YMotor extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Motor';
      this._motorStatus = Y_MOTORSTATUS_INVALID;
      this._drivingForce = Y_DRIVINGFORCE_INVALID;
      this._brakingForce = Y_BRAKINGFORCE_INVALID;
      this._cutOffVoltage = Y_CUTOFFVOLTAGE_INVALID;
      this._overCurrentLimit = Y_OVERCURRENTLIMIT_INVALID;
      this._frequency = Y_FREQUENCY_INVALID;
      this._starterTime = Y_STARTERTIME_INVALID;
      this._failSafeTimeout = Y_FAILSAFETIMEOUT_INVALID;
      this._command = Y_COMMAND_INVALID;
      this.imm_setConst({
        MOTORSTATUS_IDLE: 0,
        MOTORSTATUS_BRAKE: 1,
        MOTORSTATUS_FORWD: 2,
        MOTORSTATUS_BACKWD: 3,
        MOTORSTATUS_LOVOLT: 4,
        MOTORSTATUS_HICURR: 5,
        MOTORSTATUS_HIHEAT: 6,
        MOTORSTATUS_FAILSF: 7,
        MOTORSTATUS_INVALID: -1,
        DRIVINGFORCE_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        BRAKINGFORCE_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        CUTOFFVOLTAGE_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        OVERCURRENTLIMIT_INVALID: _yocto_api.YAPI.INVALID_INT,
        FREQUENCY_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        STARTERTIME_INVALID: _yocto_api.YAPI.INVALID_INT,
        FAILSAFETIMEOUT_INVALID: _yocto_api.YAPI.INVALID_UINT,
        COMMAND_INVALID: _yocto_api.YAPI.INVALID_STRING
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YMotorProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'motorStatus':
          this._motorStatus = parseInt(val);
          return 1;
        case 'drivingForce':
          this._drivingForce = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'brakingForce':
          this._brakingForce = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'cutOffVoltage':
          this._cutOffVoltage = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'overCurrentLimit':
          this._overCurrentLimit = parseInt(val);
          return 1;
        case 'frequency':
          this._frequency = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'starterTime':
          this._starterTime = parseInt(val);
          return 1;
        case 'failSafeTimeout':
          this._failSafeTimeout = parseInt(val);
          return 1;
        case 'command':
          this._command = val;
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_motorStatus() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_MOTORSTATUS_INVALID;
          }
        }
        return _this2._motorStatus;
      })();
    }
    set_motorStatus(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this3._setAttr('motorStatus', rest_val);
      })();
    }
    set_drivingForce(newval) {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this4._setAttr('drivingForce', rest_val);
      })();
    }
    get_drivingForce() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        if (_this5._cacheExpiration <= _this5._yapi.GetTickCount()) {
          if ((yield _this5.load(_this5._yapi.defaultCacheValidity)) != _this5._yapi.SUCCESS) {
            return Y_DRIVINGFORCE_INVALID;
          }
        }
        return _this5._drivingForce;
      })();
    }
    set_brakingForce(newval) {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this6._setAttr('brakingForce', rest_val);
      })();
    }
    get_brakingForce() {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        if (_this7._cacheExpiration <= _this7._yapi.GetTickCount()) {
          if ((yield _this7.load(_this7._yapi.defaultCacheValidity)) != _this7._yapi.SUCCESS) {
            return Y_BRAKINGFORCE_INVALID;
          }
        }
        return _this7._brakingForce;
      })();
    }
    set_cutOffVoltage(newval) {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this8._setAttr('cutOffVoltage', rest_val);
      })();
    }
    get_cutOffVoltage() {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        if (_this9._cacheExpiration <= _this9._yapi.GetTickCount()) {
          if ((yield _this9.load(_this9._yapi.defaultCacheValidity)) != _this9._yapi.SUCCESS) {
            return Y_CUTOFFVOLTAGE_INVALID;
          }
        }
        return _this9._cutOffVoltage;
      })();
    }
    get_overCurrentLimit() {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        if (_this10._cacheExpiration <= _this10._yapi.GetTickCount()) {
          if ((yield _this10.load(_this10._yapi.defaultCacheValidity)) != _this10._yapi.SUCCESS) {
            return Y_OVERCURRENTLIMIT_INVALID;
          }
        }
        return _this10._overCurrentLimit;
      })();
    }
    set_overCurrentLimit(newval) {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this11._setAttr('overCurrentLimit', rest_val);
      })();
    }
    set_frequency(newval) {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this12._setAttr('frequency', rest_val);
      })();
    }
    get_frequency() {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        if (_this13._cacheExpiration <= _this13._yapi.GetTickCount()) {
          if ((yield _this13.load(_this13._yapi.defaultCacheValidity)) != _this13._yapi.SUCCESS) {
            return Y_FREQUENCY_INVALID;
          }
        }
        return _this13._frequency;
      })();
    }
    get_starterTime() {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        if (_this14._cacheExpiration <= _this14._yapi.GetTickCount()) {
          if ((yield _this14.load(_this14._yapi.defaultCacheValidity)) != _this14._yapi.SUCCESS) {
            return Y_STARTERTIME_INVALID;
          }
        }
        return _this14._starterTime;
      })();
    }
    set_starterTime(newval) {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this15._setAttr('starterTime', rest_val);
      })();
    }
    get_failSafeTimeout() {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        if (_this16._cacheExpiration <= _this16._yapi.GetTickCount()) {
          if ((yield _this16.load(_this16._yapi.defaultCacheValidity)) != _this16._yapi.SUCCESS) {
            return Y_FAILSAFETIMEOUT_INVALID;
          }
        }
        return _this16._failSafeTimeout;
      })();
    }
    set_failSafeTimeout(newval) {
      var _this17 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this17._setAttr('failSafeTimeout', rest_val);
      })();
    }
    get_command() {
      var _this18 = this;
      return _asyncToGenerator(function*() {
        if (_this18._cacheExpiration <= _this18._yapi.GetTickCount()) {
          if ((yield _this18.load(_this18._yapi.defaultCacheValidity)) != _this18._yapi.SUCCESS) {
            return Y_COMMAND_INVALID;
          }
        }
        return _this18._command;
      })();
    }
    set_command(newval) {
      var _this19 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this19._setAttr('command', rest_val);
      })();
    }
    static FindMotor(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Motor', func);
      if (obj == null) {
        obj = new YMotor(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Motor', func, obj);
      }
      return obj;
    }
    static FindMotorInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Motor', func);
      if (obj == null) {
        obj = new YMotor(yctx, func);
        _yocto_api.YFunction._AddToCache('Motor', func, obj);
      }
      return obj;
    }
    keepALive() {
      var _this20 = this;
      return _asyncToGenerator(function*() {
        return yield _this20.set_command('K');
      })();
    }
    resetStatus() {
      var _this21 = this;
      return _asyncToGenerator(function*() {
        return yield _this21.set_motorStatus(Y_MOTORSTATUS_IDLE);
      })();
    }
    drivingForceMove(targetPower, delay) {
      var _this22 = this;
      return _asyncToGenerator(function*() {
        return yield _this22.set_command('P' + String(Math.round(Math.round(targetPower * 10))) + ',' + String(Math.round(delay)));
      })();
    }
    brakingForceMove(targetPower, delay) {
      var _this23 = this;
      return _asyncToGenerator(function*() {
        return yield _this23.set_command('B' + String(Math.round(Math.round(targetPower * 10))) + ',' + String(Math.round(delay)));
      })();
    }
    nextMotor() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YMotor.FindMotorInContext(this._yapi, next_hwid);
    }
    static FirstMotor() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Motor');
      if (next_hwid == null)
        return null;
      return YMotor.FindMotor(next_hwid);
    }
    static FirstMotorInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Motor');
      if (next_hwid == null)
        return null;
      return YMotor.FindMotorInContext(yctx, next_hwid);
    }
  }
  exports.YMotor = YMotor;
  class YMotorProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_motorStatus() {
      return this.liveFunc._motorStatus;
    }
    set_motorStatus(newval) {
      this.liveFunc.set_motorStatus(newval);
      return this._yapi.SUCCESS;
    }
    set_drivingForce(newval) {
      this.liveFunc.set_drivingForce(newval);
      return this._yapi.SUCCESS;
    }
    get_drivingForce() {
      return this.liveFunc._drivingForce;
    }
    set_brakingForce(newval) {
      this.liveFunc.set_brakingForce(newval);
      return this._yapi.SUCCESS;
    }
    get_brakingForce() {
      return this.liveFunc._brakingForce;
    }
    set_cutOffVoltage(newval) {
      this.liveFunc.set_cutOffVoltage(newval);
      return this._yapi.SUCCESS;
    }
    get_cutOffVoltage() {
      return this.liveFunc._cutOffVoltage;
    }
    get_overCurrentLimit() {
      return this.liveFunc._overCurrentLimit;
    }
    set_overCurrentLimit(newval) {
      this.liveFunc.set_overCurrentLimit(newval);
      return this._yapi.SUCCESS;
    }
    set_frequency(newval) {
      this.liveFunc.set_frequency(newval);
      return this._yapi.SUCCESS;
    }
    get_frequency() {
      return this.liveFunc._frequency;
    }
    get_starterTime() {
      return this.liveFunc._starterTime;
    }
    set_starterTime(newval) {
      this.liveFunc.set_starterTime(newval);
      return this._yapi.SUCCESS;
    }
    get_failSafeTimeout() {
      return this.liveFunc._failSafeTimeout;
    }
    set_failSafeTimeout(newval) {
      this.liveFunc.set_failSafeTimeout(newval);
      return this._yapi.SUCCESS;
    }
    get_command() {
      return this.liveFunc._command;
    }
    set_command(newval) {
      this.liveFunc.set_command(newval);
      return this._yapi.SUCCESS;
    }
    keepALive() {
      this.liveFunc.keepALive();
      return _yocto_api.YAPI_SUCCESS;
    }
    resetStatus() {
      this.liveFunc.resetStatus();
      return _yocto_api.YAPI_SUCCESS;
    }
    drivingForceMove(targetPower, delay) {
      this.liveFunc.drivingForceMove(targetPower, delay);
      return _yocto_api.YAPI_SUCCESS;
    }
    brakingForceMove(targetPower, delay) {
      this.liveFunc.brakingForceMove(targetPower, delay);
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YMotorProxy = YMotorProxy;
  function yFindMotor(func) {
    return YMotor.FindMotor(func);
  }
  function yFirstMotor() {
    return YMotor.FirstMotor();
  }
  return module.exports;
});

$__System.registerDynamic("22", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YNetworkProxy = exports.YNetwork = exports.Y_POECURRENT_INVALID = exports.Y_CALLBACKMAXDELAY_INVALID = exports.Y_CALLBACKMINDELAY_INVALID = exports.Y_CALLBACKINITIALDELAY_INVALID = exports.Y_CALLBACKCREDENTIALS_INVALID = exports.Y_CALLBACKURL_INVALID = exports.Y_WWWWATCHDOGDELAY_INVALID = exports.Y_DEFAULTPAGE_INVALID = exports.Y_HTTPPORT_INVALID = exports.Y_ADMINPASSWORD_INVALID = exports.Y_USERPASSWORD_INVALID = exports.Y_NTPSERVER_INVALID = exports.Y_SECONDARYDNS_INVALID = exports.Y_PRIMARYDNS_INVALID = exports.Y_IPCONFIG_INVALID = exports.Y_ROUTER_INVALID = exports.Y_SUBNETMASK_INVALID = exports.Y_IPADDRESS_INVALID = exports.Y_MACADDRESS_INVALID = exports.Y_CALLBACKENCODING_INVALID = exports.Y_CALLBACKENCODING_INFLUXDB = exports.Y_CALLBACKENCODING_AZURE = exports.Y_CALLBACKENCODING_EMONCMS = exports.Y_CALLBACKENCODING_JSON_NUM = exports.Y_CALLBACKENCODING_YOCTO_API = exports.Y_CALLBACKENCODING_CSV = exports.Y_CALLBACKENCODING_JSON_ARRAY = exports.Y_CALLBACKENCODING_JSON = exports.Y_CALLBACKENCODING_FORM = exports.Y_CALLBACKMETHOD_INVALID = exports.Y_CALLBACKMETHOD_PUT = exports.Y_CALLBACKMETHOD_GET = exports.Y_CALLBACKMETHOD_POST = exports.Y_DISCOVERABLE_INVALID = exports.Y_DISCOVERABLE_TRUE = exports.Y_DISCOVERABLE_FALSE = exports.Y_READINESS_INVALID = exports.Y_READINESS_WWW_OK = exports.Y_READINESS_LAN_OK = exports.Y_READINESS_LINKED = exports.Y_READINESS_EXISTS = exports.Y_READINESS_DOWN = undefined;
  exports.yFindNetwork = yFindNetwork;
  exports.yFirstNetwork = yFirstNetwork;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_READINESS_DOWN = exports.Y_READINESS_DOWN = 0;
  var Y_READINESS_EXISTS = exports.Y_READINESS_EXISTS = 1;
  var Y_READINESS_LINKED = exports.Y_READINESS_LINKED = 2;
  var Y_READINESS_LAN_OK = exports.Y_READINESS_LAN_OK = 3;
  var Y_READINESS_WWW_OK = exports.Y_READINESS_WWW_OK = 4;
  var Y_READINESS_INVALID = exports.Y_READINESS_INVALID = -1;
  var Y_DISCOVERABLE_FALSE = exports.Y_DISCOVERABLE_FALSE = 0;
  var Y_DISCOVERABLE_TRUE = exports.Y_DISCOVERABLE_TRUE = 1;
  var Y_DISCOVERABLE_INVALID = exports.Y_DISCOVERABLE_INVALID = -1;
  var Y_CALLBACKMETHOD_POST = exports.Y_CALLBACKMETHOD_POST = 0;
  var Y_CALLBACKMETHOD_GET = exports.Y_CALLBACKMETHOD_GET = 1;
  var Y_CALLBACKMETHOD_PUT = exports.Y_CALLBACKMETHOD_PUT = 2;
  var Y_CALLBACKMETHOD_INVALID = exports.Y_CALLBACKMETHOD_INVALID = -1;
  var Y_CALLBACKENCODING_FORM = exports.Y_CALLBACKENCODING_FORM = 0;
  var Y_CALLBACKENCODING_JSON = exports.Y_CALLBACKENCODING_JSON = 1;
  var Y_CALLBACKENCODING_JSON_ARRAY = exports.Y_CALLBACKENCODING_JSON_ARRAY = 2;
  var Y_CALLBACKENCODING_CSV = exports.Y_CALLBACKENCODING_CSV = 3;
  var Y_CALLBACKENCODING_YOCTO_API = exports.Y_CALLBACKENCODING_YOCTO_API = 4;
  var Y_CALLBACKENCODING_JSON_NUM = exports.Y_CALLBACKENCODING_JSON_NUM = 5;
  var Y_CALLBACKENCODING_EMONCMS = exports.Y_CALLBACKENCODING_EMONCMS = 6;
  var Y_CALLBACKENCODING_AZURE = exports.Y_CALLBACKENCODING_AZURE = 7;
  var Y_CALLBACKENCODING_INFLUXDB = exports.Y_CALLBACKENCODING_INFLUXDB = 8;
  var Y_CALLBACKENCODING_INVALID = exports.Y_CALLBACKENCODING_INVALID = -1;
  var Y_MACADDRESS_INVALID = exports.Y_MACADDRESS_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_IPADDRESS_INVALID = exports.Y_IPADDRESS_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_SUBNETMASK_INVALID = exports.Y_SUBNETMASK_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_ROUTER_INVALID = exports.Y_ROUTER_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_IPCONFIG_INVALID = exports.Y_IPCONFIG_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_PRIMARYDNS_INVALID = exports.Y_PRIMARYDNS_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_SECONDARYDNS_INVALID = exports.Y_SECONDARYDNS_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_NTPSERVER_INVALID = exports.Y_NTPSERVER_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_USERPASSWORD_INVALID = exports.Y_USERPASSWORD_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_ADMINPASSWORD_INVALID = exports.Y_ADMINPASSWORD_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_HTTPPORT_INVALID = exports.Y_HTTPPORT_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_DEFAULTPAGE_INVALID = exports.Y_DEFAULTPAGE_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_WWWWATCHDOGDELAY_INVALID = exports.Y_WWWWATCHDOGDELAY_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_CALLBACKURL_INVALID = exports.Y_CALLBACKURL_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_CALLBACKCREDENTIALS_INVALID = exports.Y_CALLBACKCREDENTIALS_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_CALLBACKINITIALDELAY_INVALID = exports.Y_CALLBACKINITIALDELAY_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_CALLBACKMINDELAY_INVALID = exports.Y_CALLBACKMINDELAY_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_CALLBACKMAXDELAY_INVALID = exports.Y_CALLBACKMAXDELAY_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_POECURRENT_INVALID = exports.Y_POECURRENT_INVALID = _yocto_api.YAPI.INVALID_UINT;
  class YNetwork extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Network';
      this._readiness = Y_READINESS_INVALID;
      this._macAddress = Y_MACADDRESS_INVALID;
      this._ipAddress = Y_IPADDRESS_INVALID;
      this._subnetMask = Y_SUBNETMASK_INVALID;
      this._router = Y_ROUTER_INVALID;
      this._ipConfig = Y_IPCONFIG_INVALID;
      this._primaryDNS = Y_PRIMARYDNS_INVALID;
      this._secondaryDNS = Y_SECONDARYDNS_INVALID;
      this._ntpServer = Y_NTPSERVER_INVALID;
      this._userPassword = Y_USERPASSWORD_INVALID;
      this._adminPassword = Y_ADMINPASSWORD_INVALID;
      this._httpPort = Y_HTTPPORT_INVALID;
      this._defaultPage = Y_DEFAULTPAGE_INVALID;
      this._discoverable = Y_DISCOVERABLE_INVALID;
      this._wwwWatchdogDelay = Y_WWWWATCHDOGDELAY_INVALID;
      this._callbackUrl = Y_CALLBACKURL_INVALID;
      this._callbackMethod = Y_CALLBACKMETHOD_INVALID;
      this._callbackEncoding = Y_CALLBACKENCODING_INVALID;
      this._callbackCredentials = Y_CALLBACKCREDENTIALS_INVALID;
      this._callbackInitialDelay = Y_CALLBACKINITIALDELAY_INVALID;
      this._callbackMinDelay = Y_CALLBACKMINDELAY_INVALID;
      this._callbackMaxDelay = Y_CALLBACKMAXDELAY_INVALID;
      this._poeCurrent = Y_POECURRENT_INVALID;
      this.imm_setConst({
        READINESS_DOWN: 0,
        READINESS_EXISTS: 1,
        READINESS_LINKED: 2,
        READINESS_LAN_OK: 3,
        READINESS_WWW_OK: 4,
        READINESS_INVALID: -1,
        MACADDRESS_INVALID: _yocto_api.YAPI.INVALID_STRING,
        IPADDRESS_INVALID: _yocto_api.YAPI.INVALID_STRING,
        SUBNETMASK_INVALID: _yocto_api.YAPI.INVALID_STRING,
        ROUTER_INVALID: _yocto_api.YAPI.INVALID_STRING,
        IPCONFIG_INVALID: _yocto_api.YAPI.INVALID_STRING,
        PRIMARYDNS_INVALID: _yocto_api.YAPI.INVALID_STRING,
        SECONDARYDNS_INVALID: _yocto_api.YAPI.INVALID_STRING,
        NTPSERVER_INVALID: _yocto_api.YAPI.INVALID_STRING,
        USERPASSWORD_INVALID: _yocto_api.YAPI.INVALID_STRING,
        ADMINPASSWORD_INVALID: _yocto_api.YAPI.INVALID_STRING,
        HTTPPORT_INVALID: _yocto_api.YAPI.INVALID_UINT,
        DEFAULTPAGE_INVALID: _yocto_api.YAPI.INVALID_STRING,
        DISCOVERABLE_FALSE: 0,
        DISCOVERABLE_TRUE: 1,
        DISCOVERABLE_INVALID: -1,
        WWWWATCHDOGDELAY_INVALID: _yocto_api.YAPI.INVALID_UINT,
        CALLBACKURL_INVALID: _yocto_api.YAPI.INVALID_STRING,
        CALLBACKMETHOD_POST: 0,
        CALLBACKMETHOD_GET: 1,
        CALLBACKMETHOD_PUT: 2,
        CALLBACKMETHOD_INVALID: -1,
        CALLBACKENCODING_FORM: 0,
        CALLBACKENCODING_JSON: 1,
        CALLBACKENCODING_JSON_ARRAY: 2,
        CALLBACKENCODING_CSV: 3,
        CALLBACKENCODING_YOCTO_API: 4,
        CALLBACKENCODING_JSON_NUM: 5,
        CALLBACKENCODING_EMONCMS: 6,
        CALLBACKENCODING_AZURE: 7,
        CALLBACKENCODING_INFLUXDB: 8,
        CALLBACKENCODING_INVALID: -1,
        CALLBACKCREDENTIALS_INVALID: _yocto_api.YAPI.INVALID_STRING,
        CALLBACKINITIALDELAY_INVALID: _yocto_api.YAPI.INVALID_UINT,
        CALLBACKMINDELAY_INVALID: _yocto_api.YAPI.INVALID_UINT,
        CALLBACKMAXDELAY_INVALID: _yocto_api.YAPI.INVALID_UINT,
        POECURRENT_INVALID: _yocto_api.YAPI.INVALID_UINT
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YNetworkProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'readiness':
          this._readiness = parseInt(val);
          return 1;
        case 'macAddress':
          this._macAddress = val;
          return 1;
        case 'ipAddress':
          this._ipAddress = val;
          return 1;
        case 'subnetMask':
          this._subnetMask = val;
          return 1;
        case 'router':
          this._router = val;
          return 1;
        case 'ipConfig':
          this._ipConfig = val;
          return 1;
        case 'primaryDNS':
          this._primaryDNS = val;
          return 1;
        case 'secondaryDNS':
          this._secondaryDNS = val;
          return 1;
        case 'ntpServer':
          this._ntpServer = val;
          return 1;
        case 'userPassword':
          this._userPassword = val;
          return 1;
        case 'adminPassword':
          this._adminPassword = val;
          return 1;
        case 'httpPort':
          this._httpPort = parseInt(val);
          return 1;
        case 'defaultPage':
          this._defaultPage = val;
          return 1;
        case 'discoverable':
          this._discoverable = parseInt(val);
          return 1;
        case 'wwwWatchdogDelay':
          this._wwwWatchdogDelay = parseInt(val);
          return 1;
        case 'callbackUrl':
          this._callbackUrl = val;
          return 1;
        case 'callbackMethod':
          this._callbackMethod = parseInt(val);
          return 1;
        case 'callbackEncoding':
          this._callbackEncoding = parseInt(val);
          return 1;
        case 'callbackCredentials':
          this._callbackCredentials = val;
          return 1;
        case 'callbackInitialDelay':
          this._callbackInitialDelay = parseInt(val);
          return 1;
        case 'callbackMinDelay':
          this._callbackMinDelay = parseInt(val);
          return 1;
        case 'callbackMaxDelay':
          this._callbackMaxDelay = parseInt(val);
          return 1;
        case 'poeCurrent':
          this._poeCurrent = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_readiness() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_READINESS_INVALID;
          }
        }
        return _this2._readiness;
      })();
    }
    get_macAddress() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        if (_this3._cacheExpiration == 0) {
          if ((yield _this3.load(_this3._yapi.defaultCacheValidity)) != _this3._yapi.SUCCESS) {
            return Y_MACADDRESS_INVALID;
          }
        }
        return _this3._macAddress;
      })();
    }
    get_ipAddress() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_IPADDRESS_INVALID;
          }
        }
        return _this4._ipAddress;
      })();
    }
    get_subnetMask() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        if (_this5._cacheExpiration <= _this5._yapi.GetTickCount()) {
          if ((yield _this5.load(_this5._yapi.defaultCacheValidity)) != _this5._yapi.SUCCESS) {
            return Y_SUBNETMASK_INVALID;
          }
        }
        return _this5._subnetMask;
      })();
    }
    get_router() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_ROUTER_INVALID;
          }
        }
        return _this6._router;
      })();
    }
    get_ipConfig() {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        if (_this7._cacheExpiration <= _this7._yapi.GetTickCount()) {
          if ((yield _this7.load(_this7._yapi.defaultCacheValidity)) != _this7._yapi.SUCCESS) {
            return Y_IPCONFIG_INVALID;
          }
        }
        return _this7._ipConfig;
      })();
    }
    set_ipConfig(newval) {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this8._setAttr('ipConfig', rest_val);
      })();
    }
    get_primaryDNS() {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        if (_this9._cacheExpiration <= _this9._yapi.GetTickCount()) {
          if ((yield _this9.load(_this9._yapi.defaultCacheValidity)) != _this9._yapi.SUCCESS) {
            return Y_PRIMARYDNS_INVALID;
          }
        }
        return _this9._primaryDNS;
      })();
    }
    set_primaryDNS(newval) {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this10._setAttr('primaryDNS', rest_val);
      })();
    }
    get_secondaryDNS() {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        if (_this11._cacheExpiration <= _this11._yapi.GetTickCount()) {
          if ((yield _this11.load(_this11._yapi.defaultCacheValidity)) != _this11._yapi.SUCCESS) {
            return Y_SECONDARYDNS_INVALID;
          }
        }
        return _this11._secondaryDNS;
      })();
    }
    set_secondaryDNS(newval) {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this12._setAttr('secondaryDNS', rest_val);
      })();
    }
    get_ntpServer() {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        if (_this13._cacheExpiration <= _this13._yapi.GetTickCount()) {
          if ((yield _this13.load(_this13._yapi.defaultCacheValidity)) != _this13._yapi.SUCCESS) {
            return Y_NTPSERVER_INVALID;
          }
        }
        return _this13._ntpServer;
      })();
    }
    set_ntpServer(newval) {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this14._setAttr('ntpServer', rest_val);
      })();
    }
    get_userPassword() {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        if (_this15._cacheExpiration <= _this15._yapi.GetTickCount()) {
          if ((yield _this15.load(_this15._yapi.defaultCacheValidity)) != _this15._yapi.SUCCESS) {
            return Y_USERPASSWORD_INVALID;
          }
        }
        return _this15._userPassword;
      })();
    }
    set_userPassword(newval) {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this16._setAttr('userPassword', rest_val);
      })();
    }
    get_adminPassword() {
      var _this17 = this;
      return _asyncToGenerator(function*() {
        if (_this17._cacheExpiration <= _this17._yapi.GetTickCount()) {
          if ((yield _this17.load(_this17._yapi.defaultCacheValidity)) != _this17._yapi.SUCCESS) {
            return Y_ADMINPASSWORD_INVALID;
          }
        }
        return _this17._adminPassword;
      })();
    }
    set_adminPassword(newval) {
      var _this18 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this18._setAttr('adminPassword', rest_val);
      })();
    }
    get_httpPort() {
      var _this19 = this;
      return _asyncToGenerator(function*() {
        if (_this19._cacheExpiration <= _this19._yapi.GetTickCount()) {
          if ((yield _this19.load(_this19._yapi.defaultCacheValidity)) != _this19._yapi.SUCCESS) {
            return Y_HTTPPORT_INVALID;
          }
        }
        return _this19._httpPort;
      })();
    }
    set_httpPort(newval) {
      var _this20 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this20._setAttr('httpPort', rest_val);
      })();
    }
    get_defaultPage() {
      var _this21 = this;
      return _asyncToGenerator(function*() {
        if (_this21._cacheExpiration <= _this21._yapi.GetTickCount()) {
          if ((yield _this21.load(_this21._yapi.defaultCacheValidity)) != _this21._yapi.SUCCESS) {
            return Y_DEFAULTPAGE_INVALID;
          }
        }
        return _this21._defaultPage;
      })();
    }
    set_defaultPage(newval) {
      var _this22 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this22._setAttr('defaultPage', rest_val);
      })();
    }
    get_discoverable() {
      var _this23 = this;
      return _asyncToGenerator(function*() {
        if (_this23._cacheExpiration <= _this23._yapi.GetTickCount()) {
          if ((yield _this23.load(_this23._yapi.defaultCacheValidity)) != _this23._yapi.SUCCESS) {
            return Y_DISCOVERABLE_INVALID;
          }
        }
        return _this23._discoverable;
      })();
    }
    set_discoverable(newval) {
      var _this24 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this24._setAttr('discoverable', rest_val);
      })();
    }
    get_wwwWatchdogDelay() {
      var _this25 = this;
      return _asyncToGenerator(function*() {
        if (_this25._cacheExpiration <= _this25._yapi.GetTickCount()) {
          if ((yield _this25.load(_this25._yapi.defaultCacheValidity)) != _this25._yapi.SUCCESS) {
            return Y_WWWWATCHDOGDELAY_INVALID;
          }
        }
        return _this25._wwwWatchdogDelay;
      })();
    }
    set_wwwWatchdogDelay(newval) {
      var _this26 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this26._setAttr('wwwWatchdogDelay', rest_val);
      })();
    }
    get_callbackUrl() {
      var _this27 = this;
      return _asyncToGenerator(function*() {
        if (_this27._cacheExpiration <= _this27._yapi.GetTickCount()) {
          if ((yield _this27.load(_this27._yapi.defaultCacheValidity)) != _this27._yapi.SUCCESS) {
            return Y_CALLBACKURL_INVALID;
          }
        }
        return _this27._callbackUrl;
      })();
    }
    set_callbackUrl(newval) {
      var _this28 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this28._setAttr('callbackUrl', rest_val);
      })();
    }
    get_callbackMethod() {
      var _this29 = this;
      return _asyncToGenerator(function*() {
        if (_this29._cacheExpiration <= _this29._yapi.GetTickCount()) {
          if ((yield _this29.load(_this29._yapi.defaultCacheValidity)) != _this29._yapi.SUCCESS) {
            return Y_CALLBACKMETHOD_INVALID;
          }
        }
        return _this29._callbackMethod;
      })();
    }
    set_callbackMethod(newval) {
      var _this30 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this30._setAttr('callbackMethod', rest_val);
      })();
    }
    get_callbackEncoding() {
      var _this31 = this;
      return _asyncToGenerator(function*() {
        if (_this31._cacheExpiration <= _this31._yapi.GetTickCount()) {
          if ((yield _this31.load(_this31._yapi.defaultCacheValidity)) != _this31._yapi.SUCCESS) {
            return Y_CALLBACKENCODING_INVALID;
          }
        }
        return _this31._callbackEncoding;
      })();
    }
    set_callbackEncoding(newval) {
      var _this32 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this32._setAttr('callbackEncoding', rest_val);
      })();
    }
    get_callbackCredentials() {
      var _this33 = this;
      return _asyncToGenerator(function*() {
        if (_this33._cacheExpiration <= _this33._yapi.GetTickCount()) {
          if ((yield _this33.load(_this33._yapi.defaultCacheValidity)) != _this33._yapi.SUCCESS) {
            return Y_CALLBACKCREDENTIALS_INVALID;
          }
        }
        return _this33._callbackCredentials;
      })();
    }
    set_callbackCredentials(newval) {
      var _this34 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this34._setAttr('callbackCredentials', rest_val);
      })();
    }
    callbackLogin(username, password) {
      var _this35 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = username + ':' + password;
        return yield _this35._setAttr('callbackCredentials', rest_val);
      })();
    }
    get_callbackInitialDelay() {
      var _this36 = this;
      return _asyncToGenerator(function*() {
        if (_this36._cacheExpiration <= _this36._yapi.GetTickCount()) {
          if ((yield _this36.load(_this36._yapi.defaultCacheValidity)) != _this36._yapi.SUCCESS) {
            return Y_CALLBACKINITIALDELAY_INVALID;
          }
        }
        return _this36._callbackInitialDelay;
      })();
    }
    set_callbackInitialDelay(newval) {
      var _this37 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this37._setAttr('callbackInitialDelay', rest_val);
      })();
    }
    get_callbackMinDelay() {
      var _this38 = this;
      return _asyncToGenerator(function*() {
        if (_this38._cacheExpiration <= _this38._yapi.GetTickCount()) {
          if ((yield _this38.load(_this38._yapi.defaultCacheValidity)) != _this38._yapi.SUCCESS) {
            return Y_CALLBACKMINDELAY_INVALID;
          }
        }
        return _this38._callbackMinDelay;
      })();
    }
    set_callbackMinDelay(newval) {
      var _this39 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this39._setAttr('callbackMinDelay', rest_val);
      })();
    }
    get_callbackMaxDelay() {
      var _this40 = this;
      return _asyncToGenerator(function*() {
        if (_this40._cacheExpiration <= _this40._yapi.GetTickCount()) {
          if ((yield _this40.load(_this40._yapi.defaultCacheValidity)) != _this40._yapi.SUCCESS) {
            return Y_CALLBACKMAXDELAY_INVALID;
          }
        }
        return _this40._callbackMaxDelay;
      })();
    }
    set_callbackMaxDelay(newval) {
      var _this41 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this41._setAttr('callbackMaxDelay', rest_val);
      })();
    }
    get_poeCurrent() {
      var _this42 = this;
      return _asyncToGenerator(function*() {
        if (_this42._cacheExpiration <= _this42._yapi.GetTickCount()) {
          if ((yield _this42.load(_this42._yapi.defaultCacheValidity)) != _this42._yapi.SUCCESS) {
            return Y_POECURRENT_INVALID;
          }
        }
        return _this42._poeCurrent;
      })();
    }
    static FindNetwork(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Network', func);
      if (obj == null) {
        obj = new YNetwork(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Network', func, obj);
      }
      return obj;
    }
    static FindNetworkInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Network', func);
      if (obj == null) {
        obj = new YNetwork(yctx, func);
        _yocto_api.YFunction._AddToCache('Network', func, obj);
      }
      return obj;
    }
    useDHCP(fallbackIpAddr, fallbackSubnetMaskLen, fallbackRouter) {
      var _this43 = this;
      return _asyncToGenerator(function*() {
        return yield _this43.set_ipConfig('DHCP:' + fallbackIpAddr + '/' + String(Math.round(fallbackSubnetMaskLen)) + '/' + fallbackRouter);
      })();
    }
    useStaticIP(ipAddress, subnetMaskLen, router) {
      var _this44 = this;
      return _asyncToGenerator(function*() {
        return yield _this44.set_ipConfig('STATIC:' + ipAddress + '/' + String(Math.round(subnetMaskLen)) + '/' + router);
      })();
    }
    ping(host) {
      var _this45 = this;
      return _asyncToGenerator(function*() {
        let content;
        content = yield _this45._download('ping.txt?host=' + host);
        return _this45._yapi.imm_bin2str(content);
      })();
    }
    triggerCallback() {
      var _this46 = this;
      return _asyncToGenerator(function*() {
        return yield _this46.set_callbackMethod((yield _this46.get_callbackMethod()));
      })();
    }
    nextNetwork() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YNetwork.FindNetworkInContext(this._yapi, next_hwid);
    }
    static FirstNetwork() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Network');
      if (next_hwid == null)
        return null;
      return YNetwork.FindNetwork(next_hwid);
    }
    static FirstNetworkInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Network');
      if (next_hwid == null)
        return null;
      return YNetwork.FindNetworkInContext(yctx, next_hwid);
    }
  }
  exports.YNetwork = YNetwork;
  class YNetworkProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_readiness() {
      return this.liveFunc._readiness;
    }
    get_macAddress() {
      return this.liveFunc._macAddress;
    }
    get_ipAddress() {
      return this.liveFunc._ipAddress;
    }
    get_subnetMask() {
      return this.liveFunc._subnetMask;
    }
    get_router() {
      return this.liveFunc._router;
    }
    get_ipConfig() {
      return this.liveFunc._ipConfig;
    }
    set_ipConfig(newval) {
      this.liveFunc.set_ipConfig(newval);
      return this._yapi.SUCCESS;
    }
    get_primaryDNS() {
      return this.liveFunc._primaryDNS;
    }
    set_primaryDNS(newval) {
      this.liveFunc.set_primaryDNS(newval);
      return this._yapi.SUCCESS;
    }
    get_secondaryDNS() {
      return this.liveFunc._secondaryDNS;
    }
    set_secondaryDNS(newval) {
      this.liveFunc.set_secondaryDNS(newval);
      return this._yapi.SUCCESS;
    }
    get_ntpServer() {
      return this.liveFunc._ntpServer;
    }
    set_ntpServer(newval) {
      this.liveFunc.set_ntpServer(newval);
      return this._yapi.SUCCESS;
    }
    get_userPassword() {
      return this.liveFunc._userPassword;
    }
    set_userPassword(newval) {
      this.liveFunc.set_userPassword(newval);
      return this._yapi.SUCCESS;
    }
    get_adminPassword() {
      return this.liveFunc._adminPassword;
    }
    set_adminPassword(newval) {
      this.liveFunc.set_adminPassword(newval);
      return this._yapi.SUCCESS;
    }
    get_httpPort() {
      return this.liveFunc._httpPort;
    }
    set_httpPort(newval) {
      this.liveFunc.set_httpPort(newval);
      return this._yapi.SUCCESS;
    }
    get_defaultPage() {
      return this.liveFunc._defaultPage;
    }
    set_defaultPage(newval) {
      this.liveFunc.set_defaultPage(newval);
      return this._yapi.SUCCESS;
    }
    get_discoverable() {
      return this.liveFunc._discoverable;
    }
    set_discoverable(newval) {
      this.liveFunc.set_discoverable(newval);
      return this._yapi.SUCCESS;
    }
    get_wwwWatchdogDelay() {
      return this.liveFunc._wwwWatchdogDelay;
    }
    set_wwwWatchdogDelay(newval) {
      this.liveFunc.set_wwwWatchdogDelay(newval);
      return this._yapi.SUCCESS;
    }
    get_callbackUrl() {
      return this.liveFunc._callbackUrl;
    }
    set_callbackUrl(newval) {
      this.liveFunc.set_callbackUrl(newval);
      return this._yapi.SUCCESS;
    }
    get_callbackMethod() {
      return this.liveFunc._callbackMethod;
    }
    set_callbackMethod(newval) {
      this.liveFunc.set_callbackMethod(newval);
      return this._yapi.SUCCESS;
    }
    get_callbackEncoding() {
      return this.liveFunc._callbackEncoding;
    }
    set_callbackEncoding(newval) {
      this.liveFunc.set_callbackEncoding(newval);
      return this._yapi.SUCCESS;
    }
    get_callbackCredentials() {
      return this.liveFunc._callbackCredentials;
    }
    set_callbackCredentials(newval) {
      this.liveFunc.set_callbackCredentials(newval);
      return this._yapi.SUCCESS;
    }
    get_callbackInitialDelay() {
      return this.liveFunc._callbackInitialDelay;
    }
    set_callbackInitialDelay(newval) {
      this.liveFunc.set_callbackInitialDelay(newval);
      return this._yapi.SUCCESS;
    }
    get_callbackMinDelay() {
      return this.liveFunc._callbackMinDelay;
    }
    set_callbackMinDelay(newval) {
      this.liveFunc.set_callbackMinDelay(newval);
      return this._yapi.SUCCESS;
    }
    get_callbackMaxDelay() {
      return this.liveFunc._callbackMaxDelay;
    }
    set_callbackMaxDelay(newval) {
      this.liveFunc.set_callbackMaxDelay(newval);
      return this._yapi.SUCCESS;
    }
    get_poeCurrent() {
      return this.liveFunc._poeCurrent;
    }
    useDHCP(fallbackIpAddr, fallbackSubnetMaskLen, fallbackRouter) {
      this.liveFunc.useDHCP(fallbackIpAddr, fallbackSubnetMaskLen, fallbackRouter);
      return _yocto_api.YAPI_SUCCESS;
    }
    useStaticIP(ipAddress, subnetMaskLen, router) {
      this.liveFunc.useStaticIP(ipAddress, subnetMaskLen, router);
      return _yocto_api.YAPI_SUCCESS;
    }
    triggerCallback() {
      this.liveFunc.triggerCallback();
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YNetworkProxy = YNetworkProxy;
  function yFindNetwork(func) {
    return YNetwork.FindNetwork(func);
  }
  function yFirstNetwork() {
    return YNetwork.FirstNetwork();
  }
  return module.exports;
});

$__System.registerDynamic("23", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YOsControlProxy = exports.YOsControl = exports.Y_SHUTDOWNCOUNTDOWN_INVALID = undefined;
  exports.yFindOsControl = yFindOsControl;
  exports.yFirstOsControl = yFirstOsControl;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_SHUTDOWNCOUNTDOWN_INVALID = exports.Y_SHUTDOWNCOUNTDOWN_INVALID = _yocto_api.YAPI.INVALID_UINT;
  class YOsControl extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'OsControl';
      this._shutdownCountdown = Y_SHUTDOWNCOUNTDOWN_INVALID;
      this.imm_setConst({SHUTDOWNCOUNTDOWN_INVALID: _yocto_api.YAPI.INVALID_UINT});
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YOsControlProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'shutdownCountdown':
          this._shutdownCountdown = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_shutdownCountdown() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_SHUTDOWNCOUNTDOWN_INVALID;
          }
        }
        return _this2._shutdownCountdown;
      })();
    }
    set_shutdownCountdown(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this3._setAttr('shutdownCountdown', rest_val);
      })();
    }
    static FindOsControl(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('OsControl', func);
      if (obj == null) {
        obj = new YOsControl(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('OsControl', func, obj);
      }
      return obj;
    }
    static FindOsControlInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'OsControl', func);
      if (obj == null) {
        obj = new YOsControl(yctx, func);
        _yocto_api.YFunction._AddToCache('OsControl', func, obj);
      }
      return obj;
    }
    shutdown(secBeforeShutDown) {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        return yield _this4.set_shutdownCountdown(secBeforeShutDown);
      })();
    }
    nextOsControl() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YOsControl.FindOsControlInContext(this._yapi, next_hwid);
    }
    static FirstOsControl() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('OsControl');
      if (next_hwid == null)
        return null;
      return YOsControl.FindOsControl(next_hwid);
    }
    static FirstOsControlInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('OsControl');
      if (next_hwid == null)
        return null;
      return YOsControl.FindOsControlInContext(yctx, next_hwid);
    }
  }
  exports.YOsControl = YOsControl;
  class YOsControlProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_shutdownCountdown() {
      return this.liveFunc._shutdownCountdown;
    }
    set_shutdownCountdown(newval) {
      this.liveFunc.set_shutdownCountdown(newval);
      return this._yapi.SUCCESS;
    }
    shutdown(secBeforeShutDown) {
      this.liveFunc.shutdown(secBeforeShutDown);
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YOsControlProxy = YOsControlProxy;
  function yFindOsControl(func) {
    return YOsControl.FindOsControl(func);
  }
  function yFirstOsControl() {
    return YOsControl.FirstOsControl();
  }
  return module.exports;
});

$__System.registerDynamic("24", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YPowerProxy = exports.YPower = exports.Y_METERTIMER_INVALID = exports.Y_METER_INVALID = exports.Y_COSPHI_INVALID = undefined;
  exports.yFindPower = yFindPower;
  exports.yFirstPower = yFirstPower;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_COSPHI_INVALID = exports.Y_COSPHI_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_METER_INVALID = exports.Y_METER_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_METERTIMER_INVALID = exports.Y_METERTIMER_INVALID = _yocto_api.YAPI.INVALID_UINT;
  class YPower extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Power';
      this._cosPhi = Y_COSPHI_INVALID;
      this._meter = Y_METER_INVALID;
      this._meterTimer = Y_METERTIMER_INVALID;
      this.imm_setConst({
        COSPHI_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        METER_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        METERTIMER_INVALID: _yocto_api.YAPI.INVALID_UINT
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YPowerProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'cosPhi':
          this._cosPhi = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'meter':
          this._meter = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'meterTimer':
          this._meterTimer = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_cosPhi() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_COSPHI_INVALID;
          }
        }
        return _this2._cosPhi;
      })();
    }
    set_meter(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this3._setAttr('meter', rest_val);
      })();
    }
    get_meter() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_METER_INVALID;
          }
        }
        return _this4._meter;
      })();
    }
    get_meterTimer() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        if (_this5._cacheExpiration <= _this5._yapi.GetTickCount()) {
          if ((yield _this5.load(_this5._yapi.defaultCacheValidity)) != _this5._yapi.SUCCESS) {
            return Y_METERTIMER_INVALID;
          }
        }
        return _this5._meterTimer;
      })();
    }
    static FindPower(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Power', func);
      if (obj == null) {
        obj = new YPower(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Power', func, obj);
      }
      return obj;
    }
    static FindPowerInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Power', func);
      if (obj == null) {
        obj = new YPower(yctx, func);
        _yocto_api.YFunction._AddToCache('Power', func, obj);
      }
      return obj;
    }
    reset() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        return yield _this6.set_meter(0);
      })();
    }
    nextPower() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YPower.FindPowerInContext(this._yapi, next_hwid);
    }
    static FirstPower() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Power');
      if (next_hwid == null)
        return null;
      return YPower.FindPower(next_hwid);
    }
    static FirstPowerInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Power');
      if (next_hwid == null)
        return null;
      return YPower.FindPowerInContext(yctx, next_hwid);
    }
  }
  exports.YPower = YPower;
  class YPowerProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_cosPhi() {
      return this.liveFunc._cosPhi;
    }
    set_meter(newval) {
      this.liveFunc.set_meter(newval);
      return this._yapi.SUCCESS;
    }
    get_meter() {
      return this.liveFunc._meter;
    }
    get_meterTimer() {
      return this.liveFunc._meterTimer;
    }
    reset() {
      this.liveFunc.reset();
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YPowerProxy = YPowerProxy;
  function yFindPower(func) {
    return YPower.FindPower(func);
  }
  function yFirstPower() {
    return YPower.FirstPower();
  }
  return module.exports;
});

$__System.registerDynamic("25", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YPowerOutputProxy = exports.YPowerOutput = exports.Y_VOLTAGE_INVALID = exports.Y_VOLTAGE_OUT5V = exports.Y_VOLTAGE_OUT3V3 = exports.Y_VOLTAGE_OFF = undefined;
  exports.yFindPowerOutput = yFindPowerOutput;
  exports.yFirstPowerOutput = yFirstPowerOutput;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_VOLTAGE_OFF = exports.Y_VOLTAGE_OFF = 0;
  var Y_VOLTAGE_OUT3V3 = exports.Y_VOLTAGE_OUT3V3 = 1;
  var Y_VOLTAGE_OUT5V = exports.Y_VOLTAGE_OUT5V = 2;
  var Y_VOLTAGE_INVALID = exports.Y_VOLTAGE_INVALID = -1;
  class YPowerOutput extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'PowerOutput';
      this._voltage = Y_VOLTAGE_INVALID;
      this.imm_setConst({
        VOLTAGE_OFF: 0,
        VOLTAGE_OUT3V3: 1,
        VOLTAGE_OUT5V: 2,
        VOLTAGE_INVALID: -1
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YPowerOutputProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'voltage':
          this._voltage = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_voltage() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_VOLTAGE_INVALID;
          }
        }
        return _this2._voltage;
      })();
    }
    set_voltage(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this3._setAttr('voltage', rest_val);
      })();
    }
    static FindPowerOutput(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('PowerOutput', func);
      if (obj == null) {
        obj = new YPowerOutput(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('PowerOutput', func, obj);
      }
      return obj;
    }
    static FindPowerOutputInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'PowerOutput', func);
      if (obj == null) {
        obj = new YPowerOutput(yctx, func);
        _yocto_api.YFunction._AddToCache('PowerOutput', func, obj);
      }
      return obj;
    }
    nextPowerOutput() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YPowerOutput.FindPowerOutputInContext(this._yapi, next_hwid);
    }
    static FirstPowerOutput() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('PowerOutput');
      if (next_hwid == null)
        return null;
      return YPowerOutput.FindPowerOutput(next_hwid);
    }
    static FirstPowerOutputInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('PowerOutput');
      if (next_hwid == null)
        return null;
      return YPowerOutput.FindPowerOutputInContext(yctx, next_hwid);
    }
  }
  exports.YPowerOutput = YPowerOutput;
  class YPowerOutputProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_voltage() {
      return this.liveFunc._voltage;
    }
    set_voltage(newval) {
      this.liveFunc.set_voltage(newval);
      return this._yapi.SUCCESS;
    }
  }
  exports.YPowerOutputProxy = YPowerOutputProxy;
  function yFindPowerOutput(func) {
    return YPowerOutput.FindPowerOutput(func);
  }
  function yFirstPowerOutput() {
    return YPowerOutput.FirstPowerOutput();
  }
  return module.exports;
});

$__System.registerDynamic("26", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YPressureProxy = exports.YPressure = undefined;
  exports.yFindPressure = yFindPressure;
  exports.yFirstPressure = yFirstPressure;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  class YPressure extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Pressure';
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YPressureProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    static FindPressure(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Pressure', func);
      if (obj == null) {
        obj = new YPressure(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Pressure', func, obj);
      }
      return obj;
    }
    static FindPressureInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Pressure', func);
      if (obj == null) {
        obj = new YPressure(yctx, func);
        _yocto_api.YFunction._AddToCache('Pressure', func, obj);
      }
      return obj;
    }
    nextPressure() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YPressure.FindPressureInContext(this._yapi, next_hwid);
    }
    static FirstPressure() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Pressure');
      if (next_hwid == null)
        return null;
      return YPressure.FindPressure(next_hwid);
    }
    static FirstPressureInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Pressure');
      if (next_hwid == null)
        return null;
      return YPressure.FindPressureInContext(yctx, next_hwid);
    }
  }
  exports.YPressure = YPressure;
  class YPressureProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
  }
  exports.YPressureProxy = YPressureProxy;
  function yFindPressure(func) {
    return YPressure.FindPressure(func);
  }
  function yFirstPressure() {
    return YPressure.FirstPressure();
  }
  return module.exports;
});

$__System.registerDynamic("27", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YPwmInputProxy = exports.YPwmInput = exports.Y_PULSETIMER_INVALID = exports.Y_PULSECOUNTER_INVALID = exports.Y_PERIOD_INVALID = exports.Y_FREQUENCY_INVALID = exports.Y_PULSEDURATION_INVALID = exports.Y_DUTYCYCLE_INVALID = exports.Y_PWMREPORTMODE_INVALID = exports.Y_PWMREPORTMODE_PWM_EDGECOUNT = exports.Y_PWMREPORTMODE_PWM_PULSEDURATION = exports.Y_PWMREPORTMODE_PWM_FREQUENCY = exports.Y_PWMREPORTMODE_PWM_DUTYCYCLE = undefined;
  exports.yFindPwmInput = yFindPwmInput;
  exports.yFirstPwmInput = yFirstPwmInput;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_PWMREPORTMODE_PWM_DUTYCYCLE = exports.Y_PWMREPORTMODE_PWM_DUTYCYCLE = 0;
  var Y_PWMREPORTMODE_PWM_FREQUENCY = exports.Y_PWMREPORTMODE_PWM_FREQUENCY = 1;
  var Y_PWMREPORTMODE_PWM_PULSEDURATION = exports.Y_PWMREPORTMODE_PWM_PULSEDURATION = 2;
  var Y_PWMREPORTMODE_PWM_EDGECOUNT = exports.Y_PWMREPORTMODE_PWM_EDGECOUNT = 3;
  var Y_PWMREPORTMODE_INVALID = exports.Y_PWMREPORTMODE_INVALID = -1;
  var Y_DUTYCYCLE_INVALID = exports.Y_DUTYCYCLE_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_PULSEDURATION_INVALID = exports.Y_PULSEDURATION_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_FREQUENCY_INVALID = exports.Y_FREQUENCY_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_PERIOD_INVALID = exports.Y_PERIOD_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_PULSECOUNTER_INVALID = exports.Y_PULSECOUNTER_INVALID = _yocto_api.YAPI.INVALID_LONG;
  var Y_PULSETIMER_INVALID = exports.Y_PULSETIMER_INVALID = _yocto_api.YAPI.INVALID_LONG;
  class YPwmInput extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'PwmInput';
      this._dutyCycle = Y_DUTYCYCLE_INVALID;
      this._pulseDuration = Y_PULSEDURATION_INVALID;
      this._frequency = Y_FREQUENCY_INVALID;
      this._period = Y_PERIOD_INVALID;
      this._pulseCounter = Y_PULSECOUNTER_INVALID;
      this._pulseTimer = Y_PULSETIMER_INVALID;
      this._pwmReportMode = Y_PWMREPORTMODE_INVALID;
      this.imm_setConst({
        DUTYCYCLE_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        PULSEDURATION_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        FREQUENCY_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        PERIOD_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        PULSECOUNTER_INVALID: _yocto_api.YAPI.INVALID_LONG,
        PULSETIMER_INVALID: _yocto_api.YAPI.INVALID_LONG,
        PWMREPORTMODE_PWM_DUTYCYCLE: 0,
        PWMREPORTMODE_PWM_FREQUENCY: 1,
        PWMREPORTMODE_PWM_PULSEDURATION: 2,
        PWMREPORTMODE_PWM_EDGECOUNT: 3,
        PWMREPORTMODE_INVALID: -1
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YPwmInputProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'dutyCycle':
          this._dutyCycle = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'pulseDuration':
          this._pulseDuration = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'frequency':
          this._frequency = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'period':
          this._period = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'pulseCounter':
          this._pulseCounter = parseInt(val);
          return 1;
        case 'pulseTimer':
          this._pulseTimer = parseInt(val);
          return 1;
        case 'pwmReportMode':
          this._pwmReportMode = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_dutyCycle() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_DUTYCYCLE_INVALID;
          }
        }
        return _this2._dutyCycle;
      })();
    }
    get_pulseDuration() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        if (_this3._cacheExpiration <= _this3._yapi.GetTickCount()) {
          if ((yield _this3.load(_this3._yapi.defaultCacheValidity)) != _this3._yapi.SUCCESS) {
            return Y_PULSEDURATION_INVALID;
          }
        }
        return _this3._pulseDuration;
      })();
    }
    get_frequency() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_FREQUENCY_INVALID;
          }
        }
        return _this4._frequency;
      })();
    }
    get_period() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        if (_this5._cacheExpiration <= _this5._yapi.GetTickCount()) {
          if ((yield _this5.load(_this5._yapi.defaultCacheValidity)) != _this5._yapi.SUCCESS) {
            return Y_PERIOD_INVALID;
          }
        }
        return _this5._period;
      })();
    }
    get_pulseCounter() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_PULSECOUNTER_INVALID;
          }
        }
        return _this6._pulseCounter;
      })();
    }
    set_pulseCounter(newval) {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this7._setAttr('pulseCounter', rest_val);
      })();
    }
    get_pulseTimer() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        if (_this8._cacheExpiration <= _this8._yapi.GetTickCount()) {
          if ((yield _this8.load(_this8._yapi.defaultCacheValidity)) != _this8._yapi.SUCCESS) {
            return Y_PULSETIMER_INVALID;
          }
        }
        return _this8._pulseTimer;
      })();
    }
    get_pwmReportMode() {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        if (_this9._cacheExpiration <= _this9._yapi.GetTickCount()) {
          if ((yield _this9.load(_this9._yapi.defaultCacheValidity)) != _this9._yapi.SUCCESS) {
            return Y_PWMREPORTMODE_INVALID;
          }
        }
        return _this9._pwmReportMode;
      })();
    }
    set_pwmReportMode(newval) {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this10._setAttr('pwmReportMode', rest_val);
      })();
    }
    static FindPwmInput(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('PwmInput', func);
      if (obj == null) {
        obj = new YPwmInput(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('PwmInput', func, obj);
      }
      return obj;
    }
    static FindPwmInputInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'PwmInput', func);
      if (obj == null) {
        obj = new YPwmInput(yctx, func);
        _yocto_api.YFunction._AddToCache('PwmInput', func, obj);
      }
      return obj;
    }
    resetCounter() {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        return yield _this11.set_pulseCounter(0);
      })();
    }
    nextPwmInput() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YPwmInput.FindPwmInputInContext(this._yapi, next_hwid);
    }
    static FirstPwmInput() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('PwmInput');
      if (next_hwid == null)
        return null;
      return YPwmInput.FindPwmInput(next_hwid);
    }
    static FirstPwmInputInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('PwmInput');
      if (next_hwid == null)
        return null;
      return YPwmInput.FindPwmInputInContext(yctx, next_hwid);
    }
  }
  exports.YPwmInput = YPwmInput;
  class YPwmInputProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_dutyCycle() {
      return this.liveFunc._dutyCycle;
    }
    get_pulseDuration() {
      return this.liveFunc._pulseDuration;
    }
    get_frequency() {
      return this.liveFunc._frequency;
    }
    get_period() {
      return this.liveFunc._period;
    }
    get_pulseCounter() {
      return this.liveFunc._pulseCounter;
    }
    set_pulseCounter(newval) {
      this.liveFunc.set_pulseCounter(newval);
      return this._yapi.SUCCESS;
    }
    get_pulseTimer() {
      return this.liveFunc._pulseTimer;
    }
    get_pwmReportMode() {
      return this.liveFunc._pwmReportMode;
    }
    set_pwmReportMode(newval) {
      this.liveFunc.set_pwmReportMode(newval);
      return this._yapi.SUCCESS;
    }
    resetCounter() {
      this.liveFunc.resetCounter();
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YPwmInputProxy = YPwmInputProxy;
  function yFindPwmInput(func) {
    return YPwmInput.FindPwmInput(func);
  }
  function yFirstPwmInput() {
    return YPwmInput.FirstPwmInput();
  }
  return module.exports;
});

$__System.registerDynamic("28", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YPwmOutputProxy = exports.YPwmOutput = exports.Y_DUTYCYCLEATPOWERON_INVALID = exports.Y_PWMTRANSITION_INVALID = exports.Y_PULSEDURATION_INVALID = exports.Y_DUTYCYCLE_INVALID = exports.Y_PERIOD_INVALID = exports.Y_FREQUENCY_INVALID = exports.Y_ENABLEDATPOWERON_INVALID = exports.Y_ENABLEDATPOWERON_TRUE = exports.Y_ENABLEDATPOWERON_FALSE = exports.Y_ENABLED_INVALID = exports.Y_ENABLED_TRUE = exports.Y_ENABLED_FALSE = undefined;
  exports.yFindPwmOutput = yFindPwmOutput;
  exports.yFirstPwmOutput = yFirstPwmOutput;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_ENABLED_FALSE = exports.Y_ENABLED_FALSE = 0;
  var Y_ENABLED_TRUE = exports.Y_ENABLED_TRUE = 1;
  var Y_ENABLED_INVALID = exports.Y_ENABLED_INVALID = -1;
  var Y_ENABLEDATPOWERON_FALSE = exports.Y_ENABLEDATPOWERON_FALSE = 0;
  var Y_ENABLEDATPOWERON_TRUE = exports.Y_ENABLEDATPOWERON_TRUE = 1;
  var Y_ENABLEDATPOWERON_INVALID = exports.Y_ENABLEDATPOWERON_INVALID = -1;
  var Y_FREQUENCY_INVALID = exports.Y_FREQUENCY_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_PERIOD_INVALID = exports.Y_PERIOD_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_DUTYCYCLE_INVALID = exports.Y_DUTYCYCLE_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_PULSEDURATION_INVALID = exports.Y_PULSEDURATION_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_PWMTRANSITION_INVALID = exports.Y_PWMTRANSITION_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_DUTYCYCLEATPOWERON_INVALID = exports.Y_DUTYCYCLEATPOWERON_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  class YPwmOutput extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'PwmOutput';
      this._enabled = Y_ENABLED_INVALID;
      this._frequency = Y_FREQUENCY_INVALID;
      this._period = Y_PERIOD_INVALID;
      this._dutyCycle = Y_DUTYCYCLE_INVALID;
      this._pulseDuration = Y_PULSEDURATION_INVALID;
      this._pwmTransition = Y_PWMTRANSITION_INVALID;
      this._enabledAtPowerOn = Y_ENABLEDATPOWERON_INVALID;
      this._dutyCycleAtPowerOn = Y_DUTYCYCLEATPOWERON_INVALID;
      this.imm_setConst({
        ENABLED_FALSE: 0,
        ENABLED_TRUE: 1,
        ENABLED_INVALID: -1,
        FREQUENCY_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        PERIOD_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        DUTYCYCLE_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        PULSEDURATION_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        PWMTRANSITION_INVALID: _yocto_api.YAPI.INVALID_STRING,
        ENABLEDATPOWERON_FALSE: 0,
        ENABLEDATPOWERON_TRUE: 1,
        ENABLEDATPOWERON_INVALID: -1,
        DUTYCYCLEATPOWERON_INVALID: _yocto_api.YAPI.INVALID_DOUBLE
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YPwmOutputProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'enabled':
          this._enabled = parseInt(val);
          return 1;
        case 'frequency':
          this._frequency = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'period':
          this._period = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'dutyCycle':
          this._dutyCycle = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'pulseDuration':
          this._pulseDuration = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'pwmTransition':
          this._pwmTransition = val;
          return 1;
        case 'enabledAtPowerOn':
          this._enabledAtPowerOn = parseInt(val);
          return 1;
        case 'dutyCycleAtPowerOn':
          this._dutyCycleAtPowerOn = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_enabled() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_ENABLED_INVALID;
          }
        }
        return _this2._enabled;
      })();
    }
    set_enabled(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this3._setAttr('enabled', rest_val);
      })();
    }
    set_frequency(newval) {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this4._setAttr('frequency', rest_val);
      })();
    }
    get_frequency() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        if (_this5._cacheExpiration <= _this5._yapi.GetTickCount()) {
          if ((yield _this5.load(_this5._yapi.defaultCacheValidity)) != _this5._yapi.SUCCESS) {
            return Y_FREQUENCY_INVALID;
          }
        }
        return _this5._frequency;
      })();
    }
    set_period(newval) {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this6._setAttr('period', rest_val);
      })();
    }
    get_period() {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        if (_this7._cacheExpiration <= _this7._yapi.GetTickCount()) {
          if ((yield _this7.load(_this7._yapi.defaultCacheValidity)) != _this7._yapi.SUCCESS) {
            return Y_PERIOD_INVALID;
          }
        }
        return _this7._period;
      })();
    }
    set_dutyCycle(newval) {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this8._setAttr('dutyCycle', rest_val);
      })();
    }
    get_dutyCycle() {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        if (_this9._cacheExpiration <= _this9._yapi.GetTickCount()) {
          if ((yield _this9.load(_this9._yapi.defaultCacheValidity)) != _this9._yapi.SUCCESS) {
            return Y_DUTYCYCLE_INVALID;
          }
        }
        return _this9._dutyCycle;
      })();
    }
    set_pulseDuration(newval) {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this10._setAttr('pulseDuration', rest_val);
      })();
    }
    get_pulseDuration() {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        if (_this11._cacheExpiration <= _this11._yapi.GetTickCount()) {
          if ((yield _this11.load(_this11._yapi.defaultCacheValidity)) != _this11._yapi.SUCCESS) {
            return Y_PULSEDURATION_INVALID;
          }
        }
        return _this11._pulseDuration;
      })();
    }
    get_pwmTransition() {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        if (_this12._cacheExpiration <= _this12._yapi.GetTickCount()) {
          if ((yield _this12.load(_this12._yapi.defaultCacheValidity)) != _this12._yapi.SUCCESS) {
            return Y_PWMTRANSITION_INVALID;
          }
        }
        return _this12._pwmTransition;
      })();
    }
    set_pwmTransition(newval) {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this13._setAttr('pwmTransition', rest_val);
      })();
    }
    get_enabledAtPowerOn() {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        if (_this14._cacheExpiration <= _this14._yapi.GetTickCount()) {
          if ((yield _this14.load(_this14._yapi.defaultCacheValidity)) != _this14._yapi.SUCCESS) {
            return Y_ENABLEDATPOWERON_INVALID;
          }
        }
        return _this14._enabledAtPowerOn;
      })();
    }
    set_enabledAtPowerOn(newval) {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this15._setAttr('enabledAtPowerOn', rest_val);
      })();
    }
    set_dutyCycleAtPowerOn(newval) {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this16._setAttr('dutyCycleAtPowerOn', rest_val);
      })();
    }
    get_dutyCycleAtPowerOn() {
      var _this17 = this;
      return _asyncToGenerator(function*() {
        if (_this17._cacheExpiration <= _this17._yapi.GetTickCount()) {
          if ((yield _this17.load(_this17._yapi.defaultCacheValidity)) != _this17._yapi.SUCCESS) {
            return Y_DUTYCYCLEATPOWERON_INVALID;
          }
        }
        return _this17._dutyCycleAtPowerOn;
      })();
    }
    static FindPwmOutput(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('PwmOutput', func);
      if (obj == null) {
        obj = new YPwmOutput(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('PwmOutput', func, obj);
      }
      return obj;
    }
    static FindPwmOutputInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'PwmOutput', func);
      if (obj == null) {
        obj = new YPwmOutput(yctx, func);
        _yocto_api.YFunction._AddToCache('PwmOutput', func, obj);
      }
      return obj;
    }
    pulseDurationMove(ms_target, ms_duration) {
      var _this18 = this;
      return _asyncToGenerator(function*() {
        let newval;
        if (ms_target < 0.0) {
          ms_target = 0.0;
        }
        newval = String(Math.round(Math.round(ms_target * 65536))) + 'ms:' + String(Math.round(ms_duration));
        return yield _this18.set_pwmTransition(newval);
      })();
    }
    dutyCycleMove(target, ms_duration) {
      var _this19 = this;
      return _asyncToGenerator(function*() {
        let newval;
        if (target < 0.0) {
          target = 0.0;
        }
        if (target > 100.0) {
          target = 100.0;
        }
        newval = String(Math.round(Math.round(target * 65536))) + ':' + String(Math.round(ms_duration));
        return yield _this19.set_pwmTransition(newval);
      })();
    }
    nextPwmOutput() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YPwmOutput.FindPwmOutputInContext(this._yapi, next_hwid);
    }
    static FirstPwmOutput() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('PwmOutput');
      if (next_hwid == null)
        return null;
      return YPwmOutput.FindPwmOutput(next_hwid);
    }
    static FirstPwmOutputInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('PwmOutput');
      if (next_hwid == null)
        return null;
      return YPwmOutput.FindPwmOutputInContext(yctx, next_hwid);
    }
  }
  exports.YPwmOutput = YPwmOutput;
  class YPwmOutputProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_enabled() {
      return this.liveFunc._enabled;
    }
    set_enabled(newval) {
      this.liveFunc.set_enabled(newval);
      return this._yapi.SUCCESS;
    }
    set_frequency(newval) {
      this.liveFunc.set_frequency(newval);
      return this._yapi.SUCCESS;
    }
    get_frequency() {
      return this.liveFunc._frequency;
    }
    set_period(newval) {
      this.liveFunc.set_period(newval);
      return this._yapi.SUCCESS;
    }
    get_period() {
      return this.liveFunc._period;
    }
    set_dutyCycle(newval) {
      this.liveFunc.set_dutyCycle(newval);
      return this._yapi.SUCCESS;
    }
    get_dutyCycle() {
      return this.liveFunc._dutyCycle;
    }
    set_pulseDuration(newval) {
      this.liveFunc.set_pulseDuration(newval);
      return this._yapi.SUCCESS;
    }
    get_pulseDuration() {
      return this.liveFunc._pulseDuration;
    }
    get_pwmTransition() {
      return this.liveFunc._pwmTransition;
    }
    set_pwmTransition(newval) {
      this.liveFunc.set_pwmTransition(newval);
      return this._yapi.SUCCESS;
    }
    get_enabledAtPowerOn() {
      return this.liveFunc._enabledAtPowerOn;
    }
    set_enabledAtPowerOn(newval) {
      this.liveFunc.set_enabledAtPowerOn(newval);
      return this._yapi.SUCCESS;
    }
    set_dutyCycleAtPowerOn(newval) {
      this.liveFunc.set_dutyCycleAtPowerOn(newval);
      return this._yapi.SUCCESS;
    }
    get_dutyCycleAtPowerOn() {
      return this.liveFunc._dutyCycleAtPowerOn;
    }
    pulseDurationMove(ms_target, ms_duration) {
      this.liveFunc.pulseDurationMove(ms_target, ms_duration);
      return _yocto_api.YAPI_SUCCESS;
    }
    dutyCycleMove(target, ms_duration) {
      this.liveFunc.dutyCycleMove(target, ms_duration);
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YPwmOutputProxy = YPwmOutputProxy;
  function yFindPwmOutput(func) {
    return YPwmOutput.FindPwmOutput(func);
  }
  function yFirstPwmOutput() {
    return YPwmOutput.FirstPwmOutput();
  }
  return module.exports;
});

$__System.registerDynamic("29", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YPwmPowerSourceProxy = exports.YPwmPowerSource = exports.Y_POWERMODE_INVALID = exports.Y_POWERMODE_OPNDRN = exports.Y_POWERMODE_EXT_V = exports.Y_POWERMODE_USB_3V = exports.Y_POWERMODE_USB_5V = undefined;
  exports.yFindPwmPowerSource = yFindPwmPowerSource;
  exports.yFirstPwmPowerSource = yFirstPwmPowerSource;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_POWERMODE_USB_5V = exports.Y_POWERMODE_USB_5V = 0;
  var Y_POWERMODE_USB_3V = exports.Y_POWERMODE_USB_3V = 1;
  var Y_POWERMODE_EXT_V = exports.Y_POWERMODE_EXT_V = 2;
  var Y_POWERMODE_OPNDRN = exports.Y_POWERMODE_OPNDRN = 3;
  var Y_POWERMODE_INVALID = exports.Y_POWERMODE_INVALID = -1;
  class YPwmPowerSource extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'PwmPowerSource';
      this._powerMode = Y_POWERMODE_INVALID;
      this.imm_setConst({
        POWERMODE_USB_5V: 0,
        POWERMODE_USB_3V: 1,
        POWERMODE_EXT_V: 2,
        POWERMODE_OPNDRN: 3,
        POWERMODE_INVALID: -1
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YPwmPowerSourceProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'powerMode':
          this._powerMode = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_powerMode() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_POWERMODE_INVALID;
          }
        }
        return _this2._powerMode;
      })();
    }
    set_powerMode(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this3._setAttr('powerMode', rest_val);
      })();
    }
    static FindPwmPowerSource(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('PwmPowerSource', func);
      if (obj == null) {
        obj = new YPwmPowerSource(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('PwmPowerSource', func, obj);
      }
      return obj;
    }
    static FindPwmPowerSourceInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'PwmPowerSource', func);
      if (obj == null) {
        obj = new YPwmPowerSource(yctx, func);
        _yocto_api.YFunction._AddToCache('PwmPowerSource', func, obj);
      }
      return obj;
    }
    nextPwmPowerSource() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YPwmPowerSource.FindPwmPowerSourceInContext(this._yapi, next_hwid);
    }
    static FirstPwmPowerSource() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('PwmPowerSource');
      if (next_hwid == null)
        return null;
      return YPwmPowerSource.FindPwmPowerSource(next_hwid);
    }
    static FirstPwmPowerSourceInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('PwmPowerSource');
      if (next_hwid == null)
        return null;
      return YPwmPowerSource.FindPwmPowerSourceInContext(yctx, next_hwid);
    }
  }
  exports.YPwmPowerSource = YPwmPowerSource;
  class YPwmPowerSourceProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_powerMode() {
      return this.liveFunc._powerMode;
    }
    set_powerMode(newval) {
      this.liveFunc.set_powerMode(newval);
      return this._yapi.SUCCESS;
    }
  }
  exports.YPwmPowerSourceProxy = YPwmPowerSourceProxy;
  function yFindPwmPowerSource(func) {
    return YPwmPowerSource.FindPwmPowerSource(func);
  }
  function yFirstPwmPowerSource() {
    return YPwmPowerSource.FirstPwmPowerSource();
  }
  return module.exports;
});

$__System.registerDynamic("2a", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YQuadratureDecoderProxy = exports.YQuadratureDecoder = exports.Y_SPEED_INVALID = exports.Y_DECODING_INVALID = exports.Y_DECODING_ON = exports.Y_DECODING_OFF = undefined;
  exports.yFindQuadratureDecoder = yFindQuadratureDecoder;
  exports.yFirstQuadratureDecoder = yFirstQuadratureDecoder;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_DECODING_OFF = exports.Y_DECODING_OFF = 0;
  var Y_DECODING_ON = exports.Y_DECODING_ON = 1;
  var Y_DECODING_INVALID = exports.Y_DECODING_INVALID = -1;
  var Y_SPEED_INVALID = exports.Y_SPEED_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  class YQuadratureDecoder extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'QuadratureDecoder';
      this._speed = Y_SPEED_INVALID;
      this._decoding = Y_DECODING_INVALID;
      this.imm_setConst({
        SPEED_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        DECODING_OFF: 0,
        DECODING_ON: 1,
        DECODING_INVALID: -1
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YQuadratureDecoderProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'speed':
          this._speed = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'decoding':
          this._decoding = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    set_currentValue(newval) {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this2._setAttr('currentValue', rest_val);
      })();
    }
    get_speed() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        if (_this3._cacheExpiration <= _this3._yapi.GetTickCount()) {
          if ((yield _this3.load(_this3._yapi.defaultCacheValidity)) != _this3._yapi.SUCCESS) {
            return Y_SPEED_INVALID;
          }
        }
        return _this3._speed;
      })();
    }
    get_decoding() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_DECODING_INVALID;
          }
        }
        return _this4._decoding;
      })();
    }
    set_decoding(newval) {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this5._setAttr('decoding', rest_val);
      })();
    }
    static FindQuadratureDecoder(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('QuadratureDecoder', func);
      if (obj == null) {
        obj = new YQuadratureDecoder(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('QuadratureDecoder', func, obj);
      }
      return obj;
    }
    static FindQuadratureDecoderInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'QuadratureDecoder', func);
      if (obj == null) {
        obj = new YQuadratureDecoder(yctx, func);
        _yocto_api.YFunction._AddToCache('QuadratureDecoder', func, obj);
      }
      return obj;
    }
    nextQuadratureDecoder() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YQuadratureDecoder.FindQuadratureDecoderInContext(this._yapi, next_hwid);
    }
    static FirstQuadratureDecoder() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('QuadratureDecoder');
      if (next_hwid == null)
        return null;
      return YQuadratureDecoder.FindQuadratureDecoder(next_hwid);
    }
    static FirstQuadratureDecoderInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('QuadratureDecoder');
      if (next_hwid == null)
        return null;
      return YQuadratureDecoder.FindQuadratureDecoderInContext(yctx, next_hwid);
    }
  }
  exports.YQuadratureDecoder = YQuadratureDecoder;
  class YQuadratureDecoderProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    set_currentValue(newval) {
      this.liveFunc.set_currentValue(newval);
      return this._yapi.SUCCESS;
    }
    get_speed() {
      return this.liveFunc._speed;
    }
    get_decoding() {
      return this.liveFunc._decoding;
    }
    set_decoding(newval) {
      this.liveFunc.set_decoding(newval);
      return this._yapi.SUCCESS;
    }
  }
  exports.YQuadratureDecoderProxy = YQuadratureDecoderProxy;
  function yFindQuadratureDecoder(func) {
    return YQuadratureDecoder.FindQuadratureDecoder(func);
  }
  function yFirstQuadratureDecoder() {
    return YQuadratureDecoder.FirstQuadratureDecoder();
  }
  return module.exports;
});

$__System.registerDynamic("2b", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YRealTimeClockProxy = exports.YRealTimeClock = exports.Y_UTCOFFSET_INVALID = exports.Y_DATETIME_INVALID = exports.Y_UNIXTIME_INVALID = exports.Y_TIMESET_INVALID = exports.Y_TIMESET_TRUE = exports.Y_TIMESET_FALSE = undefined;
  exports.yFindRealTimeClock = yFindRealTimeClock;
  exports.yFirstRealTimeClock = yFirstRealTimeClock;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_TIMESET_FALSE = exports.Y_TIMESET_FALSE = 0;
  var Y_TIMESET_TRUE = exports.Y_TIMESET_TRUE = 1;
  var Y_TIMESET_INVALID = exports.Y_TIMESET_INVALID = -1;
  var Y_UNIXTIME_INVALID = exports.Y_UNIXTIME_INVALID = _yocto_api.YAPI.INVALID_LONG;
  var Y_DATETIME_INVALID = exports.Y_DATETIME_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_UTCOFFSET_INVALID = exports.Y_UTCOFFSET_INVALID = _yocto_api.YAPI.INVALID_INT;
  class YRealTimeClock extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'RealTimeClock';
      this._unixTime = Y_UNIXTIME_INVALID;
      this._dateTime = Y_DATETIME_INVALID;
      this._utcOffset = Y_UTCOFFSET_INVALID;
      this._timeSet = Y_TIMESET_INVALID;
      this.imm_setConst({
        UNIXTIME_INVALID: _yocto_api.YAPI.INVALID_LONG,
        DATETIME_INVALID: _yocto_api.YAPI.INVALID_STRING,
        UTCOFFSET_INVALID: _yocto_api.YAPI.INVALID_INT,
        TIMESET_FALSE: 0,
        TIMESET_TRUE: 1,
        TIMESET_INVALID: -1
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YRealTimeClockProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'unixTime':
          this._unixTime = parseInt(val);
          return 1;
        case 'dateTime':
          this._dateTime = val;
          return 1;
        case 'utcOffset':
          this._utcOffset = parseInt(val);
          return 1;
        case 'timeSet':
          this._timeSet = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_unixTime() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_UNIXTIME_INVALID;
          }
        }
        return _this2._unixTime;
      })();
    }
    set_unixTime(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this3._setAttr('unixTime', rest_val);
      })();
    }
    get_dateTime() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_DATETIME_INVALID;
          }
        }
        return _this4._dateTime;
      })();
    }
    get_utcOffset() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        if (_this5._cacheExpiration <= _this5._yapi.GetTickCount()) {
          if ((yield _this5.load(_this5._yapi.defaultCacheValidity)) != _this5._yapi.SUCCESS) {
            return Y_UTCOFFSET_INVALID;
          }
        }
        return _this5._utcOffset;
      })();
    }
    set_utcOffset(newval) {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this6._setAttr('utcOffset', rest_val);
      })();
    }
    get_timeSet() {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        if (_this7._cacheExpiration <= _this7._yapi.GetTickCount()) {
          if ((yield _this7.load(_this7._yapi.defaultCacheValidity)) != _this7._yapi.SUCCESS) {
            return Y_TIMESET_INVALID;
          }
        }
        return _this7._timeSet;
      })();
    }
    static FindRealTimeClock(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('RealTimeClock', func);
      if (obj == null) {
        obj = new YRealTimeClock(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('RealTimeClock', func, obj);
      }
      return obj;
    }
    static FindRealTimeClockInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'RealTimeClock', func);
      if (obj == null) {
        obj = new YRealTimeClock(yctx, func);
        _yocto_api.YFunction._AddToCache('RealTimeClock', func, obj);
      }
      return obj;
    }
    nextRealTimeClock() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YRealTimeClock.FindRealTimeClockInContext(this._yapi, next_hwid);
    }
    static FirstRealTimeClock() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('RealTimeClock');
      if (next_hwid == null)
        return null;
      return YRealTimeClock.FindRealTimeClock(next_hwid);
    }
    static FirstRealTimeClockInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('RealTimeClock');
      if (next_hwid == null)
        return null;
      return YRealTimeClock.FindRealTimeClockInContext(yctx, next_hwid);
    }
  }
  exports.YRealTimeClock = YRealTimeClock;
  class YRealTimeClockProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_unixTime() {
      return this.liveFunc._unixTime;
    }
    set_unixTime(newval) {
      this.liveFunc.set_unixTime(newval);
      return this._yapi.SUCCESS;
    }
    get_dateTime() {
      return this.liveFunc._dateTime;
    }
    get_utcOffset() {
      return this.liveFunc._utcOffset;
    }
    set_utcOffset(newval) {
      this.liveFunc.set_utcOffset(newval);
      return this._yapi.SUCCESS;
    }
    get_timeSet() {
      return this.liveFunc._timeSet;
    }
  }
  exports.YRealTimeClockProxy = YRealTimeClockProxy;
  function yFindRealTimeClock(func) {
    return YRealTimeClock.FindRealTimeClock(func);
  }
  function yFirstRealTimeClock() {
    return YRealTimeClock.FirstRealTimeClock();
  }
  return module.exports;
});

$__System.registerDynamic("2c", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YRefFrameProxy = exports.YRefFrame = exports.Y_CALIBRATIONPARAM_INVALID = exports.Y_BEARING_INVALID = exports.Y_MOUNTPOS_INVALID = exports.Y_MOUNTORIENTATION_NINE = exports.Y_MOUNTORIENTATION_SIX = exports.Y_MOUNTORIENTATION_THREE = exports.Y_MOUNTORIENTATION_TWELVE = exports.Y_MOUNTPOSITION_LEFT = exports.Y_MOUNTPOSITION_RIGHT = exports.Y_MOUNTPOSITION_REAR = exports.Y_MOUNTPOSITION_FRONT = exports.Y_MOUNTPOSITION_TOP = exports.Y_MOUNTPOSITION_BOTTOM = undefined;
  exports.yFindRefFrame = yFindRefFrame;
  exports.yFirstRefFrame = yFirstRefFrame;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_MOUNTPOSITION_BOTTOM = exports.Y_MOUNTPOSITION_BOTTOM = 0;
  var Y_MOUNTPOSITION_TOP = exports.Y_MOUNTPOSITION_TOP = 1;
  var Y_MOUNTPOSITION_FRONT = exports.Y_MOUNTPOSITION_FRONT = 2;
  var Y_MOUNTPOSITION_REAR = exports.Y_MOUNTPOSITION_REAR = 3;
  var Y_MOUNTPOSITION_RIGHT = exports.Y_MOUNTPOSITION_RIGHT = 4;
  var Y_MOUNTPOSITION_LEFT = exports.Y_MOUNTPOSITION_LEFT = 5;
  var Y_MOUNTORIENTATION_TWELVE = exports.Y_MOUNTORIENTATION_TWELVE = 0;
  var Y_MOUNTORIENTATION_THREE = exports.Y_MOUNTORIENTATION_THREE = 1;
  var Y_MOUNTORIENTATION_SIX = exports.Y_MOUNTORIENTATION_SIX = 2;
  var Y_MOUNTORIENTATION_NINE = exports.Y_MOUNTORIENTATION_NINE = 3;
  var Y_MOUNTPOS_INVALID = exports.Y_MOUNTPOS_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_BEARING_INVALID = exports.Y_BEARING_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_CALIBRATIONPARAM_INVALID = exports.Y_CALIBRATIONPARAM_INVALID = _yocto_api.YAPI.INVALID_STRING;
  class YRefFrame extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'RefFrame';
      this._mountPos = Y_MOUNTPOS_INVALID;
      this._bearing = Y_BEARING_INVALID;
      this._calibrationParam = Y_CALIBRATIONPARAM_INVALID;
      this._calibStage = 0;
      this._calibStageHint = '';
      this._calibStageProgress = 0;
      this._calibProgress = 0;
      this._calibLogMsg = '';
      this._calibSavedParams = '';
      this._calibCount = 0;
      this._calibInternalPos = 0;
      this._calibPrevTick = 0;
      this._calibOrient = [];
      this._calibDataAccX = [];
      this._calibDataAccY = [];
      this._calibDataAccZ = [];
      this._calibDataAcc = [];
      this._calibAccXOfs = 0;
      this._calibAccYOfs = 0;
      this._calibAccZOfs = 0;
      this._calibAccXScale = 0;
      this._calibAccYScale = 0;
      this._calibAccZScale = 0;
      this.imm_setConst({
        MOUNTPOS_INVALID: _yocto_api.YAPI.INVALID_UINT,
        BEARING_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        CALIBRATIONPARAM_INVALID: _yocto_api.YAPI.INVALID_STRING,
        MOUNTPOSITION_BOTTOM: 0,
        MOUNTPOSITION_TOP: 1,
        MOUNTPOSITION_FRONT: 2,
        MOUNTPOSITION_REAR: 3,
        MOUNTPOSITION_RIGHT: 4,
        MOUNTPOSITION_LEFT: 5,
        MOUNTORIENTATION_TWELVE: 0,
        MOUNTORIENTATION_THREE: 1,
        MOUNTORIENTATION_SIX: 2,
        MOUNTORIENTATION_NINE: 3
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YRefFrameProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'mountPos':
          this._mountPos = parseInt(val);
          return 1;
        case 'bearing':
          this._bearing = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'calibrationParam':
          this._calibrationParam = val;
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_mountPos() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_MOUNTPOS_INVALID;
          }
        }
        return _this2._mountPos;
      })();
    }
    set_mountPos(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this3._setAttr('mountPos', rest_val);
      })();
    }
    set_bearing(newval) {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this4._setAttr('bearing', rest_val);
      })();
    }
    get_bearing() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        if (_this5._cacheExpiration <= _this5._yapi.GetTickCount()) {
          if ((yield _this5.load(_this5._yapi.defaultCacheValidity)) != _this5._yapi.SUCCESS) {
            return Y_BEARING_INVALID;
          }
        }
        return _this5._bearing;
      })();
    }
    get_calibrationParam() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_CALIBRATIONPARAM_INVALID;
          }
        }
        return _this6._calibrationParam;
      })();
    }
    set_calibrationParam(newval) {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this7._setAttr('calibrationParam', rest_val);
      })();
    }
    static FindRefFrame(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('RefFrame', func);
      if (obj == null) {
        obj = new YRefFrame(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('RefFrame', func, obj);
      }
      return obj;
    }
    static FindRefFrameInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'RefFrame', func);
      if (obj == null) {
        obj = new YRefFrame(yctx, func);
        _yocto_api.YFunction._AddToCache('RefFrame', func, obj);
      }
      return obj;
    }
    get_mountPosition() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        let position;
        position = yield _this8.get_mountPos();
        return position >> 2;
      })();
    }
    get_mountOrientation() {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        let position;
        position = yield _this9.get_mountPos();
        return position & 3;
      })();
    }
    set_mountPosition(position, orientation) {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        let mixedPos;
        mixedPos = (position << 2) + orientation;
        return yield _this10.set_mountPos(mixedPos);
      })();
    }
    _calibSort(start, stopidx) {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        let idx;
        let changed;
        let a;
        let b;
        let xa;
        let xb;
        changed = 1;
        while (changed > 0) {
          changed = 0;
          a = _this11._calibDataAcc[start];
          idx = start + 1;
          while (idx < stopidx) {
            b = _this11._calibDataAcc[idx];
            if (a > b) {
              _this11._calibDataAcc[idx - 1] = b;
              _this11._calibDataAcc[idx] = a;
              xa = _this11._calibDataAccX[idx - 1];
              xb = _this11._calibDataAccX[idx];
              _this11._calibDataAccX[idx - 1] = xb;
              _this11._calibDataAccX[idx] = xa;
              xa = _this11._calibDataAccY[idx - 1];
              xb = _this11._calibDataAccY[idx];
              _this11._calibDataAccY[idx - 1] = xb;
              _this11._calibDataAccY[idx] = xa;
              xa = _this11._calibDataAccZ[idx - 1];
              xb = _this11._calibDataAccZ[idx];
              _this11._calibDataAccZ[idx - 1] = xb;
              _this11._calibDataAccZ[idx] = xa;
              changed = changed + 1;
            } else {
              a = b;
            }
            idx = idx + 1;
          }
        }
        return 0;
      })();
    }
    start3DCalibration() {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        if (!(yield _this12.isOnline())) {
          return _this12._yapi.DEVICE_NOT_FOUND;
        }
        if (_this12._calibStage != 0) {
          yield _this12.cancel3DCalibration();
        }
        _this12._calibSavedParams = yield _this12.get_calibrationParam();
        yield _this12.set_calibrationParam('0');
        _this12._calibCount = 50;
        _this12._calibStage = 1;
        _this12._calibStageHint = 'Set down the device on a steady horizontal surface';
        _this12._calibStageProgress = 0;
        _this12._calibProgress = 1;
        _this12._calibInternalPos = 0;
        _this12._calibPrevTick = _this12._yapi.GetTickCount() & 0x7FFFFFFF;
        _this12._calibOrient.length = 0;
        _this12._calibDataAccX.length = 0;
        _this12._calibDataAccY.length = 0;
        _this12._calibDataAccZ.length = 0;
        _this12._calibDataAcc.length = 0;
        return _this12._yapi.SUCCESS;
      })();
    }
    more3DCalibration() {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        let currTick;
        let jsonData;
        let xVal;
        let yVal;
        let zVal;
        let xSq;
        let ySq;
        let zSq;
        let norm;
        let orient;
        let idx;
        let intpos;
        let err;
        if (_this13._calibStage == 0) {
          return _this13._yapi.INVALID_ARGUMENT;
        }
        if (_this13._calibProgress == 100) {
          return _this13._yapi.SUCCESS;
        }
        currTick = _this13._yapi.GetTickCount() & 0x7FFFFFFF;
        if ((currTick - _this13._calibPrevTick & 0x7FFFFFFF) < 160) {
          return _this13._yapi.SUCCESS;
        }
        _this13._calibStageHint = 'Set down the device on a steady horizontal surface';
        _this13._calibPrevTick = currTick + 500 & 0x7FFFFFFF;
        jsonData = yield _this13._download('api/accelerometer.json');
        xVal = _this13._yapi.imm_atoi(_this13.imm_json_get_key(jsonData, 'xValue')) / 65536.0;
        yVal = _this13._yapi.imm_atoi(_this13.imm_json_get_key(jsonData, 'yValue')) / 65536.0;
        zVal = _this13._yapi.imm_atoi(_this13.imm_json_get_key(jsonData, 'zValue')) / 65536.0;
        xSq = xVal * xVal;
        if (xSq >= 0.04 && xSq < 0.64) {
          return _this13._yapi.SUCCESS;
        }
        if (xSq >= 1.44) {
          return _this13._yapi.SUCCESS;
        }
        ySq = yVal * yVal;
        if (ySq >= 0.04 && ySq < 0.64) {
          return _this13._yapi.SUCCESS;
        }
        if (ySq >= 1.44) {
          return _this13._yapi.SUCCESS;
        }
        zSq = zVal * zVal;
        if (zSq >= 0.04 && zSq < 0.64) {
          return _this13._yapi.SUCCESS;
        }
        if (zSq >= 1.44) {
          return _this13._yapi.SUCCESS;
        }
        norm = Math.sqrt(xSq + ySq + zSq);
        if (norm < 0.8 || norm > 1.2) {
          return _this13._yapi.SUCCESS;
        }
        _this13._calibPrevTick = currTick;
        orient = 0;
        if (zSq > 0.5) {
          if (zVal > 0) {
            orient = 0;
          } else {
            orient = 1;
          }
        }
        if (xSq > 0.5) {
          if (xVal > 0) {
            orient = 2;
          } else {
            orient = 3;
          }
        }
        if (ySq > 0.5) {
          if (yVal > 0) {
            orient = 4;
          } else {
            orient = 5;
          }
        }
        if (_this13._calibStageProgress == 0) {
          idx = 0;
          err = 0;
          while (idx + 1 < _this13._calibStage) {
            if (_this13._calibOrient[idx] == orient) {
              err = 1;
            }
            idx = idx + 1;
          }
          if (err != 0) {
            _this13._calibStageHint = 'Turn the device on another face';
            return _this13._yapi.SUCCESS;
          }
          _this13._calibOrient.push(orient);
        } else {
          if (orient != _this13._calibOrient[_this13._calibStage - 1]) {
            _this13._calibStageHint = 'Not yet done, please move back to the previous face';
            return _this13._yapi.SUCCESS;
          }
        }
        _this13._calibStageHint = 'calibrating..';
        _this13._calibDataAccX.push(xVal);
        _this13._calibDataAccY.push(yVal);
        _this13._calibDataAccZ.push(zVal);
        _this13._calibDataAcc.push(norm);
        _this13._calibInternalPos = _this13._calibInternalPos + 1;
        _this13._calibProgress = 1 + 16 * (_this13._calibStage - 1) + parseInt(16 * _this13._calibInternalPos / _this13._calibCount, 10);
        if (_this13._calibInternalPos < _this13._calibCount) {
          _this13._calibStageProgress = 1 + parseInt(99 * _this13._calibInternalPos / _this13._calibCount, 10);
          return _this13._yapi.SUCCESS;
        }
        intpos = (_this13._calibStage - 1) * _this13._calibCount;
        yield _this13._calibSort(intpos, intpos + _this13._calibCount);
        intpos = intpos + parseInt(_this13._calibCount / 2, 10);
        _this13._calibLogMsg = 'Stage ' + String(Math.round(_this13._calibStage)) + ': median is ' + String(Math.round(Math.round(1000 * _this13._calibDataAccX[intpos]))) + ',' + String(Math.round(Math.round(1000 * _this13._calibDataAccY[intpos]))) + ',' + String(Math.round(Math.round(1000 * _this13._calibDataAccZ[intpos])));
        _this13._calibStage = _this13._calibStage + 1;
        if (_this13._calibStage < 7) {
          _this13._calibStageHint = 'Turn the device on another face';
          _this13._calibPrevTick = currTick + 500 & 0x7FFFFFFF;
          _this13._calibStageProgress = 0;
          _this13._calibInternalPos = 0;
          return _this13._yapi.SUCCESS;
        }
        xVal = 0;
        yVal = 0;
        zVal = 0;
        idx = 0;
        while (idx < 6) {
          intpos = idx * _this13._calibCount + parseInt(_this13._calibCount / 2, 10);
          orient = _this13._calibOrient[idx];
          if (orient == 0 || orient == 1) {
            zVal = zVal + _this13._calibDataAccZ[intpos];
          }
          if (orient == 2 || orient == 3) {
            xVal = xVal + _this13._calibDataAccX[intpos];
          }
          if (orient == 4 || orient == 5) {
            yVal = yVal + _this13._calibDataAccY[intpos];
          }
          idx = idx + 1;
        }
        _this13._calibAccXOfs = xVal / 2.0;
        _this13._calibAccYOfs = yVal / 2.0;
        _this13._calibAccZOfs = zVal / 2.0;
        intpos = 0;
        while (intpos < _this13._calibDataAcc.length) {
          xVal = _this13._calibDataAccX[intpos] - _this13._calibAccXOfs;
          yVal = _this13._calibDataAccY[intpos] - _this13._calibAccYOfs;
          zVal = _this13._calibDataAccZ[intpos] - _this13._calibAccZOfs;
          norm = Math.sqrt(xVal * xVal + yVal * yVal + zVal * zVal);
          _this13._calibDataAcc[intpos] = norm;
          intpos = intpos + 1;
        }
        idx = 0;
        while (idx < 6) {
          intpos = idx * _this13._calibCount;
          yield _this13._calibSort(intpos, intpos + _this13._calibCount);
          idx = idx + 1;
        }
        xVal = 0;
        yVal = 0;
        zVal = 0;
        idx = 0;
        while (idx < 6) {
          intpos = idx * _this13._calibCount + parseInt(_this13._calibCount / 2, 10);
          orient = _this13._calibOrient[idx];
          if (orient == 0 || orient == 1) {
            zVal = zVal + _this13._calibDataAcc[intpos];
          }
          if (orient == 2 || orient == 3) {
            xVal = xVal + _this13._calibDataAcc[intpos];
          }
          if (orient == 4 || orient == 5) {
            yVal = yVal + _this13._calibDataAcc[intpos];
          }
          idx = idx + 1;
        }
        _this13._calibAccXScale = xVal / 2.0;
        _this13._calibAccYScale = yVal / 2.0;
        _this13._calibAccZScale = zVal / 2.0;
        _this13._calibProgress = 100;
        _this13._calibStageHint = 'Calibration data ready for saving';
        return _this13._yapi.SUCCESS;
      })();
    }
    get_3DCalibrationHint() {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        return _this14._calibStageHint;
      })();
    }
    get_3DCalibrationProgress() {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        return _this15._calibProgress;
      })();
    }
    get_3DCalibrationStage() {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        return _this16._calibStage;
      })();
    }
    get_3DCalibrationStageProgress() {
      var _this17 = this;
      return _asyncToGenerator(function*() {
        return _this17._calibStageProgress;
      })();
    }
    get_3DCalibrationLogMsg() {
      var _this18 = this;
      return _asyncToGenerator(function*() {
        let msg;
        msg = _this18._calibLogMsg;
        _this18._calibLogMsg = '';
        return msg;
      })();
    }
    save3DCalibration() {
      var _this19 = this;
      return _asyncToGenerator(function*() {
        let shiftX;
        let shiftY;
        let shiftZ;
        let scaleExp;
        let scaleX;
        let scaleY;
        let scaleZ;
        let scaleLo;
        let scaleHi;
        let newcalib;
        if (_this19._calibProgress != 100) {
          return _this19._yapi.INVALID_ARGUMENT;
        }
        shiftX = -Math.round(_this19._calibAccXOfs / 0.000732);
        if (shiftX < 0) {
          shiftX = shiftX + 65536;
        }
        shiftY = -Math.round(_this19._calibAccYOfs / 0.000732);
        if (shiftY < 0) {
          shiftY = shiftY + 65536;
        }
        shiftZ = -Math.round(_this19._calibAccZOfs / 0.000732);
        if (shiftZ < 0) {
          shiftZ = shiftZ + 65536;
        }
        scaleX = Math.round(2048.0 / _this19._calibAccXScale) - 2048;
        scaleY = Math.round(2048.0 / _this19._calibAccYScale) - 2048;
        scaleZ = Math.round(2048.0 / _this19._calibAccZScale) - 2048;
        if (scaleX < -2048 || scaleX >= 2048 || scaleY < -2048 || scaleY >= 2048 || scaleZ < -2048 || scaleZ >= 2048) {
          scaleExp = 3;
        } else {
          if (scaleX < -1024 || scaleX >= 1024 || scaleY < -1024 || scaleY >= 1024 || scaleZ < -1024 || scaleZ >= 1024) {
            scaleExp = 2;
          } else {
            if (scaleX < -512 || scaleX >= 512 || scaleY < -512 || scaleY >= 512 || scaleZ < -512 || scaleZ >= 512) {
              scaleExp = 1;
            } else {
              scaleExp = 0;
            }
          }
        }
        if (scaleExp > 0) {
          scaleX = scaleX >> scaleExp;
          scaleY = scaleY >> scaleExp;
          scaleZ = scaleZ >> scaleExp;
        }
        if (scaleX < 0) {
          scaleX = scaleX + 1024;
        }
        if (scaleY < 0) {
          scaleY = scaleY + 1024;
        }
        if (scaleZ < 0) {
          scaleZ = scaleZ + 1024;
        }
        scaleLo = ((scaleY & 15) << 12) + (scaleX << 2) + scaleExp;
        scaleHi = (scaleZ << 6) + (scaleY >> 4);
        newcalib = '5,' + String(Math.round(shiftX)) + ',' + String(Math.round(shiftY)) + ',' + String(Math.round(shiftZ)) + ',' + String(Math.round(scaleLo)) + ',' + String(Math.round(scaleHi));
        _this19._calibStage = 0;
        return yield _this19.set_calibrationParam(newcalib);
      })();
    }
    cancel3DCalibration() {
      var _this20 = this;
      return _asyncToGenerator(function*() {
        if (_this20._calibStage == 0) {
          return _this20._yapi.SUCCESS;
        }
        _this20._calibStage = 0;
        return yield _this20.set_calibrationParam(_this20._calibSavedParams);
      })();
    }
    nextRefFrame() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YRefFrame.FindRefFrameInContext(this._yapi, next_hwid);
    }
    static FirstRefFrame() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('RefFrame');
      if (next_hwid == null)
        return null;
      return YRefFrame.FindRefFrame(next_hwid);
    }
    static FirstRefFrameInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('RefFrame');
      if (next_hwid == null)
        return null;
      return YRefFrame.FindRefFrameInContext(yctx, next_hwid);
    }
  }
  exports.YRefFrame = YRefFrame;
  class YRefFrameProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_mountPos() {
      return this.liveFunc._mountPos;
    }
    set_mountPos(newval) {
      this.liveFunc.set_mountPos(newval);
      return this._yapi.SUCCESS;
    }
    set_bearing(newval) {
      this.liveFunc.set_bearing(newval);
      return this._yapi.SUCCESS;
    }
    get_bearing() {
      return this.liveFunc._bearing;
    }
    get_calibrationParam() {
      return this.liveFunc._calibrationParam;
    }
    set_calibrationParam(newval) {
      this.liveFunc.set_calibrationParam(newval);
      return this._yapi.SUCCESS;
    }
    start3DCalibration() {
      this.liveFunc.start3DCalibration();
      return _yocto_api.YAPI_SUCCESS;
    }
    more3DCalibration() {
      this.liveFunc.more3DCalibration();
      return _yocto_api.YAPI_SUCCESS;
    }
    save3DCalibration() {
      this.liveFunc.save3DCalibration();
      return _yocto_api.YAPI_SUCCESS;
    }
    cancel3DCalibration() {
      this.liveFunc.cancel3DCalibration();
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YRefFrameProxy = YRefFrameProxy;
  function yFindRefFrame(func) {
    return YRefFrame.FindRefFrame(func);
  }
  function yFirstRefFrame() {
    return YRefFrame.FirstRefFrame();
  }
  return module.exports;
});

$__System.registerDynamic("2d", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YRelayProxy = exports.YRelay = exports.Y_COUNTDOWN_INVALID = exports.Y_DELAYEDPULSETIMER_INVALID = exports.Y_PULSETIMER_INVALID = exports.Y_MAXTIMEONSTATEB_INVALID = exports.Y_MAXTIMEONSTATEA_INVALID = exports.Y_OUTPUT_INVALID = exports.Y_OUTPUT_ON = exports.Y_OUTPUT_OFF = exports.Y_STATEATPOWERON_INVALID = exports.Y_STATEATPOWERON_B = exports.Y_STATEATPOWERON_A = exports.Y_STATEATPOWERON_UNCHANGED = exports.Y_STATE_INVALID = exports.Y_STATE_B = exports.Y_STATE_A = undefined;
  exports.yFindRelay = yFindRelay;
  exports.yFirstRelay = yFirstRelay;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_STATE_A = exports.Y_STATE_A = 0;
  var Y_STATE_B = exports.Y_STATE_B = 1;
  var Y_STATE_INVALID = exports.Y_STATE_INVALID = -1;
  var Y_STATEATPOWERON_UNCHANGED = exports.Y_STATEATPOWERON_UNCHANGED = 0;
  var Y_STATEATPOWERON_A = exports.Y_STATEATPOWERON_A = 1;
  var Y_STATEATPOWERON_B = exports.Y_STATEATPOWERON_B = 2;
  var Y_STATEATPOWERON_INVALID = exports.Y_STATEATPOWERON_INVALID = -1;
  var Y_OUTPUT_OFF = exports.Y_OUTPUT_OFF = 0;
  var Y_OUTPUT_ON = exports.Y_OUTPUT_ON = 1;
  var Y_OUTPUT_INVALID = exports.Y_OUTPUT_INVALID = -1;
  var Y_MAXTIMEONSTATEA_INVALID = exports.Y_MAXTIMEONSTATEA_INVALID = _yocto_api.YAPI.INVALID_LONG;
  var Y_MAXTIMEONSTATEB_INVALID = exports.Y_MAXTIMEONSTATEB_INVALID = _yocto_api.YAPI.INVALID_LONG;
  var Y_PULSETIMER_INVALID = exports.Y_PULSETIMER_INVALID = _yocto_api.YAPI.INVALID_LONG;
  var Y_DELAYEDPULSETIMER_INVALID = exports.Y_DELAYEDPULSETIMER_INVALID = null;
  var Y_COUNTDOWN_INVALID = exports.Y_COUNTDOWN_INVALID = _yocto_api.YAPI.INVALID_LONG;
  class YRelay extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Relay';
      this._state = Y_STATE_INVALID;
      this._stateAtPowerOn = Y_STATEATPOWERON_INVALID;
      this._maxTimeOnStateA = Y_MAXTIMEONSTATEA_INVALID;
      this._maxTimeOnStateB = Y_MAXTIMEONSTATEB_INVALID;
      this._output = Y_OUTPUT_INVALID;
      this._pulseTimer = Y_PULSETIMER_INVALID;
      this._delayedPulseTimer = Y_DELAYEDPULSETIMER_INVALID;
      this._countdown = Y_COUNTDOWN_INVALID;
      this.imm_setConst({
        STATE_A: 0,
        STATE_B: 1,
        STATE_INVALID: -1,
        STATEATPOWERON_UNCHANGED: 0,
        STATEATPOWERON_A: 1,
        STATEATPOWERON_B: 2,
        STATEATPOWERON_INVALID: -1,
        MAXTIMEONSTATEA_INVALID: _yocto_api.YAPI.INVALID_LONG,
        MAXTIMEONSTATEB_INVALID: _yocto_api.YAPI.INVALID_LONG,
        OUTPUT_OFF: 0,
        OUTPUT_ON: 1,
        OUTPUT_INVALID: -1,
        PULSETIMER_INVALID: _yocto_api.YAPI.INVALID_LONG,
        COUNTDOWN_INVALID: _yocto_api.YAPI.INVALID_LONG
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YRelayProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'state':
          this._state = parseInt(val);
          return 1;
        case 'stateAtPowerOn':
          this._stateAtPowerOn = parseInt(val);
          return 1;
        case 'maxTimeOnStateA':
          this._maxTimeOnStateA = parseInt(val);
          return 1;
        case 'maxTimeOnStateB':
          this._maxTimeOnStateB = parseInt(val);
          return 1;
        case 'output':
          this._output = parseInt(val);
          return 1;
        case 'pulseTimer':
          this._pulseTimer = parseInt(val);
          return 1;
        case 'delayedPulseTimer':
          this._delayedPulseTimer = val;
          return 1;
        case 'countdown':
          this._countdown = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_state() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_STATE_INVALID;
          }
        }
        return _this2._state;
      })();
    }
    set_state(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this3._setAttr('state', rest_val);
      })();
    }
    get_stateAtPowerOn() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_STATEATPOWERON_INVALID;
          }
        }
        return _this4._stateAtPowerOn;
      })();
    }
    set_stateAtPowerOn(newval) {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this5._setAttr('stateAtPowerOn', rest_val);
      })();
    }
    get_maxTimeOnStateA() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_MAXTIMEONSTATEA_INVALID;
          }
        }
        return _this6._maxTimeOnStateA;
      })();
    }
    set_maxTimeOnStateA(newval) {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this7._setAttr('maxTimeOnStateA', rest_val);
      })();
    }
    get_maxTimeOnStateB() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        if (_this8._cacheExpiration <= _this8._yapi.GetTickCount()) {
          if ((yield _this8.load(_this8._yapi.defaultCacheValidity)) != _this8._yapi.SUCCESS) {
            return Y_MAXTIMEONSTATEB_INVALID;
          }
        }
        return _this8._maxTimeOnStateB;
      })();
    }
    set_maxTimeOnStateB(newval) {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this9._setAttr('maxTimeOnStateB', rest_val);
      })();
    }
    get_output() {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        if (_this10._cacheExpiration <= _this10._yapi.GetTickCount()) {
          if ((yield _this10.load(_this10._yapi.defaultCacheValidity)) != _this10._yapi.SUCCESS) {
            return Y_OUTPUT_INVALID;
          }
        }
        return _this10._output;
      })();
    }
    set_output(newval) {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this11._setAttr('output', rest_val);
      })();
    }
    get_pulseTimer() {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        if (_this12._cacheExpiration <= _this12._yapi.GetTickCount()) {
          if ((yield _this12.load(_this12._yapi.defaultCacheValidity)) != _this12._yapi.SUCCESS) {
            return Y_PULSETIMER_INVALID;
          }
        }
        return _this12._pulseTimer;
      })();
    }
    set_pulseTimer(newval) {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this13._setAttr('pulseTimer', rest_val);
      })();
    }
    pulse(ms_duration) {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(ms_duration);
        return yield _this14._setAttr('pulseTimer', rest_val);
      })();
    }
    get_delayedPulseTimer() {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        if (_this15._cacheExpiration <= _this15._yapi.GetTickCount()) {
          if ((yield _this15.load(_this15._yapi.defaultCacheValidity)) != _this15._yapi.SUCCESS) {
            return Y_DELAYEDPULSETIMER_INVALID;
          }
        }
        return _this15._delayedPulseTimer;
      })();
    }
    set_delayedPulseTimer(newval) {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval.target) + ':' + String(newval.ms);
        return yield _this16._setAttr('delayedPulseTimer', rest_val);
      })();
    }
    delayedPulse(ms_delay, ms_duration) {
      var _this17 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(ms_delay) + ':' + String(ms_duration);
        return yield _this17._setAttr('delayedPulseTimer', rest_val);
      })();
    }
    get_countdown() {
      var _this18 = this;
      return _asyncToGenerator(function*() {
        if (_this18._cacheExpiration <= _this18._yapi.GetTickCount()) {
          if ((yield _this18.load(_this18._yapi.defaultCacheValidity)) != _this18._yapi.SUCCESS) {
            return Y_COUNTDOWN_INVALID;
          }
        }
        return _this18._countdown;
      })();
    }
    static FindRelay(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Relay', func);
      if (obj == null) {
        obj = new YRelay(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Relay', func, obj);
      }
      return obj;
    }
    static FindRelayInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Relay', func);
      if (obj == null) {
        obj = new YRelay(yctx, func);
        _yocto_api.YFunction._AddToCache('Relay', func, obj);
      }
      return obj;
    }
    nextRelay() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YRelay.FindRelayInContext(this._yapi, next_hwid);
    }
    static FirstRelay() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Relay');
      if (next_hwid == null)
        return null;
      return YRelay.FindRelay(next_hwid);
    }
    static FirstRelayInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Relay');
      if (next_hwid == null)
        return null;
      return YRelay.FindRelayInContext(yctx, next_hwid);
    }
  }
  exports.YRelay = YRelay;
  class YRelayProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_state() {
      return this.liveFunc._state;
    }
    set_state(newval) {
      this.liveFunc.set_state(newval);
      return this._yapi.SUCCESS;
    }
    get_stateAtPowerOn() {
      return this.liveFunc._stateAtPowerOn;
    }
    set_stateAtPowerOn(newval) {
      this.liveFunc.set_stateAtPowerOn(newval);
      return this._yapi.SUCCESS;
    }
    get_maxTimeOnStateA() {
      return this.liveFunc._maxTimeOnStateA;
    }
    set_maxTimeOnStateA(newval) {
      this.liveFunc.set_maxTimeOnStateA(newval);
      return this._yapi.SUCCESS;
    }
    get_maxTimeOnStateB() {
      return this.liveFunc._maxTimeOnStateB;
    }
    set_maxTimeOnStateB(newval) {
      this.liveFunc.set_maxTimeOnStateB(newval);
      return this._yapi.SUCCESS;
    }
    get_output() {
      return this.liveFunc._output;
    }
    set_output(newval) {
      this.liveFunc.set_output(newval);
      return this._yapi.SUCCESS;
    }
    get_pulseTimer() {
      return this.liveFunc._pulseTimer;
    }
    set_pulseTimer(newval) {
      this.liveFunc.set_pulseTimer(newval);
      return this._yapi.SUCCESS;
    }
    get_delayedPulseTimer() {
      return this.liveFunc._delayedPulseTimer;
    }
    set_delayedPulseTimer(newval) {
      this.liveFunc.set_delayedPulseTimer(newval);
      return this._yapi.SUCCESS;
    }
    get_countdown() {
      return this.liveFunc._countdown;
    }
  }
  exports.YRelayProxy = YRelayProxy;
  function yFindRelay(func) {
    return YRelay.FindRelay(func);
  }
  function yFirstRelay() {
    return YRelay.FirstRelay();
  }
  return module.exports;
});

$__System.registerDynamic("2e", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YSegmentedDisplayProxy = exports.YSegmentedDisplay = exports.Y_DISPLAYEDTEXT_INVALID = exports.Y_DISPLAYMODE_INVALID = exports.Y_DISPLAYMODE_AUTO60 = exports.Y_DISPLAYMODE_AUTO1 = exports.Y_DISPLAYMODE_MANUAL = exports.Y_DISPLAYMODE_DISCONNECTED = undefined;
  exports.yFindSegmentedDisplay = yFindSegmentedDisplay;
  exports.yFirstSegmentedDisplay = yFirstSegmentedDisplay;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_DISPLAYMODE_DISCONNECTED = exports.Y_DISPLAYMODE_DISCONNECTED = 0;
  var Y_DISPLAYMODE_MANUAL = exports.Y_DISPLAYMODE_MANUAL = 1;
  var Y_DISPLAYMODE_AUTO1 = exports.Y_DISPLAYMODE_AUTO1 = 2;
  var Y_DISPLAYMODE_AUTO60 = exports.Y_DISPLAYMODE_AUTO60 = 3;
  var Y_DISPLAYMODE_INVALID = exports.Y_DISPLAYMODE_INVALID = -1;
  var Y_DISPLAYEDTEXT_INVALID = exports.Y_DISPLAYEDTEXT_INVALID = _yocto_api.YAPI.INVALID_STRING;
  class YSegmentedDisplay extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'SegmentedDisplay';
      this._displayedText = Y_DISPLAYEDTEXT_INVALID;
      this._displayMode = Y_DISPLAYMODE_INVALID;
      this.imm_setConst({
        DISPLAYEDTEXT_INVALID: _yocto_api.YAPI.INVALID_STRING,
        DISPLAYMODE_DISCONNECTED: 0,
        DISPLAYMODE_MANUAL: 1,
        DISPLAYMODE_AUTO1: 2,
        DISPLAYMODE_AUTO60: 3,
        DISPLAYMODE_INVALID: -1
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YSegmentedDisplayProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'displayedText':
          this._displayedText = val;
          return 1;
        case 'displayMode':
          this._displayMode = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_displayedText() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_DISPLAYEDTEXT_INVALID;
          }
        }
        return _this2._displayedText;
      })();
    }
    set_displayedText(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this3._setAttr('displayedText', rest_val);
      })();
    }
    get_displayMode() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_DISPLAYMODE_INVALID;
          }
        }
        return _this4._displayMode;
      })();
    }
    set_displayMode(newval) {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this5._setAttr('displayMode', rest_val);
      })();
    }
    static FindSegmentedDisplay(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('SegmentedDisplay', func);
      if (obj == null) {
        obj = new YSegmentedDisplay(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('SegmentedDisplay', func, obj);
      }
      return obj;
    }
    static FindSegmentedDisplayInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'SegmentedDisplay', func);
      if (obj == null) {
        obj = new YSegmentedDisplay(yctx, func);
        _yocto_api.YFunction._AddToCache('SegmentedDisplay', func, obj);
      }
      return obj;
    }
    nextSegmentedDisplay() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YSegmentedDisplay.FindSegmentedDisplayInContext(this._yapi, next_hwid);
    }
    static FirstSegmentedDisplay() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('SegmentedDisplay');
      if (next_hwid == null)
        return null;
      return YSegmentedDisplay.FindSegmentedDisplay(next_hwid);
    }
    static FirstSegmentedDisplayInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('SegmentedDisplay');
      if (next_hwid == null)
        return null;
      return YSegmentedDisplay.FindSegmentedDisplayInContext(yctx, next_hwid);
    }
  }
  exports.YSegmentedDisplay = YSegmentedDisplay;
  class YSegmentedDisplayProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_displayedText() {
      return this.liveFunc._displayedText;
    }
    set_displayedText(newval) {
      this.liveFunc.set_displayedText(newval);
      return this._yapi.SUCCESS;
    }
    get_displayMode() {
      return this.liveFunc._displayMode;
    }
    set_displayMode(newval) {
      this.liveFunc.set_displayMode(newval);
      return this._yapi.SUCCESS;
    }
  }
  exports.YSegmentedDisplayProxy = YSegmentedDisplayProxy;
  function yFindSegmentedDisplay(func) {
    return YSegmentedDisplay.FindSegmentedDisplay(func);
  }
  function yFirstSegmentedDisplay() {
    return YSegmentedDisplay.FirstSegmentedDisplay();
  }
  return module.exports;
});

$__System.registerDynamic("2f", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YSerialPortProxy = exports.YSerialPort = exports.Y_COMMAND_INVALID = exports.Y_STARTUPJOB_INVALID = exports.Y_CURRENTJOB_INVALID = exports.Y_LASTMSG_INVALID = exports.Y_TXMSGCOUNT_INVALID = exports.Y_RXMSGCOUNT_INVALID = exports.Y_ERRCOUNT_INVALID = exports.Y_TXCOUNT_INVALID = exports.Y_RXCOUNT_INVALID = exports.Y_PROTOCOL_INVALID = exports.Y_SERIALMODE_INVALID = exports.Y_VOLTAGELEVEL_INVALID = exports.Y_VOLTAGELEVEL_RS485 = exports.Y_VOLTAGELEVEL_RS232 = exports.Y_VOLTAGELEVEL_TTL5VR = exports.Y_VOLTAGELEVEL_TTL5V = exports.Y_VOLTAGELEVEL_TTL3VR = exports.Y_VOLTAGELEVEL_TTL3V = exports.Y_VOLTAGELEVEL_OFF = undefined;
  exports.yFindSerialPort = yFindSerialPort;
  exports.yFirstSerialPort = yFirstSerialPort;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_VOLTAGELEVEL_OFF = exports.Y_VOLTAGELEVEL_OFF = 0;
  var Y_VOLTAGELEVEL_TTL3V = exports.Y_VOLTAGELEVEL_TTL3V = 1;
  var Y_VOLTAGELEVEL_TTL3VR = exports.Y_VOLTAGELEVEL_TTL3VR = 2;
  var Y_VOLTAGELEVEL_TTL5V = exports.Y_VOLTAGELEVEL_TTL5V = 3;
  var Y_VOLTAGELEVEL_TTL5VR = exports.Y_VOLTAGELEVEL_TTL5VR = 4;
  var Y_VOLTAGELEVEL_RS232 = exports.Y_VOLTAGELEVEL_RS232 = 5;
  var Y_VOLTAGELEVEL_RS485 = exports.Y_VOLTAGELEVEL_RS485 = 6;
  var Y_VOLTAGELEVEL_INVALID = exports.Y_VOLTAGELEVEL_INVALID = -1;
  var Y_SERIALMODE_INVALID = exports.Y_SERIALMODE_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_PROTOCOL_INVALID = exports.Y_PROTOCOL_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_RXCOUNT_INVALID = exports.Y_RXCOUNT_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_TXCOUNT_INVALID = exports.Y_TXCOUNT_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_ERRCOUNT_INVALID = exports.Y_ERRCOUNT_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_RXMSGCOUNT_INVALID = exports.Y_RXMSGCOUNT_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_TXMSGCOUNT_INVALID = exports.Y_TXMSGCOUNT_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_LASTMSG_INVALID = exports.Y_LASTMSG_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_CURRENTJOB_INVALID = exports.Y_CURRENTJOB_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_STARTUPJOB_INVALID = exports.Y_STARTUPJOB_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_COMMAND_INVALID = exports.Y_COMMAND_INVALID = _yocto_api.YAPI.INVALID_STRING;
  class YSerialPort extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'SerialPort';
      this._serialMode = Y_SERIALMODE_INVALID;
      this._protocol = Y_PROTOCOL_INVALID;
      this._voltageLevel = Y_VOLTAGELEVEL_INVALID;
      this._rxCount = Y_RXCOUNT_INVALID;
      this._txCount = Y_TXCOUNT_INVALID;
      this._errCount = Y_ERRCOUNT_INVALID;
      this._rxMsgCount = Y_RXMSGCOUNT_INVALID;
      this._txMsgCount = Y_TXMSGCOUNT_INVALID;
      this._lastMsg = Y_LASTMSG_INVALID;
      this._currentJob = Y_CURRENTJOB_INVALID;
      this._startupJob = Y_STARTUPJOB_INVALID;
      this._command = Y_COMMAND_INVALID;
      this._rxptr = 0;
      this.imm_setConst({
        SERIALMODE_INVALID: _yocto_api.YAPI.INVALID_STRING,
        PROTOCOL_INVALID: _yocto_api.YAPI.INVALID_STRING,
        VOLTAGELEVEL_OFF: 0,
        VOLTAGELEVEL_TTL3V: 1,
        VOLTAGELEVEL_TTL3VR: 2,
        VOLTAGELEVEL_TTL5V: 3,
        VOLTAGELEVEL_TTL5VR: 4,
        VOLTAGELEVEL_RS232: 5,
        VOLTAGELEVEL_RS485: 6,
        VOLTAGELEVEL_INVALID: -1,
        RXCOUNT_INVALID: _yocto_api.YAPI.INVALID_UINT,
        TXCOUNT_INVALID: _yocto_api.YAPI.INVALID_UINT,
        ERRCOUNT_INVALID: _yocto_api.YAPI.INVALID_UINT,
        RXMSGCOUNT_INVALID: _yocto_api.YAPI.INVALID_UINT,
        TXMSGCOUNT_INVALID: _yocto_api.YAPI.INVALID_UINT,
        LASTMSG_INVALID: _yocto_api.YAPI.INVALID_STRING,
        CURRENTJOB_INVALID: _yocto_api.YAPI.INVALID_STRING,
        STARTUPJOB_INVALID: _yocto_api.YAPI.INVALID_STRING,
        COMMAND_INVALID: _yocto_api.YAPI.INVALID_STRING
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YSerialPortProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'serialMode':
          this._serialMode = val;
          return 1;
        case 'protocol':
          this._protocol = val;
          return 1;
        case 'voltageLevel':
          this._voltageLevel = parseInt(val);
          return 1;
        case 'rxCount':
          this._rxCount = parseInt(val);
          return 1;
        case 'txCount':
          this._txCount = parseInt(val);
          return 1;
        case 'errCount':
          this._errCount = parseInt(val);
          return 1;
        case 'rxMsgCount':
          this._rxMsgCount = parseInt(val);
          return 1;
        case 'txMsgCount':
          this._txMsgCount = parseInt(val);
          return 1;
        case 'lastMsg':
          this._lastMsg = val;
          return 1;
        case 'currentJob':
          this._currentJob = val;
          return 1;
        case 'startupJob':
          this._startupJob = val;
          return 1;
        case 'command':
          this._command = val;
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_serialMode() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_SERIALMODE_INVALID;
          }
        }
        return _this2._serialMode;
      })();
    }
    set_serialMode(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this3._setAttr('serialMode', rest_val);
      })();
    }
    get_protocol() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_PROTOCOL_INVALID;
          }
        }
        return _this4._protocol;
      })();
    }
    set_protocol(newval) {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this5._setAttr('protocol', rest_val);
      })();
    }
    get_voltageLevel() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_VOLTAGELEVEL_INVALID;
          }
        }
        return _this6._voltageLevel;
      })();
    }
    set_voltageLevel(newval) {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this7._setAttr('voltageLevel', rest_val);
      })();
    }
    get_rxCount() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        if (_this8._cacheExpiration <= _this8._yapi.GetTickCount()) {
          if ((yield _this8.load(_this8._yapi.defaultCacheValidity)) != _this8._yapi.SUCCESS) {
            return Y_RXCOUNT_INVALID;
          }
        }
        return _this8._rxCount;
      })();
    }
    get_txCount() {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        if (_this9._cacheExpiration <= _this9._yapi.GetTickCount()) {
          if ((yield _this9.load(_this9._yapi.defaultCacheValidity)) != _this9._yapi.SUCCESS) {
            return Y_TXCOUNT_INVALID;
          }
        }
        return _this9._txCount;
      })();
    }
    get_errCount() {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        if (_this10._cacheExpiration <= _this10._yapi.GetTickCount()) {
          if ((yield _this10.load(_this10._yapi.defaultCacheValidity)) != _this10._yapi.SUCCESS) {
            return Y_ERRCOUNT_INVALID;
          }
        }
        return _this10._errCount;
      })();
    }
    get_rxMsgCount() {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        if (_this11._cacheExpiration <= _this11._yapi.GetTickCount()) {
          if ((yield _this11.load(_this11._yapi.defaultCacheValidity)) != _this11._yapi.SUCCESS) {
            return Y_RXMSGCOUNT_INVALID;
          }
        }
        return _this11._rxMsgCount;
      })();
    }
    get_txMsgCount() {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        if (_this12._cacheExpiration <= _this12._yapi.GetTickCount()) {
          if ((yield _this12.load(_this12._yapi.defaultCacheValidity)) != _this12._yapi.SUCCESS) {
            return Y_TXMSGCOUNT_INVALID;
          }
        }
        return _this12._txMsgCount;
      })();
    }
    get_lastMsg() {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        if (_this13._cacheExpiration <= _this13._yapi.GetTickCount()) {
          if ((yield _this13.load(_this13._yapi.defaultCacheValidity)) != _this13._yapi.SUCCESS) {
            return Y_LASTMSG_INVALID;
          }
        }
        return _this13._lastMsg;
      })();
    }
    get_currentJob() {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        if (_this14._cacheExpiration <= _this14._yapi.GetTickCount()) {
          if ((yield _this14.load(_this14._yapi.defaultCacheValidity)) != _this14._yapi.SUCCESS) {
            return Y_CURRENTJOB_INVALID;
          }
        }
        return _this14._currentJob;
      })();
    }
    set_currentJob(newval) {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this15._setAttr('currentJob', rest_val);
      })();
    }
    get_startupJob() {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        if (_this16._cacheExpiration <= _this16._yapi.GetTickCount()) {
          if ((yield _this16.load(_this16._yapi.defaultCacheValidity)) != _this16._yapi.SUCCESS) {
            return Y_STARTUPJOB_INVALID;
          }
        }
        return _this16._startupJob;
      })();
    }
    set_startupJob(newval) {
      var _this17 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this17._setAttr('startupJob', rest_val);
      })();
    }
    get_command() {
      var _this18 = this;
      return _asyncToGenerator(function*() {
        if (_this18._cacheExpiration <= _this18._yapi.GetTickCount()) {
          if ((yield _this18.load(_this18._yapi.defaultCacheValidity)) != _this18._yapi.SUCCESS) {
            return Y_COMMAND_INVALID;
          }
        }
        return _this18._command;
      })();
    }
    set_command(newval) {
      var _this19 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this19._setAttr('command', rest_val);
      })();
    }
    static FindSerialPort(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('SerialPort', func);
      if (obj == null) {
        obj = new YSerialPort(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('SerialPort', func, obj);
      }
      return obj;
    }
    static FindSerialPortInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'SerialPort', func);
      if (obj == null) {
        obj = new YSerialPort(yctx, func);
        _yocto_api.YFunction._AddToCache('SerialPort', func, obj);
      }
      return obj;
    }
    sendCommand(text) {
      var _this20 = this;
      return _asyncToGenerator(function*() {
        return yield _this20.set_command(text);
      })();
    }
    reset() {
      var _this21 = this;
      return _asyncToGenerator(function*() {
        _this21._rxptr = 0;
        return yield _this21.sendCommand('Z');
      })();
    }
    set_RTS(val) {
      var _this22 = this;
      return _asyncToGenerator(function*() {
        return yield _this22.sendCommand('R' + String(Math.round(val)));
      })();
    }
    get_CTS() {
      var _this23 = this;
      return _asyncToGenerator(function*() {
        let buff;
        let res;
        buff = yield _this23._download('cts.txt');
        if (!(buff.length == 1)) {
          return _this23._throw(_this23._yapi.IO_ERROR, 'invalid CTS reply', _this23._yapi.IO_ERROR);
        }
        res = buff[0] - 48;
        return res;
      })();
    }
    writeByte(code) {
      var _this24 = this;
      return _asyncToGenerator(function*() {
        return yield _this24.sendCommand('$' + ('00' + code.toString(16)).slice(-2));
      })();
    }
    writeStr(text) {
      var _this25 = this;
      return _asyncToGenerator(function*() {
        let buff;
        let bufflen;
        let idx;
        let ch;
        buff = _this25._yapi.imm_str2bin(text);
        bufflen = buff.length;
        if (bufflen < 100) {
          ch = 0x20;
          idx = 0;
          while (idx < bufflen && ch != 0) {
            ch = buff[idx];
            if (ch >= 0x20 && ch < 0x7f) {
              idx = idx + 1;
            } else {
              ch = 0;
            }
          }
          if (idx >= bufflen) {
            return yield _this25.sendCommand('+' + text);
          }
        }
        return yield _this25._upload('txdata', buff);
      })();
    }
    writeBin(buff) {
      var _this26 = this;
      return _asyncToGenerator(function*() {
        return yield _this26._upload('txdata', buff);
      })();
    }
    writeArray(byteList) {
      var _this27 = this;
      return _asyncToGenerator(function*() {
        let buff;
        let bufflen;
        let idx;
        let hexb;
        let res;
        bufflen = byteList.length;
        buff = new Uint8Array(bufflen);
        idx = 0;
        while (idx < bufflen) {
          hexb = byteList[idx];
          buff.set([hexb], idx);
          idx = idx + 1;
        }
        res = yield _this27._upload('txdata', buff);
        return res;
      })();
    }
    writeHex(hexString) {
      var _this28 = this;
      return _asyncToGenerator(function*() {
        let buff;
        let bufflen;
        let idx;
        let hexb;
        let res;
        bufflen = hexString.length;
        if (bufflen < 100) {
          return yield _this28.sendCommand('$' + hexString);
        }
        bufflen = bufflen >> 1;
        buff = new Uint8Array(bufflen);
        idx = 0;
        while (idx < bufflen) {
          hexb = parseInt(hexString.substr(2 * idx, 2), 16);
          buff.set([hexb], idx);
          idx = idx + 1;
        }
        res = yield _this28._upload('txdata', buff);
        return res;
      })();
    }
    writeLine(text) {
      var _this29 = this;
      return _asyncToGenerator(function*() {
        let buff;
        let bufflen;
        let idx;
        let ch;
        buff = _this29._yapi.imm_str2bin(text + '\r\n');
        bufflen = buff.length - 2;
        if (bufflen < 100) {
          ch = 0x20;
          idx = 0;
          while (idx < bufflen && ch != 0) {
            ch = buff[idx];
            if (ch >= 0x20 && ch < 0x7f) {
              idx = idx + 1;
            } else {
              ch = 0;
            }
          }
          if (idx >= bufflen) {
            return yield _this29.sendCommand('!' + text);
          }
        }
        return yield _this29._upload('txdata', buff);
      })();
    }
    writeMODBUS(hexString) {
      var _this30 = this;
      return _asyncToGenerator(function*() {
        return yield _this30.sendCommand(':' + hexString);
      })();
    }
    readByte() {
      var _this31 = this;
      return _asyncToGenerator(function*() {
        let buff;
        let bufflen;
        let mult;
        let endpos;
        let res;
        buff = yield _this31._download('rxdata.bin?pos=' + String(Math.round(_this31._rxptr)) + '&len=1');
        bufflen = buff.length - 1;
        endpos = 0;
        mult = 1;
        while (bufflen > 0 && buff[bufflen] != 64) {
          endpos = endpos + mult * (buff[bufflen] - 48);
          mult = mult * 10;
          bufflen = bufflen - 1;
        }
        _this31._rxptr = endpos;
        if (bufflen == 0) {
          return _this31._yapi.NO_MORE_DATA;
        }
        res = buff[0];
        return res;
      })();
    }
    readStr(nChars) {
      var _this32 = this;
      return _asyncToGenerator(function*() {
        let buff;
        let bufflen;
        let mult;
        let endpos;
        let res;
        if (nChars > 65535) {
          nChars = 65535;
        }
        buff = yield _this32._download('rxdata.bin?pos=' + String(Math.round(_this32._rxptr)) + '&len=' + String(Math.round(nChars)));
        bufflen = buff.length - 1;
        endpos = 0;
        mult = 1;
        while (bufflen > 0 && buff[bufflen] != 64) {
          endpos = endpos + mult * (buff[bufflen] - 48);
          mult = mult * 10;
          bufflen = bufflen - 1;
        }
        _this32._rxptr = endpos;
        res = _this32._yapi.imm_bin2str(buff).substr(0, bufflen);
        return res;
      })();
    }
    readBin(nChars) {
      var _this33 = this;
      return _asyncToGenerator(function*() {
        let buff;
        let bufflen;
        let mult;
        let endpos;
        let idx;
        let res;
        if (nChars > 65535) {
          nChars = 65535;
        }
        buff = yield _this33._download('rxdata.bin?pos=' + String(Math.round(_this33._rxptr)) + '&len=' + String(Math.round(nChars)));
        bufflen = buff.length - 1;
        endpos = 0;
        mult = 1;
        while (bufflen > 0 && buff[bufflen] != 64) {
          endpos = endpos + mult * (buff[bufflen] - 48);
          mult = mult * 10;
          bufflen = bufflen - 1;
        }
        _this33._rxptr = endpos;
        res = new Uint8Array(bufflen);
        idx = 0;
        while (idx < bufflen) {
          res.set([buff[idx]], idx);
          idx = idx + 1;
        }
        return res;
      })();
    }
    readArray(nChars) {
      var _this34 = this;
      return _asyncToGenerator(function*() {
        let buff;
        let bufflen;
        let mult;
        let endpos;
        let idx;
        let b;
        let res = [];
        if (nChars > 65535) {
          nChars = 65535;
        }
        buff = yield _this34._download('rxdata.bin?pos=' + String(Math.round(_this34._rxptr)) + '&len=' + String(Math.round(nChars)));
        bufflen = buff.length - 1;
        endpos = 0;
        mult = 1;
        while (bufflen > 0 && buff[bufflen] != 64) {
          endpos = endpos + mult * (buff[bufflen] - 48);
          mult = mult * 10;
          bufflen = bufflen - 1;
        }
        _this34._rxptr = endpos;
        res.length = 0;
        idx = 0;
        while (idx < bufflen) {
          b = buff[idx];
          res.push(b);
          idx = idx + 1;
        }
        return res;
      })();
    }
    readHex(nBytes) {
      var _this35 = this;
      return _asyncToGenerator(function*() {
        let buff;
        let bufflen;
        let mult;
        let endpos;
        let ofs;
        let res;
        if (nBytes > 65535) {
          nBytes = 65535;
        }
        buff = yield _this35._download('rxdata.bin?pos=' + String(Math.round(_this35._rxptr)) + '&len=' + String(Math.round(nBytes)));
        bufflen = buff.length - 1;
        endpos = 0;
        mult = 1;
        while (bufflen > 0 && buff[bufflen] != 64) {
          endpos = endpos + mult * (buff[bufflen] - 48);
          mult = mult * 10;
          bufflen = bufflen - 1;
        }
        _this35._rxptr = endpos;
        res = '';
        ofs = 0;
        while (ofs + 3 < bufflen) {
          res = res + '' + ('00' + buff[ofs].toString(16)).slice(-2) + '' + ('00' + buff[ofs + 1].toString(16)).slice(-2) + '' + ('00' + buff[ofs + 2].toString(16)).slice(-2) + '' + ('00' + buff[ofs + 3].toString(16)).slice(-2);
          ofs = ofs + 4;
        }
        while (ofs < bufflen) {
          res = res + '' + ('00' + buff[ofs].toString(16)).slice(-2);
          ofs = ofs + 1;
        }
        return res;
      })();
    }
    readLine() {
      var _this36 = this;
      return _asyncToGenerator(function*() {
        let url;
        let msgbin;
        let msgarr = [];
        let msglen;
        let res;
        url = 'rxmsg.json?pos=' + String(Math.round(_this36._rxptr)) + '&len=1&maxw=1';
        msgbin = yield _this36._download(url);
        msgarr = _this36.imm_json_get_array(msgbin);
        msglen = msgarr.length;
        if (msglen == 0) {
          return '';
        }
        msglen = msglen - 1;
        _this36._rxptr = _this36._yapi.imm_atoi(msgarr[msglen]);
        if (msglen == 0) {
          return '';
        }
        res = _this36.imm_json_get_string(_this36._yapi.imm_str2bin(msgarr[0]));
        return res;
      })();
    }
    readMessages(pattern, maxWait) {
      var _this37 = this;
      return _asyncToGenerator(function*() {
        let url;
        let msgbin;
        let msgarr = [];
        let msglen;
        let res = [];
        let idx;
        url = 'rxmsg.json?pos=' + String(Math.round(_this37._rxptr)) + '&maxw=' + String(Math.round(maxWait)) + '&pat=' + pattern;
        msgbin = yield _this37._download(url);
        msgarr = _this37.imm_json_get_array(msgbin);
        msglen = msgarr.length;
        if (msglen == 0) {
          return res;
        }
        msglen = msglen - 1;
        _this37._rxptr = _this37._yapi.imm_atoi(msgarr[msglen]);
        idx = 0;
        while (idx < msglen) {
          res.push(_this37.imm_json_get_string(_this37._yapi.imm_str2bin(msgarr[idx])));
          idx = idx + 1;
        }
        return res;
      })();
    }
    read_seek(absPos) {
      var _this38 = this;
      return _asyncToGenerator(function*() {
        _this38._rxptr = absPos;
        return _this38._yapi.SUCCESS;
      })();
    }
    read_tell() {
      var _this39 = this;
      return _asyncToGenerator(function*() {
        return _this39._rxptr;
      })();
    }
    read_avail() {
      var _this40 = this;
      return _asyncToGenerator(function*() {
        let buff;
        let bufflen;
        let res;
        buff = yield _this40._download('rxcnt.bin?pos=' + String(Math.round(_this40._rxptr)));
        bufflen = buff.length - 1;
        while (bufflen > 0 && buff[bufflen] != 64) {
          bufflen = bufflen - 1;
        }
        res = _this40._yapi.imm_atoi(_this40._yapi.imm_bin2str(buff).substr(0, bufflen));
        return res;
      })();
    }
    queryLine(query, maxWait) {
      var _this41 = this;
      return _asyncToGenerator(function*() {
        let url;
        let msgbin;
        let msgarr = [];
        let msglen;
        let res;
        url = 'rxmsg.json?len=1&maxw=' + String(Math.round(maxWait)) + '&cmd=!' + query;
        msgbin = yield _this41._download(url);
        msgarr = _this41.imm_json_get_array(msgbin);
        msglen = msgarr.length;
        if (msglen == 0) {
          return '';
        }
        msglen = msglen - 1;
        _this41._rxptr = _this41._yapi.imm_atoi(msgarr[msglen]);
        if (msglen == 0) {
          return '';
        }
        res = _this41.imm_json_get_string(_this41._yapi.imm_str2bin(msgarr[0]));
        return res;
      })();
    }
    queryMODBUS(slaveNo, pduBytes) {
      var _this42 = this;
      return _asyncToGenerator(function*() {
        let funCode;
        let nib;
        let i;
        let cmd;
        let url;
        let pat;
        let msgs;
        let reps = [];
        let rep;
        let res = [];
        let replen;
        let hexb;
        funCode = pduBytes[0];
        nib = funCode >> 4;
        pat = ('00' + slaveNo.toString(16)).slice(-2) + '[' + nib.toString(16) + '' + (nib + 8).toString(16) + ']' + (funCode & 15).toString(16) + '.*';
        cmd = ('00' + slaveNo.toString(16)).slice(-2) + '' + ('00' + funCode.toString(16)).slice(-2);
        i = 1;
        while (i < pduBytes.length) {
          cmd = cmd + '' + ('00' + (pduBytes[i] & 0xff).toString(16)).slice(-2);
          i = i + 1;
        }
        url = 'rxmsg.json?cmd=:' + cmd + '&pat=:' + pat;
        msgs = yield _this42._download(url);
        reps = _this42.imm_json_get_array(msgs);
        if (!(reps.length > 1)) {
          return _this42._throw(_this42._yapi.IO_ERROR, 'no reply from slave', res);
        }
        if (reps.length > 1) {
          rep = _this42.imm_json_get_string(_this42._yapi.imm_str2bin(reps[0]));
          replen = rep.length - 3 >> 1;
          i = 0;
          while (i < replen) {
            hexb = parseInt(rep.substr(2 * i + 3, 2), 16);
            res.push(hexb);
            i = i + 1;
          }
          if (res[0] != funCode) {
            i = res[1];
            if (!(i > 1)) {
              return _this42._throw(_this42._yapi.NOT_SUPPORTED, 'MODBUS error: unsupported function code', res);
            }
            if (!(i > 2)) {
              return _this42._throw(_this42._yapi.INVALID_ARGUMENT, 'MODBUS error: illegal data address', res);
            }
            if (!(i > 3)) {
              return _this42._throw(_this42._yapi.INVALID_ARGUMENT, 'MODBUS error: illegal data value', res);
            }
            if (!(i > 4)) {
              return _this42._throw(_this42._yapi.INVALID_ARGUMENT, 'MODBUS error: failed to execute function', res);
            }
          }
        }
        return res;
      })();
    }
    modbusReadBits(slaveNo, pduAddr, nBits) {
      var _this43 = this;
      return _asyncToGenerator(function*() {
        let pdu = [];
        let reply = [];
        let res = [];
        let bitpos;
        let idx;
        let val;
        let mask;
        pdu.push(0x01);
        pdu.push(pduAddr >> 8);
        pdu.push(pduAddr & 0xff);
        pdu.push(nBits >> 8);
        pdu.push(nBits & 0xff);
        reply = yield _this43.queryMODBUS(slaveNo, pdu);
        if (reply.length == 0) {
          return res;
        }
        if (reply[0] != pdu[0]) {
          return res;
        }
        bitpos = 0;
        idx = 2;
        val = reply[idx];
        mask = 1;
        while (bitpos < nBits) {
          if ((val & mask) == 0) {
            res.push(0);
          } else {
            res.push(1);
          }
          bitpos = bitpos + 1;
          if (mask == 0x80) {
            idx = idx + 1;
            val = reply[idx];
            mask = 1;
          } else {
            mask = mask << 1;
          }
        }
        return res;
      })();
    }
    modbusReadInputBits(slaveNo, pduAddr, nBits) {
      var _this44 = this;
      return _asyncToGenerator(function*() {
        let pdu = [];
        let reply = [];
        let res = [];
        let bitpos;
        let idx;
        let val;
        let mask;
        pdu.push(0x02);
        pdu.push(pduAddr >> 8);
        pdu.push(pduAddr & 0xff);
        pdu.push(nBits >> 8);
        pdu.push(nBits & 0xff);
        reply = yield _this44.queryMODBUS(slaveNo, pdu);
        if (reply.length == 0) {
          return res;
        }
        if (reply[0] != pdu[0]) {
          return res;
        }
        bitpos = 0;
        idx = 2;
        val = reply[idx];
        mask = 1;
        while (bitpos < nBits) {
          if ((val & mask) == 0) {
            res.push(0);
          } else {
            res.push(1);
          }
          bitpos = bitpos + 1;
          if (mask == 0x80) {
            idx = idx + 1;
            val = reply[idx];
            mask = 1;
          } else {
            mask = mask << 1;
          }
        }
        return res;
      })();
    }
    modbusReadRegisters(slaveNo, pduAddr, nWords) {
      var _this45 = this;
      return _asyncToGenerator(function*() {
        let pdu = [];
        let reply = [];
        let res = [];
        let regpos;
        let idx;
        let val;
        pdu.push(0x03);
        pdu.push(pduAddr >> 8);
        pdu.push(pduAddr & 0xff);
        pdu.push(nWords >> 8);
        pdu.push(nWords & 0xff);
        reply = yield _this45.queryMODBUS(slaveNo, pdu);
        if (reply.length == 0) {
          return res;
        }
        if (reply[0] != pdu[0]) {
          return res;
        }
        regpos = 0;
        idx = 2;
        while (regpos < nWords) {
          val = reply[idx] << 8;
          idx = idx + 1;
          val = val + reply[idx];
          idx = idx + 1;
          res.push(val);
          regpos = regpos + 1;
        }
        return res;
      })();
    }
    modbusReadInputRegisters(slaveNo, pduAddr, nWords) {
      var _this46 = this;
      return _asyncToGenerator(function*() {
        let pdu = [];
        let reply = [];
        let res = [];
        let regpos;
        let idx;
        let val;
        pdu.push(0x04);
        pdu.push(pduAddr >> 8);
        pdu.push(pduAddr & 0xff);
        pdu.push(nWords >> 8);
        pdu.push(nWords & 0xff);
        reply = yield _this46.queryMODBUS(slaveNo, pdu);
        if (reply.length == 0) {
          return res;
        }
        if (reply[0] != pdu[0]) {
          return res;
        }
        regpos = 0;
        idx = 2;
        while (regpos < nWords) {
          val = reply[idx] << 8;
          idx = idx + 1;
          val = val + reply[idx];
          idx = idx + 1;
          res.push(val);
          regpos = regpos + 1;
        }
        return res;
      })();
    }
    modbusWriteBit(slaveNo, pduAddr, value) {
      var _this47 = this;
      return _asyncToGenerator(function*() {
        let pdu = [];
        let reply = [];
        let res;
        res = 0;
        if (value != 0) {
          value = 0xff;
        }
        pdu.push(0x05);
        pdu.push(pduAddr >> 8);
        pdu.push(pduAddr & 0xff);
        pdu.push(value);
        pdu.push(0x00);
        reply = yield _this47.queryMODBUS(slaveNo, pdu);
        if (reply.length == 0) {
          return res;
        }
        if (reply[0] != pdu[0]) {
          return res;
        }
        res = 1;
        return res;
      })();
    }
    modbusWriteBits(slaveNo, pduAddr, bits) {
      var _this48 = this;
      return _asyncToGenerator(function*() {
        let nBits;
        let nBytes;
        let bitpos;
        let val;
        let mask;
        let pdu = [];
        let reply = [];
        let res;
        res = 0;
        nBits = bits.length;
        nBytes = nBits + 7 >> 3;
        pdu.push(0x0f);
        pdu.push(pduAddr >> 8);
        pdu.push(pduAddr & 0xff);
        pdu.push(nBits >> 8);
        pdu.push(nBits & 0xff);
        pdu.push(nBytes);
        bitpos = 0;
        val = 0;
        mask = 1;
        while (bitpos < nBits) {
          if (bits[bitpos] != 0) {
            val = val | mask;
          }
          bitpos = bitpos + 1;
          if (mask == 0x80) {
            pdu.push(val);
            val = 0;
            mask = 1;
          } else {
            mask = mask << 1;
          }
        }
        if (mask != 1) {
          pdu.push(val);
        }
        reply = yield _this48.queryMODBUS(slaveNo, pdu);
        if (reply.length == 0) {
          return res;
        }
        if (reply[0] != pdu[0]) {
          return res;
        }
        res = reply[3] << 8;
        res = res + reply[4];
        return res;
      })();
    }
    modbusWriteRegister(slaveNo, pduAddr, value) {
      var _this49 = this;
      return _asyncToGenerator(function*() {
        let pdu = [];
        let reply = [];
        let res;
        res = 0;
        if (value != 0) {
          value = 0xff;
        }
        pdu.push(0x06);
        pdu.push(pduAddr >> 8);
        pdu.push(pduAddr & 0xff);
        pdu.push(value >> 8);
        pdu.push(value & 0xff);
        reply = yield _this49.queryMODBUS(slaveNo, pdu);
        if (reply.length == 0) {
          return res;
        }
        if (reply[0] != pdu[0]) {
          return res;
        }
        res = 1;
        return res;
      })();
    }
    modbusWriteRegisters(slaveNo, pduAddr, values) {
      var _this50 = this;
      return _asyncToGenerator(function*() {
        let nWords;
        let nBytes;
        let regpos;
        let val;
        let pdu = [];
        let reply = [];
        let res;
        res = 0;
        nWords = values.length;
        nBytes = 2 * nWords;
        pdu.push(0x10);
        pdu.push(pduAddr >> 8);
        pdu.push(pduAddr & 0xff);
        pdu.push(nWords >> 8);
        pdu.push(nWords & 0xff);
        pdu.push(nBytes);
        regpos = 0;
        while (regpos < nWords) {
          val = values[regpos];
          pdu.push(val >> 8);
          pdu.push(val & 0xff);
          regpos = regpos + 1;
        }
        reply = yield _this50.queryMODBUS(slaveNo, pdu);
        if (reply.length == 0) {
          return res;
        }
        if (reply[0] != pdu[0]) {
          return res;
        }
        res = reply[3] << 8;
        res = res + reply[4];
        return res;
      })();
    }
    modbusWriteAndReadRegisters(slaveNo, pduWriteAddr, values, pduReadAddr, nReadWords) {
      var _this51 = this;
      return _asyncToGenerator(function*() {
        let nWriteWords;
        let nBytes;
        let regpos;
        let val;
        let idx;
        let pdu = [];
        let reply = [];
        let res = [];
        nWriteWords = values.length;
        nBytes = 2 * nWriteWords;
        pdu.push(0x17);
        pdu.push(pduReadAddr >> 8);
        pdu.push(pduReadAddr & 0xff);
        pdu.push(nReadWords >> 8);
        pdu.push(nReadWords & 0xff);
        pdu.push(pduWriteAddr >> 8);
        pdu.push(pduWriteAddr & 0xff);
        pdu.push(nWriteWords >> 8);
        pdu.push(nWriteWords & 0xff);
        pdu.push(nBytes);
        regpos = 0;
        while (regpos < nWriteWords) {
          val = values[regpos];
          pdu.push(val >> 8);
          pdu.push(val & 0xff);
          regpos = regpos + 1;
        }
        reply = yield _this51.queryMODBUS(slaveNo, pdu);
        if (reply.length == 0) {
          return res;
        }
        if (reply[0] != pdu[0]) {
          return res;
        }
        regpos = 0;
        idx = 2;
        while (regpos < nReadWords) {
          val = reply[idx] << 8;
          idx = idx + 1;
          val = val + reply[idx];
          idx = idx + 1;
          res.push(val);
          regpos = regpos + 1;
        }
        return res;
      })();
    }
    uploadJob(jobfile, jsonDef) {
      var _this52 = this;
      return _asyncToGenerator(function*() {
        yield _this52._upload(jobfile, _this52._yapi.imm_str2bin(jsonDef));
        return _this52._yapi.SUCCESS;
      })();
    }
    selectJob(jobfile) {
      var _this53 = this;
      return _asyncToGenerator(function*() {
        return yield _this53.set_currentJob(jobfile);
      })();
    }
    nextSerialPort() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YSerialPort.FindSerialPortInContext(this._yapi, next_hwid);
    }
    static FirstSerialPort() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('SerialPort');
      if (next_hwid == null)
        return null;
      return YSerialPort.FindSerialPort(next_hwid);
    }
    static FirstSerialPortInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('SerialPort');
      if (next_hwid == null)
        return null;
      return YSerialPort.FindSerialPortInContext(yctx, next_hwid);
    }
  }
  exports.YSerialPort = YSerialPort;
  class YSerialPortProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    _asyncInit() {
      var _this54 = this;
      return _asyncToGenerator(function*() {
        _this54.liveFunc._cachedCTS = yield _this54.liveFunc.get_CTS();
        _this54.liveFunc._nextByte = _yocto_api.YAPI.NO_MORE_DATA;
        _this54.liveFunc._nextStr = null;
        _this54.liveFunc._nextBin = null;
        _this54.liveFunc._nextArray = null;
        _this54.liveFunc._nextHex = null;
        _this54.liveFunc._nextLine = null;
        _this54.liveFunc._nextMessages = null;
        _this54.liveFunc._nextAvail = null;
      })();
    }
    set_RTS(val) {
      this.liveFunc.set_RTS(val);
      return _yocto_api.YAPI_SUCCESS;
    }
    get_CTS() {
      var _this55 = this;
      this.liveFunc.get_CTS().then(function(nextCTS) {
        _this55.liveFunc._cachedCTS = nextCTS;
      });
      return this.liveFunc._cachedCTS;
    }
    readByte() {
      var _this56 = this;
      let res = this.liveFunc._nextByte;
      if (res == _yocto_api.YAPI.NO_MORE_DATA) {
        this.liveFunc.readByte().then(function(nextByte) {
          _this56.liveFunc._nextByte = nextByte;
        });
      } else {
        this.liveFunc._nextByte = _yocto_api.YAPI.NO_MORE_DATA;
      }
      return res;
    }
    readStr(nChars) {
      var _this57 = this;
      let res = this.liveFunc._nextStr;
      if (!res) {
        this.liveFunc.readStr(nChars).then(function(nextStr) {
          _this57.liveFunc._nextStr = nextStr;
        });
        res = '';
      } else {
        this.liveFunc._nextStr = '';
      }
      return res;
    }
    readBin(nChars) {
      var _this58 = this;
      let res = this.liveFunc._nextBin;
      if (!res) {
        this.liveFunc.readBin(nChars).then(function(nextBin) {
          _this58.liveFunc._nextBin = nextBin;
        });
        res = new Uint8Array(0);
      } else {
        this.liveFunc._nextBin = null;
      }
      return res;
    }
    readArray(nChars) {
      var _this59 = this;
      let res = this.liveFunc._nextArray;
      if (!res) {
        this.liveFunc.readArray(nChars).then(function(nextArray) {
          _this59.liveFunc._nextArray = nextArray;
        });
        res = [];
      } else {
        this.liveFunc._nextArray = null;
      }
      return res;
    }
    readHex(nBytes) {
      var _this60 = this;
      let res = this.liveFunc._nextHex;
      if (!res) {
        this.liveFunc.readHex(nBytes).then(function(nextHex) {
          _this60.liveFunc._nextHex = nextHex;
        });
        res = '';
      } else {
        this.liveFunc._nextHex = null;
      }
      return res;
    }
    readLine() {
      var _this61 = this;
      let res = this.liveFunc._nextLine;
      if (!res) {
        this.liveFunc.readLine().then(function(nextLine) {
          _this61.liveFunc._nextLine = nextLine;
        });
        res = '';
      } else {
        this.liveFunc._nextLine = null;
      }
      return res;
    }
    readMessages(pattern, maxWait) {
      var _this62 = this;
      let res = this.liveFunc._nextMessages;
      if (!res) {
        this.liveFunc.readMessages(pattern, maxWait).then(function(nextMessages) {
          _this62.liveFunc._nextMessages = nextMessages;
        });
        res = [];
      } else {
        this.liveFunc._nextMessages = null;
      }
      return res;
    }
    read_seek(absPos) {
      this.liveFunc._rxptr = absPos;
      return this._yapi.SUCCESS;
    }
    read_tell() {
      return this.liveFunc._rxptr;
    }
    read_avail() {
      var _this63 = this;
      let res = this.liveFunc._nextAvail;
      if (!res) {
        this.liveFunc.read_avail().then(function(nextAvail) {
          _this63.liveFunc._nextAvail = nextAvail;
        });
        res = '';
      } else {
        this.liveFunc._nextAvail = null;
      }
      return res;
    }
    get_serialMode() {
      return this.liveFunc._serialMode;
    }
    set_serialMode(newval) {
      this.liveFunc.set_serialMode(newval);
      return this._yapi.SUCCESS;
    }
    get_protocol() {
      return this.liveFunc._protocol;
    }
    set_protocol(newval) {
      this.liveFunc.set_protocol(newval);
      return this._yapi.SUCCESS;
    }
    get_voltageLevel() {
      return this.liveFunc._voltageLevel;
    }
    set_voltageLevel(newval) {
      this.liveFunc.set_voltageLevel(newval);
      return this._yapi.SUCCESS;
    }
    get_rxCount() {
      return this.liveFunc._rxCount;
    }
    get_txCount() {
      return this.liveFunc._txCount;
    }
    get_errCount() {
      return this.liveFunc._errCount;
    }
    get_rxMsgCount() {
      return this.liveFunc._rxMsgCount;
    }
    get_txMsgCount() {
      return this.liveFunc._txMsgCount;
    }
    get_lastMsg() {
      return this.liveFunc._lastMsg;
    }
    get_currentJob() {
      return this.liveFunc._currentJob;
    }
    set_currentJob(newval) {
      this.liveFunc.set_currentJob(newval);
      return this._yapi.SUCCESS;
    }
    get_startupJob() {
      return this.liveFunc._startupJob;
    }
    set_startupJob(newval) {
      this.liveFunc.set_startupJob(newval);
      return this._yapi.SUCCESS;
    }
    get_command() {
      return this.liveFunc._command;
    }
    set_command(newval) {
      this.liveFunc.set_command(newval);
      return this._yapi.SUCCESS;
    }
    sendCommand(text) {
      this.liveFunc.sendCommand(text);
      return _yocto_api.YAPI_SUCCESS;
    }
    reset() {
      this.liveFunc.reset();
      return _yocto_api.YAPI_SUCCESS;
    }
    writeByte(code) {
      this.liveFunc.writeByte(code);
      return _yocto_api.YAPI_SUCCESS;
    }
    writeStr(text) {
      this.liveFunc.writeStr(text);
      return _yocto_api.YAPI_SUCCESS;
    }
    writeBin(buff) {
      this.liveFunc.writeBin(buff);
      return _yocto_api.YAPI_SUCCESS;
    }
    writeArray(byteList) {
      this.liveFunc.writeArray(byteList);
      return _yocto_api.YAPI_SUCCESS;
    }
    writeHex(hexString) {
      this.liveFunc.writeHex(hexString);
      return _yocto_api.YAPI_SUCCESS;
    }
    writeLine(text) {
      this.liveFunc.writeLine(text);
      return _yocto_api.YAPI_SUCCESS;
    }
    writeMODBUS(hexString) {
      this.liveFunc.writeMODBUS(hexString);
      return _yocto_api.YAPI_SUCCESS;
    }
    modbusWriteBit(slaveNo, pduAddr, value) {
      this.liveFunc.modbusWriteBit(slaveNo, pduAddr, value);
      return _yocto_api.YAPI_SUCCESS;
    }
    modbusWriteBits(slaveNo, pduAddr, bits) {
      this.liveFunc.modbusWriteBits(slaveNo, pduAddr, bits);
      return _yocto_api.YAPI_SUCCESS;
    }
    modbusWriteRegister(slaveNo, pduAddr, value) {
      this.liveFunc.modbusWriteRegister(slaveNo, pduAddr, value);
      return _yocto_api.YAPI_SUCCESS;
    }
    modbusWriteRegisters(slaveNo, pduAddr, values) {
      this.liveFunc.modbusWriteRegisters(slaveNo, pduAddr, values);
      return _yocto_api.YAPI_SUCCESS;
    }
    uploadJob(jobfile, jsonDef) {
      this.liveFunc.uploadJob(jobfile, jsonDef);
      return _yocto_api.YAPI_SUCCESS;
    }
    selectJob(jobfile) {
      this.liveFunc.selectJob(jobfile);
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YSerialPortProxy = YSerialPortProxy;
  function yFindSerialPort(func) {
    return YSerialPort.FindSerialPort(func);
  }
  function yFirstSerialPort() {
    return YSerialPort.FirstSerialPort();
  }
  return module.exports;
});

$__System.registerDynamic("30", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YServoProxy = exports.YServo = exports.Y_POSITIONATPOWERON_INVALID = exports.Y_MOVE_INVALID = exports.Y_NEUTRAL_INVALID = exports.Y_RANGE_INVALID = exports.Y_POSITION_INVALID = exports.Y_ENABLEDATPOWERON_INVALID = exports.Y_ENABLEDATPOWERON_TRUE = exports.Y_ENABLEDATPOWERON_FALSE = exports.Y_ENABLED_INVALID = exports.Y_ENABLED_TRUE = exports.Y_ENABLED_FALSE = undefined;
  exports.yFindServo = yFindServo;
  exports.yFirstServo = yFirstServo;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_ENABLED_FALSE = exports.Y_ENABLED_FALSE = 0;
  var Y_ENABLED_TRUE = exports.Y_ENABLED_TRUE = 1;
  var Y_ENABLED_INVALID = exports.Y_ENABLED_INVALID = -1;
  var Y_ENABLEDATPOWERON_FALSE = exports.Y_ENABLEDATPOWERON_FALSE = 0;
  var Y_ENABLEDATPOWERON_TRUE = exports.Y_ENABLEDATPOWERON_TRUE = 1;
  var Y_ENABLEDATPOWERON_INVALID = exports.Y_ENABLEDATPOWERON_INVALID = -1;
  var Y_POSITION_INVALID = exports.Y_POSITION_INVALID = _yocto_api.YAPI.INVALID_INT;
  var Y_RANGE_INVALID = exports.Y_RANGE_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_NEUTRAL_INVALID = exports.Y_NEUTRAL_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_MOVE_INVALID = exports.Y_MOVE_INVALID = null;
  var Y_POSITIONATPOWERON_INVALID = exports.Y_POSITIONATPOWERON_INVALID = _yocto_api.YAPI.INVALID_INT;
  class YServo extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Servo';
      this._position = Y_POSITION_INVALID;
      this._enabled = Y_ENABLED_INVALID;
      this._range = Y_RANGE_INVALID;
      this._neutral = Y_NEUTRAL_INVALID;
      this._move = Y_MOVE_INVALID;
      this._positionAtPowerOn = Y_POSITIONATPOWERON_INVALID;
      this._enabledAtPowerOn = Y_ENABLEDATPOWERON_INVALID;
      this.imm_setConst({
        POSITION_INVALID: _yocto_api.YAPI.INVALID_INT,
        ENABLED_FALSE: 0,
        ENABLED_TRUE: 1,
        ENABLED_INVALID: -1,
        RANGE_INVALID: _yocto_api.YAPI.INVALID_UINT,
        NEUTRAL_INVALID: _yocto_api.YAPI.INVALID_UINT,
        POSITIONATPOWERON_INVALID: _yocto_api.YAPI.INVALID_INT,
        ENABLEDATPOWERON_FALSE: 0,
        ENABLEDATPOWERON_TRUE: 1,
        ENABLEDATPOWERON_INVALID: -1
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YServoProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'position':
          this._position = parseInt(val);
          return 1;
        case 'enabled':
          this._enabled = parseInt(val);
          return 1;
        case 'range':
          this._range = parseInt(val);
          return 1;
        case 'neutral':
          this._neutral = parseInt(val);
          return 1;
        case 'move':
          this._move = val;
          return 1;
        case 'positionAtPowerOn':
          this._positionAtPowerOn = parseInt(val);
          return 1;
        case 'enabledAtPowerOn':
          this._enabledAtPowerOn = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_position() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_POSITION_INVALID;
          }
        }
        return _this2._position;
      })();
    }
    set_position(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this3._setAttr('position', rest_val);
      })();
    }
    get_enabled() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_ENABLED_INVALID;
          }
        }
        return _this4._enabled;
      })();
    }
    set_enabled(newval) {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this5._setAttr('enabled', rest_val);
      })();
    }
    get_range() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_RANGE_INVALID;
          }
        }
        return _this6._range;
      })();
    }
    set_range(newval) {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this7._setAttr('range', rest_val);
      })();
    }
    get_neutral() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        if (_this8._cacheExpiration <= _this8._yapi.GetTickCount()) {
          if ((yield _this8.load(_this8._yapi.defaultCacheValidity)) != _this8._yapi.SUCCESS) {
            return Y_NEUTRAL_INVALID;
          }
        }
        return _this8._neutral;
      })();
    }
    set_neutral(newval) {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this9._setAttr('neutral', rest_val);
      })();
    }
    get_move() {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        if (_this10._cacheExpiration <= _this10._yapi.GetTickCount()) {
          if ((yield _this10.load(_this10._yapi.defaultCacheValidity)) != _this10._yapi.SUCCESS) {
            return Y_MOVE_INVALID;
          }
        }
        return _this10._move;
      })();
    }
    set_move(newval) {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval.target) + ':' + String(newval.ms);
        return yield _this11._setAttr('move', rest_val);
      })();
    }
    move(target, ms_duration) {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(target) + ':' + String(ms_duration);
        return yield _this12._setAttr('move', rest_val);
      })();
    }
    get_positionAtPowerOn() {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        if (_this13._cacheExpiration <= _this13._yapi.GetTickCount()) {
          if ((yield _this13.load(_this13._yapi.defaultCacheValidity)) != _this13._yapi.SUCCESS) {
            return Y_POSITIONATPOWERON_INVALID;
          }
        }
        return _this13._positionAtPowerOn;
      })();
    }
    set_positionAtPowerOn(newval) {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this14._setAttr('positionAtPowerOn', rest_val);
      })();
    }
    get_enabledAtPowerOn() {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        if (_this15._cacheExpiration <= _this15._yapi.GetTickCount()) {
          if ((yield _this15.load(_this15._yapi.defaultCacheValidity)) != _this15._yapi.SUCCESS) {
            return Y_ENABLEDATPOWERON_INVALID;
          }
        }
        return _this15._enabledAtPowerOn;
      })();
    }
    set_enabledAtPowerOn(newval) {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this16._setAttr('enabledAtPowerOn', rest_val);
      })();
    }
    static FindServo(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Servo', func);
      if (obj == null) {
        obj = new YServo(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Servo', func, obj);
      }
      return obj;
    }
    static FindServoInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Servo', func);
      if (obj == null) {
        obj = new YServo(yctx, func);
        _yocto_api.YFunction._AddToCache('Servo', func, obj);
      }
      return obj;
    }
    nextServo() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YServo.FindServoInContext(this._yapi, next_hwid);
    }
    static FirstServo() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Servo');
      if (next_hwid == null)
        return null;
      return YServo.FindServo(next_hwid);
    }
    static FirstServoInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Servo');
      if (next_hwid == null)
        return null;
      return YServo.FindServoInContext(yctx, next_hwid);
    }
  }
  exports.YServo = YServo;
  class YServoProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_position() {
      return this.liveFunc._position;
    }
    set_position(newval) {
      this.liveFunc.set_position(newval);
      return this._yapi.SUCCESS;
    }
    get_enabled() {
      return this.liveFunc._enabled;
    }
    set_enabled(newval) {
      this.liveFunc.set_enabled(newval);
      return this._yapi.SUCCESS;
    }
    get_range() {
      return this.liveFunc._range;
    }
    set_range(newval) {
      this.liveFunc.set_range(newval);
      return this._yapi.SUCCESS;
    }
    get_neutral() {
      return this.liveFunc._neutral;
    }
    set_neutral(newval) {
      this.liveFunc.set_neutral(newval);
      return this._yapi.SUCCESS;
    }
    get_move() {
      return this.liveFunc._move;
    }
    set_move(newval) {
      this.liveFunc.set_move(newval);
      return this._yapi.SUCCESS;
    }
    get_positionAtPowerOn() {
      return this.liveFunc._positionAtPowerOn;
    }
    set_positionAtPowerOn(newval) {
      this.liveFunc.set_positionAtPowerOn(newval);
      return this._yapi.SUCCESS;
    }
    get_enabledAtPowerOn() {
      return this.liveFunc._enabledAtPowerOn;
    }
    set_enabledAtPowerOn(newval) {
      this.liveFunc.set_enabledAtPowerOn(newval);
      return this._yapi.SUCCESS;
    }
  }
  exports.YServoProxy = YServoProxy;
  function yFindServo(func) {
    return YServo.FindServo(func);
  }
  function yFirstServo() {
    return YServo.FirstServo();
  }
  return module.exports;
});

$__System.registerDynamic("31", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YTemperatureProxy = exports.YTemperature = exports.Y_COMMAND_INVALID = exports.Y_SIGNALUNIT_INVALID = exports.Y_SIGNALVALUE_INVALID = exports.Y_SENSORTYPE_INVALID = exports.Y_SENSORTYPE_RES_LINEAR = exports.Y_SENSORTYPE_RES_NTC = exports.Y_SENSORTYPE_RES_OHM = exports.Y_SENSORTYPE_PT100_2WIRES = exports.Y_SENSORTYPE_PT100_3WIRES = exports.Y_SENSORTYPE_PT100_4WIRES = exports.Y_SENSORTYPE_TYPE_T = exports.Y_SENSORTYPE_TYPE_S = exports.Y_SENSORTYPE_TYPE_R = exports.Y_SENSORTYPE_TYPE_N = exports.Y_SENSORTYPE_TYPE_J = exports.Y_SENSORTYPE_TYPE_E = exports.Y_SENSORTYPE_TYPE_K = exports.Y_SENSORTYPE_DIGITAL = undefined;
  exports.yFindTemperature = yFindTemperature;
  exports.yFirstTemperature = yFirstTemperature;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_SENSORTYPE_DIGITAL = exports.Y_SENSORTYPE_DIGITAL = 0;
  var Y_SENSORTYPE_TYPE_K = exports.Y_SENSORTYPE_TYPE_K = 1;
  var Y_SENSORTYPE_TYPE_E = exports.Y_SENSORTYPE_TYPE_E = 2;
  var Y_SENSORTYPE_TYPE_J = exports.Y_SENSORTYPE_TYPE_J = 3;
  var Y_SENSORTYPE_TYPE_N = exports.Y_SENSORTYPE_TYPE_N = 4;
  var Y_SENSORTYPE_TYPE_R = exports.Y_SENSORTYPE_TYPE_R = 5;
  var Y_SENSORTYPE_TYPE_S = exports.Y_SENSORTYPE_TYPE_S = 6;
  var Y_SENSORTYPE_TYPE_T = exports.Y_SENSORTYPE_TYPE_T = 7;
  var Y_SENSORTYPE_PT100_4WIRES = exports.Y_SENSORTYPE_PT100_4WIRES = 8;
  var Y_SENSORTYPE_PT100_3WIRES = exports.Y_SENSORTYPE_PT100_3WIRES = 9;
  var Y_SENSORTYPE_PT100_2WIRES = exports.Y_SENSORTYPE_PT100_2WIRES = 10;
  var Y_SENSORTYPE_RES_OHM = exports.Y_SENSORTYPE_RES_OHM = 11;
  var Y_SENSORTYPE_RES_NTC = exports.Y_SENSORTYPE_RES_NTC = 12;
  var Y_SENSORTYPE_RES_LINEAR = exports.Y_SENSORTYPE_RES_LINEAR = 13;
  var Y_SENSORTYPE_INVALID = exports.Y_SENSORTYPE_INVALID = -1;
  var Y_SIGNALVALUE_INVALID = exports.Y_SIGNALVALUE_INVALID = _yocto_api.YAPI.INVALID_DOUBLE;
  var Y_SIGNALUNIT_INVALID = exports.Y_SIGNALUNIT_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_COMMAND_INVALID = exports.Y_COMMAND_INVALID = _yocto_api.YAPI.INVALID_STRING;
  class YTemperature extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Temperature';
      this._sensorType = Y_SENSORTYPE_INVALID;
      this._signalValue = Y_SIGNALVALUE_INVALID;
      this._signalUnit = Y_SIGNALUNIT_INVALID;
      this._command = Y_COMMAND_INVALID;
      this.imm_setConst({
        SENSORTYPE_DIGITAL: 0,
        SENSORTYPE_TYPE_K: 1,
        SENSORTYPE_TYPE_E: 2,
        SENSORTYPE_TYPE_J: 3,
        SENSORTYPE_TYPE_N: 4,
        SENSORTYPE_TYPE_R: 5,
        SENSORTYPE_TYPE_S: 6,
        SENSORTYPE_TYPE_T: 7,
        SENSORTYPE_PT100_4WIRES: 8,
        SENSORTYPE_PT100_3WIRES: 9,
        SENSORTYPE_PT100_2WIRES: 10,
        SENSORTYPE_RES_OHM: 11,
        SENSORTYPE_RES_NTC: 12,
        SENSORTYPE_RES_LINEAR: 13,
        SENSORTYPE_INVALID: -1,
        SIGNALVALUE_INVALID: _yocto_api.YAPI.INVALID_DOUBLE,
        SIGNALUNIT_INVALID: _yocto_api.YAPI.INVALID_STRING,
        COMMAND_INVALID: _yocto_api.YAPI.INVALID_STRING
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YTemperatureProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'sensorType':
          this._sensorType = parseInt(val);
          return 1;
        case 'signalValue':
          this._signalValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'signalUnit':
          this._signalUnit = val;
          return 1;
        case 'command':
          this._command = val;
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    set_unit(newval) {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this2._setAttr('unit', rest_val);
      })();
    }
    get_sensorType() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        if (_this3._cacheExpiration <= _this3._yapi.GetTickCount()) {
          if ((yield _this3.load(_this3._yapi.defaultCacheValidity)) != _this3._yapi.SUCCESS) {
            return Y_SENSORTYPE_INVALID;
          }
        }
        return _this3._sensorType;
      })();
    }
    set_sensorType(newval) {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this4._setAttr('sensorType', rest_val);
      })();
    }
    get_signalValue() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        if (_this5._cacheExpiration <= _this5._yapi.GetTickCount()) {
          if ((yield _this5.load(_this5._yapi.defaultCacheValidity)) != _this5._yapi.SUCCESS) {
            return Y_SIGNALVALUE_INVALID;
          }
        }
        return Math.round(_this5._signalValue * 1000) / 1000;
      })();
    }
    get_signalUnit() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration == 0) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_SIGNALUNIT_INVALID;
          }
        }
        return _this6._signalUnit;
      })();
    }
    get_command() {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        if (_this7._cacheExpiration <= _this7._yapi.GetTickCount()) {
          if ((yield _this7.load(_this7._yapi.defaultCacheValidity)) != _this7._yapi.SUCCESS) {
            return Y_COMMAND_INVALID;
          }
        }
        return _this7._command;
      })();
    }
    set_command(newval) {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this8._setAttr('command', rest_val);
      })();
    }
    static FindTemperature(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Temperature', func);
      if (obj == null) {
        obj = new YTemperature(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Temperature', func, obj);
      }
      return obj;
    }
    static FindTemperatureInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Temperature', func);
      if (obj == null) {
        obj = new YTemperature(yctx, func);
        _yocto_api.YFunction._AddToCache('Temperature', func, obj);
      }
      return obj;
    }
    set_ntcParameters(res25, beta) {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        let t0;
        let t1;
        let res100;
        let tempValues = [];
        let resValues = [];
        t0 = 25.0 + 275.15;
        t1 = 100.0 + 275.15;
        res100 = res25 * Math.exp(beta * (1.0 / t1 - 1.0 / t0));
        tempValues.length = 0;
        resValues.length = 0;
        tempValues.push(25.0);
        resValues.push(res25);
        tempValues.push(100.0);
        resValues.push(res100);
        return yield _this9.set_thermistorResponseTable(tempValues, resValues);
      })();
    }
    set_thermistorResponseTable(tempValues, resValues) {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        let siz;
        let res;
        let idx;
        let found;
        let prev;
        let curr;
        let currTemp;
        let idxres;
        siz = tempValues.length;
        if (!(siz >= 2)) {
          return _this10._throw(_this10._yapi.INVALID_ARGUMENT, 'thermistor response table must have at least two points', _this10._yapi.INVALID_ARGUMENT);
        }
        if (!(siz == resValues.length)) {
          return _this10._throw(_this10._yapi.INVALID_ARGUMENT, 'table sizes mismatch', _this10._yapi.INVALID_ARGUMENT);
        }
        res = yield _this10.set_command('Z');
        if (!(res == _this10._yapi.SUCCESS)) {
          return _this10._throw(_this10._yapi.IO_ERROR, 'unable to reset thermistor parameters', _this10._yapi.IO_ERROR);
        }
        found = 1;
        prev = 0.0;
        while (found > 0) {
          found = 0;
          curr = 99999999.0;
          currTemp = -999999.0;
          idx = 0;
          while (idx < siz) {
            idxres = resValues[idx];
            if (idxres > prev && idxres < curr) {
              curr = idxres;
              currTemp = tempValues[idx];
              found = 1;
            }
            idx = idx + 1;
          }
          if (found > 0) {
            res = yield _this10.set_command('m' + String(Math.round(Math.round(1000 * curr))) + ':' + String(Math.round(Math.round(1000 * currTemp))));
            if (!(res == _this10._yapi.SUCCESS)) {
              return _this10._throw(_this10._yapi.IO_ERROR, 'unable to reset thermistor parameters', _this10._yapi.IO_ERROR);
            }
            prev = curr;
          }
        }
        return _this10._yapi.SUCCESS;
      })();
    }
    loadThermistorResponseTable(tempValues, resValues) {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        let id;
        let bin_json;
        let paramlist = [];
        let templist = [];
        let siz;
        let idx;
        let temp;
        let found;
        let prev;
        let curr;
        let currRes;
        tempValues.length = 0;
        resValues.length = 0;
        id = yield _this11.get_functionId();
        id = id.substr(11, id.length - 11);
        bin_json = yield _this11._download('extra.json?page=' + id);
        paramlist = _this11.imm_json_get_array(bin_json);
        siz = paramlist.length >> 1;
        templist.length = 0;
        idx = 0;
        while (idx < siz) {
          temp = parseFloat(paramlist[2 * idx + 1]) / 1000.0;
          templist.push(temp);
          idx = idx + 1;
        }
        tempValues.length = 0;
        resValues.length = 0;
        found = 1;
        prev = -999999.0;
        while (found > 0) {
          found = 0;
          curr = 999999.0;
          currRes = -999999.0;
          idx = 0;
          while (idx < siz) {
            temp = templist[idx];
            if (temp > prev && temp < curr) {
              curr = temp;
              currRes = parseFloat(paramlist[2 * idx]) / 1000.0;
              found = 1;
            }
            idx = idx + 1;
          }
          if (found > 0) {
            tempValues.push(curr);
            resValues.push(currRes);
            prev = curr;
          }
        }
        return _this11._yapi.SUCCESS;
      })();
    }
    nextTemperature() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YTemperature.FindTemperatureInContext(this._yapi, next_hwid);
    }
    static FirstTemperature() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Temperature');
      if (next_hwid == null)
        return null;
      return YTemperature.FindTemperature(next_hwid);
    }
    static FirstTemperatureInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Temperature');
      if (next_hwid == null)
        return null;
      return YTemperature.FindTemperatureInContext(yctx, next_hwid);
    }
  }
  exports.YTemperature = YTemperature;
  class YTemperatureProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    set_unit(newval) {
      this.liveFunc.set_unit(newval);
      return this._yapi.SUCCESS;
    }
    get_sensorType() {
      return this.liveFunc._sensorType;
    }
    set_sensorType(newval) {
      this.liveFunc.set_sensorType(newval);
      return this._yapi.SUCCESS;
    }
    get_signalValue() {
      return this.liveFunc._signalValue;
    }
    get_signalUnit() {
      return this.liveFunc._signalUnit;
    }
    get_command() {
      return this.liveFunc._command;
    }
    set_command(newval) {
      this.liveFunc.set_command(newval);
      return this._yapi.SUCCESS;
    }
    loadThermistorResponseTable(tempValues, resValues) {
      this.liveFunc.loadThermistorResponseTable(tempValues, resValues);
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YTemperatureProxy = YTemperatureProxy;
  function yFindTemperature(func) {
    return YTemperature.FindTemperature(func);
  }
  function yFirstTemperature() {
    return YTemperature.FirstTemperature();
  }
  return module.exports;
});

$__System.registerDynamic("32", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YTiltProxy = exports.YTilt = exports.Y_AXIS_INVALID = exports.Y_AXIS_Z = exports.Y_AXIS_Y = exports.Y_AXIS_X = undefined;
  exports.yFindTilt = yFindTilt;
  exports.yFirstTilt = yFirstTilt;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_AXIS_X = exports.Y_AXIS_X = 0;
  var Y_AXIS_Y = exports.Y_AXIS_Y = 1;
  var Y_AXIS_Z = exports.Y_AXIS_Z = 2;
  var Y_AXIS_INVALID = exports.Y_AXIS_INVALID = -1;
  class YTilt extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Tilt';
      this._axis = Y_AXIS_INVALID;
      this.imm_setConst({
        AXIS_X: 0,
        AXIS_Y: 1,
        AXIS_Z: 2,
        AXIS_INVALID: -1
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YTiltProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'axis':
          this._axis = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_axis() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_AXIS_INVALID;
          }
        }
        return _this2._axis;
      })();
    }
    static FindTilt(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Tilt', func);
      if (obj == null) {
        obj = new YTilt(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Tilt', func, obj);
      }
      return obj;
    }
    static FindTiltInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Tilt', func);
      if (obj == null) {
        obj = new YTilt(yctx, func);
        _yocto_api.YFunction._AddToCache('Tilt', func, obj);
      }
      return obj;
    }
    nextTilt() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YTilt.FindTiltInContext(this._yapi, next_hwid);
    }
    static FirstTilt() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Tilt');
      if (next_hwid == null)
        return null;
      return YTilt.FindTilt(next_hwid);
    }
    static FirstTiltInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Tilt');
      if (next_hwid == null)
        return null;
      return YTilt.FindTiltInContext(yctx, next_hwid);
    }
  }
  exports.YTilt = YTilt;
  class YTiltProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_axis() {
      return this.liveFunc._axis;
    }
  }
  exports.YTiltProxy = YTiltProxy;
  function yFindTilt(func) {
    return YTilt.FindTilt(func);
  }
  function yFirstTilt() {
    return YTilt.FirstTilt();
  }
  return module.exports;
});

$__System.registerDynamic("33", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YVocProxy = exports.YVoc = undefined;
  exports.yFindVoc = yFindVoc;
  exports.yFirstVoc = yFirstVoc;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  class YVoc extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Voc';
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YVocProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    static FindVoc(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Voc', func);
      if (obj == null) {
        obj = new YVoc(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Voc', func, obj);
      }
      return obj;
    }
    static FindVocInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Voc', func);
      if (obj == null) {
        obj = new YVoc(yctx, func);
        _yocto_api.YFunction._AddToCache('Voc', func, obj);
      }
      return obj;
    }
    nextVoc() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YVoc.FindVocInContext(this._yapi, next_hwid);
    }
    static FirstVoc() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Voc');
      if (next_hwid == null)
        return null;
      return YVoc.FindVoc(next_hwid);
    }
    static FirstVocInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Voc');
      if (next_hwid == null)
        return null;
      return YVoc.FindVocInContext(yctx, next_hwid);
    }
  }
  exports.YVoc = YVoc;
  class YVocProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
  }
  exports.YVocProxy = YVocProxy;
  function yFindVoc(func) {
    return YVoc.FindVoc(func);
  }
  function yFirstVoc() {
    return YVoc.FirstVoc();
  }
  return module.exports;
});

$__System.registerDynamic("34", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YVoltageProxy = exports.YVoltage = undefined;
  exports.yFindVoltage = yFindVoltage;
  exports.yFirstVoltage = yFirstVoltage;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  class YVoltage extends _yocto_api.YSensor {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Voltage';
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YVoltageProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    static FindVoltage(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Voltage', func);
      if (obj == null) {
        obj = new YVoltage(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Voltage', func, obj);
      }
      return obj;
    }
    static FindVoltageInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Voltage', func);
      if (obj == null) {
        obj = new YVoltage(yctx, func);
        _yocto_api.YFunction._AddToCache('Voltage', func, obj);
      }
      return obj;
    }
    nextVoltage() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YVoltage.FindVoltageInContext(this._yapi, next_hwid);
    }
    static FirstVoltage() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Voltage');
      if (next_hwid == null)
        return null;
      return YVoltage.FindVoltage(next_hwid);
    }
    static FirstVoltageInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Voltage');
      if (next_hwid == null)
        return null;
      return YVoltage.FindVoltageInContext(yctx, next_hwid);
    }
  }
  exports.YVoltage = YVoltage;
  class YVoltageProxy extends _yocto_api.YSensorProxy {
    constructor(obj_func) {
      super(obj_func);
    }
  }
  exports.YVoltageProxy = YVoltageProxy;
  function yFindVoltage(func) {
    return YVoltage.FindVoltage(func);
  }
  function yFirstVoltage() {
    return YVoltage.FirstVoltage();
  }
  return module.exports;
});

$__System.registerDynamic("35", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YWakeUpMonitorProxy = exports.YWakeUpMonitor = exports.Y_RTCTIME_INVALID = exports.Y_NEXTWAKEUP_INVALID = exports.Y_SLEEPCOUNTDOWN_INVALID = exports.Y_POWERDURATION_INVALID = exports.Y_WAKEUPSTATE_INVALID = exports.Y_WAKEUPSTATE_AWAKE = exports.Y_WAKEUPSTATE_SLEEPING = exports.Y_WAKEUPREASON_INVALID = exports.Y_WAKEUPREASON_SCHEDULE2 = exports.Y_WAKEUPREASON_SCHEDULE1 = exports.Y_WAKEUPREASON_EXTSIG1 = exports.Y_WAKEUPREASON_ENDOFSLEEP = exports.Y_WAKEUPREASON_EXTPOWER = exports.Y_WAKEUPREASON_USBPOWER = undefined;
  exports.yFindWakeUpMonitor = yFindWakeUpMonitor;
  exports.yFirstWakeUpMonitor = yFirstWakeUpMonitor;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_WAKEUPREASON_USBPOWER = exports.Y_WAKEUPREASON_USBPOWER = 0;
  var Y_WAKEUPREASON_EXTPOWER = exports.Y_WAKEUPREASON_EXTPOWER = 1;
  var Y_WAKEUPREASON_ENDOFSLEEP = exports.Y_WAKEUPREASON_ENDOFSLEEP = 2;
  var Y_WAKEUPREASON_EXTSIG1 = exports.Y_WAKEUPREASON_EXTSIG1 = 3;
  var Y_WAKEUPREASON_SCHEDULE1 = exports.Y_WAKEUPREASON_SCHEDULE1 = 4;
  var Y_WAKEUPREASON_SCHEDULE2 = exports.Y_WAKEUPREASON_SCHEDULE2 = 5;
  var Y_WAKEUPREASON_INVALID = exports.Y_WAKEUPREASON_INVALID = -1;
  var Y_WAKEUPSTATE_SLEEPING = exports.Y_WAKEUPSTATE_SLEEPING = 0;
  var Y_WAKEUPSTATE_AWAKE = exports.Y_WAKEUPSTATE_AWAKE = 1;
  var Y_WAKEUPSTATE_INVALID = exports.Y_WAKEUPSTATE_INVALID = -1;
  var Y_POWERDURATION_INVALID = exports.Y_POWERDURATION_INVALID = _yocto_api.YAPI.INVALID_INT;
  var Y_SLEEPCOUNTDOWN_INVALID = exports.Y_SLEEPCOUNTDOWN_INVALID = _yocto_api.YAPI.INVALID_INT;
  var Y_NEXTWAKEUP_INVALID = exports.Y_NEXTWAKEUP_INVALID = _yocto_api.YAPI.INVALID_LONG;
  var Y_RTCTIME_INVALID = exports.Y_RTCTIME_INVALID = _yocto_api.YAPI.INVALID_LONG;
  class YWakeUpMonitor extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'WakeUpMonitor';
      this._powerDuration = Y_POWERDURATION_INVALID;
      this._sleepCountdown = Y_SLEEPCOUNTDOWN_INVALID;
      this._nextWakeUp = Y_NEXTWAKEUP_INVALID;
      this._wakeUpReason = Y_WAKEUPREASON_INVALID;
      this._wakeUpState = Y_WAKEUPSTATE_INVALID;
      this._rtcTime = Y_RTCTIME_INVALID;
      this._endOfTime = 2145960000;
      this.imm_setConst({
        POWERDURATION_INVALID: _yocto_api.YAPI.INVALID_INT,
        SLEEPCOUNTDOWN_INVALID: _yocto_api.YAPI.INVALID_INT,
        NEXTWAKEUP_INVALID: _yocto_api.YAPI.INVALID_LONG,
        WAKEUPREASON_USBPOWER: 0,
        WAKEUPREASON_EXTPOWER: 1,
        WAKEUPREASON_ENDOFSLEEP: 2,
        WAKEUPREASON_EXTSIG1: 3,
        WAKEUPREASON_SCHEDULE1: 4,
        WAKEUPREASON_SCHEDULE2: 5,
        WAKEUPREASON_INVALID: -1,
        WAKEUPSTATE_SLEEPING: 0,
        WAKEUPSTATE_AWAKE: 1,
        WAKEUPSTATE_INVALID: -1,
        RTCTIME_INVALID: _yocto_api.YAPI.INVALID_LONG
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YWakeUpMonitorProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'powerDuration':
          this._powerDuration = parseInt(val);
          return 1;
        case 'sleepCountdown':
          this._sleepCountdown = parseInt(val);
          return 1;
        case 'nextWakeUp':
          this._nextWakeUp = parseInt(val);
          return 1;
        case 'wakeUpReason':
          this._wakeUpReason = parseInt(val);
          return 1;
        case 'wakeUpState':
          this._wakeUpState = parseInt(val);
          return 1;
        case 'rtcTime':
          this._rtcTime = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_powerDuration() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_POWERDURATION_INVALID;
          }
        }
        return _this2._powerDuration;
      })();
    }
    set_powerDuration(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this3._setAttr('powerDuration', rest_val);
      })();
    }
    get_sleepCountdown() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_SLEEPCOUNTDOWN_INVALID;
          }
        }
        return _this4._sleepCountdown;
      })();
    }
    set_sleepCountdown(newval) {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this5._setAttr('sleepCountdown', rest_val);
      })();
    }
    get_nextWakeUp() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_NEXTWAKEUP_INVALID;
          }
        }
        return _this6._nextWakeUp;
      })();
    }
    set_nextWakeUp(newval) {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this7._setAttr('nextWakeUp', rest_val);
      })();
    }
    get_wakeUpReason() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        if (_this8._cacheExpiration <= _this8._yapi.GetTickCount()) {
          if ((yield _this8.load(_this8._yapi.defaultCacheValidity)) != _this8._yapi.SUCCESS) {
            return Y_WAKEUPREASON_INVALID;
          }
        }
        return _this8._wakeUpReason;
      })();
    }
    get_wakeUpState() {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        if (_this9._cacheExpiration <= _this9._yapi.GetTickCount()) {
          if ((yield _this9.load(_this9._yapi.defaultCacheValidity)) != _this9._yapi.SUCCESS) {
            return Y_WAKEUPSTATE_INVALID;
          }
        }
        return _this9._wakeUpState;
      })();
    }
    set_wakeUpState(newval) {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this10._setAttr('wakeUpState', rest_val);
      })();
    }
    get_rtcTime() {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        if (_this11._cacheExpiration <= _this11._yapi.GetTickCount()) {
          if ((yield _this11.load(_this11._yapi.defaultCacheValidity)) != _this11._yapi.SUCCESS) {
            return Y_RTCTIME_INVALID;
          }
        }
        return _this11._rtcTime;
      })();
    }
    static FindWakeUpMonitor(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('WakeUpMonitor', func);
      if (obj == null) {
        obj = new YWakeUpMonitor(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('WakeUpMonitor', func, obj);
      }
      return obj;
    }
    static FindWakeUpMonitorInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'WakeUpMonitor', func);
      if (obj == null) {
        obj = new YWakeUpMonitor(yctx, func);
        _yocto_api.YFunction._AddToCache('WakeUpMonitor', func, obj);
      }
      return obj;
    }
    wakeUp() {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        return yield _this12.set_wakeUpState(Y_WAKEUPSTATE_AWAKE);
      })();
    }
    sleep(secBeforeSleep) {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        let currTime;
        currTime = yield _this13.get_rtcTime();
        if (!(currTime != 0)) {
          return _this13._throw(_this13._yapi.RTC_NOT_READY, 'RTC time not set', _this13._yapi.RTC_NOT_READY);
        }
        yield _this13.set_nextWakeUp(_this13._endOfTime);
        yield _this13.set_sleepCountdown(secBeforeSleep);
        return _this13._yapi.SUCCESS;
      })();
    }
    sleepFor(secUntilWakeUp, secBeforeSleep) {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        let currTime;
        currTime = yield _this14.get_rtcTime();
        if (!(currTime != 0)) {
          return _this14._throw(_this14._yapi.RTC_NOT_READY, 'RTC time not set', _this14._yapi.RTC_NOT_READY);
        }
        yield _this14.set_nextWakeUp(currTime + secUntilWakeUp);
        yield _this14.set_sleepCountdown(secBeforeSleep);
        return _this14._yapi.SUCCESS;
      })();
    }
    sleepUntil(wakeUpTime, secBeforeSleep) {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        let currTime;
        currTime = yield _this15.get_rtcTime();
        if (!(currTime != 0)) {
          return _this15._throw(_this15._yapi.RTC_NOT_READY, 'RTC time not set', _this15._yapi.RTC_NOT_READY);
        }
        yield _this15.set_nextWakeUp(wakeUpTime);
        yield _this15.set_sleepCountdown(secBeforeSleep);
        return _this15._yapi.SUCCESS;
      })();
    }
    resetSleepCountDown() {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        yield _this16.set_sleepCountdown(0);
        yield _this16.set_nextWakeUp(0);
        return _this16._yapi.SUCCESS;
      })();
    }
    nextWakeUpMonitor() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YWakeUpMonitor.FindWakeUpMonitorInContext(this._yapi, next_hwid);
    }
    static FirstWakeUpMonitor() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('WakeUpMonitor');
      if (next_hwid == null)
        return null;
      return YWakeUpMonitor.FindWakeUpMonitor(next_hwid);
    }
    static FirstWakeUpMonitorInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('WakeUpMonitor');
      if (next_hwid == null)
        return null;
      return YWakeUpMonitor.FindWakeUpMonitorInContext(yctx, next_hwid);
    }
  }
  exports.YWakeUpMonitor = YWakeUpMonitor;
  class YWakeUpMonitorProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_powerDuration() {
      return this.liveFunc._powerDuration;
    }
    set_powerDuration(newval) {
      this.liveFunc.set_powerDuration(newval);
      return this._yapi.SUCCESS;
    }
    get_sleepCountdown() {
      return this.liveFunc._sleepCountdown;
    }
    set_sleepCountdown(newval) {
      this.liveFunc.set_sleepCountdown(newval);
      return this._yapi.SUCCESS;
    }
    get_nextWakeUp() {
      return this.liveFunc._nextWakeUp;
    }
    set_nextWakeUp(newval) {
      this.liveFunc.set_nextWakeUp(newval);
      return this._yapi.SUCCESS;
    }
    get_wakeUpReason() {
      return this.liveFunc._wakeUpReason;
    }
    get_wakeUpState() {
      return this.liveFunc._wakeUpState;
    }
    set_wakeUpState(newval) {
      this.liveFunc.set_wakeUpState(newval);
      return this._yapi.SUCCESS;
    }
    get_rtcTime() {
      return this.liveFunc._rtcTime;
    }
    wakeUp() {
      this.liveFunc.wakeUp();
      return _yocto_api.YAPI_SUCCESS;
    }
    sleep(secBeforeSleep) {
      this.liveFunc.sleep(secBeforeSleep);
      return _yocto_api.YAPI_SUCCESS;
    }
    sleepFor(secUntilWakeUp, secBeforeSleep) {
      this.liveFunc.sleepFor(secUntilWakeUp, secBeforeSleep);
      return _yocto_api.YAPI_SUCCESS;
    }
    sleepUntil(wakeUpTime, secBeforeSleep) {
      this.liveFunc.sleepUntil(wakeUpTime, secBeforeSleep);
      return _yocto_api.YAPI_SUCCESS;
    }
    resetSleepCountDown() {
      this.liveFunc.resetSleepCountDown();
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YWakeUpMonitorProxy = YWakeUpMonitorProxy;
  function yFindWakeUpMonitor(func) {
    return YWakeUpMonitor.FindWakeUpMonitor(func);
  }
  function yFirstWakeUpMonitor() {
    return YWakeUpMonitor.FirstWakeUpMonitor();
  }
  return module.exports;
});

$__System.registerDynamic("36", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YWakeUpScheduleProxy = exports.YWakeUpSchedule = exports.Y_NEXTOCCURENCE_INVALID = exports.Y_MONTHS_INVALID = exports.Y_MONTHDAYS_INVALID = exports.Y_WEEKDAYS_INVALID = exports.Y_HOURS_INVALID = exports.Y_MINUTESB_INVALID = exports.Y_MINUTESA_INVALID = undefined;
  exports.yFindWakeUpSchedule = yFindWakeUpSchedule;
  exports.yFirstWakeUpSchedule = yFirstWakeUpSchedule;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_MINUTESA_INVALID = exports.Y_MINUTESA_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_MINUTESB_INVALID = exports.Y_MINUTESB_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_HOURS_INVALID = exports.Y_HOURS_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_WEEKDAYS_INVALID = exports.Y_WEEKDAYS_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_MONTHDAYS_INVALID = exports.Y_MONTHDAYS_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_MONTHS_INVALID = exports.Y_MONTHS_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_NEXTOCCURENCE_INVALID = exports.Y_NEXTOCCURENCE_INVALID = _yocto_api.YAPI.INVALID_LONG;
  class YWakeUpSchedule extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'WakeUpSchedule';
      this._minutesA = Y_MINUTESA_INVALID;
      this._minutesB = Y_MINUTESB_INVALID;
      this._hours = Y_HOURS_INVALID;
      this._weekDays = Y_WEEKDAYS_INVALID;
      this._monthDays = Y_MONTHDAYS_INVALID;
      this._months = Y_MONTHS_INVALID;
      this._nextOccurence = Y_NEXTOCCURENCE_INVALID;
      this.imm_setConst({
        MINUTESA_INVALID: _yocto_api.YAPI.INVALID_UINT,
        MINUTESB_INVALID: _yocto_api.YAPI.INVALID_UINT,
        HOURS_INVALID: _yocto_api.YAPI.INVALID_UINT,
        WEEKDAYS_INVALID: _yocto_api.YAPI.INVALID_UINT,
        MONTHDAYS_INVALID: _yocto_api.YAPI.INVALID_UINT,
        MONTHS_INVALID: _yocto_api.YAPI.INVALID_UINT,
        NEXTOCCURENCE_INVALID: _yocto_api.YAPI.INVALID_LONG
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YWakeUpScheduleProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'minutesA':
          this._minutesA = parseInt(val);
          return 1;
        case 'minutesB':
          this._minutesB = parseInt(val);
          return 1;
        case 'hours':
          this._hours = parseInt(val);
          return 1;
        case 'weekDays':
          this._weekDays = parseInt(val);
          return 1;
        case 'monthDays':
          this._monthDays = parseInt(val);
          return 1;
        case 'months':
          this._months = parseInt(val);
          return 1;
        case 'nextOccurence':
          this._nextOccurence = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_minutesA() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_MINUTESA_INVALID;
          }
        }
        return _this2._minutesA;
      })();
    }
    set_minutesA(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this3._setAttr('minutesA', rest_val);
      })();
    }
    get_minutesB() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_MINUTESB_INVALID;
          }
        }
        return _this4._minutesB;
      })();
    }
    set_minutesB(newval) {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this5._setAttr('minutesB', rest_val);
      })();
    }
    get_hours() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_HOURS_INVALID;
          }
        }
        return _this6._hours;
      })();
    }
    set_hours(newval) {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this7._setAttr('hours', rest_val);
      })();
    }
    get_weekDays() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        if (_this8._cacheExpiration <= _this8._yapi.GetTickCount()) {
          if ((yield _this8.load(_this8._yapi.defaultCacheValidity)) != _this8._yapi.SUCCESS) {
            return Y_WEEKDAYS_INVALID;
          }
        }
        return _this8._weekDays;
      })();
    }
    set_weekDays(newval) {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this9._setAttr('weekDays', rest_val);
      })();
    }
    get_monthDays() {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        if (_this10._cacheExpiration <= _this10._yapi.GetTickCount()) {
          if ((yield _this10.load(_this10._yapi.defaultCacheValidity)) != _this10._yapi.SUCCESS) {
            return Y_MONTHDAYS_INVALID;
          }
        }
        return _this10._monthDays;
      })();
    }
    set_monthDays(newval) {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this11._setAttr('monthDays', rest_val);
      })();
    }
    get_months() {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        if (_this12._cacheExpiration <= _this12._yapi.GetTickCount()) {
          if ((yield _this12.load(_this12._yapi.defaultCacheValidity)) != _this12._yapi.SUCCESS) {
            return Y_MONTHS_INVALID;
          }
        }
        return _this12._months;
      })();
    }
    set_months(newval) {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this13._setAttr('months', rest_val);
      })();
    }
    get_nextOccurence() {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        if (_this14._cacheExpiration <= _this14._yapi.GetTickCount()) {
          if ((yield _this14.load(_this14._yapi.defaultCacheValidity)) != _this14._yapi.SUCCESS) {
            return Y_NEXTOCCURENCE_INVALID;
          }
        }
        return _this14._nextOccurence;
      })();
    }
    static FindWakeUpSchedule(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('WakeUpSchedule', func);
      if (obj == null) {
        obj = new YWakeUpSchedule(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('WakeUpSchedule', func, obj);
      }
      return obj;
    }
    static FindWakeUpScheduleInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'WakeUpSchedule', func);
      if (obj == null) {
        obj = new YWakeUpSchedule(yctx, func);
        _yocto_api.YFunction._AddToCache('WakeUpSchedule', func, obj);
      }
      return obj;
    }
    get_minutes() {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        let res;
        res = yield _this15.get_minutesB();
        res = res << 30;
        res = res + (yield _this15.get_minutesA());
        return res;
      })();
    }
    set_minutes(bitmap) {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        yield _this16.set_minutesA(bitmap & 0x3fffffff);
        bitmap = bitmap >> 30;
        return yield _this16.set_minutesB(bitmap & 0x3fffffff);
      })();
    }
    nextWakeUpSchedule() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YWakeUpSchedule.FindWakeUpScheduleInContext(this._yapi, next_hwid);
    }
    static FirstWakeUpSchedule() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('WakeUpSchedule');
      if (next_hwid == null)
        return null;
      return YWakeUpSchedule.FindWakeUpSchedule(next_hwid);
    }
    static FirstWakeUpScheduleInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('WakeUpSchedule');
      if (next_hwid == null)
        return null;
      return YWakeUpSchedule.FindWakeUpScheduleInContext(yctx, next_hwid);
    }
  }
  exports.YWakeUpSchedule = YWakeUpSchedule;
  class YWakeUpScheduleProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_minutesA() {
      return this.liveFunc._minutesA;
    }
    set_minutesA(newval) {
      this.liveFunc.set_minutesA(newval);
      return this._yapi.SUCCESS;
    }
    get_minutesB() {
      return this.liveFunc._minutesB;
    }
    set_minutesB(newval) {
      this.liveFunc.set_minutesB(newval);
      return this._yapi.SUCCESS;
    }
    get_hours() {
      return this.liveFunc._hours;
    }
    set_hours(newval) {
      this.liveFunc.set_hours(newval);
      return this._yapi.SUCCESS;
    }
    get_weekDays() {
      return this.liveFunc._weekDays;
    }
    set_weekDays(newval) {
      this.liveFunc.set_weekDays(newval);
      return this._yapi.SUCCESS;
    }
    get_monthDays() {
      return this.liveFunc._monthDays;
    }
    set_monthDays(newval) {
      this.liveFunc.set_monthDays(newval);
      return this._yapi.SUCCESS;
    }
    get_months() {
      return this.liveFunc._months;
    }
    set_months(newval) {
      this.liveFunc.set_months(newval);
      return this._yapi.SUCCESS;
    }
    get_nextOccurence() {
      return this.liveFunc._nextOccurence;
    }
  }
  exports.YWakeUpScheduleProxy = YWakeUpScheduleProxy;
  function yFindWakeUpSchedule(func) {
    return YWakeUpSchedule.FindWakeUpSchedule(func);
  }
  function yFirstWakeUpSchedule() {
    return YWakeUpSchedule.FirstWakeUpSchedule();
  }
  return module.exports;
});

$__System.registerDynamic("37", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YWatchdogProxy = exports.YWatchdog = exports.Y_TRIGGERDURATION_INVALID = exports.Y_TRIGGERDELAY_INVALID = exports.Y_COUNTDOWN_INVALID = exports.Y_DELAYEDPULSETIMER_INVALID = exports.Y_PULSETIMER_INVALID = exports.Y_MAXTIMEONSTATEB_INVALID = exports.Y_MAXTIMEONSTATEA_INVALID = exports.Y_RUNNING_INVALID = exports.Y_RUNNING_ON = exports.Y_RUNNING_OFF = exports.Y_AUTOSTART_INVALID = exports.Y_AUTOSTART_ON = exports.Y_AUTOSTART_OFF = exports.Y_OUTPUT_INVALID = exports.Y_OUTPUT_ON = exports.Y_OUTPUT_OFF = exports.Y_STATEATPOWERON_INVALID = exports.Y_STATEATPOWERON_B = exports.Y_STATEATPOWERON_A = exports.Y_STATEATPOWERON_UNCHANGED = exports.Y_STATE_INVALID = exports.Y_STATE_B = exports.Y_STATE_A = undefined;
  exports.yFindWatchdog = yFindWatchdog;
  exports.yFirstWatchdog = yFirstWatchdog;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_STATE_A = exports.Y_STATE_A = 0;
  var Y_STATE_B = exports.Y_STATE_B = 1;
  var Y_STATE_INVALID = exports.Y_STATE_INVALID = -1;
  var Y_STATEATPOWERON_UNCHANGED = exports.Y_STATEATPOWERON_UNCHANGED = 0;
  var Y_STATEATPOWERON_A = exports.Y_STATEATPOWERON_A = 1;
  var Y_STATEATPOWERON_B = exports.Y_STATEATPOWERON_B = 2;
  var Y_STATEATPOWERON_INVALID = exports.Y_STATEATPOWERON_INVALID = -1;
  var Y_OUTPUT_OFF = exports.Y_OUTPUT_OFF = 0;
  var Y_OUTPUT_ON = exports.Y_OUTPUT_ON = 1;
  var Y_OUTPUT_INVALID = exports.Y_OUTPUT_INVALID = -1;
  var Y_AUTOSTART_OFF = exports.Y_AUTOSTART_OFF = 0;
  var Y_AUTOSTART_ON = exports.Y_AUTOSTART_ON = 1;
  var Y_AUTOSTART_INVALID = exports.Y_AUTOSTART_INVALID = -1;
  var Y_RUNNING_OFF = exports.Y_RUNNING_OFF = 0;
  var Y_RUNNING_ON = exports.Y_RUNNING_ON = 1;
  var Y_RUNNING_INVALID = exports.Y_RUNNING_INVALID = -1;
  var Y_MAXTIMEONSTATEA_INVALID = exports.Y_MAXTIMEONSTATEA_INVALID = _yocto_api.YAPI.INVALID_LONG;
  var Y_MAXTIMEONSTATEB_INVALID = exports.Y_MAXTIMEONSTATEB_INVALID = _yocto_api.YAPI.INVALID_LONG;
  var Y_PULSETIMER_INVALID = exports.Y_PULSETIMER_INVALID = _yocto_api.YAPI.INVALID_LONG;
  var Y_DELAYEDPULSETIMER_INVALID = exports.Y_DELAYEDPULSETIMER_INVALID = null;
  var Y_COUNTDOWN_INVALID = exports.Y_COUNTDOWN_INVALID = _yocto_api.YAPI.INVALID_LONG;
  var Y_TRIGGERDELAY_INVALID = exports.Y_TRIGGERDELAY_INVALID = _yocto_api.YAPI.INVALID_LONG;
  var Y_TRIGGERDURATION_INVALID = exports.Y_TRIGGERDURATION_INVALID = _yocto_api.YAPI.INVALID_LONG;
  class YWatchdog extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Watchdog';
      this._state = Y_STATE_INVALID;
      this._stateAtPowerOn = Y_STATEATPOWERON_INVALID;
      this._maxTimeOnStateA = Y_MAXTIMEONSTATEA_INVALID;
      this._maxTimeOnStateB = Y_MAXTIMEONSTATEB_INVALID;
      this._output = Y_OUTPUT_INVALID;
      this._pulseTimer = Y_PULSETIMER_INVALID;
      this._delayedPulseTimer = Y_DELAYEDPULSETIMER_INVALID;
      this._countdown = Y_COUNTDOWN_INVALID;
      this._autoStart = Y_AUTOSTART_INVALID;
      this._running = Y_RUNNING_INVALID;
      this._triggerDelay = Y_TRIGGERDELAY_INVALID;
      this._triggerDuration = Y_TRIGGERDURATION_INVALID;
      this.imm_setConst({
        STATE_A: 0,
        STATE_B: 1,
        STATE_INVALID: -1,
        STATEATPOWERON_UNCHANGED: 0,
        STATEATPOWERON_A: 1,
        STATEATPOWERON_B: 2,
        STATEATPOWERON_INVALID: -1,
        MAXTIMEONSTATEA_INVALID: _yocto_api.YAPI.INVALID_LONG,
        MAXTIMEONSTATEB_INVALID: _yocto_api.YAPI.INVALID_LONG,
        OUTPUT_OFF: 0,
        OUTPUT_ON: 1,
        OUTPUT_INVALID: -1,
        PULSETIMER_INVALID: _yocto_api.YAPI.INVALID_LONG,
        COUNTDOWN_INVALID: _yocto_api.YAPI.INVALID_LONG,
        AUTOSTART_OFF: 0,
        AUTOSTART_ON: 1,
        AUTOSTART_INVALID: -1,
        RUNNING_OFF: 0,
        RUNNING_ON: 1,
        RUNNING_INVALID: -1,
        TRIGGERDELAY_INVALID: _yocto_api.YAPI.INVALID_LONG,
        TRIGGERDURATION_INVALID: _yocto_api.YAPI.INVALID_LONG
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YWatchdogProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'state':
          this._state = parseInt(val);
          return 1;
        case 'stateAtPowerOn':
          this._stateAtPowerOn = parseInt(val);
          return 1;
        case 'maxTimeOnStateA':
          this._maxTimeOnStateA = parseInt(val);
          return 1;
        case 'maxTimeOnStateB':
          this._maxTimeOnStateB = parseInt(val);
          return 1;
        case 'output':
          this._output = parseInt(val);
          return 1;
        case 'pulseTimer':
          this._pulseTimer = parseInt(val);
          return 1;
        case 'delayedPulseTimer':
          this._delayedPulseTimer = val;
          return 1;
        case 'countdown':
          this._countdown = parseInt(val);
          return 1;
        case 'autoStart':
          this._autoStart = parseInt(val);
          return 1;
        case 'running':
          this._running = parseInt(val);
          return 1;
        case 'triggerDelay':
          this._triggerDelay = parseInt(val);
          return 1;
        case 'triggerDuration':
          this._triggerDuration = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_state() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_STATE_INVALID;
          }
        }
        return _this2._state;
      })();
    }
    set_state(newval) {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this3._setAttr('state', rest_val);
      })();
    }
    get_stateAtPowerOn() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_STATEATPOWERON_INVALID;
          }
        }
        return _this4._stateAtPowerOn;
      })();
    }
    set_stateAtPowerOn(newval) {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this5._setAttr('stateAtPowerOn', rest_val);
      })();
    }
    get_maxTimeOnStateA() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_MAXTIMEONSTATEA_INVALID;
          }
        }
        return _this6._maxTimeOnStateA;
      })();
    }
    set_maxTimeOnStateA(newval) {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this7._setAttr('maxTimeOnStateA', rest_val);
      })();
    }
    get_maxTimeOnStateB() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        if (_this8._cacheExpiration <= _this8._yapi.GetTickCount()) {
          if ((yield _this8.load(_this8._yapi.defaultCacheValidity)) != _this8._yapi.SUCCESS) {
            return Y_MAXTIMEONSTATEB_INVALID;
          }
        }
        return _this8._maxTimeOnStateB;
      })();
    }
    set_maxTimeOnStateB(newval) {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this9._setAttr('maxTimeOnStateB', rest_val);
      })();
    }
    get_output() {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        if (_this10._cacheExpiration <= _this10._yapi.GetTickCount()) {
          if ((yield _this10.load(_this10._yapi.defaultCacheValidity)) != _this10._yapi.SUCCESS) {
            return Y_OUTPUT_INVALID;
          }
        }
        return _this10._output;
      })();
    }
    set_output(newval) {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this11._setAttr('output', rest_val);
      })();
    }
    get_pulseTimer() {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        if (_this12._cacheExpiration <= _this12._yapi.GetTickCount()) {
          if ((yield _this12.load(_this12._yapi.defaultCacheValidity)) != _this12._yapi.SUCCESS) {
            return Y_PULSETIMER_INVALID;
          }
        }
        return _this12._pulseTimer;
      })();
    }
    set_pulseTimer(newval) {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this13._setAttr('pulseTimer', rest_val);
      })();
    }
    pulse(ms_duration) {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(ms_duration);
        return yield _this14._setAttr('pulseTimer', rest_val);
      })();
    }
    get_delayedPulseTimer() {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        if (_this15._cacheExpiration <= _this15._yapi.GetTickCount()) {
          if ((yield _this15.load(_this15._yapi.defaultCacheValidity)) != _this15._yapi.SUCCESS) {
            return Y_DELAYEDPULSETIMER_INVALID;
          }
        }
        return _this15._delayedPulseTimer;
      })();
    }
    set_delayedPulseTimer(newval) {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval.target) + ':' + String(newval.ms);
        return yield _this16._setAttr('delayedPulseTimer', rest_val);
      })();
    }
    delayedPulse(ms_delay, ms_duration) {
      var _this17 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(ms_delay) + ':' + String(ms_duration);
        return yield _this17._setAttr('delayedPulseTimer', rest_val);
      })();
    }
    get_countdown() {
      var _this18 = this;
      return _asyncToGenerator(function*() {
        if (_this18._cacheExpiration <= _this18._yapi.GetTickCount()) {
          if ((yield _this18.load(_this18._yapi.defaultCacheValidity)) != _this18._yapi.SUCCESS) {
            return Y_COUNTDOWN_INVALID;
          }
        }
        return _this18._countdown;
      })();
    }
    get_autoStart() {
      var _this19 = this;
      return _asyncToGenerator(function*() {
        if (_this19._cacheExpiration <= _this19._yapi.GetTickCount()) {
          if ((yield _this19.load(_this19._yapi.defaultCacheValidity)) != _this19._yapi.SUCCESS) {
            return Y_AUTOSTART_INVALID;
          }
        }
        return _this19._autoStart;
      })();
    }
    set_autoStart(newval) {
      var _this20 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this20._setAttr('autoStart', rest_val);
      })();
    }
    get_running() {
      var _this21 = this;
      return _asyncToGenerator(function*() {
        if (_this21._cacheExpiration <= _this21._yapi.GetTickCount()) {
          if ((yield _this21.load(_this21._yapi.defaultCacheValidity)) != _this21._yapi.SUCCESS) {
            return Y_RUNNING_INVALID;
          }
        }
        return _this21._running;
      })();
    }
    set_running(newval) {
      var _this22 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this22._setAttr('running', rest_val);
      })();
    }
    resetWatchdog() {
      var _this23 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = '1';
        return yield _this23._setAttr('running', rest_val);
      })();
    }
    get_triggerDelay() {
      var _this24 = this;
      return _asyncToGenerator(function*() {
        if (_this24._cacheExpiration <= _this24._yapi.GetTickCount()) {
          if ((yield _this24.load(_this24._yapi.defaultCacheValidity)) != _this24._yapi.SUCCESS) {
            return Y_TRIGGERDELAY_INVALID;
          }
        }
        return _this24._triggerDelay;
      })();
    }
    set_triggerDelay(newval) {
      var _this25 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this25._setAttr('triggerDelay', rest_val);
      })();
    }
    get_triggerDuration() {
      var _this26 = this;
      return _asyncToGenerator(function*() {
        if (_this26._cacheExpiration <= _this26._yapi.GetTickCount()) {
          if ((yield _this26.load(_this26._yapi.defaultCacheValidity)) != _this26._yapi.SUCCESS) {
            return Y_TRIGGERDURATION_INVALID;
          }
        }
        return _this26._triggerDuration;
      })();
    }
    set_triggerDuration(newval) {
      var _this27 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this27._setAttr('triggerDuration', rest_val);
      })();
    }
    static FindWatchdog(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Watchdog', func);
      if (obj == null) {
        obj = new YWatchdog(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Watchdog', func, obj);
      }
      return obj;
    }
    static FindWatchdogInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Watchdog', func);
      if (obj == null) {
        obj = new YWatchdog(yctx, func);
        _yocto_api.YFunction._AddToCache('Watchdog', func, obj);
      }
      return obj;
    }
    nextWatchdog() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YWatchdog.FindWatchdogInContext(this._yapi, next_hwid);
    }
    static FirstWatchdog() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Watchdog');
      if (next_hwid == null)
        return null;
      return YWatchdog.FindWatchdog(next_hwid);
    }
    static FirstWatchdogInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Watchdog');
      if (next_hwid == null)
        return null;
      return YWatchdog.FindWatchdogInContext(yctx, next_hwid);
    }
  }
  exports.YWatchdog = YWatchdog;
  class YWatchdogProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_state() {
      return this.liveFunc._state;
    }
    set_state(newval) {
      this.liveFunc.set_state(newval);
      return this._yapi.SUCCESS;
    }
    get_stateAtPowerOn() {
      return this.liveFunc._stateAtPowerOn;
    }
    set_stateAtPowerOn(newval) {
      this.liveFunc.set_stateAtPowerOn(newval);
      return this._yapi.SUCCESS;
    }
    get_maxTimeOnStateA() {
      return this.liveFunc._maxTimeOnStateA;
    }
    set_maxTimeOnStateA(newval) {
      this.liveFunc.set_maxTimeOnStateA(newval);
      return this._yapi.SUCCESS;
    }
    get_maxTimeOnStateB() {
      return this.liveFunc._maxTimeOnStateB;
    }
    set_maxTimeOnStateB(newval) {
      this.liveFunc.set_maxTimeOnStateB(newval);
      return this._yapi.SUCCESS;
    }
    get_output() {
      return this.liveFunc._output;
    }
    set_output(newval) {
      this.liveFunc.set_output(newval);
      return this._yapi.SUCCESS;
    }
    get_pulseTimer() {
      return this.liveFunc._pulseTimer;
    }
    set_pulseTimer(newval) {
      this.liveFunc.set_pulseTimer(newval);
      return this._yapi.SUCCESS;
    }
    get_delayedPulseTimer() {
      return this.liveFunc._delayedPulseTimer;
    }
    set_delayedPulseTimer(newval) {
      this.liveFunc.set_delayedPulseTimer(newval);
      return this._yapi.SUCCESS;
    }
    get_countdown() {
      return this.liveFunc._countdown;
    }
    get_autoStart() {
      return this.liveFunc._autoStart;
    }
    set_autoStart(newval) {
      this.liveFunc.set_autoStart(newval);
      return this._yapi.SUCCESS;
    }
    get_running() {
      return this.liveFunc._running;
    }
    set_running(newval) {
      this.liveFunc.set_running(newval);
      return this._yapi.SUCCESS;
    }
    get_triggerDelay() {
      return this.liveFunc._triggerDelay;
    }
    set_triggerDelay(newval) {
      this.liveFunc.set_triggerDelay(newval);
      return this._yapi.SUCCESS;
    }
    get_triggerDuration() {
      return this.liveFunc._triggerDuration;
    }
    set_triggerDuration(newval) {
      this.liveFunc.set_triggerDuration(newval);
      return this._yapi.SUCCESS;
    }
  }
  exports.YWatchdogProxy = YWatchdogProxy;
  function yFindWatchdog(func) {
    return YWatchdog.FindWatchdog(func);
  }
  function yFirstWatchdog() {
    return YWatchdog.FirstWatchdog();
  }
  return module.exports;
});

$__System.registerDynamic("3", [], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.yFindModule = yFindModule;
  exports.yFirstModule = yFirstModule;
  exports.yFindSensor = yFindSensor;
  exports.yFirstSensor = yFirstSensor;
  exports.yGetAPIVersion = yGetAPIVersion;
  exports.yInitAPI = yInitAPI;
  exports.yFreeAPI = yFreeAPI;
  exports.yDisableExceptions = yDisableExceptions;
  exports.yEnableExceptions = yEnableExceptions;
  exports.yRegisterHub = yRegisterHub;
  exports.yPreregisterHub = yPreregisterHub;
  exports.yUnregisterHub = yUnregisterHub;
  exports.yUpdateDeviceList = yUpdateDeviceList;
  exports.yHandleEvents = yHandleEvents;
  exports.ySleep = ySleep;
  exports.ySetTimeout = ySetTimeout;
  exports.yGetTickCount = yGetTickCount;
  exports.yCheckLogicalName = yCheckLogicalName;
  exports.yRegisterDeviceArrivalCallback = yRegisterDeviceArrivalCallback;
  exports.yRegisterDeviceChangeCallback = yRegisterDeviceChangeCallback;
  exports.yRegisterDeviceRemovalCallback = yRegisterDeviceRemovalCallback;
  exports.yRegisterCalibrationHandler = yRegisterCalibrationHandler;
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  const YAPI_SUCCESS = exports.YAPI_SUCCESS = 0;
  const YAPI_NOT_INITIALIZED = exports.YAPI_NOT_INITIALIZED = -1;
  const YAPI_INVALID_ARGUMENT = exports.YAPI_INVALID_ARGUMENT = -2;
  const YAPI_NOT_SUPPORTED = exports.YAPI_NOT_SUPPORTED = -3;
  const YAPI_DEVICE_NOT_FOUND = exports.YAPI_DEVICE_NOT_FOUND = -4;
  const YAPI_VERSION_MISMATCH = exports.YAPI_VERSION_MISMATCH = -5;
  const YAPI_DEVICE_BUSY = exports.YAPI_DEVICE_BUSY = -6;
  const YAPI_TIMEOUT = exports.YAPI_TIMEOUT = -7;
  const YAPI_IO_ERROR = exports.YAPI_IO_ERROR = -8;
  const YAPI_NO_MORE_DATA = exports.YAPI_NO_MORE_DATA = -9;
  const YAPI_EXHAUSTED = exports.YAPI_EXHAUSTED = -10;
  const YAPI_DOUBLE_ACCES = exports.YAPI_DOUBLE_ACCES = -11;
  const YAPI_UNAUTHORIZED = exports.YAPI_UNAUTHORIZED = -12;
  const YAPI_RTC_NOT_READY = exports.YAPI_RTC_NOT_READY = -13;
  const YAPI_FILE_NOT_FOUND = exports.YAPI_FILE_NOT_FOUND = -14;
  const YAPI_INVALID_INT = exports.YAPI_INVALID_INT = 0x7fffffff;
  const YAPI_INVALID_UINT = exports.YAPI_INVALID_UINT = -1;
  const YAPI_INVALID_LONG = exports.YAPI_INVALID_LONG = 0x7fffffffffffffff;
  const YAPI_INVALID_DOUBLE = exports.YAPI_INVALID_DOUBLE = -Number.MAX_VALUE;
  const YAPI_INVALID_STRING = exports.YAPI_INVALID_STRING = '!INVALID!';
  const Y_FUNCTIONDESCRIPTOR_INVALID = exports.Y_FUNCTIONDESCRIPTOR_INVALID = YAPI_INVALID_STRING;
  const Y_HARDWAREID_INVALID = exports.Y_HARDWAREID_INVALID = YAPI_INVALID_STRING;
  const Y_FUNCTIONID_INVALID = exports.Y_FUNCTIONID_INVALID = YAPI_INVALID_STRING;
  const Y_FRIENDLYNAME_INVALID = exports.Y_FRIENDLYNAME_INVALID = YAPI_INVALID_STRING;
  var Y_LOGICALNAME_INVALID = exports.Y_LOGICALNAME_INVALID = YAPI_INVALID_STRING;
  var Y_ADVERTISEDVALUE_INVALID = exports.Y_ADVERTISEDVALUE_INVALID = YAPI_INVALID_STRING;
  var Y_PERSISTENTSETTINGS_LOADED = exports.Y_PERSISTENTSETTINGS_LOADED = 0;
  var Y_PERSISTENTSETTINGS_SAVED = exports.Y_PERSISTENTSETTINGS_SAVED = 1;
  var Y_PERSISTENTSETTINGS_MODIFIED = exports.Y_PERSISTENTSETTINGS_MODIFIED = 2;
  var Y_PERSISTENTSETTINGS_INVALID = exports.Y_PERSISTENTSETTINGS_INVALID = -1;
  var Y_BEACON_OFF = exports.Y_BEACON_OFF = 0;
  var Y_BEACON_ON = exports.Y_BEACON_ON = 1;
  var Y_BEACON_INVALID = exports.Y_BEACON_INVALID = -1;
  var Y_PRODUCTNAME_INVALID = exports.Y_PRODUCTNAME_INVALID = YAPI_INVALID_STRING;
  var Y_SERIALNUMBER_INVALID = exports.Y_SERIALNUMBER_INVALID = YAPI_INVALID_STRING;
  var Y_PRODUCTID_INVALID = exports.Y_PRODUCTID_INVALID = YAPI_INVALID_UINT;
  var Y_PRODUCTRELEASE_INVALID = exports.Y_PRODUCTRELEASE_INVALID = YAPI_INVALID_UINT;
  var Y_FIRMWARERELEASE_INVALID = exports.Y_FIRMWARERELEASE_INVALID = YAPI_INVALID_STRING;
  var Y_LUMINOSITY_INVALID = exports.Y_LUMINOSITY_INVALID = YAPI_INVALID_UINT;
  var Y_UPTIME_INVALID = exports.Y_UPTIME_INVALID = YAPI_INVALID_LONG;
  var Y_USBCURRENT_INVALID = exports.Y_USBCURRENT_INVALID = YAPI_INVALID_UINT;
  var Y_REBOOTCOUNTDOWN_INVALID = exports.Y_REBOOTCOUNTDOWN_INVALID = YAPI_INVALID_INT;
  var Y_USERVAR_INVALID = exports.Y_USERVAR_INVALID = YAPI_INVALID_INT;
  var Y_UNIT_INVALID = exports.Y_UNIT_INVALID = YAPI_INVALID_STRING;
  var Y_CURRENTVALUE_INVALID = exports.Y_CURRENTVALUE_INVALID = YAPI_INVALID_DOUBLE;
  var Y_LOWESTVALUE_INVALID = exports.Y_LOWESTVALUE_INVALID = YAPI_INVALID_DOUBLE;
  var Y_HIGHESTVALUE_INVALID = exports.Y_HIGHESTVALUE_INVALID = YAPI_INVALID_DOUBLE;
  var Y_CURRENTRAWVALUE_INVALID = exports.Y_CURRENTRAWVALUE_INVALID = YAPI_INVALID_DOUBLE;
  var Y_LOGFREQUENCY_INVALID = exports.Y_LOGFREQUENCY_INVALID = YAPI_INVALID_STRING;
  var Y_REPORTFREQUENCY_INVALID = exports.Y_REPORTFREQUENCY_INVALID = YAPI_INVALID_STRING;
  var Y_CALIBRATIONPARAM_INVALID = exports.Y_CALIBRATIONPARAM_INVALID = YAPI_INVALID_STRING;
  var Y_RESOLUTION_INVALID = exports.Y_RESOLUTION_INVALID = YAPI_INVALID_DOUBLE;
  var Y_SENSORSTATE_INVALID = exports.Y_SENSORSTATE_INVALID = YAPI_INVALID_INT;
  const Y_DATA_INVALID = exports.Y_DATA_INVALID = YAPI_INVALID_DOUBLE;
  const Y_DURATION_INVALID = exports.Y_DURATION_INVALID = YAPI_INVALID_INT;
  const Y_DETECT_NONE = exports.Y_DETECT_NONE = 0;
  const Y_DETECT_USB = exports.Y_DETECT_USB = 1;
  const Y_DETECT_NET = exports.Y_DETECT_NET = 2;
  const Y_DETECT_ALL = exports.Y_DETECT_ALL = Y_DETECT_USB | Y_DETECT_NET;
  const YOCTO_CALIB_TYPE_OFS = 30;
  const NOTIFY_NETPKT_NAME = '0';
  const NOTIFY_NETPKT_CHILD = '2';
  const NOTIFY_NETPKT_FUNCNAME = '4';
  const NOTIFY_NETPKT_FUNCVAL = '5';
  const NOTIFY_NETPKT_LOG = '7';
  const NOTIFY_NETPKT_FUNCNAMEYDX = '8';
  const NOTIFY_NETPKT_FLUSHV2YDX = 't';
  const NOTIFY_NETPKT_FUNCV2YDX = 'u';
  const NOTIFY_NETPKT_TIMEV2YDX = 'v';
  const NOTIFY_NETPKT_DEVLOGYDX = 'w';
  const NOTIFY_NETPKT_TIMEVALYDX = 'x';
  const NOTIFY_NETPKT_FUNCVALYDX = 'y';
  const NOTIFY_NETPKT_TIMEAVGYDX = 'z';
  const NOTIFY_NETPKT_NOT_SYNC = '@';
  const NOTIFY_NETPKT_STOP = 10;
  const NOTIFY_V2_LEGACY = 0;
  const NOTIFY_V2_6RAWBYTES = 1;
  const NOTIFY_V2_TYPEDDATA = 2;
  const NOTIFY_V2_FLUSHGROUP = 3;
  const PUBVAL_LEGACY = 0;
  const PUBVAL_1RAWBYTE = 1;
  const PUBVAL_2RAWBYTES = 2;
  const PUBVAL_3RAWBYTES = 3;
  const PUBVAL_4RAWBYTES = 4;
  const PUBVAL_5RAWBYTES = 5;
  const PUBVAL_6RAWBYTES = 6;
  const PUBVAL_C_LONG = 7;
  const PUBVAL_C_FLOAT = 8;
  const PUBVAL_YOCTO_FLOAT_E3 = 9;
  const PUBVAL_YOCTO_FLOAT_E6 = 10;
  const YOCTO_PUBVAL_LEN = 16;
  const YOCTO_PUBVAL_SIZE = 6;
  const Y_BASETYPES = {
    Function: 0,
    Sensor: 1
  };
  class YErrorMsg {
    constructor(str_msg) {
      if (!str_msg)
        str_msg = '';
      this.msg = str_msg;
    }
  }
  exports.YErrorMsg = YErrorMsg;
  if (!Uint8Array.prototype.indexOf) {
    Uint8Array.prototype.indexOf = function(searchElement, fromIndex) {
      var k;
      var len = this.length >>> 0;
      if (len === 0) {
        return -1;
      }
      var n = +fromIndex || 0;
      if (n >= len) {
        return -1;
      }
      k = n >= 0 ? n : len + n;
      if (k < 0) {
        k = 0;
      }
      while (k < len) {
        if (this[k] === searchElement) {
          return k;
        }
        k++;
      }
      return -1;
    };
  }
  class Y_MD5Ctx {
    constructor() {
      this.buf = new Uint32Array(4);
      this.bits = new Uint32Array(2);
      this.inBuf = new ArrayBuffer(64);
      this.in8 = new Uint8Array(this.inBuf);
      this.in32 = new Uint32Array(this.inBuf);
      this.in32[0] = 1;
      this.bigEndian = this.in8[0] != 1;
      this.buf[0] = 0x67452301 >>> 0;
      this.buf[1] = 0xefcdab89 >>> 0;
      this.buf[2] = 0x98badcfe >>> 0;
      this.buf[3] = 0x10325476 >>> 0;
      this.bits[0] = 0;
      this.bits[1] = 0;
    }
    _byteReverseIn() {
      for (let i = 0; i < 16; i++) {
        let a = this.in32[i];
        this.in32[i] = (a >>> 24 | (a & 0xff) << 24 | (a & 0xff0000) >>> 8 | (a & 0xff00) << 8) >>> 0;
      }
    }
    _transform() {
      let F1 = function(x, y, z) {
        return (z ^ x & (y ^ z)) >>> 0;
      };
      let F2 = function(x, y, z) {
        return F1(z, x, y);
      };
      let F3 = function(x, y, z) {
        return (x ^ y ^ z) >>> 0;
      };
      let F4 = function(x, y, z) {
        return (y ^ (x | ~z)) >>> 0;
      };
      let MD5STEP = function(f, w, x, y, z, data, s) {
        w = w + f(x, y, z) + (data >>> 0) >>> 0;
        w = (w << s >>> 0 | w >>> 32 - s) >>> 0;
        return w + x >>> 0;
      };
      let a = this.buf[0];
      let b = this.buf[1];
      let c = this.buf[2];
      let d = this.buf[3];
      let dataIn = this.in32;
      a = MD5STEP(F1, a, b, c, d, dataIn[0] + 0xd76aa478, 7);
      d = MD5STEP(F1, d, a, b, c, dataIn[1] + 0xe8c7b756, 12);
      c = MD5STEP(F1, c, d, a, b, dataIn[2] + 0x242070db, 17);
      b = MD5STEP(F1, b, c, d, a, dataIn[3] + 0xc1bdceee, 22);
      a = MD5STEP(F1, a, b, c, d, dataIn[4] + 0xf57c0faf, 7);
      d = MD5STEP(F1, d, a, b, c, dataIn[5] + 0x4787c62a, 12);
      c = MD5STEP(F1, c, d, a, b, dataIn[6] + 0xa8304613, 17);
      b = MD5STEP(F1, b, c, d, a, dataIn[7] + 0xfd469501, 22);
      a = MD5STEP(F1, a, b, c, d, dataIn[8] + 0x698098d8, 7);
      d = MD5STEP(F1, d, a, b, c, dataIn[9] + 0x8b44f7af, 12);
      c = MD5STEP(F1, c, d, a, b, dataIn[10] + 0xffff5bb1, 17);
      b = MD5STEP(F1, b, c, d, a, dataIn[11] + 0x895cd7be, 22);
      a = MD5STEP(F1, a, b, c, d, dataIn[12] + 0x6b901122, 7);
      d = MD5STEP(F1, d, a, b, c, dataIn[13] + 0xfd987193, 12);
      c = MD5STEP(F1, c, d, a, b, dataIn[14] + 0xa679438e, 17);
      b = MD5STEP(F1, b, c, d, a, dataIn[15] + 0x49b40821, 22);
      a = MD5STEP(F2, a, b, c, d, dataIn[1] + 0xf61e2562, 5);
      d = MD5STEP(F2, d, a, b, c, dataIn[6] + 0xc040b340, 9);
      c = MD5STEP(F2, c, d, a, b, dataIn[11] + 0x265e5a51, 14);
      b = MD5STEP(F2, b, c, d, a, dataIn[0] + 0xe9b6c7aa, 20);
      a = MD5STEP(F2, a, b, c, d, dataIn[5] + 0xd62f105d, 5);
      d = MD5STEP(F2, d, a, b, c, dataIn[10] + 0x02441453, 9);
      c = MD5STEP(F2, c, d, a, b, dataIn[15] + 0xd8a1e681, 14);
      b = MD5STEP(F2, b, c, d, a, dataIn[4] + 0xe7d3fbc8, 20);
      a = MD5STEP(F2, a, b, c, d, dataIn[9] + 0x21e1cde6, 5);
      d = MD5STEP(F2, d, a, b, c, dataIn[14] + 0xc33707d6, 9);
      c = MD5STEP(F2, c, d, a, b, dataIn[3] + 0xf4d50d87, 14);
      b = MD5STEP(F2, b, c, d, a, dataIn[8] + 0x455a14ed, 20);
      a = MD5STEP(F2, a, b, c, d, dataIn[13] + 0xa9e3e905, 5);
      d = MD5STEP(F2, d, a, b, c, dataIn[2] + 0xfcefa3f8, 9);
      c = MD5STEP(F2, c, d, a, b, dataIn[7] + 0x676f02d9, 14);
      b = MD5STEP(F2, b, c, d, a, dataIn[12] + 0x8d2a4c8a, 20);
      a = MD5STEP(F3, a, b, c, d, dataIn[5] + 0xfffa3942, 4);
      d = MD5STEP(F3, d, a, b, c, dataIn[8] + 0x8771f681, 11);
      c = MD5STEP(F3, c, d, a, b, dataIn[11] + 0x6d9d6122, 16);
      b = MD5STEP(F3, b, c, d, a, dataIn[14] + 0xfde5380c, 23);
      a = MD5STEP(F3, a, b, c, d, dataIn[1] + 0xa4beea44, 4);
      d = MD5STEP(F3, d, a, b, c, dataIn[4] + 0x4bdecfa9, 11);
      c = MD5STEP(F3, c, d, a, b, dataIn[7] + 0xf6bb4b60, 16);
      b = MD5STEP(F3, b, c, d, a, dataIn[10] + 0xbebfbc70, 23);
      a = MD5STEP(F3, a, b, c, d, dataIn[13] + 0x289b7ec6, 4);
      d = MD5STEP(F3, d, a, b, c, dataIn[0] + 0xeaa127fa, 11);
      c = MD5STEP(F3, c, d, a, b, dataIn[3] + 0xd4ef3085, 16);
      b = MD5STEP(F3, b, c, d, a, dataIn[6] + 0x04881d05, 23);
      a = MD5STEP(F3, a, b, c, d, dataIn[9] + 0xd9d4d039, 4);
      d = MD5STEP(F3, d, a, b, c, dataIn[12] + 0xe6db99e5, 11);
      c = MD5STEP(F3, c, d, a, b, dataIn[15] + 0x1fa27cf8, 16);
      b = MD5STEP(F3, b, c, d, a, dataIn[2] + 0xc4ac5665, 23);
      a = MD5STEP(F4, a, b, c, d, dataIn[0] + 0xf4292244, 6);
      d = MD5STEP(F4, d, a, b, c, dataIn[7] + 0x432aff97, 10);
      c = MD5STEP(F4, c, d, a, b, dataIn[14] + 0xab9423a7, 15);
      b = MD5STEP(F4, b, c, d, a, dataIn[5] + 0xfc93a039, 21);
      a = MD5STEP(F4, a, b, c, d, dataIn[12] + 0x655b59c3, 6);
      d = MD5STEP(F4, d, a, b, c, dataIn[3] + 0x8f0ccc92, 10);
      c = MD5STEP(F4, c, d, a, b, dataIn[10] + 0xffeff47d, 15);
      b = MD5STEP(F4, b, c, d, a, dataIn[1] + 0x85845dd1, 21);
      a = MD5STEP(F4, a, b, c, d, dataIn[8] + 0x6fa87e4f, 6);
      d = MD5STEP(F4, d, a, b, c, dataIn[15] + 0xfe2ce6e0, 10);
      c = MD5STEP(F4, c, d, a, b, dataIn[6] + 0xa3014314, 15);
      b = MD5STEP(F4, b, c, d, a, dataIn[13] + 0x4e0811a1, 21);
      a = MD5STEP(F4, a, b, c, d, dataIn[4] + 0xf7537e82, 6);
      d = MD5STEP(F4, d, a, b, c, dataIn[11] + 0xbd3af235, 10);
      c = MD5STEP(F4, c, d, a, b, dataIn[2] + 0x2ad7d2bb, 15);
      b = MD5STEP(F4, b, c, d, a, dataIn[9] + 0xeb86d391, 21);
      this.buf[0] = (this.buf[0] + a & 0xffffffff) >>> 0;
      this.buf[1] = (this.buf[1] + b & 0xffffffff) >>> 0;
      this.buf[2] = (this.buf[2] + c & 0xffffffff) >>> 0;
      this.buf[3] = (this.buf[3] + d & 0xffffffff) >>> 0;
    }
    addData(buf) {
      let len = buf.length;
      let pos = 0;
      let t = this.bits[0];
      this.bits[0] = t + (len << 3) >>> 0;
      if (this.bits[0] < t) {
        this.bits[1]++;
      }
      this.bits[1] += len >>> 29;
      t = t >>> 3 & 0x3f;
      while (pos < len) {
        while (pos < len && t < 64) {
          this.in8[t++] = buf[pos++];
        }
        if (t < 64)
          return;
        if (this.bigEndian)
          this._byteReverseIn();
        this._transform();
        t = 0;
      }
    }
    calculate() {
      let t = this.bits[0] >>> 3 & 0x3f;
      this.in8[t++] = 0x80;
      if (t > 56) {
        while (t < 64) {
          this.in8[t++] = 0;
        }
        if (this.bigEndian)
          this._byteReverseIn();
        this._transform();
        for (t = 0; t < 14; t++) {
          this.in32[t] = 0;
        }
      } else {
        while (t < 56) {
          this.in8[t++] = 0;
        }
        if (this.bigEndian)
          this._byteReverseIn();
      }
      this.in32[14] = this.bits[0];
      this.in32[15] = this.bits[1];
      this._transform();
      let res = new Uint8Array(16);
      for (t = 0; t < 16; t++) {
        res[t] = this.buf[t >>> 2] >>> 8 * (t & 3) & 0xff;
      }
      return res;
    }
  }
  class YFunctionType {
    constructor(obj_yapi, str_classname) {
      this._yapi = obj_yapi;
      this._className = str_classname;
      this._connectedFns = {};
      this._requestedFns = {};
      this._hwIdByName = {};
      this._nameByHwId = {};
      this._valueByHwId = {};
      this._baseType = 0;
    }
    imm_reindexFunction(str_hwid, str_name, str_val, int_basetype) {
      var currname = this._nameByHwId[str_hwid];
      var res = false;
      if (currname == undefined || currname == '') {
        if (str_name != '') {
          this._nameByHwId[str_hwid] = str_name;
          res = true;
        }
      } else if (currname != str_name) {
        if (this._hwIdByName[currname] == str_hwid)
          delete this._hwIdByName[currname];
        if (str_name != '') {
          this._nameByHwId[str_hwid] = str_name;
        } else {
          delete this._nameByHwId[str_hwid];
        }
        res = true;
      }
      if (str_name != '') {
        this._hwIdByName[str_name] = str_hwid;
      }
      if (str_val != undefined) {
        this._valueByHwId[str_hwid] = str_val;
      } else {
        if (this._valueByHwId[str_hwid] == undefined) {
          this._valueByHwId[str_hwid] = '';
        }
      }
      if (int_basetype != undefined) {
        if (this._baseType == 0) {
          this._baseType = int_basetype;
        }
      }
      return res;
    }
    imm_forgetFunction(str_hwid) {
      var currname = this._nameByHwId[str_hwid];
      if (currname != undefined) {
        if (currname != '' && this._hwIdByName[currname] == str_hwid) {
          delete this._hwIdByName[currname];
        }
        delete this._nameByHwId[str_hwid];
      }
      if (this._valueByHwId[str_hwid] != undefined) {
        delete this._valueByHwId[str_hwid];
      }
    }
    imm_resolve(str_func) {
      var dotpos = str_func.indexOf('.');
      var res;
      if (dotpos < 0) {
        res = this._hwIdByName[str_func];
        if (res != undefined) {
          return {
            errorType: YAPI_SUCCESS,
            errorMsg: 'no error',
            result: String(res)
          };
        }
        dotpos = str_func.length;
        str_func += '.' + this._className.substr(0, 1).toLowerCase() + this._className.substr(1);
      }
      if (this._valueByHwId[str_func] != undefined) {
        return {
          errorType: YAPI_SUCCESS,
          errorMsg: 'no error',
          result: String(str_func)
        };
      }
      if (dotpos > 0) {
        var devid = str_func.substr(0, dotpos);
        var funcid = str_func.substr(dotpos + 1);
        var dev = this._yapi.imm_getDevice(devid);
        if (!dev) {
          return {
            errorType: YAPI_DEVICE_NOT_FOUND,
            errorMsg: 'Device [' + devid + '] not online',
            result: null
          };
        }
        var serial = dev.imm_getSerialNumber();
        res = serial + '.' + funcid;
        if (this._valueByHwId[res] != undefined) {
          return {
            errorType: YAPI_SUCCESS,
            errorMsg: 'no error',
            result: String(res)
          };
        }
        var i,
            nfun = dev.imm_functionCount();
        for (i = 0; i < nfun; i++) {
          res = serial + '.' + dev.imm_functionId(i);
          var name = this._nameByHwId[res];
          if (name != undefined && name == funcid) {
            return {
              errorType: YAPI_SUCCESS,
              errorMsg: 'no error',
              result: String(res)
            };
          }
        }
      } else {
        funcid = str_func.substr(1);
        for (var hwid_str in this._connectedFns) {
          var pos = hwid_str.indexOf('.');
          var str_function = hwid_str.substr(pos + 1);
          if (str_function == funcid) {
            return {
              errorType: YAPI_SUCCESS,
              errorMsg: 'no error',
              result: String(hwid_str)
            };
          }
        }
      }
      return {
        errorType: YAPI_DEVICE_NOT_FOUND,
        errorMsg: 'No function [' + funcid + '] found on device [' + serial + ']',
        result: null
      };
    }
    imm_getFriendlyName(str_func) {
      var resolved = this.imm_resolve(str_func);
      var name;
      if (resolved.errorType != YAPI_SUCCESS) {
        return resolved;
      }
      if (this._className == 'Module') {
        var friend = resolved.result;
        name = this._nameByHwId[resolved.result];
        if (name != undefined && name != '') {
          friend = this._nameByHwId[resolved.result];
        }
        return {
          errorType: YAPI_SUCCESS,
          errorMsg: 'no error',
          result: String(friend)
        };
      } else {
        var pos = resolved.result.indexOf('.');
        var str_serialMod = resolved.result.substr(0, pos);
        var str_friendModFull = this._yapi.imm_getFriendlyNameFunction('Module', str_serialMod).result;
        var int_friendModDot = str_friendModFull.indexOf('.');
        var str_friendMod = int_friendModDot > 0 ? str_friendModFull.substr(0, int_friendModDot) : str_friendModFull;
        var str_friendFunc = resolved.result.substr(pos + 1);
        name = this._nameByHwId[resolved.result];
        if (name != undefined && name != '') {
          str_friendFunc = name;
        }
        return {
          errorType: YAPI_SUCCESS,
          errorMsg: 'no error',
          result: String(str_friendMod + '.' + str_friendFunc)
        };
      }
    }
    imm_setFunction(str_func, obj_func) {
      var funres = this.imm_resolve(str_func);
      if (funres.result != undefined) {
        this._connectedFns[funres.result] = obj_func;
      } else {
        this._requestedFns[str_func] = obj_func;
      }
    }
    imm_getFunction(str_func) {
      var funres = this.imm_resolve(str_func);
      if (funres.errorType == YAPI_SUCCESS) {
        var conn_fn = this._connectedFns[funres.result];
        if (conn_fn != undefined)
          return conn_fn;
        var req_fn = this._requestedFns[str_func];
        if (req_fn != undefined) {
          this._connectedFns[funres.result] = req_fn;
          delete this._requestedFns[str_func];
        }
        return req_fn;
      } else {
        return this._requestedFns[str_func];
      }
    }
    imm_setFunctionValue(str_hwid, str_pubval) {
      var currval = this._valueByHwId[str_hwid];
      if (!(currval == undefined) && currval == str_pubval) {
        return false;
      }
      this._valueByHwId[str_hwid] = str_pubval;
      return true;
    }
    imm_getFunctionValue(str_hwid) {
      return this._valueByHwId[str_hwid];
    }
    imm_getBaseType() {
      return this._baseType;
    }
    imm_getFirstHardwareId() {
      var res = null;
      for (res in this._valueByHwId)
        break;
      return res;
    }
    imm_getNextHardwareId(str_hwid) {
      for (var iter_hwid in this._valueByHwId) {
        if (str_hwid == '!')
          return iter_hwid;
        if (str_hwid == iter_hwid)
          str_hwid = '!';
      }
      return null;
    }
  }
  class YHTTPBody {
    constructor(str_fname, bin_data, fun_progressCb) {
      this.fname = str_fname;
      this.data = bin_data;
      this.progressCb = fun_progressCb;
    }
  }
  class YHTTPRequest {
    constructor(bin_res) {
      let int_errType = arguments.length <= 1 || arguments[1] === undefined ? YAPI_SUCCESS : arguments[1];
      let str_errMsg = arguments.length <= 2 || arguments[2] === undefined ? 'no error' : arguments[2];
      this.bin_result = bin_res;
      this.errorType = int_errType;
      this.errorMsg = str_errMsg;
      this.asyncId = 0;
      this.acceptor = null;
      this.toBeSent = null;
      this.sendPos = null;
      this.progressCb = null;
      this.timeoutId = null;
      this.next = null;
    }
  }
  class YFuncRequest {
    constructor(obj_res) {
      let int_errType = arguments.length <= 1 || arguments[1] === undefined ? YAPI_SUCCESS : arguments[1];
      let str_errMsg = arguments.length <= 2 || arguments[2] === undefined ? 'no error' : arguments[2];
      this.obj_result = obj_res;
      this.errorType = int_errType;
      this.errorMsg = str_errMsg;
    }
  }
  class _YY_LoadVal {
    constructor() {
      this.serialNumber = '';
      this.logicalName = '';
      this.productName = '';
      this.productId = 0;
      this.beacon = 0;
      this.services = {
        whitePages: [{networkUrl: ''}],
        yellowPages: []
      };
      this.calib = '';
      this.unit = '';
      this.cal = '';
      this.streams = [];
      this.statusCode = 0;
    }
  }
  class YDataStream {
    constructor(obj_parent, obj_dataset, encoded) {
      this._parent = null;
      this._runNo = 0;
      this._utcStamp = 0;
      this._nCols = 0;
      this._nRows = 0;
      this._duration = 0;
      this._columnNames = [];
      this._functionId = '';
      this._isClosed = 0;
      this._isAvg = 0;
      this._isScal = 0;
      this._isScal32 = 0;
      this._decimals = 0;
      this._offset = 0;
      this._scale = 0;
      this._samplesPerHour = 0;
      this._minVal = 0;
      this._avgVal = 0;
      this._maxVal = 0;
      this._decexp = 0;
      this._caltyp = 0;
      this._calpar = [];
      this._calraw = [];
      this._calref = [];
      this._values = [];
      this.DATA_INVALID = Y_DATA_INVALID;
      this.DURATION_INVALID = Y_DURATION_INVALID;
      this._parent = obj_parent;
      this._yapi = this._parent._yapi;
      this._calhdl = null;
      if (typeof obj_dataset != 'undefined') {
        this.imm_initFromDataSet(obj_dataset, encoded);
      }
    }
    imm_initFromDataSet(dataset, encoded) {
      let val;
      let i;
      let maxpos;
      let iRaw;
      let iRef;
      let fRaw;
      let fRef;
      let duration_float;
      let iCalib = [];
      this._runNo = encoded[0] + (encoded[1] << 16);
      this._utcStamp = encoded[2] + (encoded[3] << 16);
      val = encoded[4];
      this._isAvg = (val & 0x100) == 0;
      this._samplesPerHour = val & 0xff;
      if ((val & 0x100) != 0) {
        this._samplesPerHour = this._samplesPerHour * 3600;
      } else {
        if ((val & 0x200) != 0) {
          this._samplesPerHour = this._samplesPerHour * 60;
        }
      }
      val = encoded[5];
      if (val > 32767) {
        val = val - 65536;
      }
      this._decimals = val;
      this._offset = val;
      this._scale = encoded[6];
      this._isScal = this._scale != 0;
      this._isScal32 = encoded.length >= 14;
      val = encoded[7];
      this._isClosed = val != 0xffff;
      if (val == 0xffff) {
        val = 0;
      }
      this._nRows = val;
      duration_float = this._nRows * 3600 / this._samplesPerHour;
      this._duration = Math.round(duration_float);
      this._decexp = 1.0;
      if (this._scale == 0) {
        i = 0;
        while (i < this._decimals) {
          this._decexp = this._decexp * 10.0;
          i = i + 1;
        }
      }
      iCalib = dataset.imm_get_calibration();
      this._caltyp = iCalib[0];
      if (this._caltyp != 0) {
        this.imm_calhdl = this._yapi.imm_getCalibrationHandler(this._caltyp);
        maxpos = iCalib.length;
        this._calpar.length = 0;
        this._calraw.length = 0;
        this._calref.length = 0;
        if (this._isScal32) {
          i = 1;
          while (i < maxpos) {
            this._calpar.push(iCalib[i]);
            i = i + 1;
          }
          i = 1;
          while (i + 1 < maxpos) {
            fRaw = iCalib[i];
            fRaw = fRaw / 1000.0;
            fRef = iCalib[i + 1];
            fRef = fRef / 1000.0;
            this._calraw.push(fRaw);
            this._calref.push(fRef);
            i = i + 2;
          }
        } else {
          i = 1;
          while (i + 1 < maxpos) {
            iRaw = iCalib[i];
            iRef = iCalib[i + 1];
            this._calpar.push(iRaw);
            this._calpar.push(iRef);
            if (this._isScal) {
              fRaw = iRaw;
              fRaw = (fRaw - this._offset) / this._scale;
              fRef = iRef;
              fRef = (fRef - this._offset) / this._scale;
              this._calraw.push(fRaw);
              this._calref.push(fRef);
            } else {
              this._calraw.push(this._yapi.imm_decimalToDouble(iRaw));
              this._calref.push(this._yapi.imm_decimalToDouble(iRef));
            }
            i = i + 2;
          }
        }
      }
      this._functionId = dataset.imm_get_functionId();
      if (this._isAvg) {
        this._columnNames.length = 0;
        this._columnNames.push(this._functionId + '_min');
        this._columnNames.push(this._functionId + '_avg');
        this._columnNames.push(this._functionId + '_max');
        this._nCols = 3;
      } else {
        this._columnNames.length = 0;
        this._columnNames.push(this._functionId);
        this._nCols = 1;
      }
      if (this._nRows > 0) {
        if (this._isScal32) {
          this._avgVal = this.imm_decodeAvg(encoded[8] + ((encoded[9] ^ 0x8000) << 16), 1);
          this._minVal = this.imm_decodeVal(encoded[10] + (encoded[11] << 16));
          this._maxVal = this.imm_decodeVal(encoded[12] + (encoded[13] << 16));
        } else {
          this._minVal = this.imm_decodeVal(encoded[8]);
          this._maxVal = this.imm_decodeVal(encoded[9]);
          this._avgVal = this.imm_decodeAvg(encoded[10] + (encoded[11] << 16), this._nRows);
        }
      }
      return 0;
    }
    imm_parseStream(sdata) {
      let idx;
      let udat = [];
      let dat = [];
      if (sdata.length == 0) {
        this._nRows = 0;
        return YAPI_SUCCESS;
      }
      udat = this._yapi.imm_decodeWords(this._parent.imm_json_get_string(sdata));
      this._values.length = 0;
      idx = 0;
      if (this._isAvg) {
        while (idx + 3 < udat.length) {
          dat.length = 0;
          if (this._isScal32) {
            dat.push(this.imm_decodeVal(udat[idx + 2] + (udat[idx + 3] << 16)));
            dat.push(this.imm_decodeAvg(udat[idx] + ((udat[idx + 1] ^ 0x8000) << 16), 1));
            dat.push(this.imm_decodeVal(udat[idx + 4] + (udat[idx + 5] << 16)));
            idx = idx + 6;
          } else {
            dat.push(this.imm_decodeVal(udat[idx]));
            dat.push(this.imm_decodeAvg(udat[idx + 2] + (udat[idx + 3] << 16), 1));
            dat.push(this.imm_decodeVal(udat[idx + 1]));
            idx = idx + 4;
          }
          this._values.push(dat.slice());
        }
      } else {
        if (this._isScal && !this._isScal32) {
          while (idx < udat.length) {
            dat.length = 0;
            dat.push(this.imm_decodeVal(udat[idx]));
            this._values.push(dat.slice());
            idx = idx + 1;
          }
        } else {
          while (idx + 1 < udat.length) {
            dat.length = 0;
            dat.push(this.imm_decodeAvg(udat[idx] + ((udat[idx + 1] ^ 0x8000) << 16), 1));
            this._values.push(dat.slice());
            idx = idx + 2;
          }
        }
      }
      this._nRows = this._values.length;
      return YAPI_SUCCESS;
    }
    imm_get_url() {
      let url;
      url = 'logger.json?id=' + this._functionId + '&run=' + String(Math.round(this._runNo)) + '&utc=' + String(Math.round(this._utcStamp));
      return url;
    }
    loadStream() {
      var _this = this;
      return _asyncToGenerator(function*() {
        return _this.imm_parseStream((yield _this._parent._download(_this.imm_get_url())));
      })();
    }
    imm_decodeVal(w) {
      let val;
      val = w;
      if (this._isScal32) {
        val = val / 1000.0;
      } else {
        if (this._isScal) {
          val = (val - this._offset) / this._scale;
        } else {
          val = this._yapi.imm_decimalToDouble(w);
        }
      }
      if (this._caltyp != 0) {
        val = this.imm_calhdl(val, this._caltyp, this._calpar, this._calraw, this._calref);
      }
      return val;
    }
    imm_decodeAvg(dw, count) {
      let val;
      val = dw;
      if (this._isScal32) {
        val = val / 1000.0;
      } else {
        if (this._isScal) {
          val = (val / (100 * count) - this._offset) / this._scale;
        } else {
          val = val / (count * this._decexp);
        }
      }
      if (this._caltyp != 0) {
        val = this.imm_calhdl(val, this._caltyp, this._calpar, this._calraw, this._calref);
      }
      return val;
    }
    isClosed() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        return _this2._isClosed;
      })();
    }
    get_runIndex() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        return _this3._runNo;
      })();
    }
    get_startTime() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        return _this4._utcStamp - parseInt(+new Date() / 1000, 10);
      })();
    }
    get_startTimeUTC() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        return _this5._utcStamp;
      })();
    }
    get_dataSamplesIntervalMs() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        return parseInt(3600000 / _this6._samplesPerHour, 10);
      })();
    }
    get_dataSamplesInterval() {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        return 3600.0 / _this7._samplesPerHour;
      })();
    }
    get_rowCount() {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        if (_this8._nRows != 0 && _this8._isClosed) {
          return _this8._nRows;
        }
        yield _this8.loadStream();
        return _this8._nRows;
      })();
    }
    get_columnCount() {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        if (_this9._nCols != 0) {
          return _this9._nCols;
        }
        yield _this9.loadStream();
        return _this9._nCols;
      })();
    }
    get_columnNames() {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        if (_this10._columnNames.length != 0) {
          return _this10._columnNames;
        }
        yield _this10.loadStream();
        return _this10._columnNames;
      })();
    }
    get_minValue() {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        return _this11._minVal;
      })();
    }
    get_averageValue() {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        return _this12._avgVal;
      })();
    }
    get_maxValue() {
      var _this13 = this;
      return _asyncToGenerator(function*() {
        return _this13._maxVal;
      })();
    }
    get_duration() {
      var _this14 = this;
      return _asyncToGenerator(function*() {
        if (_this14._isClosed) {
          return _this14._duration;
        }
        return parseInt(+new Date() / 1000, 10) - _this14._utcStamp;
      })();
    }
    get_dataRows() {
      var _this15 = this;
      return _asyncToGenerator(function*() {
        if (_this15._values.length == 0 || !_this15._isClosed) {
          yield _this15.loadStream();
        }
        return _this15._values;
      })();
    }
    get_data(row, col) {
      var _this16 = this;
      return _asyncToGenerator(function*() {
        if (_this16._values.length == 0 || !_this16._isClosed) {
          yield _this16.loadStream();
        }
        if (row >= _this16._values.length) {
          return Y_DATA_INVALID;
        }
        if (col >= _this16._values[row].length) {
          return Y_DATA_INVALID;
        }
        return _this16._values[row][col];
      })();
    }
  }
  exports.YDataStream = YDataStream;
  YDataStream.Data_INVALID = Y_DATA_INVALID;
  YDataStream.DURATION_INVALID = Y_DURATION_INVALID;
  class YDataSet {
    constructor(obj_parent, str_functionId, str_unit, u32_startTime, u32_endTime) {
      this._parent = null;
      this._hardwareId = '';
      this._functionId = '';
      this._unit = '';
      this._startTime = 0;
      this._endTime = 0;
      this._progress = 0;
      this._calib = [];
      this._streams = [];
      this._summary = null;
      this._preview = [];
      this._measures = [];
      this.DATA_INVALID = Y_DATA_INVALID;
      this.DURATION_INVALID = Y_DURATION_INVALID;
      this.HARDWAREID_INVALID = Y_HARDWAREID_INVALID;
      this.FUNCTIONID_INVALID = Y_FUNCTIONID_INVALID;
      this.UNIT_INVALID = Y_UNIT_INVALID;
      this._summary = new YMeasure(0, 0, 0, 0, 0);
      if (typeof str_unit === 'undefined') {
        this._parent = obj_parent;
        this._yapi = obj_parent._yapi;
        this._startTime = 0;
        this._endTime = 0;
      } else {
        this._parent = obj_parent;
        this._yapi = obj_parent._yapi;
        this._functionId = str_functionId;
        this._unit = str_unit;
        this._startTime = u32_startTime;
        this._endTime = u32_endTime;
        this._progress = -1;
      }
    }
    imm_get_functionId() {
      return this._functionId;
    }
    imm_get_calibration() {
      return this._calib;
    }
    processMore(progress, data) {
      var _this17 = this;
      return _asyncToGenerator(function*() {
        let stream;
        let dataRows = [];
        let strdata;
        let tim;
        let itv;
        let nCols;
        let minCol;
        let avgCol;
        let maxCol;
        if (progress != _this17._progress) {
          return _this17._progress;
        }
        if (_this17._progress < 0) {
          strdata = _this17._yapi.imm_bin2str(data);
          if (strdata == '{}') {
            _this17._parent._throw(YAPI_VERSION_MISMATCH, 'device firmware is too old');
            return YAPI_VERSION_MISMATCH;
          }
          return yield _this17._parse(strdata);
        }
        stream = _this17._streams[_this17._progress];
        stream.imm_parseStream(data);
        dataRows = yield stream.get_dataRows();
        _this17._progress = _this17._progress + 1;
        if (dataRows.length == 0) {
          return yield _this17.get_progress();
        }
        tim = yield stream.get_startTimeUTC();
        itv = yield stream.get_dataSamplesInterval();
        if (tim < itv) {
          tim = itv;
        }
        nCols = dataRows[0].length;
        minCol = 0;
        if (nCols > 2) {
          avgCol = 1;
        } else {
          avgCol = 0;
        }
        if (nCols > 2) {
          maxCol = 2;
        } else {
          maxCol = 0;
        }
        for (let ii in dataRows) {
          if (tim >= _this17._startTime && (_this17._endTime == 0 || tim <= _this17._endTime)) {
            _this17._measures.push(new YMeasure(tim - itv, tim, dataRows[ii][minCol], dataRows[ii][avgCol], dataRows[ii][maxCol]));
          }
          tim = tim + itv;
        }
        return yield _this17.get_progress();
      })();
    }
    get_privateDataStreams() {
      var _this18 = this;
      return _asyncToGenerator(function*() {
        return _this18._streams;
      })();
    }
    get_hardwareId() {
      var _this19 = this;
      return _asyncToGenerator(function*() {
        let mo;
        if (!(_this19._hardwareId == '')) {
          return _this19._hardwareId;
        }
        mo = yield _this19._parent.get_module();
        _this19._hardwareId = (yield mo.get_serialNumber()) + '.' + (yield _this19.get_functionId());
        return _this19._hardwareId;
      })();
    }
    get_functionId() {
      var _this20 = this;
      return _asyncToGenerator(function*() {
        return _this20._functionId;
      })();
    }
    get_unit() {
      var _this21 = this;
      return _asyncToGenerator(function*() {
        return _this21._unit;
      })();
    }
    get_startTimeUTC() {
      var _this22 = this;
      return _asyncToGenerator(function*() {
        return _this22._startTime;
      })();
    }
    get_endTimeUTC() {
      var _this23 = this;
      return _asyncToGenerator(function*() {
        return _this23._endTime;
      })();
    }
    get_progress() {
      var _this24 = this;
      return _asyncToGenerator(function*() {
        if (_this24._progress < 0) {
          return 0;
        }
        if (_this24._progress >= _this24._streams.length) {
          return 100;
        }
        return parseInt((1 + (1 + _this24._progress) * 98) / (1 + _this24._streams.length), 10);
      })();
    }
    loadMore() {
      var _this25 = this;
      return _asyncToGenerator(function*() {
        let url;
        let stream;
        if (_this25._progress < 0) {
          url = 'logger.json?id=' + _this25._functionId;
        } else {
          if (_this25._progress >= _this25._streams.length) {
            return 100;
          } else {
            stream = _this25._streams[_this25._progress];
            url = stream.imm_get_url();
          }
        }
        return yield _this25.processMore(_this25._progress, (yield _this25._parent._download(url)));
      })();
    }
    get_summary() {
      var _this26 = this;
      return _asyncToGenerator(function*() {
        return _this26._summary;
      })();
    }
    get_preview() {
      var _this27 = this;
      return _asyncToGenerator(function*() {
        return _this27._preview;
      })();
    }
    get_measuresAt(measure) {
      var _this28 = this;
      return _asyncToGenerator(function*() {
        let startUtc;
        let stream;
        let dataRows = [];
        let measures = [];
        let tim;
        let itv;
        let nCols;
        let minCol;
        let avgCol;
        let maxCol;
        startUtc = Math.round(measure.get_startTimeUTC());
        stream = null;
        for (let ii in _this28._streams) {
          if ((yield _this28._streams[ii].get_startTimeUTC()) == startUtc) {
            stream = _this28._streams[ii];
          }
          ;
          ;
        }
        if (stream == null) {
          return measures;
        }
        dataRows = yield stream.get_dataRows();
        if (dataRows.length == 0) {
          return measures;
        }
        tim = yield stream.get_startTimeUTC();
        itv = yield stream.get_dataSamplesInterval();
        if (tim < itv) {
          tim = itv;
        }
        nCols = dataRows[0].length;
        minCol = 0;
        if (nCols > 2) {
          avgCol = 1;
        } else {
          avgCol = 0;
        }
        if (nCols > 2) {
          maxCol = 2;
        } else {
          maxCol = 0;
        }
        for (let ii in dataRows) {
          if (tim >= _this28._startTime && (_this28._endTime == 0 || tim <= _this28._endTime)) {
            measures.push(new YMeasure(tim - itv, tim, dataRows[ii][minCol], dataRows[ii][avgCol], dataRows[ii][maxCol]));
          }
          tim = tim + itv;
          ;
        }
        return measures;
      })();
    }
    get_measures() {
      var _this29 = this;
      return _asyncToGenerator(function*() {
        return _this29._measures;
      })();
    }
    _parse(str_json) {
      var _this30 = this;
      return _asyncToGenerator(function*() {
        var summaryMinVal = Number.MAX_VALUE;
        var summaryMaxVal = -Number.MAX_VALUE;
        var summaryTotalTime = 0;
        var summaryTotalAvg = 0;
        var startTime = 0x7fffffff;
        var endTime = 0;
        var loadval;
        try {
          loadval = JSON.parse(str_json);
        } catch (err) {}
        if (!loadval) {
          _this30._progress = 0;
          return _this30;
        }
        _this30._functionId = loadval.id;
        _this30._unit = loadval.unit;
        if (loadval.calib) {
          _this30._calib = _this30._yapi.imm_decodeFloats(loadval.calib);
          _this30._calib[0] = parseInt(_this30._calib[0] / 1000);
        } else {
          _this30._calib = _this30._yapi.imm_decodeWords(loadval.cal);
        }
        _this30._summary = new YMeasure(0, 0, 0, 0, 0);
        _this30._streams = [];
        _this30._preview = [];
        _this30._measures = [];
        for (var i = 0; i < loadval.streams.length; i++) {
          var stream = _this30._parent.imm_findDataStream(_this30, loadval.streams[i]);
          var streamEndTime = (yield stream.get_startTimeUTC()) + (yield stream.get_duration());
          var streamStartTime = (yield stream.get_startTimeUTC()) - parseInt((yield stream.get_dataSamplesIntervalMs()) / 1000);
          if (_this30._startTime > 0 && streamEndTime <= _this30._startTime) {} else if (_this30._endTime > 0 && (yield stream.get_startTimeUTC()) > _this30._endTime) {} else {
            _this30._streams.push(stream);
            if (startTime > streamStartTime) {
              startTime = streamStartTime;
            }
            if (endTime < streamEndTime) {
              endTime = streamEndTime;
            }
            if (stream.isClosed() && (yield stream.get_startTimeUTC()) >= _this30._startTime && (_this30._endTime == 0 || streamEndTime <= _this30._endTime)) {
              if (summaryMinVal > (yield stream.get_minValue()))
                summaryMinVal = yield stream.get_minValue();
              if (summaryMaxVal < (yield stream.get_maxValue()))
                summaryMaxVal = yield stream.get_maxValue();
              summaryTotalAvg += (yield stream.get_averageValue()) * (yield stream.get_duration());
              summaryTotalTime += yield stream.get_duration();
              var rec = new YMeasure((yield stream.get_startTimeUTC()), streamEndTime, (yield stream.get_minValue()), (yield stream.get_averageValue()), (yield stream.get_maxValue()));
              _this30._preview.push(rec);
            }
          }
        }
        if (_this30._streams.length > 0 && summaryTotalTime > 0) {
          if (_this30._startTime < startTime) {
            _this30._startTime = startTime;
          }
          if (_this30._endTime == 0 || _this30._endTime > endTime) {
            _this30._endTime = endTime;
          }
          _this30._summary = new YMeasure(_this30._startTime, _this30._endTime, summaryMinVal, summaryTotalAvg / summaryTotalTime, summaryMaxVal);
        }
        _this30._progress = 0;
        return yield _this30.get_progress();
      })();
    }
  }
  exports.YDataSet = YDataSet;
  YDataSet.DATA_INVALID = Y_DATA_INVALID;
  YDataSet.DURATION_INVALID = Y_DURATION_INVALID;
  YDataSet.HARDWAREID_INVALID = Y_HARDWAREID_INVALID;
  YDataSet.FUNCTIONID_INVALID = Y_FUNCTIONID_INVALID;
  YDataSet.UNIT_INVALID = Y_UNIT_INVALID;
  class YDevice {
    constructor(obj_yapi, str_rooturl, obj_wpRec, obj_ypRecs) {
      this._yapi = obj_yapi;
      this._rootUrl = str_rooturl;
      this._serialNumber = '';
      this._logicalName = '';
      this._productName = '';
      this._productId = 0;
      this._beacon = 0;
      this._devYdx = -1;
      this._lastErrorType = YAPI_SUCCESS;
      this._lastErrorMsg = 'no error';
      this._cache = {
        _expiration: 0,
        _json: new Uint8Array(0)
      };
      this._functions = [];
      this._busy = 0;
      this._pendingQueries = Promise.resolve();
      this._deviceTime = 0;
      if (obj_wpRec != undefined) {
        this._serialNumber = obj_wpRec.serialNumber;
        this._logicalName = obj_wpRec.logicalName;
        this._productName = obj_wpRec.productName;
        this._productId = obj_wpRec.productId;
        this._beacon = obj_wpRec.beacon;
        this._devYdx = obj_wpRec.index == undefined ? -1 : obj_wpRec.index;
        this.imm_updateFromYP(obj_ypRecs);
        this._yapi.imm_reindexDevice(this);
      }
    }
    _throw(int_errType, str_errMsg, obj_retVal) {
      this._lastErrorType = int_errType;
      this._lastErrorMsg = str_errMsg;
      this._yapi._throw(int_errType, str_errMsg, obj_retVal);
    }
    imm_getRootUrl() {
      return this._rootUrl;
    }
    imm_getSerialNumber() {
      return this._serialNumber;
    }
    imm_getLogicalName() {
      return this._logicalName;
    }
    imm_getProductName() {
      return this._productName;
    }
    imm_getProductId() {
      return this._productId;
    }
    imm_getBeacon() {
      return this._beacon;
    }
    imm_getDeviceTime() {
      return this._deviceTime;
    }
    imm_setDeviceTime(float_timestamp) {
      this._deviceTime = float_timestamp;
    }
    imm_getDevYdx() {
      return this._devYdx;
    }
    imm_describe() {
      var res = this._rootUrl;
      if (this._serialNumber != '') {
        res = this._serialNumber;
        if (this._logicalName != '') {
          res = res + ' (' + this._logicalName + ')';
        }
      }
      return this._productName + ' ' + res;
    }
    imm_updateFromYP(obj_ypRecs) {
      var funidx = 0;
      for (var categ in obj_ypRecs) {
        for (var key in obj_ypRecs[categ]) {
          var rec = obj_ypRecs[categ][key];
          var hwid = rec['hardwareId'];
          var dotpos = hwid.indexOf('.');
          if (hwid.substr(0, dotpos) == this._serialNumber) {
            var funydx = rec['index'];
            if (funydx == undefined)
              funydx = funidx;
            this._functions[funydx] = [hwid.substr(dotpos + 1), rec['logicalName']];
            funidx++;
          }
        }
      }
    }
    imm_updateFromReq(yreq, loadval) {
      this._cache._expiration = this._yapi.GetTickCount() + this._yapi.defaultCacheValidity;
      this._cache._json = yreq.bin_result;
      var func;
      var reindex = false;
      if (this._productName == '') {
        for (func in loadval) {
          if (func == 'module') {
            this._serialNumber = loadval.module.serialNumber;
            this._logicalName = loadval.module.logicalName;
            this._productName = loadval.module.productName;
            this._productId = loadval.module.productId;
            this._beacon = loadval.module.beacon;
          } else if (func == 'services') {
            this.imm_updateFromYP(loadval.services.yellowPages);
          }
        }
        reindex = true;
      } else {
        var renamed = false;
        for (func in loadval) {
          if (func == 'module') {
            if (this._logicalName != loadval.module.logicalName) {
              this._logicalName = loadval.module.logicalName;
              reindex = true;
            }
            this._beacon = loadval.module.beacon;
          } else if (func != 'services') {
            var name = loadval[func]['logicalName'];
            if (name == undefined)
              name = loadval.module.logicalName;
            var pubval = loadval[func]['advertisedValue'];
            if (pubval != undefined) {
              this._yapi.imm_setFunctionValue(loadval.module.serialNumber + '.' + func, pubval);
            }
            var funydx;
            for (funydx in this._functions) {
              if (this._functions[funydx][0] == func) {
                if (this._functions[funydx][1] != name) {
                  this._functions[funydx][1] = name;
                  reindex = true;
                }
                break;
              }
            }
          }
        }
      }
      if (reindex) {
        this._yapi.imm_reindexDevice(this);
      }
    }
    imm_dropCache() {
      this._cache._expiration = 0;
    }
    imm_functionCount() {
      return this._functions.length;
    }
    imm_functionId(int_idx) {
      if (int_idx < this._functions.length) {
        return this._functions[int_idx][0];
      }
      return '';
    }
    imm_functionBaseType(int_idx) {
      if (int_idx < this._functions.length) {
        var ftype = this._yapi.imm_getFunctionBaseType(this._serialNumber + '.' + this._functions[int_idx][0]);
        for (var name in Y_BASETYPES) {
          if (Y_BASETYPES[name] == ftype) {
            return name;
          }
        }
      }
      return 'Function';
    }
    imm_functionType(int_idx) {
      if (int_idx < this._functions.length) {
        var funid = this._functions[int_idx][0];
        var i;
        for (i = 0; i < funid.length; i++) {
          if (funid[i] >= '0' && funid[i] <= '9') {
            break;
          }
        }
        return funid[0].toUpperCase() + funid.substr(1, i - 1);
      }
      return '';
    }
    imm_functionName(int_idx) {
      if (int_idx < this._functions.length) {
        return this._functions[int_idx][1];
      }
      return '';
    }
    imm_functionValue(int_idx) {
      if (int_idx < this._functions.length) {
        return this._yapi.imm_getFunctionValue(this._serialNumber + '.' + this._functions[int_idx][0]);
      }
      return '';
    }
    requestAPI(int_msValidity) {
      var _this31 = this;
      return _asyncToGenerator(function*() {
        if (_this31._cache._expiration > _this31._yapi.GetTickCount()) {
          return new YHTTPRequest(_this31._cache._json);
        }
        let yreq = yield _this31._yapi.devRequest(_this31._rootUrl, 'GET /api.json', null, 0);
        if (yreq.errorType != YAPI_SUCCESS)
          return yreq;
        if (!int_msValidity) {
          int_msValidity = _this31._yapi.defaultCacheValidity;
        }
        _this31._cache._expiration = _this31._yapi.GetTickCount() + int_msValidity;
        _this31._cache._json = yreq.bin_result;
        return yreq;
      })();
    }
    refresh() {
      var _this32 = this;
      return _asyncToGenerator(function*() {
        let yreq = yield _this32.requestAPI(_this32._yapi.defaultCacheValidity);
        if (yreq.errorType != YAPI_SUCCESS) {
          return _this32._throw(yreq.errorType, yreq.errorMsg, yreq.errorType);
        }
        let loadval = null;
        try {
          loadval = JSON.parse(_this32._yapi.imm_bin2str(yreq.bin_result));
        } catch (err) {}
        if (!loadval) {
          return _this32._throw(YAPI_IO_ERROR, 'Request failed, could not parse API result for ' + _this32._rootUrl, YAPI_IO_ERROR);
        }
        _this32.imm_updateFromReq(yreq, loadval);
        return YAPI_SUCCESS;
      })();
    }
  }
  class YFirmwareFile {
    constructor(path, serial, pictype, product, firmware, prog_version, ROM_nb_zone, FLA_nb_zone, ROM_total_size, FLA_total_size, data, zone_ofs) {
      this._path = path;
      this._serial = serial;
      this._pictype = pictype;
      this._product = product;
      this._firmware = firmware;
      this._prog_version = prog_version;
      this._ROM_nb_zone = ROM_nb_zone;
      this._FLA_nb_zone = FLA_nb_zone;
      this._ROM_total_size = ROM_total_size;
      this._FLA_total_size = FLA_total_size;
      this._data = data;
      this._zone_ofs = zone_ofs;
    }
    static imm_Parse(path, data, force) {
      const BYN_REV_V4 = 4;
      const BYN_REV_V5 = 5;
      const BYN_REV_V6 = 6;
      const MAX_ROM_ZONES_PER_FILES = 16;
      const MAX_FLASH_ZONES_PER_FILES = 4;
      const BYN_HEAD_SIZE_V4 = 96 + 8;
      const BYN_HEAD_SIZE_V5 = 96 + 32;
      const BYN_HEAD_SIZE_V6 = 96 + 48;
      const BYN_MD5_OFS_V6 = 96 + 16;
      let pos = 0;
      let getShort = function() {
        let res = data[pos] + (data[pos + 1] << 8);
        pos += 2;
        return res;
      };
      let getInt = function() {
        let res = data[pos] + (data[pos + 1] << 8) + (data[pos + 2] << 16) + (data[pos + 3] << 24);
        pos += 4;
        return res;
      };
      let getString = function(maxlen) {
        let end = pos + maxlen;
        while (end > pos && data[end - 1] == 0)
          end--;
        let res = YAPI.imm_bin2str(data.subarray(pos, end));
        pos += maxlen;
        return res;
      };
      let sign = getString(4);
      if (sign != 'BYN')
        return null;
      let rev = getShort();
      let serial = getString(20);
      let pictype = getString(20);
      let product = getString(28);
      let firmware = getString(22);
      if (serial.length >= 20)
        return null;
      if (product.length >= 28)
        return null;
      if (firmware.length >= 22)
        return null;
      let ROM_nb_zone = 0;
      let FLA_nb_zone = 0;
      let ROM_total_size = 0;
      let FLA_total_size = 0;
      let prog_buf;
      let prog_version = "";
      let zone_ofs;
      let datasize;
      switch (rev) {
        case BYN_REV_V4:
          zone_ofs = BYN_HEAD_SIZE_V4;
          ROM_nb_zone = getInt();
          datasize = getInt();
          if (ROM_nb_zone > MAX_ROM_ZONES_PER_FILES)
            return null;
          if (datasize != data.length - BYN_HEAD_SIZE_V4)
            return null;
          break;
        case BYN_REV_V5:
          zone_ofs = BYN_HEAD_SIZE_V5;
          prog_version = getString(22);
          if (!force && !YFirmwareFile.imm_progCompatible(prog_version))
            return null;
          getShort();
          ROM_nb_zone = getInt();
          datasize = getInt();
          if (ROM_nb_zone > MAX_ROM_ZONES_PER_FILES)
            return null;
          if (datasize != data.length - BYN_HEAD_SIZE_V5)
            return null;
          break;
        case BYN_REV_V6:
          zone_ofs = BYN_HEAD_SIZE_V6;
          let md5hdr = data.subarray(pos, pos + 16);
          pos += 16;
          let md5hdrstr = YAPI.imm_bin2hexstr(md5hdr);
          let md5ctx = new Y_MD5Ctx();
          md5ctx.addData(data.subarray(BYN_MD5_OFS_V6));
          let md5bynstr = YAPI.imm_bin2hexstr(md5ctx.calculate());
          if (md5hdrstr != md5bynstr) {
            console.log('hdr MD5: ' + md5hdrstr);
            console.log('byn MD5: ' + md5bynstr);
            console.log('byn size: ' + data.length);
            return null;
          }
          prog_version = getString(22);
          if (!force && !YFirmwareFile.imm_progCompatible(prog_version))
            return null;
          ROM_nb_zone = data[pos++];
          FLA_nb_zone = data[pos++];
          ROM_total_size = getInt();
          FLA_total_size = getInt();
          if (ROM_nb_zone > MAX_ROM_ZONES_PER_FILES)
            return null;
          if (FLA_nb_zone > MAX_FLASH_ZONES_PER_FILES)
            return null;
          break;
        default:
          return null;
      }
      return new YFirmwareFile(path, serial, pictype, product, firmware, prog_version, ROM_nb_zone, FLA_nb_zone, ROM_total_size, FLA_total_size, data, zone_ofs);
    }
    static imm_progCompatible(prog_version) {
      if (prog_version == '')
        return true;
      let apiVer = YAPI.imm_GetAPIVersion();
      let dashpos = apiVer.indexOf('-');
      if (dashpos > 0) {
        apiVer = apiVer.slice(0, dashpos);
      }
      apiVer = apiVer.slice(apiVer.lastIndexOf('.') + 1);
      if (parseInt(prog_version) > parseInt(apiVer)) {
        console.log('checkProgField: byn=' + prog_version + ' api=' + apiVer);
        return false;
      }
      return true;
    }
    imm_getSerial() {
      return this._serial;
    }
    imm_getPictype() {
      return this._pictype;
    }
    imm_getProduct() {
      return this._product;
    }
    imm_getFirmwareRelease() {
      return this._firmware;
    }
    imm_getFirmwareReleaseAsInt() {
      return parseInt(this._firmware);
    }
    imm_getProg_version() {
      return this._prog_version;
    }
    imm_getROM_nb_zone() {
      return this._ROM_nb_zone;
    }
    imm_getFLA_nb_zone() {
      return this._FLA_nb_zone;
    }
    imm_getROM_total_size() {
      return this._ROM_total_size;
    }
    imm_getFLA_total_size() {
      return this._FLA_total_size;
    }
    imm_getData() {
      return this._data;
    }
    imm_getPath() {
      return this._path;
    }
  }
  exports.YFirmwareFile = YFirmwareFile;
  class YFirmwareUpdate {
    constructor(obj_yapi, str_serial, str_path, bin_settings, bool_force) {
      this._yapi = obj_yapi;
      this._serial = '';
      this._settings = new Uint8Array(0);
      this._firmwarepath = '';
      this._progress_msg = '';
      this._progress_c = 0;
      this._progress = 0;
      this._restore_step = 0;
      this._force = 0;
      this._serial = str_serial;
      this._firmwarepath = str_path;
      this._settings = bin_settings;
      this._force = bool_force;
    }
    static _downloadfile(path) {
      return _asyncToGenerator(function*() {
        if (YAPI._isNodeJS) {
          let httpPromise = new Promise(function(resolve, reject) {
            let http = YAPI._nodeRequire('http');
            http.get(path, function(res) {
              if (res.statusCode != 200 && res.statusCode != 304) {
                if (res.statusCode) {
                  reject(new Error('HTTP error ' + res.statusCode));
                } else {
                  reject(new Error('Unable to complete HTTP request, network down?'));
                }
              } else {
                let response = new Buffer(0);
                res.on('data', function(chunk) {
                  response = Buffer.concat([response, chunk]);
                });
                res.on('end', function() {
                  resolve(new Uint8Array(response));
                });
              }
            }).on('error', function(e) {
              reject(new Error('HTTP error: ' + e.message));
            });
          });
          return httpPromise;
        } else {
          let httpPromise = new Promise(function(resolve, reject) {
            let httpRequest = new XMLHttpRequest();
            httpRequest.open('GET', path, true);
            httpRequest.overrideMimeType('text/plain; charset=x-user-defined');
            httpRequest.onreadystatechange = function() {
              if (httpRequest.readyState == 4) {
                if (httpRequest.status != 200 && httpRequest.status != 304) {
                  if (httpRequest.statusCode) {
                    reject(new Error('HTTP error ' + httpRequest.statusCode));
                  } else {
                    reject(new Error('Unable to complete HTTP request, network down?'));
                  }
                } else {
                  resolve(YAPI.imm_str2bin(httpRequest.responseText));
                }
              }
            };
            httpRequest.send('');
          });
          return httpPromise;
        }
      })();
    }
    static _loadfile(file) {
      return _asyncToGenerator(function*() {
        if (YAPI._isNodeJS) {
          let filePromise = new Promise(function(resolve, reject) {
            let fs = YAPI._nodeRequire('fs');
            fs.readFile(file, function(err, data) {
              if (err) {
                reject(err);
              } else {
                resolve(new Uint8Array(data));
              }
            });
          });
          return filePromise;
        } else {
          let filePromise = new Promise(function(resolve, reject) {
            let reader = new FileReader();
            reader.onerror = function(evt) {
              reject(evt.target.error);
            };
            reader.onload = function(evt) {
              resolve(new Uint8Array(evt.target.result));
            };
            reader.readAsArrayBuffer(file);
          });
          return filePromise;
        }
      })();
    }
    imm_progress(progress, msg) {
      this._progress = progress;
      this._progress_msg = msg;
    }
    _processMore(newupdate) {
      var _this33 = this;
      return _asyncToGenerator(function*() {
        if (!newupdate)
          return;
        let bytes;
        _this33.imm_progress(0, 'Firmware update started');
        if (typeof _this33._firmwarepath == 'string' && _this33._firmwarepath.indexOf('yoctopuce.com') >= 0) {
          _this33.imm_progress(1, 'Downloading firmware');
          bytes = yield YFirmwareUpdate._downloadfile(_this33._firmwarepath);
        } else {
          _this33.imm_progress(1, 'Loading firmware');
          bytes = yield YFirmwareUpdate._loadfile(_this33._firmwarepath);
        }
        let firmware = YFirmwareFile.imm_Parse(_this33._firmwarepath, bytes, _this33._force);
        _this33.imm_progress(5, 'Check if module is already in bootloader');
        let hub = null;
        let module = YModule.FindModuleInContext(_this33._yapi, _this33._serial + '.module');
        if (yield module.isOnline()) {
          let dev = _this33._yapi.imm_getDevice(_this33._serial);
          let baseUrl = dev.imm_getRootUrl();
          if (baseUrl.slice(-1) != '/')
            baseUrl = baseUrl + '/';
          hub = _this33._yapi.imm_getHub(baseUrl);
        } else {
          let hubs = _this33._yapi._hubs;
          for (let i = 0; i < hubs.length; i++) {
            let ldrs = yield hubs[i].getBootloaders();
            if (ldrs.indexOf(_this33._serial) >= 0) {
              hub = hubs[i];
              break;
            }
          }
        }
        if (hub == null) {
          _this33.imm_progress(-1, 'Device ' + _this33._serial + ' is not detected');
          _this33._yapi._throw(YAPI.DEVICE_NOT_FOUND, 'Device ' + _this33._serial + ' is not detected', null);
          return;
        }
        yield hub.firmwareUpdate(_this33._serial, firmware, _this33._settings, function(percent, msg) {
          _this33.imm_progress(5 + parseInt((percent * 80 + 50) / 100), msg);
        });
        _this33.imm_progress(80, 'Wait for the device to restart');
        let timeout = _this33._yapi.GetTickCount() + 60000;
        yield module.clearCache();
        while (!(yield module.isOnline()) && timeout > _this33._yapi.GetTickCount()) {
          let errmsg = new YErrorMsg();
          yield _this33._yapi.Sleep(500, errmsg);
          yield _this33._yapi.UpdateDeviceList();
        }
        if (yield module.isOnline()) {
          if (_this33._settings != null) {
            _this33.imm_progress(95, 'Restoring device settings');
            yield module.set_allSettingsAndFiles(_this33._settings);
            yield module.saveToFlash();
          }
          _this33.imm_progress(100, 'Success');
        } else {
          _this33.imm_progress(-1, 'Device did not reboot correctly');
        }
      })();
    }
    static checkFirmware_r(file, serial_base, force) {
      return _asyncToGenerator(function*() {
        if (YAPI._isNodeJS) {
          let fs = YAPI._nodeRequire('fs');
          let stats = fs.statSync(file);
          if (stats.isDirectory()) {
            let dirPromise = new Promise(function(resolve, reject) {
              let join = YAPI._nodeRequire('path').join;
              let dir = file;
              fs.readdir(dir, function(err, files) {
                if (err)
                  resolve(null);
                let tasks = files.map(function(fname) {
                  return YFirmwareUpdate.checkFirmware_r(join(dir, fname), serial_base, force);
                });
                Promise.all(tasks).then(function(results) {
                  let bestFirmware = null;
                  results.forEach(function(firmware) {
                    if (!firmware)
                      return;
                    if (!bestFirmware || bestFirmware.imm_getFirmwareReleaseAsInt() < firmware.imm_getFirmwareReleaseAsInt()) {
                      bestFirmware = firmware;
                    }
                  });
                  resolve(bestFirmware);
                });
              });
            });
            return dirPromise;
          } else if (!stats.isFile()) {
            return null;
          }
        }
        let bynfile = yield YFirmwareUpdate._loadfile(file);
        let firmware = YFirmwareFile.imm_Parse(file, bynfile, force);
        if (firmware.imm_getSerial().slice(0, serial_base.length) != serial_base)
          return null;
        return firmware;
      })();
    }
    static CheckFirmwareEx(serial, path, minrelease, force) {
      return _asyncToGenerator(function*() {
        let link = '';
        let best_rev = 0;
        let current_rev;
        if (typeof path == 'string' && path.indexOf('yoctopuce.com') >= 0) {
          try {
            let data = yield YFirmwareUpdate._downloadfile('http://www.yoctopuce.com/FR/common/getLastFirmwareLink.php?serial=' + serial);
            let obj = JSON.parse(YAPI.imm_bin2str(data));
            link = obj['link'];
            best_rev = obj['version'];
          } catch (e) {
            console.log(e);
            YAPI._throw(YAPI_IO_ERROR, 'failed to retrieve firmware information from www.yoctopuce.com', '');
            return '';
          }
        } else {
          let firmware = yield YFirmwareUpdate.checkFirmware_r(path, serial.substring(0, 8), force);
          if (firmware != null) {
            best_rev = firmware.imm_getFirmwareReleaseAsInt();
            link = firmware.imm_getPath();
          }
        }
        if (minrelease != 0) {
          if (minrelease < best_rev)
            return link;
          else
            return '';
        }
        return link;
      })();
    }
    static CheckFirmware(serial, path, minrelease) {
      return _asyncToGenerator(function*() {
        return yield YFirmwareUpdate.CheckFirmwareEx(serial, path, minrelease, false);
      })();
    }
    static GetAllBootLoadersInContext(yctx) {
      return _asyncToGenerator(function*() {
        let hubs = yctx._hubs;
        let res = [];
        for (let i = 0; i < hubs.length; i++) {
          let ldrs = yield hubs[i].getBootloaders();
          for (let j = 0; j < ldrs.length; j++) {
            res.push(ldrs[j]);
          }
        }
        return res;
      })();
    }
    static GetAllBootLoaders() {
      return _asyncToGenerator(function*() {
        return YFirmwareUpdate.GetAllBootLoadersInContext(YAPI);
      })();
    }
    get_progress() {
      var _this34 = this;
      return _asyncToGenerator(function*() {
        if (_this34._progress >= 0) {
          yield _this34._processMore(0);
        }
        return _this34._progress;
      })();
    }
    get_progressMessage() {
      var _this35 = this;
      return _asyncToGenerator(function*() {
        return _this35._progress_msg;
      })();
    }
    startUpdate() {
      var _this36 = this;
      return _asyncToGenerator(function*() {
        let err;
        let leng;
        err = _this36._yapi.imm_bin2str(_this36._settings);
        leng = err.length;
        if (leng >= 6 && 'error:' == err.substr(0, 6)) {
          _this36._progress = -1;
          _this36._progress_msg = err.substr(6, leng - 6);
        } else {
          _this36._progress = 0;
          _this36._progress_c = 0;
          yield _this36._processMore(1);
        }
        return _this36._progress;
      })();
    }
  }
  exports.YFirmwareUpdate = YFirmwareUpdate;
  class YFunction {
    constructor(obj_yapi, str_func) {
      this._yapi = obj_yapi;
      this._className = 'Function';
      this._func = str_func;
      this._lastErrorType = YAPI_SUCCESS;
      this._lastErrorMsg = 'no error';
      this._dataStreams = {};
      this._userData = null;
      this._cache = {_expiration: 0};
      this._logicalName = Y_LOGICALNAME_INVALID;
      this._advertisedValue = Y_ADVERTISEDVALUE_INVALID;
      this._valueCallbackFunction = null;
      this._cacheExpiration = 0;
      this._serial = '';
      this._funId = '';
      this._hwId = '';
      this.FUNCTIONDESCRIPTOR_INVALID = YAPI_INVALID_STRING;
      this.HARDWAREID_INVALID = YAPI_INVALID_STRING;
      this.FUNCTIONID_INVALID = YAPI_INVALID_STRING;
      this.FRIENDLYNAME_INVALID = YAPI_INVALID_STRING;
      this.LOGICALNAME_INVALID = YAPI_INVALID_STRING;
      this.ADVERTISEDVALUE_INVALID = YAPI_INVALID_STRING;
    }
    _throw(int_errType, str_errMsg, obj_retVal) {
      this._lastErrorType = int_errType;
      this._lastErrorMsg = str_errMsg;
      this._yapi._throw(int_errType, str_errMsg, obj_retVal);
    }
    imm_setConst(obj) {
      for (let key in obj) {
        this[key] = obj[key];
        this.constructor[key] = obj[key];
      }
    }
    get_syncProxy() {
      var _this37 = this;
      return _asyncToGenerator(function*() {
        if (_this37._cacheExpiration <= _this37._yapi.GetTickCount()) {
          try {
            yield _this37.load(_this37._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YFunctionProxy(_this37);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case '_expiration':
          this._cacheExpiration = val;
          return 1;
        case 'logicalName':
          this._logicalName = val;
          return 1;
        case 'advertisedValue':
          this._advertisedValue = val;
          return 1;
      }
      return 0;
    }
    get_logicalName() {
      var _this38 = this;
      return _asyncToGenerator(function*() {
        if (_this38._cacheExpiration <= _this38._yapi.GetTickCount()) {
          if ((yield _this38.load(_this38._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_LOGICALNAME_INVALID;
          }
        }
        return _this38._logicalName;
      })();
    }
    set_logicalName(newval) {
      var _this39 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        if (!_this39._yapi.CheckLogicalName(newval)) {
          return _this39._throw(_this39._yapi.INVALID_ARGUMENT, 'Invalid name :' + newval, _this39._yapi.INVALID_ARGUMENT);
        }
        rest_val = newval;
        return yield _this39._setAttr('logicalName', rest_val);
      })();
    }
    get_advertisedValue() {
      var _this40 = this;
      return _asyncToGenerator(function*() {
        if (_this40._cacheExpiration <= _this40._yapi.GetTickCount()) {
          if ((yield _this40.load(_this40._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_ADVERTISEDVALUE_INVALID;
          }
        }
        return _this40._advertisedValue;
      })();
    }
    set_advertisedValue(newval) {
      var _this41 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this41._setAttr('advertisedValue', rest_val);
      })();
    }
    static FindFunction(func) {
      let obj;
      obj = YFunction._FindFromCache('Function', func);
      if (obj == null) {
        obj = new YFunction(YAPI, func);
        YFunction._AddToCache('Function', func, obj);
      }
      return obj;
    }
    static FindFunctionInContext(yctx, func) {
      let obj;
      obj = YFunction._FindFromCacheInContext(yctx, 'Function', func);
      if (obj == null) {
        obj = new YFunction(yctx, func);
        YFunction._AddToCache('Function', func, obj);
      }
      return obj;
    }
    registerValueCallback(callback) {
      var _this42 = this;
      return _asyncToGenerator(function*() {
        let val;
        if (callback != null) {
          yield YFunction._UpdateValueCallbackList(_this42, true);
        } else {
          yield YFunction._UpdateValueCallbackList(_this42, false);
        }
        _this42._valueCallbackFunction = callback;
        if (callback != null && (yield _this42.isOnline())) {
          val = _this42._advertisedValue;
          if (!(val == '')) {
            yield _this42._invokeValueCallback(val);
          }
        }
        return 0;
      })();
    }
    _invokeValueCallback(value) {
      var _this43 = this;
      return _asyncToGenerator(function*() {
        if (_this43._valueCallbackFunction != null) {
          yield _this43._valueCallbackFunction(_this43, value);
        } else {}
        return 0;
      })();
    }
    muteValueCallbacks() {
      var _this44 = this;
      return _asyncToGenerator(function*() {
        return yield _this44.set_advertisedValue('SILENT');
      })();
    }
    unmuteValueCallbacks() {
      var _this45 = this;
      return _asyncToGenerator(function*() {
        return yield _this45.set_advertisedValue('');
      })();
    }
    _parserHelper() {
      return _asyncToGenerator(function*() {
        return 0;
      })();
    }
    nextFunction() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YFunction.FindFunctionInContext(this._yapi, next_hwid);
    }
    static FirstFunction() {
      let next_hwid = YAPI.imm_getFirstHardwareId('Function');
      if (next_hwid == null)
        return null;
      return YFunction.FindFunction(next_hwid);
    }
    static FirstFunctionInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Function');
      if (next_hwid == null)
        return null;
      return YFunction.FindFunctionInContext(yctx, next_hwid);
    }
    static _FindFromCacheInContext(yctx, className, func) {
      return yctx.imm_getFunction(className, func);
    }
    static _FindFromCache(className, func) {
      return YAPI.imm_getFunction(className, func);
    }
    static _AddToCache(className, func, obj) {
      obj._yapi.imm_setFunction(className, func, obj);
    }
    static _ClearCache(obj_yapi) {
      if (!obj_yapi)
        obj_yapi = YAPI;
      obj_yapi.imm_init();
    }
    static _UpdateValueCallbackList(obj_func, bool_add) {
      return _asyncToGenerator(function*() {
        yield obj_func._yapi._UpdateValueCallbackList(obj_func, bool_add);
      })();
    }
    static _UpdateTimedReportCallbackList(obj_func, bool_add) {
      return _asyncToGenerator(function*() {
        yield obj_func._yapi._UpdateTimedReportCallbackList(obj_func, bool_add);
      })();
    }
    describe() {
      var _this46 = this;
      return _asyncToGenerator(function*() {
        if (_this46._hwId != '') {
          return _this46._className + '(' + _this46._func + ')=' + _this46._hwId;
        }
        var resolve = _this46._yapi.imm_resolveFunction(_this46._className, _this46._func);
        if (resolve.errorType != YAPI_SUCCESS && resolve.result != _this46._func) {
          return _this46._className + '(' + _this46._func + ')=unresolved';
        }
        return _this46._className + '(' + _this46._func + ')=' + resolve.result;
      })();
    }
    get_hardwareId() {
      var _this47 = this;
      return _asyncToGenerator(function*() {
        if (_this47._hwId != '') {
          return _this47._hwId;
        }
        var resolve = _this47._yapi.imm_resolveFunction(_this47._className, _this47._func);
        if (resolve.errorType != YAPI_SUCCESS) {
          yield _this47.isOnline();
          resolve = _this47._yapi.imm_resolveFunction(_this47._className, _this47._func);
          if (resolve.errorType != YAPI_SUCCESS) {
            return _this47._throw(resolve.errorType, resolve.errorMsg, Y_HARDWAREID_INVALID);
          }
        }
        return resolve.result;
      })();
    }
    get_functionId() {
      var _this48 = this;
      return _asyncToGenerator(function*() {
        if (_this48._funId != '') {
          return _this48._funId;
        }
        var resolve = _this48._yapi.imm_resolveFunction(_this48._className, _this48._func);
        if (resolve.errorType != YAPI_SUCCESS) {
          yield _this48.isOnline();
          resolve = _this48._yapi.imm_resolveFunction(_this48._className, _this48._func);
          if (resolve.errorType != YAPI_SUCCESS) {
            return _this48._throw(resolve.errorType, resolve.errorMsg, Y_FUNCTIONID_INVALID);
          }
        }
        var pos = resolve.result.indexOf('.');
        return resolve.result.substr(pos + 1);
      })();
    }
    imm_get_functionId() {
      if (this._funId != '') {
        return this._funId;
      }
      var resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != YAPI_SUCCESS) {
        return this._throw(resolve.errorType, resolve.errorMsg, Y_FUNCTIONID_INVALID);
      }
      var pos = resolve.result.indexOf('.');
      return resolve.result.substr(pos + 1);
    }
    get_friendlyName() {
      var _this49 = this;
      return _asyncToGenerator(function*() {
        var resolve = _this49._yapi.imm_getFriendlyNameFunction(_this49._className, _this49._func);
        if (resolve.errorType != YAPI_SUCCESS) {
          yield _this49.isOnline();
          resolve = _this49._yapi.imm_getFriendlyNameFunction(_this49._className, _this49._func);
          if (resolve.errorType != YAPI_SUCCESS) {
            return _this49._throw(resolve.errorType, resolve.errorMsg, Y_FRIENDLYNAME_INVALID);
          }
        }
        return resolve.result;
      })();
    }
    _parse(yreq, msValidity) {
      var _this50 = this;
      return _asyncToGenerator(function*() {
        yreq.obj_result['_expiration'] = _this50._yapi.GetTickCount() + msValidity;
        _this50._serial = yreq.obj_result.deviceid;
        _this50._funId = yreq.obj_result.functionid;
        _this50._hwId = yreq.obj_result.hwid;
        _this50._cache = yreq.obj_result;
        for (var key in yreq.obj_result) {
          _this50.imm_parseAttr(key, yreq.obj_result[key]);
        }
        yield _this50._parserHelper();
      })();
    }
    _g(str_attr) {
      this.imm_parseAttr(str_attr, this._cache[str_attr]);
      return this['_' + str_attr];
    }
    isOnline_async(func, ctx) {
      var _this51 = this;
      this.isOnline().then(function(res) {
        func(ctx, _this51, res);
      }).catch(function(e) {
        func(ctx, _this51, false);
      });
    }
    load_async(ms_validiy, func, ctx) {
      var _this52 = this;
      this.load(ms_validiy).then(function(res) {
        func(ctx, _this52, YAPI_SUCCESS);
      }).catch(function(e) {
        func(ctx, _this52, _this52.get_errorType());
      });
    }
    _getAttr(str_attr) {
      var _this53 = this;
      return _asyncToGenerator(function*() {
        if (_this53._cacheExpiration <= _this53._yapi.GetTickCount()) {
          if ((yield _this53.load(_this53._yapi.defaultCacheValidity)) != YAPI_SUCCESS)
            return null;
        }
        if (typeof _this53._cache[str_attr] == 'undefined') {
          _this53._throw(YAPI_VERSION_MISMATCH, 'No such attribute ' + str_attr + ' in function', null);
        }
        return _this53._cache[str_attr];
      })();
    }
    _getFixedAttr(str_attr) {
      var _this54 = this;
      return _asyncToGenerator(function*() {
        if (_this54._cacheExpiration == 0) {
          if ((yield _this54.load(_this54._yapi.defaultCacheValidity)) != YAPI_SUCCESS)
            return null;
        }
        if (typeof _this54._cache[str_attr] == 'undefined') {
          _this54._throw(YAPI_VERSION_MISMATCH, 'No such attribute ' + str_attr + ' in function', null);
        }
        return _this54._cache[str_attr];
      })();
    }
    imm_escapeAttr(str_newval) {
      return escape(str_newval).replace(/[+]/g, '%2B').replace(/%20/g, '+').replace(/%21/g, '!').replace(/%24/g, '$').replace(/%27/g, '\'').replace(/%28/g, '(').replace(/%29/g, ')').replace(/%2[cC]/g, ',').replace(/%2[fF]/g, '/').replace(/%3[aA]/g, ':').replace(/%3[bB]/g, ';').replace(/%3[fF]/g, '?').replace(/%5[bB]/g, '[').replace(/%5[dD]/g, ']');
    }
    _setAttr(str_attr, str_newval) {
      var _this55 = this;
      return _asyncToGenerator(function*() {
        if (str_newval == undefined) {
          return _this55._throw(YAPI_INVALID_ARGUMENT, 'Undefined value to set for attribute ' + str_attr, null);
        }
        var attrname = encodeURIComponent(str_attr);
        var attrval = _this55.imm_escapeAttr(str_newval);
        var extra = '/' + attrname + '?' + attrname + '=' + attrval + '&.';
        if (_this55._cacheExpiration != 0) {
          _this55._cacheExpiration = _this55._yapi.GetTickCount();
          _this55._cache._expiration = _this55._cacheExpiration;
        }
        var yreq = yield _this55._yapi.funcRequest(_this55._className, _this55._func, extra);
        if (yreq.errorType != YAPI_SUCCESS) {
          return _this55._throw(yreq.errorType, yreq.errorMsg, yreq.errorType);
        }
        return YAPI_SUCCESS;
      })();
    }
    _download(str_path) {
      var _this56 = this;
      return _asyncToGenerator(function*() {
        let devid = _this56._serial;
        if (devid == '') {
          devid = yield (yield _this56.module()).get_serialNumber();
        }
        if (devid == Y_SERIALNUMBER_INVALID) {
          return new Uint8Array(0);
        }
        let yreq = yield _this56._yapi.devRequest(devid, 'GET /' + str_path, null, 0);
        if (yreq.errorType != YAPI_SUCCESS) {
          return _this56._throw(yreq.errorType, yreq.errorMsg, '');
        }
        return yreq.bin_result;
      })();
    }
    _downloadOutOfBand(str_path) {
      var _this57 = this;
      return _asyncToGenerator(function*() {
        let devid = _this57._serial;
        if (devid == '') {
          devid = yield (yield _this57.module()).get_serialNumber();
        }
        if (devid == Y_SERIALNUMBER_INVALID) {
          return new Uint8Array(0);
        }
        let yreq = yield _this57._yapi.devRequest(devid, 'GET /' + str_path, null, 1);
        if (yreq.errorType != YAPI_SUCCESS) {
          return _this57._throw(yreq.errorType, yreq.errorMsg, '');
        }
        return yreq.bin_result;
      })();
    }
    _uploadWithProgress(str_path, bin_content, fun_progressCb) {
      var _this58 = this;
      return _asyncToGenerator(function*() {
        var devid = _this58._serial;
        if (devid == '') {
          devid = yield (yield _this58.module()).get_serialNumber();
        }
        if (devid == Y_SERIALNUMBER_INVALID) {
          return _this58.get_errorType();
        }
        var httpreq = 'POST /upload.html';
        var len = bin_content.length;
        if (typeof bin_content == 'string' || bin_content instanceof String) {
          bin_content = _this58._yapi.imm_str2bin(bin_content);
        } else if (bin_content instanceof Array) {
          bin_content = new Uint8Array(bin_content);
        }
        return yield _this58._yapi.devRequest(devid, httpreq, new YHTTPBody(str_path, bin_content, fun_progressCb), 0);
      })();
    }
    _upload(str_path, bin_content) {
      var _this59 = this;
      return _asyncToGenerator(function*() {
        return _this59._uploadWithProgress(str_path, bin_content, null);
      })();
    }
    wait_async(callback, context) {
      var _this60 = this;
      var devid = this._serial;
      if (devid == '') {
        this.module().then(function(module) {
          return module.get_serialNumber().then(function() {
            return _this60.wait_async(callback, context);
          });
        });
        return YAPI_SUCCESS;
      }
      if (devid == Y_SERIALNUMBER_INVALID) {
        callback(context, this);
        return YAPI_SUCCESS;
      }
      var lockdev = this._yapi.imm_getDevice(devid);
      var delayedCode = function() {
        callback(context, _this60);
      };
      lockdev._pendingQueries = lockdev._pendingQueries.then(delayedCode, delayedCode);
      return YAPI_SUCCESS;
    }
    imm_json_get_key(bin_jsonbuff, str_key) {
      var loadval = JSON.parse(this._yapi.imm_bin2str(bin_jsonbuff));
      if (typeof loadval[str_key] != 'undefined') {
        return loadval[str_key];
      }
      return '';
    }
    imm_json_get_string(bin_jsonbuff) {
      return JSON.parse(this._yapi.imm_bin2str(bin_jsonbuff));
    }
    imm_json_get_array(bin_jsonbuff) {
      var loadval = JSON.parse(this._yapi.imm_bin2str(bin_jsonbuff));
      var res = [];
      for (var idx in loadval) {
        res.push(JSON.stringify(loadval[idx]));
      }
      return res;
    }
    imm_get_json_path(str_json, str_path) {
      var json = JSON.parse(str_json);
      var paths = str_path.split('|');
      for (var i = 0; i < paths.length; i++) {
        var tmp = paths[i];
        json = json[tmp];
        if (json == undefined) {
          return '';
        }
      }
      return JSON.stringify(json);
    }
    imm_decode_json_string(str_json) {
      return JSON.parse(str_json);
    }
    imm_findDataStream(obj_dataset, str_def) {
      let key = obj_dataset.imm_get_functionId() + ':' + str_def;
      if (this._dataStreams[key])
        return this._dataStreams[key];
      var newDataStream = new YDataStream(this, obj_dataset, this._yapi.imm_decodeWords(str_def));
      this._dataStreams[key] = newDataStream;
      return newDataStream;
    }
    clearDataStreamCache() {
      var _this61 = this;
      return _asyncToGenerator(function*() {
        _this61._dataStreams = {};
      })();
    }
    isOnline() {
      var _this62 = this;
      return _asyncToGenerator(function*() {
        if (_this62._cacheExpiration > _this62._yapi.GetTickCount())
          return true;
        let yreq = yield _this62._yapi.funcRequest(_this62._className, _this62._func, '', _this62._yapi.defaultCacheValidity);
        if (yreq.errorType != YAPI_SUCCESS) {
          if (yreq.errorType == YAPI_DEVICE_BUSY) {
            return true;
          } else {
            return false;
          }
        }
        yield _this62._parse(yreq, _this62._yapi.defaultCacheValidity);
        return true;
      })();
    }
    get_errorType() {
      return this._lastErrorType;
    }
    get_errorMessage() {
      return this._lastErrorMsg;
    }
    load(msValidity) {
      var _this63 = this;
      return _asyncToGenerator(function*() {
        let yreq = yield _this63._yapi.funcRequest(_this63._className, _this63._func, '', msValidity);
        if (yreq.errorType != YAPI_SUCCESS) {
          return _this63._throw(yreq.errorType, yreq.errorMsg, yreq.errorType);
        }
        yield _this63._parse(yreq, msValidity);
        return YAPI_SUCCESS;
      })();
    }
    clearCache() {
      var _this64 = this;
      return _asyncToGenerator(function*() {
        var devreq = yield _this64._yapi._funcDev(_this64._className, _this64._func);
        if (devreq.errorType != YAPI_SUCCESS) {
          return;
        }
        devreq.obj_result.device.imm_dropCache();
        if (_this64._cacheExpiration > 0) {
          _this64._cacheExpiration = _this64._yapi.GetTickCount();
        }
      })();
    }
    module() {
      var _this65 = this;
      return _asyncToGenerator(function*() {
        if (_this65._serial != '') {
          return YModule.FindModuleInContext(_this65._yapi, _this65._serial + '.module');
        }
        var hwid = _this65._func;
        var resolve;
        if (hwid.indexOf('.') < 0) {
          resolve = _this65._yapi.imm_resolveFunction(_this65._className, _this65._func);
          if (resolve.errorType == YAPI_SUCCESS)
            hwid = resolve.result;
        }
        var dotidx = hwid.indexOf('.');
        if (dotidx >= 0) {
          return YModule.FindModuleInContext(_this65._yapi, hwid.substr(0, dotidx) + '.module');
        }
        if ((yield _this65.load(_this65._yapi.defaultCacheValidity)) == YAPI_SUCCESS) {
          resolve = _this65._yapi.imm_resolveFunction(_this65._className, _this65._func);
          if (resolve.result != undefined)
            hwid = resolve.result;
        }
        dotidx = hwid.indexOf('.');
        if (dotidx >= 0) {
          return YModule.FindModuleInContext(_this65._yapi, hwid.substr(0, dotidx) + '.module');
        }
        return YModule.FindModuleInContext(_this65._yapi, 'module_of_' + _this65.className + '_' + _this65._func);
      })();
    }
    get_module() {
      var _this66 = this;
      return _asyncToGenerator(function*() {
        return yield _this66.module();
      })();
    }
    get_functionDescriptor() {
      var _this67 = this;
      return _asyncToGenerator(function*() {
        if (_this67._hwId != '') {
          return _this67._hwId;
        }
        var hwid = _this67._func;
        if (hwid.indexOf('.') < 0) {
          var resolve = _this67._yapi.imm_resolveFunction(_this67._className, _this67._func);
          if (resolve.errorType != YAPI_SUCCESS)
            hwid = resolve.result;
        }
        var dotidx = hwid.indexOf('.');
        if (dotidx >= 0) {
          return hwid;
        }
        return Y_FUNCTIONDESCRIPTOR_INVALID;
      })();
    }
    get_userData() {
      var _this68 = this;
      return _asyncToGenerator(function*() {
        return _this68._userData;
      })();
    }
    set_userData(data) {
      var _this69 = this;
      return _asyncToGenerator(function*() {
        _this69._userData = data;
      })();
    }
  }
  exports.YFunction = YFunction;
  class YFunctionProxy {
    constructor(obj_func) {
      this.liveFunc = obj_func;
      this._yapi = obj_func._yapi;
    }
    _asyncInit() {
      return _asyncToGenerator(function*() {})();
    }
    _throw(int_errType, str_errMsg, obj_retVal) {
      this.liveFunc._lastErrorType = int_errType;
      this.liveFunc._lastErrorMsg = str_errMsg;
      this._yapi._throw(int_errType, str_errMsg, obj_retVal);
    }
    get_logicalName() {
      return this.liveFunc._logicalName;
    }
    set_logicalName(newval) {
      this.liveFunc.set_logicalName(newval);
      return this._yapi.SUCCESS;
    }
    get_advertisedValue() {
      return this.liveFunc._advertisedValue;
    }
    registerValueCallback(callback) {
      var _this70 = this;
      if (callback) {
        this.liveFunc.registerValueCallback(function(obj, value) {
          callback(_this70, value);
        });
      } else {
        this.liveFunc.registerValueCallback(null);
      }
    }
    muteValueCallbacks() {
      this.liveFunc.muteValueCallbacks();
      return this._yapi.SUCCESS;
    }
    unmuteValueCallbacks() {
      this.liveFunc.unmuteValueCallbacks();
      return this._yapi.SUCCESS;
    }
    isOnline_async(func, ctx) {
      var _this71 = this;
      this.liveFunc.isOnline().then(function(res) {
        func(ctx, _this71, res);
      }).catch(function(e) {
        func(ctx, _this71, false);
      });
    }
    load_async(ms_validiy, func, ctx) {
      var _this72 = this;
      this.liveFunc.load(ms_validiy).then(function(res) {
        func(ctx, _this72, YAPI_SUCCESS);
      }).catch(function(e) {
        func(ctx, _this72, _this72.get_errorType());
      });
    }
    _getAttr(str_attr) {
      if (typeof this.liveFunc._cache[str_attr] == 'undefined') {
        this._throw(YAPI_VERSION_MISMATCH, 'No such attribute ' + str_attr + ' in function', null);
      }
      return this.liveFunc._cache[str_attr];
    }
    _setAttr(str_attr, str_newval) {
      this.liveFunc._setAttr(str_attr, str_newval);
      return YAPI_SUCCESS;
    }
    _download(str_path) {
      var _this73 = this;
      return _asyncToGenerator(function*() {
        _this73.liveFunc._download(str_path);
        return null;
      })();
    }
    _upload(str_path, bin_content) {
      var _this74 = this;
      return _asyncToGenerator(function*() {
        _this74.liveFunc._upload(str_path, bin_content);
        return null;
      })();
    }
    wait_async(callback, context) {
      var _this75 = this;
      setTimeout(function() {
        _this75.liveFunc.wait_async(function(ctx, obj) {
          callback(ctx, _this75);
        }, context);
      }, 100);
    }
    isOnline() {
      var resolve = this._yapi.imm_resolveFunction(this.liveFunc._className, this.liveFunc._func);
      return resolve.errorType == YAPI_SUCCESS;
    }
    get_errorType() {
      return this.liveFunc._lastErrorType;
    }
    get_errorMessage() {
      return this.liveFunc._lastErrorMsg;
    }
    load(msValidity) {
      this.liveFunc.load(msValidity).catch(function(e) {
        console.log('Exception loading syncProxy: ', e);
      });
      return YAPI_SUCCESS;
    }
    module() {
      var yapi = this._yapi;
      if (this.liveFunc._serial != '') {
        return YModule.FindModuleInContext(yapi, this.liveFunc._serial + '.module').get_syncProxy();
      }
      var className = this.liveFunc._className;
      var hwid = this.liveFunc._func;
      var resolve;
      if (hwid.indexOf('.') < 0) {
        resolve = yapi.imm_resolveFunction(className, this.liveFunc._func);
        if (resolve.errorType == YAPI_SUCCESS)
          hwid = resolve.result;
      }
      var dotidx = hwid.indexOf('.');
      if (dotidx >= 0) {
        return YModule.FindModuleInContext(yapi, hwid.substr(0, dotidx) + '.module').get_syncProxy();
      }
      return YModule.FindModuleInContext(yapi, 'module_of_' + className + '_' + this.liveFunc._func).get_syncProxy();
    }
    get_module() {
      return this.module();
    }
    get_functionDescriptor() {
      if (this.liveFunc._hwId != '') {
        return this.liveFunc._hwId;
      }
      var hwid = this.liveFunc._func;
      if (hwid.indexOf('.') < 0) {
        var resolve = this._yapi.imm_resolveFunction(this.liveFunc._className, this.liveFunc._func);
        if (resolve.errorType != YAPI_SUCCESS)
          hwid = resolve.result;
      }
      var dotidx = hwid.indexOf('.');
      if (dotidx >= 0) {
        return hwid;
      }
      return Y_FUNCTIONDESCRIPTOR_INVALID;
    }
    get_userData() {
      return this.liveFunc._userData;
    }
    set_userData(data) {
      this.liveFunc._userData = data;
    }
  }
  exports.YFunctionProxy = YFunctionProxy;
  class YModule extends YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Module';
      this._productName = Y_PRODUCTNAME_INVALID;
      this._serialNumber = Y_SERIALNUMBER_INVALID;
      this._productId = Y_PRODUCTID_INVALID;
      this._productRelease = Y_PRODUCTRELEASE_INVALID;
      this._firmwareRelease = Y_FIRMWARERELEASE_INVALID;
      this._persistentSettings = Y_PERSISTENTSETTINGS_INVALID;
      this._luminosity = Y_LUMINOSITY_INVALID;
      this._beacon = Y_BEACON_INVALID;
      this._upTime = Y_UPTIME_INVALID;
      this._usbCurrent = Y_USBCURRENT_INVALID;
      this._rebootCountdown = Y_REBOOTCOUNTDOWN_INVALID;
      this._userVar = Y_USERVAR_INVALID;
      this._logCallback = null;
      this.imm_setConst({
        PRODUCTNAME_INVALID: YAPI_INVALID_STRING,
        SERIALNUMBER_INVALID: YAPI_INVALID_STRING,
        PRODUCTID_INVALID: YAPI_INVALID_UINT,
        PRODUCTRELEASE_INVALID: YAPI_INVALID_UINT,
        FIRMWARERELEASE_INVALID: YAPI_INVALID_STRING,
        PERSISTENTSETTINGS_LOADED: 0,
        PERSISTENTSETTINGS_SAVED: 1,
        PERSISTENTSETTINGS_MODIFIED: 2,
        PERSISTENTSETTINGS_INVALID: -1,
        LUMINOSITY_INVALID: YAPI_INVALID_UINT,
        BEACON_OFF: 0,
        BEACON_ON: 1,
        BEACON_INVALID: -1,
        UPTIME_INVALID: YAPI_INVALID_LONG,
        USBCURRENT_INVALID: YAPI_INVALID_UINT,
        REBOOTCOUNTDOWN_INVALID: YAPI_INVALID_INT,
        USERVAR_INVALID: YAPI_INVALID_INT
      });
      let devid = this._func;
      let dotidx = devid.indexOf('.');
      if (dotidx > 0)
        devid = devid.substr(0, dotidx);
      let dev = this._yapi.imm_getDevice(devid);
      if (dev) {
        this._serial = dev.imm_getSerialNumber();
        this._funId = 'module';
        this._hwId = this._serial + '.module';
      }
    }
    _throw(int_errType, str_errMsg, obj_retVal) {
      this._lastErrorType = int_errType;
      this._lastErrorMsg = str_errMsg;
      this._yapi._throw(int_errType, str_errMsg, obj_retVal);
    }
    imm_getDev() {
      let devid = this._func;
      let dotidx = devid.indexOf('.');
      if (dotidx > 0)
        devid = devid.substr(0, dotidx);
      let dev = this._yapi.imm_getDevice(devid);
      if (!dev) {
        this._throw(YAPI_DEVICE_NOT_FOUND, 'Device [' + devid + '] is not online', null);
      }
      return dev;
    }
    functionCount() {
      var _this76 = this;
      return _asyncToGenerator(function*() {
        let dev = _this76.imm_getDev();
        if (!dev)
          return YAPI_DEVICE_NOT_FOUND;
        return dev.imm_functionCount();
      })();
    }
    functionId(functionIndex) {
      var _this77 = this;
      return _asyncToGenerator(function*() {
        let dev = _this77.imm_getDev();
        if (!dev)
          return '';
        return dev.imm_functionId(functionIndex);
      })();
    }
    functionType(functionIndex) {
      var _this78 = this;
      return _asyncToGenerator(function*() {
        let dev = _this78.imm_getDev();
        if (!dev)
          return '';
        return dev.imm_functionType(functionIndex);
      })();
    }
    functionBaseType(functionIndex) {
      var _this79 = this;
      return _asyncToGenerator(function*() {
        let dev = _this79.imm_getDev();
        if (!dev)
          return '';
        return dev.imm_functionBaseType(functionIndex);
      })();
    }
    functionName(functionIndex) {
      var _this80 = this;
      return _asyncToGenerator(function*() {
        let dev = _this80.imm_getDev();
        if (!dev)
          return '';
        return dev.imm_functionName(functionIndex);
      })();
    }
    functionValue(functionIndex) {
      var _this81 = this;
      return _asyncToGenerator(function*() {
        let dev = _this81.imm_getDev();
        if (!dev)
          return '';
        return dev.imm_functionValue(functionIndex);
      })();
    }
    get_logicalName() {
      var _this82 = this;
      return _asyncToGenerator(function*() {
        var dev = _this82.imm_getDev();
        if (dev != null && _this82._cache._expiration <= _this82._yapi.GetTickCount()) {
          return dev._logicalName;
        }
        var json_val = yield _this82._getAttr('logicalName');
        return json_val == null ? Y_LOGICALNAME_INVALID : json_val;
      })();
    }
    imm_flattenJsonStruct(jsoncomplex) {
      var decoded = JSON.parse(this._yapi.imm_bin2str(jsoncomplex));
      var attrs = [];
      for (var function_name in decoded) {
        if (function_name == 'services')
          continue;
        var function_attrs = decoded[function_name];
        for (var attr_name in function_attrs) {
          let attr_value = function_attrs[attr_name];
          if (attr_value === null || typeof attr_value === 'object') {
            continue;
          }
          var flat = function_name + '/' + attr_name + '=' + attr_value;
          attrs.push(flat);
        }
      }
      return this._yapi.imm_str2bin(JSON.stringify(attrs));
    }
    get_syncProxy() {
      var _this83 = this;
      return _asyncToGenerator(function*() {
        if (_this83._cacheExpiration <= _this83._yapi.GetTickCount()) {
          try {
            yield _this83.load(_this83._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YModuleProxy(_this83);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'productName':
          this._productName = val;
          return 1;
        case 'serialNumber':
          this._serialNumber = val;
          return 1;
        case 'productId':
          this._productId = parseInt(val);
          return 1;
        case 'productRelease':
          this._productRelease = parseInt(val);
          return 1;
        case 'firmwareRelease':
          this._firmwareRelease = val;
          return 1;
        case 'persistentSettings':
          this._persistentSettings = parseInt(val);
          return 1;
        case 'luminosity':
          this._luminosity = parseInt(val);
          return 1;
        case 'beacon':
          this._beacon = parseInt(val);
          return 1;
        case 'upTime':
          this._upTime = parseInt(val);
          return 1;
        case 'usbCurrent':
          this._usbCurrent = parseInt(val);
          return 1;
        case 'rebootCountdown':
          this._rebootCountdown = parseInt(val);
          return 1;
        case 'userVar':
          this._userVar = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_productName() {
      var _this84 = this;
      return _asyncToGenerator(function*() {
        let dev;
        if (_this84._cacheExpiration == 0) {
          dev = _this84.imm_getDev();
          if (!(dev == null)) {
            return dev.imm_getProductName();
          }
          if ((yield _this84.load(_this84._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_PRODUCTNAME_INVALID;
          }
        }
        return _this84._productName;
      })();
    }
    get_serialNumber() {
      var _this85 = this;
      return _asyncToGenerator(function*() {
        let dev;
        if (_this85._cacheExpiration == 0) {
          dev = _this85.imm_getDev();
          if (!(dev == null)) {
            return dev.imm_getSerialNumber();
          }
          if ((yield _this85.load(_this85._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_SERIALNUMBER_INVALID;
          }
        }
        return _this85._serialNumber;
      })();
    }
    get_productId() {
      var _this86 = this;
      return _asyncToGenerator(function*() {
        let dev;
        if (_this86._cacheExpiration == 0) {
          dev = _this86.imm_getDev();
          if (!(dev == null)) {
            return dev.imm_getProductId();
          }
          if ((yield _this86.load(_this86._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_PRODUCTID_INVALID;
          }
        }
        return _this86._productId;
      })();
    }
    get_productRelease() {
      var _this87 = this;
      return _asyncToGenerator(function*() {
        if (_this87._cacheExpiration <= _this87._yapi.GetTickCount()) {
          if ((yield _this87.load(_this87._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_PRODUCTRELEASE_INVALID;
          }
        }
        return _this87._productRelease;
      })();
    }
    get_firmwareRelease() {
      var _this88 = this;
      return _asyncToGenerator(function*() {
        if (_this88._cacheExpiration <= _this88._yapi.GetTickCount()) {
          if ((yield _this88.load(_this88._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_FIRMWARERELEASE_INVALID;
          }
        }
        return _this88._firmwareRelease;
      })();
    }
    get_persistentSettings() {
      var _this89 = this;
      return _asyncToGenerator(function*() {
        if (_this89._cacheExpiration <= _this89._yapi.GetTickCount()) {
          if ((yield _this89.load(_this89._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_PERSISTENTSETTINGS_INVALID;
          }
        }
        return _this89._persistentSettings;
      })();
    }
    set_persistentSettings(newval) {
      var _this90 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this90._setAttr('persistentSettings', rest_val);
      })();
    }
    get_luminosity() {
      var _this91 = this;
      return _asyncToGenerator(function*() {
        if (_this91._cacheExpiration <= _this91._yapi.GetTickCount()) {
          if ((yield _this91.load(_this91._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_LUMINOSITY_INVALID;
          }
        }
        return _this91._luminosity;
      })();
    }
    set_luminosity(newval) {
      var _this92 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this92._setAttr('luminosity', rest_val);
      })();
    }
    get_beacon() {
      var _this93 = this;
      return _asyncToGenerator(function*() {
        let dev;
        if (_this93._cacheExpiration <= _this93._yapi.GetTickCount()) {
          dev = _this93.imm_getDev();
          if (!(dev == null)) {
            return dev.imm_getBeacon();
          }
          if ((yield _this93.load(_this93._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_BEACON_INVALID;
          }
        }
        return _this93._beacon;
      })();
    }
    set_beacon(newval) {
      var _this94 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this94._setAttr('beacon', rest_val);
      })();
    }
    get_upTime() {
      var _this95 = this;
      return _asyncToGenerator(function*() {
        if (_this95._cacheExpiration <= _this95._yapi.GetTickCount()) {
          if ((yield _this95.load(_this95._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_UPTIME_INVALID;
          }
        }
        return _this95._upTime;
      })();
    }
    get_usbCurrent() {
      var _this96 = this;
      return _asyncToGenerator(function*() {
        if (_this96._cacheExpiration <= _this96._yapi.GetTickCount()) {
          if ((yield _this96.load(_this96._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_USBCURRENT_INVALID;
          }
        }
        return _this96._usbCurrent;
      })();
    }
    get_rebootCountdown() {
      var _this97 = this;
      return _asyncToGenerator(function*() {
        if (_this97._cacheExpiration <= _this97._yapi.GetTickCount()) {
          if ((yield _this97.load(_this97._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_REBOOTCOUNTDOWN_INVALID;
          }
        }
        return _this97._rebootCountdown;
      })();
    }
    set_rebootCountdown(newval) {
      var _this98 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this98._setAttr('rebootCountdown', rest_val);
      })();
    }
    get_userVar() {
      var _this99 = this;
      return _asyncToGenerator(function*() {
        if (_this99._cacheExpiration <= _this99._yapi.GetTickCount()) {
          if ((yield _this99.load(_this99._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_USERVAR_INVALID;
          }
        }
        return _this99._userVar;
      })();
    }
    set_userVar(newval) {
      var _this100 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(newval);
        return yield _this100._setAttr('userVar', rest_val);
      })();
    }
    static FindModule(func) {
      let obj;
      obj = YFunction._FindFromCache('Module', func);
      if (obj == null) {
        obj = new YModule(YAPI, func);
        YFunction._AddToCache('Module', func, obj);
      }
      return obj;
    }
    static FindModuleInContext(yctx, func) {
      let obj;
      obj = YFunction._FindFromCacheInContext(yctx, 'Module', func);
      if (obj == null) {
        obj = new YModule(yctx, func);
        YFunction._AddToCache('Module', func, obj);
      }
      return obj;
    }
    saveToFlash() {
      var _this101 = this;
      return _asyncToGenerator(function*() {
        return yield _this101.set_persistentSettings(Y_PERSISTENTSETTINGS_SAVED);
      })();
    }
    revertFromFlash() {
      var _this102 = this;
      return _asyncToGenerator(function*() {
        return yield _this102.set_persistentSettings(Y_PERSISTENTSETTINGS_LOADED);
      })();
    }
    reboot(secBeforeReboot) {
      var _this103 = this;
      return _asyncToGenerator(function*() {
        return yield _this103.set_rebootCountdown(secBeforeReboot);
      })();
    }
    triggerFirmwareUpdate(secBeforeReboot) {
      var _this104 = this;
      return _asyncToGenerator(function*() {
        return yield _this104.set_rebootCountdown(-secBeforeReboot);
      })();
    }
    checkFirmware(path, onlynew) {
      var _this105 = this;
      return _asyncToGenerator(function*() {
        let serial;
        let release;
        let tmp_res;
        if (onlynew) {
          release = _this105._yapi.imm_atoi((yield _this105.get_firmwareRelease()));
        } else {
          release = 0;
        }
        serial = yield _this105.get_serialNumber();
        tmp_res = yield YFirmwareUpdate.CheckFirmware(serial, path, release);
        if (tmp_res.indexOf('error:') == 0) {
          _this105._throw(YAPI_INVALID_ARGUMENT, tmp_res);
        }
        return tmp_res;
      })();
    }
    updateFirmwareEx(path, force) {
      var _this106 = this;
      return _asyncToGenerator(function*() {
        let serial;
        let settings;
        serial = yield _this106.get_serialNumber();
        settings = yield _this106.get_allSettings();
        if (settings.length == 0) {
          _this106._throw(YAPI_IO_ERROR, 'Unable to get device settings');
          settings = _this106._yapi.imm_str2bin('error:Unable to get device settings');
        }
        return new YFirmwareUpdate(_this106._yapi, serial, path, settings, force);
      })();
    }
    updateFirmware(path) {
      var _this107 = this;
      return _asyncToGenerator(function*() {
        return yield _this107.updateFirmwareEx(path, false);
      })();
    }
    get_allSettings() {
      var _this108 = this;
      return _asyncToGenerator(function*() {
        let settings;
        let json;
        let res;
        let sep;
        let name;
        let item;
        let t_type;
        let id;
        let url;
        let file_data;
        let file_data_bin;
        let temp_data_bin;
        let ext_settings;
        let filelist = [];
        let templist = [];
        settings = yield _this108._download('api.json');
        if (settings.length == 0) {
          return settings;
        }
        ext_settings = ', "extras":[';
        templist = yield _this108.get_functionIds('Temperature');
        sep = '';
        for (let ii in templist) {
          if (_this108._yapi.imm_atoi((yield _this108.get_firmwareRelease())) > 9000) {
            url = 'api/' + templist[ii] + '/sensorType';
            t_type = _this108._yapi.imm_bin2str((yield _this108._download(url)));
            if (t_type == 'RES_NTC') {
              id = templist[ii].substr(11, templist[ii].length - 11);
              temp_data_bin = yield _this108._download('extra.json?page=' + id);
              if (temp_data_bin.length == 0) {
                return temp_data_bin;
              }
              item = sep + '{"fid":"' + templist[ii] + '", "json":' + _this108._yapi.imm_bin2str(temp_data_bin) + '}\n';
              ext_settings = ext_settings + item;
              sep = ',';
            }
          }
        }
        ext_settings = ext_settings + '],\n"files":[';
        if (yield _this108.hasFunction('files')) {
          json = yield _this108._download('files.json?a=dir&f=');
          if (json.length == 0) {
            return json;
          }
          filelist = _this108.imm_json_get_array(json);
          sep = '';
          for (let ii in filelist) {
            name = _this108.imm_json_get_key(_this108._yapi.imm_str2bin(filelist[ii]), 'name');
            if (name.length > 0 && !(name == 'startupConf.json')) {
              file_data_bin = yield _this108._download(_this108.imm_escapeAttr(name));
              file_data = _this108._yapi.imm_bin2hexstr(file_data_bin);
              item = sep + '{"name":"' + name + '", "data":"' + file_data + '"}\n';
              ext_settings = ext_settings + item;
              sep = ',';
            }
          }
        }
        res = _this108._yapi.imm_str2bin('{ "api":' + _this108._yapi.imm_bin2str(settings) + ext_settings + ']}');
        return res;
      })();
    }
    loadThermistorExtra(funcId, jsonExtra) {
      var _this109 = this;
      return _asyncToGenerator(function*() {
        let values = [];
        let url;
        let curr;
        let currTemp;
        let ofs;
        let size;
        url = 'api/' + funcId + '.json?command=Z';
        yield _this109._download(url);
        values = _this109.imm_json_get_array(_this109._yapi.imm_str2bin(jsonExtra));
        ofs = 0;
        size = values.length;
        while (ofs + 1 < size) {
          curr = values[ofs];
          currTemp = values[ofs + 1];
          url = 'api/' + funcId + '/.json?command=m' + curr + ':' + currTemp;
          yield _this109._download(url);
          ofs = ofs + 2;
        }
        return YAPI_SUCCESS;
      })();
    }
    set_extraSettings(jsonExtra) {
      var _this110 = this;
      return _asyncToGenerator(function*() {
        let extras = [];
        let functionId;
        let data;
        extras = _this110.imm_json_get_array(_this110._yapi.imm_str2bin(jsonExtra));
        for (let ii in extras) {
          functionId = _this110.imm_get_json_path(extras[ii], 'fid');
          functionId = _this110.imm_decode_json_string(functionId);
          data = _this110.imm_get_json_path(extras[ii], 'json');
          if (yield _this110.hasFunction(functionId)) {
            yield _this110.loadThermistorExtra(functionId, data);
          }
        }
        return YAPI_SUCCESS;
      })();
    }
    set_allSettingsAndFiles(settings) {
      var _this111 = this;
      return _asyncToGenerator(function*() {
        let down;
        let json;
        let json_api;
        let json_files;
        let json_extra;
        json = _this111._yapi.imm_bin2str(settings);
        json_api = _this111.imm_get_json_path(json, 'api');
        if (json_api == '') {
          return yield _this111.set_allSettings(settings);
        }
        json_extra = _this111.imm_get_json_path(json, 'extras');
        if (!(json_extra == '')) {
          yield _this111.set_extraSettings(json_extra);
        }
        yield _this111.set_allSettings(_this111._yapi.imm_str2bin(json_api));
        if (yield _this111.hasFunction('files')) {
          let files = [];
          let res;
          let name;
          let data;
          down = yield _this111._download('files.json?a=format');
          res = _this111.imm_get_json_path(_this111._yapi.imm_bin2str(down), 'res');
          res = _this111.imm_decode_json_string(res);
          if (!(res == 'ok')) {
            return _this111._throw(YAPI_IO_ERROR, 'format failed', YAPI_IO_ERROR);
          }
          json_files = _this111.imm_get_json_path(json, 'files');
          files = _this111.imm_json_get_array(_this111._yapi.imm_str2bin(json_files));
          for (let ii in files) {
            name = _this111.imm_get_json_path(files[ii], 'name');
            name = _this111.imm_decode_json_string(name);
            data = _this111.imm_get_json_path(files[ii], 'data');
            data = _this111.imm_decode_json_string(data);
            yield _this111._upload(name, _this111._yapi.imm_hexstr2bin(data));
            ;
          }
        }
        return YAPI_SUCCESS;
      })();
    }
    hasFunction(funcId) {
      var _this112 = this;
      return _asyncToGenerator(function*() {
        let count;
        let i;
        let fid;
        count = yield _this112.functionCount();
        i = 0;
        while (i < count) {
          fid = yield _this112.functionId(i);
          if (fid == funcId) {
            return true;
          }
          i = i + 1;
        }
        return false;
      })();
    }
    get_functionIds(funType) {
      var _this113 = this;
      return _asyncToGenerator(function*() {
        let count;
        let i;
        let ftype;
        let res = [];
        count = yield _this113.functionCount();
        i = 0;
        while (i < count) {
          ftype = yield _this113.functionType(i);
          if (ftype == funType) {
            res.push((yield _this113.functionId(i)));
          } else {
            ftype = yield _this113.functionBaseType(i);
            if (ftype == funType) {
              res.push((yield _this113.functionId(i)));
            }
          }
          i = i + 1;
        }
        return res;
      })();
    }
    calibVersion(cparams) {
      return _asyncToGenerator(function*() {
        if (cparams == '0,') {
          return 3;
        }
        if (cparams.indexOf(',') >= 0) {
          if (cparams.indexOf(' ') > 0) {
            return 3;
          } else {
            return 1;
          }
        }
        if (cparams == '' || cparams == '0') {
          return 1;
        }
        if (cparams.length < 2 || cparams.indexOf('.') >= 0) {
          return 0;
        } else {
          return 2;
        }
      })();
    }
    calibScale(unit_name, sensorType) {
      var _this114 = this;
      return _asyncToGenerator(function*() {
        if (unit_name == 'g' || unit_name == 'gauss' || unit_name == 'W') {
          return 1000;
        }
        if (unit_name == 'C') {
          if (sensorType == '') {
            return 16;
          }
          if (_this114._yapi.imm_atoi(sensorType) < 8) {
            return 16;
          } else {
            return 100;
          }
        }
        if (unit_name == 'm' || unit_name == 'deg') {
          return 10;
        }
        return 1;
      })();
    }
    calibOffset(unit_name) {
      return _asyncToGenerator(function*() {
        if (unit_name == '% RH' || unit_name == 'mbar' || unit_name == 'lx') {
          return 0;
        }
        return 32767;
      })();
    }
    calibConvert(param, currentFuncValue, unit_name, sensorType) {
      var _this115 = this;
      return _asyncToGenerator(function*() {
        let paramVer;
        let funVer;
        let funScale;
        let funOffset;
        let paramScale;
        let paramOffset;
        let words = [];
        let words_str = [];
        let calibData = [];
        let iCalib = [];
        let calibType;
        let i;
        let maxSize;
        let ratio;
        let nPoints;
        let wordVal;
        paramVer = yield _this115.calibVersion(param);
        funVer = yield _this115.calibVersion(currentFuncValue);
        funScale = yield _this115.calibScale(unit_name, sensorType);
        funOffset = yield _this115.calibOffset(unit_name);
        paramScale = funScale;
        paramOffset = funOffset;
        if (funVer < 3) {
          if (funVer == 2) {
            words = _this115._yapi.imm_decodeWords(currentFuncValue);
            if (words[0] == 1366 && words[1] == 12500) {
              funScale = 1;
              funOffset = 0;
            } else {
              funScale = words[1];
              funOffset = words[0];
            }
          } else {
            if (funVer == 1) {
              if (currentFuncValue == '' || _this115._yapi.imm_atoi(currentFuncValue) > 10) {
                funScale = 0;
              }
            }
          }
        }
        calibData.length = 0;
        calibType = 0;
        if (paramVer < 3) {
          if (paramVer == 2) {
            words = _this115._yapi.imm_decodeWords(param);
            if (words[0] == 1366 && words[1] == 12500) {
              paramScale = 1;
              paramOffset = 0;
            } else {
              paramScale = words[1];
              paramOffset = words[0];
            }
            if (words.length >= 3 && words[2] > 0) {
              maxSize = 3 + 2 * (words[2] % 10);
              if (maxSize > words.length) {
                maxSize = words.length;
              }
              i = 3;
              while (i < maxSize) {
                calibData.push(words[i]);
                i = i + 1;
              }
            }
          } else {
            if (paramVer == 1) {
              words_str = param.split(',');
              for (let ii in words_str) {
                words.push(_this115._yapi.imm_atoi(words_str[ii]));
              }
              if (param == '' || words[0] > 10) {
                paramScale = 0;
              }
              if (words.length > 0 && words[0] > 0) {
                maxSize = 1 + 2 * (words[0] % 10);
                if (maxSize > words.length) {
                  maxSize = words.length;
                }
                i = 1;
                while (i < maxSize) {
                  calibData.push(words[i]);
                  i = i + 1;
                }
              }
            } else {
              if (paramVer == 0) {
                ratio = parseFloat(param);
                if (ratio > 0) {
                  calibData.push(0.0);
                  calibData.push(0.0);
                  calibData.push(Math.round(65535 / ratio));
                  calibData.push(65535.0);
                }
              }
            }
          }
          i = 0;
          while (i < calibData.length) {
            if (paramScale > 0) {
              calibData[i] = (calibData[i] - paramOffset) / paramScale;
            } else {
              calibData[i] = _this115._yapi.imm_decimalToDouble(Math.round(calibData[i]));
            }
            i = i + 1;
          }
        } else {
          iCalib = _this115._yapi.imm_decodeFloats(param);
          calibType = Math.round(iCalib[0] / 1000.0);
          if (calibType >= 30) {
            calibType = calibType - 30;
          }
          i = 1;
          while (i < iCalib.length) {
            calibData.push(iCalib[i] / 1000.0);
            i = i + 1;
          }
        }
        if (funVer >= 3) {
          if (calibData.length == 0) {
            param = '0,';
          } else {
            param = 30 + calibType;
            i = 0;
            while (i < calibData.length) {
              if ((i & 1) > 0) {
                param = param + ':';
              } else {
                param = param + ' ';
              }
              param = param + Math.round(calibData[i] * 1000.0 / 1000.0);
              i = i + 1;
            }
            param = param + ',';
          }
        } else {
          if (funVer >= 1) {
            nPoints = parseInt(calibData.length / 2, 10);
            param = nPoints;
            i = 0;
            while (i < 2 * nPoints) {
              if (funScale == 0) {
                wordVal = _this115._yapi.imm_doubleToDecimal(Math.round(calibData[i]));
              } else {
                wordVal = calibData[i] * funScale + funOffset;
              }
              param = param + ',' + Math.round(wordVal);
              i = i + 1;
            }
          } else {
            if (calibData.length == 4) {
              param = Math.round(1000 * (calibData[3] - calibData[1]) / calibData[2] - calibData[0]);
            }
          }
        }
        return param;
      })();
    }
    set_allSettings(settings) {
      var _this116 = this;
      return _asyncToGenerator(function*() {
        let restoreLast = [];
        let old_json_flat;
        let old_dslist = [];
        let old_jpath = [];
        let old_jpath_len = [];
        let old_val_arr = [];
        let actualSettings;
        let new_dslist = [];
        let new_jpath = [];
        let new_jpath_len = [];
        let new_val_arr = [];
        let cpos;
        let eqpos;
        let leng;
        let i;
        let j;
        let njpath;
        let jpath;
        let fun;
        let attr;
        let value;
        let url;
        let tmp;
        let new_calib;
        let sensorType;
        let unit_name;
        let newval;
        let oldval;
        let old_calib;
        let each_str;
        let do_update;
        let found;
        tmp = _this116._yapi.imm_bin2str(settings);
        tmp = _this116.imm_get_json_path(tmp, 'api');
        if (!(tmp == '')) {
          settings = _this116._yapi.imm_str2bin(tmp);
        }
        oldval = '';
        newval = '';
        old_json_flat = _this116.imm_flattenJsonStruct(settings);
        old_dslist = _this116.imm_json_get_array(old_json_flat);
        for (let ii in old_dslist) {
          each_str = _this116.imm_json_get_string(_this116._yapi.imm_str2bin(old_dslist[ii]));
          leng = each_str.length;
          eqpos = each_str.indexOf('=');
          if (eqpos < 0 || leng == 0) {
            _this116._throw(YAPI_INVALID_ARGUMENT, 'Invalid settings');
            return YAPI_INVALID_ARGUMENT;
          }
          jpath = each_str.substr(0, eqpos);
          eqpos = eqpos + 1;
          value = each_str.substr(eqpos, leng - eqpos);
          old_jpath.push(jpath);
          old_jpath_len.push(jpath.length);
          old_val_arr.push(value);
          ;
        }
        actualSettings = yield _this116._download('api.json');
        actualSettings = _this116.imm_flattenJsonStruct(actualSettings);
        new_dslist = _this116.imm_json_get_array(actualSettings);
        for (let ii in new_dslist) {
          each_str = _this116.imm_json_get_string(_this116._yapi.imm_str2bin(new_dslist[ii]));
          leng = each_str.length;
          eqpos = each_str.indexOf('=');
          if (eqpos < 0 || leng == 0) {
            _this116._throw(YAPI_INVALID_ARGUMENT, 'Invalid settings');
            return YAPI_INVALID_ARGUMENT;
          }
          jpath = each_str.substr(0, eqpos);
          eqpos = eqpos + 1;
          value = each_str.substr(eqpos, leng - eqpos);
          new_jpath.push(jpath);
          new_jpath_len.push(jpath.length);
          new_val_arr.push(value);
          ;
        }
        i = 0;
        while (i < new_jpath.length) {
          njpath = new_jpath[i];
          leng = njpath.length;
          cpos = njpath.indexOf('/');
          if (cpos < 0 || leng == 0) {
            continue;
          }
          fun = njpath.substr(0, cpos);
          cpos = cpos + 1;
          attr = njpath.substr(cpos, leng - cpos);
          do_update = true;
          if (fun == 'services') {
            do_update = false;
          }
          if (do_update && attr == 'firmwareRelease') {
            do_update = false;
          }
          if (do_update && attr == 'usbCurrent') {
            do_update = false;
          }
          if (do_update && attr == 'upTime') {
            do_update = false;
          }
          if (do_update && attr == 'persistentSettings') {
            do_update = false;
          }
          if (do_update && attr == 'adminPassword') {
            do_update = false;
          }
          if (do_update && attr == 'userPassword') {
            do_update = false;
          }
          if (do_update && attr == 'rebootCountdown') {
            do_update = false;
          }
          if (do_update && attr == 'advertisedValue') {
            do_update = false;
          }
          if (do_update && attr == 'poeCurrent') {
            do_update = false;
          }
          if (do_update && attr == 'readiness') {
            do_update = false;
          }
          if (do_update && attr == 'ipAddress') {
            do_update = false;
          }
          if (do_update && attr == 'subnetMask') {
            do_update = false;
          }
          if (do_update && attr == 'router') {
            do_update = false;
          }
          if (do_update && attr == 'linkQuality') {
            do_update = false;
          }
          if (do_update && attr == 'ssid') {
            do_update = false;
          }
          if (do_update && attr == 'channel') {
            do_update = false;
          }
          if (do_update && attr == 'security') {
            do_update = false;
          }
          if (do_update && attr == 'message') {
            do_update = false;
          }
          if (do_update && attr == 'currentValue') {
            do_update = false;
          }
          if (do_update && attr == 'currentRawValue') {
            do_update = false;
          }
          if (do_update && attr == 'currentRunIndex') {
            do_update = false;
          }
          if (do_update && attr == 'pulseTimer') {
            do_update = false;
          }
          if (do_update && attr == 'lastTimePressed') {
            do_update = false;
          }
          if (do_update && attr == 'lastTimeReleased') {
            do_update = false;
          }
          if (do_update && attr == 'filesCount') {
            do_update = false;
          }
          if (do_update && attr == 'freeSpace') {
            do_update = false;
          }
          if (do_update && attr == 'timeUTC') {
            do_update = false;
          }
          if (do_update && attr == 'rtcTime') {
            do_update = false;
          }
          if (do_update && attr == 'unixTime') {
            do_update = false;
          }
          if (do_update && attr == 'dateTime') {
            do_update = false;
          }
          if (do_update && attr == 'rawValue') {
            do_update = false;
          }
          if (do_update && attr == 'lastMsg') {
            do_update = false;
          }
          if (do_update && attr == 'delayedPulseTimer') {
            do_update = false;
          }
          if (do_update && attr == 'rxCount') {
            do_update = false;
          }
          if (do_update && attr == 'txCount') {
            do_update = false;
          }
          if (do_update && attr == 'msgCount') {
            do_update = false;
          }
          if (do_update) {
            do_update = false;
            newval = new_val_arr[i];
            j = 0;
            found = false;
            while (j < old_jpath.length && !found) {
              if (new_jpath_len[i] == old_jpath_len[j] && new_jpath[i] == old_jpath[j]) {
                found = true;
                oldval = old_val_arr[j];
                if (!(newval == oldval)) {
                  do_update = true;
                }
              }
              j = j + 1;
            }
          }
          if (do_update) {
            if (attr == 'calibrationParam') {
              old_calib = '';
              unit_name = '';
              sensorType = '';
              new_calib = newval;
              j = 0;
              found = false;
              while (j < old_jpath.length && !found) {
                if (new_jpath_len[i] == old_jpath_len[j] && new_jpath[i] == old_jpath[j]) {
                  found = true;
                  old_calib = old_val_arr[j];
                }
                j = j + 1;
              }
              tmp = fun + '/unit';
              j = 0;
              found = false;
              while (j < new_jpath.length && !found) {
                if (tmp == new_jpath[j]) {
                  found = true;
                  unit_name = new_val_arr[j];
                }
                j = j + 1;
              }
              tmp = fun + '/sensorType';
              j = 0;
              found = false;
              while (j < new_jpath.length && !found) {
                if (tmp == new_jpath[j]) {
                  found = true;
                  sensorType = new_val_arr[j];
                }
                j = j + 1;
              }
              newval = yield _this116.calibConvert(old_calib, new_val_arr[i], unit_name, sensorType);
              url = 'api/' + fun + '.json?' + attr + '=' + _this116.imm_escapeAttr(newval);
              yield _this116._download(url);
            } else {
              url = 'api/' + fun + '.json?' + attr + '=' + _this116.imm_escapeAttr(oldval);
              if (attr == 'resolution') {
                restoreLast.push(url);
              } else {
                yield _this116._download(url);
              }
            }
          }
          i = i + 1;
        }
        for (let ii in restoreLast) {
          yield _this116._download(restoreLast[ii]);
          ;
        }
        return YAPI_SUCCESS;
      })();
    }
    download(pathname) {
      var _this117 = this;
      return _asyncToGenerator(function*() {
        return yield _this117._download(pathname);
      })();
    }
    get_icon2d() {
      var _this118 = this;
      return _asyncToGenerator(function*() {
        return yield _this118._download('icon2d.png');
      })();
    }
    get_lastLogs() {
      var _this119 = this;
      return _asyncToGenerator(function*() {
        let content;
        content = yield _this119._download('logs.txt');
        return _this119._yapi.imm_bin2str(content);
      })();
    }
    log(text) {
      var _this120 = this;
      return _asyncToGenerator(function*() {
        return yield _this120._upload('logs.txt', _this120._yapi.imm_str2bin(text));
      })();
    }
    nextModule() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YModule.FindModuleInContext(this._yapi, next_hwid);
    }
    static FirstModule() {
      let next_hwid = YAPI.imm_getFirstHardwareId('Module');
      if (next_hwid == null)
        return null;
      return YModule.FindModule(next_hwid);
    }
    static FirstModuleInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Module');
      if (next_hwid == null)
        return null;
      return YModule.FindModuleInContext(yctx, next_hwid);
    }
  }
  exports.YModule = YModule;
  function yFindModule(func) {
    return YModule.FindModule(func);
  }
  function yFirstModule() {
    return YModule.FirstModule();
  }
  class YModuleProxy extends YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    functionCount() {
      let dev = this.liveFunc.imm_getDev();
      if (!dev)
        return YAPI_DEVICE_NOT_FOUND;
      return dev.imm_functionCount();
    }
    functionId(functionIndex) {
      let dev = this.liveFunc.imm_getDev();
      if (!dev)
        return '';
      return dev.imm_functionId(functionIndex);
    }
    functionType(functionIndex) {
      let dev = this.liveFunc.imm_getDev();
      if (!dev)
        return '';
      return dev.imm_functionType(functionIndex);
    }
    functionBaseType(functionIndex) {
      let dev = this.liveFunc.imm_getDev();
      if (!dev)
        return '';
      return dev.imm_functionBaseType(functionIndex);
    }
    functionName(functionIndex) {
      let dev = this.liveFunc.imm_getDev();
      if (!dev)
        return '';
      return dev.imm_functionName(functionIndex);
    }
    functionValue(functionIndex) {
      let dev = this.liveFunc.imm_getDev();
      if (!dev)
        return '';
      return dev.imm_functionValue(functionIndex);
    }
    get_logicalName() {
      var dev = this.liveFunc.imm_getDev();
      if (dev != null) {
        return dev._logicalName;
      }
      return this.liveFunc._logicalName;
    }
    get_productName() {
      return this.liveFunc._productName;
    }
    get_serialNumber() {
      return this.liveFunc._serialNumber;
    }
    get_productId() {
      return this.liveFunc._productId;
    }
    get_productRelease() {
      return this.liveFunc._productRelease;
    }
    get_firmwareRelease() {
      return this.liveFunc._firmwareRelease;
    }
    get_persistentSettings() {
      return this.liveFunc._persistentSettings;
    }
    set_persistentSettings(newval) {
      this.liveFunc.set_persistentSettings(newval);
      return YAPI_SUCCESS;
    }
    get_luminosity() {
      return this.liveFunc._luminosity;
    }
    set_luminosity(newval) {
      this.liveFunc.set_luminosity(newval);
      return YAPI_SUCCESS;
    }
    get_beacon() {
      return this.liveFunc._beacon;
    }
    set_beacon(newval) {
      this.liveFunc.set_beacon(newval);
      return YAPI_SUCCESS;
    }
    get_upTime() {
      return this.liveFunc._upTime;
    }
    get_usbCurrent() {
      return this.liveFunc._usbCurrent;
    }
    get_rebootCountdown() {
      return this.liveFunc._rebootCountdown;
    }
    set_rebootCountdown(newval) {
      this.liveFunc.set_rebootCountdown(newval);
      return YAPI_SUCCESS;
    }
    get_userVar() {
      return this.liveFunc._userVar;
    }
    set_userVar(newval) {
      this.liveFunc.set_userVar(newval);
      return YAPI_SUCCESS;
    }
    saveToFlash() {
      this.liveFunc.saveToFlash();
      return YAPI_SUCCESS;
    }
    revertFromFlash() {
      this.liveFunc.revertFromFlash();
      return YAPI_SUCCESS;
    }
    reboot(secBeforeReboot) {
      this.liveFunc.reboot(secBeforeReboot);
      return YAPI_SUCCESS;
    }
    triggerFirmwareUpdate(secBeforeReboot) {
      this.liveFunc.triggerFirmwareUpdate(secBeforeReboot);
      return YAPI_SUCCESS;
    }
    loadThermistorExtra(funcId, jsonExtra) {
      this.liveFunc.loadThermistorExtra(funcId, jsonExtra);
      return YAPI_SUCCESS;
    }
    log(text) {
      this.liveFunc.log(text);
      return YAPI_SUCCESS;
    }
  }
  exports.YModuleProxy = YModuleProxy;
  class YSensor extends YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Sensor';
      this._unit = Y_UNIT_INVALID;
      this._currentValue = Y_CURRENTVALUE_INVALID;
      this._lowestValue = Y_LOWESTVALUE_INVALID;
      this._highestValue = Y_HIGHESTVALUE_INVALID;
      this._currentRawValue = Y_CURRENTRAWVALUE_INVALID;
      this._logFrequency = Y_LOGFREQUENCY_INVALID;
      this._reportFrequency = Y_REPORTFREQUENCY_INVALID;
      this._calibrationParam = Y_CALIBRATIONPARAM_INVALID;
      this._resolution = Y_RESOLUTION_INVALID;
      this._sensorState = Y_SENSORSTATE_INVALID;
      this._timedReportCallbackSensor = null;
      this._prevTimedReport = 0;
      this._iresol = 0;
      this._offset = 0;
      this._scale = 0;
      this._decexp = 0;
      this._isScal = 0;
      this._isScal32 = 0;
      this._caltyp = 0;
      this._calpar = [];
      this._calraw = [];
      this._calref = [];
      this._calhdl = null;
      this.imm_setConst({
        UNIT_INVALID: YAPI_INVALID_STRING,
        CURRENTVALUE_INVALID: YAPI_INVALID_DOUBLE,
        LOWESTVALUE_INVALID: YAPI_INVALID_DOUBLE,
        HIGHESTVALUE_INVALID: YAPI_INVALID_DOUBLE,
        CURRENTRAWVALUE_INVALID: YAPI_INVALID_DOUBLE,
        LOGFREQUENCY_INVALID: YAPI_INVALID_STRING,
        REPORTFREQUENCY_INVALID: YAPI_INVALID_STRING,
        CALIBRATIONPARAM_INVALID: YAPI_INVALID_STRING,
        RESOLUTION_INVALID: YAPI_INVALID_DOUBLE,
        SENSORSTATE_INVALID: YAPI_INVALID_INT
      });
    }
    get_syncProxy() {
      var _this121 = this;
      return _asyncToGenerator(function*() {
        if (_this121._cacheExpiration <= _this121._yapi.GetTickCount()) {
          try {
            yield _this121.load(_this121._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YSensorProxy(_this121);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'unit':
          this._unit = val;
          return 1;
        case 'currentValue':
          this._currentValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'lowestValue':
          this._lowestValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'highestValue':
          this._highestValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'currentRawValue':
          this._currentRawValue = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'logFrequency':
          this._logFrequency = val;
          return 1;
        case 'reportFrequency':
          this._reportFrequency = val;
          return 1;
        case 'calibrationParam':
          this._calibrationParam = val;
          return 1;
        case 'resolution':
          this._resolution = Math.round(val * 1000.0 / 65536.0) / 1000.0;
          return 1;
        case 'sensorState':
          this._sensorState = parseInt(val);
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_unit() {
      var _this122 = this;
      return _asyncToGenerator(function*() {
        if (_this122._cacheExpiration <= _this122._yapi.GetTickCount()) {
          if ((yield _this122.load(_this122._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_UNIT_INVALID;
          }
        }
        return _this122._unit;
      })();
    }
    get_currentValue() {
      var _this123 = this;
      return _asyncToGenerator(function*() {
        let res;
        if (_this123._cacheExpiration <= _this123._yapi.GetTickCount()) {
          if ((yield _this123.load(_this123._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_CURRENTVALUE_INVALID;
          }
        }
        res = yield _this123._applyCalibration(_this123._currentRawValue);
        if (res == Y_CURRENTVALUE_INVALID) {
          res = _this123._currentValue;
        }
        res = res * _this123._iresol;
        return Math.round(res) / _this123._iresol;
      })();
    }
    set_lowestValue(newval) {
      var _this124 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this124._setAttr('lowestValue', rest_val);
      })();
    }
    get_lowestValue() {
      var _this125 = this;
      return _asyncToGenerator(function*() {
        let res;
        if (_this125._cacheExpiration <= _this125._yapi.GetTickCount()) {
          if ((yield _this125.load(_this125._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_LOWESTVALUE_INVALID;
          }
        }
        res = _this125._lowestValue * _this125._iresol;
        return Math.round(res) / _this125._iresol;
      })();
    }
    set_highestValue(newval) {
      var _this126 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this126._setAttr('highestValue', rest_val);
      })();
    }
    get_highestValue() {
      var _this127 = this;
      return _asyncToGenerator(function*() {
        let res;
        if (_this127._cacheExpiration <= _this127._yapi.GetTickCount()) {
          if ((yield _this127.load(_this127._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_HIGHESTVALUE_INVALID;
          }
        }
        res = _this127._highestValue * _this127._iresol;
        return Math.round(res) / _this127._iresol;
      })();
    }
    get_currentRawValue() {
      var _this128 = this;
      return _asyncToGenerator(function*() {
        if (_this128._cacheExpiration <= _this128._yapi.GetTickCount()) {
          if ((yield _this128.load(_this128._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_CURRENTRAWVALUE_INVALID;
          }
        }
        return _this128._currentRawValue;
      })();
    }
    get_logFrequency() {
      var _this129 = this;
      return _asyncToGenerator(function*() {
        if (_this129._cacheExpiration <= _this129._yapi.GetTickCount()) {
          if ((yield _this129.load(_this129._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_LOGFREQUENCY_INVALID;
          }
        }
        return _this129._logFrequency;
      })();
    }
    set_logFrequency(newval) {
      var _this130 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this130._setAttr('logFrequency', rest_val);
      })();
    }
    get_reportFrequency() {
      var _this131 = this;
      return _asyncToGenerator(function*() {
        if (_this131._cacheExpiration <= _this131._yapi.GetTickCount()) {
          if ((yield _this131.load(_this131._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_REPORTFREQUENCY_INVALID;
          }
        }
        return _this131._reportFrequency;
      })();
    }
    set_reportFrequency(newval) {
      var _this132 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this132._setAttr('reportFrequency', rest_val);
      })();
    }
    get_calibrationParam() {
      var _this133 = this;
      return _asyncToGenerator(function*() {
        if (_this133._cacheExpiration <= _this133._yapi.GetTickCount()) {
          if ((yield _this133.load(_this133._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_CALIBRATIONPARAM_INVALID;
          }
        }
        return _this133._calibrationParam;
      })();
    }
    set_calibrationParam(newval) {
      var _this134 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this134._setAttr('calibrationParam', rest_val);
      })();
    }
    set_resolution(newval) {
      var _this135 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = String(Math.round(newval * 65536.0));
        return yield _this135._setAttr('resolution', rest_val);
      })();
    }
    get_resolution() {
      var _this136 = this;
      return _asyncToGenerator(function*() {
        if (_this136._cacheExpiration <= _this136._yapi.GetTickCount()) {
          if ((yield _this136.load(_this136._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_RESOLUTION_INVALID;
          }
        }
        return _this136._resolution;
      })();
    }
    get_sensorState() {
      var _this137 = this;
      return _asyncToGenerator(function*() {
        if (_this137._cacheExpiration <= _this137._yapi.GetTickCount()) {
          if ((yield _this137.load(_this137._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return Y_SENSORSTATE_INVALID;
          }
        }
        return _this137._sensorState;
      })();
    }
    static FindSensor(func) {
      let obj;
      obj = YFunction._FindFromCache('Sensor', func);
      if (obj == null) {
        obj = new YSensor(YAPI, func);
        YFunction._AddToCache('Sensor', func, obj);
      }
      return obj;
    }
    static FindSensorInContext(yctx, func) {
      let obj;
      obj = YFunction._FindFromCacheInContext(yctx, 'Sensor', func);
      if (obj == null) {
        obj = new YSensor(yctx, func);
        YFunction._AddToCache('Sensor', func, obj);
      }
      return obj;
    }
    _parserHelper() {
      var _this138 = this;
      return _asyncToGenerator(function*() {
        let position;
        let maxpos;
        let iCalib = [];
        let iRaw;
        let iRef;
        let fRaw;
        let fRef;
        _this138._caltyp = -1;
        _this138._scale = -1;
        _this138._isScal32 = false;
        _this138._calpar.length = 0;
        _this138._calraw.length = 0;
        _this138._calref.length = 0;
        if (_this138._resolution > 0) {
          _this138._iresol = Math.round(1.0 / _this138._resolution);
        } else {
          _this138._iresol = 10000;
          _this138._resolution = 0.0001;
        }
        if (_this138._calibrationParam == '' || _this138._calibrationParam == '0') {
          _this138._caltyp = 0;
          return 0;
        }
        if (_this138._calibrationParam.indexOf(',') >= 0) {
          iCalib = _this138._yapi.imm_decodeFloats(_this138._calibrationParam);
          _this138._caltyp = parseInt(iCalib[0] / 1000, 10);
          if (_this138._caltyp > 0) {
            if (_this138._caltyp < YOCTO_CALIB_TYPE_OFS) {
              _this138._caltyp = -1;
              return 0;
            }
            _this138.imm_calhdl = _this138._yapi.imm_getCalibrationHandler(_this138._caltyp);
            if (!(_this138.imm_calhdl != null)) {
              _this138._caltyp = -1;
              return 0;
            }
          }
          _this138._isScal = true;
          _this138._isScal32 = true;
          _this138._offset = 0;
          _this138._scale = 1000;
          maxpos = iCalib.length;
          _this138._calpar.length = 0;
          position = 1;
          while (position < maxpos) {
            _this138._calpar.push(iCalib[position]);
            position = position + 1;
          }
          _this138._calraw.length = 0;
          _this138._calref.length = 0;
          position = 1;
          while (position + 1 < maxpos) {
            fRaw = iCalib[position];
            fRaw = fRaw / 1000.0;
            fRef = iCalib[position + 1];
            fRef = fRef / 1000.0;
            _this138._calraw.push(fRaw);
            _this138._calref.push(fRef);
            position = position + 2;
          }
        } else {
          iCalib = _this138._yapi.imm_decodeWords(_this138._calibrationParam);
          if (iCalib.length < 2) {
            _this138._caltyp = -1;
            return 0;
          }
          _this138._isScal = iCalib[1] > 0;
          if (_this138._isScal) {
            _this138._offset = iCalib[0];
            if (_this138._offset > 32767) {
              _this138._offset = _this138._offset - 65536;
            }
            _this138._scale = iCalib[1];
            _this138._decexp = 0;
          } else {
            _this138._offset = 0;
            _this138._scale = 1;
            _this138._decexp = 1.0;
            position = iCalib[0];
            while (position > 0) {
              _this138._decexp = _this138._decexp * 10;
              position = position - 1;
            }
          }
          if (iCalib.length == 2) {
            _this138._caltyp = 0;
            return 0;
          }
          _this138._caltyp = iCalib[2];
          _this138.imm_calhdl = _this138._yapi.imm_getCalibrationHandler(_this138._caltyp);
          if (_this138._caltyp <= 10) {
            maxpos = _this138._caltyp;
          } else {
            if (_this138._caltyp <= 20) {
              maxpos = _this138._caltyp - 10;
            } else {
              maxpos = 5;
            }
          }
          maxpos = 3 + 2 * maxpos;
          if (maxpos > iCalib.length) {
            maxpos = iCalib.length;
          }
          _this138._calpar.length = 0;
          _this138._calraw.length = 0;
          _this138._calref.length = 0;
          position = 3;
          while (position + 1 < maxpos) {
            iRaw = iCalib[position];
            iRef = iCalib[position + 1];
            _this138._calpar.push(iRaw);
            _this138._calpar.push(iRef);
            if (_this138._isScal) {
              fRaw = iRaw;
              fRaw = (fRaw - _this138._offset) / _this138._scale;
              fRef = iRef;
              fRef = (fRef - _this138._offset) / _this138._scale;
              _this138._calraw.push(fRaw);
              _this138._calref.push(fRef);
            } else {
              _this138._calraw.push(_this138._yapi.imm_decimalToDouble(iRaw));
              _this138._calref.push(_this138._yapi.imm_decimalToDouble(iRef));
            }
            position = position + 2;
          }
        }
        return 0;
      })();
    }
    isSensorReady() {
      var _this139 = this;
      return _asyncToGenerator(function*() {
        if (!(yield _this139.isOnline())) {
          return false;
        }
        if (!(_this139._sensorState == 0)) {
          return false;
        }
        return true;
      })();
    }
    startDataLogger() {
      var _this140 = this;
      return _asyncToGenerator(function*() {
        let res;
        res = yield _this140._download('api/dataLogger/recording?recording=1');
        if (!(res.length > 0)) {
          return _this140._throw(YAPI_IO_ERROR, 'unable to start datalogger', YAPI_IO_ERROR);
        }
        return YAPI_SUCCESS;
      })();
    }
    stopDataLogger() {
      var _this141 = this;
      return _asyncToGenerator(function*() {
        let res;
        res = yield _this141._download('api/dataLogger/recording?recording=0');
        if (!(res.length > 0)) {
          return _this141._throw(YAPI_IO_ERROR, 'unable to stop datalogger', YAPI_IO_ERROR);
        }
        return YAPI_SUCCESS;
      })();
    }
    get_recordedData(startTime, endTime) {
      var _this142 = this;
      return _asyncToGenerator(function*() {
        let funcid;
        let funit;
        funcid = yield _this142.get_functionId();
        funit = yield _this142.get_unit();
        return new YDataSet(_this142, funcid, funit, startTime, endTime);
      })();
    }
    registerTimedReportCallback(callback) {
      var _this143 = this;
      return _asyncToGenerator(function*() {
        let sensor;
        sensor = _this143;
        if (callback != null) {
          yield YFunction._UpdateTimedReportCallbackList(sensor, true);
        } else {
          yield YFunction._UpdateTimedReportCallbackList(sensor, false);
        }
        _this143._timedReportCallbackSensor = callback;
        return 0;
      })();
    }
    _invokeTimedReportCallback(value) {
      var _this144 = this;
      return _asyncToGenerator(function*() {
        if (_this144._timedReportCallbackSensor != null) {
          yield _this144._timedReportCallbackSensor(_this144, value);
        } else {}
        return 0;
      })();
    }
    calibrateFromPoints(rawValues, refValues) {
      var _this145 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = yield _this145._encodeCalibrationPoints(rawValues, refValues);
        return yield _this145._setAttr('calibrationParam', rest_val);
      })();
    }
    loadCalibrationPoints(rawValues, refValues) {
      var _this146 = this;
      return _asyncToGenerator(function*() {
        rawValues.length = 0;
        refValues.length = 0;
        if (_this146._scale == 0) {
          if ((yield _this146.load(_this146._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return YAPI_DEVICE_NOT_FOUND;
          }
        }
        if (_this146._caltyp < 0) {
          _this146._throw(YAPI_NOT_SUPPORTED, 'Calibration parameters format mismatch. Please upgrade your library or firmware.');
          return YAPI_NOT_SUPPORTED;
        }
        rawValues.length = 0;
        refValues.length = 0;
        for (let ii in _this146._calraw) {
          rawValues.push(_this146._calraw[ii]);
        }
        for (let ii in _this146._calref) {
          refValues.push(_this146._calref[ii]);
        }
        return YAPI_SUCCESS;
      })();
    }
    _encodeCalibrationPoints(rawValues, refValues) {
      var _this147 = this;
      return _asyncToGenerator(function*() {
        let res;
        let npt;
        let idx;
        let iRaw;
        let iRef;
        npt = rawValues.length;
        if (npt != refValues.length) {
          _this147._throw(YAPI_INVALID_ARGUMENT, 'Invalid calibration parameters (size mismatch)');
          return YAPI_INVALID_STRING;
        }
        if (npt == 0) {
          return '0';
        }
        if (_this147._scale == 0) {
          if ((yield _this147.load(_this147._yapi.defaultCacheValidity)) != YAPI_SUCCESS) {
            return YAPI_INVALID_STRING;
          }
        }
        if (_this147._caltyp < 0 || _this147._scale < 0) {
          _this147._throw(YAPI_NOT_SUPPORTED, 'Calibration parameters format mismatch. Please upgrade your library or firmware.');
          return '0';
        }
        if (_this147._isScal32) {
          res = String(Math.round(YOCTO_CALIB_TYPE_OFS));
          idx = 0;
          while (idx < npt) {
            res = res + ',' + String(Math.round(rawValues[idx] * 1000) / 1000) + ',' + String(Math.round(refValues[idx] * 1000) / 1000);
            idx = idx + 1;
          }
        } else {
          if (_this147._isScal) {
            res = String(Math.round(npt));
            idx = 0;
            while (idx < npt) {
              iRaw = Math.round(rawValues[idx] * _this147._scale + _this147._offset);
              iRef = Math.round(refValues[idx] * _this147._scale + _this147._offset);
              res = res + ',' + String(Math.round(iRaw)) + ',' + String(Math.round(iRef));
              idx = idx + 1;
            }
          } else {
            res = String(Math.round(10 + npt));
            idx = 0;
            while (idx < npt) {
              iRaw = _this147._yapi.imm_doubleToDecimal(rawValues[idx]);
              iRef = _this147._yapi.imm_doubleToDecimal(refValues[idx]);
              res = res + ',' + String(Math.round(iRaw)) + ',' + String(Math.round(iRef));
              idx = idx + 1;
            }
          }
        }
        return res;
      })();
    }
    _applyCalibration(rawValue) {
      var _this148 = this;
      return _asyncToGenerator(function*() {
        if (rawValue == Y_CURRENTVALUE_INVALID) {
          return Y_CURRENTVALUE_INVALID;
        }
        if (_this148._caltyp == 0) {
          return rawValue;
        }
        if (_this148._caltyp < 0) {
          return Y_CURRENTVALUE_INVALID;
        }
        if (!(_this148.imm_calhdl != null)) {
          return Y_CURRENTVALUE_INVALID;
        }
        return _this148.imm_calhdl(rawValue, _this148._caltyp, _this148._calpar, _this148._calraw, _this148._calref);
      })();
    }
    _decodeTimedReport(timestamp, report) {
      var _this149 = this;
      return _asyncToGenerator(function*() {
        let i;
        let byteVal;
        let poww;
        let minRaw;
        let avgRaw;
        let maxRaw;
        let sublen;
        let difRaw;
        let startTime;
        let endTime;
        let minVal;
        let avgVal;
        let maxVal;
        startTime = _this149._prevTimedReport;
        endTime = timestamp;
        _this149._prevTimedReport = endTime;
        if (startTime == 0) {
          startTime = endTime;
        }
        if (report[0] == 2) {
          if (report.length <= 5) {
            poww = 1;
            avgRaw = 0;
            byteVal = 0;
            i = 1;
            while (i < report.length) {
              byteVal = report[i];
              avgRaw = avgRaw + poww * byteVal;
              poww = poww * 0x100;
              i = i + 1;
            }
            if ((byteVal & 0x80) != 0) {
              avgRaw = avgRaw - poww;
            }
            avgVal = avgRaw / 1000.0;
            if (_this149._caltyp != 0) {
              if (_this149.imm_calhdl != null) {
                avgVal = _this149.imm_calhdl(avgVal, _this149._caltyp, _this149._calpar, _this149._calraw, _this149._calref);
              }
            }
            minVal = avgVal;
            maxVal = avgVal;
          } else {
            sublen = 1 + (report[1] & 3);
            poww = 1;
            avgRaw = 0;
            byteVal = 0;
            i = 2;
            while (sublen > 0 && i < report.length) {
              byteVal = report[i];
              avgRaw = avgRaw + poww * byteVal;
              poww = poww * 0x100;
              i = i + 1;
              sublen = sublen - 1;
            }
            if ((byteVal & 0x80) != 0) {
              avgRaw = avgRaw - poww;
            }
            sublen = 1 + (report[1] >> 2 & 3);
            poww = 1;
            difRaw = 0;
            while (sublen > 0 && i < report.length) {
              byteVal = report[i];
              difRaw = difRaw + poww * byteVal;
              poww = poww * 0x100;
              i = i + 1;
              sublen = sublen - 1;
            }
            minRaw = avgRaw - difRaw;
            sublen = 1 + (report[1] >> 4 & 3);
            poww = 1;
            difRaw = 0;
            while (sublen > 0 && i < report.length) {
              byteVal = report[i];
              difRaw = difRaw + poww * byteVal;
              poww = poww * 0x100;
              i = i + 1;
              sublen = sublen - 1;
            }
            maxRaw = avgRaw + difRaw;
            avgVal = avgRaw / 1000.0;
            minVal = minRaw / 1000.0;
            maxVal = maxRaw / 1000.0;
            if (_this149._caltyp != 0) {
              if (_this149.imm_calhdl != null) {
                avgVal = _this149.imm_calhdl(avgVal, _this149._caltyp, _this149._calpar, _this149._calraw, _this149._calref);
                minVal = _this149.imm_calhdl(minVal, _this149._caltyp, _this149._calpar, _this149._calraw, _this149._calref);
                maxVal = _this149.imm_calhdl(maxVal, _this149._caltyp, _this149._calpar, _this149._calraw, _this149._calref);
              }
            }
          }
        } else {
          if (report[0] == 0) {
            poww = 1;
            avgRaw = 0;
            byteVal = 0;
            i = 1;
            while (i < report.length) {
              byteVal = report[i];
              avgRaw = avgRaw + poww * byteVal;
              poww = poww * 0x100;
              i = i + 1;
            }
            if (_this149._isScal) {
              avgVal = _this149.imm_decodeVal(avgRaw);
            } else {
              if ((byteVal & 0x80) != 0) {
                avgRaw = avgRaw - poww;
              }
              avgVal = _this149.imm_decodeAvg(avgRaw);
            }
            minVal = avgVal;
            maxVal = avgVal;
          } else {
            minRaw = report[1] + 0x100 * report[2];
            maxRaw = report[3] + 0x100 * report[4];
            avgRaw = report[5] + 0x100 * report[6] + 0x10000 * report[7];
            byteVal = report[8];
            if ((byteVal & 0x80) == 0) {
              avgRaw = avgRaw + 0x1000000 * byteVal;
            } else {
              avgRaw = avgRaw - 0x1000000 * (0x100 - byteVal);
            }
            minVal = _this149.imm_decodeVal(minRaw);
            avgVal = _this149.imm_decodeAvg(avgRaw);
            maxVal = _this149.imm_decodeVal(maxRaw);
          }
        }
        return new YMeasure(startTime, endTime, minVal, avgVal, maxVal);
      })();
    }
    imm_decodeVal(w) {
      let val;
      val = w;
      if (this._isScal) {
        val = (val - this._offset) / this._scale;
      } else {
        val = this._yapi.imm_decimalToDouble(w);
      }
      if (this._caltyp != 0) {
        if (this.imm_calhdl != null) {
          val = this.imm_calhdl(val, this._caltyp, this._calpar, this._calraw, this._calref);
        }
      }
      return val;
    }
    imm_decodeAvg(dw) {
      let val;
      val = dw;
      if (this._isScal) {
        val = (val / 100 - this._offset) / this._scale;
      } else {
        val = val / this._decexp;
      }
      if (this._caltyp != 0) {
        if (this.imm_calhdl != null) {
          val = this.imm_calhdl(val, this._caltyp, this._calpar, this._calraw, this._calref);
        }
      }
      return val;
    }
    nextSensor() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YSensor.FindSensorInContext(this._yapi, next_hwid);
    }
    static FirstSensor() {
      let next_hwid = YAPI.imm_getFirstHardwareId('Sensor');
      if (next_hwid == null)
        return null;
      return YSensor.FindSensor(next_hwid);
    }
    static FirstSensorInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Sensor');
      if (next_hwid == null)
        return null;
      return YSensor.FindSensorInContext(yctx, next_hwid);
    }
  }
  exports.YSensor = YSensor;
  function yFindSensor(func) {
    return YSensor.FindSensor(func);
  }
  function yFirstSensor() {
    return YSensor.FirstSensor();
  }
  class YSensorProxy extends YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_unit() {
      return this.liveFunc._unit;
    }
    get_currentValue() {
      return this.liveFunc._currentValue;
    }
    set_lowestValue(newval) {
      this.liveFunc.set_lowestValue(newval);
      return YAPI_SUCCESS;
    }
    get_lowestValue() {
      return this.liveFunc._lowestValue;
    }
    set_highestValue(newval) {
      this.liveFunc.set_highestValue(newval);
      return YAPI_SUCCESS;
    }
    get_highestValue() {
      return this.liveFunc._highestValue;
    }
    get_currentRawValue() {
      return this.liveFunc._currentRawValue;
    }
    get_logFrequency() {
      return this.liveFunc._logFrequency;
    }
    set_logFrequency(newval) {
      this.liveFunc.set_logFrequency(newval);
      return YAPI_SUCCESS;
    }
    get_reportFrequency() {
      return this.liveFunc._reportFrequency;
    }
    set_reportFrequency(newval) {
      this.liveFunc.set_reportFrequency(newval);
      return YAPI_SUCCESS;
    }
    get_calibrationParam() {
      return this.liveFunc._calibrationParam;
    }
    set_calibrationParam(newval) {
      this.liveFunc.set_calibrationParam(newval);
      return YAPI_SUCCESS;
    }
    set_resolution(newval) {
      this.liveFunc.set_resolution(newval);
      return YAPI_SUCCESS;
    }
    get_resolution() {
      return this.liveFunc._resolution;
    }
    get_sensorState() {
      return this.liveFunc._sensorState;
    }
    startDataLogger() {
      this.liveFunc.startDataLogger();
      return YAPI_SUCCESS;
    }
    stopDataLogger() {
      this.liveFunc.stopDataLogger();
      return YAPI_SUCCESS;
    }
    registerTimedReportCallback(callback) {
      this.liveFunc.registerTimedReportCallback(callback);
      return YAPI_SUCCESS;
    }
    loadCalibrationPoints(rawValues, refValues) {
      this.liveFunc.loadCalibrationPoints(rawValues, refValues);
      return YAPI_SUCCESS;
    }
  }
  exports.YSensorProxy = YSensorProxy;
  class YMeasure {
    constructor(float_start, float_end, float_minVal, float_avgVal, float_maxVal) {
      this._start = 0;
      this._end = 0;
      this._minVal = 0;
      this._avgVal = 0;
      this._maxVal = 0;
      this._start = float_start;
      this._end = float_end;
      this._minVal = float_minVal;
      this._avgVal = float_avgVal;
      this._maxVal = float_maxVal;
    }
    get_startTimeUTC() {
      return this._start;
    }
    get_endTimeUTC() {
      return this._end;
    }
    get_minValue() {
      return this._minVal;
    }
    get_averageValue() {
      return this._avgVal;
    }
    get_maxValue() {
      return this._maxVal;
    }
    get_startTimeUTC_asDate() {
      return new Date(Math.round(this._start * 1000));
    }
    get_endTimeUTC_asDate() {
      return new Date(Math.round(this._end * 1000));
    }
  }
  exports.YMeasure = YMeasure;
  class YGenericHub {
    constructor(obj_yapi, var_urlInfo) {
      this._yapi = obj_yapi;
      this._lastErrorType = YAPI_SUCCESS;
      this._lastErrorMsg = 'no error';
      this.urlInfo = var_urlInfo;
      this.notiflen = 0;
      this.devListValidity = 500;
      this.devListExpires = 0;
      this.serialByYdx = [];
      this.retryDelay = 15;
      this.notifPos = -1;
      this.currPos = 0;
      this.missing = {};
      this.logging = false;
      this.disconnecting = false;
    }
    _throw(int_errType, str_errMsg, obj_retVal) {
      this._lastErrorType = int_errType;
      this._lastErrorMsg = str_errMsg;
      return this._yapi._throw(int_errType, str_errMsg, obj_retVal);
    }
    imm_forceUpdate() {
      this.devListExpires = this._yapi.GetTickCount();
    }
    imm_logrequest(method, devUrl, obj_body) {
      let msg = 'Request: ' + method + ' ' + devUrl;
      if (obj_body) {
        msg += ' (file=' + obj_body.fname + ')';
      }
      console.log(msg);
    }
    testHub(errmsg) {
      var _this150 = this;
      return _asyncToGenerator(function*() {
        let yreq = yield _this150.request('GET', '/api/module.json', null, 0);
        if (yreq.errorType != YAPI_SUCCESS) {
          errmsg.msg = yreq.errorMsg;
          return yreq.errorType;
        }
        return YAPI_SUCCESS;
      })();
    }
    imm_testHubAgainLater() {
      var _this151 = this;
      this.devListValidity = 500;
      this.devListExpires = 0;
      if (this._reconnectionTimer) {
        return;
      }
      if (this.retryDelay < 15000)
        this.retryDelay *= 2;
      this._reconnectionTimer = setTimeout(function() {
        _this151._reconnectionTimer = null;
        _this151.testHub(new YErrorMsg());
      }, this.retryDelay);
    }
    hubUpdateDeviceList() {
      var _this152 = this;
      return _asyncToGenerator(function*() {
        try {
          let hubDev = _this152._yapi.imm_getDevice(_this152.urlInfo.url);
          hubDev.imm_dropCache();
          let retcode = yield hubDev.refresh();
          if (retcode != YAPI_SUCCESS) {
            return _this152._throw(retcode, hubDev._lastErrorMsg, retcode);
          }
          let yreq = yield hubDev.requestAPI(_this152._yapi.defaultCacheValidity);
          if (yreq.errorType != YAPI_SUCCESS) {
            return yreq;
          }
          let loadval = null;
          try {
            loadval = JSON.parse(_this152._yapi.imm_bin2str(yreq.bin_result));
          } catch (err) {}
          if (!loadval) {
            return _this152._throw(YAPI_IO_ERROR, 'Request failed, could not parse API result for ' + hubDev.imm_describe(), YAPI_IO_ERROR);
          }
          let whitePages = loadval['services']['whitePages'];
          let yellowPages = loadval['services']['yellowPages'];
          if (whitePages == undefined) {
            return _this152._throw(YAPI_IO_ERROR, 'Device ' + hubDev.imm_describe() + ' is not a hub', YAPI_IO_ERROR);
          }
          retcode = yield _this152._yapi.updateDeviceList_process(_this152, hubDev, whitePages, yellowPages);
          if (retcode != YAPI_SUCCESS) {
            return _this152._throw(_this152._yapi._lastErrorType, _this152._yapi._lastErrorMsg, _this152._yapi._lastErrorType);
          }
          _this152.devListExpires = _this152._yapi.GetTickCount() + _this152.devListValidity;
          return YAPI_SUCCESS;
        } catch (e) {
          return YAPI_IO_ERROR;
        }
      })();
    }
    imm_hasRwAccess() {
      return true;
    }
    request(method, devUrl, obj_body, tcpchan) {
      return _asyncToGenerator(function*() {
        var res = new YHTTPRequest(null);
        res.errorType = YAPI_NOT_SUPPORTED;
        res.errorMsg = 'GenericHub subclass expected';
        return res;
      })();
    }
    imm_getBoundary() {
      return 'Zz' + Math.floor(Math.random() * 0xffffff).toString(16) + 'zZ';
    }
    imm_formEncodeBody(obj_body, str_boundary) {
      let hdr = this._yapi.imm_str2bin('Content-Disposition: form-data; name="' + obj_body.fname + '"; filename="api"\r\n' + 'Content-Type: application/octet-stream\r\n' + 'Content-Transfer-Encoding: binary\r\n\r\n');
      let boundary = this._yapi.imm_str2bin(str_boundary);
      let dash = this._yapi.imm_str2bin('--');
      let crlf = this._yapi.imm_str2bin('\r\n');
      var parts = [dash, boundary, crlf, hdr, obj_body.data, crlf, dash, boundary, dash, crlf];
      let i,
          len = 0;
      for (i = 0; i < parts.length; i++) {
        len += parts[i].length;
      }
      let res = new Uint8Array(len);
      len = 0;
      for (i = 0; i < parts.length; i++) {
        res.set(parts[i], len);
        len += parts[i].length;
      }
      return res;
    }
    getBootloaders() {
      var _this153 = this;
      return _asyncToGenerator(function*() {
        let yreq = yield _this153.request('GET', '/flash.json?a=list', null, 1);
        if (yreq.errorType != YAPI_SUCCESS) {
          return _this153._throw(yreq.errorType, yreq.errorMsg, []);
        }
        let flashState = JSON.parse(YAPI.imm_bin2str(yreq.bin_result));
        return flashState['list'];
      })();
    }
    firmwareUpdate(serial, firmware, settings, progress) {
      var _this154 = this;
      return _asyncToGenerator(function*() {
        let use_self_flash = false;
        let baseUrl = '';
        let need_reboot = true;
        let _throw = function(msg) {
          return _this154._throw(YAPI.IO_ERROR, msg, [msg]);
        };
        progress(5, 'Check bootloader type');
        let yreq = yield _this154.request('GET', '/api/module.json', null, 0);
        if (yreq.errorType != YAPI_SUCCESS) {
          return _throw('Hub is not responding');
        }
        let json = JSON.parse(_this154._yapi.imm_bin2str(yreq.bin_result));
        let ownSerial = json.serialNumber;
        if (ownSerial.slice(0, 7) == 'VIRTHUB') {
          use_self_flash = false;
        } else if (serial == ownSerial) {
          use_self_flash = true;
        } else {
          yreq = yield _this154.request('GET', '/bySerial/' + serial + '/flash.json?a=state', null, 0);
          if (yreq.errorType == YAPI_SUCCESS) {
            use_self_flash = true;
            baseUrl = '/bySerial/' + serial;
          }
        }
        let bootloaders = yield _this154.getBootloaders();
        let is_shield = serial.slice(0, 7) == 'YHUBSHL';
        let i;
        for (i = 0; i < bootloaders.length; i++) {
          let bl = bootloaders[i];
          if (bl == serial) {
            need_reboot = false;
          } else if (is_shield) {
            if (bl.slice(0, 7) == 'YHUBSHL') {
              return _throw('Only one YoctoHub-Shield is allowed in update mode');
            }
          }
        }
        if (!use_self_flash && need_reboot) {
          if (bootloaders.length >= 4) {
            return _throw('Too many devices in update mode');
          }
        }
        progress(10, 'Send firmware file');
        let progressCb = function(curr, total) {
          curr >>= 10;
          total >>= 10;
          progress(10 + parseInt(28 * curr / total), 'Send firmware file: ' + curr + 'KB / ' + total + 'KB');
        };
        yreq = yield _this154.request('POST', baseUrl + '/upload.html', new YHTTPBody('firmware', firmware.imm_getData(), progressCb), 0);
        if (yreq.errorType != YAPI_SUCCESS) {
          return _throw('Firmware upload failed: ' + yreq.errorMsg);
        }
        yreq = yield _this154.request('GET', baseUrl + '/flash.json?a=state', null, 0);
        if (yreq.errorType != YAPI_SUCCESS) {
          return _throw('Cannot check state of firmware upload');
        }
        json = JSON.parse(_this154._yapi.imm_bin2str(yreq.bin_result));
        if (json['state'] != 'valid') {
          return _throw('Upload of firmware failed: invalid firmware(' + json['state'] + ')');
        }
        if (json['progress'] != '100') {
          return _throw('Upload of firmware failed: incomplete upload');
        }
        if (use_self_flash) {
          let settingsStr = _this154._yapi.imm_bin2str(settings);
          let settingsAndFiles = JSON.parse(settingsStr);
          let settingsOnly = settingsAndFiles['api'];
          let startupApi = {};
          for (let key in settingsOnly) {
            if (key != 'services') {
              startupApi[key] = settingsOnly[key];
            }
          }
          let startupConf = _this154._yapi.imm_str2bin(JSON.stringify(startupApi));
          progress(38, 'Save current settings');
          yreq = yield _this154.request('POST', baseUrl + '/upload.html', new YHTTPBody('startupConf.json', startupConf, null), 0);
          if (yreq.errorType != YAPI_SUCCESS) {
            return _throw('Failed to save settings on hub');
          }
          progress(39, 'Save current settings');
          yreq = yield _this154.request('POST', baseUrl + '/upload.html', new YHTTPBody('firmwareConf', startupConf, null), 0);
          if (yreq.errorType != YAPI_SUCCESS) {
            return _throw('Failed to save settings on hub');
          }
        }
        if (use_self_flash) {
          progress(40, 'Flash firmware');
          yield _this154.request('GET', baseUrl + '/api/module/rebootCountdown?rebootCountdown=-1003', null, 0);
          yield _this154._yapi.Sleep(7000);
        } else {
          if (need_reboot) {
            yield _this154.request('GET', '/bySerial/' + serial + '/api/module/rebootCountdown?rebootCountdown=-2', null, 0);
          }
          let timeout = YAPI.GetTickCount() + 10000;
          let res;
          let found = false;
          progress(40, 'Wait for device to be in bootloader');
          do {
            bootloaders = yield _this154.getBootloaders();
            for (i = 0; i < bootloaders.length; i++) {
              let bl = bootloaders[i];
              if (bl == serial) {
                found = true;
                break;
              }
            }
            if (!found) {
              yield _this154._yapi.Sleep(500);
            }
          } while (!found && YAPI.GetTickCount() < timeout);
          progress(45, 'Flash firmware');
          yreq = yield _this154.request('GET', '/flash.json?a=flash&s=' + serial, null, 0);
          if (yreq.errorType != YAPI_SUCCESS) {
            return _throw('Cannot check state of firmware flash');
          }
          return JSON.parse(_this154._yapi.imm_bin2str(yreq.bin_result));
        }
        return null;
      })();
    }
    imm_commonDisconnect() {
      this.disconnecting = true;
    }
    disconnect() {
      var _this155 = this;
      return _asyncToGenerator(function*() {
        _this155.imm_commonDisconnect();
      })();
    }
  }
  exports.YGenericHub = YGenericHub;
  class YHttpHub extends YGenericHub {
    constructor(obj_yapi, var_urlInfo) {
      super(obj_yapi, var_urlInfo);
      this.notbynRequest = null;
      this.notbynOpenPromise = null;
    }
    testHub(errmsg) {
      var _this156 = this;
      return _asyncToGenerator(function*() {
        if (_this156.disconnecting) {
          return YAPI_IO_ERROR;
        }
        let args = '?len=' + _this156.notiflen.toString();
        if (_this156.notifPos > 0) {
          args += '&abs=' + _this156.notifPos.toString();
        }
        _this156.notbynOpenPromise = new Promise(function(resolve, reject) {
          _this156.notbynRequest = new XMLHttpRequest();
          _this156.notbynRequest.open('GET', _this156.urlInfo.url + 'not.byn' + args, true, '', '');
          _this156.notbynRequest.overrideMimeType('text/plain; charset=x-user-defined');
          _this156.notbynRequest.onreadystatechange = function() {
            if (_this156.disconnecting) {
              return;
            }
            if (_this156.notbynRequest.readyState >= 3) {
              resolve(YAPI_SUCCESS);
              if (_this156.notbynRequest.readyState == 4 && parseInt(_this156.notbynRequest.status) != 200 && parseInt(_this156.notbynRequest.status) != 304) {
                _this156.imm_testHubAgainLater();
              } else {
                if (_this156.notbynRequest.readyState == 3) {
                  if (_this156.notiflen == 1)
                    return;
                }
                let newlen = _this156.notbynRequest.responseText.length;
                if (newlen > _this156.currPos) {
                  _this156._yapi.parseEvents(_this156, _this156.notbynRequest.responseText.substr(_this156.currPos, newlen - _this156.currPos));
                }
                if (_this156.notbynRequest.readyState == 4 && parseInt(_this156.notbynRequest.status) != 0) {
                  _this156.currPos = 0;
                  _this156.testHub(new YErrorMsg());
                }
              }
            }
          };
          _this156.notbynRequest.send('');
        });
        return yield _this156.notbynOpenPromise;
      })();
    }
    request(method, devUrl, obj_body, tcpchan) {
      var _this157 = this;
      return _asyncToGenerator(function*() {
        let httpPromise = new Promise(function(resolve, reject) {
          let prefix = _this157.urlInfo.url.slice(0, -1);
          let httpRequest = new XMLHttpRequest();
          httpRequest.open(method, prefix + devUrl, true, _this157.urlInfo.user, _this157.urlInfo.pass);
          httpRequest.onreadystatechange = function() {
            if (httpRequest.readyState == 4) {
              let yreq = new YHTTPRequest(null);
              if (httpRequest.status != 200 && httpRequest.status != 304) {
                yreq.errorType = YAPI_NOT_SUPPORTED;
                yreq.errorMsg = 'HTTP Error ' + httpRequest.status + ' on ' + prefix + devUrl;
              } else {
                yreq.bin_result = _this157._yapi.imm_str2bin(httpRequest.responseText);
              }
              resolve(yreq);
            }
          };
          let body = '';
          if (obj_body) {
            let blob = new Blob([obj_body.data], {type: 'application/octet-binary'});
            body = new FormData();
            body.append(obj_body.fname, blob);
          }
          httpRequest.send(body || '');
        });
        return httpPromise;
      })();
    }
    disconnect() {
      var _this158 = this;
      return _asyncToGenerator(function*() {
        _this158.imm_commonDisconnect();
        _this158.notbynRequest.abort();
      })();
    }
  }
  exports.YHttpHub = YHttpHub;
  class YHttpNodeHub extends YGenericHub {
    constructor(obj_yapi, var_urlInfo) {
      super(obj_yapi, var_urlInfo);
      this.http = this._yapi._nodeRequire('http');
      this.notbynRequest = null;
      this.notbynOpenPromise = null;
    }
    testHub(errmsg) {
      var _this159 = this;
      return _asyncToGenerator(function*() {
        if (_this159.disconnecting) {
          return YAPI_IO_ERROR;
        }
        let args = '';
        if (_this159.notifPos > 0) {
          args = '?abs=' + _this159.notifPos.toString();
        }
        let options = {
          method: 'GET',
          hostname: _this159.urlInfo.host,
          port: _this159.urlInfo.port,
          path: '/not.byn' + args
        };
        _this159.notbynOpenPromise = new Promise(function(resolve, reject) {
          _this159.notbynRequest = _this159.http.request(options, function(res) {
            if (_this159.disconnecting) {
              return;
            }
            if (res.statusCode != 200 && res.statusCode != 304) {
              _this159.imm_testHubAgainLater();
            } else {
              resolve(YAPI_SUCCESS);
              res.on('data', function(chunk) {
                _this159._yapi.parseEvents(_this159, _this159._yapi.imm_bin2str(chunk));
              });
              res.on('end', function() {
                _this159.currPos = 0;
                _this159.testHub(new YErrorMsg());
              });
            }
          });
          _this159.notbynRequest.on('error', function() {
            _this159.imm_testHubAgainLater();
          });
          _this159.notbynRequest.end();
        });
        return yield _this159.notbynOpenPromise;
      })();
    }
    request(str_method, devUrl, obj_body, tcpchan) {
      var _this160 = this;
      return _asyncToGenerator(function*() {
        let options = {
          method: str_method,
          hostname: _this160.urlInfo.host,
          port: _this160.urlInfo.port,
          path: devUrl
        };
        if (obj_body) {
          options.boundary = _this160.imm_getBoundary();
          options.headers = {'Content-Type': 'multipart/form-data; boundary=' + options.boundary};
        }
        let httpPromise = new Promise(function(resolve, reject) {
          let response = new Buffer(0);
          let httpRequest = _this160.http.request(options, function(res) {
            if (res.statusCode != 200 && res.statusCode != 304) {
              let yreq = new YHTTPRequest(null);
              yreq.errorType = YAPI_NOT_SUPPORTED;
              yreq.errorMsg = 'HTTP Error ' + res.statusCode.toString() + ' on ' + _this160.urlInfo.url.slice(0, -1) + devUrl;
              resolve(yreq);
            } else {
              res.on('data', function(chunk) {
                response = Buffer.concat([response, chunk]);
              });
              res.on('end', function() {
                resolve(new YHTTPRequest(new Uint8Array(response)));
              });
            }
          });
          httpRequest.on('error', function(err) {
            let yreq = new YHTTPRequest(null);
            yreq.errorType = YAPI_IO_ERROR;
            yreq.errorMsg = err.errorMsg;
            resolve(yreq);
          });
          if (obj_body) {
            httpRequest.write(new Buffer(_this160.imm_formEncodeBody(obj_body, options.boundary)));
          }
          httpRequest.end();
        });
        return httpPromise;
      })();
    }
    disconnect() {
      var _this161 = this;
      return _asyncToGenerator(function*() {
        _this161.imm_commonDisconnect();
        _this161.notbynRequest.abort();
      })();
    }
  }
  exports.YHttpNodeHub = YHttpNodeHub;
  class YHttpCallbackHub extends YGenericHub {
    constructor(obj_yapi, var_urlInfo, incomingMessage, serverResponse) {
      super(obj_yapi, var_urlInfo);
      var cbhub = this;
      this._incomingMessage = incomingMessage;
      this._serverResponse = serverResponse;
      this._callbackData = new Buffer(0);
      this._callbackCache = null;
      this.httpCallbackPromise = new Promise(function(resolve, reject) {
        cbhub._incomingMessage.on('data', function(chunk) {
          cbhub._callbackData = Buffer.concat([cbhub._callbackData, chunk]);
        });
        cbhub._incomingMessage.on('end', function() {
          cbhub._callbackData = new Uint8Array(cbhub._callbackData);
          cbhub._callbackCache = JSON.parse(cbhub._yapi.imm_bin2str(cbhub._callbackData));
          resolve(true);
        });
      });
    }
    testHub(errmsg) {
      var _this162 = this;
      return _asyncToGenerator(function*() {
        yield _this162.httpCallbackPromise;
        if (_this162._incomingMessage.method != 'POST') {
          errmsg.msg = 'HTTP POST expected';
          return YAPI_INVALID_ARGUMENT;
        }
        if (_this162._callbackData.length == 0) {
          errmsg.msg = 'Empty POST body';
          return YAPI_NO_MORE_DATA;
        }
        if (_this162.urlInfo.pass != '') {
          if (!_this162._callbackCache.sign) {
            errmsg.msg = 'missing signature from incoming YoctoHub (callback password required)';
            _this162._callbackCache = [];
            return YAPI_NO_MORE_DATA;
          }
          let sign = _this162._callbackCache['sign'];
          let pass = _this162.urlInfo.pass;
          let salt;
          if (pass.length == 32) {
            salt = pass.toLowerCase();
          } else {
            salt = _this162._yapi.imm_bin2hexstr(_this162._yapi.imm_yMD5(pass)).toLowerCase();
          }
          let patched = _this162._yapi.imm_bin2str(_this162._callbackData).replace(sign, salt);
          let check = _this162._yapi.imm_bin2hexstr(_this162._yapi.imm_yMD5(patched));
          if (check.toLowerCase() != sign.toLowerCase()) {
            errmsg.msg = 'invalid signature from incoming YoctoHub (invalid callback password)';
            _this162._callbackCache = [];
            return YAPI_UNAUTHORIZED;
          }
        }
        return YAPI_SUCCESS;
      })();
    }
    request(str_method, devUrl, obj_body, tcpchan) {
      var _this163 = this;
      return _asyncToGenerator(function*() {
        let yreq = new YHTTPRequest(null);
        if (str_method == 'POST' && obj_body) {
          let boundary = _this163.imm_getBoundary();
          let body = _this163.imm_formEncodeBody(obj_body, boundary);
          _this163._serverResponse.write('\n@YoctoAPI:' + str_method + ' ' + devUrl + ' ' + body.length + ':' + boundary + '\n');
          _this163._serverResponse.write(new Buffer(body));
        } else if (str_method == 'GET') {
          var jzon = devUrl.indexOf('?fw=');
          if (jzon != -1 && devUrl.indexOf('&', jzon) == -1) {
            devUrl = devUrl.slice(0, jzon);
          }
          if (devUrl.indexOf('?') == -1 || devUrl.indexOf('/logs.txt') != -1 || devUrl.indexOf('/logger.json') != -1 || devUrl.indexOf('/ping.txt') != -1 || devUrl.indexOf('/files.json?a=dir') != -1) {
            var subfun = /\/api\/([a-z][A-Za-z0-9]*)[.]json$/.exec(devUrl);
            if (subfun) {
              devUrl = devUrl.slice(0, subfun.index) + '/api.json';
            }
            if (!_this163._callbackCache[devUrl]) {
              _this163._serverResponse.write('\n!YoctoAPI:' + devUrl + ' is not preloaded, adding to list');
              _this163._serverResponse.write('\n@YoctoAPI:+' + devUrl + '\n');
              yreq.errorType = YAPI_NO_MORE_DATA;
              yreq.errorMsg = 'URL ' + devUrl + ' not preloaded, adding to list';
            } else {
              var jsonres = _this163._callbackCache[devUrl];
              if (subfun) {
                jsonres = jsonres[subfun[1]];
              }
              yreq.bin_result = _this163._yapi.imm_str2bin(JSON.stringify(jsonres));
            }
          } else {
            _this163._serverResponse.write('\n@YoctoAPI:' + str_method + ' ' + devUrl + '\n');
            yreq.bin_result = new Uint8Array(0);
          }
        } else {
          yreq.errorType = YAPI_NOT_SUPPORTED;
          yreq.errorMsg = 'Unsupported HTTP method';
        }
        return yreq;
      })();
    }
  }
  exports.YHttpCallbackHub = YHttpCallbackHub;
  class YWebSocketHub extends YGenericHub {
    constructor(obj_yapi, var_urlInfo) {
      super(obj_yapi, var_urlInfo);
      this.websocket = null;
      this.websocketOpenPromise = null;
      this.tcpChan = [];
      this.nextAsyncId = 48;
      this._DEFAULT_TCP_ROUND_TRIP_TIME = 30;
      this._DEFAULT_TCP_MAX_WINDOW_SIZE = 4 * 65536;
      this._YIO_DEFAULT_TCP_TIMEOUT = 20000;
      this._YIO_1_MINUTE_TCP_TIMEOUT = 60000;
      this._YIO_10_MINUTES_TCP_TIMEOUT = 600000;
      this._YSTREAM_TCP = 1;
      this._YSTREAM_TCP_CLOSE = 2;
      this._YSTREAM_META = 5;
      this._YSTREAM_TCP_NOTIF = 8;
      this._YSTREAM_TCP_ASYNCCLOSE = 9;
      this._USB_META_UTCTIME = 1;
      this._USB_META_DLFLUSH = 2;
      this._USB_META_ACK_D2H_PACKET = 3;
      this._USB_META_WS_ANNOUNCE = 4;
      this._USB_META_WS_AUTHENTICATION = 5;
      this._USB_META_WS_ERROR = 6;
      this._USB_META_ACK_UPLOAD = 7;
      this._USB_META_UTCTIME_SIZE = 5;
      this._USB_META_DLFLUSH_SIZE = 1;
      this._USB_META_ACK_D2H_PACKET_SIZE = 2;
      this._USB_META_WS_ANNOUNCE_SIZE = 8 + 20;
      this._USB_META_WS_AUTHENTICATION_SIZE = 28;
      this._USB_META_WS_ERROR_SIZE = 6;
      this._USB_META_ACK_UPLOAD_SIZE = 6;
      this._USB_META_WS_VALID_SHA1 = 1;
      this._USB_META_WS_RW = 2;
      this._WS_DEAD = 0;
      this._WS_DISCONNECTED = 1;
      this._WS_CONNECTING = 2;
      this._WS_AUTHENTICATING = 3;
      this._WS_CONNECTED = 4;
      this._reconnectionTimer = null;
      this._connectionTime = 0;
      this._connectionState = this._WS_CONNECTING;
      this._remoteVersion = 0;
      this._remoteSerial = '';
      this._remoteNonce = -1;
      this._nonce = -1;
      this._session_error = null;
      this._session_errno = null;
      this._rwAccess = false;
      this._tcpRoundTripTime = this._DEFAULT_TCP_ROUND_TRIP_TIME;
      this._tcpMaxWindowSize = this._DEFAULT_TCP_MAX_WINDOW_SIZE;
      this._lastUploadAckBytes = [0];
      this._lastUploadAckTime = [0];
      this._lastUploadRateBytes = [0];
      this._lastUploadRateTime = [0];
      this._uploadRate = [0];
    }
    imm_webSocketOpen(str_url) {
      this.websocket = new WebSocket(str_url);
      this.websocket.binaryType = 'arraybuffer';
    }
    imm_asyncWebSocketError(errorType, message) {
      this._yapi._throw(errorType, 'WS: ' + message, null);
    }
    testHub(errmsg) {
      var _this164 = this;
      return _asyncToGenerator(function*() {
        if (_this164.disconnecting) {
          return YAPI_IO_ERROR;
        }
        _this164._connectionState = _this164._WS_CONNECTING;
        _this164.imm_webSocketOpen(_this164.urlInfo.url + 'not.byn');
        _this164.websocketOpenPromise = new Promise(function(resolve, reject) {
          if (_this164.disconnecting) {
            resolve(YAPI_IO_ERROR);
          } else {
            _this164.websocket.onmessage = function(evt) {
              _this164._webSocketMsg(new Uint8Array(evt.data));
              if (_this164._connectionState == _this164._WS_CONNECTED) {
                resolve(YAPI_SUCCESS);
              } else if (_this164._connectionState == _this164._WS_DEAD) {
                errmsg.msg = _this164._session_error;
                console.log('WebSocket error: ' + _this164._session_error);
                resolve(_this164._session_errno == 401 ? YAPI_UNAUTHORIZED : YAPI_IO_ERROR);
                _this164.disconnect();
              }
            };
          }
        });
        _this164.websocket.onclose = function(evt) {
          _this164.websocket = null;
          if (_this164.retryDelay < 0) {
            _this164.disconnecting = true;
          }
          if (_this164.disconnecting) {
            return;
          }
          _this164.imm_testHubAgainLater();
        };
        _this164.websocket.onerror = function(evt) {
          console.log('WebSocket error: ', evt);
          if (_this164.websocket.terminate) {
            _this164.websocket.terminate();
          }
          _this164.websocket = null;
          if (_this164.retryDelay < 0) {
            _this164.disconnecting = true;
          }
          if (_this164.disconnecting) {
            return;
          }
          _this164.imm_testHubAgainLater();
        };
        return yield _this164.websocketOpenPromise;
      })();
    }
    imm_computeAuth(user, pass, serial, nonce) {
      let ha1_str = user + ':' + serial + ':' + pass;
      let ha1 = this._yapi.imm_bin2hexstr(this._yapi.imm_yMD5(ha1_str)).toLowerCase();
      let nonce8 = new Uint8Array([(nonce & 0xff) >>> 0, (nonce & 0xff00) >>> 8, (nonce & 0xff0000) >>> 16, nonce >>> 24]);
      let sha1_raw = ha1 + this._yapi.imm_bin2hexstr(nonce8).toLowerCase();
      return this._yapi.imm_ySHA1(sha1_raw.toLowerCase());
    }
    _webSocketMsg(arr_bytes) {
      var _this165 = this;
      return _asyncToGenerator(function*() {
        try {
          let reltime = (_this165._yapi.GetTickCount() - _this165._connectionTime) / 1000.0;
          let ystream = arr_bytes[0] >>> 3;
          var text = '';
          if (ystream == _this165._YSTREAM_TCP_NOTIF) {
            for (let i = 1; i < arr_bytes.length; i++) {
              text += String.fromCharCode(arr_bytes[i]);
            }
            yield _this165._yapi.parseEvents(_this165, text);
            return;
          }
          var ws = _this165.websocket;
          var tcpchan = arr_bytes[0] & 7;
          if (ystream == _this165._YSTREAM_TCP || ystream == _this165._YSTREAM_TCP_CLOSE || ystream == _this165._YSTREAM_TCP_ASYNCCLOSE) {
            if (tcpchan > 3) {
              _this165.imm_asyncWebSocketError(YAPI_IO_ERROR, 'Unexpected frame for tcpChan ' + tcpchan);
              return;
            }
            let tcp_end = arr_bytes.length;
            let yreq = _this165.tcpChan[tcpchan];
            if (!yreq) {
              _this165.imm_asyncWebSocketError(YAPI_IO_ERROR, 'Drop frame for closed tcpChan ' + tcpchan);
              return;
            }
            if (ystream == _this165._YSTREAM_TCP_ASYNCCLOSE) {
              tcp_end--;
              if (yreq.asyncId == 0) {
                _this165.imm_asyncWebSocketError(YAPI_IO_ERROR, 'Asynchronous close received, sync reply request');
                return;
              } else if (yreq.asyncId != arr_bytes[tcp_end]) {
                _this165.imm_asyncWebSocketError(YAPI_IO_ERROR, 'Incorrect async-close signature on tcpChan ' + tcpchan);
                return;
              }
            }
            let oldArr = yreq.bin_result;
            let newArr = new Uint8Array(oldArr.length + tcp_end - 1);
            newArr.set(oldArr, 0);
            newArr.set(arr_bytes.subarray(1, tcp_end), oldArr.length);
            yreq.bin_result = newArr;
            if (ystream == _this165._YSTREAM_TCP_CLOSE || ystream == _this165._YSTREAM_TCP_ASYNCCLOSE) {
              _this165.tcpChan[tcpchan] = yreq.next;
              if (ystream == _this165._YSTREAM_TCP_CLOSE) {
                if (yreq.asyncId != 0) {
                  _this165.imm_asyncWebSocketError(YAPI_IO_ERROR, 'Synchronous close received, async ack expected');
                  return;
                } else {
                  if (yreq.toBeSent && yreq.sendPos < yreq.toBeSent.length) {
                    console.log('WS: tcpclose at ' + yreq.sendPos + ' < ' + yreq.toBeSent.length);
                  }
                  if (yreq.timeoutId) {
                    let frame = new Uint8Array(1);
                    frame[0] = (_this165._YSTREAM_TCP_CLOSE << 3) + tcpchan;
                    _this165.websocket.send(frame);
                  }
                }
              }
              if (yreq.timeoutId) {
                clearTimeout(yreq.timeoutId);
                yreq.timeoutId = 0;
              }
              let pos = yreq.bin_result.indexOf(13);
              if (pos < 0) {
                yreq.errorType = YAPI_IO_ERROR;
                yreq.errorMsg = 'Bad response header';
              } else {
                let header = _this165._yapi.imm_bin2str(yreq.bin_result.subarray(0, pos));
                let words = header.split(' ');
                if (words[0] == 'OK') {
                  yreq.errorType = YAPI_SUCCESS;
                  let nextpos = yreq.bin_result.indexOf(13, pos + 2);
                  while (nextpos > pos + 2) {
                    pos = nextpos;
                    nextpos = yreq.bin_result.indexOf(13, pos + 2);
                  }
                  if (nextpos < 0) {
                    nextpos = pos;
                  }
                  yreq.bin_result = yreq.bin_result.subarray(nextpos + 2);
                } else if (words[0] == '0K') {
                  yreq.errorType = YAPI_IO_ERROR;
                  yreq.errorMsg = 'Unexpected persistent connection';
                } else {
                  yreq.errorType = YAPI_IO_ERROR;
                  yreq.errorMsg = 'HTTP error ' + header.slice(words[0].length + 1) + ' on ' + yreq.devUrl;
                }
              }
              if (yreq.asyncId == 0) {
                _this165.imm_sendPendingRequest(tcpchan);
                yreq.acceptor(yreq);
              } else {
                if (yreq.errorType != YAPI_SUCCESS) {
                  _this165.imm_asyncWebSocketError(YAPI_IO_ERROR, 'Async request error: ' + yreq.errorMsg);
                }
              }
            }
            return;
          }
          if (ystream == _this165._YSTREAM_META) {
            let metatype = arr_bytes[1];
            switch (metatype) {
              case _this165._USB_META_WS_ANNOUNCE:
                if (arr_bytes.length < 1 + _this165._USB_META_WS_ANNOUNCE_SIZE) {
                  return;
                }
                _this165._remoteVersion = arr_bytes[2];
                if (_this165._remoteVersion < 1) {
                  return;
                }
                var maxtcpws = (arr_bytes[3] << 4) + (arr_bytes[4] << 12);
                if (maxtcpws > 0) {
                  _this165._tcpMaxWindowSize = maxtcpws;
                }
                _this165._remoteNonce = arr_bytes[5] + (arr_bytes[6] << 8) + (arr_bytes[7] << 16) + (arr_bytes[8] << 24);
                for (let i = 9; i < 9 + 20; i++) {
                  if (arr_bytes[i] == 0) {
                    _this165._remoteSerial = _this165._yapi.imm_bin2str(arr_bytes.subarray(9, i));
                    break;
                  }
                }
                _this165._nonce = parseInt(Math.random() * 0xffffffff);
                _this165._connectionTime = _this165._yapi.GetTickCount();
                _this165._connectionState = _this165._WS_AUTHENTICATING;
                let frame = new Uint8Array(1 + _this165._USB_META_WS_AUTHENTICATION_SIZE);
                let version = _this165._remoteVersion < 2 ? _this165._remoteVersion : 2;
                let flags = 0;
                frame[0] = _this165._YSTREAM_META << 3;
                frame[1] = _this165._USB_META_WS_AUTHENTICATION;
                frame[2] = version;
                if (_this165.urlInfo.pass != '') {
                  flags = _this165._USB_META_WS_VALID_SHA1;
                  let sha1 = _this165.imm_computeAuth(_this165.urlInfo.user, _this165.urlInfo.pass, _this165._remoteSerial, _this165._remoteNonce);
                  for (let i = 0; i < sha1.length; i++) {
                    frame[9 + i] = sha1[i];
                  }
                }
                frame[3] = flags & 0xff;
                frame[4] = flags >>> 8;
                frame[5] = _this165._nonce & 0xff;
                frame[6] = _this165._nonce >>> 8 & 0xff;
                frame[7] = _this165._nonce >>> 16 & 0xff;
                frame[8] = _this165._nonce >>> 24 & 0xff;
                _this165.websocket.send(frame);
                break;
              case _this165._USB_META_WS_AUTHENTICATION:
                if (_this165._connectionState != _this165._WS_AUTHENTICATING) {
                  return;
                }
                if (arr_bytes.length < 1 + _this165._USB_META_WS_AUTHENTICATION_SIZE) {
                  return;
                }
                _this165._tcpRoundTripTime = _this165._yapi.GetTickCount() - _this165._connectionTime + 1;
                let uploadRate = parseInt(_this165._tcpMaxWindowSize * 1000 / _this165._tcpRoundTripTime);
                _this165._remoteVersion = arr_bytes[2];
                if (_this165._remoteVersion < 1) {
                  return;
                }
                let inflags = arr_bytes[3] + (arr_bytes[4] << 8);
                if ((inflags & _this165._USB_META_WS_RW) != 0) {
                  _this165._rwAccess = true;
                }
                if ((inflags & _this165._USB_META_WS_VALID_SHA1) != 0) {
                  let remote_sha1 = arr_bytes.subarray(9, 29);
                  let sha1 = _this165.imm_computeAuth(_this165.urlInfo.user, _this165.urlInfo.pass, _this165._remoteSerial, _this165._nonce);
                  for (let i = 0; i < sha1.length; i++) {
                    if (sha1[i] != remote_sha1[i]) {
                      _this165._session_errno = 401;
                      _this165._session_error = 'Authentication failed';
                      _this165._connectionState = _this165._WS_DEAD;
                      return;
                    }
                  }
                  _this165._connectionState = _this165._WS_CONNECTED;
                } else {
                  if (_this165.urlInfo.pass == '') {
                    _this165._connectionState = _this165._WS_CONNECTED;
                  } else {
                    _this165._session_errno = 401;
                    if (_this165.urlInfo.user == 'admin' && !_this165._rwAccess) {
                      _this165._session_error = 'Authentication as admin failed';
                    } else {
                      _this165._session_error = 'Password not set on remote hub';
                    }
                    _this165._connectionState = _this165._WS_DEAD;
                    return;
                  }
                }
                break;
              case _this165._USB_META_WS_ERROR:
                _this165._session_errno = arr_bytes[3] + (arr_bytes[4] << 8);
                if (_this165._session_errno == 401) {
                  _this165._session_error = 'Authentication failed';
                } else {
                  _this165._session_error = 'Remote hub closed connection with error ' + _this165._session_errno;
                }
                _this165._connectionState = _this165._WS_DEAD;
                break;
              case _this165._USB_META_ACK_UPLOAD:
                tcpchan = arr_bytes[2];
                if (_this165.tcpChan[tcpchan]) {
                  let yreq = _this165.tcpChan[tcpchan];
                  let ackBytes = arr_bytes[3] + (arr_bytes[4] << 8) + (arr_bytes[5] << 16) + (arr_bytes[6] << 24);
                  let ackTime = _this165._yapi.GetTickCount();
                  if (_this165._lastUploadAckTime[tcpchan] != 0 && ackBytes > _this165._lastUploadAckBytes[tcpchan]) {
                    _this165._lastUploadAckBytes[tcpchan] = ackBytes;
                    _this165._lastUploadAckTime[tcpchan] = ackTime;
                    let deltaBytes = ackBytes - _this165._lastUploadRateBytes[tcpchan];
                    let deltaTime = ackTime - _this165._lastUploadRateTime[tcpchan];
                    if (deltaTime < 500)
                      break;
                    if (deltaTime < 1000 && deltaBytes < 65536)
                      break;
                    _this165._lastUploadRateBytes[tcpchan] = ackBytes;
                    _this165._lastUploadRateTime[tcpchan] = ackTime;
                    if (yreq.progressCb && yreq.toBeSent) {
                      yreq.progressCb(ackBytes, yreq.toBeSent.length);
                    }
                    let newRate = deltaBytes * 1000 / deltaTime;
                    _this165._uploadRate[tcpchan] = parseInt(0.8 * _this165._uploadRate[tcpchan] + 0.3 * newRate);
                  } else {
                    _this165._lastUploadAckBytes[tcpchan] = ackBytes;
                    _this165._lastUploadAckTime[tcpchan] = ackTime;
                    if (yreq.progressCb && yreq.toBeSent) {
                      yreq.progressCb(ackBytes, yreq.toBeSent.length);
                    }
                    _this165.imm_sendPendingRequest(tcpchan);
                  }
                }
                break;
            }
            return;
          }
          _this165.imm_asyncWebSocketError(YAPI_IO_ERROR, 'Unsupported message: ' + _this165._yapi.imm_bin2hexstr(arr_bytes));
        } catch (e) {
          console.log('Unhandled exception in _webSocketMsg', e);
        }
      })();
    }
    imm_webSocketSend(arr_bytes) {
      this.websocket.send(arr_bytes);
    }
    imm_hasRwAccess() {
      return this._rwAccess;
    }
    request(method, devUrl, obj_body, tcpchan) {
      var _this166 = this;
      return _asyncToGenerator(function*() {
        if (_this166.logging) {
          _this166.imm_logrequest(method, devUrl, obj_body);
        }
        let httpPromise = new Promise(function(resolve, reject) {
          let subReq = method + ' ' + devUrl + ' \r\n\r\n';
          let ws = _this166.websocket;
          let isAsync = _this166._remoteVersion > 0 && devUrl.slice(-2) == '&.';
          let yreq = new YHTTPRequest(new Uint8Array(0));
          yreq.acceptor = resolve;
          yreq.devUrl = devUrl;
          yreq.sendPos = 0;
          if (obj_body) {
            let boundary = _this166.imm_getBoundary();
            let body = _this166.imm_formEncodeBody(obj_body, boundary);
            subReq = subReq.slice(0, -2) + 'Content-Type: multipart/form-data, boundary=' + boundary + '\r\n\r\n';
            yreq.toBeSent = new Uint8Array(subReq.length + body.length);
            yreq.toBeSent.set(body, subReq.length);
            yreq.progressCb = obj_body.progressCb;
          } else {
            yreq.toBeSent = new Uint8Array(subReq.length);
          }
          for (let i = 0; i < subReq.length; i++) {
            yreq.toBeSent[i] = subReq.charCodeAt(i);
          }
          if (tcpchan > 3) {
            yreq.errorType = YAPI_IO_ERROR;
            yreq.errorMsg = 'Unsupported tcpChan ' + tcpchan;
            yreq.acceptor(yreq);
            return;
          }
          if (!ws || _this166.disconnecting || _this166._connectionState != _this166._WS_CONNECTED) {
            yreq.errorType = YAPI_IO_ERROR;
            yreq.errorMsg = 'WebSocket not connected';
            yreq.acceptor(yreq);
            return;
          }
          if (isAsync) {
            yreq.asyncId = _this166.nextAsyncId++;
            if (_this166.nextAsyncId >= 127) {
              _this166.nextAsyncId = 48;
            }
          }
          let queue = _this166.tcpChan[tcpchan];
          if (queue) {
            while (queue.next) {
              queue = queue.next;
            }
            queue.next = yreq;
          } else {
            _this166.tcpChan[tcpchan] = yreq;
          }
          _this166.imm_sendPendingRequest(tcpchan);
        });
        return httpPromise;
      })();
    }
    imm_sendPendingRequest(tcpchan) {
      var _this167 = this;
      let yreq = this.tcpChan[tcpchan];
      while (yreq) {
        if (!yreq.toBeSent) {
          if (yreq.asyncId == 0) {
            return;
          }
          yreq = yreq.next;
          continue;
        }
        let isAsync = yreq.asyncId != 0;
        let asyncCloseSet = false;
        let pos = yreq.sendPos;
        let end = yreq.toBeSent.length;
        let i,
            frame;
        if (end > 2108 && this._remoteVersion >= 2 && tcpchan == 0) {
          if (pos == 0) {
            end = 2108;
            this._lastUploadAckBytes[tcpchan] = 0;
            this._lastUploadAckTime[tcpchan] = 0;
            this._uploadRate[tcpchan] = parseInt(this._tcpMaxWindowSize * 1000 / this._tcpRoundTripTime);
          } else if (this._lastUploadAckTime[tcpchan] == 0) {
            if (yreq.sendTimeoutId)
              clearTimeout(yreq.sendTimeoutId);
            yreq.sendTimeoutId = setTimeout(function() {
              _this167.imm_sendPendingRequest(tcpchan);
            }, this._tcpRoundTripTime);
            return;
          } else {
            let bytesOnTheAir = pos - this._lastUploadAckBytes[tcpchan];
            let uploadRate = this._uploadRate[tcpchan];
            let timeOnTheAir = this._yapi.GetTickCount() - this._lastUploadAckTime[tcpchan];
            let toBeSent = parseInt(2 * uploadRate + 1024 - bytesOnTheAir + uploadRate * timeOnTheAir / 1000);
            if (toBeSent + bytesOnTheAir > this._DEFAULT_TCP_MAX_WINDOW_SIZE) {
              toBeSent = this._DEFAULT_TCP_MAX_WINDOW_SIZE - bytesOnTheAir;
            }
            if (toBeSent < 64) {
              let waitTime = parseInt(1000 * (128 - toBeSent) / uploadRate);
              if (waitTime < 2)
                waitTime = 2;
              if (yreq.sendTimeoutId)
                clearTimeout(yreq.sendTimeoutId);
              yreq.sendTimeoutId = setTimeout(function() {
                _this167.imm_sendPendingRequest(tcpchan);
              }, waitTime);
              return;
            }
            if (end > pos + toBeSent) {
              if (toBeSent > 124) {
                toBeSent = parseInt(toBeSent / 124) * 124;
              }
              end = pos + toBeSent;
            }
          }
        }
        while (pos < end) {
          let framelen = 1 + end - pos;
          if (framelen > 125)
            framelen = 125;
          let datalen = framelen - 1;
          if (isAsync && pos + datalen == yreq.toBeSent.length && framelen < 125) {
            frame = new Uint8Array(framelen + 1);
            frame[0] = 8 * this._YSTREAM_TCP_ASYNCCLOSE + tcpchan;
            frame[framelen] = yreq.asyncId;
            asyncCloseSet = true;
          } else {
            frame = new Uint8Array(framelen);
            frame[0] = 8 * this._YSTREAM_TCP + tcpchan;
          }
          frame.set(yreq.toBeSent.subarray(pos, pos + datalen), 1);
          pos += datalen;
          this.imm_webSocketSend(frame);
        }
        let sent = pos - yreq.sendPos;
        yreq.sendPos = pos;
        if (yreq.sendPos < yreq.toBeSent.length) {
          let waitTime = parseInt(1000 * sent / this._uploadRate[tcpchan]);
          if (waitTime < 2)
            waitTime = 2;
          if (yreq.sendTimeoutId)
            clearTimeout(yreq.sendTimeoutId);
          yreq.sendTimeoutId = setTimeout(function() {
            _this167.imm_sendPendingRequest(tcpchan);
          }, waitTime);
          return;
        }
        if (isAsync && !asyncCloseSet) {
          frame = new Uint8Array(2);
          frame[0] = 8 * this._YSTREAM_TCP_ASYNCCLOSE + tcpchan;
          frame[1] = yreq.asyncId;
          this.imm_webSocketSend(frame);
        }
        yreq.toBeSent = false;
        if (isAsync) {
          try {
            yreq.acceptor(yreq);
          } catch (e) {
            console.log('async acceptor exception: ', e);
          }
        }
        let mstimeout = this._YIO_DEFAULT_TCP_TIMEOUT;
        if (yreq.devUrl.indexOf('/testcb.txt') >= 0) {
          mstimeout = this._YIO_1_MINUTE_TCP_TIMEOUT;
        } else if (yreq.devUrl.indexOf('/rxmsg.json') >= 0) {
          mstimeout = this._YIO_1_MINUTE_TCP_TIMEOUT;
        } else if (yreq.devUrl.indexOf('/upload.html') >= 0) {
          mstimeout = this._YIO_1_MINUTE_TCP_TIMEOUT;
        } else if (yreq.devUrl.indexOf('/flash.json') >= 0) {
          mstimeout = this._YIO_10_MINUTES_TCP_TIMEOUT;
        }
        yreq.timeoutId = setTimeout(function(chan, yr) {
          _this167.imm_abortRequest(chan, yr);
        }, mstimeout, tcpchan, yreq);
        if (!isAsync) {
          return;
        }
        yreq = yreq.next;
      }
    }
    imm_abortRequest(tcpchan, yreq) {
      var _this168 = this;
      if (!yreq.timeoutId)
        return;
      yreq.timeoutId = null;
      let frame = new Uint8Array(1);
      frame[0] = 8 * this._YSTREAM_TCP_CLOSE + tcpchan;
      this.imm_webSocketSend(frame);
      setTimeout(function(chan, yr) {
        _this168.imm_forgetRequest(chan, yr);
      }, 5000, tcpchan, yreq);
      console.log(this.tcpChan);
      this.imm_asyncWebSocketError(YAPI_IO_ERROR, 'Timeout on ' + yreq.devUrl + ' (tcpchan ' + tcpchan + ')');
    }
    imm_forgetRequest(tcpchan, yreq) {
      let queue = this.tcpChan[tcpchan];
      if (queue == yreq) {
        this.tcpChan[tcpchan] = yreq.next;
        this.imm_sendPendingRequest(tcpchan);
      }
    }
    disconnect() {
      var _this169 = this;
      return _asyncToGenerator(function*() {
        _this169.imm_commonDisconnect();
        _this169.websocket.close();
        _this169.websocket = null;
      })();
    }
  }
  exports.YWebSocketHub = YWebSocketHub;
  class YWebSocketNodeHub extends YWebSocketHub {
    constructor(obj_yapi, var_urlInfo) {
      super(obj_yapi, var_urlInfo);
      this.wsWebSocket = this._yapi._nodeRequire('ws');
    }
    imm_webSocketOpen(str_url) {
      this.websocket = new this.wsWebSocket(this.urlInfo.url + 'not.byn');
    }
    imm_webSocketSend(arr_bytes) {
      this.websocket.send(arr_bytes, {
        binary: true,
        mask: false
      });
    }
  }
  exports.YWebSocketNodeHub = YWebSocketNodeHub;
  class YWebSocketCallbackHub extends YWebSocketNodeHub {
    constructor(obj_yapi, var_urlInfo, ws) {
      super(obj_yapi, var_urlInfo);
      this.websocket = ws;
      this.retryDelay = -1;
    }
    imm_webSocketOpen(str_url) {}
  }
  exports.YWebSocketCallbackHub = YWebSocketCallbackHub;
  class YAPIContext {
    constructor() {
      this.SUCCESS = 0;
      this.NOT_INITIALIZED = -1;
      this.INVALID_ARGUMENT = -2;
      this.NOT_SUPPORTED = -3;
      this.DEVICE_NOT_FOUND = -4;
      this.VERSION_MISMATCH = -5;
      this.DEVICE_BUSY = -6;
      this.TIMEOUT = -7;
      this.IO_ERROR = -8;
      this.NO_MORE_DATA = -9;
      this.EXHAUSTED = -10;
      this.DOUBLE_ACCES = -11;
      this.UNAUTHORIZED = -12;
      this.RTC_NOT_READY = -13;
      this.FILE_NOT_FOUND = -14;
      this.INVALID_INT = YAPI_INVALID_INT;
      this.INVALID_UINT = YAPI_INVALID_UINT;
      this.INVALID_LONG = YAPI_INVALID_LONG;
      this.INVALID_DOUBLE = YAPI_INVALID_DOUBLE;
      this.INVALID_STRING = YAPI_INVALID_STRING;
      this.DETECT_NONE = 0;
      this.DETECT_USB = 1;
      this.DETECT_NET = 2;
      this.DETECT_ALL = this.DETECT_USB | this.DETECT_NET;
      this.defaultEncoding = 'binary';
      this.defaultCacheValidity = 5;
      this.exceptionsDisabled = false;
      this._uniqueID = String.fromCharCode(Math.random() * 79 + 48, Math.random() * 79 + 48, Math.random() * 79 + 48);
      this.imm_init();
      for (var i = 1; i <= 20; i++) {
        this.RegisterCalibrationHandler(i, this.LinearCalibrationHandler);
      }
      this.RegisterCalibrationHandler(YOCTO_CALIB_TYPE_OFS, this.LinearCalibrationHandler);
    }
    imm_init() {
      this._hubs = [];
      this._devs = {};
      this._snByUrl = {};
      this._snByName = {};
      this._fnByType = {};
      this._fnByType.Module = new YFunctionType(this, 'Module');
      this._lastErrorType = YAPI_SUCCESS;
      this._lastErrorMsg = 'no error';
      this._firstArrival = true;
      this._updateDevListStarted = false;
      this._pendingCallbacks = [];
      this._arrivalCallback = null;
      this._namechgCallback = null;
      this._removalCallback = null;
      this._data_events = [];
      this._forwardValues = 0;
      this._calibHandlers = {};
      this._ValueCallbackList = [];
      this._TimedReportCallbackList = [];
      this._isNodeJS = false;
      this._SystemJS = null;
      this._nodeRequire = null;
      if (typeof System != 'undefined') {
        this._SystemJS = System;
      } else {
        if (typeof $__System != 'undefined') {
          this._SystemJS = $__System;
        }
      }
      if (this._SystemJS) {
        if (this._SystemJS._nodeRequire) {
          this._isNodeJS = true;
          this._nodeRequire = $__System._nodeRequire;
        }
      } else {
        if (typeof $__require != 'undefined') {
          this._isNodeJS = true;
          this._nodeRequire = $__require;
        }
      }
    }
    _throw(int_errType, str_errMsg, obj_retVal) {
      this._lastErrorType = int_errType;
      this._lastErrorMsg = str_errMsg;
      if (!this.exceptionsDisabled) {
        let exc = new Error(str_errMsg);
        exc['name'] = 'YoctoError';
        exc['number'] = int_errType;
        exc['errorType'] = int_errType;
        throw exc;
      }
      return obj_retVal;
    }
    _addHub(newhub) {
      var _this170 = this;
      return _asyncToGenerator(function*() {
        _this170._hubs.push(newhub);
        var serial = _this170._snByUrl[newhub.urlInfo.url];
        if (!serial) {
          let dev = new YDevice(_this170, newhub.urlInfo.url, null, null);
          yield dev.refresh();
        }
      })();
    }
    imm_getHub(str_rootUrl) {
      var i,
          hubUrl;
      for (i = 0; i < this._hubs.length; i++) {
        hubUrl = this._hubs[i].urlInfo.url;
        if (str_rootUrl.slice(0, hubUrl.length) == hubUrl) {
          return this._hubs[i];
        }
      }
      return null;
    }
    _updateDeviceList_internal(bool_forceupdate, bool_invokecallbacks) {
      var _this171 = this;
      return _asyncToGenerator(function*() {
        if (_this171._firstArrival && bool_invokecallbacks && _this171._arrivalCallback) {
          bool_forceupdate = true;
        }
        if (bool_forceupdate) {
          for (let i = 0; i < _this171._hubs.length; i++) {
            _this171._hubs[i].imm_forceUpdate();
          }
        }
        if (_this171._updateDevListStarted && _this171.GetTickCount() - _this171._updateDevListStarted < 30 * 1000) {
          return {
            errorType: YAPI_SUCCESS,
            errorMsg: 'no error',
            result: YAPI_SUCCESS
          };
        }
        try {
          _this171._updateDevListStarted = _this171.GetTickCount();
          let hubs = [];
          for (let i = 0; i < _this171._hubs.length; i++) {
            let hub = _this171._hubs[i];
            let rootUrl = hub.urlInfo.url;
            let hubDev = _this171.imm_getDevice(rootUrl);
            if (!hubDev)
              continue;
            if (hub.devListExpires <= _this171.GetTickCount()) {
              hub.missing = [];
              hubs.push(hub);
            }
          }
          for (let serial in _this171._devs) {
            let rooturl = _this171._devs[serial].imm_getRootUrl();
            for (let i = 0; i < hubs.length; i++) {
              let huburl = hubs[i].urlInfo.url;
              if (rooturl.substr(0, huburl.length) == huburl) {
                hubs[i].missing[serial] = true;
              }
            }
          }
          yield Promise.all(Array.from(hubs, function(hub) {
            return hub.hubUpdateDeviceList();
          }));
          if (bool_invokecallbacks) {
            let nbEvents = _this171._pendingCallbacks.length;
            for (let i = 0; i < nbEvents; i++) {
              let evt = _this171._pendingCallbacks[i];
              let serial = evt.slice(1);
              switch (evt.charAt(0)) {
                case '+':
                  if (_this171._arrivalCallback != undefined) {
                    yield _this171._arrivalCallback(yFindModule(serial + '.module'));
                  }
                  break;
                case '/':
                  if (_this171._namechgCallback != undefined) {
                    yield _this171._namechgCallback(yFindModule(serial + '.module'));
                  }
                  break;
                case '-':
                  if (_this171._removalCallback != undefined) {
                    yield _this171._removalCallback(yFindModule(serial + '.module'));
                  }
                  _this171.imm_forgetDevice(_this171._devs[serial]);
                  break;
              }
            }
            _this171._pendingCallbacks = _this171._pendingCallbacks.slice(nbEvents);
            if (_this171._arrivalCallback != undefined && _this171._firstArrival) {
              _this171._firstArrival = false;
            }
          }
        } finally {
          _this171._updateDevListStarted = false;
        }
        return {
          errorType: YAPI_SUCCESS,
          errorMsg: 'no error',
          result: YAPI_SUCCESS
        };
      })();
    }
    updateDeviceList_process(hub, hubDev, whitePages, yellowPages) {
      var _this172 = this;
      return _asyncToGenerator(function*() {
        let refresh = {};
        let serial = null;
        for (let classname in yellowPages) {
          let obj_yprecs = yellowPages[classname];
          let ftype = _this172._fnByType[classname];
          if (ftype == undefined) {
            ftype = new YFunctionType(_this172, classname);
            _this172._fnByType[classname] = ftype;
          }
          for (var key in obj_yprecs) {
            var yprec = obj_yprecs[key];
            var hwid = yprec['hardwareId'];
            var basetype = yprec['baseType'];
            if (ftype.imm_reindexFunction(hwid, yprec['logicalName'], yprec['advertisedValue'], basetype)) {
              serial = hwid.substr(0, hwid.indexOf('.'));
              refresh[serial] = true;
            }
          }
        }
        for (let devkey in whitePages) {
          var devinfo = whitePages[devkey];
          serial = devinfo['serialNumber'];
          var devydx = devinfo['index'];
          var rooturl = devinfo.networkUrl.slice(0, -3);
          if (rooturl.charAt(0) == '/')
            rooturl = hubDev.imm_getRootUrl() + rooturl.substr(1);
          var currdev = _this172._devs[serial];
          if (currdev && _this172._arrivalCallback != undefined && _this172._firstArrival) {
            _this172._pendingCallbacks.push('+' + serial);
          }
          hub.serialByYdx[devydx] = serial;
          if (!currdev) {
            new YDevice(_this172, rooturl, devinfo, yellowPages);
            if (_this172._arrivalCallback != undefined) {
              _this172._pendingCallbacks.push('+' + serial);
            }
          } else if (currdev.imm_getLogicalName() != devinfo['logicalName']) {
            yield currdev.refresh();
            if (_this172._namechgCallback != undefined) {
              _this172._pendingCallbacks.push('/' + serial);
            }
          } else if (refresh[serial] || currdev.imm_getRootUrl() != rooturl || currdev.imm_getBeacon() != devinfo['beacon']) {
            yield currdev.refresh();
          }
          hub.missing[serial] = false;
        }
        for (serial in hub.missing) {
          if (hub.missing[serial]) {
            if (_this172._removalCallback != undefined) {
              _this172._pendingCallbacks.push('-' + serial);
            } else {
              _this172.imm_forgetDevice(_this172._devs[serial]);
            }
          }
        }
        return YAPI_SUCCESS;
      })();
    }
    parseEvents(hub, str_lines) {
      var _this173 = this;
      return _asyncToGenerator(function*() {
        hub.devListValidity = 10000;
        var rows = str_lines.split('\n');
        var nrows = rows.length;
        var value;
        nrows--;
        for (var idx = 0; idx < nrows; idx++) {
          var ev = rows[idx];
          if (ev.length == 0)
            continue;
          var firstCode = ev.charAt(0);
          if (ev.length >= 3 && firstCode >= NOTIFY_NETPKT_FLUSHV2YDX && firstCode <= NOTIFY_NETPKT_TIMEAVGYDX) {
            hub.retryDelay = 15;
            if (hub.notifPos >= 0)
              hub.notifPos += ev.length + 1;
            var devydx = ev.charCodeAt(1) - 65;
            var funydx = ev.charCodeAt(2) - 48;
            if (funydx >= 64) {
              funydx -= 64;
              devydx += 128;
            }
            var serial = hub.serialByYdx[devydx];
            if (serial && _this173._devs[serial]) {
              var funcid = funydx == 0xf ? 'time' : _this173._devs[serial].imm_functionId(funydx);
              if (funcid != '') {
                value = ev.slice(3);
                switch (firstCode) {
                  case NOTIFY_NETPKT_FUNCVALYDX:
                    if (value != '')
                      value = value.split('\0')[0];
                    _this173.imm_setFunctionValue(serial + '.' + funcid, value);
                    break;
                  case NOTIFY_NETPKT_DEVLOGYDX:
                    break;
                  case NOTIFY_NETPKT_TIMEVALYDX:
                  case NOTIFY_NETPKT_TIMEAVGYDX:
                  case NOTIFY_NETPKT_TIMEV2YDX:
                    var pos,
                        arr = [firstCode == 'x' ? 0 : firstCode == 'z' ? 1 : 2];
                    for (pos = 0; pos < value.length; pos += 2) {
                      arr.push(parseInt(value.substr(pos, 2), 16));
                    }
                    var dev = _this173._devs[serial];
                    if (funcid == 'time') {
                      var time = arr[1] + 0x100 * arr[2] + 0x10000 * arr[3] + 0x1000000 * arr[4];
                      dev.imm_setDeviceTime(time + arr[5] / 250.0);
                    } else {
                      _this173.imm_setTimedReport(serial + '.' + funcid, dev.imm_getDeviceTime(), arr);
                    }
                    break;
                  case NOTIFY_NETPKT_FUNCV2YDX:
                    var rawval = _this173.imm_decodeNetFuncValV2(value);
                    if (rawval != null) {
                      var decodedval = _this173.imm_decodePubVal(rawval[0], rawval, 1, 6);
                      _this173.imm_setFunctionValue(serial + '.' + funcid, decodedval);
                    }
                    break;
                  case NOTIFY_NETPKT_FLUSHV2YDX:
                  default:
                    break;
                }
              }
            }
          } else if (ev.length > 5 && ev.substr(0, 4) == 'YN01') {
            hub.retryDelay = 15;
            if (hub.notifPos >= 0)
              hub.notifPos += ev.length + 1;
            var notype = ev.substr(4, 1);
            if (notype == '@') {
              hub.notifPos = parseInt(ev.slice(5));
            } else
              switch (parseInt(notype)) {
                case 0:
                case 2:
                case 4:
                case 8:
                  hub.devListExpires = 0;
                  break;
                case 5:
                  var parts = ev.slice(5).split(',');
                  if (parts.length > 2) {
                    value = parts[2].split('\0');
                    _this173.imm_setFunctionValue(parts[0] + '.' + parts[1], value[0]);
                  }
                  break;
              }
          } else {
            hub.devListValidity = 500;
            hub.devListExpires = 0;
            hub.notifPos = -1;
          }
          hub.currPos += ev.length + 1;
        }
        if (_this173._forwardValues > 0) {
          yield _this173.HandleEvents(new YErrorMsg());
        }
      })();
    }
    imm_decodeNetFuncValV2(p) {
      var p_ofs = 0;
      var ch = p.charCodeAt(p_ofs) & 0xff;
      var len = 0;
      var funcVal = [0, 0, 0, 0, 0, 0, 0];
      if (ch < 32 || ch > 32 + 127) {
        return null;
      }
      ch -= 32;
      funcVal[0] = (ch & 0x40) != 0 ? NOTIFY_V2_6RAWBYTES : NOTIFY_V2_TYPEDDATA;
      ch &= 0x3f;
      while (len < YOCTO_PUBVAL_SIZE) {
        p_ofs++;
        if (p_ofs >= p.length)
          break;
        var newCh = p.charCodeAt(p_ofs) & 0xff;
        if (newCh == NOTIFY_NETPKT_STOP) {
          break;
        }
        if (newCh < 32 || newCh > 32 + 127) {
          return null;
        }
        newCh -= 32;
        ch = (ch << 7) + newCh;
        funcVal[len + 1] = ch >>> 5 - len & 0xff;
        len++;
      }
      return funcVal;
    }
    imm_decodePubVal(int_typeV2, arr_funcval, int_ofs, int_funcvalen) {
      var buffer = '';
      var endp;
      if (int_typeV2 == NOTIFY_V2_6RAWBYTES || int_typeV2 == NOTIFY_V2_TYPEDDATA) {
        var funcValType;
        if (int_typeV2 == NOTIFY_V2_6RAWBYTES) {
          funcValType = PUBVAL_6RAWBYTES;
        } else {
          funcValType = arr_funcval[int_ofs++];
        }
        switch (funcValType) {
          case PUBVAL_LEGACY:
            break;
          case PUBVAL_1RAWBYTE:
          case PUBVAL_2RAWBYTES:
          case PUBVAL_3RAWBYTES:
          case PUBVAL_4RAWBYTES:
          case PUBVAL_5RAWBYTES:
          case PUBVAL_6RAWBYTES:
            for (var i = 0; i < funcValType; i++) {
              var c = arr_funcval[int_ofs++];
              var b = c >>> 4;
              buffer += b.toString(16);
              b = c & 0xf;
              buffer += b.toString(16);
            }
            return buffer;
          case PUBVAL_C_LONG:
          case PUBVAL_YOCTO_FLOAT_E3:
            var numVal = arr_funcval[int_ofs++];
            numVal += arr_funcval[int_ofs++] << 8;
            numVal += arr_funcval[int_ofs++] << 16;
            numVal += arr_funcval[int_ofs++] << 24;
            if (funcValType == PUBVAL_C_LONG) {
              return String(Math.round(numVal));
            } else {
              buffer = String(Math.round(numVal * 1000) / 1000000.0);
              endp = buffer.length;
              while (endp > 0 && buffer[endp - 1] == '0') {
                --endp;
              }
              if (endp > 0 && buffer[endp - 1] == '.') {
                --endp;
                buffer = buffer.substr(0, endp);
              }
              return buffer;
            }
          case PUBVAL_C_FLOAT:
            var v = arr_funcval[int_ofs++];
            v += arr_funcval[int_ofs++] << 8;
            v += arr_funcval[int_ofs++] << 16;
            v += arr_funcval[int_ofs++] << 24;
            var fraction = (v & (1 << 23) - 1) + (1 << 23) * (v >>> 31 | 1);
            var exp = (v >>> 23 & 0xFF) - 127;
            var floatVal = fraction * Math.pow(2, exp - 23);
            buffer = String(Math.round(floatVal * 1000000) / 1000000);
            endp = buffer.length;
            while (endp > 0 && buffer[endp - 1] == '0') {
              --endp;
            }
            if (endp > 0 && buffer[endp - 1] == '.') {
              --endp;
              buffer = buffer.substr(0, endp);
            }
            return buffer;
          default:
            return '?';
        }
        var len = 0;
        buffer = '';
        while (len < YOCTO_PUBVAL_SIZE && len < int_funcvalen) {
          if (arr_funcval[len] == 0)
            break;
          buffer += String.fromCharCode(arr_funcval[len]);
          len++;
        }
      }
      return buffer;
    }
    imm_decExp(int_pow) {
      const arr = [1.0e-6, 1.0e-5, 1.0e-4, 1.0e-3, 1.0e-2, 1.0e-1, 1.0, 1.0e1, 1.0e2, 1.0e3, 1.0e4, 1.0e5, 1.0e6, 1.0e7, 1.0e8, 1.0e9];
      return arr[int_pow];
    }
    imm_decimalToDouble(val) {
      var negate = false;
      var res;
      var mantis = val & 2047;
      if (mantis == 0)
        return 0.0;
      if (val > 32767) {
        negate = true;
        val = 65536 - val;
      } else if (val < 0) {
        negate = true;
        val = -val;
      }
      var decexp = this.imm_decExp(val >>> 11);
      if (decexp >= 1.0) {
        res = mantis * decexp;
      } else {
        res = mantis / Math.round(1 / decexp);
      }
      return negate ? -res : res;
    }
    imm_doubleToDecimal(val) {
      var negate = false;
      var comp,
          mant;
      var decpow;
      var res;
      if (val == 0.0) {
        return 0;
      }
      if (val < 0) {
        negate = true;
        val = -val;
      }
      comp = val / 1999.0;
      decpow = 0;
      while (comp > this.imm_decExp(decpow) && decpow < 15) {
        decpow++;
      }
      mant = val / this.imm_decExp(decpow);
      if (decpow == 15 && mant > 2047.0) {
        res = (15 << 11) + 2047;
      } else {
        res = (decpow << 11) + Math.round(mant);
      }
      return negate ? -res : res;
    }
    imm_getCalibrationHandler(calibType) {
      return this._calibHandlers[calibType];
    }
    imm_decodeWords(data) {
      var udata = [];
      for (var i = 0; i < data.length; ) {
        var c = data[i];
        if (c == '*') {
          val = 0;
          i++;
        } else if (c == 'X') {
          val = 0xffff;
          i++;
        } else if (c == 'Y') {
          val = 0x7fff;
          i++;
        } else if (c >= 'a') {
          var srcpos = udata.length - 1 - (data.charCodeAt(i++) - 97);
          if (srcpos < 0)
            val = 0;
          else
            val = udata[srcpos];
        } else {
          if (i + 3 > data.length)
            return udata;
          var val = data.charCodeAt(i++) - 48;
          val += data.charCodeAt(i++) - 48 << 5;
          var lastcode = data.charCodeAt(i++);
          if (lastcode == 122)
            lastcode = 92;
          val += lastcode - 48 << 10;
        }
        udata.push(val);
      }
      return udata;
    }
    imm_decodeFloats(data) {
      var idata = [];
      var p = 0;
      var datalen = data.length;
      while (p < datalen) {
        var val = 0;
        var sign = 1;
        var dec = 0;
        var decInc = 0;
        var c = data[p++];
        while (c != '-' && (c < '0' || c > '9')) {
          if (p >= datalen) {
            return idata;
          }
          c = data[p++];
        }
        if (c == '-') {
          if (p >= datalen) {
            return idata;
          }
          sign = -sign;
          c = data[p++];
        }
        while (c >= '0' && c <= '9' || c == '.') {
          if (c == '.') {
            decInc = 1;
          } else if (dec < 3) {
            val = val * 10 + (c.charCodeAt(0) - 48);
            dec += decInc;
          }
          if (p < datalen) {
            c = data[p++];
          } else {
            c = '\0';
          }
        }
        if (dec < 3) {
          if (dec == 0)
            val *= 1000;
          else if (dec == 1)
            val *= 100;
          else
            val *= 10;
        }
        idata.push(sign * val);
      }
      return idata;
    }
    imm_atoi(str_data) {
      var num = parseInt(str_data);
      if (isNaN(num)) {
        return 0;
      }
      return Math.floor(num);
    }
    imm_bin2str(bin_data) {
      let len = bin_data.length;
      let res = '';
      for (let i = 0; i < len; i += 20) {
        let subdata = bin_data.subarray(i, Math.min(i + 20, len));
        res += String.fromCharCode.apply(null, subdata);
      }
      return res;
    }
    imm_str2bin(str_data) {
      let len = str_data.length;
      let res = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        res[i] = str_data.charCodeAt(i);
      }
      return res;
    }
    imm_bin2hexstr(bin_data) {
      let len = bin_data.length;
      let res = '';
      for (let i = 0; i < len; i++) {
        let n = bin_data[i].toString(16);
        res += n.length < 2 ? '0' + n : n;
      }
      return res.toUpperCase();
    }
    imm_hexstr2bin(str_data) {
      let len = str_data.length >>> 1;
      let res = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        res[i] = parseInt(str_data.substr(2 * i, 2), 16);
      }
      return res;
    }
    imm_getDevice(str_device) {
      var dev = null;
      var serial;
      if (str_device.substr(0, 7) == 'http://' || str_device.substr(0, 5) == 'ws://') {
        serial = this._snByUrl[str_device];
        if (serial != undefined)
          dev = this._devs[serial];
      } else {
        if (this._devs[str_device]) {
          dev = this._devs[str_device];
        } else {
          serial = this._snByName[str_device];
          if (serial) {
            dev = this._devs[serial];
          }
        }
      }
      return dev;
    }
    _UpdateValueCallbackList(obj_func, bool_add) {
      var _this174 = this;
      return _asyncToGenerator(function*() {
        let index = _this174._ValueCallbackList.indexOf(obj_func);
        if (bool_add) {
          yield obj_func.isOnline();
          if (index < 0) {
            _this174._ValueCallbackList.push(obj_func);
          }
        } else if (index >= 0) {
          _this174._ValueCallbackList.splice(index, 1);
        }
      })();
    }
    _UpdateTimedReportCallbackList(obj_func, bool_add) {
      var _this175 = this;
      return _asyncToGenerator(function*() {
        let index = _this175._TimedReportCallbackList.indexOf(obj_func);
        if (bool_add) {
          yield obj_func.isOnline();
          if (index < 0) {
            _this175._TimedReportCallbackList.push(obj_func);
          }
        } else if (index >= 0) {
          _this175._TimedReportCallbackList.splice(index, 1);
        }
      })();
    }
    imm_functionClass(str_funcid) {
      var dotpos = str_funcid.indexOf('.');
      if (dotpos >= 0)
        str_funcid = str_funcid.substr(dotpos + 1);
      var classlen = str_funcid.length;
      while (str_funcid.substr(classlen - 1, 1) <= '9')
        classlen--;
      var classname = str_funcid.substr(0, 1).toUpperCase() + str_funcid.substr(1, classlen - 1);
      if (this._fnByType[classname] == undefined)
        this._fnByType[classname] = new YFunctionType(this, classname);
      return classname;
    }
    imm_reindexDevice(obj_dev) {
      var rootUrl = obj_dev.imm_getRootUrl();
      var serial = obj_dev.imm_getSerialNumber();
      var lname = obj_dev.imm_getLogicalName();
      this._devs[serial] = obj_dev;
      this._snByUrl[rootUrl] = serial;
      if (lname != '')
        this._snByName[lname] = serial;
      this._fnByType['Module'].imm_reindexFunction(serial + '.module', lname, null, null);
      var i,
          count = obj_dev.imm_functionCount();
      for (i = 0; i < count; i++) {
        var funcid = obj_dev.imm_functionId(i);
        var funcname = obj_dev.imm_functionName(i);
        var classname = this.imm_functionClass(funcid);
        this._fnByType[classname].imm_reindexFunction(serial + '.' + funcid, funcname, null, null);
      }
    }
    imm_forgetDevice(obj_dev) {
      var rootUrl = obj_dev.imm_getRootUrl();
      var serial = obj_dev.imm_getSerialNumber();
      var lname = obj_dev.imm_getLogicalName();
      delete this._devs[serial];
      delete this._snByUrl[rootUrl];
      if (this._snByName[lname] == serial) {
        delete this._snByName[lname];
      }
      this._fnByType['Module'].imm_forgetFunction(serial + '.module');
      var i,
          count = obj_dev.imm_functionCount();
      for (i = 0; i < count; i++) {
        var funcid = obj_dev.imm_functionId(i);
        var classname = this.imm_functionClass(funcid);
        this._fnByType[classname].imm_forgetFunction(serial + '.' + funcid);
      }
    }
    imm_resolveFunction(str_className, str_func) {
      if (Y_BASETYPES[str_className] == undefined) {
        if (this._fnByType[str_className] == undefined)
          this._fnByType[str_className] = new YFunctionType(this, str_className);
        return this._fnByType[str_className].imm_resolve(str_func);
      }
      var baseType = Y_BASETYPES[str_className];
      var res;
      for (str_className in this._fnByType) {
        if (this._fnByType[str_className].imm_getBaseType() == baseType) {
          res = this._fnByType[str_className].imm_resolve(str_func);
          if (res.errorType == YAPI_SUCCESS)
            return res;
        }
      }
      return {
        errorType: YAPI_DEVICE_NOT_FOUND,
        errorMsg: 'No ' + str_className + ' [' + str_func + '] found (old firmware?)',
        result: null
      };
    }
    imm_getFriendlyNameFunction(str_className, str_func) {
      if (Y_BASETYPES[str_className] == undefined) {
        if (this._fnByType[str_className] == undefined)
          this._fnByType[str_className] = new YFunctionType(this, str_className);
        return this._fnByType[str_className].imm_getFriendlyName(str_func);
      }
      var baseType = Y_BASETYPES[str_className];
      var res;
      for (str_className in this._fnByType) {
        if (this._fnByType[str_className].imm_getBaseType() == baseType) {
          res = this._fnByType[str_className].imm_getFriendlyName(str_func);
          if (res.errorType == YAPI_SUCCESS)
            return res;
        }
      }
      return {
        errorType: YAPI_DEVICE_NOT_FOUND,
        errorMsg: 'No ' + str_className + ' [' + str_func + '] found (old firmware?)',
        result: null
      };
    }
    imm_setFunction(str_className, str_func, obj_func) {
      if (this._fnByType[str_className] == undefined)
        this._fnByType[str_className] = new YFunctionType(this, str_className);
      return this._fnByType[str_className].imm_setFunction(str_func, obj_func);
    }
    imm_getFunction(str_className, str_func) {
      if (this._fnByType[str_className] == undefined)
        this._fnByType[str_className] = new YFunctionType(this, str_className);
      return this._fnByType[str_className].imm_getFunction(str_func);
    }
    imm_setFunctionValue(str_hwid, str_pubval) {
      let classname = this.imm_functionClass(str_hwid);
      if (this._fnByType[classname].imm_setFunctionValue(str_hwid, str_pubval)) {
        let receivers = this._ValueCallbackList;
        for (let i = 0; i < receivers.length; i++) {
          let fun = receivers[i];
          if (!fun._hwId)
            continue;
          if (fun._hwId == str_hwid) {
            this._data_events.push([fun, str_pubval]);
          }
        }
      }
    }
    imm_setTimedReport(str_hwid, float_timestamp, arr_report) {
      let classname = this.imm_functionClass(str_hwid);
      let receivers = this._TimedReportCallbackList;
      for (let i = 0; i < receivers.length; i++) {
        let fun = receivers[i];
        if (!fun._hwId)
          continue;
        if (fun._hwId == str_hwid) {
          this._data_events.push([fun, float_timestamp, arr_report]);
        }
      }
    }
    imm_getFunctionValue(str_hwid) {
      var classname = this.imm_functionClass(str_hwid);
      return this._fnByType[classname].imm_getFunctionValue(str_hwid);
    }
    imm_getFunctionBaseType(str_hwid) {
      var classname = this.imm_functionClass(str_hwid);
      return this._fnByType[classname].imm_getBaseType();
    }
    imm_getFirstHardwareId(str_className) {
      if (Y_BASETYPES[str_className] == undefined) {
        if (this._fnByType[str_className] == undefined)
          this._fnByType[str_className] = new YFunctionType(this, str_className);
        return this._fnByType[str_className].imm_getFirstHardwareId();
      }
      var baseType = Y_BASETYPES[str_className];
      var res;
      for (str_className in this._fnByType) {
        if (this._fnByType[str_className].imm_getBaseType() == baseType) {
          res = this._fnByType[str_className].imm_getFirstHardwareId();
          if (res != undefined)
            return res;
        }
      }
      return null;
    }
    imm_getNextHardwareId(str_className, str_hwid) {
      if (Y_BASETYPES[str_className] == undefined) {
        return this._fnByType[str_className].imm_getNextHardwareId(str_hwid);
      }
      var baseType = Y_BASETYPES[str_className];
      var prevclass = this.imm_functionClass(str_hwid);
      var res = this._fnByType[prevclass].imm_getNextHardwareId(str_hwid);
      if (res != undefined)
        return res;
      for (str_className in this._fnByType) {
        if (prevclass != '') {
          if (str_className != prevclass)
            continue;
          prevclass = '';
          continue;
        }
        if (this._fnByType[str_className].imm_getBaseType() == baseType) {
          res = this._fnByType[str_className].imm_getFirstHardwareId();
          if (res != undefined)
            return res;
        }
      }
      return null;
    }
    devRequest(str_device, str_request, obj_body, int_tcpchan) {
      var _this176 = this;
      return _asyncToGenerator(function*() {
        let lines = str_request.split('\n');
        let res = new YHTTPRequest(null);
        let lockdev;
        let baseUrl;
        if (!int_tcpchan) {
          int_tcpchan = 0;
        }
        if (str_device.substr(0, 7) == 'http://' || str_device.substr(0, 5) == 'ws://') {
          baseUrl = str_device;
          if (baseUrl.slice(-1) != '/')
            baseUrl = baseUrl + '/';
          if (lines[0].substr(0, 12) != 'GET /not.byn') {
            let serial = _this176._snByUrl[baseUrl];
            if (serial) {
              lockdev = _this176._devs[serial];
            }
          }
        } else {
          lockdev = _this176.imm_getDevice(str_device);
          if (!lockdev) {
            res.errorType = YAPI_DEVICE_NOT_FOUND;
            res.errorMsg = 'Device [' + str_device + '] not online';
            return res;
          }
          if (lines[0] == 'GET /api.json') {
            return yield lockdev.requestAPI(_this176.defaultCacheValidity);
          }
          baseUrl = lockdev.imm_getRootUrl();
        }
        let words = lines[0].split(' ');
        if (words.length < 2) {
          res.errorType = YAPI_INVALID_ARGUMENT;
          res.errorMsg = 'Invalid request, not enough words; expected a method name and a URL';
          return res;
        } else if (words.length > 2) {
          res.errorType = YAPI_INVALID_ARGUMENT;
          res.errorMsg = 'Invalid request, too many words; make sure the URL is URI-encoded';
          return res;
        }
        let hub = _this176.imm_getHub(baseUrl);
        let method = words[0];
        let devUrl = words[1];
        if (devUrl.substr(0, 1) == '/')
          devUrl = devUrl.substr(1);
        let pos = baseUrl.indexOf('//');
        pos = baseUrl.indexOf('/', pos + 3);
        devUrl = baseUrl.slice(pos) + devUrl;
        if (devUrl.slice(-2) == '&.' && !hub.imm_hasRwAccess()) {
          res.errorType = YAPI_UNAUTHORIZED;
          res.errorMsg = 'Access denied: admin credentials required';
          return res;
        }
        let delayedCode = function delayedRequest() {
          return hub.request(method, devUrl, obj_body, int_tcpchan).catch(function(e) {
            let res = new YHTTPRequest(null);
            res.errorType = YAPI_IO_ERROR;
            res.errorMsg = e.message;
            return res;
          });
        };
        if (lockdev && int_tcpchan == 0) {
          let newPromise = lockdev._pendingQueries.then(delayedCode, delayedCode);
          lockdev._pendingQueries = newPromise;
          res = yield newPromise;
        } else {
          res = yield delayedCode();
        }
        return res;
      })();
    }
    imm_funcDev_internal(str_className, str_func) {
      var res = new YFuncRequest(null);
      var resolve = this.imm_resolveFunction(str_className, str_func);
      if (resolve.errorType != YAPI_SUCCESS) {
        res.errorType = resolve.errorType;
        res.errorMsg = resolve.errorMsg;
      } else {
        str_func = resolve.result;
        let dotpos = str_func.indexOf('.');
        let devid = str_func.substr(0, dotpos);
        let funcid = str_func.substr(dotpos + 1);
        let dev = this.imm_getDevice(devid);
        if (dev == null) {
          res.errorType = YAPI_DEVICE_NOT_FOUND;
          res.errorMsg = 'Device [' + devid + '] not found';
        } else {
          res.obj_result = {
            device: dev,
            deviceid: devid,
            functionid: funcid,
            hwid: str_func
          };
        }
      }
      return res;
    }
    _funcDev(str_className, str_func) {
      var _this177 = this;
      return _asyncToGenerator(function*() {
        var resolve = _this177.imm_funcDev_internal(str_className, str_func);
        if (resolve.errorType == YAPI_SUCCESS) {
          return resolve;
        } else if (resolve.errorType == YAPI_DEVICE_NOT_FOUND && _this177._hubs.length == 0) {
          resolve.errorMsg = 'Impossible to contact any device because no hub has been registered';
          return resolve;
        }
        var updRes = yield _this177._updateDeviceList_internal(true, false);
        if (updRes.errorType != YAPI_SUCCESS) {
          resolve.errorType = updRes.errorType;
          resolve.errorMsg = updRes.errorMsg;
          return resolve;
        }
        return _this177.imm_funcDev_internal(str_className, str_func);
      })();
    }
    funcRequest(str_className, str_func, str_extra, int_msValidity) {
      var _this178 = this;
      return _asyncToGenerator(function*() {
        let funcreq = _this178.imm_funcDev_internal(str_className, str_func);
        if (funcreq.errorType != YAPI_SUCCESS) {
          funcreq = yield _this178._funcDev(str_className, str_func);
          if (funcreq.errorType != YAPI_SUCCESS) {
            return funcreq;
          }
        }
        let devreq = funcreq.obj_result;
        let loadval = null;
        let yreq;
        if (str_extra == '') {
          yreq = yield devreq.device.requestAPI(int_msValidity);
          if (yreq != null) {
            if (yreq.errorType != YAPI_SUCCESS)
              return yreq;
            try {
              let jsonData = JSON.parse(_this178.imm_bin2str(yreq.bin_result));
              loadval = jsonData[devreq.functionid];
            } catch (err) {}
          }
        } else {
          devreq.device.imm_dropCache();
        }
        if (!loadval) {
          if (str_extra == '')
            str_extra = '.json';
          let httpreq = 'GET /api/' + devreq.functionid + str_extra;
          yreq = yield _this178.devRequest(devreq.deviceid, httpreq, null, 0);
          if (yreq.errorType != YAPI_SUCCESS)
            return yreq;
          if (yreq.bin_result.length == 0 && httpreq.indexOf('?') >= 0) {
            funcreq.obj_result = yreq.bin_result;
            return funcreq;
          }
          try {
            loadval = JSON.parse(_this178.imm_bin2str(yreq.bin_result));
          } catch (err) {}
        }
        if (!loadval) {
          funcreq.errorType = YAPI_IO_ERROR;
          funcreq.errorMsg = 'Request failed, could not parse API value for function ' + devreq.hwid;
        } else {
          for (let key in devreq) {
            loadval[key] = devreq[key];
          }
          funcreq.obj_result = loadval;
        }
        return funcreq;
      })();
    }
    HTTPRequest(str_device, str_request) {
      var _this179 = this;
      return _asyncToGenerator(function*() {
        let yreq = yield _this179.devRequest(str_device, str_request, null, 0);
        if (yreq.errorType != YAPI_SUCCESS) {
          return _this179._throw(yreq.errorType, yreq.errorMsg, null);
        }
        return yreq.bin_result;
      })();
    }
    GetAPIVersion() {
      var _this180 = this;
      return _asyncToGenerator(function*() {
        return _this180.imm_GetAPIVersion();
      })();
    }
    imm_GetAPIVersion() {
      return ('1.10.23715');
    }
    InitAPI(mode, errmsg) {
      return _asyncToGenerator(function*() {
        return YAPI_SUCCESS;
      })();
    }
    FreeAPI() {
      var _this181 = this;
      return _asyncToGenerator(function*() {
        for (let i = 0; i < _this181._hubs.length; i++) {
          _this181._hubs[i].disconnect();
        }
        _this181.imm_init();
      })();
    }
    DisableExceptions() {
      var _this182 = this;
      return _asyncToGenerator(function*() {
        _this182.exceptionsDisabled = true;
      })();
    }
    EnableExceptions() {
      var _this183 = this;
      return _asyncToGenerator(function*() {
        _this183.exceptionsDisabled = false;
      })();
    }
    LogUnhandledPromiseRejections() {
      var _this184 = this;
      return _asyncToGenerator(function*() {
        if (_this184._isNodeJS) {
          process.on('unhandledRejection', function(reason, p) {
            console.log("Unhandled Rejection at: Promise ", p, " reason: ", reason);
          });
        } else {
          window.addEventListener('onunhandledrejection', function(event) {
            console.error('Unhandled rejection (promise: ', event.promise, ', reason: ', event.reason, ').');
          });
        }
      })();
    }
    imm_parseRegisteredUrl(str_url) {
      var user = '';
      var pass = '';
      var port = '4444';
      var host;
      var url = 'http://';
      if (str_url.slice(0, 7) == 'http://') {
        str_url = str_url.slice(7);
      } else if (str_url.slice(0, 5) == 'ws://') {
        url = 'ws://';
        str_url = str_url.slice(5);
      }
      var pos = str_url.indexOf('/');
      if (pos > 0) {
        str_url = str_url.slice(0, pos);
      }
      var authpos = str_url.indexOf('@');
      if (authpos >= 0) {
        var auth = str_url.slice(0, authpos);
        var passpos = auth.indexOf(':');
        if (passpos >= 0) {
          user = auth.slice(0, passpos);
          pass = auth.slice(passpos + 1);
          url += user + ':' + pass + '@';
        } else {
          user = auth;
          url += user + '@';
        }
        str_url = str_url.slice(authpos + 1);
      }
      pos = str_url.indexOf(':');
      if (pos < 0) {
        host = str_url;
      } else {
        host = str_url.slice(0, pos);
        port = str_url.slice(pos + 1);
      }
      if (host == 'callback') {
        if (url.slice(0, 3) == 'ws:') {
          url = 'ws://callback:4444/';
        } else {
          url = 'http://callback:4444/';
        }
      } else {
        url += host + ':' + port + '/';
      }
      var res = {
        'user': user,
        'pass': pass,
        'host': host,
        'port': port,
        'url': url
      };
      return res;
    }
    imm_registerHub_internal(urlInfo) {
      let newhub;
      if (urlInfo.url.slice(0, 3) == 'ws:') {
        if (this._isNodeJS) {
          newhub = new YWebSocketNodeHub(this, urlInfo);
        } else {
          newhub = new YWebSocketHub(this, urlInfo);
        }
      } else {
        if (this._isNodeJS) {
          newhub = new YHttpNodeHub(this, urlInfo);
        } else {
          newhub = new YHttpHub(this, urlInfo);
        }
      }
      return newhub;
    }
    RegisterHub(url, errmsg) {
      var _this185 = this;
      return _asyncToGenerator(function*() {
        let urlInfo = _this185.imm_parseRegisteredUrl(url);
        let newhub = _this185.imm_getHub(urlInfo.url);
        if (newhub) {
          return YAPI_SUCCESS;
        }
        newhub = _this185.imm_registerHub_internal(urlInfo);
        let retcode = yield newhub.testHub(errmsg);
        if (retcode != YAPI_SUCCESS) {
          return _this185._throw(retcode, errmsg.msg, retcode);
        }
        yield _this185._addHub(newhub);
        let yreq = yield _this185._updateDeviceList_internal(true, false);
        if (yreq.errorType != YAPI_SUCCESS) {
          if (errmsg != undefined) {
            errmsg.msg = yreq.errorMsg;
            _this185._serverResponse.write('\n!YoctoAPI:' + errmsg.msg + '\n');
          }
          return _this185._throw(yreq.errorType, yreq.errorMsg, yreq.errorType);
        }
        return YAPI_SUCCESS;
      })();
    }
    PreregisterHub(url, errmsg) {
      var _this186 = this;
      return _asyncToGenerator(function*() {
        let urlInfo = _this186.imm_parseRegisteredUrl(url);
        let newhub = _this186.imm_getHub(urlInfo.url);
        if (newhub) {
          return YAPI_SUCCESS;
        }
        newhub = _this186.imm_registerHub_internal(urlInfo);
        _this186._addHub(newhub);
        newhub.testHub(errmsg);
        return YAPI_SUCCESS;
      })();
    }
    RegisterHubHttpCallback(incomingMessage, serverResponse, errmsg) {
      var _this187 = this;
      return _asyncToGenerator(function*() {
        let urlInfo = _this187.imm_parseRegisteredUrl('http://callback:4444');
        let newhub = _this187.imm_getHub(urlInfo.url);
        if (newhub) {
          return YAPI_SUCCESS;
        }
        newhub = new YHttpCallbackHub(_this187, urlInfo, incomingMessage, serverResponse);
        yield newhub.httpCallbackPromise;
        let retcode = yield newhub.testHub(errmsg);
        if (retcode != YAPI_SUCCESS) {
          _this187._serverResponse.write('\n!YoctoAPI:' + errmsg.msg + '\n');
          return _this187._throw(retcode, errmsg.msg, retcode);
        }
        yield _this187._addHub(newhub);
        let yreq = yield _this187._updateDeviceList_internal(true, false);
        if (yreq.errorType != YAPI_SUCCESS) {
          if (errmsg != undefined) {
            errmsg.msg = yreq.errorMsg;
            _this187._serverResponse.write('\n!YoctoAPI:' + errmsg.msg + '\n');
          }
          return _this187._throw(yreq.errorType, yreq.errorMsg, yreq.errorType);
        }
        return YAPI_SUCCESS;
      })();
    }
    RegisterHubWebSocketCallback(ws, errmsg) {
      var _this188 = this;
      return _asyncToGenerator(function*() {
        let urlInfo = _this188.imm_parseRegisteredUrl('http://callback:4444');
        let newhub = _this188.imm_getHub(urlInfo.url);
        if (newhub) {
          return YAPI_SUCCESS;
        }
        newhub = new YWebSocketCallbackHub(_this188, urlInfo, ws);
        let retcode = yield newhub.testHub(errmsg);
        if (retcode != YAPI_SUCCESS) {
          return _this188._throw(retcode, errmsg.msg, retcode);
        }
        yield _this188._addHub(newhub);
        let yreq = yield _this188._updateDeviceList_internal(true, false);
        if (yreq.errorType != YAPI_SUCCESS) {
          if (errmsg != undefined) {
            errmsg.msg = yreq.errorMsg;
          }
          return _this188._throw(yreq.errorType, yreq.errorMsg, yreq.errorType);
        }
        return YAPI_SUCCESS;
      })();
    }
    UnregisterHub(url) {
      var _this189 = this;
      return _asyncToGenerator(function*() {
        var urlInfo = _this189.imm_parseRegisteredUrl(url);
        var i,
            j;
        for (i = 0; i < _this189._hubs.length; i++) {
          if (_this189._hubs[i].urlInfo.url == urlInfo.url) {
            _this189._hubs[i].disconnect();
            for (j = 0; j < _this189._hubs[i].serialByYdx.length; j++) {
              var serial = _this189._hubs[i].serialByYdx[j];
              _this189.imm_forgetDevice(_this189._devs[serial]);
            }
            var before = _this189._hubs.slice(0, i);
            if (i + 1 < _this189._hubs.length) {
              var after = _this189._hubs.slice(i + 1);
              _this189._hubs = before.concat(after);
            }
            _this189._hubs = before;
            return;
          }
        }
      })();
    }
    UpdateDeviceList(errmsg) {
      var _this190 = this;
      return _asyncToGenerator(function*() {
        var yreq = yield _this190._updateDeviceList_internal(false, true);
        if (yreq.errorType != YAPI_SUCCESS) {
          if (errmsg != undefined)
            errmsg.msg = yreq.errorMsg;
          return _this190._throw(yreq.errorType, yreq.errorMsg, yreq.errorType);
        }
        return YAPI_SUCCESS;
      })();
    }
    HandleEvents(errmsg) {
      var _this191 = this;
      return _asyncToGenerator(function*() {
        var nEvents = _this191._data_events.length;
        for (var i = 0; i < nEvents; i++) {
          var evt = _this191._data_events[i];
          if (typeof evt[1] == 'string') {
            yield evt[0]._invokeValueCallback(evt[1]);
          } else {
            var dev = _this191.imm_getDevice(evt[0]._serial);
            if (dev) {
              var report = yield evt[0]._decodeTimedReport(evt[1], evt[2]);
              yield evt[0]._invokeTimedReportCallback(report);
            }
          }
        }
        _this191._data_events = _this191._data_events.slice(nEvents);
        return YAPI_SUCCESS;
      })();
    }
    Sleep(ms_duration, errmsg) {
      var _this192 = this;
      return _asyncToGenerator(function*() {
        var end = _this192.GetTickCount() + ms_duration;
        yield _this192.HandleEvents(errmsg);
        while (_this192.GetTickCount() < end) {
          yield _this192._microSleep_internal();
          yield _this192.HandleEvents(errmsg);
        }
        return YAPI_SUCCESS;
      })();
    }
    _microSleep_internal() {
      return new Promise(function(resolve, reject) {
        setTimeout(resolve, 3);
      });
    }
    SetTimeout(callback, ms_timeout, args) {
      let errmsg = new YErrorMsg();
      this._setTimeout_internal(callback, this.GetTickCount() + ms_timeout, args, errmsg);
      return YAPI_SUCCESS;
    }
    _setTimeout_internal(callback, endtime, args, errmsg) {
      var _this193 = this;
      let delay = endtime - YAPI.GetTickCount();
      if (delay < 0) {
        callback.apply(null, args);
      } else if (delay < 100) {
        this.Sleep(delay, errmsg).then(function() {
          _this193._setTimeout_internal(callback, endtime, args);
        });
      } else {
        this.UpdateDeviceList(errmsg).then(function() {
          _this193.Sleep(90, errmsg).then(function() {
            _this193._setTimeout_internal(callback, endtime, args);
          });
        });
      }
    }
    GetTickCount() {
      return +new Date();
    }
    CheckLogicalName(name) {
      return _asyncToGenerator(function*() {
        if (name == '')
          return true;
        if (!name)
          return false;
        if (name.length > 19)
          return false;
        return (/^[A-Za-z0-9_\-]*$/.test(name));
      })();
    }
    RegisterDeviceArrivalCallback(arrivalCallback) {
      var _this194 = this;
      return _asyncToGenerator(function*() {
        _this194._arrivalCallback = arrivalCallback;
      })();
    }
    RegisterDeviceChangeCallback(changeCallback) {
      var _this195 = this;
      return _asyncToGenerator(function*() {
        _this195._namechgCallback = changeCallback;
      })();
    }
    RegisterDeviceRemovalCallback(removalCallback) {
      var _this196 = this;
      return _asyncToGenerator(function*() {
        _this196._removalCallback = removalCallback;
      })();
    }
    RegisterCalibrationHandler(calibrationType, calibrationHandler) {
      var _this197 = this;
      return _asyncToGenerator(function*() {
        _this197._calibHandlers[calibrationType.toString()] = calibrationHandler;
      })();
    }
    LinearCalibrationHandler(float_rawValue, int_calibType, arr_calibParams, arr_calibRawValues, arr_calibRefValues) {
      var npt;
      var x = arr_calibRawValues[0];
      var adj = arr_calibRefValues[0] - x;
      var i = 0;
      if (int_calibType < YOCTO_CALIB_TYPE_OFS) {
        npt = Math.min(int_calibType % 10, arr_calibRawValues.length, arr_calibRefValues.length);
      } else {
        npt = arr_calibRefValues.length;
      }
      while (float_rawValue > arr_calibRawValues[i] && ++i < npt) {
        var x2 = x;
        var adj2 = adj;
        x = arr_calibRawValues[i];
        adj = arr_calibRefValues[i] - x;
        if (float_rawValue < x && x > x2) {
          adj = adj2 + (adj - adj2) * (float_rawValue - x2) / (x - x2);
        }
      }
      return float_rawValue + adj;
    }
    imm_yMD5(text) {
      let ctx = new Y_MD5Ctx();
      ctx.addData(this.imm_str2bin(text));
      return ctx.calculate();
    }
    imm_initshaw(str_s, int_ofs, int_pad, int_xinit, _shaw) {
      var ii,
          j = -1,
          k = 0;
      var n = str_s.length;
      for (ii = 0; ii < 64; ii++) {
        let i = int_ofs + ii;
        var c = 0;
        if (i < n) {
          c = str_s.charCodeAt(i);
        } else if (int_pad != 0) {
          if (int_pad & 0x80) {
            if (i == n)
              c = int_pad;
          } else {
            if (i == n + 3)
              c = int_pad;
            else if (i == n + 4)
              c = 0x80;
          }
        }
        if (k == 0) {
          j++;
          _shaw[j] = 0;
          k = 32;
        }
        k -= 8;
        _shaw[j] |= c << k;
      }
      if (int_pad != 0) {
        if (int_pad == 0x80) {
          if (n <= int_ofs + 55) {
            _shaw[15] = 8 * n;
          }
        } else {
          _shaw[15] = 8 * (64 + n + 4);
        }
      }
      if (int_xinit != 0) {
        var xdw = int_xinit << 16 | int_xinit;
        for (j = 0; j < 16; j++) {
          _shaw[j] ^= xdw;
        }
      }
    }
    imm_itershaw(s, _shaw) {
      var a,
          b,
          c,
          d,
          e,
          t,
          k;
      a = s[0];
      b = s[1];
      c = s[2];
      d = s[3];
      e = s[4];
      for (k = 16; k < 80; k++) {
        t = _shaw[k - 3] ^ _shaw[k - 8] ^ _shaw[k - 14] ^ _shaw[k - 16];
        _shaw[k] = t << 1 | t >>> 31;
      }
      for (k = 0; k < 20; k++) {
        t = (a << 5 | a >>> 27) + e + _shaw[k] + 0x5A827999 + (b & c | ~b & d);
        e = d;
        d = c;
        c = b << 30 | b >>> 2;
        b = a;
        a = t & 0xffffffff;
      }
      for (k = 20; k < 40; k++) {
        t = (a << 5 | a >>> 27) + e + _shaw[k] + 0x6ED9EBA1 + (b ^ c ^ d);
        e = d;
        d = c;
        c = b << 30 | b >>> 2;
        b = a;
        a = t & 0xffffffff;
      }
      for (k = 40; k < 60; k++) {
        t = (a << 5 | a >>> 27) + e + _shaw[k] + 0x8F1BBCDC + (b & c | b & d | c & d);
        e = d;
        d = c;
        c = b << 30 | b >>> 2;
        b = a;
        a = t & 0xffffffff;
      }
      for (k = 60; k < 80; k++) {
        t = (a << 5 | a >>> 27) + e + _shaw[k] + 0xCA62C1D6 + (b ^ c ^ d);
        e = d;
        d = c;
        c = b << 30 | b >>> 2;
        b = a;
        a = t & 0xffffffff;
      }
      _shaw[0] = s[0] + a & 0xffffffff;
      _shaw[1] = s[1] + b & 0xffffffff;
      _shaw[2] = s[2] + c & 0xffffffff;
      _shaw[3] = s[3] + d & 0xffffffff;
      _shaw[4] = s[4] + e & 0xffffffff;
    }
    imm_ySHA1(text) {
      let shau = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0];
      let i,
          ofs = 0;
      let n = text.length;
      let _shaw = new Uint32Array(80);
      do {
        this.imm_initshaw(text, ofs, 0x80, 0, _shaw);
        this.imm_itershaw(shau, _shaw);
        for (i = 0; i < 5; i++) {
          shau[i] = _shaw[i];
        }
        ofs += 64;
      } while (n > ofs - 9);
      let res = new Uint8Array(20);
      for (i = 0; i < 20; i++) {
        res[i] = shau[i >>> 2] >>> 24 - 8 * (i & 3) & 0xff;
      }
      return res;
    }
    ComputePSK(ssid, pass) {
      var _this198 = this;
      return _asyncToGenerator(function*() {
        var sha1_init = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0];
        var inner = [],
            outer = [],
            shau = [],
            res = [];
        var iter,
            pos,
            k,
            _shaw;
        _shaw = new Uint32Array(80);
        _this198.imm_initshaw(pass, 0, 0, 0x3636, _shaw);
        _this198.imm_itershaw(sha1_init, _shaw);
        for (k = 0; k < 5; k++)
          inner[k] = _shaw[k];
        _shaw = new Uint32Array(80);
        _this198.imm_initshaw(pass, 0, 0, 0x5c5c, _shaw);
        _this198.imm_itershaw(sha1_init, _shaw);
        for (k = 0; k < 5; k++)
          outer[k] = _shaw[k];
        pos = 0;
        for (k = 0; k < 5; k++)
          shau[k] = 0;
        _shaw = new Uint32Array(80);
        _this198.imm_initshaw(ssid, 0, 1, 0, _shaw);
        for (iter = 0; iter < 8192; ) {
          _this198.imm_itershaw(inner, _shaw);
          _shaw[5] = 0x80000000;
          for (k = 6; k < 15; k++) {
            _shaw[k] = 0;
          }
          _shaw[15] = 8 * (64 + 20);
          _this198.imm_itershaw(outer, _shaw);
          shau[0] ^= _shaw[0];
          shau[1] ^= _shaw[1];
          shau[2] ^= _shaw[2];
          shau[3] ^= _shaw[3];
          shau[4] ^= _shaw[4];
          iter++;
          if ((iter & 4095) == 0) {
            for (k = 0; k < 5 && pos < 32; k++) {
              res[pos++] = shau[k] >>> 24 & 0xff;
              res[pos++] = shau[k] >>> 16 & 0xff;
              res[pos++] = shau[k] >>> 8 & 0xff;
              res[pos++] = shau[k] & 0xff;
            }
            if (iter == 4096) {
              for (k = 0; k < 5; k++)
                shau[k] = 0;
              _shaw = new Uint32Array(80);
              _this198.imm_initshaw(ssid, 0, 2, 0, _shaw);
            }
          }
        }
        var hex = '';
        for (k = 0; k < 32; k++) {
          hex += ('0' + Number(res[k]).toString(16)).slice(-2);
        }
        return hex;
      })();
    }
  }
  exports.YAPIContext = YAPIContext;
  var YAPI = exports.YAPI = new YAPIContext();
  var yLinearCalibrationHandler = exports.yLinearCalibrationHandler = YAPI.LinearCalibrationHandler;
  function yGetAPIVersion() {
    return YAPI.GetAPIVersion();
  }
  function yInitAPI(mode, errmsg) {
    return YAPI.InitAPI(mode, errmsg);
  }
  function yFreeAPI() {
    YAPI.FreeAPI();
  }
  function yDisableExceptions() {
    YAPI.DisableExceptions();
  }
  function yEnableExceptions() {
    YAPI.EnableExceptions();
  }
  function yRegisterHub(url, errmsg) {
    return YAPI.RegisterHub(url, errmsg);
  }
  function yPreregisterHub(url, errmsg) {
    return YAPI.PreregisterHub(url, errmsg);
  }
  function yUnregisterHub(url) {
    YAPI.UnregisterHub(url);
  }
  function yUpdateDeviceList(errmsg) {
    return YAPI.UpdateDeviceList(errmsg);
  }
  function yHandleEvents(errmsg) {
    return YAPI.HandleEvents(errmsg);
  }
  function ySleep(ms_duration, errmsg) {
    return YAPI.Sleep(ms_duration, errmsg);
  }
  function ySetTimeout(callback, ms_timeout, args) {
    var allArgs = [callback, ms_timeout];
    if (args)
      allArgs.push(args);
    return YAPI.SetTimeout.apply(YAPI, allArgs);
  }
  function yGetTickCount() {
    return YAPI.GetTickCount();
  }
  function yCheckLogicalName(name) {
    return YAPI.CheckLogicalName(name);
  }
  function yRegisterDeviceArrivalCallback(arrivalCallback) {
    return YAPI.RegisterDeviceArrivalCallback(arrivalCallback);
  }
  function yRegisterDeviceChangeCallback(changeCallback) {
    return YAPI.RegisterDeviceChangeCallback(changeCallback);
  }
  function yRegisterDeviceRemovalCallback(removalCallback) {
    return YAPI.RegisterDeviceRemovalCallback(removalCallback);
  }
  function yRegisterCalibrationHandler(calibrationType, calibrationHandler) {
    return YAPI.RegisterCalibrationHandler(calibrationType, calibrationHandler);
  }
  return module.exports;
});

$__System.registerDynamic("38", ["3"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.YWirelessProxy = exports.YWireless = exports.Y_WLANCONFIG_INVALID = exports.Y_MESSAGE_INVALID = exports.Y_CHANNEL_INVALID = exports.Y_SSID_INVALID = exports.Y_LINKQUALITY_INVALID = exports.Y_SECURITY_INVALID = exports.Y_SECURITY_WPA2 = exports.Y_SECURITY_WPA = exports.Y_SECURITY_WEP = exports.Y_SECURITY_OPEN = exports.Y_SECURITY_UNKNOWN = undefined;
  exports.yFindWireless = yFindWireless;
  exports.yFirstWireless = yFirstWireless;
  var _yocto_api = $__require('3');
  function _asyncToGenerator(fn) {
    return function() {
      var gen = fn.apply(this, arguments);
      return new Promise(function(resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function(value) {
              return step("next", value);
            }, function(err) {
              return step("throw", err);
            });
          }
        }
        return step("next");
      });
    };
  }
  var Y_SECURITY_UNKNOWN = exports.Y_SECURITY_UNKNOWN = 0;
  var Y_SECURITY_OPEN = exports.Y_SECURITY_OPEN = 1;
  var Y_SECURITY_WEP = exports.Y_SECURITY_WEP = 2;
  var Y_SECURITY_WPA = exports.Y_SECURITY_WPA = 3;
  var Y_SECURITY_WPA2 = exports.Y_SECURITY_WPA2 = 4;
  var Y_SECURITY_INVALID = exports.Y_SECURITY_INVALID = -1;
  var Y_LINKQUALITY_INVALID = exports.Y_LINKQUALITY_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_SSID_INVALID = exports.Y_SSID_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_CHANNEL_INVALID = exports.Y_CHANNEL_INVALID = _yocto_api.YAPI.INVALID_UINT;
  var Y_MESSAGE_INVALID = exports.Y_MESSAGE_INVALID = _yocto_api.YAPI.INVALID_STRING;
  var Y_WLANCONFIG_INVALID = exports.Y_WLANCONFIG_INVALID = _yocto_api.YAPI.INVALID_STRING;
  class YWlanRecord {
    constructor(str_json) {
      this._ssid = '';
      this._channel = 0;
      this._sec = '';
      this._rssi = 0;
      var loadval = JSON.parse(str_json);
      this._ssid = loadval.ssid;
      this._channel = loadval.channel;
      this._sec = loadval.sec;
      this._rssi = loadval.rssi;
    }
    get_ssid() {
      return this._ssid;
    }
    get_channel() {
      return this._channel;
    }
    get_security() {
      return this._sec;
    }
    get_linkQuality() {
      return this._rssi;
    }
  }
  class YWireless extends _yocto_api.YFunction {
    constructor(obj_yapi, str_func) {
      super(obj_yapi, str_func);
      this._className = 'Wireless';
      this._linkQuality = Y_LINKQUALITY_INVALID;
      this._ssid = Y_SSID_INVALID;
      this._channel = Y_CHANNEL_INVALID;
      this._security = Y_SECURITY_INVALID;
      this._message = Y_MESSAGE_INVALID;
      this._wlanConfig = Y_WLANCONFIG_INVALID;
      this.imm_setConst({
        LINKQUALITY_INVALID: _yocto_api.YAPI.INVALID_UINT,
        SSID_INVALID: _yocto_api.YAPI.INVALID_STRING,
        CHANNEL_INVALID: _yocto_api.YAPI.INVALID_UINT,
        SECURITY_UNKNOWN: 0,
        SECURITY_OPEN: 1,
        SECURITY_WEP: 2,
        SECURITY_WPA: 3,
        SECURITY_WPA2: 4,
        SECURITY_INVALID: -1,
        MESSAGE_INVALID: _yocto_api.YAPI.INVALID_STRING,
        WLANCONFIG_INVALID: _yocto_api.YAPI.INVALID_STRING
      });
    }
    get_syncProxy() {
      var _this = this;
      return _asyncToGenerator(function*() {
        if (_this._cacheExpiration <= _this._yapi.GetTickCount()) {
          try {
            yield _this.load(_this._yapi.defaultCacheValidity);
          } catch (e) {}
        }
        var res = new YWirelessProxy(_this);
        yield res._asyncInit();
        return res;
      })();
    }
    imm_parseAttr(name, val) {
      switch (name) {
        case 'linkQuality':
          this._linkQuality = parseInt(val);
          return 1;
        case 'ssid':
          this._ssid = val;
          return 1;
        case 'channel':
          this._channel = parseInt(val);
          return 1;
        case 'security':
          this._security = parseInt(val);
          return 1;
        case 'message':
          this._message = val;
          return 1;
        case 'wlanConfig':
          this._wlanConfig = val;
          return 1;
      }
      return super.imm_parseAttr(name, val);
    }
    get_linkQuality() {
      var _this2 = this;
      return _asyncToGenerator(function*() {
        if (_this2._cacheExpiration <= _this2._yapi.GetTickCount()) {
          if ((yield _this2.load(_this2._yapi.defaultCacheValidity)) != _this2._yapi.SUCCESS) {
            return Y_LINKQUALITY_INVALID;
          }
        }
        return _this2._linkQuality;
      })();
    }
    get_ssid() {
      var _this3 = this;
      return _asyncToGenerator(function*() {
        if (_this3._cacheExpiration <= _this3._yapi.GetTickCount()) {
          if ((yield _this3.load(_this3._yapi.defaultCacheValidity)) != _this3._yapi.SUCCESS) {
            return Y_SSID_INVALID;
          }
        }
        return _this3._ssid;
      })();
    }
    get_channel() {
      var _this4 = this;
      return _asyncToGenerator(function*() {
        if (_this4._cacheExpiration <= _this4._yapi.GetTickCount()) {
          if ((yield _this4.load(_this4._yapi.defaultCacheValidity)) != _this4._yapi.SUCCESS) {
            return Y_CHANNEL_INVALID;
          }
        }
        return _this4._channel;
      })();
    }
    get_security() {
      var _this5 = this;
      return _asyncToGenerator(function*() {
        if (_this5._cacheExpiration <= _this5._yapi.GetTickCount()) {
          if ((yield _this5.load(_this5._yapi.defaultCacheValidity)) != _this5._yapi.SUCCESS) {
            return Y_SECURITY_INVALID;
          }
        }
        return _this5._security;
      })();
    }
    get_message() {
      var _this6 = this;
      return _asyncToGenerator(function*() {
        if (_this6._cacheExpiration <= _this6._yapi.GetTickCount()) {
          if ((yield _this6.load(_this6._yapi.defaultCacheValidity)) != _this6._yapi.SUCCESS) {
            return Y_MESSAGE_INVALID;
          }
        }
        return _this6._message;
      })();
    }
    get_wlanConfig() {
      var _this7 = this;
      return _asyncToGenerator(function*() {
        if (_this7._cacheExpiration <= _this7._yapi.GetTickCount()) {
          if ((yield _this7.load(_this7._yapi.defaultCacheValidity)) != _this7._yapi.SUCCESS) {
            return Y_WLANCONFIG_INVALID;
          }
        }
        return _this7._wlanConfig;
      })();
    }
    set_wlanConfig(newval) {
      var _this8 = this;
      return _asyncToGenerator(function*() {
        let rest_val;
        rest_val = newval;
        return yield _this8._setAttr('wlanConfig', rest_val);
      })();
    }
    static FindWireless(func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCache('Wireless', func);
      if (obj == null) {
        obj = new YWireless(_yocto_api.YAPI, func);
        _yocto_api.YFunction._AddToCache('Wireless', func, obj);
      }
      return obj;
    }
    static FindWirelessInContext(yctx, func) {
      let obj;
      obj = _yocto_api.YFunction._FindFromCacheInContext(yctx, 'Wireless', func);
      if (obj == null) {
        obj = new YWireless(yctx, func);
        _yocto_api.YFunction._AddToCache('Wireless', func, obj);
      }
      return obj;
    }
    joinNetwork(ssid, securityKey) {
      var _this9 = this;
      return _asyncToGenerator(function*() {
        return yield _this9.set_wlanConfig('INFRA:' + ssid + '\\' + securityKey);
      })();
    }
    adhocNetwork(ssid, securityKey) {
      var _this10 = this;
      return _asyncToGenerator(function*() {
        return yield _this10.set_wlanConfig('ADHOC:' + ssid + '\\' + securityKey);
      })();
    }
    softAPNetwork(ssid, securityKey) {
      var _this11 = this;
      return _asyncToGenerator(function*() {
        return yield _this11.set_wlanConfig('SOFTAP:' + ssid + '\\' + securityKey);
      })();
    }
    get_detectedWlans() {
      var _this12 = this;
      return _asyncToGenerator(function*() {
        let json;
        let wlanlist = [];
        let res = [];
        json = yield _this12._download('wlan.json?by=name');
        wlanlist = _this12.imm_json_get_array(json);
        res.length = 0;
        for (let ii in wlanlist) {
          res.push(new YWlanRecord(wlanlist[ii]));
        }
        return res;
      })();
    }
    nextWireless() {
      let resolve = this._yapi.imm_resolveFunction(this._className, this._func);
      if (resolve.errorType != _yocto_api.YAPI_SUCCESS)
        return null;
      let next_hwid = this._yapi.imm_getNextHardwareId(this._className, resolve.result);
      if (next_hwid == null)
        return null;
      return YWireless.FindWirelessInContext(this._yapi, next_hwid);
    }
    static FirstWireless() {
      let next_hwid = _yocto_api.YAPI.imm_getFirstHardwareId('Wireless');
      if (next_hwid == null)
        return null;
      return YWireless.FindWireless(next_hwid);
    }
    static FirstWirelessInContext(yctx) {
      let next_hwid = yctx.imm_getFirstHardwareId('Wireless');
      if (next_hwid == null)
        return null;
      return YWireless.FindWirelessInContext(yctx, next_hwid);
    }
  }
  exports.YWireless = YWireless;
  class YWirelessProxy extends _yocto_api.YFunctionProxy {
    constructor(obj_func) {
      super(obj_func);
    }
    get_linkQuality() {
      return this.liveFunc._linkQuality;
    }
    get_ssid() {
      return this.liveFunc._ssid;
    }
    get_channel() {
      return this.liveFunc._channel;
    }
    get_security() {
      return this.liveFunc._security;
    }
    get_message() {
      return this.liveFunc._message;
    }
    get_wlanConfig() {
      return this.liveFunc._wlanConfig;
    }
    set_wlanConfig(newval) {
      this.liveFunc.set_wlanConfig(newval);
      return this._yapi.SUCCESS;
    }
    joinNetwork(ssid, securityKey) {
      this.liveFunc.joinNetwork(ssid, securityKey);
      return _yocto_api.YAPI_SUCCESS;
    }
    adhocNetwork(ssid, securityKey) {
      this.liveFunc.adhocNetwork(ssid, securityKey);
      return _yocto_api.YAPI_SUCCESS;
    }
    softAPNetwork(ssid, securityKey) {
      this.liveFunc.softAPNetwork(ssid, securityKey);
      return _yocto_api.YAPI_SUCCESS;
    }
  }
  exports.YWirelessProxy = YWirelessProxy;
  function yFindWireless(func) {
    return YWireless.FindWireless(func);
  }
  function yFirstWireless() {
    return YWireless.FirstWireless();
  }
  return module.exports;
});

$__System.registerDynamic("39", ["3", "2", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('3');
  function addExports(mod) {
    for (var key in mod)
      module.exports[key] = mod[key];
  }
  addExports($__require('2'));
  addExports($__require('4'));
  addExports($__require('5'));
  addExports($__require('6'));
  addExports($__require('7'));
  addExports($__require('8'));
  addExports($__require('9'));
  addExports($__require('a'));
  addExports($__require('b'));
  addExports($__require('c'));
  addExports($__require('d'));
  addExports($__require('e'));
  addExports($__require('f'));
  addExports($__require('10'));
  addExports($__require('11'));
  addExports($__require('12'));
  addExports($__require('13'));
  addExports($__require('14'));
  addExports($__require('15'));
  addExports($__require('16'));
  addExports($__require('17'));
  addExports($__require('18'));
  addExports($__require('19'));
  addExports($__require('1a'));
  addExports($__require('1b'));
  addExports($__require('1c'));
  addExports($__require('1d'));
  addExports($__require('1e'));
  addExports($__require('1f'));
  addExports($__require('20'));
  addExports($__require('21'));
  addExports($__require('22'));
  addExports($__require('23'));
  addExports($__require('24'));
  addExports($__require('25'));
  addExports($__require('26'));
  addExports($__require('27'));
  addExports($__require('28'));
  addExports($__require('29'));
  addExports($__require('2a'));
  addExports($__require('2b'));
  addExports($__require('2c'));
  addExports($__require('2d'));
  addExports($__require('2e'));
  addExports($__require('2f'));
  addExports($__require('30'));
  addExports($__require('31'));
  addExports($__require('32'));
  addExports($__require('33'));
  addExports($__require('34'));
  addExports($__require('35'));
  addExports($__require('36'));
  addExports($__require('37'));
  addExports($__require('38'));
  return module.exports;
});

$__System.register("1", ["39"], function($__export) {
  "use strict";
  var YAPI,
      YRelay,
      YAPIContext,
      YErrorMsg,
      _regeneratorRuntime,
      _asyncToGenerator,
      server,
      url,
      WebSocketServer,
      express,
      Relays,
      WebSocketCallbackHandler,
      wss,
      app;
  return {
    setters: [function($__m) {
      YAPI = $__m.YAPI;
      YRelay = $__m.YRelay;
      YAPIContext = $__m.YAPIContext;
      YErrorMsg = $__m.YErrorMsg;
    }],
    execute: function() {
      _regeneratorRuntime = (function(module) {
        !(function(global) {
          "use strict";
          var hasOwn = Object.prototype.hasOwnProperty;
          var undefined;
          var $Symbol = typeof Symbol === "function" ? Symbol : {};
          var iteratorSymbol = $Symbol.iterator || "@@iterator";
          var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
          var inModule = typeof module === "object";
          var runtime = global.regeneratorRuntime;
          if (runtime) {
            if (inModule) {
              module.exports = runtime;
            }
            return;
          }
          runtime = global.regeneratorRuntime = inModule ? module.exports : {};
          function wrap(innerFn, outerFn, self, tryLocsList) {
            var generator = Object.create((outerFn || Generator).prototype);
            var context = new Context(tryLocsList || []);
            generator._invoke = makeInvokeMethod(innerFn, self, context);
            return generator;
          }
          runtime.wrap = wrap;
          function tryCatch(fn, obj, arg) {
            try {
              return {
                type: "normal",
                arg: fn.call(obj, arg)
              };
            } catch (err) {
              return {
                type: "throw",
                arg: err
              };
            }
          }
          var GenStateSuspendedStart = "suspendedStart";
          var GenStateSuspendedYield = "suspendedYield";
          var GenStateExecuting = "executing";
          var GenStateCompleted = "completed";
          var ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
          GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
          GeneratorFunctionPrototype.constructor = GeneratorFunction;
          GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function(method) {
              prototype[method] = function(arg) {
                return this._invoke(method, arg);
              };
            });
          }
          runtime.isGeneratorFunction = function(genFun) {
            var ctor = typeof genFun === "function" && genFun.constructor;
            return ctor ? ctor === GeneratorFunction || (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
          };
          runtime.mark = function(genFun) {
            if (Object.setPrototypeOf) {
              Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
            } else {
              genFun.__proto__ = GeneratorFunctionPrototype;
              if (!(toStringTagSymbol in genFun)) {
                genFun[toStringTagSymbol] = "GeneratorFunction";
              }
            }
            genFun.prototype = Object.create(Gp);
            return genFun;
          };
          runtime.awrap = function(arg) {
            return new AwaitArgument(arg);
          };
          function AwaitArgument(arg) {
            this.arg = arg;
          }
          function AsyncIterator(generator) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if (record.type === "throw") {
                reject(record.arg);
              } else {
                var result = record.arg;
                var value = result.value;
                if (value instanceof AwaitArgument) {
                  return Promise.resolve(value.arg).then(function(value) {
                    invoke("next", value, resolve, reject);
                  }, function(err) {
                    invoke("throw", err, resolve, reject);
                  });
                }
                return Promise.resolve(value).then(function(unwrapped) {
                  result.value = unwrapped;
                  resolve(result);
                }, reject);
              }
            }
            if (typeof process === "object" && process.domain) {
              invoke = process.domain.bind(invoke);
            }
            var previousPromise;
            function enqueue(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new Promise(function(resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }
              return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
            this._invoke = enqueue;
          }
          defineIteratorMethods(AsyncIterator.prototype);
          runtime.async = function(innerFn, outerFn, self, tryLocsList) {
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
            return runtime.isGeneratorFunction(outerFn) ? iter : iter.next().then(function(result) {
              return result.done ? result.value : iter.next();
            });
          };
          function makeInvokeMethod(innerFn, self, context) {
            var state = GenStateSuspendedStart;
            return function invoke(method, arg) {
              if (state === GenStateExecuting) {
                throw new Error("Generator is already running");
              }
              if (state === GenStateCompleted) {
                if (method === "throw") {
                  throw arg;
                }
                return doneResult();
              }
              while (true) {
                var delegate = context.delegate;
                if (delegate) {
                  if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
                    context.delegate = null;
                    var returnMethod = delegate.iterator["return"];
                    if (returnMethod) {
                      var record = tryCatch(returnMethod, delegate.iterator, arg);
                      if (record.type === "throw") {
                        method = "throw";
                        arg = record.arg;
                        continue;
                      }
                    }
                    if (method === "return") {
                      continue;
                    }
                  }
                  var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);
                  if (record.type === "throw") {
                    context.delegate = null;
                    method = "throw";
                    arg = record.arg;
                    continue;
                  }
                  method = "next";
                  arg = undefined;
                  var info = record.arg;
                  if (info.done) {
                    context[delegate.resultName] = info.value;
                    context.next = delegate.nextLoc;
                  } else {
                    state = GenStateSuspendedYield;
                    return info;
                  }
                  context.delegate = null;
                }
                if (method === "next") {
                  if (state === GenStateSuspendedYield) {
                    context.sent = arg;
                  } else {
                    context.sent = undefined;
                  }
                } else if (method === "throw") {
                  if (state === GenStateSuspendedStart) {
                    state = GenStateCompleted;
                    throw arg;
                  }
                  if (context.dispatchException(arg)) {
                    method = "next";
                    arg = undefined;
                  }
                } else if (method === "return") {
                  context.abrupt("return", arg);
                }
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                  state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                  var info = {
                    value: record.arg,
                    done: context.done
                  };
                  if (record.arg === ContinueSentinel) {
                    if (context.delegate && method === "next") {
                      arg = undefined;
                    }
                  } else {
                    return info;
                  }
                } else if (record.type === "throw") {
                  state = GenStateCompleted;
                  method = "throw";
                  arg = record.arg;
                }
              }
            };
          }
          defineIteratorMethods(Gp);
          Gp[iteratorSymbol] = function() {
            return this;
          };
          Gp[toStringTagSymbol] = "Generator";
          Gp.toString = function() {
            return "[object Generator]";
          };
          function pushTryEntry(locs) {
            var entry = {tryLoc: locs[0]};
            if (1 in locs) {
              entry.catchLoc = locs[1];
            }
            if (2 in locs) {
              entry.finallyLoc = locs[2];
              entry.afterLoc = locs[3];
            }
            this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal";
            delete record.arg;
            entry.completion = record;
          }
          function Context(tryLocsList) {
            this.tryEntries = [{tryLoc: "root"}];
            tryLocsList.forEach(pushTryEntry, this);
            this.reset(true);
          }
          runtime.keys = function(object) {
            var keys = [];
            for (var key in object) {
              keys.push(key);
            }
            keys.reverse();
            return function next() {
              while (keys.length) {
                var key = keys.pop();
                if (key in object) {
                  next.value = key;
                  next.done = false;
                  return next;
                }
              }
              next.done = true;
              return next;
            };
          };
          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) {
                return iteratorMethod.call(iterable);
              }
              if (typeof iterable.next === "function") {
                return iterable;
              }
              if (!isNaN(iterable.length)) {
                var i = -1,
                    next = function next() {
                      while (++i < iterable.length) {
                        if (hasOwn.call(iterable, i)) {
                          next.value = iterable[i];
                          next.done = false;
                          return next;
                        }
                      }
                      next.value = undefined;
                      next.done = true;
                      return next;
                    };
                return next.next = next;
              }
            }
            return {next: doneResult};
          }
          runtime.values = values;
          function doneResult() {
            return {
              value: undefined,
              done: true
            };
          }
          Context.prototype = {
            constructor: Context,
            reset: function reset(skipTempReset) {
              this.prev = 0;
              this.next = 0;
              this.sent = undefined;
              this.done = false;
              this.delegate = null;
              this.tryEntries.forEach(resetTryEntry);
              if (!skipTempReset) {
                for (var name in this) {
                  if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                    this[name] = undefined;
                  }
                }
              }
            },
            stop: function stop() {
              this.done = true;
              var rootEntry = this.tryEntries[0];
              var rootRecord = rootEntry.completion;
              if (rootRecord.type === "throw") {
                throw rootRecord.arg;
              }
              return this.rval;
            },
            dispatchException: function dispatchException(exception) {
              if (this.done) {
                throw exception;
              }
              var context = this;
              function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                return !!caught;
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") {
                  return handle("end");
                }
                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc");
                  var hasFinally = hasOwn.call(entry, "finallyLoc");
                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    } else if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) {
                      return handle(entry.catchLoc, true);
                    }
                  } else if (hasFinally) {
                    if (this.prev < entry.finallyLoc) {
                      return handle(entry.finallyLoc);
                    }
                  } else {
                    throw new Error("try statement without catch or finally");
                  }
                }
              }
            },
            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }
              if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
                finallyEntry = null;
              }
              var record = finallyEntry ? finallyEntry.completion : {};
              record.type = type;
              record.arg = arg;
              if (finallyEntry) {
                this.next = finallyEntry.finallyLoc;
              } else {
                this.complete(record);
              }
              return ContinueSentinel;
            },
            complete: function complete(record, afterLoc) {
              if (record.type === "throw") {
                throw record.arg;
              }
              if (record.type === "break" || record.type === "continue") {
                this.next = record.arg;
              } else if (record.type === "return") {
                this.rval = record.arg;
                this.next = "end";
              } else if (record.type === "normal" && afterLoc) {
                this.next = afterLoc;
              }
            },
            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                  this.complete(entry.completion, entry.afterLoc);
                  resetTryEntry(entry);
                  return ContinueSentinel;
                }
              }
            },
            "catch": function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if (record.type === "throw") {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function delegateYield(iterable, resultName, nextLoc) {
              this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
              };
              return ContinueSentinel;
            }
          };
        })(typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : this);
        return module.exports;
      })({exports: {}});
      _asyncToGenerator = (function(fn) {
        return function() {
          var gen = fn.apply(this, arguments);
          return new Promise(function(resolve, reject) {
            function step(key, arg) {
              try {
                var info = gen[key](arg);
                var value = info.value;
              } catch (error) {
                reject(error);
                return;
              }
              if (info.done) {
                resolve(value);
              } else {
                Promise.resolve(value).then(function(value) {
                  step("next", value);
                }, function(err) {
                  step("throw", err);
                });
              }
            }
            step("next");
          });
        };
      });
      server = YAPI._nodeRequire('http').createServer();
      url = YAPI._nodeRequire('url');
      WebSocketServer = YAPI._nodeRequire('ws').Server;
      express = YAPI._nodeRequire('express');
      Relays = {};
      WebSocketCallbackHandler = (function() {
        var ref = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(ws) {
          var hwids,
              errmsg,
              yctx,
              relay,
              hwid,
              i;
          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  hwids = [];
                  errmsg = new YErrorMsg();
                  yctx = new YAPIContext();
                  _context.prev = 3;
                  _context.next = 6;
                  return yctx.RegisterHubWebSocketCallback(ws, errmsg);
                case 6:
                  _context.t0 = _context.sent;
                  _context.t1 = YAPI.SUCCESS;
                  if (!(_context.t0 != _context.t1)) {
                    _context.next = 12;
                    break;
                  }
                  console.log('HTTP callback error: ' + errmsg);
                  yctx.FreeAPI();
                  return _context.abrupt('return');
                case 12:
                  relay = YRelay.FirstRelayInContext(yctx);
                case 13:
                  if (!relay) {
                    _context.next = 22;
                    break;
                  }
                  _context.next = 16;
                  return relay.get_hardwareId();
                case 16:
                  hwid = _context.sent;
                  hwids.push(hwid);
                  Relays[hwid] = relay;
                  relay = relay.nextRelay();
                  _context.next = 13;
                  break;
                case 22:
                  _context.next = 24;
                  return yctx.Sleep(30000);
                case 24:
                  _context.next = 29;
                  break;
                case 26:
                  _context.prev = 26;
                  _context.t2 = _context['catch'](3);
                  console.log('Caught exception in WS code', _context.t2);
                case 29:
                  for (i = 0; i < hwids.length; i++) {
                    delete Relays[hwids[i]];
                  }
                  yctx.FreeAPI();
                case 31:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[3, 26]]);
        }));
        return function WebSocketCallbackHandler(_x) {
          return ref.apply(this, arguments);
        };
      })();
      YAPI.LogUnhandledPromiseRejections();
      wss = new WebSocketServer({server: server});
      wss.on('connection', WebSocketCallbackHandler);
      app = express();
      server.on('request', app);
      app.set('port', process.env.PORT || 5000);
      app.use(express.static(__dirname + '/public'));
      app.set('views', __dirname + '/views');
      app.set('view engine', 'jade');
      app.get('/', function(request, response) {
        if (request.query.relay && Relays[request.query.relay]) {
          Relays[request.query.relay].set_state(request.query.state);
        }
        app.locals.Relays = Relays;
        response.render('index');
      });
      server.listen(app.get('port'), function() {
        console.log('Server running on port', app.get('port'));
      });
    }
  };
});

})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});
//# sourceMappingURL=build.js.map