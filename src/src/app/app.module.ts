import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { ParticlesBgComponent } from './components/particles-bg/particles-bg.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    ParticlesBgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
