import type { FC } from 'react'
import Image from 'next/image'
import { MainLayout } from '../../shared/ui'
import { Props } from './types'
import api from './api'

export const Products: FC<Props> = () => (
    <MainLayout title="New in">
        {api.data.map(({ id, image, name }) => (
            <div key={id}>
                <div style={{ width: 100, height: 100, position: 'relative' }}>
                    <Image
                        src={image} alt={name}
                        fill
                        sizes={`auto`}
                    />
                </div>
                {name}
            </div>
        ))}
    </MainLayout>
)