
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var Portal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Portal, _React$Component);

  function Portal() {
    (0, _classCallCheck2.default)(this, Portal);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Portal).apply(this, arguments));
  }

  (0, _createClass2.default)(Portal, [{
    key: "render",
    value: function render() {
      return (0, _reactDom.createPortal)(this.props.children, this.props.container);
    }
  }]);
  return Portal;
}(_react.default.Component);

exports.default = Portal;
(0, _defineProperty2.default)(Portal, "propTypes", {
  children: _propTypes.default.node.isRequired,
  container: _propTypes.default.node.isRequired
});
(0, _defineProperty2.default)(Portal, "defaultProps", {
  container: document.body
});