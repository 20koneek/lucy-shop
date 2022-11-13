import { SizeType } from '../../../../shared/api'

export type Props = {
    name: string
    sizes: SizeType[]
    price: string,
    special?: string,
}