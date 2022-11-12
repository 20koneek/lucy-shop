import type { FC } from 'react'
import { Badge, Icon } from '../../shared/ui'
import { Props } from './types'

export const CardButton: FC<Props> = ({ count }) => (
    <Badge count={count}>
        <Icon type="card"/>
    </Badge>
)