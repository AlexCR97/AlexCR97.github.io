import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ParticlesBgComponent } from './components/particles-bg/particles-bg.component';
import { AutoSlideImagesComponent } from './components/auto-slide-images/auto-slide-images.component';
import { WorkExpCardComponent } from './components/work-exp-card/work-exp-card.component';
import { DotsComponent } from './components/dots/dots.component';
import { TechStackCardComponent } from './components/tech-stack-card/tech-stack-card.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FabComponent } from './components/fab/fab.component';
import { FadeAnimationComponent } from './components/fade-animation/fade-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    ParticlesBgComponent,
    AutoSlideImagesComponent,
    WorkExpCardComponent,
    DotsComponent,
    TechStackCardComponent,
    ProjectCardComponent,
    CarouselComponent,
    FabComponent,
    FadeAnimationComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
