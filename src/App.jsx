import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import AppLayout from './ui/AppLayout'

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
		],
	},
])

function App() {
	return <RouterProvider router={router} />
}

export default App
