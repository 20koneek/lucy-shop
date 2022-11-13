import { GenerateButtons } from './types'

export const generateButtons: GenerateButtons = ({ pageCount, page }) => {
    const limit = 7
    const buttons: ReturnType<GenerateButtons> = []

    if (pageCount <= limit) {
        for (let value = 1; value <= pageCount; value++) {
            const stub = page === value
            buttons.push({
                value,
                stub,
                active: false,
                href: `?page=${value}`,
            })
        }
    } else {
        buttons.push({ href: `?page=${1}`, value: 1, stub: page === 1 })

        if (page < (limit / 2) + 1) {
            for (let value = 2; value <= limit - 2; value++) {
                buttons.push({ href: `?page=${value}`, value, stub: page === value })
            }
            buttons.push({ href: ``, value: '...', stub: true, active: true })
        } else if (pageCount - page < (limit / 2)) {
            buttons.push({ href: ``, value: '...', stub: true, active: true })

            for (let value = pageCount - limit + 3; value < pageCount; value++) {
                buttons.push({ href: `?page=${value}`, value, stub: value === page })
            }
        } else {
            buttons.push({ href: ``, value: '...', stub: true, active: true })

            for (let value = Math.round(page - (limit / 2) + 2); value <= page + (limit / 2) - 2; value++) {
                buttons.push({ href: `?page=${value}`, value, stub: value === page })
            }

            buttons.push({ href: ``, value: '...', stub: true, active: true })
        }
        buttons.push({ href: `?page=${pageCount}`, value: pageCount, stub: page === pageCount })
    }

    return buttons
}