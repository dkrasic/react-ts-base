import 'styled-components'
import { Theme } from './types'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
