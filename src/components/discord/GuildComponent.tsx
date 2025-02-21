import {Guild, Role, TextChannel, VoiceChannel} from "~/discord.types";
import RolePicker from "~/components/discord/RolePicker";
import {createSignal} from "solid-js";
import TextChannelPicker from "~/components/discord/TextChannelPicker";
import VoiceChannelPicker from "~/components/discord/VoiceChannelPicker";
import EnumListField from "~/metadata/primitive/EnumListField";

export function snowflakeEquals(a: { id: string } | null, b: { id: string } | null): boolean {
  if (a === b) return true;
  if (!a || !b) return false;
  return a.id === b.id;
}

export default function GuildComponent(props: { guild: Guild }) {
  const [role, setRole] = createSignal<Role | null>(null, {equals: snowflakeEquals});
  const [textChannel, setTextChannel] = createSignal<TextChannel | null>(null, {equals: snowflakeEquals});
  const [voiceChannel, setVoiceChannel] = createSignal<VoiceChannel | null>(null, {equals: snowflakeEquals});
  const [v, setV] = createSignal<string[]>([]);
  return (
    <>
      {/*{props.guild.id}*/}
      <RolePicker
        class={"my-2"}
        roles={props.guild.roles}
        selectedRole={role()}
        onRoleSelected={setRole}
      />
      <TextChannelPicker
        class={"my-2"}
        channels={props.guild.textChannels}
        selectedChannel={textChannel()}
        onChannelSelected={setTextChannel}
      />
      <VoiceChannelPicker
        class={"my-2"}
        channels={props.guild.voiceChannels}
        selectedChannel={voiceChannel()}
        onChannelSelected={setVoiceChannel}
      />
      <EnumListField
        value={v()}
        onUpdate={setV}
        key={"Enum list"}
        metadata={{
          options: ["a", "b", "c", "d", "e", "f"],
          type: "enum_list"
        }}
      />
    </>
  )
}