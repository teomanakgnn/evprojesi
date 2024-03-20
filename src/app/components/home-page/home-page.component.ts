import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatCardActions,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    RouterLink,
    MatCardImage,
    MatButton
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  properties = [
    { id: 1, title: 'Güzel Ev', price: '1.000.000 TL', description: 'Harika manzarası olan bir ev.', image: 'path/to/image' },
    // Diğer evler...
  ];

}
