import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPasswordDetailsComponent } from './nueva-password-details.component';

describe('NuevaPasswordDetailsComponent', () => {
  let component: NuevaPasswordDetailsComponent;
  let fixture: ComponentFixture<NuevaPasswordDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaPasswordDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaPasswordDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
