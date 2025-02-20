import {Title} from "@solidjs/meta";
import {Button} from "~/components/ui/button";
import GuildComponent from "~/components/discord/GuildComponent";
import {Playground} from "~/discord.types";

export default function Home() {
  // const [v, setV] = createStore(Sample.value)
  return (
    <main class="flex flex-col mx-auto p-4 w-full select-none">
      <Title>Discord Bot Builder</Title>

      <div class={"flex"}>
        <div class={"flex flex-col"}>
          <h1>Discord Bot Builder</h1>
          <p class={"w-3/4"}>A 100% zero-code, royalty-free, self-hosted, customizable Discord Bot Builder for Minecraft
            servers</p>
          <div class="flex my-8">
            <Button class={"m-2"}>Get started</Button>
            <Button class={"m-2"} variant={"ghost"}>Browse modules</Button>
          </div>
        </div>
      </div>
      <GuildComponent guild={Playground}/>
      {/*<DynamicField metadata={Sample.metadata} nesting={0} key={"hi"} value={v} onUpdate={setV}/>*/}
    </main>
  );
}
