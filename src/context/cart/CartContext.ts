import { createContext } from 'react'
import type { CartState } from '@/types/CartState'
import type { CartBook } from '@/types/CartBook'

interface CartContextType {
    state: CartState
    actions: {
        setIsCartOpen: (isOpen: boolean) => void
        addToCart: (book: CartBook) => void
        removeBook: (book: CartBook) => void
        changeQuantity: (book: CartBook, quantity: number) => void
    }
}

const defaultValue: CartContextType = {
    state: {
        books: [],
        isCartOpen: false,
        cartTotal: '',
    },
    actions: {
        setIsCartOpen: () => {},
        addToCart: () => {},
        removeBook: () => {},
        changeQuantity: () => {},
    },
}

export const CartContext = createContext<CartContextType>(defaultValue)
CartContext.displayName = 'Cart'
