import type { CartBook } from '@/types/CartBook'

export interface CartState {
    books: CartBook[]
    isCartOpen: boolean
    cartTotal: string
}
