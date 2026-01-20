import { CtaButton, UploadFile } from "./index";

// Tag types
export interface Tag {
  label: string;
  variant: string;
}

// Tab types
export interface Tab {
  id: string;
  description: string;
  image: UploadFile;
  title: string;
}

// Block card component types
export interface ComponentBlockBlockCard {
  __typename: "ComponentBlockBlockCard";
  id: string;
  title: string;
  variant: string;
  tag: Tag;
  tabs: Tab[];
  cta: CtaButton;
}

// Props types for block card component
export interface BlockCardSectionProps {
  id: string;
  title: string;
  variant: string;
  tag: Tag;
  tabs: Tab[];
  cta: CtaButton;
}
