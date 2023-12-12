"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _close = _interopRequireDefault(require("./close.png"));
//assets

var Modal = function Modal(_ref) {
  var _ref$message = _ref.message,
    message = _ref$message === void 0 ? 'Employee created !' : _ref$message;
  //CSS
  var containerModalStyles = {
    backgroundColor: 'rgba(0,0,0,0.75)',
    zIndex: '500',
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '100%',
    minHeight: '100%',
    display: 'grid',
    placeItems: 'center'
  };
  var modalStyles = {
    position: 'relative',
    zIndex: '501',
    backgroundColor: '#ffffff',
    maxWidth: '500px',
    boxSizing: 'border-box',
    width: '90%',
    display: 'grid',
    placeItems: 'center',
    borderRadius: '40px'
  };
  var btnCloseStyles = {
    position: 'absolute',
    top: '-12.5px',
    right: '-12.5px',
    display: 'block',
    width: '40px',
    height: '40px',
    background: 'none',
    cursor: 'pointer',
    border: 'none'
  };
  var imgBtnCloseStyles = {
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundImage: "url(data:".concat(_close.default, ")")
  };

  //Function
  var CloseModal = function CloseModal() {
    var containerModal = document.querySelector('.container-modal');
    containerModal.style.display = 'none';
  };
  return CloseModal && /*#__PURE__*/_react.default.createElement("div", {
    className: "container-modal",
    style: containerModalStyles
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    style: modalStyles
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal-close",
    style: btnCloseStyles,
    onClick: CloseModal
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: imgBtnCloseStyles
  })), /*#__PURE__*/_react.default.createElement("p", null, message)));
};
var _default = Modal;
exports.default = _default;