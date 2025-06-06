import style from '@/components/Content/style.module.scss'
import { cn } from '@/shared/utils'
import React from 'react'

interface Props {
	className?: string
}

export const Content: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn(className, style.content)}>
			<h1 className={style.content__title}>LOGO</h1>
			<h3 className={style.content__subtitle}>BARABANNI AYLANTIRING</h3>
			<p className={style.content__text}>VA BONUSLARNI OLING!</p>
		</div>
	)
}
