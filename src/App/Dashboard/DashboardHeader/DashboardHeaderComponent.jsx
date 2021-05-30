import React, { Component } from 'react'
import { Tooltip, Typography } from '@material-ui/core'
import { Paper } from '../../Paper'
import { IoCopy } from 'react-icons/io5'
import { Hashrate } from '../Hashrate'
import { Shares } from '../Shares'
import { Round } from '../Round'
import { Chart } from 'App/Chart'

export class DashboardHeaderComponent extends Component {
  constructor(props) {
    super(props)
  }

  goToScan = () => {
    window.open(`https://etherscan.io/address/${this.props.appContext.wallet}`)
  }

  copyWallet = () => {
    navigator.clipboard.writeText(this.props.appContext.wallet)
  }

  render() {
    const {
      classes,
      appContext: {
        wallet,
        strings,
        ethereumToCurrency,
        data: {
          currentHashrate,
          averageHashrate,
          reportedHashrate,
          estimatePeriod,
          workersOnline,
          workersOffline,
          pendingBalance,
          estimatedEarning,
          validShares,
          invalidShares,
          staleShares,
        },
      },
    } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.wallet}>
          <Typography variant="h5" onClick={this.goToScan}>
            {wallet}
          </Typography>
          <Tooltip title={strings.copy}>
            <span>
              <IoCopy size={15} onClick={this.copyWallet} />
            </span>
          </Tooltip>
        </div>
        <div className={classes.row}>
          <Paper>
            <Typography variant="h6">Workers on/off</Typography>
            <Typography variant="h5">
              <span className={classes.spotLight}>{workersOnline}</span>/{workersOffline}
            </Typography>
          </Paper>
          <Paper>
            <Typography variant="h6">{strings.pendingBalance}</Typography>
            <Typography variant="h5">
              <span className={classes.spotLight}>{pendingBalance}</span> ETH
            </Typography>
            <Typography variant="subtitle1">≈ {ethereumToCurrency(pendingBalance)}</Typography>
          </Paper>
          <Paper>
            <Typography variant="h6">
              {strings.estimatedEarning} / <span className={classes.spotLight}>{estimatePeriod}</span>
            </Typography>
            <Typography variant="h5">{estimatedEarning} ETH</Typography>
            <Typography variant="subtitle1">≈ {ethereumToCurrency(estimatedEarning)}</Typography>
          </Paper>
        </div>
        <div className={classes.row}>
          <Hashrate />
          <Shares />
        </div>
        <div className={classes.row}>
          <Round />
        </div>
        <Chart />
      </div>
    )
  }
}
