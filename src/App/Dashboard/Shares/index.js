import { withStyles } from '@material-ui/core/styles'
import { withAppContext } from 'App/context'
import { compose } from 'redux'
import { SharesComponent } from './SharesComponent'
import { style } from './style'

export const Shares = compose(withAppContext, withStyles(style))(SharesComponent)
