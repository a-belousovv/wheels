import style from '@/components/Wheel/style.module.scss'
import { cn } from '@/shared/utils'
import { forwardRef } from 'react'

interface Props {
	className?: string
	handleSpinClick: () => void
	isSpinning: boolean
	clickCount: number
}

export const Wheel = forwardRef<HTMLImageElement, Props>(
	({ className, handleSpinClick, isSpinning, clickCount }, ref) => {
		return (
			<div className={style.wheel}>
				<img
					className={style.wheel__cursor}
					src='/icons/wheel-cursor.svg'
					alt=''
				/>
				<img
					ref={ref}
					className={style.wheel__img}
					src='/images/wheel.png'
					alt=''
				/>
				<img
					className={style.wheel__border}
					src='/images/wheel-border.png'
					alt=''
				/>

				<div className={style.wheel__win}>
					<img
						className={cn(
							style.wheel__win_first,
							!isSpinning && clickCount == 1 && style.wheel__win_active
						)}
						src='/images/wheel-win-1.png'
						alt=''
					/>
					<img
						className={cn(
							style.wheel__win_second,
							!isSpinning && clickCount == 0 && style.wheel__win_active
						)}
						src='/images/wheel-win-2.png'
						alt=''
					/>
				</div>
				<button
					disabled={isSpinning || clickCount === 0}
					onClick={handleSpinClick}
					className={style.wheel__button}
				>
					<p className={style.wheel__button__text}>AYLANTIRISH</p>
				</button>
				<div className={style.wheel__button_bg}></div>
			</div>
		)
	}
)
