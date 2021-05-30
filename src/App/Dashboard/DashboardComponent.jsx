import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { Paper } from '../Paper'
import { DashboardHeader } from './DashboardHeader'

export class DashboardComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <DashboardHeader />
      </div>
    )
  }
}
