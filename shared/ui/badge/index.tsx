import type { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { Circle } from '../typography'
import type { Props } from './types'

const BadgeBody = styled.span`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
`

const BadgeCircle = styled(Circle)`
  position: absolute;
  top: 0;
  right: 0;
  transform: scale(1) translate(50%, -50%);
  transform-origin: 100% 0;
`

export const Badge: FC<PropsWithChildren<Props>> = ({ children, count, withZero }) => (
    <BadgeBody>
        {children}
        {(count || withZero) && (
            <BadgeCircle size="xs" weight="bold">{count}</BadgeCircle>
        )}
    </BadgeBody>
)