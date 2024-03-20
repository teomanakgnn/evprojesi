import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {NgIf} from "@angular/common";
import {ListingService} from "../listing.service";
import {Listing} from "../listing.model";

@Component({
  selector: 'app-urun-detaylari',
  templateUrl: './urun-detaylari.component.html',
  styleUrls: ['./urun-detaylari.component.css'],
  standalone: true,
  imports: [RouterModule, NgIf] // Eğer routing kullanılacaksa eklenir
})
export class UrunDetaylariComponent implements OnInit {

  listing: Listing | undefined;
  currentImageIndex = 0;

  constructor(private route: ActivatedRoute,   private listingService: ListingService) { }

  ngOnInit() {
    const listingId = this.route.snapshot.paramMap.get('id');
    if (listingId) {
      this.listing = this.listingService.getListingById(listingId);
    }
  }


}
