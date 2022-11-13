import { atom, MutableSnapshot } from 'recoil'
import { CardStore } from './types'

export const cardAtom = atom<CardStore>({
    key: 'card',
    default: {},
})

export const initializeRecoilState = ({ set }: MutableSnapshot) => {
    set(cardAtom, {})
}

export * from './types'
