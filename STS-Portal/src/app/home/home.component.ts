import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { ServicesComponent } from '../services/services.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ServicesComponent, AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
