import {VoiceChannel} from "~/discord.types";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../ui/select";
import {FaSolidVolumeLow} from "solid-icons/fa";
import {ImVolumeMedium} from "solid-icons/im";

export default function VoiceChannelPicker(props: {
  channels: VoiceChannel[],
  selectedChannel: VoiceChannel | null,
  onChannelSelected: (voiceChannel: VoiceChannel | null) => void,
  class?: string
}) {
  return (
    <Select
      class={props.class}
      options={props.channels}
      optionValue="id"
      value={props.selectedChannel}
      onChange={props.onChannelSelected}
      optionTextValue={v => '@' + v.name}
      placeholder="Select a  channel…"
      itemComponent={(props) => (
        <SelectItem item={props.item}>
          <span class={"flex flex-row items-center"}>
           <ImVolumeMedium class={"me-2"} /> {props.item.rawValue.name}
          </span>
        </SelectItem>
      )}
    >
      <SelectTrigger class="w-[220px]">
        <SelectValue<VoiceChannel>>{(state) => (
          <span class={"flex flex-row items-center"}>
            <ImVolumeMedium class={"me-2"} /> {state.selectedOption().name}
          </span>
        )}</SelectValue>
      </SelectTrigger>
      <SelectContent/>
    </Select>
  )
}