import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createTheme,
  CssBaseline,
  PaletteColor,
  PaletteColorOptions,
  Theme,
  ThemeProvider,
} from "@mui/material";

// Module augmentation to allow custom colors in MUI themeing
import "@mui/material/styles/createPalette";
import App from "./Components/app";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
declare module "@mui/material/styles/createPalette" {
  interface CommonColors {
    textColor: PaletteColor;
    backgroundColor: PaletteColor;
    tertiary: PaletteColor;
  }
}
declare module "@mui/material/styles" {
  interface Palette {
    textColor: PaletteColor;
    backgroundColor: PaletteColor;
    tertiary: PaletteColor;
    white: PaletteColor;
  }

  interface PaletteOptions {
    textColor?: PaletteColorOptions;
    backgroundColor?: PaletteColorOptions;
    tertiary?: PaletteColorOptions;
    white?: PaletteColorOptions;
  }
}

// Create custom theme
const { palette } = createTheme();
const { augmentColor } = palette;
const customTheme: Theme = createTheme({
  palette: {
    primary: {
      main: "#396E72",
    },
    secondary: {
      main: "#6CD0D8",
    },
    textColor: augmentColor({
      color: { main: "#323232" },
    }),
    backgroundColor: augmentColor({ color: { main: "#FAFAFA" } }),
    tertiary: augmentColor({ color: { main: "#DADADA" } }),
    white: augmentColor({ color: { main: "#FFFF" } }),
  },
});

root.render(
  <React.StrictMode>
    {/* Css baselined */}
    <CssBaseline />

    {/* Application */}
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
