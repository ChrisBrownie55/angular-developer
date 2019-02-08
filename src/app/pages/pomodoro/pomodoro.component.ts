import { Component, OnInit } from '@angular/core';
import { TimerService } from './timer/timer.service';

@Component({
  selector: 'ngx-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss']
})
export class PomodoroComponent implements OnInit {
  handleFinished = () => {
    /* TODO: play ding sound */
  };

  constructor(private timer: TimerService) {}
  ngOnInit() {
    this.timer.minutes = 25;
    this.timer.onFinished = this.handleFinished;
  }
}
