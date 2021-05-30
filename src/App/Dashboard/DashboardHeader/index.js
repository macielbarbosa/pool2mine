import { withStyles } from '@material-ui/core/styles'
import { withAppContext } from 'App/context'
import { compose } from 'redux'
import { DashboardHeaderComponent } from './DashboardHeaderComponent'
import { style } from './style'

export const DashboardHeader = compose(withAppContext, withStyles(style))(DashboardHeaderComponent)
