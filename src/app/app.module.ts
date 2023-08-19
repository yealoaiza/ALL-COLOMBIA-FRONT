import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { HeaderComponent } from './components/home/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SalesComponent } from './components/offers/sales/sales.component';
import { BodyHomeComponent } from './components/core-bodys/body-home/body-home.component';
import { BannerMiniComponent } from './components/banners/banner-mini/banner-mini.component';
import { BannerMarketingComponent } from './components/banners/banner-marketing/banner-marketing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FooterComponent,
    HeaderComponent,
    CategoriesComponent,
    SalesComponent,
    BodyHomeComponent,
    BannerMiniComponent,
    BannerMarketingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
