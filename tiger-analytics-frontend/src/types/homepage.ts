import { ComponentHomepageHero } from "./homepage-hero";
import { ComponentHomepageSponsors } from "./homepage-sponsors";
import { ComponentHomepageHighlight } from "./homepage-highlight";
import { ComponentHomepageTitleBlock } from "./homepage-title-block";
import { ComponentHomepageFaqSection } from "./homepage-faq";
import { ComponentHomepageFeatureSection } from "./homepage-feature";
import { ComponentHomepageCtaSection } from "./homepage-cta";
import { ComponentHomepagePromoBanner } from "./homepage-promo-banner";

// Union type for all homepage sections
export type HomepageSection = 
  | ComponentHomepageHero 
  | ComponentHomepageSponsors 
  | ComponentHomepageHighlight 
  | ComponentHomepageTitleBlock
  | ComponentHomepageFaqSection
  | ComponentHomepageFeatureSection
  | ComponentHomepageCtaSection
  | ComponentHomepagePromoBanner;

// Main Homepage type
export interface Homepage {
  __typename: "Homepage";
  title: string;
  sections: HomepageSection[];
}

// GraphQL response type for homepage query
export interface HomepageResponse {
  homepage: Homepage;
}
