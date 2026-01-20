// Base types for GraphQL responses
export interface UploadFile {
  __typename: "UploadFile";
  url: string;
  alternativeText?: string;
}

// Rich text content types
export interface RichTextNode {
  type: "text" | "paragraph" | "heading" | "list" | "list-item";
  text?: string;
  children?: RichTextNode[];
  level?: number;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
  linkType?: string;
  url?: string;
}

// CTA Button types
export interface CtaButton {
  __typename: "ComponentSharedCtaBtn";
  label: string;
  target: "self" | "blank";
  variant: "primary" | "secondary" | "outline" | "seconday"; // Note: keeping "seconday" as it appears in the API
  cta_link: string;
}

// Export homepage types from separate files
export * from "./homepage";
export * from "./homepage-hero";
export * from "./homepage-sponsors";
export * from "./homepage-highlight";
export * from "./homepage-title-block";
export * from "./homepage-faq";
export * from "./homepage-feature";
export * from "./homepage-cta";
export * from "./homepage-promo-banner";

// Export title-block types from separate files
export * from "./title-block";
export * from "./title-block-background-pattern";
export * from "./title-block-testimonial-grid";
export * from "./title-block-card";

// Navigation types
export interface SubMenuLink {
  __typename: "ComponentNavbarSubMenuLinks";
  target: "self" | "_blank" | "_parent" | "_top";
  label: string;
  description:string;
  link: string;
}

export interface MenuLink {
  __typename: "ComponentNavbarMenuLinks";
  label: string;
  link: string;
  target: "self" | "_blank" | "_parent" | "_top";
  sub_menu_links: SubMenuLink[];
}

export interface Navbar {
  __typename: "Navbar";
  position: string;
  title: string;
  site_logo: UploadFile;
  menu_links: MenuLink[];
}

export interface NavigationResponse {
  navbars: Navbar[];
}