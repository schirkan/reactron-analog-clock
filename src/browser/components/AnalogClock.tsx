import * as React from 'react';

import './AnalogClock.css';

export interface IAnalogClockOptions {
  style: string;
  label: string;
  timezone: string;
  animation: string;
}

export interface IAnalogClockProps {
  options: IAnalogClockOptions;
}

export class AnalogClock extends React.Component<IAnalogClockProps> {
  private intervals: number[] = [];

  // Main public to set the clock times
  public componentDidMount() {
    // Initialise the locale-enabled clocks
    this.initInternationalClocks();
    // Initialise any local time clocks
    this.initLocalClocks();
    // Start the seconds container moving
    this.moveSecondHands();
    // Set the intial minute hand container transition, and then each subsequent step
    this.setUpMinuteHands();
  }

  public componentWillUnmount() {
    this.intervals.forEach(interval => {
      window.clearInterval(interval);
    });
    this.intervals = [];
  }

  /*
   * Set up the clocks that use moment.js
   */
  public initInternationalClocks() {
    // Initialise the clock settings and the three times
    let times = getTimes();
    for (let i = 0; i < times.length; ++i) {
      let hours = times[i].jstime.format('h');
      let minutes = times[i].jstime.format('mm');
      let seconds = times[i].jstime.format('ss');

      let degrees = [
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
      for (let j = 0; j < degrees.length; j++) {
        let elements = document.querySelectorAll('.active .' + times[i].jsclass + ' .' + degrees[j].hand);
        for (let k = 0; k < elements.length; k++) {
          elements[k].style.webkitTransform = 'rotateZ(' + degrees[j].degree + 'deg)';
          elements[k].style.transform = 'rotateZ(' + degrees[j].degree + 'deg)';
          // If this is a minute hand, note the seconds position (to calculate minute position later)
          if (degrees[j].hand === 'minutes') {
            elements[k].parentNode.setAttribute('data-second-angle', degrees[j + 1].degree);
          }
        }
      }
    }
    // Add a class to the clock container to show it
    let elements = document.querySelectorAll('.clock');
    for (let l = 0; l < elements.length; l++) {
      elements[l].className = elements[l].className + ' show';
    }
  }

  /*
   * Starts any clocks using the user's local time
   */
  public initLocalClocks() {
    // Get the local time using JS
    const date = new Date;
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    // Create an object with each hand and it's angle in degrees
    const hands = [
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
    for (let j = 0; j < hands.length; j++) {
      const elements = document.querySelectorAll('.local .' + hands[j].hand);
      for (let k = 0; k < elements.length; k++) {
        elements[k].style.transform = 'rotateZ(' + hands[j].angle + 'deg)';
        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (hands[j].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }
      }
    }
  }

  /*
   * Move the second containers
   */
  public moveSecondHands() {
    const containers = document.querySelectorAll('.bounce .seconds-container');
    setInterval(() => {
      for (let i = 0; i < containers.length; i++) {
        if (containers[i].angle === undefined) {
          containers[i].angle = 6;
        } else {
          containers[i].angle += 6;
        }
        containers[i].style.webkitTransform = 'rotateZ(' + containers[i].angle + 'deg)';
        containers[i].style.transform = 'rotateZ(' + containers[i].angle + 'deg)';
      }
    }, 1000);
    for (let i = 0; i < containers.length; i++) {
      // Add in a little delay to make them feel more natural
      const randomOffset = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
      containers[i].style.transitionDelay = '0.0' + randomOffset + 's';
    }
  }

  /*
   * Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that
   */
  public setUpMinuteHands() {
    // More tricky, this needs to move the minute hand when the second hand hits zero
    const containers = document.querySelectorAll('.minutes-container');
    const secondAngle = containers[containers.length - 1].getAttribute('data-second-angle');
    console.log(secondAngle);
    if (secondAngle > 0) {
      // Set a timeout until the end of the current minute, to move the hand
      const delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
      console.log(delay);
      setTimeout(() => {
        moveMinuteHands(containers);
      }, delay);
    }
  }

  /*
   * Do the first minute's rotation, then move every 60 seconds after
   */
  public moveMinuteHands(containers) {
    for (let i = 0; i < containers.length; i++) {
      containers[i].style.webkitTransform = 'rotateZ(6deg)';
      containers[i].style.transform = 'rotateZ(6deg)';
    }
    // Then continue with a 60 second interval
    setInterval(() => {
      for (let i = 0; i < containers.length; i++) {
        if (containers[i].angle === undefined) {
          containers[i].angle = 12;
        } else {
          containers[i].angle += 6;
        }
        containers[i].style.webkitTransform = 'rotateZ(' + containers[i].angle + 'deg)';
        containers[i].style.transform = 'rotateZ(' + containers[i].angle + 'deg)';
      }
    }, 60000);
  }

  public render() {
    const className = 'clock ' + this.props.options.style + ' ' + this.props.options.animation;

    return (
      <section className="AnalogClock">
        <div className={className}>
          {this.props.options.label && (
            <div className="label">{this.props.options.label}</div>
          )}
          <div className="hours-container">
            <div className="hours" />
          </div>
          <div className="minutes-container">
            <div className="minutes" />
          </div>
          <div className="seconds-container">
            <div className="seconds" />
          </div>
        </div>
      </section>
    );
  }
}

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
