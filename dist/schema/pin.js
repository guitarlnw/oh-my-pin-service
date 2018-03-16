'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var pinSchema = new Schema({
  namePlace: { type: String, required: true },
  createdBy: { type: String, required: true },
  lng: { type: Number, required: true },
  lat: { type: Number, required: true },
  createdAt: { type: String, default: Date.now }
}, {
  timestamps: {
    createdAt: 'created_at'
  }
});

var Pin = _mongoose2.default.model('pin', pinSchema);
exports.default = Pin;