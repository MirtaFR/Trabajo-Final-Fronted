import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperacionPasswordDetailsComponent } from './recuperacion-password-details.component';

describe('RecuperacionPasswordDetailsComponent', () => {
  let component: RecuperacionPasswordDetailsComponent;
  let fixture: ComponentFixture<RecuperacionPasswordDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperacionPasswordDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperacionPasswordDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
