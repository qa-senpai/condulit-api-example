export type User = {
  username?: string;
  email?: string;
  token?: string;
};

export type UserRegistration = {
  username?: string;
  email?: string;
  password?: string;
};

export type UserResponse = {
  user: User;
};

export type UserRequest = {
  user: UserRegistration;
};

// Sitecore Content Hub Asset Types
export type ImageSimilarityTag = {
  name: string;
  confidence: number;
};

export type FileProperties = {
  properties: {
    colorspace: string;
    content_type: string;
    extension: string;
    filename: string;
    filesize: number;
    filesizebytes: string;
    group: string;
    height: string;
    megapixels: string;
    resolution: string;
    width: string;
  };
};

export type FileLocation = {
  locations: {
    local: string[];
  };
  properties?: {
    colorspace?: string;
    content_type: string;
    extension?: string;
    filename?: string;
    filesize?: number;
    filesizebytes: string | number;
    group?: string;
    height?: string;
    megapixels?: string;
    resolution?: string;
    width?: string;
  };
};

export type RenditionFile = {
  status: string;
  properties: {
    width?: string;
    height?: string;
    content_type: string;
    filesizebytes: string | number;
  };
  locations: {
    local: string[];
  };
  sticky?: boolean;
};

export type Renditions = {
  metadata: RenditionFile;
  pdf: RenditionFile;
  preview: RenditionFile;
  preview_download: RenditionFile;
  thumbnail: RenditionFile;
  thumbnail_cropped: RenditionFile;
  bigthumbnail: RenditionFile;
  embeddings: RenditionFile;
};

export type ExtraRenditions = {
  vision_ready: RenditionFile;
  vision_analysis: RenditionFile;
  vision_ocr: RenditionFile;
};

export type VirusScanResult = {
  identifier: string;
  labels: {
    "en-US": string;
  };
};

export type RelationParent = {
  properties: {
    Label?: {
      "en-US": string;
    };
    DisplayName?: {
      "en-US": string;
    };
    ValueName?: string;
    StatusValue?: string;
    ClassificationName?: string;
    TaxonomyLabel?: {
      "en-US": string;
    };
  };
  href: string;
};

export type Relation = {
  parent?: RelationParent;
  parents?: RelationParent[];
  children?: Array<{ href: string }>;
  inherits_security?: boolean;
  self: {
    href: string;
  };
  href?: string;
};

export type Relations = {
  AssetTypeToAsset: Relation;
  LocalizationToAsset: Relation;
  FinalLifeCycleStatusToAsset: Relation;
  UserProfileToAvatar: Relation;
  UserProfileToMasterAvatar: Relation;
  PortalFeatureToAsset: Relation;
  ContentRepositoryToAsset: Relation;
  AssetMediaToAsset: Relation;
  MasterFile: Relation;
  DeliverablesLifecycleStatusToAsset: Relation;
  BlockReviewLifecycleStatusToAsset: Relation;
  MasterResourceToAsset: Relation;
  [key: string]: Relation; // For additional dynamic relations
};

export type RelatedPath = {
  values: {
    "en-US": string;
  };
  entity: string;
  definition: string;
};

export type RenditionLinks = {
  downloadOriginal: Array<{ href: string }>;
  downloadAlternative: Array<{ href: string }>;
  metadata: Array<{ href: string }>;
  pdf: Array<{ href: string }>;
  preview: Array<{ href: string }>;
  downloadPreview: Array<{ href: string }>;
  thumbnail: Array<{ href: string }>;
  bigthumbnail: Array<{ href: string }>;
  embeddings: Array<{ href: string }>;
  vision_ready: Array<{ href: string }>;
  vision_analysis: Array<{ href: string }>;
  vision_ocr: Array<{ href: string }>;
};

export type AssetProperties = {
  FileName: string;
  Title: string;
  Description: Record<string, any>;
  ChiliType: string | null;
  "Asset.ExplicitApprovalRequired": boolean;
  "Asset.HasComplexRightsProfiles": boolean | null;
  "Asset.DrmComplexity": string | null;
  "Asset.Copyright": string | null;
  ReasonForStatus: string | null;
  VisionDescription: string | null;
  VisionOcrText: string | null;
  SitecoreMLStatus: string | null;
  ImageSimilarityTags: ImageSimilarityTag[];
  "AI.Suggestions": string | null;
  "AI.TaggingStatus": string | null;
  FileSize: number;
  FileProperties: FileProperties;
  ApprovedBy: string;
  ApprovalDate: string;
  ReasonForRejection: string | null;
  ArchivedBy: string | null;
  ArchivalDate: string | null;
  HasDuplicate: boolean;
  IsDraft: boolean | null;
  MainFile: FileLocation;
  AlternateFile: FileLocation;
  Renditions: Renditions;
  Structure: string | null;
  Digest: string;
  ExtraRenditions: ExtraRenditions;
  AverageRating: number | null;
  VirusScanResult: VirusScanResult;
  IsCheckedOut: boolean | null;
  IsCheckingIn: boolean | null;
  IsDiscarding: boolean | null;
  TemplateProperties: Record<string, any> | null;
  CheckedOutIn: string | null;
  RenditionsPurged: boolean | null;
  DeletedOn: string | null;
  RenditionsAccessTier: string | null;
  FocalPoint: string | null;
  "VideoAI.Language": string | null;
  SubtitleLanguage: string | null;
  PublishStatus: string | null;
  PublishStatusDetails: string | null;
  "PublicCollections.PublishStatus": string | null;
  "PublicCollections.PublishStatusDetails": string | null;
  Long_ekbjk: string | null;
  String_oxvrd: string | null;
};

export type SitecoreAssetResponse = {
  id: number;
  identifier: string;
  cultures: string[];
  properties: AssetProperties;
  relations: Relations;
  created_by: {
    href: string;
    title: string;
  };
  created_on: string;
  modified_by: {
    href: string;
    title: string;
  };
  modified_on: string;
  entitydefinition: {
    href: string;
    title: string;
  };
  copy: {
    href: string;
    title: string;
  };
  copyasync: {
    href: string;
    title: string;
  };
  permissions: {
    href: string;
    title: string;
  };
  lifecycle: {
    href: string;
    title: string;
  };
  saved_selections: {
    href: string;
    title: string;
  };
  roles: {
    href: string;
    title: string;
  };
  annotations: {
    href: string;
    title: string;
  };
  is_root_taxonomy_item: boolean;
  is_path_root: boolean;
  inherits_security: boolean;
  is_system_owned: boolean;
  version: number;
  self: {
    href: string;
  };
  related_paths: {
    AssetTypeToAsset: RelatedPath[][];
  };
  renditions: RenditionLinks;
};
