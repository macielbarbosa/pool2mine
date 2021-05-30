import React, { Component } from 'react'

export class SpotLightComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes, children } = this.props
    return <span className={classes.spotLight}>{children}</span>
  }
}
