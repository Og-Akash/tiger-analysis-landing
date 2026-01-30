import { CtaButton, UploadFile } from "./index";

export interface HeroImageSlider {
  slider_text: string;
  slider_image: UploadFile;
}

export interface HeroSlider {
  title: string;
  sub_title: string;
  hero_image_slider: HeroImageSlider[];
}

export interface ComponentHomepageHero {
  __typename: "ComponentHomepageHero";
  title: string;
  subTitle: string;
  heroImage: UploadFile;
  hero_slider: HeroSlider;
  cta_btns: CtaButton[];
}

// Props types for hero component
export interface HeroSectionProps {
  title: string;
  subTitle: string;
  heroImage: UploadFile;
  hero_slider: HeroSlider;
  cta_btns: CtaButton[];
}
