import type { FC } from 'react'
import { Price, ProductImage, Sizes } from '../../entities'
import { Area } from '../../shared/ui'
import { Container, Description, SizeForm } from './ui'
import { Props } from './types'

export const ProductDetailCard: FC<Props> = ({
    id,
    image,
    name,
    sizes,
    price,
    special,
    priceInCents,
    specialInCents,
    description,
}) => (
    <Container>
        <Area area="image">
            <ProductImage
                src={image}
                alt={name}
                width={100}
                height={100}
            />
        </Area>

        <Area area="info">
            <Sizes sizes={sizes}/>
            <Price price={price} special={special}/>
        </Area>

        <Area area="form">
            <SizeForm
                id={id}
                sizes={sizes}
                price={specialInCents || priceInCents}
            />
        </Area>

        <Area area="description">
            <Description description={description}/>
        </Area>
    </Container>
)