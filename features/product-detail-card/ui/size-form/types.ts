import { SizeType } from '../../../../shared/api'

export type Params = {
    size: SizeType
    count: string
}

export type Props = {
    id: number
    price: number
    sizes: SizeType[]
}