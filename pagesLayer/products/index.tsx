import type { FC } from 'react'
import { Grid, MainLayout } from '../../shared/ui'
import { Props } from './types'
import api from './api'
import { ProductCard } from '../../entities'

export const Products: FC<Props> = () => (
    <MainLayout title="New in">
        <Grid>
            {api.data.map((product) => (
                <ProductCard key={product.id} product={product as any}/>
            ))}
        </Grid>
    </MainLayout>
)