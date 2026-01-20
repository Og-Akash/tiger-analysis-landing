import { CtaButton, UploadFile } from "./index";

// Leader board block types
export interface LeaderBoardBlock {
  cta: CtaButton;
  description: string;
  status_image: UploadFile;
  title: string;
  status_title: string;
}

// Background pattern component types
export interface ComponentBlockBackgroundPattern {
  __typename: "ComponentBlockBackgroundPattern";
  id: string;
  background_image: UploadFile;
  leader_board_block: LeaderBoardBlock;
}

// Props types for background pattern component
export interface BackgroundPatternSectionProps {
  id: string;
  background_image: UploadFile;
  leader_board_block: LeaderBoardBlock;
}
