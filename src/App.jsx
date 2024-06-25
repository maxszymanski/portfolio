import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import AppLayout from './ui/AppLayout'
import { AppProvider } from './context/AppContext'
import GlobalStyles from './styles/GlobalStyles'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import AboutMe from './pages/AboutMe'

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
            {
                path: '/projects',
                element: <Projects />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/aboutme',
                element: <AboutMe />,
            },
        ],
    },
])

function App() {
    return (
        <AppProvider>
            <GlobalStyles />
            <RouterProvider router={router} />
        </AppProvider>
    )
}

export default App
