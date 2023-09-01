import { Component, ElementRef,ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin,faGithub,faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { faBars,faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { RandomizeLettersService } from '../randomize-letters.service';
import { ResponsiveDesignService } from '../responsive-design.service';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { CarouselService } from '../carousel.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

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
