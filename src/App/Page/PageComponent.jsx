import React, { Component } from 'react'

export class PageComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { classes, children } = this.props
    return (
      <div className={classes.root}>
        {children}
        {/* <div className={classes.content}>{children}</div> */}
        {/* <div className={classes.walletInput}>
      <TextField
        value="0x6f10b1a2637720cf12153c129918e0a210e8fd74"
        className={classes.textField}
        placeholder="Busque pela sua carteira"
        variant="outlined"
      />
      <IconButton color="primary" className={classes.iconButton}>
        <FaSearch size={20} className={classes.icon} />
      </IconButton>
    </div> */}
      </div>
    )
  }
}
