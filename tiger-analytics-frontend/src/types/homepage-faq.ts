import { UploadFile } from "./index";

// FAQ Accordion item types
export interface FaqAccordion {
  id: string;
  question: string;
  answer: string; // This should be rich text, but using string for now
}

// FAQ section component types
export interface ComponentHomepageFaqSection {
  __typename: "ComponentHomepageFaqSection";
  background_image?: UploadFile;
  heading: string;
  description: string;
  faqs: FaqAccordion[];
}

// Props types for FAQ component
export interface FaqSectionProps {
  data: {
    background_image?: UploadFile;
    heading: string;
    description: string;
    faqs: FaqAccordion[];
  };
}
