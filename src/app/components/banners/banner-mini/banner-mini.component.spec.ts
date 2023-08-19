import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMiniComponent } from './banner-mini.component';

describe('BannerMiniComponent', () => {
  let component: BannerMiniComponent;
  let fixture: ComponentFixture<BannerMiniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerMiniComponent]
    });
    fixture = TestBed.createComponent(BannerMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
