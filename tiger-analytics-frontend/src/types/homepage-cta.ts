import { CtaButton, UploadFile } from "./index";

// CTA section component types
export interface ComponentHomepageCtaSection {
  __typename: "ComponentHomepageCtaSection";
  id: string;
  cta_heading: string;
  cta_btn: CtaButton;
  cta_bg_image: UploadFile;
}

// Props types for CTA component
export interface CtaSectionProps {
  data: {
    id: string;
    cta_heading: string;
    cta_btn: CtaButton;
    cta_bg_image: UploadFile;
  };
}
