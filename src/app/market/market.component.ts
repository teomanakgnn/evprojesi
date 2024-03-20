import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterModule} from "@angular/router";
import {NgForOf} from "@angular/common";
import {ListingService} from "../listing.service";
import {Listing} from "../listing.model";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css'],
  standalone: true,
  imports: [RouterModule, NgForOf] // Eğer routing kullanılacaksa eklenir
})
export class MarketComponent implements OnInit {

  listings: Listing[] = [];




  constructor(private listingService: ListingService) { }

  ngOnInit(): void {
    this.listings = this.listingService.getAllListings();
  }

}
