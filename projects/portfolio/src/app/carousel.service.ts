import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  activeIndex=0;
  slides:HTMLCollectionOf<Element>;
  constructor() { 
    this.slides=document.getElementsByTagName('article');
  }

  handleLeftClick():void{
    const nextIndex=this.activeIndex -1 >=0 ?this.activeIndex - 1 : this.slides.length - 1;

    const currentSlide=document.querySelector(`[data-index="${this.activeIndex}"]`) as HTMLElement;
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`) as HTMLElement;
    currentSlide.dataset.status = 'after';
    nextSlide.dataset.status = 'becoming-active-from-before';

    setTimeout(() => {
      nextSlide.dataset.status = 'active';
      this.activeIndex = nextIndex;
    });
  }
  handleRightClick(): void {
    const nextIndex = this.activeIndex + 1 <= this.slides.length - 1 ? this.activeIndex + 1 : 0;

    const currentSlide = document.querySelector(`[data-index="${this.activeIndex}"]`) as HTMLElement;
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`) as HTMLElement;

    currentSlide.dataset.status = 'before';
    nextSlide.dataset.status = 'becoming-active-from-after';

    setTimeout(() => {
      nextSlide.dataset.status = 'active';
      this.activeIndex = nextIndex;
    });
  }
}
