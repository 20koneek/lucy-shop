import { Product } from '../../pagesLayer'
import { ProductType } from '../../shared/api'

type GetServerSideProps = ({ query }: { query: { uid: string } }) => Promise<{ props: ProductType }>

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { uid } = query

    const response = await fetch(`https://mock-server-production.up.railway.app/product/${uid}`)
    const result: ProductType = await response.json()

    return {
        props: result,
    }
}

export default Product