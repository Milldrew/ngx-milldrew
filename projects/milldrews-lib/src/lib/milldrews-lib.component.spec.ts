import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilldrewsLibComponent } from './milldrews-lib.component';

describe('MilldrewsLibComponent', () => {
  let component: MilldrewsLibComponent;
  let fixture: ComponentFixture<MilldrewsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilldrewsLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilldrewsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
