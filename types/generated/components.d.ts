import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutTheAuthor extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_the_authors';
  info: {
    displayName: 'About the Author';
    icon: 'apps';
  };
  attributes: {
    author: Schema.Attribute.Relation<'oneToOne', 'api::author.author'>;
    Description: Schema.Attribute.Text;
    Tagline: Schema.Attribute.Text;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
    icon: 'code';
  };
  attributes: {
    altText: Schema.Attribute.String;
    linkName: Schema.Attribute.String;
    url: Schema.Attribute.String;
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

export interface SharedPersonality extends Struct.ComponentSchema {
  collectionName: 'components_shared_personalities';
  info: {
    displayName: 'Personality';
    icon: 'alien';
  };
  attributes: {
    Energy: Schema.Attribute.Enumeration<['Introverted', 'Extroverted']>;
    Mind: Schema.Attribute.Enumeration<['Intuitive', 'Observant']>;
    Nature: Schema.Attribute.Enumeration<['Thinking', 'Feeling']>;
    Tactics: Schema.Attribute.Enumeration<['Judging', 'Prospecting']>;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.about-the-author': SharedAboutTheAuthor;
      'shared.link': SharedLink;
      'shared.media': SharedMedia;
      'shared.personality': SharedPersonality;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
