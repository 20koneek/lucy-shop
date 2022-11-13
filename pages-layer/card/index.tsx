import type { FC } from 'react'
import { MainLayout } from '../../shared/ui'
import { useRecoilValue } from 'recoil'
import { cardAtom } from '../../shared/model'

export const Card: FC = () => {
    const card = useRecoilValue(cardAtom)
    console.log(card)
    return (
        <MainLayout title="Card">
            {/*<ProductDetailCard*/}
            {/*/>*/}
        </MainLayout>
    )
}