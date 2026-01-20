import { gql } from "@apollo/client";

export const GET_FOOTER_DATA = gql`
  query Footers {
    footers {
      footer_logo {
        alternativeText
        url
      }
      footer_links {
        id
        label
        link
        target
        sub_menu_links {
          label
          link
          target
        }
      }
      newsletter {
        newsletter_text
        newsletter_subtext
        show_subscribe_field
        placeholder_text
        btn_text
      }
      copyright_text
      legal_links {
        id
        label
        target
        url
      }
      socials {
        id
        platform
        target
        url
      }
      about_template {
        design_by
        releavant_links {
          label
          url
          target
        }
      }
    }
  }
`;
