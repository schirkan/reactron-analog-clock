import { IReactronComponentProps } from '@schirkan/reactron-interfaces';
import * as React from 'react';

import styles from './AnalogClock.scss';

// tslint:disable:no-string-literal
// tslint:disable:no-var-requires

const moment = require('moment');
const momentTimezone = require('moment-timezone');

export interface IAnalogClockOptions {
  style: 'simple' | 'station' | 'ios7';
  label: string;
  timezone: string;
  animation: 'bounce' | 'steps' | 'linear';
}

export class AnalogClock extends React.Component<IReactronComponentProps<IAnalogClockOptions>> {
  private intervals: number[] = [];
  private secondsAngle: number = 0;

  private hoursContainer: Element | null;
  private minutesContainer: Element | null;
  private secondsContainer: Element | null;

  private clockElement: Element | null;

  private hoursElement: Element | null;
  private minutesElement: Element | null;
  private secondsElement: Element | null;

  constructor(props: IReactronComponentProps<IAnalogClockOptions>) {
    super(props);

    this.onSecondsTick = this.onSecondsTick.bind(this);
    this.onMinutesTick = this.onMinutesTick.bind(this);
    this.moveMinuteHands = this.moveMinuteHands.bind(this);
  }

  // Main public to set the clock times
  public componentDidMount() {
    // Initialise the locale-enabled clocks
    this.initClock();
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
  private initClock() {
    const now = new Date();
    const time = moment(now).tz(this.props.options.timezone); // "America/New_York"

    const hours = time.hours();
    const minutes = time.minutes();
    const seconds = time.seconds();

    const degrees = {
      hours: (hours * 30) + (minutes / 2),
      minutes: (minutes * 6),
      seconds: (seconds * 6),
    };

    Object.keys(degrees).forEach(key => {
      const degree = degrees[key];
      let element: Element | null = null;
      switch (key) {
        case 'hours':
          element = this.hoursElement;
          break;
        case 'minutes':
          element = this.minutesElement;
          break;
        case 'seconds':
          element = this.secondsElement;
          break;
      }

      if (element) {
        element.style.webkitTransform = 'rotateZ(' + degree + 'deg)';
        element.style.transform = 'rotateZ(' + degree + 'deg)';
        // If this is a minute hand, note the seconds position (to calculate minute position later)
      }
    });

    this.secondsAngle = degrees.seconds;
  }

  /*
   * Move the second containers
   */
  private moveSecondHands() {
    if (!this.clockElement || !this.secondsContainer || this.props.options.animation !== 'bounce') {
      return;
    }

    const interval = window.setInterval(this.onSecondsTick, 1000);
    this.intervals.push(interval);

    // Add in a little delay to make them feel more natural
    const randomOffset = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    this.secondsContainer.style.transitionDelay = '0.0' + randomOffset + 's';
  }

  private onSecondsTick() {
    if (this.secondsContainer) {
      if (this.secondsContainer.angle === undefined) {
        this.secondsContainer.angle = 6;
      } else {
        this.secondsContainer.angle += 6;
      }
      this.secondsContainer.style.webkitTransform = 'rotateZ(' + this.secondsContainer.angle + 'deg)';
      this.secondsContainer.style.transform = 'rotateZ(' + this.secondsContainer.angle + 'deg)';
    }
  }

  /*
   * Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that
   */
  private setUpMinuteHands() {
    // this needs to move the minute hand when the second hand hits zero
    // Set a timeout until the end of the current minute, to move the hand
    const delay = (((360 - this.secondsAngle) / 6) + 0.1) * 1000;
    const timout = window.setTimeout(this.moveMinuteHands, delay);
    this.intervals.push(timout);
  }

  /*
   * Do the first minute's rotation, then move every 60 seconds after
   */
  private moveMinuteHands() {
    if (!this.minutesContainer) {
      return;
    }

    this.minutesContainer.style.webkitTransform = 'rotateZ(6deg)';
    this.minutesContainer.style.transform = 'rotateZ(6deg)';

    // Then continue with a 60 second interval
    const interval = window.setInterval(this.onMinutesTick, 60000);
    this.intervals.push(interval);
  }

  private onMinutesTick() {
    if (this.minutesContainer) {
      if (this.minutesContainer.angle === undefined) {
        this.minutesContainer.angle = 12;
      } else {
        this.minutesContainer.angle += 6;
      }
      this.minutesContainer.style.webkitTransform = 'rotateZ(' + this.minutesContainer.angle + 'deg)';
      this.minutesContainer.style.transform = 'rotateZ(' + this.minutesContainer.angle + 'deg)';
    }
  }

  public render() {
    const className = styles['clock'] + ' ' +
      styles[this.props.options.style] + ' ' +
      styles[this.props.options.animation];

    return (
      <section className={styles['AnalogClock']}>
        <div className={className} ref={el => this.clockElement = el}>
          <div className={styles['hours-container']} ref={el => this.hoursContainer = el}>
            <div className={styles['hours']} ref={el => this.hoursElement = el} />
          </div>
          <div className={styles['minutes-container']} ref={el => this.minutesContainer = el}>
            <div className={styles['minutes']} ref={el => this.minutesElement = el} />
          </div>
          <div className={styles['seconds-container']} ref={el => this.secondsContainer = el}>
            <div className={styles['seconds']} ref={el => this.secondsElement = el} />
          </div>
        </div>
        {this.props.options.label && (
          <div className={styles['label']}>{this.props.options.label}</div>
        )}
      </section>
    );
  }
}
