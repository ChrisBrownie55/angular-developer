import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PomodoroComponent } from './pomodoro.component';
import { TimePipe } from './time/time.pipe';
import { ThemeModule } from '../../@theme/theme.module';
import { NbDialogModule } from '@nebular/theme';

@NgModule({
  declarations: [PomodoroComponent, TimePipe],
  imports: [CommonModule, ThemeModule, NbDialogModule.forRoot()]
})
export class PomodoroModule {}
