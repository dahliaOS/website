import { useState } from "react";
import { Drawer as DrawerComponent } from "@material-ui/core";

export const Drawer = (): JSX.Element => {
  const [openDrawer, setOpenDrawer] = useState({
    left: false,
  });

  const toggleDrawer = (open: boolean) => (e: any) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }

    setOpenDrawer({ ...openDrawer, ["left"]: open });
  };

  return (
    <DrawerComponent
      anchor={"left"}
      open={openDrawer["left"]}
      onClose={toggleDrawer(false)}
    >
      <h1>test</h1>
    </DrawerComponent>
  );
};
