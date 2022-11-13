import { FC, useMemo } from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
import { Icon } from '../icon'
import { ButtonProps, Props } from './types'
import { generateButtons } from './utils'
import { Typography } from '../typography'

const Body = styled.div`
  display: inline-flex;
  gap: 1px;
  height: 36px;
  overflow: hidden;

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.pagination.border};
  background-color: ${({ theme }) => theme.pagination.border};
`
const ButtonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 33px;
`

const StyledLink = styled(Link)`
  ${ButtonStyle};
  background-color: ${({ theme }) => theme.background.primary};
`

const LinkStub = styled.div<{ active?: boolean }>`
  ${ButtonStyle};
  user-select: none;
  ${({ active, theme }) => active ? css` background-color: ${theme.background.primary}` : ''};
`

const Button: FC<ButtonProps> = ({ stub, href, active, children }) => {
    const result = <Typography type="secondary">{children}</Typography>

    return stub ? (
        <LinkStub active={active}>{result}</LinkStub>
    ) : (
        <StyledLink href={href}>{result}</StyledLink>
    )
}

export const Pagination: FC<Props> = ({ pageCount, page }) => {
    const buttons = useMemo(() => generateButtons({ pageCount, page }), [pageCount, page])

    return (
        <Body>
            <StyledLink href=""><Icon size="s" type="double-left"/></StyledLink>
            <StyledLink href={`?page=${(page - 1) || 1}`}>
                <Icon size="s" type="left"/>
            </StyledLink>

            {buttons.map(({ stub, href, active, value }, index) => (
                <Button
                    key={`${index}_${value}`}
                    stub={stub}
                    href={href}
                    active={active}
                >
                    {value}
                </Button>
            ))}

            <StyledLink href={`?page=${pageCount > page ? page + 1 : pageCount}`}>
                <Icon size="s" type="right"/>
            </StyledLink>
            <StyledLink href={`?page=${pageCount}`}>
                <Icon size="s" type="double-right"/>
            </StyledLink>
        </Body>
    )
}