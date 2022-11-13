import type { FC } from 'react'
import Link from 'next/link'
import { Grid, MainLayout, Pagination } from '../../shared/ui'
import { ProductCard } from '../../features'
import { Props } from './types'
import { Content } from './ui'

export const Products: FC<Props> = ({ data, page, pageCount }) => (
    <MainLayout title="New in">
        <Content>
            <Grid>
                {data.map(({ id, name, sizes, image, price, special }) => (
                    <Link key={id} href={`/products/${id}`}>
                        <ProductCard
                            key={id}
                            name={name}
                            sizes={sizes}
                            image={image}
                            price={price}
                            special={special}
                        />
                    </Link>
                ))}
            </Grid>

            <Pagination page={page} pageCount={pageCount}/>
        </Content>
    </MainLayout>
)