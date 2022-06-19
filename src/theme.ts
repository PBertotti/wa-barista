import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

const useTheme = (mode?: PaletteMode) =>
  createTheme({
    palette: {
      mode: mode || "light",
      primary: {
        main: "#951B00",
      },
      secondary: {
        main: "#3A3A3A",
      },
    },
    typography: {
      fontFamily: ["Nunito Sans"].join(","),
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  });

export { useTheme };
