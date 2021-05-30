import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { ChartComponent } from './ChartComponent'
import { style } from './style'

export const Chart = compose(withStyles(style))(ChartComponent)
