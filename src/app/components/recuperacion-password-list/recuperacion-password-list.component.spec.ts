import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperacionPasswordListComponent } from './recuperacion-password-list.component';

describe('RecuperacionPasswordListComponent', () => {
  let component: RecuperacionPasswordListComponent;
  let fixture: ComponentFixture<RecuperacionPasswordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperacionPasswordListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperacionPasswordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
