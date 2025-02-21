import {VoiceChannel} from "~/discord.types";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../ui/select";
import {ImVolumeMedium} from "solid-icons/im";

export default function VoiceChannelListPicker(props: {
  channels: VoiceChannel[],
  selectedChannels: VoiceChannel[],
  onChannelsSelected: (voiceChannel: VoiceChannel[]) => void,
  class?: string
}) {
  return (
    <Select<VoiceChannel>
      multiple={true}
      class={props.class}
      options={props.channels}
      optionValue="id"
      value={props.selectedChannels}
      onChange={props.onChannelsSelected}
      optionTextValue={v => '@' + v.name}
      placeholder="Select a  channel…"
      itemComponent={(props) => (
        <SelectItem item={props.item}>
          <span class={"flex flex-row items-center"}>
           <ImVolumeMedium class={"me-2"}/> {props.item.rawValue.name}
          </span>
        </SelectItem>
      )}
    >
      <SelectTrigger class="w-[220px]">
        <SelectValue<VoiceChannel>>{item =>
          item.selectedOptions().length == 1 ?
            <VoiceChannelWithIcon channel={item.selectedOptions()[0]}/>
            : "Multiple channels selected"
        }
        </SelectValue>
      </SelectTrigger>
      <SelectContent/>
    </Select>
  )
}

function VoiceChannelWithIcon(props: { channel: VoiceChannel }) {
  return (
    <span class={"flex flex-row items-center"}>
       <ImVolumeMedium class={"me-2"}/> {props.channel.name}
      </span>
  )
}