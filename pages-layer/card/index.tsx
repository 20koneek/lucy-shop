import type { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { ProductCardItem } from '../../features'
import { MainLayout } from '../../shared/ui'
import { cardAtom } from '../../shared/model'

export const Card: FC = () => {
    const card = useRecoilValue(cardAtom)

    return (
        <MainLayout title="Card">
            {Object.entries(card).map(([key, props]) => (
                <ProductCardItem key={key} {...props}/>
            ))}
        </MainLayout>
    )
}