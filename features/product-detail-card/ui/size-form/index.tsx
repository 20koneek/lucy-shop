import { FC } from 'react'
import { useSetRecoilState } from 'recoil'
import { SubmitHandler, useForm } from 'react-hook-form'
import { cardAtom, Key } from '../../../../shared/model'
import { InlineFlex, Typography } from '../../../../shared/ui'
import { Params, Props } from './types'

export const SizeForm: FC<Props> = ({ id, name, image, price, sizes }) => {
    const setCard = useSetRecoilState(cardAtom)
    const { register, handleSubmit, reset } = useForm<Params>()

    const onSubmit: SubmitHandler<Params> = ({ size, count }) => {
        const key: Key = `${id}_${size}`

        setCard((prevCard) => ({
            ...prevCard,
            [key]: prevCard[key] ? {
                ...prevCard[key],
                count: prevCard[key].count + Number(count),
            } : {
                id,
                name,
                image,
                size,
                price,
                count: Number(count),
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
