import { FC } from 'react'
import { Typography } from '../../../../shared/ui'
import { Props } from './types'
import { Price } from '../price'
import { Container } from '../container'

export const InfoBlock: FC<Props> = ({ name, sizes, price, special }) => (
    <Container>
        <Typography>{name}</Typography>
        <Typography size="s" type="secondary">{sizes.join(', ')}</Typography>
        <Price price={price} special={special}/>
    </Container>
)
