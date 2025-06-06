'use client'
import style from '@/components/WinModal/style.module.scss'
import { cn } from '@/shared/utils'
import { loginStore } from '@/store/loginStore'
import { wheelStore } from '@/store/wheelStore'
import { useUnit } from 'effector-react'
import React from 'react'

interface Props {
	className?: string
	handleSpinClick: () => void
}

export const WinModal: React.FC<Props> = ({ className, handleSpinClick }) => {
	const prizes = useUnit(wheelStore.$prizes)
	const isSpinning = useUnit(wheelStore.$isSpinning)

	return (
		<div className={cn(className, style.box)}>
			<div
				className={cn(
					style.background,
					!isSpinning && prizes.length > 0 && style.background__active
				)}
			></div>
			<div
				className={cn(
					style.content,
					!isSpinning && prizes.length > 0 && style.content__active,
					prizes.length > 1 && style.content__second
				)}
			>
				<div className={style.content__info}>
					<h3 className={style.content__title}>SIZ YUTDINGIZ</h3>
					<p className={style.content__text}>{prizes.join(' + ')}</p>
				</div>
				{prizes.length == 1 && (
					<button onClick={handleSpinClick} className={style.content__button}>
						YANA URINING
					</button>
				)}
				{prizes.length > 1 && (
					<button
						onClick={() => loginStore.handleShowLoginModal(true)}
						className={style.content__button}
					>
						BONUSNI OLISH
					</button>
				)}
			</div>
		</div>
	)
}
