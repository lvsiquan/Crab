/*! Crab.JS - v2.0.4 - 2014-12-23
 * https://github.com/lvsiquan/Crab
 *
 * Copyright (c) 2014 Lvsiquan;
 * Licensed under the MIT license */
var Crab = function (elementId, options) {
    var c = new C(elementId, options);
    return c;
};
Crab.version = '0.0.1';

var D = {};
var C = function (elementId, options) {
    this.element = elementId;
};

C.prototype = {
    element: '',
    startX: 0,
    startY: 0,
    on: function (actions, handlerFn) {
        var arr = actions.split(',');
        for (var i = 0; i < arr.length; i++) {
            D[arr[i]] = handlerFn;
        }

        var e = document.getElementById(this.element);
        if (e) {
            e.addEventListener('touchstart', this.touchSatrt, false);
            e.addEventListener('touchmove', this.touchMove, false);
            e.addEventListener('touchend', this.touchEnd, false);
        }
    },
    touchSatrt: function (e) {
        e.preventDefault();
        var touch = e.touches[0];
        this.startX = Number(touch.pageX);
        this.startY = Number(touch.pageY);
    },
    touchMove: function (e) {
        e.preventDefault();
        var distance = 30;
        var _distance = 0 - distance;
        var touch = e.touches[0];
        var x = Number(touch.pageX);
        var y = Number(touch.pageY);

        var distanceX = x - this.startX;
        var distanceY = y - this.startY;

        if (x != this.startX) {
            //left or right
            if (distanceX >= distance && D.hasOwnProperty('swiperight')) {
                var handler = D.swiperight;
                if (handler && typeof handler == 'function') {
                    handler();
                    return;
                }
            } else if (distanceX <= _distance && D.hasOwnProperty('swipeleft')) {
                var handler = D.swipeleft;
                if (handler && typeof handler == 'function') {
                    handler();
                    return;
                }
            }
        }
        if (y != this.startY) {
            //top or bottom
            if (distanceY >= distance && D.hasOwnProperty('swipebottom')) {
                var handler = D.swipebottom;
                if (handler && typeof handler == 'function') {
                    handler();
                    return;
                }
            } else if (distanceY <= _distance && D.hasOwnProperty('swipetop')) {
                var handler = D.swipetop;
                if (handler && typeof handler == 'function') {
                    handler();
                    return;
                }
            }
        }
    },
    touchEnd: function (e) {
    }
};
