"use strict";

module.exports = {
  swat: function swat() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
    var name = arguments.length > 1 ? arguments[1] : undefined;
    watch(callback(), name || callback);
  },
  swatEval: function swatEval() {
    var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var name = arguments.length > 1 ? arguments[1] : undefined;
    watch(eval(code), name);
  }
};

var watch = function watch(doit, name) {
  try {
    var n = name === undefined ? doit.toString() : name;
    console.time(n);
    var r = doit;
    console.timeEnd(n);
    console.log("RETURN: ".concat(r));
  } catch (e) {
    console.log("ERROR: ".concat(e));
  }
};
