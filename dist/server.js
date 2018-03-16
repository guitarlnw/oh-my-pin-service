'use strict';

var _this = undefined;

require('babel-polyfill');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _addPin = require('./service/addPin');

var _addPin2 = _interopRequireDefault(_addPin);

var _getPins = require('./service/getPins');

var _getPins2 = _interopRequireDefault(_getPins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

_dotenv2.default.load();

var _process$env = process.env,
    NODE_PORT = _process$env.NODE_PORT,
    DB_HOST = _process$env.DB_HOST,
    DB_PORT = _process$env.DB_PORT,
    DB_NAME = _process$env.DB_NAME;


var server = (0, _express2.default)();
server.use((0, _bodyParser2.default)(), (0, _cors2.default)());

server.get('/', function (req, res) {
  res.send();
});

server.get('/get-pins', function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res) {
    var pins;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _getPins2.default)();

          case 2:
            pins = _context.sent;

            res.json(pins);

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

server.post('/add-pin', function (req, res) {
  var _req$body = req.body,
      namePlace = _req$body.namePlace,
      createdBy = _req$body.createdBy,
      lng = _req$body.lng,
      lat = _req$body.lat;

  (0, _addPin2.default)(namePlace, createdBy, lng, lat);
  res.send('success na ja');
});

// config server and MongoDB

var urlMongoDB = 'mongodb://' + DB_HOST + ':' + DB_PORT + '/' + DB_NAME;
_mongoose2.default.promise = global.Promise;
_mongoose2.default.connect(urlMongoDB).then(function () {
  console.log('DB connectd on ' + urlMongoDB);
}).catch(function (err) {
  console.log(err);
});

server.listen(NODE_PORT, function (error) {
  if (error) throw error;
  console.log('server run on port : ' + NODE_PORT);
});