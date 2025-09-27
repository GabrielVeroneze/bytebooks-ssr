import { useReducer } from 'react'
import { CartContext } from './CartContext'
import type { CartState } from '@/types/CartState'

interface CartProviderProps {
    children: React.ReactNode
}

const cartReducer = (
    state: CartState,
    action: { type: string; payload: boolean }
): CartState => {
    switch (action.type) {
        case 'SET_IS_CART_OPEN':
            return { ...state, isCartOpen: action.payload }
        default:
            return state
    }
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [state, dispatch] = useReducer(cartReducer, {
        books: [],
        isCartOpen: false,
    })

    const setIsCartOpen = (isOpen: boolean) => {
        dispatch({ type: 'SET_IS_CART_OPEN', payload: isOpen })
    }

    return (
        <CartContext.Provider
            value={{
                state: state,
                actions: {
                    setIsCartOpen,
                },
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
