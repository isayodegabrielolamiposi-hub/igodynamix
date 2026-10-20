export type ServiceCategory =
  | 'Book Promotion and Marketing'
  | 'Author Branding and Social Media'
  | 'Book Cover and Promotional Design'
  | 'Reader Discovery and Audience Growth'
  | 'Book Launch Campaigns'
  | 'Book Trailer Production'
  | 'Book Market Research';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  tagline: string;
  benefitStatement: string;
  shortDesc: string;
  longDesc: string;
  deliverables: string[];
  workflow: string[];
  suitableFor: string;
  timeline: string;
  isResearchNotice?: boolean;
}

export type PortfolioCategory =
  | 'All'
  | 'Book Promotional Design'
  | 'Author Branding'
  | 'Book Trailers'
  | 'Book Launch Campaigns'
  | 'Social Media Campaigns'
  | 'Market Research Samples';

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'All'>;
  genre: string;
  clientType: string;
  summary: string;
  challenge: string;
  strategy: string;
  deliverables: string[];
  outcomesNote: string;
  image: string;
  tags: string[];
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  authorName: string;
  authorRole: string;
  summary: string;
  keyTakeaways: string[];
  paragraphs: {
    heading: string;
    body: string;
  }[];
}

export interface PackageItem {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  bestFor: string;
  deliverables: string[];
  timeline: string;
  revisionPolicy: string;
  exclusions: string[];
  recommendedAddons: string[];
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  country: string;
  website?: string;
  bookTitle?: string;
  genre: string;
  publicationStatus: string;
  services: string[];
  targetAudience: string;
  projectObjectives: string;
  budgetRange?: string;
  preferredTimeline: string;
  additionalDetails: string;
  consent: boolean;
  honeypot?: string;
}

export interface StoredInquiry extends InquiryFormData {
  id: string;
  submittedAt: string;
}
