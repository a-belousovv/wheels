import { createEvent, createStore } from 'effector'

const $isShowLoginModal = createStore(false)

const handleShowLoginModal = createEvent<boolean>()

$isShowLoginModal.on(handleShowLoginModal, (_, value) => value)

export const loginStore = {
	$isShowLoginModal,
	handleShowLoginModal,
}
