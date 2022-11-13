import type { FC } from 'react'
import { ProductDetailCard } from '../../features'
import { MainLayout } from '../../shared/ui'
import { Props } from './types'

export const Product: FC<Props> = ({ name, sizes, image, price, special }) => (
    <MainLayout title={name}>
        <ProductDetailCard
            name={name}
            sizes={sizes}
            image={image}
            price={price}
            special={special}
        />
    </MainLayout>
)