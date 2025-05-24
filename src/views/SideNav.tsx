import { Box, Drawer, Grid, Link, Typography } from "@mui/material";
import { FC, useState } from "react";
import { sidenavLinks } from "../data/data";

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
    >
      <Grid container direction="column" height="100%">
        <Grid height={150} alignSelf="center">
          <Box
            sx={{ width: "1px" }}
            height="100%"
            borderLeft={(theme) => `3px solid ${theme.palette.white.main}`}
          />
        </Grid>
        <Grid container direction="column" gap={1}>
          {sidenavLinks.map((link) => (
            <Grid key={link.label}>
              <Link href={link.url} color="text.primary" underline="none">
                <Box
                  textAlign="center"
                  p={(theme) => theme.spacing(1, 0)}
                  sx={{
                    transition: "background-color 0.2s ease-in-out",
                    "&:hover": {
                      backgroundColor: "accent.main",
                    },
                  }}
                >
                  <Typography
                    fontSize={16}
                    lineHeight="24px"
                    color="white.main"
                    fontWeight="bold"
                    sx={{
                      transition: "font-size 0.2s ease-in-out",
                      "&:hover": { fontSize: 18, color: "primary.main" },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid size="grow" alignSelf="center">
          <Box
            sx={{ width: "1px" }}
            height="100%"
            borderLeft={(theme) => `3px solid white`}
          />
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default SideNav;
