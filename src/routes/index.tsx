import {Title} from "@solidjs/meta";
import {toaster} from "@kobalte/core";
import {Button} from "~/components/ui/button";
import {Sample} from "~/metadata/Sample";
import {createSignal} from "solid-js";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "~/components/ui/card";
import {Switch, SwitchControl, SwitchLabel, SwitchThumb} from "~/components/ui/switch";
import {Toast, ToastContent, ToastDescription, ToastProgress, ToastTitle} from "~/components/ui/toast";
import {ModuleMetadata} from "~/app.types";

const SomeModule: ModuleMetadata = {
  name: "Auto-role",
  id: "autorole",
  description: "A module that automatically gives roles to users upon joining the server",
  version: "1.0.0",
  author: "Built-in",
}

const ToastDemo = () => {
  const showToast = () => {
    toaster.show((props) => (
      <Toast toastId={props.toastId}>
        <ToastContent>
          <ToastTitle>
            Scheduled: Catch up
          </ToastTitle>
          <ToastDescription>
            Sending changes to the server...
          </ToastDescription>
        </ToastContent>
        <ToastProgress/>
      </Toast>
    ));
  };

  return (
    <Button class={"mx-2"} variant="outline" onClick={showToast}>
      Add to calendar
    </Button>
  );
};

function Module(props: { module: ModuleMetadata }) {
  const [enabled, setEnabled] = createSignal(true)
  return (
    <Card class={"m-4"}>
      <CardHeader>
        <CardTitle class={"my-4"}>{props.module.name}</CardTitle>
        <CardDescription>{props.module.description}</CardDescription>
      </CardHeader>
      <CardContent class={"flex justify-between"}>
        <Switch checked={enabled()} onChange={setEnabled} class={"flex items-center"}>
          <SwitchControl>
            <SwitchThumb/>
          </SwitchControl>
          <SwitchLabel
            class="text-sm font-medium leading-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-70 mx-2">
            Enabled
          </SwitchLabel>
        </Switch>
        <Button class={"justify-end"}>Configure</Button>
      </CardContent>
    </Card>
  )
}

export default function Home() {
  const [v, setV] = createSignal(Sample.value)
  return (
    <main class="flex flex-col items-center mx-auto p-4 w-full select-none">
      <Title>Discord Bot Builder</Title>

      <h1 class={"text-center my-4"}>Modules</h1>
      <div class="flex flex-wrap">
        <Module module={SomeModule}/>
        <Module module={SomeModule}/>
        <Module module={SomeModule}/>
        <Module module={SomeModule}/>
        <Module module={SomeModule}/>
        <Module module={SomeModule}/>
        <Module module={SomeModule}/>
        <Module module={SomeModule}/>
        <Module module={SomeModule}/>
        <Module module={SomeModule}/>
        <Module module={SomeModule}/>
        <Module module={SomeModule}/>
        <Module module={SomeModule}/>
        <Module module={SomeModule}/>
        <Module module={SomeModule}/>
        <Module module={SomeModule}/>
      </div>
    </main>
  );
}
