import { SizeType } from '../api'

export type CardItem = Partial<Record<SizeType, { price: number, count: number }>>

export type CardStore = Record<string, CardItem>