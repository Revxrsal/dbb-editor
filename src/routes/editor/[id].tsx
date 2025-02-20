import {Title} from "@solidjs/meta";

export default function Id() {
  return (
    <main class="flex flex-col mx-auto p-4 w-full select-none">
      <Title>Discord Bot Builder</Title>

      <div class={"flex"}>
        <div class={"flex flex-col"}>
          <h1>Discord Bot Builder</h1>
          <p class={"w-3/4"}>A 100% zero-code, royalty-free, self-hosted, customizable Discord Bot Builder for Minecraft servers</p>
        </div>
      </div>
      {/*<DynamicField metadata={Sample.metadata} nesting={0} key={"hi"} value={v} onUpdate={setV}/>*/}
    </main>
  )
}