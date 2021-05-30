import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { Paper } from '../../Paper'

export class DashboardComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props
    return (
      <Paper>
        <Typography variant="h6">Dashboard</Typography>
      </Paper>
    )
  }
}
