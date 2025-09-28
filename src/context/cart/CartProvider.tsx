import { useReducer } from 'react'
import { CartContext } from './CartContext'
import type { CartState } from '@/types/CartState'
import type { CartBook } from '@/types/CartBook'

interface CartProviderProps {
    children: React.ReactNode
}

const cartReducer = (
    state: CartState,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    action: { type: string; payload?: any }
): CartState => {
    console.log('state:', state.books)
    switch (action.type) {
        case 'SET_IS_CART_OPEN':
            return { ...state, isCartOpen: action.payload }
        case 'ADD_TO_CART':
            console.log('adicionando no carrinho:', action.payload)
            return { ...state, books: [...state.books, action.payload] }
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

    const addToCart = (book: CartBook) => {
        dispatch({ type: 'ADD_TO_CART', payload: book })
    }

    return (
        <CartContext.Provider
            value={{
                state: state,
                actions: {
                    setIsCartOpen,
                    addToCart,
                },
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
