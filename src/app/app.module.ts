import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// component
import { HomeComponent } from './page/home/home.component';
import { HeaderComponentComponent } from './page/header-component/header-component.component';
import { IntroComponentComponent } from './page/home/intro-component/intro-component.component';
import { FeatureComponentComponent } from './page/home/feature-component/feature-component.component';
import { FooterComponentComponent } from './page/home/footer-component/footer-component.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponentComponent,
    IntroComponentComponent,
    FeatureComponentComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
