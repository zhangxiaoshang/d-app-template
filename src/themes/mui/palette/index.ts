import { PaletteMode } from '@mui/material'

const DefaultPalette = (mode: PaletteMode) => {
  // ** Vars
  // const lightColor = "58, 53, 65";
  // const darkColor = "231, 227, 252";
  // const mainColor = mode === "light" ? lightColor : darkColor;

  return {
    mode: mode,
    primary: {
      main: mode === 'light' ? '#000' : '#fff',
      // light: '#42a5f5',
      // dark: '#1565c0',
      // contrastText: '#fff',
    },
    text: {
      // primary: `rgba(${mainColor}, 0.87)`,
      // secondary: `rgba(${mainColor}, 0.68)`,
      // disabled: `rgba(${mainColor}, 0.38)`,
    },
    background: {
      // paper: mode === "light" ? "#FFF" : "#312D4B",
      // default: mode === "light" ? "#F4F5FA" : "#28243D",
    },
  }
}

export default DefaultPalette
