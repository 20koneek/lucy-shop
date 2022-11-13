import type { PropsWithChildren } from 'react'

type Button = {
    stub: boolean
    href: string
    active?: boolean
}

export type ButtonProps = PropsWithChildren<Button>

export type Pagination = {
    pageCount: number,
    page: number,
}

export type Props = Pagination

export type GenerateButtons = (params: Pagination) => (Button & { value: string | number })[]