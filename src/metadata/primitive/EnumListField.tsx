import {EnumListPropertyMetadata} from "~/metadata/Metadata";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "~/components/ui/select";

export default function EnumListField(props: {
  key: string;
  value: string[];
  onUpdate: (value: string[]) => void;
  metadata: EnumListPropertyMetadata
}) {
  return (
    <>
      <label class="font-semibold p-2 m-2">
        {props.key}
      </label>
      <Select<string>
        class="w-[220px]"
        multiple={true}
        options={props.metadata.options}
        placeholder="Select values..."
        itemComponent={(props) => (
          <SelectItem item={props.item}>{props.item.rawValue}</SelectItem>
        )}
        value={props.value}
        onChange={(e) => props.onUpdate(e)}
      >
        <SelectContent/>
        <SelectTrigger class="min-w-[180px]" as="div">
          <SelectValue<string[]>>{item =>
            item.selectedOptions().length == 1 ? item.selectedOptions()[0] : ""
          }</SelectValue>
        </SelectTrigger>
      </Select>
    </>
  )
}