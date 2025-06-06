'use client'
import { Content, Wheel } from '@/components'
import style from '@/components/SpinBox/style.module.scss'
import { animateWheel } from '@/lib/wheelAnimation'
import { cn } from '@/shared/utils'
import { wheelStore } from '@/store/wheelStore'
import { useUnit } from 'effector-react'
import React, { useRef, useState } from 'react'

interface Props {
	className?: string
}

export const SpinBox: React.FC<Props> = ({ className }) => {
	const wheelInsideImgRef = useRef<HTMLImageElement | null>(null)
	const wheelOutsideImgRef = useRef<HTMLImageElement | null>(null)
	const [rotation, setRotation] = useState(0)
	const clickCount = useUnit(wheelStore.$clickCount)

	const handleSpinClick = () => {
		if (!wheelInsideImgRef.current || !wheelOutsideImgRef.current) return

		wheelStore.handleIsSpinningInside(true)
		wheelStore.handleIsSpinningOutside(true)
		wheelStore.handleClickCount(clickCount + 1)
		wheelStore.handlePrize('9 000 000 UZS + 80 FS')

		const insideAngle = 995
		const insideAnimationTime = (insideAngle / 360) * 3

		const newInsideRotation = rotation + insideAngle
		setRotation(newInsideRotation)

		animateWheel(
			newInsideRotation,
			insideAnimationTime,
			clickCount,
			wheelInsideImgRef,
			wheelStore.handleIsSpinningInside
		)

		const outsideAngle = 373
		const outsideAnimationTime = (outsideAngle / 360) * 3

		const newOutsideRotation = rotation + outsideAngle
		setRotation(newOutsideRotation)

		animateWheel(
			newOutsideRotation,
			outsideAnimationTime,
			clickCount,
			wheelOutsideImgRef,
			wheelStore.handleIsSpinningOutside
		)
	}
	return (
		<div className={cn(className, style.box)}>
			<div className={style.background}>
				<img
					className={style.background__img}
					src='/images/background.png'
					alt=''
				/>
				<img
					className={style.background__shadow_img}
					src='/images/background__shadow.png'
					alt=''
				/>
				<div className={style.background__shadow}></div>
			</div>
			<Content />
			<Wheel
				insideImgRef={wheelInsideImgRef}
				outsideImgRef={wheelOutsideImgRef}
				handleSpinClick={handleSpinClick}
			/>

			<img
				className={style.wheel__shadow}
				src='/images/wheel__shadow.png'
				alt=''
			/>
		</div>
	)
}
