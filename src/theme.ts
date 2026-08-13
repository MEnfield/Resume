import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    sectionLabel: React.CSSProperties;
    eyebrow: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    sectionLabel?: React.CSSProperties;
    eyebrow?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    sectionLabel: true;
    eyebrow: true;
  }
}

const sans = '"Roboto", -apple-system, "Segoe UI", Arial, sans-serif';
const mono = '"Roboto Mono", ui-monospace, "SFMono-Regular", monospace';

/**
 * Palette mirrors the PDF resume (ink #0F2440, accent #1A5FB4) so the page and
 * the download read as one identity rather than two unrelated documents.
 */
const theme = createTheme({
  cssVariables: { colorSchemeSelector: "data-mui-color-scheme" },
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: { main: "#1A5FB4", dark: "#0F2440", contrastText: "#FFFFFF" },
        secondary: { main: "#0F2440" },
        background: { default: "#FFFFFF", paper: "#FFFFFF" },
        text: { primary: "#16283D", secondary: "#5A6B7C" },
        divider: "#DFE6ED",
      },
    },
    dark: {
      palette: {
        mode: "dark",
        primary: { main: "#6BA6F5", dark: "#0B1522", contrastText: "#0B1522" },
        secondary: { main: "#C9DBF2" },
        background: { default: "#0B1522", paper: "#111E2E" },
        text: { primary: "#E6EDF5", secondary: "#96A7B9" },
        divider: "#22334A",
      },
    },
  },

  shape: { borderRadius: 12 },

  typography: {
    fontFamily: sans,
    h1: { fontFamily: sans, fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontFamily: sans, fontWeight: 700, letterSpacing: "-0.01em" },
    h3: { fontFamily: sans, fontWeight: 700 },
    h4: { fontFamily: sans, fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
    sectionLabel: {
      fontFamily: mono,
      fontSize: "0.78rem",
      fontWeight: 500,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
    },
    eyebrow: {
      fontFamily: mono,
      fontSize: "0.72rem",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth", WebkitFontSmoothing: "antialiased" },
        "@media (prefers-reduced-motion: reduce)": {
          "*": { animation: "none !important", transition: "none !important" },
          html: { scrollBehavior: "auto" },
        },
        "::selection": { background: "#1A5FB4", color: "#fff" },
      },
    },
    MuiPaper: { defaultProps: { elevation: 0 } },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 999, paddingInline: 20 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 8, fontWeight: 500 },
      },
    },
    MuiLink: {
      defaultProps: { underline: "hover" },
      styleOverrides: { root: { fontWeight: 600 } },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: { borderRadius: 8, padding: "8px 12px", fontSize: 13 },
      },
    },
  },
});

export default theme;
