import { css } from 'styled-components'
import type { Size, Weight } from './types'

export const ItalicStyle = css`font-style: italic;`

export const LineThrough = css`text-decoration: line-through;`

export const FontSizeStyle: Record<Size, ReturnType<typeof css>> = {
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

const borderGenerate = (size: number) => css`
  min-width: ${size}px;
  height: ${size}px;
  border-radius: ${Math.round(size / 2)}px;
  padding: 0 ${Math.round(size / 4)}px;
`

export const SizeStyle: Record<Size, ReturnType<typeof css>> = {
    xs: borderGenerate(13),
    s: borderGenerate(16),
    m: borderGenerate(17),
    l: borderGenerate(20),
    xl: borderGenerate(42),
}

export const WeightStyle: Record<Weight, number> = {
    lighter: 400,
    normal: 500,
    bold: 800,
}