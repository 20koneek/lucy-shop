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

export type ResponseType = {
    data: ProductType[],
    count: number,
    total: number,
    pageCount: number,
    page: number,
}
export type OrderType = {
    orderId: number
}