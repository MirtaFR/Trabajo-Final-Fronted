import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaPasswordListComponent } from './nueva-password-list.component';

describe('NuevaPasswordListComponent', () => {
  let component: NuevaPasswordListComponent;
  let fixture: ComponentFixture<NuevaPasswordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaPasswordListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaPasswordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
