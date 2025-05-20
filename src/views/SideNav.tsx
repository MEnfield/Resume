import { Box, Drawer, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";

const SideNav: FC<{ drawerWidth: number }> = ({ drawerWidth }) => {
  // Component variables

  // Component state

  // Component effects

  // Function binding

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "primary.main",
          borderRight: "none",
        },
      }}
      variant="permanent"
      anchor="left"
    />
  );
};

export default SideNav;
