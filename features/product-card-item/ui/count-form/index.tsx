import { FC, useCallback } from 'react'
import { useSetRecoilState } from 'recoil'
import { SubmitHandler, useForm } from 'react-hook-form'
import { InlineFlex, Typography } from '../../../../shared/ui'
import { cardAtom, Key } from '../../../../shared/model'
import { Params, Props } from './types'

export const CountForm: FC<Props> = ({ id, size, count }) => {
    const setCard = useSetRecoilState(cardAtom)
    const { register, handleSubmit } = useForm<Params>({ defaultValues: { count: count.toString() } })
    const key: Key = `${id}_${size}`

    const onDelete = useCallback(() => {
        setCard((prevCard) => {
            const newCard = { ...prevCard }
            delete newCard[key]
            return newCard
        })
    }, [setCard])

    const onSubmit: SubmitHandler<Params> = ({ count }) => {
        const nCount = Number(count)
        if (nCount) {
            setCard((prevCard) => ({
                ...prevCard,
                [key]: {
                    ...prevCard[key],
                    count: nCount,
                },
            }))
        } else {
            onDelete()
        }
    }

    return (
        <InlineFlex>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('count', { required: true })}
                    min={0}
                    type="number"
                    placeholder="Count"
                />
            </form>

            <Typography as="button" onClick={onDelete}>Delete</Typography>
        </InlineFlex>
    )
}