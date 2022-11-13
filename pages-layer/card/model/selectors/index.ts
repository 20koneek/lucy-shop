import { selector } from 'recoil'
import { cardAtom } from '../../../../shared/model'
import { totalCountInCard } from '../../../../widgets/header/model'

export const totalAmountInCard = selector({
    key: 'totalAmountInCard',
    get: ({ get }) => {
        const card = get(cardAtom)

        return Object.values(card)
            .reduce((value, { count, price }) => value + count * price, 0)
    },
})

export const totalCountAndAmount = selector({
    key: 'totalCountAndAmount',
    get: ({ get }) => {
        const amount = get(totalAmountInCard)
        const count = get(totalCountInCard)

        return {
            count,
            amount,
        }
    },
})