'use client'
import style from '@/components/WinModal/style.module.scss'
import { cn } from '@/shared/utils'
import { loginStore } from '@/store/loginStore'
import { wheelStore } from '@/store/wheelStore'
import { useUnit } from 'effector-react'
import React from 'react'

interface Props {
	className?: string
}

export const WinModal: React.FC<Props> = ({ className }) => {
	const prizes = useUnit(wheelStore.$prizes)
	const isSpinningInside = useUnit(wheelStore.$isSpinningInside)
	const isSpinningOutside = useUnit(wheelStore.$isSpinningOutside)

	return (
		<div className={cn(className, style.box)}>
			<div
				className={cn(
					style.content,
					!isSpinningInside &&
						!isSpinningOutside &&
						prizes.length > 0 &&
						style.content__active,
					prizes.length > 1 && style.content__second
				)}
			>
				<div className={style.content__info}>
					<h3 className={style.content__title}>SIZ YUTDINGIZ</h3>
					<p className={style.content__text}>{prizes[0]}</p>
				</div>

				<button
					onClick={() => loginStore.handleShowLoginModal(true)}
					className={style.content__button}
				>
					BONUSNI OLISH
				</button>
			</div>
		</div>
	)
}
