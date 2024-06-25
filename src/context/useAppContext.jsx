import { useContext } from 'react'
import { AppContext } from './AppContext'

function useAppContext() {
    const contexts = useContext(AppContext)
    if (contexts === undefined)
        throw new Error('Price context został użyty poza providerem')
    return contexts
}
export { useAppContext }
