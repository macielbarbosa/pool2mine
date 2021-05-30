import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { Paper } from 'App/Paper'
import { SpotLight } from 'App/Common'

export class HashrateComponent extends Component {
  constructor(props) {
    super(props)
  }

  formatHashrate = value => {
    const isMega = value < 1000
    const number = isMega ? value : value / 1000
    const symbol = isMega ? 'M' : 'G'
    return `${number.toFixed(2)} ${symbol}H/s`
  }

  render() {
    const {
      classes,
      appContext: {
        strings,
        data: { currentHashrate, averageHashrate, reportedHashrate },
      },
    } = this.props

    return (
      <Paper>
        <Typography variant="h6">Hashrate</Typography>
        <div className={classes.data}>
          <div>
            <Typography variant="h5">{this.formatHashrate(currentHashrate)}</Typography>
            <Typography variant="subtitle1">{strings.current}</Typography>
          </div>
          <div>
            <Typography variant="h5">{this.formatHashrate(averageHashrate)}</Typography>
            <Typography variant="subtitle1">{strings.average}</Typography>
          </div>
          <div>
            <Typography variant="h5">
              <SpotLight>{this.formatHashrate(reportedHashrate)}</SpotLight>
            </Typography>
            <Typography variant="subtitle1">{strings.reported}</Typography>
          </div>
        </div>
      </Paper>
    )
  }
}
