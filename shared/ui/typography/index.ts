import styled, { css } from 'styled-components'
import type { Props, Size, Weight } from './types'

const ItalicStyle = css`font-style: italic;`

const SizeStyle: Record<Size, ReturnType<typeof css>> = {
    xs: css`
      font-size: 9px;
      line-height: 12px;
    `,
    s: css`
      font-size: 11px;
      line-height: 15px;
    `,
    m: css`
      font-size: 12px;
      line-height: 16px;
    `,
    l: css`
      font-size: 14px;
      line-height: 19px;
    `,
    xl: css`
      font-size: 30px;
      line-height: 41px;
    `,
}
const WeightStyle: Record<Weight, number> = {
    lighter: 400,
    normal: 500,
    bold: 800,
}


export const Typography = styled.div<Props>`
  font-weight: ${({ weight = 'lighter' }) => WeightStyle[weight]};
  color: ${({ theme, type = 'primary' }) => theme.colors[type]};
  ${({ italic }) => italic ? ItalicStyle : ''}
  ${({ size = 'l' }) => SizeStyle[size]}
`

