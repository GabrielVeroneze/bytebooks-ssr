import { BooksProvider } from '@/context/books/BooksProvider'
import { CartProvider } from '@/context/cart/CartProvider'

interface ContextProviderProps {
    children: React.ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    return (
        <BooksProvider>
            <CartProvider>{children}</CartProvider>
        </BooksProvider>
    )
}
