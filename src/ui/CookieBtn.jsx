import { useAppContext } from '../context/useAppContext'

const CookieBtn = () => {
    const { closeCookieModal } = useAppContext()
    return (
        <button
            className="rounded-lg text-mywhite  hover:bg-yellow-400 transition-colors duration-300 uppercase font-semibold   pb-2 pt-3 px-3 tracking-widest font-scope hover:text-slate-100 focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2  bg-yellow-500 lg:px-6"
            onClick={closeCookieModal}
        >
            Akceptujasd
        </button>
    )
}

export default CookieBtn
