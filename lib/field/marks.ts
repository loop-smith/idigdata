/** Field ProofRail marks - vendor command / hands-on, not endorsement theater. */

export type FieldMark = {
  name: string;
  /** Optional owned lockup. Third-party marks stay typographic until Capo drops licensed files. */
  src?: string;
  /** True when the lockup already includes the word - do not repeat the name. */
  includesWord?: boolean;
  href?: string;
};

export const MARQUEE_CPG: FieldMark[] = [
  { name: "Sierra Nevada Brewing" },
  { name: "Duckhorn" },
  { name: "H.W. Greenham & Sons" },
];

export const MARQUEE_AEC: FieldMark[] = [
  { name: "SOM" },
  { name: "HOK" },
  { name: "Turner Construction" },
  { name: "PCL Construction" },
];

export const PARTNERS: FieldMark[] = [
  { name: "Accenture" },
  { name: "RSM" },
];

export const ESTATE_APPS: FieldMark[] = [
  { name: "Dynamics 365" },
  { name: "Business Central" },
  { name: "Azure" },
  { name: "Databricks" },
  { name: "Fivetran" },
  { name: "Boomi" },
  { name: "UKG" },
  { name: "Salesforce" },
  { name: "ServiceNow" },
];

export const ITEM_APPS: FieldMark[] = [
  { name: "1WorldSync" },
  { name: "Dynamics 365" },
  { name: "Business Central" },
  { name: "Shopify" },
];

export const RETAIL_APPS: FieldMark[] = [
  { name: "Shopify" },
  { name: "Toast" },
];

export const MARKET_APPS: FieldMark[] = [
  { name: "Nielsen" },
  { name: "VIP" },
  { name: "Power BI" },
  { name: "Fabric" },
  { name: "Databricks" },
];

export const LOGISTICS_APPS: FieldMark[] = [
  { name: "Infios / Korber" },
  { name: "HighJump" },
];

export const PLANT_APPS: FieldMark[] = [
  { name: "Ignition" },
  { name: "Brightly" },
];

export const FRONTIER_MODELS: FieldMark[] = [
  { name: "Anthropic" },
  { name: "OpenAI" },
  { name: "Gemini" },
  { name: "xAI" },
  { name: "Kimi" },
  { name: "Thinking Machines Lab" },
];

export const BUILDER_STACK: FieldMark[] = [
  { name: "BOSS", src: "/brand/boss/boss-mark.svg" },
  { name: "The Rig", src: "/brand/rig/mark.svg" },
  {
    name: "FlowCraft",
    src: "/brand/systems/flowcraft-banner-logo.png",
    includesWord: true,
  },
];
