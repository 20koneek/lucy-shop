import { FC } from 'react'
import { Typography } from '../../../../shared/ui'
import { Price } from '../../../../entities'
import { Container } from '../container'
import { Props } from './types'

export const InfoBlock: FC<Props> = ({ name, sizes, price, special }) => (
    <Container>
        <Typography>{name}</Typography>
        <Typography size="s" type="secondary">{sizes.join(', ')}</Typography>
        <Price price={price} special={special}/>
    </Container>
)
