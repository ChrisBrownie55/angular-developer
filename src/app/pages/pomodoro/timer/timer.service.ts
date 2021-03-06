import { Injectable } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  public minutes: number = 0;
  public seconds: number = 0;

  private _playing: boolean = false;
  /* I'm using getters and setters so that I can sub & unsub from the timer */
  public get playing(): boolean {
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

  private timer: Observable<number> = interval(1000);
  private subscription: Subscription;
  private subscribe: Function = () => {
    this.subscription = this.timer.subscribe(() => {
      /* decrements the time */
      if (!this.seconds) {
        if (!this.minutes) {
          this.playing = false;
          if (this.onFinished) {
            console.log(this.onFinished);
            this.onFinished();
          }
        } else {
          this.seconds = 59;
          this.minutes--;
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
