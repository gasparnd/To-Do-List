const showInput = inputContainer => {
	console.log('ok')
	inputContainer.classList.add('show-input')
}

const hideInput = inputContainer => {
	if (inputContainer.classList.contains('show-input')) {
		inputContainer.classList.remove('show-input')
	}
}

const validation = media => {
	const newActivityBTN = document.getElementById('activity-mobile')
	const inputContainer = document.querySelector('.input-container')
	const closeWindow = document.getElementById('close-window')
	if (media.matches) {
		console.log('ok')
		newActivityBTN.addEventListener('click', () => showInput(inputContainer))
		closeWindow.addEventListener('click', () => hideInput(inputContainer) )
	} else {
		console.log('f')
		newActivityBTN.removeEventListener('click', () => showInput(inputContainer))
		closeWindow.removeEventListener('click', () => hideInput(inputContainer) )
	}
}

const mobileMQ = window.matchMedia('screen and (max-width: 767px)')
mobileMQ.addListener( () => {
	validation(mobileMQ)
})

