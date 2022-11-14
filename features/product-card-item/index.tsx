import type { FC } from 'react'
import Link from 'next/link'
import { ProductImage } from '../../entities'
import { Area, InlineFlex, Typography } from '../../shared/ui'
import { formator } from '../../shared/utils'
import { Container, CountForm } from './ui'
import { Props } from './types'

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

        <Area area="action">
            <CountForm
                id={id}
                size={size}
                count={count}
            />
        </Area>
    </Container>
)