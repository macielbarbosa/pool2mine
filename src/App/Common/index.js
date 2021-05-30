import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { SpotLightComponent } from './SpotLightComponent'
import { style } from './style'

export const SpotLight = compose(withStyles(style))(SpotLightComponent)
