const showInput = inputContainer => {
	/*console.log('ok')
	if (inputContainer) {
		console.log('exist')
	}*/
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
		/*console.log('ok enter')*/
		
		//show input on mobile
		newActivityBTN.addEventListener('click', () => showInput(inputContainer))
		//exit input on mobile
		closeWindow.addEventListener('click', () => hideInput(inputContainer))
	} else {
		/*console.log('f')*/

		//remove events if not on mobile
		newActivityBTN.removeEventListener('click', () => showInput(inputContainer))
		closeWindow.removeEventListener('click', () => hideInput(inputContainer) )
	}
}

export default validation