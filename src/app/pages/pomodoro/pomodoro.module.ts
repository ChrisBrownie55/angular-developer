import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PomodoroComponent } from './pomodoro.component';
import { TimePipe } from './time/time.pipe';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  declarations: [PomodoroComponent, TimePipe],
  imports: [CommonModule, ThemeModule]
})
export class PomodoroModule {}
