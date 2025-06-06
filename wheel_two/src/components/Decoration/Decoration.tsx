import style from '@/components/Decoration/style.module.scss'
import { cn } from '@/shared/utils'
import React from 'react'

interface Props {
	className?: string
}

export const Decoration: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(className, style.decoration)}>
			<img
				className={cn(style.decoration__chip, style.decoration__chip_first)}
				src='/images/chip-1.png'
				alt=''
			/>
			<img
				className={cn(style.decoration__chip, style.decoration__chip_second)}
				src='/images/chip-2.png'
				alt=''
			/>
			<img
				className={cn(style.decoration__chip, style.decoration__chip_third)}
				src='/images/chip-3.png'
				alt=''
			/>
			<img
				className={cn(style.decoration__chip, style.decoration__girl)}
				src='/images/girl.png'
				alt=''
			/>
		</div>
	)
}
