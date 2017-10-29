"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createStore(initialRState) {
    var listeners = [];
    var rState = initialRState;
    return {
        getRState: function () { return rState; },
        setRState: function (newRState) {
            rState = newRState;
            listeners.forEach(function (listener) { return listener(); });
        },
        subscribe: function (listener) { return listeners.push(listener); },
        unsubscribe: function (listener) {
            return (listeners = listeners.filter(function (item) { return item !== listener; }));
        }
    };
}
exports.createStore = createStore;
