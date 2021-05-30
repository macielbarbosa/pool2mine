import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { Paper } from 'App/Paper'
import { SpotLight } from 'App/Common'

export class RoundComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lastShareSeconds: null,
    }
  }

  componentDidMount = () => {
    const { lastShare } = this.props.appContext.data
    this.interval = setInterval(() => {
      this.setState({ lastShareSeconds: (Date.now() - lastShare) / 1000 })
    }, 1000)
  }

  get formatedPendingShares() {
    // todo: verificar esse calculo
    const { pendingShares } = this.props.appContext.data
    let unit = 'G'
    let factor = 9
    if (pendingShares > Math.pow(10, 9)) {
      unit = 'T'
      factor = 12
    } else if (pendingShares > Math.pow(10, 12)) {
      unit = 'P'
      factor = 15
    }
    return `${(pendingShares / Math.pow(10, factor)).toFixed(2)} ${unit}`
  }

  get lastShare() {
    const { lastShareSeconds } = this.state
    const hours = lastShareSeconds / 3600
    const minutes = (lastShareSeconds % 3600) / 60
    const seconds = lastShareSeconds % 60
    const format = (value, symbol, condition) => (condition ? `${Math.floor(value)}${symbol}` : '')
    return (
      format(hours, 'h', lastShareSeconds > 3600) +
      format(minutes, 'm', lastShareSeconds > 60) +
      format(seconds, 's', true)
    )
  }

  render() {
    const {
      classes,
      appContext: {
        strings,
        data: { approximateReward, roundParticipation },
      },
    } = this.props
    const { lastShareSeconds } = this.state
    return (
      <Paper>
        <Typography variant="h6">Round</Typography>
        <div className={classes.data}>
          <div>
            <Typography variant="h5">
              <SpotLight>{this.formatedPendingShares}</SpotLight>
            </Typography>
            <Typography variant="subtitle1">{strings.pendingShares}</Typography>
          </div>
          <div>
            <Typography variant="h5">{this.lastShare}</Typography>
            <Typography variant="subtitle1">{strings.lastSubmittedShare}</Typography>
          </div>
          <div>
            <Typography variant="h5">{roundParticipation.toFixed(2)}%</Typography>
            <Typography variant="subtitle1">{strings.roundParticipation}</Typography>
          </div>
          <div>
            <Typography variant="h5">{approximateReward.toFixed(5)} ETH</Typography>
            <Typography variant="subtitle1">{strings.approximateReward}</Typography>
          </div>
        </div>
      </Paper>
    )
  }
}
