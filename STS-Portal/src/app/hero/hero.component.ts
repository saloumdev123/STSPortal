import { Component } from '@angular/core';
// import Rellax from 'rellax';
// import Rellax from 'rellax';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  data: Date = new Date();
  focus: any;
  focus1: any;

  constructor() {}

  // ngOnInit() {
  //   var rellaxHeader = new Rellax('.rellax-header');

  //   var body = document.getElementsByTagName('body')[0];
  //   body.classList.add('landing-page');
  //   var navbar = document.getElementsByTagName('nav')[0];
  //   navbar.classList.add('navbar-transparent');
  // }
  // ngOnDestroy() {
  //   var body = document.getElementsByTagName('body')[0];
  //   body.classList.remove('landing-page');
  //   var navbar = document.getElementsByTagName('nav')[0];
  //   navbar.classList.remove('navbar-transparent');
  // }
}
