import styled from 'styled-components'
import { Icon, Typography } from '../shared/ui'

const Title = styled(Typography)`
  font-size: 50px;
`

export default function Products() {
    return (
        <Title size="xl">
            <Icon type="card"/>
            Products
        </Title>
    )
}
