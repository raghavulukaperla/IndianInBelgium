export interface DataEnvelope<T> {
  title: string;
  description: string;
  lastUpdated: string;
  category: string;
  isSampleData: boolean;
  items: T[];
}
