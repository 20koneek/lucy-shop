import type { FC } from 'react'
import { ProductDetailCard } from '../../features'
import { MainLayout } from '../../shared/ui'
import { Props } from './types'

export const Product: FC<Props> = ({
    id,
    name,
    sizes,
    image,
    price,
    special,
    priceInCents,
    specialInCents,
    description,
}) => (
    <MainLayout title={name}>
        <ProductDetailCard
            id={id}
            name={name}
            sizes={sizes}
            image={image}
            price={price}
            special={special}
            priceInCents={priceInCents}
            specialInCents={specialInCents}
            description={description}
        />
    </MainLayout>
)