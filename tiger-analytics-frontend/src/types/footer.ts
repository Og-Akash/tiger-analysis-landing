export interface FooterLogo {
  alternativeText: string;
  url: string;
}

export interface SubMenuLink {
  label: string;
  link: string;
  target: string;
}

export interface FooterLink {
  id: string;
  label: string;
  link: string;
  target: string;
  sub_menu_links: SubMenuLink[];
}

export interface Newsletter {
  newsletter_text: string;
  newsletter_subtext: string;
  show_subscribe_field: boolean;
  placeholder_text: string;
  btn_text:string;
}

export interface LegalLink {
  id: string;
  label: string;
  target: string;
  url: string;
}

export interface Social {
  platform: "facebook" | "twitter" | "instagram" | "linkedin" | "youtube";
  target: string;
  url: string;
  id: string;
}

export interface AboutTemplate {
  design_by: string;
  releavant_links: ReleavantLink[];
}

export interface ReleavantLink {
  label: string;
  url: string;
  target: string;
}

export interface FooterData {
  footer_logo: FooterLogo;
  footer_links: FooterLink[];
  newsletter: Newsletter;
  copyright_text: string;
  legal_links: LegalLink[];
  socials: Social[];
  about_template: AboutTemplate[];
}

export interface FooterQueryResponse {
  footers: FooterData[];
}
