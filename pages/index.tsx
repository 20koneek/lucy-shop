import styled from 'styled-components'
import { Badge, Icon, Typography } from '../shared/ui'

const Title = styled(Typography)`
  font-size: 50px;
`

export default function Products() {
    return (
        <div style={{ margin: 10, background: 'brown' }}>
            <Badge count={333}>
                <Icon type="card"/>
            </Badge>
            <Title size="xl">
                Products
            </Title>
        </div>

    )
}
