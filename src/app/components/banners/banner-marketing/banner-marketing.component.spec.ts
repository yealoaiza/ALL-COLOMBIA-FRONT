import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMarketingComponent } from './banner-marketing.component';

describe('BannerMarketingComponent', () => {
  let component: BannerMarketingComponent;
  let fixture: ComponentFixture<BannerMarketingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerMarketingComponent]
    });
    fixture = TestBed.createComponent(BannerMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
