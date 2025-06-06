'use client'
import style from '@/components/Wheel/style.module.scss'
import { cn } from '@/shared/utils'
import { wheelStore } from '@/store/wheelStore'
import { useUnit } from 'effector-react'
import React from 'react'

interface Props {
	className?: string
	handleSpinClick: () => void
	insideImgRef: React.RefObject<HTMLImageElement | null>
	outsideImgRef: React.RefObject<HTMLImageElement | null>
}

export const Wheel: React.FC<Props> = ({
	className,
	handleSpinClick,
	insideImgRef,
	outsideImgRef,
}) => {
	const clickCount = useUnit(wheelStore.$clickCount)
	const isSpinningInside = useUnit(wheelStore.$isSpinningInside)
	const isSpinningOutside = useUnit(wheelStore.$isSpinningOutside)
	const prizes = useUnit(wheelStore.$prizes)

	return (
		<div className={cn(className, style.wheel__box)}>
			<div className={style.wheel}>
				<img
					className={style.wheel__inside}
					src='/images/wheel__inside.png'
					alt=''
					ref={insideImgRef}
				/>
				<img
					className={style.wheel__outside}
					src='/images/wheel__outside.png'
					alt=''
					ref={outsideImgRef}
				/>
				<img
					className={style.wheel__cursor}
					src='/images/spin__cursor.png'
					alt=''
				/>
			</div>

			<img
				className={cn(
					style.wheel__win_inside,
					!isSpinningInside && prizes.length > 0 && style.wheel__win_active
				)}
				src='/images/win-inside.png'
				alt=''
			/>
			<img
				className={cn(
					style.wheel__win_outside,
					!isSpinningOutside && prizes.length > 0 && style.wheel__win_active
				)}
				src='/images/win-outside.png'
				alt=''
			/>

			<button
				disabled={clickCount == 1}
				onClick={handleSpinClick}
				className={style.wheel__button}
			>
				<img
					className={style.wheel__button_desktop}
					src='/images/spin__button.png'
					alt=''
				/>
				<img
					className={style.wheel__button_mobile}
					src='/images/spin__button_mobile.png'
					alt=''
				/>
			</button>
		</div>
	)
}
