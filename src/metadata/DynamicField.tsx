import {JSXElement, Match, Switch} from "solid-js";
import StringField from "~/metadata/primitive/StringField";
import DecimalField from "~/metadata/primitive/DecimalField";
import {
  BooleanPropertyMetadata,
  DecimalPropertyMetadata, EnumListPropertyMetadata,
  EnumPropertyMetadata,
  JavaObjectPropertyMetadata,
  ListPropertyMetadata,
  MapPropertyMetadata,
  Metadata,
  RoleListPropertyMetadata,
  RolePropertyMetadata,
  StringPropertyMetadata,
  TextChannelListPropertyMetadata,
  TextChannelPropertyMetadata,
  VoiceChannelListPropertyMetadata,
  VoiceChannelPropertyMetadata
} from "~/metadata/Metadata";
import BooleanField from "~/metadata/primitive/BooleanField";
import ListField from "~/metadata/collection/ListField";
import EnumField from "~/metadata/primitive/EnumField";
import MapField from "~/metadata/collection/MapField";
import JavaObjectField from "~/metadata/collection/JavaObjectField";
import {Guild} from "~/discord.types";
import RoleField from "~/metadata/discord/roles/RoleField";
import RoleListField from "~/metadata/discord/roles/RoleListField";
import TextChannelListField from "~/metadata/discord/textChannel/TextChannelListField";
import TextChannelField from "~/metadata/discord/textChannel/TextChannelField";
import VoiceChannelField from "~/metadata/discord/voiceChannel/VoiceChannelField";
import VoiceChannelListField from "~/metadata/discord/voiceChannel/VoiceChannelListField";
import EnumListField from "~/metadata/primitive/EnumListField";

export const DynamicField = (props: {
  class?: string;
  guild: Guild;
  key: string;
  value: any;
  metadata: Metadata;
  onUpdate: (value: any) => void,
  nesting: number,
  actions?: JSXElement
}) => {
  const metadata = props.metadata
  return (
    <div class={`m-4 py-4 px-2 ${props.class || ""}`}>
      <div style={{"margin-inline-start": `${props.nesting * 4}px`}}>
        <Switch>
          <Match when={metadata.type === "string"}>
            <StringField value={props.value}
                         onUpdate={props.onUpdate}
                         key={props.key}
                         metadata={metadata as StringPropertyMetadata}
            />
          </Match>

          <Match when={metadata.type == "decimal"}>
            <DecimalField value={props.value}
                          onUpdate={props.onUpdate}
                          key={props.key}
                          metadata={metadata as DecimalPropertyMetadata}
            />
          </Match>

          {/* TODO: Add something dedicated for integers */}
          <Match when={metadata.type == "integer"}>
            <DecimalField value={props.value}
                          onUpdate={props.onUpdate}
                          key={props.key}
                          metadata={metadata as DecimalPropertyMetadata}
            />
          </Match>

          <Match when={metadata.type === "boolean"}>
            <BooleanField value={props.value}
                          onUpdate={props.onUpdate}
                          key={props.key}
                          metadata={metadata as BooleanPropertyMetadata}
            />
          </Match>

          <Match when={metadata.type === "enum"}>
            <EnumField value={props.value}
                       onUpdate={props.onUpdate}
                       key={props.key}
                       metadata={metadata as EnumPropertyMetadata}
            />
          </Match>

          <Match when={metadata.type === "list"}>
            <ListField
              guild={props.guild}
              value={props.value}
              onUpdate={props.onUpdate}
              key={props.key}
              metadata={metadata as ListPropertyMetadata}
              nesting={props.nesting + 1}
            />
          </Match>

          <Match when={metadata.type === "map"}>
            <MapField
              guild={props.guild}
              value={props.value}
              onUpdate={props.onUpdate}
              key={props.key}
              metadata={metadata as MapPropertyMetadata}
              nesting={props.nesting + 1}
            />
          </Match>
          <Match when={metadata.type === "object"}>
            <JavaObjectField
              guild={props.guild}
              value={props.value}
              onUpdate={props.onUpdate}
              key={props.key}
              metadata={metadata as JavaObjectPropertyMetadata}
              nesting={props.nesting + 1}
            />
          </Match>
          <Match when={metadata.type === "enum_list"}>
            <EnumListField
              value={props.value}
              onUpdate={props.onUpdate}
              key={props.key}
              metadata={metadata as EnumListPropertyMetadata}
            />
          </Match>
          <Match when={metadata.type === "role"}>
            <RoleField
              guild={props.guild}
              value={props.value}
              onUpdate={props.onUpdate}
              key={props.key}
              metadata={metadata as RolePropertyMetadata}
            />
          </Match>
          <Match when={metadata.type === "role_list"}>
            <RoleListField
              guild={props.guild}
              value={props.value}
              onUpdate={props.onUpdate}
              key={props.key}
              metadata={metadata as RoleListPropertyMetadata}
            />
          </Match>
          <Match when={metadata.type === "text_channel"}>
            <TextChannelField
              guild={props.guild}
              value={props.value}
              onUpdate={props.onUpdate}
              key={props.key}
              metadata={metadata as TextChannelPropertyMetadata}
            />
          </Match>
          <Match when={metadata.type === "text_channel_list"}>
            <TextChannelListField
              guild={props.guild}
              value={props.value}
              onUpdate={props.onUpdate}
              key={props.key}
              metadata={metadata as TextChannelListPropertyMetadata}
            />
          </Match>
          <Match when={metadata.type === "voice_channel"}>
            <VoiceChannelField
              guild={props.guild}
              value={props.value}
              onUpdate={props.onUpdate}
              key={props.key}
              metadata={metadata as VoiceChannelPropertyMetadata}
            />
          </Match>
          <Match when={metadata.type === "voice_channel_list"}>
            <VoiceChannelListField
              guild={props.guild}
              value={props.value}
              onUpdate={props.onUpdate}
              key={props.key}
              metadata={metadata as VoiceChannelListPropertyMetadata}
            />
          </Match>
        </Switch>
      </div>
    </div>
  );
};
