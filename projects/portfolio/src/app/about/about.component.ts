import { Component, ElementRef, ViewChild } from '@angular/core';
import { faGithub, faHackerrank, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { RandomizeLettersService } from '../randomize-letters.service';
import { CarouselService } from '../carousel.service';
import { ResponsiveDesignService } from '../responsive-design.service';
import { CardHoverService } from '../card-hover.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  falinkedin=faLinkedin
fagithub=faGithub
faleetcode=faHackerrank
fabars=faBars
fanavLeftArrow=faArrowLeft
fanavRightArrow=faArrowRight

@ViewChild('h1Element', { static: true }) h1Element!: ElementRef;
@ViewChild('navBarElement', { static: true }) navBarElement!: ElementRef;

constructor (private randomizeLetters:RandomizeLettersService,private responsiveDesign:ResponsiveDesignService,private carouselService:CarouselService,private cardHoverService:CardHoverService){}
onMouseOver(event: MouseEvent) {
  this.randomizeLetters.onMouseOver(event, this.h1Element.nativeElement);
}

ngOnInit(): void {
  this.responsiveDesign.handleWindowResize();
}

toggleNav(): void {
  this.responsiveDesign.handleNavToggle();
}

handleMouseMove(event: MouseEvent): void {
  this.cardHoverService.handleMouseMove(event);
}

}
