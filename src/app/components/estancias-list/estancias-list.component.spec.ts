import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstanciasListComponent } from './estancias-list.component';

describe('EstanciasListComponent', () => {
  let component: EstanciasListComponent;
  let fixture: ComponentFixture<EstanciasListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstanciasListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstanciasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
