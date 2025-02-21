import {RolePropertyMetadata} from "~/metadata/Metadata";
import {Guild, Role} from "~/discord.types";
import RolePicker from "~/components/discord/RolePicker";

export default function RoleField(props: {
  key: string;
  guild: Guild;
  value: Role | null;
  onUpdate: (value: Role | null) => void;
  metadata: RolePropertyMetadata
}) {
  return (
    <>
      <label class="font-semibold p-2 m-2">
        {props.key}
      </label>
      <RolePicker
        roles={props.guild.roles}
        selectedRole={props.value}
        onRoleSelected={props.onUpdate}
      />
    </>
  )
}