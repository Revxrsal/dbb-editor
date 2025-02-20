import {TextChannel} from "~/discord.types";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../ui/select";

export default function TextChannelPicker(props: {
  channels: TextChannel[],
  selectedChannel: TextChannel | null,
  onChannelSelected: (textChannel: TextChannel | null) => void,
}) {
  return (
    <Select
      options={props.channels}
      optionValue="id"
      value={props.selectedChannel}
      onChange={props.onChannelSelected}
      optionTextValue={v => '@' + v.name}
      placeholder="Select a  channel…"
      itemComponent={(props) => (
        <SelectItem item={props.item}>
            #{props.item.rawValue.name}
        </SelectItem>
      )}
    >
      <SelectTrigger class="w-[220px]">
        <SelectValue<TextChannel>>{(state) => '#' + state.selectedOption().name}</SelectValue>
      </SelectTrigger>
      <SelectContent/>
    </Select>
  )
}