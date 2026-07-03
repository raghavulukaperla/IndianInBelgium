export interface EmergencyContactItem {
  id: string;
  name: string;
  number: string;
  category: "police" | "medical" | "fire" | "other";
  description: string;
  availableHours: string;
}

export interface EmbassyOfficeHours {
  day: string;
  open: string;
  close: string;
}

export interface EmbassyInfoItem {
  id: string;
  name: string;
  type: "embassy" | "consulate";
  address: string;
  city: string;
  phone: string[];
  email: string;
  website: string;
  hours: EmbassyOfficeHours[];
  services: string[];
  mapUrl: string;
}

export interface VisaFee {
  amount: number;
  currency: string;
  notes: string;
}

export interface VisaApplicationCenter {
  city: string;
  name: string;
  address: string;
}

export interface VisaStep {
  order: number;
  title: string;
  description: string;
}

export interface VisaInfoItem {
  id: string;
  visaType: string;
  title: string;
  description: string;
  eligibility: string[];
  documents: string[];
  processingTime: string;
  fee: VisaFee;
  validity: string;
  applicationCenters: VisaApplicationCenter[];
  steps: VisaStep[];
}

export interface AirportTransportOption {
  id: string;
  mode: string;
  line: string;
  duration: string;
  price: string;
  priceNote: string;
  frequency: string;
  howTo: string;
}

export interface AirportInfoItem {
  id: string;
  name: string;
  transportOptions: AirportTransportOption[];
  immigrationTips: string[];
  customsRules: string[];
  simCardKiosks: string[];
}

export interface TransportOperatorItem {
  id: string;
  operator: string;
  region: string;
  modes: string[];
  ticketingTypes: string[];
  appLinks: string[];
  tips: string[];
}

/** Generic shape reused across topic-list files: documents, insurance, currency,
 * packing, immigration, healthcare, education, work, safety. */
export interface TopicItem {
  id: string;
  title: string;
  description: string;
  steps?: string[];
  tips?: string[];
  relatedLinks?: { label: string; href: string }[];
  meta?: Record<string, string>;
}

export interface CommunityOrgItem {
  id: string;
  name: string;
  type: "association" | "temple" | "gurudwara" | "church" | "cultural-org";
  city: string;
  address: string;
  description: string;
  contact: string;
  website: string;
  events: string[];
}

export interface FestivalItem {
  id: string;
  name: string;
  month: string;
  description: string;
  typicalCelebrationCities: string[];
  isPublicHoliday: boolean;
}

export interface CricketClubItem {
  id: string;
  clubName: string;
  city: string;
  league: string;
  contact: string;
  groundName: string;
}

export interface FoodSpotItem {
  id: string;
  name: string;
  type: "indian-restaurant" | "grocery" | "spice-shop" | "asian-market";
  city: string;
  address: string;
  cuisine: string[];
  priceRange: string;
  rating: number;
  dietaryOptions: string[];
}

export interface ShoppingItem {
  id: string;
  name: string;
  category: string;
  city: string;
  address: string;
  description: string;
}

export interface TourismSiteItem {
  id: string;
  name: string;
  type:
    | "unesco"
    | "museum"
    | "castle"
    | "park"
    | "chocolate"
    | "beer"
    | "day-trip"
    | "hidden-gem";
  city: string;
  description: string;
  ticketInfo: string;
  website: string;
}

export interface FaqEntryItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface NewsItemEntry {
  id: string;
  title: string;
  summary: string;
  date: string;
  tag: "news";
  url?: string;
}

export interface AlertItemEntry {
  id: string;
  title: string;
  summary: string;
  date: string;
  severity: "info" | "warning" | "critical";
  tag: "alert";
  url?: string;
}

export type UpdateFeedEntry = NewsItemEntry | AlertItemEntry;

export interface ChecklistItemEntry {
  id: string;
  label: string;
  phase: "before-travel" | "arrival" | "first-week";
}
