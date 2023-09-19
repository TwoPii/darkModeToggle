"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Toggle.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Toggle extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      enabled: this.props.enabledDefault ? this.props.enabledDefault : false
    };
  }
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "container"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "text"
    }, this.props.text), /*#__PURE__*/_react.default.createElement("div", {
      className: "toggle " + this.getClass(),
      onClick: this.switch.bind(this)
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "toggle-ball " + this.getClass()
    })));
  }
  switch() {
    this.setState({
      enabled: !this.state.enabled
    });
    this.props.handleChange();
  }
  getClass() {
    return this.state.enabled ? 'dark' : 'light';
  }
}
exports.default = Toggle;