import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWebComponent } from './app-web.component';

describe('AppWebComponent', () => {
  let component: AppWebComponent;
  let fixture: ComponentFixture<AppWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
