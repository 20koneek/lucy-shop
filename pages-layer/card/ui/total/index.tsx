import styled from 'styled-components'
import { FC } from 'react'
import { InlineFlex, Typography } from '../../../../shared/ui'
import { formator } from '../../../../shared/utils'
import { Props } from './types'

const RightInlineFlex = styled(InlineFlex)`
  align-self: end;
`

export const Total: FC<Props> = ({ count, amount }) => (
    <RightInlineFlex>
        <Typography size="xl">Total</Typography>
        <Typography size="xl">({count}):</Typography>
        <Typography size="xl" weight="bold" type="alt">{formator.format(amount / 100)}</Typography>
    </RightInlineFlex>
)