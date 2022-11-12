import { Logo, Nav } from './ui'
import { CardButton } from '../../entities'

export const Header = () => (
    <Nav>
        <Logo/>
        <CardButton count={13}/>
    </Nav>
)