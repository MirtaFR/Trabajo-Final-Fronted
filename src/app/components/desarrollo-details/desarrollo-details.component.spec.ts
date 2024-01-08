import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloDetailsComponent } from './desarrollo-details.component';

describe('DesarrolloDetailsComponent', () => {
  let component: DesarrolloDetailsComponent;
  let fixture: ComponentFixture<DesarrolloDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesarrolloDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesarrolloDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
