import type { FC } from 'react'
import { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { ProductCardItem } from '../../features'
import { Delimiter, MainLayout, Typography } from '../../shared/ui'
import { cardAtom } from '../../shared/model'
import { Content, Total } from './ui'
import { totalCountAndAmount } from './model'
import { OrderType } from '../../shared/api'

export const Card: FC = () => {
    const [orderId, setOrderId] = useState<number>()
    const [card, setCard] = useRecoilState(cardAtom)
    const { amount, count } = useRecoilValue(totalCountAndAmount)

    const onClick = async () => {
        const url = `https://mock-server-production.up.railway.app/checkout/placeOrder`
        const products = Object.values(card).map(({ id, size }) => ({ id, size }))
        const response = await fetch(url, {
            method: 'post',
            body: JSON.stringify({ products }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const { orderId }: OrderType = await response.json()
        setCard({})
        setOrderId(orderId)
    }

    return (
        <MainLayout title="Card">
            <Content>
                {orderId && (
                    <Typography size="xl" weight="bold">
                        {`Order "${orderId}" created`}
                    </Typography>
                )}
                {Object.entries(card).map(([key, props]) => (
                    <ProductCardItem key={key} {...props}/>
                ))}
                <Delimiter/>
                <Total amount={amount} count={count} onClick={onClick}/>
            </Content>
        </MainLayout>
    )
}