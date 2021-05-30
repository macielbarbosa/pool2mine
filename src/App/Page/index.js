import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { PageComponent } from './PageComponent'
import { style } from './style'

export const Page = compose(withStyles(style))(PageComponent)
