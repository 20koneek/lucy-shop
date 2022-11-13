import type { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { ProductCardItem } from '../../features'
import { Delimiter, MainLayout } from '../../shared/ui'
import { cardAtom } from '../../shared/model'
import { Content, Total } from './ui'
import { totalCountAndAmount } from './model'

export const Card: FC = () => {
    const card = useRecoilValue(cardAtom)
    const { amount, count } = useRecoilValue(totalCountAndAmount)

    return (
        <MainLayout title="Card">
            <Content>
                {Object.entries(card).map(([key, props]) => (
                    <ProductCardItem key={key} {...props}/>
                ))}
                <Delimiter/>
                <Total amount={amount} count={count}/>
            </Content>
        </MainLayout>
    )
}