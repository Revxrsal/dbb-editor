import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem, NavigationMenuLink,
  NavigationMenuTrigger
} from "~/components/ui/navigation-menu";

export default function Nav() {
  return (
    <NavigationMenu class="p-4">
      <NavigationMenuItem>
        <NavigationMenuTrigger as={"a"}>Home</NavigationMenuTrigger>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Support</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Discord</NavigationMenuLink>
          <NavigationMenuLink>GitHub</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Wiki</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Properties</NavigationMenuLink>
          <NavigationMenuLink>Modules</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}
