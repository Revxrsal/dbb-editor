import {RoleListPropertyMetadata} from "~/metadata/Metadata";
import {Guild, Role} from "~/discord.types";
import RoleListPicker from "~/components/discord/RoleListPicker";

function includesRole(list: Role[], value: Role): boolean {
  return list.find(v => v.id == value.id) != undefined;
}

export default function RoleListField(props: {
  key: string;
  guild: Guild;
  value: Role[];
  onUpdate: (value: Role[]) => void;
  metadata: RoleListPropertyMetadata
}) {
  return (
    <>
      <label class="font-semibold p-2 m-2">
        {props.key}
      </label>
      <RoleListPicker
        roles={props.guild.roles}
        onRolesSelected={props.onUpdate}
        selectedRoles={props.value}
      />
    </>
  )
}