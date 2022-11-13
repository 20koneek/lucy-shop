import { selector } from 'recoil'
import { cardAtom } from '../../../../shared/model'

export const totalCountInCard = selector({
    key: 'totalCountInCard',
    get: ({ get }) => {
        const card = get(cardAtom)

        return Object.values(card)
            .reduce((value, { count }) => value + count, 0)
    },
})