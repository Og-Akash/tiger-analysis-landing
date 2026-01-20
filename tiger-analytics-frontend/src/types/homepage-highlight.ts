import { CtaButton, UploadFile } from "./index";

// Highlight section component types
export interface ComponentHomepageHighlight {
  __typename: "ComponentHomepageHighlight";
  title: string;
  description: string;
  content: string;
  cta_btn: CtaButton;
  highlight_image: UploadFile;
}

// Props types for highlight component
export interface HighlightSectionProps {
  title: string;
  description: string;
  content: string;
  cta_btn: CtaButton;
  highlight_image: UploadFile;
}
