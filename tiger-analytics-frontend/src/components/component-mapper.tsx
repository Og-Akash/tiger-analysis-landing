import HeroSection from "@/components/sections/hero";
import HighlightSection from "@/components/sections/highlight";
import SponsorsSection from "@/components/sections/sponsors";
import TitleBlocksSection from "@/components/sections/title-block";
import FaqSection from "@/components/sections/faq";
import { ComponentHomepageHero, ComponentHomepageSponsors, ComponentHomepageHighlight, ComponentHomepageTitleBlock, ComponentHomepageFaqSection, ComponentHomepageFeatureSection, ComponentHomepageCtaSection, ComponentHomepagePromoBanner } from "@/types";
import { FC } from "react";
import FeatureSection from "./sections/feature";
import CtaSection from "./sections/cta";
import PromoBanner from "./sections/promo-banner";

// Type for component keys
export type ComponentKey = "ComponentHomepageHero" | "ComponentHomepageSponsors" | "ComponentHomepageHighlight" | "ComponentHomepageTitleBlock" | "ComponentHomepageFaqSection" | "ComponentHomepageFeatureSection" | "ComponentHomepageCtaSection" | "ComponentHomepagePromoBanner";

// Component mapping object
export const componentMap: Record<ComponentKey, FC<any>> = {
  "ComponentHomepageHero": HeroSection,
  "ComponentHomepageSponsors": SponsorsSection,
  "ComponentHomepageHighlight": HighlightSection,
  "ComponentHomepageTitleBlock": TitleBlocksSection,
  "ComponentHomepageFaqSection": FaqSection,
  "ComponentHomepageFeatureSection": FeatureSection,
  "ComponentHomepageCtaSection": CtaSection,
  "ComponentHomepagePromoBanner": PromoBanner,
};

// Props mapping object
export const propsMap: Record<ComponentKey, (data: any) => any> = {
  "ComponentHomepageHero": (data: ComponentHomepageHero) => ({
    title: data.title,
    subTitle: data.subTitle,
    heroImage: data.heroImage,
    cta_btns: data.cta_btns,
  }),
  "ComponentHomepageSponsors": (data: ComponentHomepageSponsors) => ({
    data: {
      sponsors: data.sponsors,
    },
  }),
  "ComponentHomepageHighlight": (data: ComponentHomepageHighlight) => ({
    data: {
      title: data.title,
      description: data.description,
      content: data.content,
      cta_btn: data.cta_btn,
      highlight_image: data.highlight_image,
    },
  }),
  "ComponentHomepageTitleBlock": (data: ComponentHomepageTitleBlock) => ({
    data: {
      title: data.title,
    },
  }),
  "ComponentHomepageFaqSection": (data: ComponentHomepageFaqSection) => ({
    data: {
      background_image: data.background_image,
      heading: data.heading,
      description: data.description,
      faqs: data.faqs,
    },
  }),
  "ComponentHomepageFeatureSection": (data: ComponentHomepageFeatureSection) => ({
    data: {
      image: data.image,
      content: data.content,
      description: data.description,
      sub_heading: data.sub_heading,
    },
  }),
  "ComponentHomepageCtaSection": (data: ComponentHomepageCtaSection) => ({
    data: {
      cta_heading: data.cta_heading,
      cta_bg_image: data.cta_bg_image,
      cta_btn: data.cta_btn, // Convert single CTA to array format expected by component
    },
  }),
  "ComponentHomepagePromoBanner": (data: ComponentHomepagePromoBanner) => ({
    data: {
      title: data.title,
      description: data.description,
      line_1: data.line_1,
      line_2: data.line_2,
      line_3: data.line_3,
      cta: data.cta,
    },
  }),
};