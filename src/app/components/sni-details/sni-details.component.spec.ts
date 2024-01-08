import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SniDetailsComponent } from './sni-details.component';

describe('SniDetailsComponent', () => {
  let component: SniDetailsComponent;
  let fixture: ComponentFixture<SniDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SniDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SniDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
