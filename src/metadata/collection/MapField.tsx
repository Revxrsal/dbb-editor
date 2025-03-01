import {createEmptyValue, MapPropertyMetadata} from "~/metadata/Metadata";
import {For} from "solid-js";
import {DynamicField} from "~/metadata/DynamicField";
import {Button} from "~/components/ui/button";
import {createStore} from "solid-js/store";
import {Guild} from "~/discord.types";

export default function MapField(props: {
  key: any;
  guild: Guild;
  onUpdate: (value: any) => void;
  value: any;
  metadata: MapPropertyMetadata;
  nesting: number;
}) {
  const [value, setValue] = createStore<Record<any, any>>(props.value);
  return (
    <div class={"flex flex-col justify-around w-full"}>
      <label class="font-semibold p-2 m-2">
        {props.key}
      </label>
      <For each={Object.entries(value)}>{([subKey, value]) => (
        <div class={"flex align-middle rounded-md my-4 p-2 mx-4"}>
          <DynamicField
            guild={props.guild}
            class={"mx-4 my-4"}
            metadata={props.metadata.keyType}
            nesting={props.nesting}
            key={"Key"}
            value={subKey}
            onUpdate={(newKey) => {
                setValue(subKey, undefined)
                setValue(newKey, value)
            }}/>
          <DynamicField
            guild={props.guild}
            class={"mx-4"}
            metadata={props.metadata.valueType}
            nesting={props.nesting}
            key={`Value`}
            value={value}
            onUpdate={(val) => {
              setValue(subKey, val)
            }}/>
        </div>
      )}</For>
      <Button
        style={{"margin-inline-start": `${(props.nesting) * 4}px`}}
        class={"my-4"}
        onClick={() => {
          const k = createEmptyValue(props.metadata.keyType)
          props.onUpdate({...props.value, [k]: createEmptyValue(props.metadata.valueType)})
        }}
        disabled={Object.keys(props.value).length >= props.metadata.maxSize}
      >
        Add new entry
      </Button>
    </div>
  )
}
