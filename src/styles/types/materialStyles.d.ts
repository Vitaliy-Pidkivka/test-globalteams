import "@mui/material/styles"
import "@mui/system/createTheme"
// import "@mui/system/createTheme/createBreakpoints"

import { Typography } from "types/theme"

declare module "@mui/material/styles" {
  interface Theme {
    shape: {
      borderRadius: (factor: number) => string
    }
    typography: Typography
  }
  interface Palette {
    warning: {
      main: string
    }
    white: {
      main: string
      secondary: string
    }
    lightblue: {
      main: string
      light: string
      dark: string
      100: string
    }
  }
}
