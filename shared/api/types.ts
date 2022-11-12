export type SizeType = 'Small' | 'Medium' | 'Large'

export type ProductType = {
    id: number,
    model: string,
    name: string,
    image: string,
    description: string,
    sizes: SizeType[],
    price: string,
    special: string,
    priceInCents: number,
    specialInCents: number,
}