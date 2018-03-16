'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pin = require('../schema/pin');

var _pin2 = _interopRequireDefault(_pin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addPin = function addPin(namePlace, createdBy, lng, lat) {
  var data = new _pin2.default({
    namePlace: namePlace,
    createdBy: createdBy,
    lng: lng,
    lat: lat
  });
  data.save().catch(function (err) {
    console.log('error', err);
  });
};

exports.default = addPin;