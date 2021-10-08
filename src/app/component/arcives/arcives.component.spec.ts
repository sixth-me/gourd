import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcivesComponent } from './arcives.component';

describe('ArcivesComponent', () => {
  let component: ArcivesComponent;
  let fixture: ComponentFixture<ArcivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArcivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
