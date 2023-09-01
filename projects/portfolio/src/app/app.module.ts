import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './about/about.component';
import { HeroComponent } from './hero/hero.component';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResponsiveDesignService } from './responsive-design.service';
import { CarouselService } from './carousel.service';
import { RandomizeLettersService } from './randomize-letters.service';
import { CardHoverService } from './card-hover.service';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    AboutComponent,
    HeroComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule
  ],
  providers: [ResponsiveDesignService,CarouselService,RandomizeLettersService,CardHoverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
