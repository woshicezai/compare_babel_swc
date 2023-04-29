"use strict";

require("core-js/modules/es.promise.js");
require("core-js/modules/es.array.includes.js");
const test = async function test() {
  const isHas = [1, 2, 3].includes(1);
  if (isHas) {
    return 0;
  }
  const res = await Promise.resolve(1);
  return res;
};
test();
