import { SizeType } from '../../shared/api'

export type Props = {
    id: number
    image: string
    name: string
    sizes: SizeType[]
    price: string
    special: string
    description: string
    priceInCents: number
    specialInCents: number
}