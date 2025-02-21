import {Router} from "@solidjs/router";
import {FileRoutes} from "@solidjs/start/router";
import {Suspense} from "solid-js";
import Nav from "~/components/Nav";
import "./app.css";
import {ColorModeProvider, ColorModeScript} from "@kobalte/core";
import {MetaProvider} from "@solidjs/meta";
import {ToastList, ToastRegion} from "~/components/ui/toast";

export default function App() {
  return (
    <Router
      root={props => (
        <MetaProvider>
          <Nav/>
          <Suspense>
            <ColorModeScript/>
            <ColorModeProvider>
              {props.children}
              <ToastRegion>
                <ToastList/>
              </ToastRegion>
            </ColorModeProvider>
          </Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes/>
    </Router>
  );
}
