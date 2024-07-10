import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import AppLayout from './ui/AppLayout'
import { AppProvider } from './context/AppContext'
import GlobalStyles from './styles/GlobalStyles'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import AboutMe from './pages/AboutMe'
import { HelmetProvider } from 'react-helmet-async'
import ErrorPage from './pages/ErrorPage'

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
    { path: '*', element: <ErrorPage /> },
])

function App() {
    return (
        <AppProvider>
            <GlobalStyles />
            <HelmetProvider>
                <RouterProvider router={router} />
            </HelmetProvider>
        </AppProvider>
    )
}

export default App
