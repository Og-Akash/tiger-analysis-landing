import { gql } from "@apollo/client";

export const GET_TITLE_BLOCK_DATA = gql`
  query TitleBlocks {
    titleBlocks {
      title
      conte_blocks {
        ... on ComponentBlockBackgroundPattern {
          id
          background_image {
            alternativeText
            url
          }
          leader_board_block {
            cta {
              cta_link
              label
              target
              variant
            }
            description
            status_image {
              alternativeText
              url
            }
            title
            status_title
          }
        }
        ... on ComponentBlockTestimonialGrid {
          id
          heading_1
          heading_2
          testimonials {
            content
            name
            position
            role
            image {
              alternativeText
              url
            }
            logo_image {
              alternativeText
              url
            }
          }
        }
        ... on ComponentBlockBlockCard {
          id
          title
          variant
          tag {
            label
            variant
          }
          tabs {
            description
            image {
              alternativeText
              url
            }
            title
            id
          }
          cta {
            cta_link
            label
            target
            variant
          }
        }
      }
    }
  }
`;
