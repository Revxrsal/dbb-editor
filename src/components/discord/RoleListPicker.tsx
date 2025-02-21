import {Role} from "~/discord.types";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "../ui/select";

export default function RoleListPicker(props: {
  roles: Role[],
  selectedRoles: Role[],
  onRolesSelected: (role: Role[]) => void,
  class?: string
}) {
  return (
    <Select<Role>
      multiple={true}
      class={props.class}
      options={props.roles}
      optionValue="id"
      value={props.selectedRoles}
      onChange={props.onRolesSelected}
      optionTextValue={v => '@' + v.name}
      placeholder="Select roles..."
      itemComponent={(props) => (
        <SelectItem item={props.item}>
          <ColoredRole role={props.item.rawValue}/>
        </SelectItem>
      )}
    >
      <SelectTrigger class="w-[220px]">
        <SelectValue<Role>>{item =>
          item.selectedOptions().length == 1 ? <ColoredRole role={item.selectedOptions()[0]}/> : "Multiple roles selected"
        }</SelectValue>
      </SelectTrigger>
      <SelectContent/>
    </Select>
  )
}

function ColoredRole(props: { role: Role }) {
  return (
    <span style={{"color": `#${props.role.color.toString(16).padStart(6, '0')}`}}>
      @{props.role.name}
    </span>
  )
}