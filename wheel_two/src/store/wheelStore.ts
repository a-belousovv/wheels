import { createEvent, createStore } from 'effector'

const $isSpinningInside = createStore(false)
const $isSpinningOutside = createStore(false)
const $clickCount = createStore(0)
const $prizes = createStore<string[]>([])

const handleIsSpinningInside = createEvent<boolean>()
const handleIsSpinningOutside = createEvent<boolean>()
const handleClickCount = createEvent<number>()
const handlePrize = createEvent<string>()

$isSpinningInside.on(handleIsSpinningInside, (_, value) => value)

$isSpinningOutside.on(handleIsSpinningOutside, (_, value) => value)

$clickCount.on(handleClickCount, (_, value) => value)

$prizes.on(handlePrize, (prizes, value) => [...prizes, value])

export const wheelStore = {
	$clickCount,
	$isSpinningInside,
	handleClickCount,
	handleIsSpinningInside,
	$isSpinningOutside,
	handleIsSpinningOutside,
	$prizes,
	handlePrize,
}
