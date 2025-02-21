export type Metadata = BooleanPropertyMetadata
  | StringPropertyMetadata
  | DecimalPropertyMetadata
  | LongPropertyMetadata
  | EnumPropertyMetadata
  | EnumListPropertyMetadata
  | ListPropertyMetadata
  | MapPropertyMetadata
  | JavaObjectPropertyMetadata
  | TextChannelPropertyMetadata
  | VoiceChannelPropertyMetadata
  | RolePropertyMetadata
  | TextChannelListPropertyMetadata
  | VoiceChannelListPropertyMetadata
  | RoleListPropertyMetadata

export interface BooleanPropertyMetadata {
  type: "boolean";
}

export interface DecimalPropertyMetadata {
  type: "decimal";
  min: number;
  max: number;
}

export interface LongPropertyMetadata {
  type: "integer";
  min: number;
  max: number;
}

export interface EnumPropertyMetadata {
  type: "enum";
  options: string[];
}

export interface EnumListPropertyMetadata {
  type: "enum_list";
  options: string[];
}

export interface ListPropertyMetadata {
  type: "list";
  minSize: number;
  maxSize: number;
  entryType: Metadata;
}

export interface MapPropertyMetadata {
  type: "map";
  minSize: number;
  maxSize: number;
  keyType: Metadata;
  valueType: Metadata;
}

export interface JavaObjectPropertyMetadata {
  type: "object";
  fields: Record<string, Metadata>;
}

export interface StringPropertyMetadata {
  type: "string";
  minLength: number;
  maxLength: number;
}

export interface RolePropertyMetadata {
  type: "role";
}

export interface TextChannelPropertyMetadata {
  type: "text_channel";
}

export interface VoiceChannelPropertyMetadata {
  type: "voice_channel";
}

export interface RoleListPropertyMetadata {
  type: "role_list";
}

export interface TextChannelListPropertyMetadata {
  type: "text_channel_list";
}

export interface VoiceChannelListPropertyMetadata {
  type: "voice_channel_list";
}

export interface EnumListPropertyMetadata {
  type: "enum_list";
}

export function createEmptyValue(metadata: Metadata): any {
  switch (metadata.type) {
    case "string":
      return "";
    case "integer":
      return 0;
    case "decimal":
      return 0.0;
    case "boolean":
      return false;
    case "voice_channel_list":
    case "text_channel_list":
    case "role_list":
    case "list":
    case "enum_list":
      return []
    case "enum":
      return metadata.options[0];
    case "map":
      return {};
    case "object":
      let v: Record<string, any> = {}
      for (const [key, value] of Object.entries(metadata.fields)) {
        v[key] = createEmptyValue(value);
      }
      return v;
    case "role":
    case "text_channel":
    case "voice_channel":
      return null
  }
}