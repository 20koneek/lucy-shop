import { FC } from 'react'
import { InlineFlex, Typography } from '../../shared/ui'
import { Props } from './types'

export const Price: FC<Props> = ({ price, special }) => (
    <InlineFlex>
        <Typography size="m" lineThrough={!!special}>{price}</Typography>

        {special && <Typography size="m" type="alt">{special}</Typography>}
    </InlineFlex>
)
