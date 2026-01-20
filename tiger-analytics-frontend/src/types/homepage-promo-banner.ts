import { CtaButton } from "./index";

// Promo banner section component types
export interface ComponentHomepagePromoBanner {
  __typename: "ComponentHomepagePromoBanner";
  title: string;
  description: string;
  line_1: string;
  line_2: string;
  line_3: string;
  cta: CtaButton;
}

// Props types for promo banner component
export interface PromoBannerSectionProps {
  data: {
    title: string;
    description: string;
    line_1: string;
    line_2: string;
    line_3: string;
    cta: CtaButton;
  };
}
