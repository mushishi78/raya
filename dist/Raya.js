"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Raya = /** @class */ (function (_super) {
    __extends(Raya, _super);
    function Raya(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.onUpdate = function () { return _this.forceUpdate(); };
        _this.store = context.rayaStore;
        return _this;
    }
    Raya.prototype.componentDidMount = function () {
        this.store.subscribe(this.onUpdate);
    };
    Raya.prototype.componentWillUnmount = function () {
        this.store.unsubscribe(this.onUpdate);
    };
    Raya.prototype.render = function () {
        return this.props.render(this.store);
    };
    return Raya;
}(react_1.Component));
exports.Raya = Raya;
