import { ExemploComponent } from './ExemploComponent'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'
import { withStringsContext } from 'common/context/StringsProvider'

import { style } from './style'

export const Exemplo = compose(withStyles(style), withStringsContext)(ExemploComponent)
