import { Products } from '../pagesLayer'
import { ResponseType } from '../shared/api'

type GetServerSideProps = ({ query }: { query: { page?: number } }) => Promise<{ props: ResponseType & { page: number } }>

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { page = 1 } = query

    const response = await fetch(`https://mock-server-production.up.railway.app/product?page=${page}`)
    const result: ResponseType = await response.json()

    return {
        props: {
            ...result,
            page: Number(page),
        },
    }
}
export default Products
