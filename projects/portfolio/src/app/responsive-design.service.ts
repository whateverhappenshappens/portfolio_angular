import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveDesignService {
  private nav: HTMLElement
  showAboutResume: boolean = false;
  constructor() {
    this.nav = document.querySelector("nav");
  }
  
  handleNavToggle() {
    const nav = document.querySelector("nav");
    nav.setAttribute('data-transitionable', 'true');
    const toggled = nav.getAttribute('data-toggled') === 'true' ? 'false' : 'true';
    nav.setAttribute('data-toggled', toggled);
  }

  // handleNavToggle(): void {
  //   if (this.nav) {
  //     this.nav.dataset.transitionable = "true";
  //     this.nav.dataset.toggled = this.nav.dataset.toggled === "true" ? "false" : "true";
  //   }
  // }
  // handleNavToggle() {
  //   const navBarElement = document.querySelector('nav');
  //   const toggled = navBarElement.getAttribute('data-toggled') === 'true';
  //   navBarElement.setAttribute('data-toggled', toggled ? 'false' : 'true');
  //   this.showAboutResume = !this.showAboutResume;
  // }
  handleWindowResize(): void {
    const mediaQuery = window.matchMedia("(max-width:991px)");
    mediaQuery.onchange = () => {
      if (this.nav) {
        this.nav.dataset.transitionable = "false";
        this.nav.dataset.toggled = "false";
      }
    };

  }
}
