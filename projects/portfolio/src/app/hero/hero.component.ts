import { Component, ElementRef, ViewChild } from '@angular/core';
import { faLinkedin, faGithub, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { faBars, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CarouselService } from '../carousel.service';
import { RandomizeLettersService } from '../randomize-letters.service';
import { ResponsiveDesignService } from '../responsive-design.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css','./hero.nav.css','./hero.grid.css','./hero.heading.css','./hero.margin-utility.css','./hero.media.css','./hero.media2.css','./hero.media3.css','./hero.media4.css','./hero.mobilemedia.css','./hero.rest-utility.css']
})
export class HeroComponent {

  falinkedin=faLinkedin
fagithub=faGithub
faleetcode=faHackerrank
fabars=faBars
fanavLeftArrow=faArrowLeft
fanavRightArrow=faArrowRight

@ViewChild('h1Element', { static: true }) h1Element!: ElementRef;
@ViewChild('navBarElement', { static: true }) navBarElement!: ElementRef;

constructor (private randomizeLetters:RandomizeLettersService,private responsiveDesign:ResponsiveDesignService,private carouselService:CarouselService){}
onMouseOver(event: MouseEvent) {
  this.randomizeLetters.onMouseOver(event, this.h1Element.nativeElement);
}

ngOnInit(): void {
  this.responsiveDesign.handleWindowResize();
}

toggleNav(): void {
  this.responsiveDesign.handleNavToggle();
}
handleLeftClick(){
  this.carouselService.handleLeftClick();
}
handleRightClick(){
  this.carouselService.handleRightClick();
}
  
 


}
