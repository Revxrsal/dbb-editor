import {TextChannelListPropertyMetadata} from "~/metadata/Metadata";
import {Guild, TextChannel} from "~/discord.types";
import TextChannelListPicker from "~/components/discord/TextChannelListPicker";

export default function TextChannelListField(props: {
  key: string;
  guild: Guild;
  value: TextChannel[];
  onUpdate: (value: TextChannel[]) => void;
  metadata: TextChannelListPropertyMetadata
}) {
  return (
    <>
      <label class="font-semibold p-2 m-2">
        {props.key}
      </label>
      <TextChannelListPicker
        channels={props.guild.textChannels}
        selectedChannels={props.value}
        onChannelsSelected={props.onUpdate}
      />
    </>
  )
}