"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var ReactDOM = require('react-dom');
var module = require('./module');
var RenderTo = (function (_super) {
    __extends(RenderTo, _super);
    function RenderTo(props) {
        _super.call(this, props);
        this.state = new module.State();
    }
    RenderTo.prototype.componentDidMount = function () {
        var _this = this;
        this.popups = [];
        var selector = document.querySelectorAll(this.props.selector);
        Array.prototype.slice.call(selector).forEach(function (parent) {
            var popup = document.createElement('div');
            parent.appendChild(popup);
            _this.popups.push(popup);
        });
        this.renderLayer();
        this.selectorLength = selector.length;
    };
    RenderTo.prototype.componentDidUpdate = function () {
        this.renderLayer();
    };
    RenderTo.prototype.componentWillUnmount = function () {
        var _this = this;
        this.popups.forEach(function (popup) {
            ReactDOM.unmountComponentAtNode(popup);
        });
        var selector = document.querySelectorAll(this.props.selector);
        if (selector.length !== this.selectorLength) {
            console.warn('selector amount had been changed!');
        }
        Array.prototype.slice.call(document.querySelectorAll(this.props.selector)).forEach(function (parent) {
            var popup = _this.popups.shift();
            parent.removeChild(popup);
        });
    };
    RenderTo.prototype.renderLayer = function () {
        var _this = this;
        this.popups.forEach(function (popup) {
            ReactDOM.render(_this.props.children, popup, null);
        });
    };
    RenderTo.prototype.render = function () {
        return null;
    };
    RenderTo.defaultProps = new module.Props();
    return RenderTo;
}(React.Component));
exports.__esModule = true;
exports["default"] = RenderTo;
