import type { FC } from 'react'
import { ProductImage } from '../../entities'
import { Container, InfoBlock } from './ui'
import { Props } from './types'

export const ProductCard: FC<Props> = ({ image, name, sizes, price, special }) => (
    <Container>
        <ProductImage
            src={image}
            alt={name}
            width={100}
            height={100}
        />
        <InfoBlock
            name={name}
            sizes={sizes}
            price={price}
            special={special}
        />
    </Container>
)