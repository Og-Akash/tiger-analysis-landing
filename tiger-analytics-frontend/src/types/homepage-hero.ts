import { CtaButton, UploadFile } from "./index";

export interface ComponentHomepageHero {
  __typename: "ComponentHomepageHero";
  title: string;
  subTitle: string;
  heroImage: UploadFile;
  cta_btns: CtaButton[];
}

// Props types for hero component
export interface HeroSectionProps {
  title: string;
  subTitle: string;
  heroImage: UploadFile;
  cta_btns: CtaButton[];
}
