export interface Listing {
  id: number; // Corresponds to "Evler"
  district: number; // Corresponds to "İlçeler"
  size: number; // Corresponds to "m2"
  roomCount: string; // Corresponds to "Oda Sayısı"
  buildingAge: string; // Corresponds to "Bina Yaşı"
  floor: number; // Corresponds to "Bulunduğu Kat"
  totalFloors: number; // Corresponds to "Kat Sayısı"
  heating: string; // Corresponds to "Isıtma"
  bathroomCount: number; // Corresponds to "Banyo Sayısı"
  hasBalcony: boolean; // Derived from " Balkon"
  hasElevator: boolean; // Derived from "Asansör"
  hasParking: boolean; // Derived from "Otopark"
  isFurnished: boolean; // Derived from "Eşyalı"
  isInSite: boolean; // Derived from "Site İçerisinde"
  occupancyStatus: string; // Corresponds to "Kullanım Durumu"
  price: string; // Corresponds to "Fiyat"
  link: string; // Corresponds to "Link"
}