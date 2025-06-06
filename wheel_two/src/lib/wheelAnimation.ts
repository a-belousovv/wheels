export const animateWheel = (
	newRotation: number,
	animationTime: number,
	clickCount: number,
	wheelImgRef: React.RefObject<HTMLImageElement | null>,
	handlerIsSpin: (value: boolean) => void
) => {
	const { current } = wheelImgRef
	if (!current) return

	current.style.transition = `transform ${animationTime}s linear`
	current.style.transform = `translate(-50%, -50%) rotate(${newRotation}deg)`

	setTimeout(() => {
		current.style.transition = 'none'
		current.style.transform = `translate(-50%, -50%) rotate(${
			newRotation % 360
		}deg)`

		handlerIsSpin(false)
	}, animationTime * 1000)
}
