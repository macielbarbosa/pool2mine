import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { DashboardComponent } from './DashboardComponent'
import { style } from './style'

export const Dashboard = compose(withStyles(style))(DashboardComponent)
