import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloListComponent } from './desarrollo-list.component';

describe('DesarrolloListComponent', () => {
  let component: DesarrolloListComponent;
  let fixture: ComponentFixture<DesarrolloListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesarrolloListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesarrolloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
