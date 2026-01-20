import { gql } from "@apollo/client";

export const GET_NAVIGATION = gql`
  query Navbars {
    navbars {
      position
      title
      site_logo {
        url
        alternativeText
      }
      menu_links {
        label
        link
        target
        sub_menu_links {
          target
          label
          description
          link
        }
      }
    }
  }
`;
