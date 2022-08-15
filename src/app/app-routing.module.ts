import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/About-us/about/about.component';
import { PrivacyPolicyComponent } from './components/pages/About-us/privacy-policy/privacy-policy.component';
import { RefundReturnPolicyComponent } from './components/pages/About-us/refund-return-policy/refund-return-policy.component';
import { TermsAndConditionComponent } from './components/pages/About-us/terms-and-condition/terms-and-condition.component';
import { HomeComponent } from './components/pages/Home/home/home.component';
import { MainHomeComponent } from './components/pages/Home/main-home/main-home.component';
import { OfferComponent } from './components/pages/offer/offer.component';

const routes: Routes = [
  {path:'', component:MainHomeComponent},
  {path:'about', component:AboutComponent},
  {path:'privacy-policy', component:PrivacyPolicyComponent},
  {path:'terms-conditions', component:TermsAndConditionComponent},
  {path:'refund-and-return-policy', component:RefundReturnPolicyComponent},
  {path:'domain-hosting-combo-offer', component:OfferComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
