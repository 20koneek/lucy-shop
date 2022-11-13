import { FC } from 'react'
import { Typography } from '../../shared/ui'
import { Props } from './types'

export const Sizes: FC<Props> = ({ sizes }) => (
    <Typography size="s" type="secondary">{sizes.join(', ')}</Typography>
)
