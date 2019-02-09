import { Component, OnInit, ViewChild } from '@angular/core';
import { TimerService } from './timer/timer.service';
import { FormGroup, FormControl } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';

class Timer extends TimerService {}
class Break extends TimerService {}

@Component({
  selector: 'ngx-pomodoro',
  templateUrl: './pomodoro.component.html',
  styleUrls: ['./pomodoro.component.scss'],
  providers: [Timer, Break]
})
export class PomodoroComponent implements OnInit {
  break: number = 0;
  goal: number = 0;

  @ViewChild('breakDialog') breakDialog;

  handleFinished: Function = () => {
    console.log('opening break dialog');
    /* TODO: play ding sound */
    this.break++;
    this.breakTimer.seconds = 0;
    this.breakTimer.minutes = this.break === 4 ? 15 : 5;
    this.breakTimer.playing = true;

    this.dialogService.open(this.breakDialog, { closeOnBackdropClick: false });
    // .onClose.subscribe();
  };

  handleBreakFinished: Function = () => {
    /* Play break over ding sound */
    if (this.break === 4) {
      this.goal++;
      this.break = 0;
    }
  };

  timeForm: FormGroup = new FormGroup({
    minutes: new FormControl(25),
    seconds: new FormControl(0)
  });

  handleTimeChange: Function = () => {
    this.timer.minutes = this.timeForm.value.minutes;
    this.timer.seconds = this.timeForm.value.seconds;
  };

  get breakOver() {
    return !this.breakTimer.seconds && !this.breakTimer.minutes;
  }

  constructor(
    private timer: Timer,
    private breakTimer: Break,
    private dialogService: NbDialogService
  ) {}
  ngOnInit() {
    this.timer.minutes = 25;
    this.timer.onFinished = this.handleFinished;
    this.breakTimer.onFinished = this.handleBreakFinished;
    console.log('Is this.timer equal to this.breakTimer?');
    console.log(this.timer === this.breakTimer ? 'Yes' : 'No');
  }
}
