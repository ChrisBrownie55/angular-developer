import { Injectable } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  public minutes: number = 0;
  public seconds: number = 0;

  private _playing = false;
  /* I'm using getters and setters so that I can sub & unsub from the timer */
  public get playing() {
    return this._playing;
  }
  public set playing(value) {
    if (value && !this.playing) {
      this.subscribe();
    } else if (!value && this.playing) {
      this.unsubscribe();
    }
    this._playing = value;
  }

  public onFinished: Function;

  private timer = interval(1000);
  private subscription: Subscription;
  private subscribe = () => {
    this.subscription = this.timer.subscribe(() => {
      /* decrements the time */
      if (this.seconds === 0) {
        this.minutes--;
        if (this.minutes) {
          this.seconds = 59;
        } else {
          this.unsubscribe();
          if (this.onFinished) {
            this.onFinished();
          }
        }
      } else {
        this.seconds--;
      }
    });
  };
  private unsubscribe = () => {
    this.subscription.unsubscribe();
  };
}
