import type { Schema, Struct } from '@strapi/strapi';

export interface BlockBackgroundPattern extends Struct.ComponentSchema {
  collectionName: 'components_block_background_patterns';
  info: {
    displayName: 'background pattern';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images' | 'files'>;
    leader_board_block: Schema.Attribute.Component<
      'shared.leader-board',
      false
    >;
  };
}

export interface BlockBlockCard extends Struct.ComponentSchema {
  collectionName: 'components_block_block_cards';
  info: {
    displayName: 'block-card';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta-btn', false>;
    tabs: Schema.Attribute.Component<'block.card-tab', true>;
    tag: Schema.Attribute.Component<'block.card-tag', false>;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<['horizontal', 'vertical']> &
      Schema.Attribute.DefaultTo<'horizontal'>;
  };
}

export interface BlockCardTab extends Struct.ComponentSchema {
  collectionName: 'components_block_card_tabs';
  info: {
    displayName: 'card-tab';
  };
  attributes: {
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface BlockCardTag extends Struct.ComponentSchema {
  collectionName: 'components_block_card_tags';
  info: {
    displayName: 'card-tag';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<
      [
        'default',
        'secondary',
        'destructive',
        'outline',
        'cyan',
        'orange',
        'green',
      ]
    > &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface BlockTestimonialGrid extends Struct.ComponentSchema {
  collectionName: 'components_block_testimonial_grids';
  info: {
    displayName: 'Testimonial grid';
  };
  attributes: {
    heading_1: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    heading_2: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    testimonials: Schema.Attribute.Component<'shared.testimonial', true>;
  };
}

export interface FooterAboutTemplate extends Struct.ComponentSchema {
  collectionName: 'components_footer_about_templates';
  info: {
    displayName: 'about_template';
  };
  attributes: {
    design_by: Schema.Attribute.Text;
    releavant_links: Schema.Attribute.Component<'footer.legal-link', true>;
  };
}

export interface FooterLegalLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_legal_links';
  info: {
    displayName: 'legal_link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    target: Schema.Attribute.Enumeration<['_blank', '_self']> &
      Schema.Attribute.DefaultTo<'_blank'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_footer_newsletters';
  info: {
    displayName: 'Newsletter';
  };
  attributes: {
    btn_text: Schema.Attribute.String & Schema.Attribute.DefaultTo<'subscribe'>;
    newsletter_subtext: Schema.Attribute.Text;
    newsletter_text: Schema.Attribute.Text & Schema.Attribute.Required;
    placeholder_text: Schema.Attribute.Text;
    show_subscribe_field: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
  };
}

export interface FooterSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'Social link';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['facebook', 'instagram', 'twitter', 'linkedin', 'youtube']
    >;
    target: Schema.Attribute.Enumeration<['_blank', '_self']> &
      Schema.Attribute.DefaultTo<'_self'>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_cta_sections';
  info: {
    displayName: 'Cta section';
  };
  attributes: {
    cta_bg_image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    cta_btn: Schema.Attribute.Component<'shared.cta-btn', false>;
    cta_heading: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface HomepageFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_faq_sections';
  info: {
    displayName: 'Faq section';
  };
  attributes: {
    background_image: Schema.Attribute.Media<'images' | 'files'>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    faqs: Schema.Attribute.Component<'shared.faq', true> &
      Schema.Attribute.Required;
    heading: Schema.Attribute.Text & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomepageFeatureSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_feature_sections';
  info: {
    displayName: 'Feature section';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    description: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    sub_heading: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface HomepageHero extends Struct.ComponentSchema {
  collectionName: 'components_homepage_heroes';
  info: {
    displayName: 'hero';
  };
  attributes: {
    cta_btns: Schema.Attribute.Component<'shared.cta-btn', true>;
    heroImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    subTitle: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    title: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface HomepageHighlight extends Struct.ComponentSchema {
  collectionName: 'components_homepage_highlights';
  info: {
    displayName: 'highlight';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    cta_btn: Schema.Attribute.Component<'shared.cta-btn', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    highlight_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface HomepagePromoBanner extends Struct.ComponentSchema {
  collectionName: 'components_homepage_promo_banners';
  info: {
    displayName: 'Promo banner';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta-btn', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    line_1: Schema.Attribute.Text;
    line_2: Schema.Attribute.Text;
    line_3: Schema.Attribute.Text;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface HomepageSponsors extends Struct.ComponentSchema {
  collectionName: 'components_homepage_sponsors';
  info: {
    displayName: 'sponsors';
  };
  attributes: {
    sponsors: Schema.Attribute.Component<'shared.sponsor', true>;
  };
}

export interface HomepageTitleBlock extends Struct.ComponentSchema {
  collectionName: 'components_homepage_title_blocks';
  info: {
    displayName: 'Title block';
  };
  attributes: {
    background_color: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#1E0903'>;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface NavbarMenuLinks extends Struct.ComponentSchema {
  collectionName: 'components_navbar_menu_links';
  info: {
    displayName: 'menu-item';
    icon: 'cog';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    sub_menu_links: Schema.Attribute.Component<'navbar.sub-menu-links', true>;
    target: Schema.Attribute.Enumeration<['_blank', '_self']>;
  };
}

export interface NavbarSubMenuLinks extends Struct.ComponentSchema {
  collectionName: 'components_navbar_sub_menu_links';
  info: {
    displayName: 'sub-menu-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    target: Schema.Attribute.Enumeration<['_blank', '_self']>;
  };
}

export interface SharedAnnoucementBar extends Struct.ComponentSchema {
  collectionName: 'components_shared_annoucement_bars';
  info: {
    displayName: 'annoucement_bar';
  };
  attributes: {
    annouce_content: Schema.Attribute.Blocks;
  };
}

export interface SharedCtaBtn extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_btns';
  info: {
    displayName: 'cta_btn';
    icon: 'cursor';
  };
  attributes: {
    cta_link: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    target: Schema.Attribute.Enumeration<['_blank', '_self']> &
      Schema.Attribute.DefaultTo<'_self'>;
    variant: Schema.Attribute.Enumeration<
      [
        'default',
        'destructive',
        'outline',
        'outline-dark',
        'secondary',
        'raised',
        'raised-vibrant',
        'ghost',
        'link',
      ]
    > &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface SharedFaq extends Struct.ComponentSchema {
  collectionName: 'components_shared_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    answer: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    question: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedLeaderBoard extends Struct.ComponentSchema {
  collectionName: 'components_shared_leader_boards';
  info: {
    displayName: 'Leader board';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta-btn', false>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    status_image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    status_title: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSponsor extends Struct.ComponentSchema {
  collectionName: 'components_shared_sponsors';
  info: {
    displayName: 'sponsor';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'testimonial';
  };
  attributes: {
    content: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    image: Schema.Attribute.Media<'images' | 'files'>;
    logo_image: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String;
    position: Schema.Attribute.Enumeration<
      ['bottom left', 'top left', 'top right', 'bottom right']
    >;
    role: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'block.background-pattern': BlockBackgroundPattern;
      'block.block-card': BlockBlockCard;
      'block.card-tab': BlockCardTab;
      'block.card-tag': BlockCardTag;
      'block.testimonial-grid': BlockTestimonialGrid;
      'footer.about-template': FooterAboutTemplate;
      'footer.legal-link': FooterLegalLink;
      'footer.newsletter': FooterNewsletter;
      'footer.social-link': FooterSocialLink;
      'homepage.cta-section': HomepageCtaSection;
      'homepage.faq-section': HomepageFaqSection;
      'homepage.feature-section': HomepageFeatureSection;
      'homepage.hero': HomepageHero;
      'homepage.highlight': HomepageHighlight;
      'homepage.promo-banner': HomepagePromoBanner;
      'homepage.sponsors': HomepageSponsors;
      'homepage.title-block': HomepageTitleBlock;
      'navbar.menu-links': NavbarMenuLinks;
      'navbar.sub-menu-links': NavbarSubMenuLinks;
      'shared.annoucement-bar': SharedAnnoucementBar;
      'shared.cta-btn': SharedCtaBtn;
      'shared.faq': SharedFaq;
      'shared.leader-board': SharedLeaderBoard;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.sponsor': SharedSponsor;
      'shared.testimonial': SharedTestimonial;
    }
  }
}
