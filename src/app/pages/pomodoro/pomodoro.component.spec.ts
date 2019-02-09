import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodoroComponent } from './pomodoro.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('PomodoroComponent', () => {
  let component: PomodoroComponent;
  let fixture: ComponentFixture<PomodoroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PomodoroComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomodoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should allow you to change the time', () => {
    const minutesInput: DebugElement = fixture.debugElement.query(
      By.css('.pomodoro__form input[name="minutes"]')
    );
    const secondsInput: DebugElement = fixture.debugElement.query(
      By.css('.pomodoro__form input[name="seconds"]')
    );
    const submitButton: DebugElement = fixture.debugElement.query(
      By.css('.pomodoro__form button[type="submit"]')
    );

    minutesInput.triggerEventHandler('input', { value: 15 });
    secondsInput.triggerEventHandler('input', { value: 30 });
    submitButton.triggerEventHandler('click', {});

    fixture.detectChanges();

    expect(
      fixture.debugElement.query(By.css('pomodoro__header--display'))
        .nativeElement.innerText
    ).toBe('15  30');
  });
});
