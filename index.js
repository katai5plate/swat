"use strict";

module.exports = {
  swat: function swat() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
    var name = arguments.length > 1 ? arguments[1] : undefined;
    watch(callback(), name);
  },
  swatEval: function swatEval() {
    var code = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var name = arguments.length > 1 ? arguments[1] : undefined;
    watch(eval(code), name);
  }
};

var watch = function watch(doit, name) {
  try {
    var i = "".concat(+new Date(), "_").concat("".concat(Math.random() * 1000 >> 0).padStart(3, "0"));
    var n = name === undefined ? i : name;
    console.time(n);
    var r = doit;
    console.timeEnd(n);
    console.log("RETURN: ".concat(r));
  } catch (e) {
    console.log("ERROR: ".concat(e));
  }
};
