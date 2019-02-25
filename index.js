"use strict";

module.exports = function () {
  var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
  var name = arguments.length > 1 ? arguments[1] : undefined;
  try {
    var _name = n === undefined ? name.toString() : name;
    console.time(n);
    var r = callback();
    console.timeEnd(n);
    console.log("RETURN: ".concat(r));
  } catch (e) {
    console.log("ERROR: ".concat(e));
  }
};
