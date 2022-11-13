import { FC } from 'react'
import { decode } from 'html-entities'
import { Typography } from '../../../../shared/ui'
import { Props } from './types'

export const Description: FC<Props> = ({ description }) => (
    <Typography type="secondary">
        <div dangerouslySetInnerHTML={{ __html: decode(description) }}/>
    </Typography>
)
