'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pin = require('../schema/pin');

var _pin2 = _interopRequireDefault(_pin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPin = function getPin() {
  return _pin2.default.find().exec();
};

exports.default = getPin;