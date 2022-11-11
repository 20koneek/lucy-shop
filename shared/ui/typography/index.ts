import styled from 'styled-components'
import { FontSizeStyle, ItalicStyle, SizeStyle, WeightStyle } from './styles'
import type { Props } from './types'

export const Typography = styled.div<Props>`
  font-weight: ${({ weight = 'lighter' }) => WeightStyle[weight]};
  color: ${({ theme, type = 'primary' }) => theme.colors[type]};
  ${({ italic }) => italic ? ItalicStyle : ''}
  ${({ size = 'l' }) => FontSizeStyle[size]}
`

export const Circle = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: self-end;
  color: ${({ theme }) => theme.colors.contrast};
  background-color: ${({ theme }) => theme.background.alt};
  ${({ size = 'l' }) => SizeStyle[size]}
`
