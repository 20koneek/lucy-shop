import { SizeType } from '../api'

export type Key = `${number}_${SizeType}`
export type CardItem = {
    id: number
    name: string
    image: string
    size: SizeType
    price: number
    count: number
}
export type CardStore = Record<Key, CardItem>