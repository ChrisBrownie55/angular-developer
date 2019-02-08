import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PomodoroComponent } from './pomodoro.component';
import { TimePipe } from './time/time.pipe';

@NgModule({
  declarations: [PomodoroComponent, TimePipe],
  imports: [CommonModule]
})
export class PomodoroModule {}
