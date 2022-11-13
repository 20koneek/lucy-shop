import styled from 'styled-components'
import { Props } from './types'

export const Area = styled.div<Props>`
  display: grid;
  grid-area: ${({ area }) => area};
`