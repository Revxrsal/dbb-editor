import {VoiceChannelListPropertyMetadata} from "~/metadata/Metadata";
import {Guild, VoiceChannel} from "~/discord.types";
import VoiceChannelListPicker from "~/components/discord/VoiceChannelListPicker";

export default function VoiceChannelListField(props: {
  key: string;
  guild: Guild;
  value: VoiceChannel[];
  onUpdate: (value: VoiceChannel[]) => void;
  metadata: VoiceChannelListPropertyMetadata
}) {
  return (
    <>
      <label class="font-semibold p-2 m-2">
        {props.key}
      </label>
      <VoiceChannelListPicker
        channels={props.guild.voiceChannels}
        selectedChannels={props.value}
        onChannelsSelected={props.onUpdate}
      />
    </>
  )
}