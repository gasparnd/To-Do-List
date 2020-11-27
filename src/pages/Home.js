const Home = () => {
	const view = `
		<form class="to-do">
			<input type="textarea" name="" id="activity" placeholder="Enter your note">
			<input type="button" class="add-activity" id="add-activity-btn" value="add">
		</form>
		<h2>Your List</h2>
		<div class="to-do-container">
			<ul class="to-do-list" id="list">
				
			</ul>
		</div>
	`
	return view
}

export default Home