import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SniListComponent } from './sni-list.component';

describe('SniListComponent', () => {
  let component: SniListComponent;
  let fixture: ComponentFixture<SniListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SniListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SniListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
