import { FC } from 'react'
import { Typography } from '../../../../shared/ui'
import { Price, Sizes } from '../../../../entities'
import { Container } from '../container'
import { Props } from './types'

export const InfoBlock: FC<Props> = ({ name, sizes, price, special }) => (
    <Container>
        <Typography>{name}</Typography>
        <Sizes sizes={sizes}/>
        <Price price={price} special={special}/>
    </Container>
)
