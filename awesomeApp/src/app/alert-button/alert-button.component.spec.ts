import { DebugElement } from '@angular/core';
import { waitForAsync, ComponentFixture, TestBed} from '@angular/core/testing';

import { AlertButtonComponent } from './alert-button.component';

describe ('AlertButoonComponent', () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;
  let de: DebugElement;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [AlertButtonComponent],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    fixture.detectChanges();
  });

  it ('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should show a message `you have been warned`', () => {
    expect(component.content).toBe('you have been warned');
  });

  it ('should have a message with `warn`', () => {
    expect(component.content).toContain('warn');
  });

  it('should have an severity level of 423', () => {
    expect(component.severity).toBe(423);
  });
})



