import style from '@/components/WheelDecoration/style.module.scss'
import { cn } from '@/shared/utils'
import React from 'react'

interface Props {
	className?: string
}

export const WheelDecoration: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(className, style.box)}>
			<img
				className={cn(style.decoration, style.chips)}
				src='/images/chips.png'
				alt=''
			/>
			<img
				className={cn(style.decoration, style.dollars)}
				src='/images/dollars.png'
				alt=''
			/>
			<img
				className={cn(style.decoration, style.gifs)}
				src='/images/gifs.png'
				alt=''
			/>
			<img
				className={cn(style.decoration, style.sport)}
				src='/images/sport.png'
				alt=''
			/>
		</div>
	)
}
