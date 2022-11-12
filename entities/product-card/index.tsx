import type { FC } from 'react'
import { Container, ProductImage } from './ui'
import { Props } from './types'
import { InfoBlock } from './ui/info-block'

export const ProductCard: FC<Props> = ({ product }) => (
    <Container>
        <ProductImage
            src={product.image}
            alt={product.name}
            width={100}
            height={100}
        />
        <InfoBlock
            name={product.name}
            sizes={product.sizes}
            price={product.price}
            special={product.special}
        />
    </Container>
)