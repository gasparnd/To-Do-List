const InputMobile = () => {
	const view = `
		<div class="input-mobile-container">
			<div class="close-window">
				<span id="close-window"></span>
			</div>
			<form class="to-do">
				<input type="textarea" name="" id="activity" placeholder="Enter your note">
				<input type="button" class="add-activity" id="add-activity-btn" value="add">
			</form>
		</div>
		<div class="to-do-mobile">
			<div class="new-activity-mobile">
				<i class="icon-plus"></i>
			</div>
		</div>
	`
	return view
}

export default InputMobile