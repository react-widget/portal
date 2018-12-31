
"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs2/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var Portal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Portal, _React$Component);

  function Portal() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Portal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Portal)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      container: null
    });
    return _this;
  }

  (0, _createClass2.default)(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        container: this.props.getContainer()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var container = this.state.container;
      if (!container) return null;
      return (0, _reactDom.createPortal)(this.props.children, container);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      return {
        container: props.getContainer()
      };
    }
  }]);
  return Portal;
}(_react.default.Component);

exports.default = Portal;
(0, _defineProperty2.default)(Portal, "propTypes", {
  children: _propTypes.default.node.isRequired,
  getContainer: _propTypes.default.func
});
(0, _defineProperty2.default)(Portal, "defaultProps", {
  container: document.body,
  getContainer: function getContainer() {
    return document.body;
  }
});