import React, { Component } from 'react'
import { AppContext } from './context'
import { Dashboard } from './Dashboard'
import { Page } from './Page'

import { ThemeProvider } from '@material-ui/core/styles'
import { darkTheme } from '../theme/darkTheme'
import { enumCurrency } from 'utils'
import { ptBr } from 'strings'

export class AppComponent extends Component {
  intervalPrice = null
  intervalBRL = null

  constructor(props) {
    super(props)
    document.title = 'Pool2mine'
    const strings = ptBr
    this.state = {
      theme: darkTheme,
      wallet: '0x6f10b1a2637720cf12153c129918e0a210e8fd74',
      currency: enumCurrency.brl,
      strings,
      data: {
        currentHashrate: 153.1231,
        averageHashrate: 104.2341,
        reportedHashrate: 102.94345,
        estimatePeriod: strings.day,
        workersOnline: 10,
        workersOffline: 0,
        pendingBalance: 0.03245,
        estimatedEarning: 0.05327,
        validShares: 1543,
        invalidShares: 0,
        staleShares: 1,
        pendingShares: 12340000000000,
        approximateReward: 0.093481,
        roundParticipation: 0.34345,
        lastShare: 1622323812891,
      },
    }
  }

  ethereumToCurrency = value => {
    const currencyPrice = 21001
    const currencySymbol = 'R$'
    return `${currencySymbol} ${(value * currencyPrice).toFixed(2)}`
  }

  render() {
    const { wallet, currency, theme, strings, data } = this.state
    const appContext = {
      wallet,
      currency,
      strings,
      ethereumToCurrency: this.ethereumToCurrency,
      data,
    }
    return (
      <AppContext.Provider value={appContext}>
        <ThemeProvider theme={theme}>
          <Page>
            <Dashboard />
          </Page>
        </ThemeProvider>
      </AppContext.Provider>
    )
  }
}
