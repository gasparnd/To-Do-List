const addActivity = () => {
	const text = document.getElementById('activity')
	const activity = text.value
	if (activity === ''){
		console.log(`Error ${activity}`)
	} else if (activity) {
		console.log(activity)
		const activityContainer = document.createElement('div')
		// add one class to li activityContainer
		activityContainer.classList.add('list-item')
		// create li target
		const newActivity = document.createElement('li')
		// add text to li target
		newActivity.innerText = activity
		// add li target in the html section
		activityContainer.appendChild(newActivity)
		// Check BTN
		const doneBTN = document.createElement('button')
		doneBTN.classList.add('done-activity')
		activityContainer.appendChild(doneBTN)
		// Delate BTN
		const delateBTN = document.createElement('button')
		delateBTN.classList.add('delate-activity')
		activityContainer.appendChild(delateBTN)
		// get section from html
		const list = document.getElementById('list')
		list.appendChild(activityContainer)
	}
}

export default addActivity