import { withStyles } from '@material-ui/core/styles'
import { withAppContext } from 'App/context'
import { compose } from 'redux'
import { RoundComponent } from './RoundComponent'
import { style } from './style'

export const Round = compose(withAppContext, withStyles(style))(RoundComponent)
