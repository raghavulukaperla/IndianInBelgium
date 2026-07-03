export interface CityIndexEntry {
  id: string;
  slug: string;
  name: string;
  region: string;
  isCapital: boolean;
  heroImage?: string;
  shortDescription: string;
  population: string;
  hasFullProfile: boolean;
}

export interface CityAttraction {
  id: string;
  name: string;
  description: string;
  category: string;
}

export interface CityTransportMode {
  mode: string;
  description: string;
  tips: string[];
}

export interface CityHotel {
  id: string;
  name: string;
  area: string;
  priceRange: string;
  notes: string;
}

export interface CityFoodSpot {
  id: string;
  name: string;
  cuisine: string;
  notes: string;
}

export interface CityEmergencyPointer {
  name: string;
  number: string;
  note?: string;
}

export interface CityOverview {
  description: string;
  population: string;
  foundedNote?: string;
  whyVisit: string[];
}

export interface CityDetail {
  slug: string;
  name: string;
  region: string;
  lastUpdated: string;
  isSampleData: boolean;
  overview: CityOverview;
  attractions: CityAttraction[];
  transportation: CityTransportMode[];
  hotels: CityHotel[];
  foodSpots: CityFoodSpot[];
  emergency: CityEmergencyPointer[];
  tips: string[];
}
