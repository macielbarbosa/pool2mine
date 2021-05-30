import { withStyles } from '@material-ui/core/styles'
import { withAppContext } from 'App/context'
import { compose } from 'redux'
import { HashrateComponent } from './HashrateComponent'
import { style } from './style'

export const Hashrate = compose(withAppContext, withStyles(style))(HashrateComponent)
