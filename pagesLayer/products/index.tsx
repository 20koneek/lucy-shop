import type { FC } from 'react'
import Link from 'next/link'
import { Grid, MainLayout, Pagination } from '../../shared/ui'
import { ProductCard } from '../../entities'
import { Props } from './types'

export const Products: FC<Props> = ({ data, page, pageCount }) => (
    <MainLayout title="New in">
        <Grid>
            {data.map((product) => (
                <Link key={product.id} href={`/products/${product.id}`}>
                    <ProductCard product={product}/>
                </Link>
            ))}
        </Grid>
        <Pagination page={page} pageCount={pageCount}/>
    </MainLayout>
)