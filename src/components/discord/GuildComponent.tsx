import {Guild, Role, TextChannel} from "~/discord.types";
import RolePicker from "~/components/discord/RolePicker";
import {createSignal} from "solid-js";
import TextChannelPicker from "~/components/discord/TextChannelPicker";

export function snowflakeEquals(a: { id: string } | null, b: { id: string } | null): boolean {
  if (a === b) return true;
  if (!a || !b) return false;
  return a.id === b.id;
}

export default function GuildComponent(props: { guild: Guild }) {
  const [role, setRole] = createSignal<Role | null>(null, {equals: snowflakeEquals});
  const [channel, setChannel] = createSignal<TextChannel | null>(null, {equals: snowflakeEquals});
  return (
    <>
      {/*{props.guild.id}*/}
      <RolePicker
        roles={props.guild.roles}
        selectedRole={role()}
        onRoleSelected={setRole}
      />
      <TextChannelPicker
        channels={props.guild.textChannels}
        selectedChannel={channel()}
        onChannelSelected={setChannel}
      />
    </>
  )
}