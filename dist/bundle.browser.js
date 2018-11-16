System.register(['react'], function (exports, module) {
    'use strict';
    var createElement, Component;
    return {
        setters: [function (module) {
            createElement = module.createElement;
            Component = module.Component;
        }],
        execute: function () {

            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0

            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.

            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */

            var extendStatics = function(d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
                return extendStatics(d, b);
            };

            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }

            function styleInject(css, ref) {
              if ( ref === void 0 ) ref = {};
              var insertAt = ref.insertAt;

              if (!css || typeof document === 'undefined') { return; }

              var head = document.head || document.getElementsByTagName('head')[0];
              var style = document.createElement('style');
              style.type = 'text/css';

              if (insertAt === 'top') {
                if (head.firstChild) {
                  head.insertBefore(style, head.firstChild);
                } else {
                  head.appendChild(style);
                }
              } else {
                head.appendChild(style);
              }

              if (style.styleSheet) {
                style.styleSheet.cssText = css;
              } else {
                style.appendChild(document.createTextNode(css));
              }
            }

            var css = "section.AnalogClock_AnalogClock__1uVDD {\n  margin-bottom: 30px;\n  overflow: hidden; }\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_clock__3Mbv5 {\n    position: relative;\n    display: inline-block;\n    border-radius: 50%;\n    background: radial-gradient(#000, #000 0.1em, #fff 0.1em, #fff), #fff;\n    margin: 1%;\n    padding-bottom: 98%;\n    width: 98%;\n    transition: all 2.5s 0.5s cubic-bezier(0.12, 1.03, 0.34, 1); }\n    section.AnalogClock_AnalogClock__1uVDD .AnalogClock_clock__3Mbv5::after {\n      background: red;\n      border-radius: 50%;\n      content: \"\";\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      width: 4%;\n      height: 4%;\n      z-index: 10; }\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_minutes-container__32qVO,\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_hours-container__28dAN,\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_seconds-container__2dRxt {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0; }\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_hours-container__28dAN {\n    animation: AnalogClock_rotate__3G1Jr 43200s infinite linear; }\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_linear__3FerC .AnalogClock_minutes-container__32qVO {\n    animation: AnalogClock_rotate__3G1Jr 3600s infinite linear; }\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_linear__3FerC .AnalogClock_seconds-container__2dRxt {\n    animation: AnalogClock_rotate__3G1Jr 60s infinite linear; }\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_steps__34M-U .AnalogClock_minutes-container__32qVO {\n    animation: AnalogClock_rotate__3G1Jr 3600s infinite steps(60); }\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_steps__34M-U .AnalogClock_seconds-container__2dRxt {\n    animation: AnalogClock_rotate__3G1Jr 60s infinite steps(60); }\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_local__aaZIp.AnalogClock_steps__34M-U .AnalogClock_minutes-container__32qVO {\n    animation: none; }\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_bounce__2_uLw .AnalogClock_minutes-container__32qVO {\n    transition: transform 0.3s cubic-bezier(0.4, 2.08, 0.55, 0.44); }\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_bounce__2_uLw .AnalogClock_seconds-container__2dRxt {\n    transition: transform 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44); }\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_hours__29zsL {\n    background: #000;\n    width: 3.5%;\n    height: 40%;\n    position: absolute;\n    left: 48.25%;\n    top: 22%;\n    transform-origin: 50% 71%; }\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_minutes__uz73E {\n    background: #000;\n    width: 3.5%;\n    height: 55%;\n    position: absolute;\n    left: 48.25%;\n    top: 7%;\n    transform-origin: 50% 78.5%; }\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_seconds__1seBo {\n    background: red;\n    width: 1.5%;\n    height: 42%;\n    position: absolute;\n    left: 49.25%;\n    top: 20%;\n    transform-origin: 50% 71%;\n    z-index: 8; }\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_label__2P-dG {\n    background: #fff;\n    border-radius: 0.25em;\n    color: #000;\n    font-family: MyriadPro-Regular, 'Myriad Pro Regular', MyriadPro, 'Myriad Pro', Helvetica, Arial, sans-serif;\n    font-size: 1em;\n    font-weight: bold;\n    text-transform: uppercase;\n    padding: 0.5em 0.75em 0.25em;\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, 0);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n\n@keyframes AnalogClock_rotate__3G1Jr {\n  100% {\n    transform: rotateZ(360deg); } }\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_clock__3Mbv5.AnalogClock_station__3z3oT {\n    background: #fff url(https://cssanimation.rocks/images/posts/clocks/station_clock.svg) no-repeat center;\n    background-size: 95%;\n    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.2) inset; }\n    section.AnalogClock_AnalogClock__1uVDD .AnalogClock_clock__3Mbv5.AnalogClock_station__3z3oT .AnalogClock_seconds__1seBo::before {\n      background: red;\n      border-radius: 50%;\n      content: \"\";\n      position: absolute;\n      top: -9%;\n      left: -200%;\n      height: 18%;\n      width: 500%; }\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_clock__3Mbv5.AnalogClock_ios7__2eplF {\n    background: #fff url(https://cssanimation.rocks/images/posts/clocks/ios_clock.svg) no-repeat center;\n    background-size: 88%; }\n    section.AnalogClock_AnalogClock__1uVDD .AnalogClock_clock__3Mbv5.AnalogClock_ios7__2eplF::before {\n      background: black;\n      border-radius: 50%;\n      content: \"\";\n      position: absolute;\n      left: 50%;\n      top: 50%;\n      transform: translate(-50%, -50%);\n      width: 6%;\n      height: 6%;\n      z-index: 0; }\n    section.AnalogClock_AnalogClock__1uVDD .AnalogClock_clock__3Mbv5.AnalogClock_ios7__2eplF::after {\n      width: 2%;\n      height: 2%; }\n    section.AnalogClock_AnalogClock__1uVDD .AnalogClock_clock__3Mbv5.AnalogClock_ios7__2eplF .AnalogClock_seconds__1seBo {\n      border-radius: 200%/10%;\n      height: 30%;\n      left: 49.5%;\n      top: 20%;\n      width: 1%;\n      transform-origin: 50% 100%; }\n    section.AnalogClock_AnalogClock__1uVDD .AnalogClock_clock__3Mbv5.AnalogClock_ios7__2eplF .AnalogClock_minutes__uz73E {\n      border-radius: 150%/10%;\n      width: 2%;\n      height: 35%;\n      left: 49%;\n      top: 15%;\n      transform-origin: 50% 100%; }\n    section.AnalogClock_AnalogClock__1uVDD .AnalogClock_clock__3Mbv5.AnalogClock_ios7__2eplF .AnalogClock_hours__29zsL {\n      border-radius: 85%/10%;\n      width: 2%;\n      height: 20%;\n      left: 49%;\n      top: 30%;\n      transform-origin: 50% 100%; }\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_clock__3Mbv5.AnalogClock_simple__2yQrz {\n    background: #fff url(https://cssanimation.rocks/images/posts/clocks/ios_clock.svg) no-repeat center;\n    background-size: 88%; }\n    section.AnalogClock_AnalogClock__1uVDD .AnalogClock_clock__3Mbv5.AnalogClock_simple__2yQrz::after {\n      background-color: #000;\n      width: 5%;\n      height: 5%; }\n    section.AnalogClock_AnalogClock__1uVDD .AnalogClock_clock__3Mbv5.AnalogClock_simple__2yQrz .AnalogClock_seconds__1seBo {\n      background-color: #000;\n      height: 45%;\n      left: 49.5%;\n      top: 14%;\n      width: 1%;\n      transform-origin: 50% 80%; }\n    section.AnalogClock_AnalogClock__1uVDD .AnalogClock_clock__3Mbv5.AnalogClock_simple__2yQrz .AnalogClock_minutes__uz73E {\n      width: 2%;\n      height: 40%;\n      left: 49%;\n      top: 10%;\n      transform-origin: 50% 100%; }\n    section.AnalogClock_AnalogClock__1uVDD .AnalogClock_clock__3Mbv5.AnalogClock_simple__2yQrz .AnalogClock_hours__29zsL {\n      width: 2.5%;\n      height: 20%;\n      left: 48.75%;\n      top: 30%;\n      transform-origin: 50% 100%; }\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_hours__29zsL.AnalogClock_angled__1bUil {\n    transform: rotateZ(-40deg); }\n  section.AnalogClock_AnalogClock__1uVDD .AnalogClock_minutes__uz73E.AnalogClock_angled__1bUil {\n    transform: rotateZ(40deg); }\n";
            var styles = {"AnalogClock":"AnalogClock_AnalogClock__1uVDD","clock":"AnalogClock_clock__3Mbv5","minutes-container":"AnalogClock_minutes-container__32qVO","hours-container":"AnalogClock_hours-container__28dAN","seconds-container":"AnalogClock_seconds-container__2dRxt","rotate":"AnalogClock_rotate__3G1Jr","linear":"AnalogClock_linear__3FerC","steps":"AnalogClock_steps__34M-U","local":"AnalogClock_local__aaZIp","bounce":"AnalogClock_bounce__2_uLw","hours":"AnalogClock_hours__29zsL","minutes":"AnalogClock_minutes__uz73E","seconds":"AnalogClock_seconds__1seBo","label":"AnalogClock_label__2P-dG","station":"AnalogClock_station__3z3oT","ios7":"AnalogClock_ios7__2eplF","simple":"AnalogClock_simple__2yQrz","angled":"AnalogClock_angled__1bUil"};
            styleInject(css);

            // tslint:disable:no-string-literal
            // tslint:disable:no-var-requires
            var moment = require('moment');
            var momentTimezone = require('moment-timezone');
            var AnalogClock = exports('AnalogClock', /** @class */ (function (_super) {
                __extends(AnalogClock, _super);
                function AnalogClock(props) {
                    var _this = _super.call(this, props) || this;
                    _this.intervals = [];
                    _this.secondsAngle = 0;
                    _this.onSecondsTick = _this.onSecondsTick.bind(_this);
                    _this.onMinutesTick = _this.onMinutesTick.bind(_this);
                    _this.moveMinuteHands = _this.moveMinuteHands.bind(_this);
                    return _this;
                }
                // Main public to set the clock times
                AnalogClock.prototype.componentDidMount = function () {
                    // Initialise the locale-enabled clocks
                    this.initClock();
                    // Start the seconds container moving
                    this.moveSecondHands();
                    // Set the intial minute hand container transition, and then each subsequent step
                    this.setUpMinuteHands();
                };
                AnalogClock.prototype.componentWillUnmount = function () {
                    this.intervals.forEach(function (interval) {
                        window.clearInterval(interval);
                    });
                    this.intervals = [];
                };
                /*
                 * Set up the clocks that use moment.js
                 */
                AnalogClock.prototype.initClock = function () {
                    var _this = this;
                    var now = new Date();
                    var time = moment(now);
                    if (this.props.timezone !== 'local') {
                        time = time.tz(this.props.timezone);
                    }
                    var hours = time.hours();
                    var minutes = time.minutes();
                    var seconds = time.seconds();
                    var degrees = {
                        hours: (hours * 30) + (minutes / 2),
                        minutes: (minutes * 6),
                        seconds: (seconds * 6),
                    };
                    Object.keys(degrees).forEach(function (key) {
                        var degree = degrees[key];
                        var element = null;
                        switch (key) {
                            case 'hours':
                                element = _this.hoursElement;
                                break;
                            case 'minutes':
                                element = _this.minutesElement;
                                break;
                            case 'seconds':
                                element = _this.secondsElement;
                                break;
                        }
                        if (element) {
                            element.style.webkitTransform = 'rotateZ(' + degree + 'deg)';
                            element.style.transform = 'rotateZ(' + degree + 'deg)';
                            // If this is a minute hand, note the seconds position (to calculate minute position later)
                        }
                    });
                    this.secondsAngle = degrees.seconds;
                };
                /*
                 * Move the second containers
                 */
                AnalogClock.prototype.moveSecondHands = function () {
                    if (!this.clockElement || !this.secondsContainer || this.props.animation !== 'bounce') {
                        return;
                    }
                    var interval = window.setInterval(this.onSecondsTick, 1000);
                    this.intervals.push(interval);
                    // Add in a little delay to make them feel more natural
                    var randomOffset = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
                    this.secondsContainer.style.transitionDelay = '0.0' + randomOffset + 's';
                };
                AnalogClock.prototype.onSecondsTick = function () {
                    if (this.secondsContainer) {
                        if (this.secondsContainer.angle === undefined) {
                            this.secondsContainer.angle = 6;
                        }
                        else {
                            this.secondsContainer.angle += 6;
                        }
                        this.secondsContainer.style.webkitTransform = 'rotateZ(' + this.secondsContainer.angle + 'deg)';
                        this.secondsContainer.style.transform = 'rotateZ(' + this.secondsContainer.angle + 'deg)';
                    }
                };
                /*
                 * Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that
                 */
                AnalogClock.prototype.setUpMinuteHands = function () {
                    // this needs to move the minute hand when the second hand hits zero
                    // Set a timeout until the end of the current minute, to move the hand
                    var delay = (((360 - this.secondsAngle) / 6) + 0.1) * 1000;
                    var timout = window.setTimeout(this.moveMinuteHands, delay);
                    this.intervals.push(timout);
                };
                /*
                 * Do the first minute's rotation, then move every 60 seconds after
                 */
                AnalogClock.prototype.moveMinuteHands = function () {
                    if (!this.minutesContainer) {
                        return;
                    }
                    this.minutesContainer.style.webkitTransform = 'rotateZ(6deg)';
                    this.minutesContainer.style.transform = 'rotateZ(6deg)';
                    // Then continue with a 60 second interval
                    var interval = window.setInterval(this.onMinutesTick, 60000);
                    this.intervals.push(interval);
                };
                AnalogClock.prototype.onMinutesTick = function () {
                    if (this.minutesContainer) {
                        if (this.minutesContainer.angle === undefined) {
                            this.minutesContainer.angle = 12;
                        }
                        else {
                            this.minutesContainer.angle += 6;
                        }
                        this.minutesContainer.style.webkitTransform = 'rotateZ(' + this.minutesContainer.angle + 'deg)';
                        this.minutesContainer.style.transform = 'rotateZ(' + this.minutesContainer.angle + 'deg)';
                    }
                };
                AnalogClock.prototype.render = function () {
                    var _this = this;
                    var className = styles['clock'] + ' ' +
                        styles[this.props.style] + ' ' +
                        styles[this.props.animation];
                    return (createElement("section", { className: styles['AnalogClock'] },
                        createElement("div", { className: className, ref: function (el) { return _this.clockElement = el; } },
                            createElement("div", { className: styles['hours-container'], ref: function (el) { return _this.hoursContainer = el; } },
                                createElement("div", { className: styles['hours'], ref: function (el) { return _this.hoursElement = el; } })),
                            createElement("div", { className: styles['minutes-container'], ref: function (el) { return _this.minutesContainer = el; } },
                                createElement("div", { className: styles['minutes'], ref: function (el) { return _this.minutesElement = el; } })),
                            createElement("div", { className: styles['seconds-container'], ref: function (el) { return _this.secondsContainer = el; } },
                                createElement("div", { className: styles['seconds'], ref: function (el) { return _this.secondsElement = el; } }))),
                        this.props.label && (createElement("div", { className: styles['label'] }, this.props.label))));
                };
                return AnalogClock;
            }(Component)));

            var components = exports('components', [{
                    component: AnalogClock,
                    description: 'Analog Clock',
                    displayName: 'Analog Clock',
                    fields: [{
                            defaultValue: 'simple',
                            description: 'Clock style',
                            displayName: 'Style',
                            name: 'style',
                            valueType: 'string',
                            values: [
                                { value: 'simple', text: 'Simple' },
                                { value: 'station', text: 'Station' },
                                { value: 'ios7', text: 'IOS 7' },
                            ]
                        }, {
                            defaultValue: 'bounce',
                            description: 'Clock Animation',
                            displayName: 'Animation',
                            name: 'animation',
                            valueType: 'string',
                            values: [
                                { value: 'bounce', text: 'Bounce' },
                                { value: 'steps', text: 'Steps' },
                                { value: 'linear', text: 'Linear' },
                            ]
                        }, {
                            defaultValue: '',
                            description: 'Label',
                            displayName: 'Label',
                            name: 'label',
                            valueType: 'string'
                        }, {
                            defaultValue: 'local',
                            description: 'Timezone',
                            displayName: 'Timezone',
                            name: 'timezone',
                            valueType: 'string',
                            values: [
                                { value: 'local', text: 'Local' },
                                { value: 'Europe/Berlin', text: 'Europe/Berlin' },
                                { value: 'Europe/London', text: 'Europe/London' },
                                { value: 'Asia/Tokyo', text: 'Asia/Tokyo' },
                                { value: 'America/New_York', text: 'America/New York' },
                            ]
                        }],
                    name: 'AnalogClock'
                }]);

        }
    };
});
//# sourceMappingURL=bundle.browser.js.map
