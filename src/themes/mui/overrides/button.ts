// ** MUI Imports
import { Theme } from '@mui/material/styles'

const Button = (theme: Theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
        sizeLarge: {
          height: '52px',
          borderRadius: '10px',
        },
        containedPrimary: {
          background: 'linear-gradient(90deg, #33D6E5 0%, #6201EB 100%)',
          boxShadow: '0px 5px 10px rgba(75,109,232,0.52)',

          '&.Mui-disabled': {
            opacity: 0.5,
            color: '#fff',
            cursor: 'not-allowed',
            pointerEvents: 'painted',
          },
        },
      },
    },
  }
}

export default Button
