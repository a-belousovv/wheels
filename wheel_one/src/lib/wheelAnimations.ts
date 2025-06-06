import { wheelStore } from '@/store/wheelStore'

export const animateWheel = (
	newRotation: number,
	animationTime: number,
	clickCount: number,
	wheelImgRef: React.RefObject<HTMLImageElement | null>
) => {
	const { current } = wheelImgRef
	if (!current) return

	current.style.transition = `transform ${animationTime}s linear`
	current.style.transform = `translate(-50%, -50%) rotate(${newRotation}deg)`

	setTimeout(() => {
		wheelStore.handlePrize(clickCount == 2 ? '9 000 000 UZS' : '80 FS')
	}, 1000)
	setTimeout(() => {
		wheelStore.handleIsSpinning(false)
		wheelStore.handleClickCount(clickCount - 1)
		current.style.transition = 'none'
		current.style.transform = `translate(-50%, -50%) rotate(${
			newRotation % 360
		}deg)`
	}, animationTime * 1000)
}
