import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { NameComponent } from './NameComponent'
import { style } from './style'

export const Name = compose(withStyles(style))(NameComponent)
