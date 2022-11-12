import type { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { Typography } from '../typography'
import { Delimiter } from '../delimiter'
import { Props } from './types'

export const Main = styled.main`
  padding: 25px;
`

export const MainGrid = styled(Main)`
  display: grid;
  grid-template: 50px, auto / 1fr;
  gap: 25px;
`

export const MainLayout: FC<PropsWithChildren<Props>> = ({ title, children }) => (
    <MainGrid>
        <div>
            <Typography as="h1" size="xl" weight="normal">
                {title}
            </Typography>

            <Delimiter/>
        </div>
        <div>{children}</div>
    </MainGrid>
)
