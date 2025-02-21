import {Guild, TextChannel} from "~/discord.types";
import TextChannelPicker from "~/components/discord/TextChannelPicker";
import {TextChannelPropertyMetadata} from "~/metadata/Metadata";

export default function TextChannelField(props: {
  key: string;
  guild: Guild;
  value: TextChannel | null;
  onUpdate: (value: TextChannel | null) => void;
  metadata: TextChannelPropertyMetadata
}) {
  return (
    <>
      <label class="font-semibold p-2 m-2">
        {props.key}
      </label>
      <TextChannelPicker
        channels={props.guild.textChannels}
        selectedChannel={props.value}
        onChannelSelected={props.onUpdate}
      />
    </>
  )
}