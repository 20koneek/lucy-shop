import type { FC } from 'react'
import { Container } from './ui'
import { Props } from './types'
import { InfoBlock } from '../product-card/ui'
import { ProductImage } from '../../entities'

export const ProductDetailCard: FC<Props> = ({ image, name, sizes, price, special }) => (
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