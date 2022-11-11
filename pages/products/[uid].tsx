import styled from 'styled-components'
import { FC } from "react";

const Title = styled.h1`
  font-size: 50px;
`

const Product: FC = () => {
    return <Title>Product</Title>
}

export const getServerSideProps: ({ query }: { query: any }) => { props: { uid: string | string[] | undefined } } = ({ query }) => {
    const { uid } = query

    return {
        props: { uid },
    }
}

export default Product