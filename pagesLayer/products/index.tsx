import type { FC } from 'react'
import Link from 'next/link'
import { Grid, MainLayout } from '../../shared/ui'
import { Props } from './types'
import api from './api'
import { ProductCard } from '../../entities'

export const Products: FC<Props> = () => (
    <MainLayout title="New in">
        <Grid>
            {api.data.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                    <ProductCard product={product as any}/>
                </Link>
            ))}
        </Grid>
    </MainLayout>
)