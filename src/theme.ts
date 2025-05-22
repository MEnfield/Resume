import {
  PaletteColor,
  PaletteColorOptions,
  createTheme,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: PaletteColor;
    white: PaletteColor;
    accent: PaletteColor;
  }

  interface PaletteOptions {
    tertiary: PaletteColorOptions;
    white: PaletteColorOptions;
    accent: PaletteColorOptions;
  }

  interface TypographyVariants {
    sectionHeader: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    sectionHeader?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    sectionHeader: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    white: true;
    accent: true;
  }
}

const themeStyles = {
  fontFamily: "Roboto, arial, san_serif",
  fontRegular: "Roboto, arial, san_serif",
  fontMedium: "Roboto, arial, san_serif",
  fontBold: "Roboto, arial, san_serif",
  fontLight: "Roboto, arial, san_serif",
  fontAccent: "'allstate_accent', arial, san_serif",
  borderRadius: 0,
  textH1Size: "2.5rem",
  textH2Size: "1.5rem",
  textH3Size: "1.375rem",
  textH4Size: "1rem",
  textH5Size: "0.875rem",
  textH6Size: "1rem",
  textInputLabel: "0.875rem",
  tertiary: "#DADADA",
  white: "#FFF",
  text: "#323232",
  primary: "#396E72",
  background: "#FAFAFA",
  secondary: "#6CD0D8",
  accent: "#2BA6AF",
};

const { palette } = createTheme();
const theme = createTheme({
  palette: {
    primary: {
      main: themeStyles.primary,
    },
    secondary: {
      main: themeStyles.secondary,
    },
    text: {
      primary: themeStyles.text,
    },
    background: {
      default: themeStyles.background,
    },
    tertiary: palette.augmentColor({
      color: { main: themeStyles.tertiary },
    }),
    white: palette.augmentColor({
      color: { main: themeStyles.white },
    }),
    accent: palette.augmentColor({
      color: { main: themeStyles.accent },
    }),
  },

  typography: {
    fontFamily: themeStyles.fontFamily,
    sectionHeader: {
      fontFamily: "Roboto Mono, Roboto, arial, san_serif",
      fontSize: "40px",
      lineHeight: "52px",
      // fontWeight: "bold",
    },
    // h1: {
    //   fontFamily: themeStyles.fontBold,
    //   fontSize: themeStyles.textH1Size,
    // },
    // h2: {
    //   fontFamily: themeStyles.fontMedium,
    //   fontSize: themeStyles.textH2Size,
    // },
    // h3: {
    //   fontFamily: themeStyles.fontBold,
    //   fontSize: themeStyles.textH3Size,
    // },
    // h4: {
    //   fontFamily: themeStyles.fontRegular,
    //   fontSize: themeStyles.textH4Size,
    // },
    // h5: {
    //   fontFamily: themeStyles.fontMedium,
    //   fontSize: themeStyles.textH5Size,
    // },
    // h6: {
    //   fontFamily: themeStyles.fontBold,
    //   fontSize: themeStyles.textH6Size,
    // },
    // body1: {
    //   color: themeStyles.textColor,
    // },
    // body2: {
    //   color: themeStyles.textColor,
    // },
    // button: {
    //   textTransform: "none",
    //   fontFamily: themeStyles.fontBold,
    // },
  },

  // shape: {
  //   borderRadius: themeStyles.borderRadius,
  // },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "3px",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: "8px",
          padding: "16px",
          backgroundColor: themeStyles.primary,
          fontSize: "14px",
          textAlign: "center",
        },
        tooltipArrow: {
          backgroundColor: themeStyles.primary,
          borderColor: themeStyles.primary,
          fill: themeStyles.primary,
        },
      },
    },
  },

  // breakpoints: {
  //   values: {
  //     xs: 0,
  //     sm: 600,
  //     md: 1023, //This is where we switch to mobile
  //     lg: 1200,
  //     xl: 1536,
  //   },
  // },
});

export default theme;
