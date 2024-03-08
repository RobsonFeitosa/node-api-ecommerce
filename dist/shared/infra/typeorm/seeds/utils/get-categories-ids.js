"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getCategoriesIds;
function getCategoriesIds(categories, names) {
  return JSON.stringify(categories.filter(c => names.includes(c.name)).map(c => c.id));
}