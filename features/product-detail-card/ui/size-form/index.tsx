import { FC } from 'react'
import { useSetRecoilState } from 'recoil'
import { SubmitHandler, useForm } from 'react-hook-form'
import { cardAtom } from '../../../../shared/model'
import { InlineFlex, Typography } from '../../../../shared/ui'
import { Params, Props } from './types'

export const SizeForm: FC<Props> = ({ id, price, sizes }) => {
    const setCard = useSetRecoilState(cardAtom)
    const { register, handleSubmit, reset } = useForm<Params>()

    const onSubmit: SubmitHandler<Params> = ({ size, count }) => {
        setCard((prevCard) => ({
            ...prevCard,
            [id]: {
                ...prevCard[id],
                [size]: {
                    price,
                    count: (prevCard[id]?.[size]?.count ?? 0) + Number(count),
                },
            },

        }))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <InlineFlex>
                <Typography as="select" {...register('size', { required: true })}>
                    <Typography as="option" value="">Select size</Typography>

                    {sizes.map((size) => (
                        <Typography
                            as="option"
                            key={size}
                            value={size}
                        >
                            {size}
                        </Typography>
                    ))}
                </Typography>

                <input
                    {...register('count', { required: true })}
                    min={1}
                    type="number"
                    placeholder="Count"
                />

                <button type="submit">
                    <Typography>Add to Card</Typography>
                </button>
            </InlineFlex>
        </form>
    )
}
