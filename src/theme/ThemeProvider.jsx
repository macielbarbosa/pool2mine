import React from 'react'
import { ThemeContext, ThemeControlContext } from './context'
import { enumThemes } from './enumThemes'
import { lightTheme } from './lightTheme'
import { darkTheme } from './darkTheme'

class ThemeProviderComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: darkTheme,
      themeControl: {
        changeTheme: this.changeTheme,
        toggleTheme: this.toggleTheme,
      },
    }
  }

  changeTheme = (theme) => {
    this.setState({ theme })
  }

  toggleTheme = () => {
    const { theme: actualTheme } = this.state
    const newTheme = actualTheme.name === enumThemes.light ? darkTheme : lightTheme
    this.changeTheme(newTheme)
  }

  render() {
    const { children } = this.props
    return (
      <ThemeControlContext.Provider value={this.state.themeControl}>
        <ThemeContext.Provider value={this.state.theme}>{children}</ThemeContext.Provider>
      </ThemeControlContext.Provider>
    )
  }
}
export const ThemeProvider = ThemeProviderComponent
