const showInput = inputContainer => {
	console.log('ok')
	if (inputContainer) {
		console.log('exist')
	}
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
		console.log('ok enter')
		newActivityBTN.addEventListener('click', () => showInput(inputContainer))
		closeWindow.addEventListener('click', () => hideInput(inputContainer))
	} else {
		console.log('f')
		newActivityBTN.removeEventListener('click', () => showInput(inputContainer))
		closeWindow.removeEventListener('click', () => hideInput(inputContainer) )
	}
}

export default validation

/*const newActivityBTN = document.getElementById('activity-mobile')

if (newActivityBTN) {
	console.log('Existes')
}*/

/*const mobileMQ = window.matchMedia('screen and (max-width: 767px)')
validation(mobileMQ)
mobileMQ.addListener( () => {
	validation(mobileMQ)
})*/
/*if (mobileMQ.matches) {
	console.log('Match ok')
	mobileMQ.addListener( () => {
		validation(mobileMQ)
	})
	validation(mobileMQ)
} else {
	console.log('No Match')
}*/


