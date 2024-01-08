import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatenteListComponent } from './patente-list.component';

describe('PatenteListComponent', () => {
  let component: PatenteListComponent;
  let fixture: ComponentFixture<PatenteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatenteListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatenteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
