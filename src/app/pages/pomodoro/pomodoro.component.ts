import { Component, OnInit } from '@angular/core';
import { TimerService } from './timer/timer.service';

@Component({
  selector: 'ngx-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent implements OnInit {
  break: number = 0;
  goal: number = 0;

  handleFinished: Function = () => {
    /* TODO: play ding sound; display modal instead of alert */
    this.break++;
    alert('Your timer is finished! Go take a five minute break');
    setTimeout(() => {
      if (this.break === 4) {
        this.goal++;
        this.break = 0;
      }
      alert('Time to get back to work!');
    }, 1000 * 60 * 5);
  };

  constructor(private timer: TimerService) {}
  ngOnInit() {
    this.timer.minutes = 25;
    this.timer.onFinished = this.handleFinished;
  }
}
