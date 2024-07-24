import {
    RouterProvider,
    createBrowserRouter,
    useLocation,
} from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ReactGA from 'react-ga4'
import { AppProvider } from './context/AppContext'
import GlobalStyles from './styles/GlobalStyles'
import AppLayout from './ui/AppLayout'
import MainPage from './pages/MainPage'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import AboutMe from './pages/AboutMe'
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
    const location = useLocation()
    ReactGA.initialize('G-7XJKLB2XSM')

    useEffect(() => {
        ReactGA.send({
            hitType: 'pageview',
            page: location.pathname + location.search,
        })
    }, [location])

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
