import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layouts/Header/header/header.component';
import { HomeComponent } from './components/pages/Home/home/home.component';
import { FooterComponent } from './components/layouts/Footer/footer/footer.component';
import { ContactComponent } from './components/pages/Contact/contact/contact.component';
import { AboutComponent } from './components/pages/About/about/about.component';
import { BusinessComponent } from './components/pages/Business/business/business.component';
import { HeroTwoComponent } from './components/pages/hero-two/hero-two.component';
import { MainHomeComponent } from './components/pages/Home/main-home/main-home.component';
import { PrivacyPolicyComponent } from './components/pages/About-us/privacy-policy/privacy-policy.component';
import { TermsAndConditionComponent } from './components/pages/About-us/terms-and-condition/terms-and-condition.component';
import { RefundReturnPolicyComponent } from './components/pages/About-us/refund-return-policy/refund-return-policy.component';
import { OfferComponent } from './components/pages/offer/offer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    BusinessComponent,
    HeroTwoComponent,
    MainHomeComponent,
    PrivacyPolicyComponent,
    TermsAndConditionComponent,
    RefundReturnPolicyComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
