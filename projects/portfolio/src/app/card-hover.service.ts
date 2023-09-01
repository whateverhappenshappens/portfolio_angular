import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardHoverService {

  constructor() { }

  handleMouseMove(event: MouseEvent): void {
    const cards = document.getElementsByClassName('about-experience-card__wrapper');

    for (const card of Array.from(cards)) {
      const rect = (card as HTMLElement).getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
      (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
    }
  }
}
