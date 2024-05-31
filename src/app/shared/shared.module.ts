import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CardArrivalsComponent } from './components/card-arrivals/card-arrivals.component';
import { ArrivalsFeatureCardComponent } from './components/arrivals-feature-card/arrivals-feature-card.component';
import { SectionThreeComponent } from './components/section-three/section-three.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    HomePageComponent,
    CardArrivalsComponent,
    ArrivalsFeatureCardComponent,
    SectionThreeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    HomePageComponent,
    CardArrivalsComponent,
    ArrivalsFeatureCardComponent,
    SectionThreeComponent
  ]
})
export class SharedModule { }
