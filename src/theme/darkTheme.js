import { createMuiTheme } from '@material-ui/core/styles'
import { enumThemes } from './enumThemes'

const textColor = '#eee'

export const darkTheme = createMuiTheme({
  name: enumThemes.dark,
  typography: {
    body1: {
      color: textColor,
      fontWeight: 450,
    },
    subtitle1: {
      color: '#ccc',
      fontWeight: 550,
    },
    h6: {
      color: textColor,
      fontWeight: 450,
      marginBottom: 10,
    },
    h5: {
      color: textColor,
      fontWeight: 550,
    },
  },
  palette: {
    primary: {
      main: '#1E9FF2',
    },
    secondary: {
      main: '#fff',
    },
    cardBackground: '#151519',
    background: '#151519',
    border: '#333',
    success: {
      main: '#15cd72',
    },
    text: textColor,
  },
})
