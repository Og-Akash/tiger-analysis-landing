import { gql } from "@apollo/client";

export const GET_HOMEDATA = gql`
  query Homepage {
    homepage {
      title
      sections {
        ... on ComponentHomepageHero {
          __typename
          title
          subTitle
          heroImage {
            url
            alternativeText
          }
          cta_btns {
            label
            target
            variant
            cta_link
          }
        }
        ... on ComponentHomepageSponsors {
          __typename
          sponsors {
            logo {
              url
              alternativeText
            }
            name
          }
        }
        ... on ComponentHomepageHighlight {
          title
          description
          content
          __typename
          cta_btn {
            cta_link
            label
            variant
            target
          }
          highlight_image {
            url
            alternativeText
          }
        }
        ... on ComponentHomepageTitleBlock {
          title
          background_color
          __typename
        }
        ... on ComponentHomepageFaqSection {
          __typename
          label
          background_image {
            alternativeText
            url
          }
          description
          faqs {
            id
            answer
            question
          }
          heading
        }
        ... on ComponentHomepageFeatureSection {
          id
          __typename
          content
          image {
            alternativeText
            url
          }
          sub_heading
          description
        }
        ... on ComponentHomepageCtaSection {
          id
          cta_heading
          cta_btn {
            cta_link
            target
            label
            variant
          }
          cta_bg_image {
            alternativeText
            url
          }
        }
        ... on ComponentHomepagePromoBanner {
          id
          title
          description
          line_1
          line_2
          line_3
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
