import { createEvent, createStore } from 'effector'

const $isSpinning = createStore(false)
const $clickCount = createStore(2)
const $prizes = createStore<string[]>([])

const handleIsSpinning = createEvent<boolean>()
const handleClickCount = createEvent<number>()
const handlePrize = createEvent<string>()

$isSpinning.on(handleIsSpinning, (_, value) => value)

$clickCount.on(handleClickCount, (_, value) => value)

$prizes.on(handlePrize, (prizes, value) => [...prizes, value])

export const wheelStore = {
	$clickCount,
	$isSpinning,
	handleClickCount,
	handleIsSpinning,
	$prizes,
	handlePrize,
}
