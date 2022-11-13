import { selector } from 'recoil'
import { cardAtom } from '../../../../shared/model'

export const totalCountInCard = selector({
    key: 'totalCountInCard',
    get: ({ get }) => {
        const card = get(cardAtom)
        return  Object.values(card)
            .reduce((value, sizes) => (
                value + Object.values(sizes).reduce((total, { count }) => total + count, 0)
            ), 0)
    },
})