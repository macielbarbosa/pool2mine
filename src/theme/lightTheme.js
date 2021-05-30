import { createMuiTheme } from '@material-ui/core/styles'
import { enumThemes } from './enumThemes'

export const lightTheme = createMuiTheme({
  name: enumThemes.light,
  typography: {},
  palette: {
    primary: {
      main: '#1E9FF2',
      //dark: '#1E9FF2',
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
    },
    success: {
      main: '#fff',
      dark: '#fff',
      light: '#fff',
    },
    warning: {
      main: '#fff',
      dark: '#fff',
      light: '#fff',
    },
    error: { main: '#fff', dark: '#fff', light: '#fff' },
  },
})
