import { Outlet } from 'react-router-dom'
import GlobalStyles from '../styles/GlobalStyles'

function AppLayout() {
	return (
		<>
			<GlobalStyles />
			<Outlet />
		</>
	)
}

export default AppLayout
