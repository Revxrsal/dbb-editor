import {Role} from "~/discord.types";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../ui/select";
import {unwrap} from "solid-js/store";

export default function RolePicker(props: {
  roles: Role[],
  selectedRole: Role | null,
  onRoleSelected: (role: Role | null) => void,
  class?: string
}) {
  return (
    <Select
      class={props.class}
      options={props.roles}
      optionValue="id"
      value={props.selectedRole}
      onChange={v => props.onRoleSelected(unwrap(v))}
      optionTextValue={v => '@' + v.name}
      placeholder="Select a role…"
      itemComponent={(props) => (
        <SelectItem item={props.item}>
          <span style={{"color": `#${props.item.rawValue.color.toString(16).padStart(6, '0')}`}}>
            @{props.item.rawValue.name}
          </span>
        </SelectItem>
      )}
    >
      <SelectTrigger class="w-[220px]">
        <SelectValue<Role>>{(state) => '@' + state.selectedOption().name}</SelectValue>
      </SelectTrigger>
      <SelectContent/>
    </Select>
  )
}