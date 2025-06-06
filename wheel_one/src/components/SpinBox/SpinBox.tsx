'use client'
import { Wheel, WheelDecoration, WinModal } from '@/components'
import style from '@/components/SpinBox/style.module.scss'
import { animateWheel } from '@/lib/wheelAnimations'
import { cn } from '@/shared/utils'
import { wheelStore } from '@/store/wheelStore'
import { useUnit } from 'effector-react'
import React, { useRef, useState } from 'react'
interface Props {
	className?: string
}

export const SpinBox: React.FC<Props> = ({ className }) => {
	const isSpinning = useUnit(wheelStore.$isSpinning)
	const wheelImgRef = useRef<HTMLImageElement | null>(null)
	const [rotation, setRotation] = useState(0)
	const prizes = useUnit(wheelStore.$prizes)
	const clickCount = useUnit(wheelStore.$clickCount)
	const baseRotation = 720

	const handleSpinClick = () => {
		if (!wheelImgRef.current) return

		wheelStore.handleIsSpinning(true)

		const totalAngle = clickCount === 2 ? baseRotation + 174 : baseRotation + 40
		const animationTime = (totalAngle / 360) * 3

		const newRotation = rotation + totalAngle
		setRotation(newRotation)

		animateWheel(newRotation, animationTime, clickCount, wheelImgRef)
	}

	return (
		<div className={cn(className, style.box)}>
			<h1 className={style.title}>LOGO</h1>
			<div className={style.content}>
				<div className={cn(style.content__item, style.content__left)}>
					<h3 className={style.content__title}>
						BARABANNI AYLANTIRING VA BONUSLARNI OLING!
					</h3>
				</div>
				<div className={cn(style.content__item, style.content__right)}>
					<h3 className={style.content__title}>
						UINISHLAR QOLDI: <span>{clickCount}</span>
					</h3>
				</div>
			</div>
			<Wheel
				ref={wheelImgRef}
				handleSpinClick={handleSpinClick}
				isSpinning={isSpinning}
				clickCount={clickCount}
			/>
			<img className={style.background} src='/images/bg.png' alt='' />
			<WheelDecoration />
			<WinModal handleSpinClick={handleSpinClick} />
		</div>
	)
}
