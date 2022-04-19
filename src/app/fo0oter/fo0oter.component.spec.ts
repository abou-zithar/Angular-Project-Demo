import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fo0oterComponent } from './fo0oter.component';

describe('Fo0oterComponent', () => {
  let component: Fo0oterComponent;
  let fixture: ComponentFixture<Fo0oterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fo0oterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Fo0oterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
