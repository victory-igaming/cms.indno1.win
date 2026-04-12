import type { Schema, Struct } from '@strapi/strapi';

export interface BlockDescription extends Struct.ComponentSchema {
  collectionName: 'components_block_descriptions';
  info: {
    displayName: 'description';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
  };
}

export interface BlockJourneyCard extends Struct.ComponentSchema {
  collectionName: 'components_block_journey_cards';
  info: {
    displayName: 'journeycard';
    icon: 'clock';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    year: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

export interface BlockLinkcard extends Struct.ComponentSchema {
  collectionName: 'components_block_linkcards';
  info: {
    displayName: 'linkcard';
    icon: 'link';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    isextarnal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    linkurl: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface BlockPagecard extends Struct.ComponentSchema {
  collectionName: 'components_block_pagecards';
  info: {
    displayName: 'pagecard';
    icon: 'briefcase';
  };
  attributes: {
    description: Schema.Attribute.Text;
    moredescription: Schema.Attribute.Blocks;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlockSlider extends Struct.ComponentSchema {
  collectionName: 'components_block_sliders';
  info: {
    displayName: 'slider';
    icon: 'picture';
  };
  attributes: {
    btntext: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    mobimage: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    testing: Schema.Attribute.Integer;
    urllink: Schema.Attribute.String;
  };
}

export interface BlockSportcard extends Struct.ComponentSchema {
  collectionName: 'components_block_sportcards';
  info: {
    displayName: 'sportcard';
    icon: 'slideshow';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    image: Schema.Attribute.Media<'images'>;
    pageurl: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlockStarcard extends Struct.ComponentSchema {
  collectionName: 'components_block_starcards';
  info: {
    displayName: 'starcard';
    icon: 'sun';
  };
  attributes: {
    description: Schema.Attribute.Text;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlockTipdanger extends Struct.ComponentSchema {
  collectionName: 'components_block_tipdangers';
  info: {
    displayName: 'tipdanger';
    icon: 'information';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images', true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlockTipsuccess extends Struct.ComponentSchema {
  collectionName: 'components_block_tipsuccesses';
  info: {
    displayName: 'tipsuccess';
    icon: 'information';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlockTipwarn extends Struct.ComponentSchema {
  collectionName: 'components_block_tipwarns';
  info: {
    displayName: 'tipwarn';
    icon: 'information';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlockValuecard extends Struct.ComponentSchema {
  collectionName: 'components_block_valuecards';
  info: {
    displayName: 'valuecard';
    icon: 'thumbUp';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    moredescription: Schema.Attribute.Blocks;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SupportArtical extends Struct.ComponentSchema {
  collectionName: 'components_support_articals';
  info: {
    displayName: 'artical';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SupportEmployecard extends Struct.ComponentSchema {
  collectionName: 'components_support_employecards';
  info: {
    displayName: 'employecard';
    icon: 'walk';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SupportFaq extends Struct.ComponentSchema {
  collectionName: 'components_support_faqs';
  info: {
    displayName: 'faq';
    icon: 'code';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    faqtype: Schema.Attribute.Relation<'oneToOne', 'api::faqtype.faqtype'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SupportHowtoplay extends Struct.ComponentSchema {
  collectionName: 'components_support_howtoplays';
  info: {
    displayName: 'howtoplay';
    icon: 'stack';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    gameview: Schema.Attribute.Media<'images' | 'videos'>;
    tabname: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SupportImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_support_image_blocks';
  info: {
    displayName: 'imageBlock';
    icon: 'picture';
  };
  attributes: {
    bannerurl: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    name: Schema.Attribute.String;
  };
}

export interface SupportImageLeft extends Struct.ComponentSchema {
  collectionName: 'components_support_image_lefts';
  info: {
    displayName: 'imageLeft';
    icon: 'layout';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SupportImageRight extends Struct.ComponentSchema {
  collectionName: 'components_support_image_rights';
  info: {
    displayName: 'imageRight';
    icon: 'layout';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SupportSuportcard extends Struct.ComponentSchema {
  collectionName: 'components_support_suportcards';
  info: {
    displayName: 'suportcard';
    icon: 'doctor';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'block.description': BlockDescription;
      'block.journey-card': BlockJourneyCard;
      'block.linkcard': BlockLinkcard;
      'block.pagecard': BlockPagecard;
      'block.slider': BlockSlider;
      'block.sportcard': BlockSportcard;
      'block.starcard': BlockStarcard;
      'block.tipdanger': BlockTipdanger;
      'block.tipsuccess': BlockTipsuccess;
      'block.tipwarn': BlockTipwarn;
      'block.valuecard': BlockValuecard;
      'support.artical': SupportArtical;
      'support.employecard': SupportEmployecard;
      'support.faq': SupportFaq;
      'support.howtoplay': SupportHowtoplay;
      'support.image-block': SupportImageBlock;
      'support.image-left': SupportImageLeft;
      'support.image-right': SupportImageRight;
      'support.suportcard': SupportSuportcard;
    }
  }
}
