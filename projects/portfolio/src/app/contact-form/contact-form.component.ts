import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { faLinkedin, faGithub, faHackerrank } from '@fortawesome/free-brands-svg-icons';
import { faBars, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { RandomizeLettersService } from '../randomize-letters.service';
import { ResponsiveDesignService } from '../responsive-design.service';

function alphabetsOnlyValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const alphabetsOnlyRegex = /^[A-Za-z]+$/;
    const isValid = alphabetsOnlyRegex.test(control.value);
    return isValid ? null : { alphabetsOnly: { message: 'Name should only contain alphabets.' } };
  };
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  falinkedin = faLinkedin
  fagithub = faGithub
  faleetcode = faHackerrank
  fabars = faBars
  fanavLeftArrow = faArrowLeft
  fanavRightArrow = faArrowRight

  @ViewChild('h1Element', { static: true }) h1Element!: ElementRef;
  @ViewChild('navBarElement', { static: true }) navBarElement!: ElementRef;
  contactForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private randomizeLetters: RandomizeLettersService, private responsiveDesign: ResponsiveDesignService) { }

  onMouseOver(event: MouseEvent) {
    this.randomizeLetters.onMouseOver(event, this.h1Element.nativeElement);
  }
  toggleNav(): void {
    this.responsiveDesign.handleNavToggle();
  }
  ngOnInit() {
    this.responsiveDesign.handleWindowResize();
    this.contactForm = this.formBuilder.group({
      fullName: ['', [Validators.required, alphabetsOnlyValidator()]],
      email: ['', [Validators.required, Validators.email]],
      comment: ['', Validators.required]
    });
  }
  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }
}

