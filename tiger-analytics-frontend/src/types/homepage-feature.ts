import { UploadFile } from "./index";

// FAQ section component types
export interface ComponentHomepageFeatureSection {
  __typename: "ComponentHomepageFaqSection";
  image?: UploadFile;
  content: string;
  sub_heading: string;
  description: string;
}

// Props types for FAQ component
export interface FeatureSectionProps {
  data: {
    image?: UploadFile;
    content: string;
    sub_heading: string;
    description: string;
  };
}
