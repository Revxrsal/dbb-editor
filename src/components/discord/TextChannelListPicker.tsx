import {TextChannel} from "~/discord.types";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../ui/select";

export default function TextChannelListPicker(props: {
  channels: TextChannel[],
  selectedChannels: TextChannel[],
  onChannelsSelected: (TextChannel: TextChannel[]) => void,
  class?: string
}) {
  return (
    <Select<TextChannel>
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
            #{props.item.rawValue.name}
          </span>
        </SelectItem>
      )}
    >
      <SelectTrigger class="w-[220px]">
        <SelectValue<TextChannel>>{item =>
          item.selectedOptions().length == 1 ? `#${item.selectedOptions()[0].name}` : "Multiple channels selected"
        }
        </SelectValue>
      </SelectTrigger>
      <SelectContent/>
    </Select>
  )
}