import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomizeLettersService {

  constructor() { }

 private letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 private interval=null;


onMouseOver(event:MouseEvent, h1Element: HTMLHeadingElement) {
  
  let iteration = 0;
  const h1 = h1Element

  clearInterval(this.interval);

  this.interval = setInterval(() => {
    h1.innerText = h1.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return h1.dataset['value'][index];
        }

        return this.letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= h1.dataset['value'].length) {
      clearInterval(this.interval);
    }

    iteration += 1 / 3;
  }, 30);
}
}
