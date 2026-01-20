// Title block section component types
export interface ComponentHomepageTitleBlock {
  __typename: "ComponentHomepageTitleBlock";
  title: string;
}

// Props types for title block component
export interface TitleBlockSectionProps {
  title: string;
  background_color?:string
}
