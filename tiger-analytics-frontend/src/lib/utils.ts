import { CtaButton } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrl(url: string) {

  if (url.trim() === "") {
    return null;
  }
  if(url.includes('https://res.cloudinary.com')){
    return url;
  }

  return `${process.env.NEXT_PUBLIC_STRAPI_URL}${url}`;
}

// Interface for the extracted sections
export interface ITitleBlockSection {
  title: string;
  cards: Array<{
    title: string;
    tag: {
      label: string;
      variant: string;
    };
    tabs: Array<{
      image: {
        url: string;
        alternativeText: string;
      };
      title: string;
      description: string;
    }>;
    cta: {
      label: string;
      target: string;
      variant: string;
      cta_link: string;
    };
  }>;
  testimonialSection: {
    heading_1: string;
    heading_2: string;
    testimonials: Array<{
      content: string | null;
      image: {
        alternativeText: string;
        url: string;
      };
      name: string | null;
      position: string | null;
      role: string | null;
      logo_image: {
        alternativeText: string;
        url: string;
      };
    }>;
  } | null;
  leaderBoardSection: {
    background_image: {
      alternativeText: string;
      url: string;
    };
    leader_board_block: {
      cta: {
        cta_link: string;
        label: string;
        target: string;
        variant: string;
      };
      description: string;
      title: string;
      status_title: string;
      status_image: {
        alternativeText: string;
        url: string;
      };
    };
  } | null;
}

export function extractCtaItems(cta: CtaButton): Partial<CtaButton> | null {
  if (!cta) return null;
  const { cta_link, label, target, variant } = cta;
  return {
    cta_link,
    label,
    target,
    variant,
  };
}
