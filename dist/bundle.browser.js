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

            var css = "section.AnalogClock_AnalogClock__3PSUq {\n  background: #3cd19e;\n  padding: 0;\n  width: 100%;\n  height: 100vh;\n  margin: 0;\n  overflow: hidden; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_clock__3pVZr {\n    border-radius: 50%;\n    background: radial-gradient(#000, #000 0.1em, #fff 0.1em, #fff), #fff;\n    display: inline-block;\n    margin: 1%;\n    padding-bottom: 31%;\n    position: relative;\n    top: 50%;\n    width: 31%;\n    opacity: 0;\n    transform: translateY(-40%); }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_clock__3pVZr.AnalogClock_show__2s17S {\n    opacity: 1;\n    transform: translateY(-50%);\n    transition: all 2.5s 0.5s cubic-bezier(0.12, 1.03, 0.34, 1); }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_clock__3pVZr::after {\n    background: red;\n    border-radius: 50%;\n    content: \"\";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 4%;\n    height: 4%;\n    z-index: 10; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_minutes-container__1iS_O,\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_hours-container__WKHXC,\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_seconds-container__lmVYa {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_hours-container__WKHXC {\n    animation: AnalogClock_rotate__2Ifz6 43200s infinite linear; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_linear__2DMKq .AnalogClock_minutes-container__1iS_O {\n    animation: AnalogClock_rotate__2Ifz6 3600s infinite linear; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_linear__2DMKq .AnalogClock_seconds-container__lmVYa {\n    animation: AnalogClock_rotate__2Ifz6 60s infinite linear; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_steps__2r3q6 .AnalogClock_minutes-container__1iS_O {\n    animation: AnalogClock_rotate__2Ifz6 3600s infinite steps(60); }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_steps__2r3q6 .AnalogClock_seconds-container__lmVYa {\n    animation: AnalogClock_rotate__2Ifz6 60s infinite steps(60); }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_local__2ITmb.AnalogClock_steps__2r3q6 .AnalogClock_minutes-container__1iS_O {\n    animation: none; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_bounce__8lFfp .AnalogClock_minutes-container__1iS_O {\n    transition: transform 0.3s cubic-bezier(0.4, 2.08, 0.55, 0.44); }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_bounce__8lFfp .AnalogClock_seconds-container__lmVYa {\n    transition: transform 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44); }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_hours__1PGqT {\n    background: #000;\n    width: 3.5%;\n    height: 40%;\n    position: absolute;\n    left: 48.25%;\n    top: 22%;\n    transform-origin: 50% 71%; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_minutes__3h-xS {\n    background: #000;\n    width: 3.5%;\n    height: 55%;\n    position: absolute;\n    left: 48.25%;\n    top: 7%;\n    transform-origin: 50% 78.5%; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_seconds__3phuS {\n    background: red;\n    width: 1.5%;\n    height: 42%;\n    position: absolute;\n    left: 49.25%;\n    top: 20%;\n    transform-origin: 50% 71%;\n    z-index: 8; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_label__3INbU {\n    background: #fff;\n    border-radius: 0.25em;\n    color: #000;\n    font-family: MyriadPro-Regular, 'Myriad Pro Regular', MyriadPro, 'Myriad Pro', Helvetica, Arial, sans-serif;\n    font-size: 1em;\n    font-weight: bold;\n    text-transform: uppercase;\n    padding: 0.5em 0.75em 0.25em;\n    position: absolute;\n    top: -4em;\n    left: 50%;\n    transform: translate(-50%, 0); }\n\n@keyframes AnalogClock_rotate__2Ifz6 {\n  100% {\n    transform: rotateZ(360deg); } }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_clock__3pVZr.AnalogClock_station__9fr3R {\n    background: #fff url(https://cssanimation.rocks/images/posts/clocks/station_clock.svg) no-repeat center;\n    background-size: 95%;\n    box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.2) inset; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_clock__3pVZr.AnalogClock_station__9fr3R .AnalogClock_seconds__3phuS::before {\n    background: red;\n    border-radius: 50%;\n    content: \"\";\n    position: absolute;\n    top: -9%;\n    left: -200%;\n    height: 18%;\n    width: 500%; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_clock__3pVZr.AnalogClock_ios7__2e3ZS {\n    background: #fff url(https://cssanimation.rocks/images/posts/clocks/ios_clock.svg) no-repeat center;\n    background-size: 88%; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_clock__3pVZr.AnalogClock_ios7__2e3ZS:before {\n    background: black;\n    border-radius: 50%;\n    content: \"\";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 6%;\n    height: 6%;\n    z-index: 0; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_clock__3pVZr.AnalogClock_ios7__2e3ZS:after {\n    width: 2%;\n    height: 2%; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_clock__3pVZr.AnalogClock_ios7__2e3ZS .AnalogClock_seconds__3phuS {\n    border-radius: 200%/10%;\n    height: 30%;\n    left: 49.5%;\n    top: 20%;\n    width: 1%;\n    transform-origin: 50% 100%; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_clock__3pVZr.AnalogClock_ios7__2e3ZS .AnalogClock_minutes__3h-xS {\n    border-radius: 150%/10%;\n    width: 2%;\n    height: 35%;\n    left: 49%;\n    top: 15%;\n    transform-origin: 50% 100%; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_clock__3pVZr.AnalogClock_ios7__2e3ZS .AnalogClock_hours__1PGqT {\n    border-radius: 85%/10%;\n    width: 2%;\n    height: 20%;\n    left: 49%;\n    top: 30%;\n    transform-origin: 50% 100%; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_clock__3pVZr.AnalogClock_simple__1SNHq {\n    background: #fff url(https://cssanimation.rocks/images/posts/clocks/ios_clock.svg) no-repeat center;\n    background-size: 88%; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_clock__3pVZr.AnalogClock_simple__1SNHq:after {\n    background-color: #000;\n    width: 5%;\n    height: 5%; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_clock__3pVZr.AnalogClock_simple__1SNHq .AnalogClock_seconds__3phuS {\n    background-color: #000;\n    height: 45%;\n    left: 49.5%;\n    top: 14%;\n    width: 1%;\n    transform-origin: 50% 80%; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_clock__3pVZr.AnalogClock_simple__1SNHq .AnalogClock_minutes__3h-xS {\n    width: 2%;\n    height: 40%;\n    left: 49%;\n    top: 10%;\n    transform-origin: 50% 100%; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_clock__3pVZr.AnalogClock_simple__1SNHq .AnalogClock_hours__1PGqT {\n    width: 2.5%;\n    height: 20%;\n    left: 48.75%;\n    top: 30%;\n    transform-origin: 50% 100%; }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_hours__1PGqT.AnalogClock_angled__TzFg7 {\n    transform: rotateZ(-40deg); }\n  section.AnalogClock_AnalogClock__3PSUq .AnalogClock_minutes__3h-xS.AnalogClock_angled__TzFg7 {\n    transform: rotateZ(40deg); }\n";
            styleInject(css);

            var AnalogClock$1 = exports('AnalogClock', /** @class */ (function (_super) {
                __extends(AnalogClock, _super);
                function AnalogClock() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.intervals = [];
                    return _this;
                }
                // Main public to set the clock times
                AnalogClock.prototype.componentDidMount = function () {
                    // Initialise the locale-enabled clocks
                    this.initInternationalClocks();
                    // Initialise any local time clocks
                    this.initLocalClocks();
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
                AnalogClock.prototype.initInternationalClocks = function () {
                    // Initialise the clock settings and the three times
                    var times = getTimes();
                    for (var i = 0; i < times.length; ++i) {
                        var hours = times[i].jstime.format('h');
                        var minutes = times[i].jstime.format('mm');
                        var seconds = times[i].jstime.format('ss');
                        var degrees = [
                            {
                                hand: 'hours',
                                degree: (hours * 30) + (minutes / 2)
                            },
                            {
                                hand: 'minutes',
                                degree: (minutes * 6)
                            },
                            {
                                hand: 'seconds',
                                degree: (seconds * 6)
                            }
                        ];
                        for (var j = 0; j < degrees.length; j++) {
                            var elements_1 = document.querySelectorAll('.active .' + times[i].jsclass + ' .' + degrees[j].hand);
                            for (var k = 0; k < elements_1.length; k++) {
                                elements_1[k].style.webkitTransform = 'rotateZ(' + degrees[j].degree + 'deg)';
                                elements_1[k].style.transform = 'rotateZ(' + degrees[j].degree + 'deg)';
                                // If this is a minute hand, note the seconds position (to calculate minute position later)
                                if (degrees[j].hand === 'minutes') {
                                    elements_1[k].parentNode.setAttribute('data-second-angle', degrees[j + 1].degree);
                                }
                            }
                        }
                    }
                    // Add a class to the clock container to show it
                    var elements = document.querySelectorAll('.clock');
                    for (var l = 0; l < elements.length; l++) {
                        elements[l].className = elements[l].className + ' show';
                    }
                };
                /*
                 * Starts any clocks using the user's local time
                 */
                AnalogClock.prototype.initLocalClocks = function () {
                    // Get the local time using JS
                    var date = new Date;
                    var seconds = date.getSeconds();
                    var minutes = date.getMinutes();
                    var hours = date.getHours();
                    // Create an object with each hand and it's angle in degrees
                    var hands = [
                        {
                            hand: 'hours',
                            angle: (hours * 30) + (minutes / 2)
                        },
                        {
                            hand: 'minutes',
                            angle: (minutes * 6)
                        },
                        {
                            hand: 'seconds',
                            angle: (seconds * 6)
                        }
                    ];
                    // Loop through each of these hands to set their angle
                    for (var j = 0; j < hands.length; j++) {
                        var elements = document.querySelectorAll('.local .' + hands[j].hand);
                        for (var k = 0; k < elements.length; k++) {
                            elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)';
                            // If this is a minute hand, note the seconds position (to calculate minute position later)
                            if (hands[j].hand === 'minutes') {
                                elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
                            }
                        }
                    }
                };
                /*
                 * Move the second containers
                 */
                AnalogClock.prototype.moveSecondHands = function () {
                    var containers = document.querySelectorAll('.bounce .seconds-container');
                    setInterval(function () {
                        for (var i = 0; i < containers.length; i++) {
                            if (containers[i].angle === undefined) {
                                containers[i].angle = 6;
                            }
                            else {
                                containers[i].angle += 6;
                            }
                            containers[i].style.webkitTransform = 'rotateZ(' + containers[i].angle + 'deg)';
                            containers[i].style.transform = 'rotateZ(' + containers[i].angle + 'deg)';
                        }
                    }, 1000);
                    for (var i = 0; i < containers.length; i++) {
                        // Add in a little delay to make them feel more natural
                        var randomOffset = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
                        containers[i].style.transitionDelay = '0.0' + randomOffset + 's';
                    }
                };
                /*
                 * Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that
                 */
                AnalogClock.prototype.setUpMinuteHands = function () {
                    // More tricky, this needs to move the minute hand when the second hand hits zero
                    var containers = document.querySelectorAll('.minutes-container');
                    var secondAngle = containers[containers.length - 1].getAttribute('data-second-angle');
                    console.log(secondAngle);
                    if (secondAngle > 0) {
                        // Set a timeout until the end of the current minute, to move the hand
                        var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
                        console.log(delay);
                        setTimeout(function () {
                            moveMinuteHands(containers);
                        }, delay);
                    }
                };
                /*
                 * Do the first minute's rotation, then move every 60 seconds after
                 */
                AnalogClock.prototype.moveMinuteHands = function (containers) {
                    for (var i = 0; i < containers.length; i++) {
                        containers[i].style.webkitTransform = 'rotateZ(6deg)';
                        containers[i].style.transform = 'rotateZ(6deg)';
                    }
                    // Then continue with a 60 second interval
                    setInterval(function () {
                        for (var i = 0; i < containers.length; i++) {
                            if (containers[i].angle === undefined) {
                                containers[i].angle = 12;
                            }
                            else {
                                containers[i].angle += 6;
                            }
                            containers[i].style.webkitTransform = 'rotateZ(' + containers[i].angle + 'deg)';
                            containers[i].style.transform = 'rotateZ(' + containers[i].angle + 'deg)';
                        }
                    }, 60000);
                };
                AnalogClock.prototype.render = function () {
                    var className = 'clock ' + this.props.options.style + ' ' + this.props.options.animation;
                    return (createElement("section", { className: "AnalogClock" },
                        createElement("div", { className: className },
                            this.props.options.label && (createElement("div", { className: "label" }, this.props.options.label)),
                            createElement("div", { className: "hours-container" },
                                createElement("div", { className: "hours" })),
                            createElement("div", { className: "minutes-container" },
                                createElement("div", { className: "minutes" })),
                            createElement("div", { className: "seconds-container" },
                                createElement("div", { className: "seconds" })))));
                };
                return AnalogClock;
            }(Component)));
            //  public getTimes() {
            //   moment.tz.add([
            //     'Eire|GMT IST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00',
            //     'Asia/Tokyo|JST|-90|0|',
            //     'America/New_York|EST EDT|50 40|0101|1Lz50 1zb0 Op0'
            //     ]);
            //   var now = new Date();
            //   // Set the time manually for each of the clock types we're using
            //   var times = [
            //     {
            //       jsclass: 'js-tokyo',
            //       jstime: moment.tz(now, "Asia/Tokyo")
            //     },
            //     {
            //       jsclass: 'js-london',
            //       jstime: moment.tz(now, "Eire")
            //     },
            //     {
            //       jsclass: 'js-new-york',
            //       jstime: moment.tz(now, "America/New_York")
            //     }
            //   ];
            //   return times;
            // }

            var components = exports('components', [{
                    component: AnalogClock$1,
                    description: 'Analog Clock',
                    displayName: 'Analog Clock',
                    name: 'AnalogClock',
                    options: [{
                            defaultValue: 'simple',
                            description: 'Clock style',
                            displayName: 'Style',
                            name: 'text',
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
                            name: 'text',
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
                            name: 'text',
                            valueType: 'string'
                        }, {
                            defaultValue: 'local',
                            description: 'Timezone',
                            displayName: 'Timezone',
                            name: 'text',
                            valueType: 'string',
                            values: [
                                { value: 'local', text: 'Local' },
                                { value: 'Europe/Berlin', text: 'Europe/Berlin' },
                                { value: 'Europe/London', text: 'Europe/London' },
                                { value: 'Asia/Tokyo', text: 'Asia/Tokyo' },
                                { value: 'America/New_York', text: 'America/New York' },
                            ]
                        }]
                }]);

        }
    };
});
//# sourceMappingURL=bundle.browser.js.map
