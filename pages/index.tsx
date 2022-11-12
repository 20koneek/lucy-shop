import styled from 'styled-components'
import { Typography } from '../shared/ui'

const Title = styled(Typography)`
  font-size: 50px;
`

export default function Products() {
    return (
        <div style={{ margin: 10, background: 'brown' }}>

            <Title size="xl">
                Products
            </Title>
        </div>

    )
}
