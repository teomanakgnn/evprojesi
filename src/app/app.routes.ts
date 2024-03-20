import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MarketComponent } from './market/market.component';
import { UrunDetaylariComponent } from './urun-detaylari/urun-detaylari.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'market', component: MarketComponent },
  { path: 'urun-detaylari/:id', component: UrunDetaylariComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
