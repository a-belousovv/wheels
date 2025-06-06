'use client'
import style from '@/components/LoginForm/style.module.scss'
import { cn } from '@/shared/utils'
import { loginStore } from '@/store/loginStore'
import { useUnit } from 'effector-react'
import React, { useState } from 'react'

interface Props {
	className?: string
}

export const LoginForm: React.FC<Props> = ({ className }) => {
	const [switchItem, setSwitchItem] = useState('Telefon')
	const isShowLoginModal = useUnit(loginStore.$isShowLoginModal)
	return (
		<div className={cn(style.box, isShowLoginModal && style.box__active)}>
			<img className={style.background} src='/images/background.png' alt='' />
			<div className={style.background__shadow}></div>
			<div className={style.content}>
				<h1 className={style.content__title}>LOGO</h1>
			</div>
			<form className={cn(className, style.form)}>
				<div className={style.switcher}>
					<button
						type='button'
						onClick={() => setSwitchItem('Telefon')}
						className={cn(
							style.switcher__item,
							switchItem === 'Telefon' && style.switcher__active
						)}
					>
						Telefon
					</button>
					<button
						type='button'
						onClick={() => setSwitchItem('Elektron pochta')}
						className={cn(
							style.switcher__item,
							switchItem === 'Elektron pochta' && style.switcher__active
						)}
					>
						Elektron pochta
					</button>
				</div>
				{switchItem === 'Telefon' && (
					<div className={style.form__item}>
						<label htmlFor='' className={style.form__label}>
							Telefon
						</label>
						<div className={style.form__item_box}>
							<div className={style.form__country}>
								<img src='/icons/country-flag.svg' alt='' />
								<img src='/icons/country-switcher.svg' alt='' />
							</div>
							<input type='tel' className={cn(style.form__input)} />
						</div>
					</div>
				)}
				{switchItem === 'Elektron pochta' && (
					<div className={style.form__item}>
						<label htmlFor='' className={style.form__label}>
							Elektron pochta
						</label>
						<input type='email' className={cn(style.form__input)} />
					</div>
				)}
				<div className={style.form__item}>
					<label htmlFor='' className={style.form__label}>
						Parol
					</label>
					<div className={style.form__input_box}>
						<input
							type='password'
							className={cn(style.form__input, style.form__input_password)}
						/>
						<img
							className={style.form__input_eye}
							src='/icons/eye-on.svg'
							alt=''
						/>
					</div>
				</div>
				<div className={style.form__item}>
					<label htmlFor='' className={style.form__label}>
						Promo Code
					</label>
					<input type='text' className={style.form__input} />
				</div>
				<button className={style.form__button}>Login</button>
			</form>
		</div>
	)
}
