import { useContext } from 'react'
import { CartContext } from './CartContext'

export const useCart = () => {
    const { state, actions } = useContext(CartContext)

    return {
        state,
        actions,
    }
}
