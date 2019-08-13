import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { GameInfoComponent } from './components/game-info/game-info.component';
import { LogoComponent } from './components/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    NavbarComponent,
    HamburgerComponent,
    MobileMenuComponent,
    SocialMediaComponent,
    GameInfoComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
