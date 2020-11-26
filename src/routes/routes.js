import Header from '../templates/Header'
import Home from '../pages/Home'
import Footer from '../templates/Footer'
import Error404 from '../pages/Error404'

const routes = async () => {
	const header = null || document.getElementById('header')
	const content = null || document.getElementById('content')
	const footer = null || document.getElementById('footer')

	header.innerHTML = await Header()
	content.innerHTML = await Home()
	footer.innerHTML = await Footer()
}

export default routes