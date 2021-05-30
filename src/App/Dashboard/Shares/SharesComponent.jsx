import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { Paper } from 'App/Paper'
import { SpotLight } from 'App/Common'

export class SharesComponent extends Component {
  constructor(props) {
    super(props)
  }

  sharePercentage = value => {
    const { validShares, invalidShares, staleShares } = this.props.appContext.data
    const sharesSum = validShares + invalidShares + staleShares
    return ((value / sharesSum) * 100).toFixed(3).substr(0, 4) + '%'
  }

  render() {
    const {
      classes,
      appContext: {
        strings,
        data: { validShares, staleShares, invalidShares },
      },
    } = this.props
    return (
      <Paper>
        <Typography variant="h6">Shares</Typography>
        <div className={classes.data}>
          <div>
            <Typography variant="h5">{validShares} </Typography>
            <Typography variant="subtitle1">
              {strings.valid} <SpotLight>({this.sharePercentage(validShares)})</SpotLight>
            </Typography>
          </div>
          <div>
            <Typography variant="h5">{staleShares}</Typography>
            <Typography variant="subtitle1">
              {strings.stale} ({this.sharePercentage(staleShares)})
            </Typography>
          </div>
          <div>
            <Typography variant="h5">{invalidShares}</Typography>
            <Typography variant="subtitle1">
              {strings.invalid} ({this.sharePercentage(invalidShares)})
            </Typography>
          </div>
        </div>
      </Paper>
    )
  }
}
