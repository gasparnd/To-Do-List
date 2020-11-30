
const toDo = () => {
	const text = document.getElementById('activity')
	const activity = text.value

	if (activity === ''){
		console.log(`Error ${activity}`)
	} else if (activity) {
		const activityContainer = document.createElement('div')
		// add one class to activityContainer
		activityContainer.classList.add('list-item')
		// create li target
		const newActivity = document.createElement('li')
		// add text to li target
		newActivity.innerText = activity
		// add li target in the html section
		activityContainer.appendChild(newActivity)

		// Check BTN
		const doneBTN = document.createElement('i')
		doneBTN.classList.add('done-activity')
		doneBTN.id = 'done-activity'
		doneBTN.classList.add('icon-check')
		activityContainer.appendChild(doneBTN)

		// Delate BTN
		const delateBTN = document.createElement('i')
		delateBTN.classList.add('delate-activity')
		delateBTN.id = 'delate-activity'
		delateBTN.classList.add('icon-trash')
		activityContainer.appendChild(delateBTN)

		// get section from html
		const list = document.getElementById('list')
		list.appendChild(activityContainer)

		text.value = ''

		// Delate Activity

		list.addEventListener('click', function (ev,) {
			const item = ev.target
			if (item.classList[0] === 'delate-activity') {
				const activityItem = item.parentElement
				activityItem.classList.toggle('delate')
			}
		})

		// Done Activity

		list.addEventListener('click', function (ev) {
			const item = ev.target
			if (item.classList[0] === 'done-activity') {
				const activityItem = item.previousSibling
				activityItem.classList.toggle('done')
			}	
		})
	}
}


export default toDo