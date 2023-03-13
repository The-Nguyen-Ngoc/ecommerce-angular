import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// component
import { HomeComponent } from './page/home/home.component';
import { HeaderComponentComponent } from './page/header-component/header-component.component';
import { IntroComponentComponent } from './page/home/intro-component/intro-component.component';
import { FooterComponentComponent } from './page/home/footer-component/footer-component.component';
import { PageComponentComponent } from './page/page-component.component';
import { ProductsComponent } from './page/products-component/products-component.component';
import { ContactsComponent } from './page/contacts/contacts.component';
import { BannerComponentComponent } from './page/home/banner-component/banner-component.component';
import { TrendingComponentComponent } from './page/home/trending-component/trending-component.component';
import { SellingComponentComponent } from './page/home/selling-component/selling-component.component';
import { UuDaiComponentComponent } from './page/home/uu-dai-component/uu-dai-component.component';
import { SocialComponentComponent } from './page/home/social-component/social-component.component';
import { ImportComponentComponent } from './page/import-component/import-component.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponentComponent,
    IntroComponentComponent,
    FooterComponentComponent,
    PageComponentComponent,
    ProductsComponent,
    ContactsComponent,
    BannerComponentComponent,
    TrendingComponentComponent,
    SellingComponentComponent,
    UuDaiComponentComponent,
    SocialComponentComponent,
    ImportComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
