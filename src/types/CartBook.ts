import type { Book } from '@/types/Book'

export interface CartBook extends Book {
    quantity: number
    price: number
}
