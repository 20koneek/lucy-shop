import type { FC } from 'react'
import { ProductImage } from '../../entities'
import { Area, InlineFlex, Typography } from '../../shared/ui'
import { Container } from './ui'
import { Props } from './types'
import Link from 'next/link'

const formator = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' })

export const ProductCardItem: FC<Props> = ({
    id,
    image,
    name,
    size,
    price,
    count,
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

        <Area area="header">
            <Link href={`/products/${id}`}>
                <Typography size="xl">{name}</Typography>
            </Link>
        </Area>

        <Area area="size">
            <InlineFlex>
                <Typography size="l">Size:</Typography>
                <Typography size="l" type="secondary">{size}</Typography>
            </InlineFlex>
        </Area>

        <Area area="price">
            <InlineFlex>
                <Typography size="l">Price:</Typography>
                <Typography size="l" type="secondary">{formator.format(price / 100)}</Typography>
            </InlineFlex>
        </Area>

        <Area area="count">
            <InlineFlex>
                <Typography size="l">Count:</Typography>
                <Typography size="l" type="secondary">{count}</Typography>
            </InlineFlex>
        </Area>
    </Container>
)