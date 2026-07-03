import categoriesRaw from "@/data/categories.json";
import emergencyRaw from "@/data/emergency.json";
import embassyRaw from "@/data/embassy.json";
import visaRaw from "@/data/visa.json";
import airportRaw from "@/data/airport.json";
import transportRaw from "@/data/transport.json";
import citiesRaw from "@/data/cities.json";
import faqRaw from "@/data/faq.json";
import communityRaw from "@/data/community.json";
import festivalsRaw from "@/data/festivals.json";
import cricketRaw from "@/data/cricket.json";
import foodRaw from "@/data/food.json";
import shoppingRaw from "@/data/shopping.json";
import tourismRaw from "@/data/tourism.json";
import healthcareRaw from "@/data/healthcare.json";
import educationRaw from "@/data/education.json";
import workRaw from "@/data/work.json";
import safetyRaw from "@/data/safety.json";
import documentsRaw from "@/data/documents.json";
import insuranceRaw from "@/data/insurance.json";
import currencyRaw from "@/data/currency.json";
import packingRaw from "@/data/packing.json";
import immigrationRaw from "@/data/immigration.json";
import checklistRaw from "@/data/checklist.json";

import cityBrussels from "@/data/city-brussels.json";
import cityAntwerp from "@/data/city-antwerp.json";
import cityGhent from "@/data/city-ghent.json";
import cityBruges from "@/data/city-bruges.json";
import cityLeuven from "@/data/city-leuven.json";
import cityLiege from "@/data/city-liege.json";
import cityNamur from "@/data/city-namur.json";
import cityMechelen from "@/data/city-mechelen.json";

import type {
  DataEnvelope,
  CategoryNavEntry,
  CityIndexEntry,
  CityDetail,
  EmergencyContactItem,
  EmbassyInfoItem,
  VisaInfoItem,
  AirportInfoItem,
  TransportOperatorItem,
  FaqEntryItem,
  CommunityOrgItem,
  FestivalItem,
  CricketClubItem,
  FoodSpotItem,
  ShoppingItem,
  TourismSiteItem,
  TopicItem,
  ChecklistItemEntry,
} from "@/types";

const cityDetailBySlug: Record<string, CityDetail> = {
  brussels: cityBrussels as unknown as CityDetail,
  antwerp: cityAntwerp as unknown as CityDetail,
  ghent: cityGhent as unknown as CityDetail,
  bruges: cityBruges as unknown as CityDetail,
  leuven: cityLeuven as unknown as CityDetail,
  liege: cityLiege as unknown as CityDetail,
  namur: cityNamur as unknown as CityDetail,
  mechelen: cityMechelen as unknown as CityDetail,
};

// --- Categories / navigation backbone ---

export function getCategoryTree(): CategoryNavEntry[] {
  return (categoriesRaw as unknown as DataEnvelope<CategoryNavEntry>).items;
}

export function getTopLevelCategories(): CategoryNavEntry[] {
  return getCategoryTree()
    .filter((c) => c.parentSlug === null)
    .sort((a, b) => a.order - b.order);
}

export function getChildCategories(parentSlug: string): CategoryNavEntry[] {
  return getCategoryTree()
    .filter((c) => c.parentSlug === parentSlug)
    .sort((a, b) => a.order - b.order);
}

export function getCategoryBySlug(slug: string): CategoryNavEntry | undefined {
  return getCategoryTree().find((c) => c.slug === slug);
}

// --- Core reference data ---

export function getEmergencyContacts(): DataEnvelope<EmergencyContactItem> {
  return emergencyRaw as unknown as DataEnvelope<EmergencyContactItem>;
}

export function getEmbassyInfo(): DataEnvelope<EmbassyInfoItem> {
  return embassyRaw as unknown as DataEnvelope<EmbassyInfoItem>;
}

export function getVisaInfo(): DataEnvelope<VisaInfoItem> {
  return visaRaw as unknown as DataEnvelope<VisaInfoItem>;
}

export function getAirportInfo(): DataEnvelope<AirportInfoItem> {
  return airportRaw as unknown as DataEnvelope<AirportInfoItem>;
}

export function getTransportOperators(): DataEnvelope<TransportOperatorItem> {
  return transportRaw as unknown as DataEnvelope<TransportOperatorItem>;
}

// --- Cities ---

export function getCityIndex(): DataEnvelope<CityIndexEntry> {
  return citiesRaw as unknown as DataEnvelope<CityIndexEntry>;
}

export function getAllCitySlugs(): string[] {
  return getCityIndex().items.map((c) => c.slug);
}

export function getCityBySlug(slug: string): CityDetail | undefined {
  return cityDetailBySlug[slug];
}

export function getCityIndexEntry(slug: string): CityIndexEntry | undefined {
  return getCityIndex().items.find((c) => c.slug === slug);
}

// --- FAQ ---

export function getFaqs(): DataEnvelope<FaqEntryItem> {
  return faqRaw as unknown as DataEnvelope<FaqEntryItem>;
}

// --- Community ---

export function getCommunityOrgs(): DataEnvelope<CommunityOrgItem> {
  return communityRaw as unknown as DataEnvelope<CommunityOrgItem>;
}

export function getFestivals(): DataEnvelope<FestivalItem> {
  return festivalsRaw as unknown as DataEnvelope<FestivalItem>;
}

export function getCricketClubs(): DataEnvelope<CricketClubItem> {
  return cricketRaw as unknown as DataEnvelope<CricketClubItem>;
}

// --- Food & Shopping ---

export function getFoodSpots(): DataEnvelope<FoodSpotItem> {
  return foodRaw as unknown as DataEnvelope<FoodSpotItem>;
}

export function getShopping(): DataEnvelope<ShoppingItem> {
  return shoppingRaw as unknown as DataEnvelope<ShoppingItem>;
}

// --- Tourism ---

export function getTourismSites(): DataEnvelope<TourismSiteItem> {
  return tourismRaw as unknown as DataEnvelope<TourismSiteItem>;
}

// --- Generic topic-list sections ---

export function getHealthcareTopics(): DataEnvelope<TopicItem> {
  return healthcareRaw as unknown as DataEnvelope<TopicItem>;
}

export function getEducationTopics(): DataEnvelope<TopicItem> {
  return educationRaw as unknown as DataEnvelope<TopicItem>;
}

export function getWorkTopics(): DataEnvelope<TopicItem> {
  return workRaw as unknown as DataEnvelope<TopicItem>;
}

export function getSafetyTopics(): DataEnvelope<TopicItem> {
  return safetyRaw as unknown as DataEnvelope<TopicItem>;
}

export function getDocumentsTopics(): DataEnvelope<TopicItem> {
  return documentsRaw as unknown as DataEnvelope<TopicItem>;
}

export function getInsuranceTopics(): DataEnvelope<TopicItem> {
  return insuranceRaw as unknown as DataEnvelope<TopicItem>;
}

export function getCurrencyTopics(): DataEnvelope<TopicItem> {
  return currencyRaw as unknown as DataEnvelope<TopicItem>;
}

export function getPackingTopics(): DataEnvelope<TopicItem> {
  return packingRaw as unknown as DataEnvelope<TopicItem>;
}

export function getImmigrationTopics(): DataEnvelope<TopicItem> {
  return immigrationRaw as unknown as DataEnvelope<TopicItem>;
}

// --- Checklist ---

export function getChecklist(): DataEnvelope<ChecklistItemEntry> {
  return checklistRaw as unknown as DataEnvelope<ChecklistItemEntry>;
}
