import { createContext } from 'react'
import type { CartState } from '@/types/CartState'

interface CartContextType {
    state: CartState
    actions: {
        setIsCartOpen: (isOpen: boolean) => void
    }
}

const defaultValue: CartContextType = {
    state: {
        books: [],
        isCartOpen: false,
    },
    actions: {
        setIsCartOpen: () => {},
    },
}

export const CartContext = createContext<CartContextType>(defaultValue)
CartContext.displayName = 'Cart'
