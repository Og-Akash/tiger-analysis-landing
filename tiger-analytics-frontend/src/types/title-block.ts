import { ComponentBlockBackgroundPattern } from "./title-block-background-pattern";
import { ComponentBlockTestimonialGrid } from "./title-block-testimonial-grid";
import { ComponentBlockBlockCard } from "./title-block-card";

// Union type for all title block content blocks
export type TitleBlockContentBlock = 
  | ComponentBlockBackgroundPattern 
  | ComponentBlockTestimonialGrid 
  | ComponentBlockBlockCard;

// Main TitleBlock type
export interface TitleBlock {
  __typename: "TitleBlock";
  title: string;
  conte_blocks: TitleBlockContentBlock[];
}

// GraphQL response type for title blocks query
export interface TitleBlocksResponse {
  titleBlocks: TitleBlock[];
}
