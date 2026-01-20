import { UploadFile } from "./index";

// Sponsor item type
export interface Sponsor {
  logo: UploadFile;
  name: string;
}

// Sponsors section component types
export interface ComponentHomepageSponsors {
  __typename: "ComponentHomepageSponsors";
  sponsors: Sponsor[];
}

// Props types for sponsors component
export interface SponsorsSectionProps {
  sponsors: Sponsor[];
}
