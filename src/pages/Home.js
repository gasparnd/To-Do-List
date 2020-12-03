const Home = () => {
	const view = `
		<div class="input-container">
			<div class="close-window">
				<div id="close-window"></div>
			</div>
			<form class="to-do">
				<input type="textarea" name="" id="activity" placeholder="Enter your note">
				<input type="button" class="add-activity" id="add-activity-btn" value="add">
			</form>
		</div>
		<h2>Your List</h2>
		<div class="to-do-container">
			<ul class="to-do-list" id="list">
				
			</ul>
		</div>
		<div class="new-activity-mobile">
			<i class="icon-plus" id="activity-mobile"></i>
		</div>
	`
	return view
}

export default Home