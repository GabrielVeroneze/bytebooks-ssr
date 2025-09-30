import { useMemo, useReducer } from 'react'
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
    switch (action.type) {
        case 'SET_IS_CART_OPEN': {
            return { ...state, isCartOpen: action.payload }
        }
        case 'ADD_TO_CART': {
            const isBookInCart = state.books.find(
                (book) => book.id === action.payload.id
            )

            if (isBookInCart) {
                const newBooks = state.books.map((book) => {
                    if (book.id === action.payload.id) {
                        return {
                            ...book,
                            quantity: book.quantity + action.payload.quantity,
                        }
                    }

                    return book
                })

                return { ...state, books: newBooks }
            }

            return { ...state, books: [...state.books, action.payload] }
        }
        case 'REMOVE_BOOK': {
            const newBooks = state.books.filter(
                (book) => book.id !== action.payload.id
            )

            return { ...state, books: newBooks }
        }
        case 'CHANGE_QUANTITY': {
            const updatedBooks = state.books.map((book) => {
                if (book.id === action.payload.id) {
                    return {
                        ...book,
                        quantity: action.payload.quantity,
                    }
                }

                return book
            })

            return { ...state, books: updatedBooks }
        }
        case 'RESET_CART': {
            return { ...state, books: [] }
        }
        default:
            return state
    }
}

export const CartProvider = ({ children }: CartProviderProps) => {
    const [state, dispatch] = useReducer(cartReducer, {
        books: [],
        isCartOpen: false,
        cartTotal: '',
    })

    state.cartTotal = useMemo(() => {
        return state.books
            .reduce((sum, book) => sum + book.price * book.quantity, 0)
            .toFixed(2)
    }, [state.books])

    const setIsCartOpen = (isOpen: boolean) => {
        dispatch({ type: 'SET_IS_CART_OPEN', payload: isOpen })
    }

    const addToCart = (book: CartBook) => {
        dispatch({ type: 'ADD_TO_CART', payload: book })
    }

    const removeBook = (book: CartBook) => {
        dispatch({ type: 'REMOVE_BOOK', payload: book })
    }

    const changeQuantity = (book: CartBook, quantity: number) => {
        dispatch({ type: 'CHANGE_QUANTITY', payload: { ...book, quantity } })
    }

    const resetCart = () => {
        dispatch({ type: 'RESET_CART' })
    }

    return (
        <CartContext.Provider
            value={{
                state: state,
                actions: {
                    setIsCartOpen,
                    addToCart,
                    removeBook,
                    changeQuantity,
                    resetCart,
                },
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
