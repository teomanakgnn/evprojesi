import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardImage} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatCardImage,
    MatButton,
    RouterLink,
    NgForOf,
    MatExpansionPanelTitle,
    MatExpansionPanelHeader,
    MatExpansionPanel,
    MatAccordion
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})

export class ProductListComponent {
  images: string[] = [
    'https://prefabrikevfiyatlari.com/cdn/shop/products/105m2_934x700.jpg?v=1632922782',
    'https://www.trendyapiprefabrik.com/upload/100-m2-21-cift-katli-dubleks-prefabrik-ev-2-10837.jpg',
    // diğer resimlerinizin yolları
  ];
  currentImageIndex = 0;

  previousImage(): void {
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  nextImage(): void {
    if (this.currentImageIndex < this.images.length - 1) {
      this.currentImageIndex++;
    }
  }
}
