import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  useColorScheme,
  useScrollTrigger,
} from "@mui/material";
import { DarkMode, LightMode, Menu as MenuIcon } from "@mui/icons-material";
import { FC, useState } from "react";
import { profile, sidenavLinks } from "../data/data";

const ThemeToggle: FC = () => {
  const { mode, systemMode, setMode } = useColorScheme();
  const resolved = mode === "system" ? systemMode : mode;
  const next = resolved === "dark" ? "light" : "dark";

  return (
    <Tooltip title={`Switch to ${next} mode`}>
      <IconButton
        onClick={() => setMode(next)}
        aria-label={`Switch to ${next} mode`}
        size="small"
      >
        {resolved === "dark" ? (
          <LightMode fontSize="small" />
        ) : (
          <DarkMode fontSize="small" />
        )}
      </IconButton>
    </Tooltip>
  );
};

const TopNav: FC = () => {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 8 });

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        color="transparent"
        sx={{
          backdropFilter: "saturate(180%) blur(12px)",
          bgcolor: (theme) =>
            scrolled
              ? `rgba(${theme.palette.mode === "dark" ? "11,21,34" : "255,255,255"}, 0.86)`
              : "transparent",
          borderBottom: 1,
          borderColor: scrolled ? "divider" : "transparent",
          transition: "background-color .25s ease, border-color .25s ease",
        }}
      >
        <Toolbar sx={{ gap: 1, minHeight: { xs: 60, md: 64 } }}>
          <Link
            href="#about"
            underline="none"
            color="text.primary"
            sx={{ display: "flex", alignItems: "center", gap: 1, mr: "auto" }}
          >
            <Box
              aria-hidden
              sx={{
                width: 28,
                height: 28,
                borderRadius: "8px",
                display: "grid",
                placeItems: "center",
                bgcolor: "primary.main",
                color: "primary.contrastText",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              ME
            </Box>
            <Typography sx={{ fontWeight: 700, letterSpacing: "-0.01em" }}>
              {profile.name}
            </Typography>
          </Link>

          <Stack
            direction="row"
            spacing={0.5}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {sidenavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.url}
                underline="none"
                color="text.secondary"
                sx={{
                  px: 1.5,
                  py: 0.75,
                  borderRadius: 2,
                  fontWeight: 500,
                  fontSize: 14,
                  "&:hover": { color: "primary.main", bgcolor: "action.hover" },
                }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>

          <ThemeToggle />

          <IconButton
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
            sx={{ display: { xs: "inline-flex", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 240, pt: 1 }} role="presentation">
          <List>
            {sidenavLinks.map((link) => (
              <ListItemButton
                key={link.label}
                component="a"
                href={link.url}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default TopNav;
