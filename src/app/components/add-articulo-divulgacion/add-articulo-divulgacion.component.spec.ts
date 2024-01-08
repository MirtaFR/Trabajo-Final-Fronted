import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticuloDivulgacionComponent } from './add-articulo-divulgacion.component';

describe('AddArticuloDivulgacionComponent', () => {
  let component: AddArticuloDivulgacionComponent;
  let fixture: ComponentFixture<AddArticuloDivulgacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArticuloDivulgacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddArticuloDivulgacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
