"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatValueForHundred = exports.default = void 0;
const formatValue = value => Intl.NumberFormat('pt-Br', {
  style: 'currency',
  currency: 'BRL'
}).format(value);
var _default = exports.default = formatValue;
const formatValueForHundred = value => {
  const reduceValue = value / 100;
  return formatValue(reduceValue);
};
exports.formatValueForHundred = formatValueForHundred;