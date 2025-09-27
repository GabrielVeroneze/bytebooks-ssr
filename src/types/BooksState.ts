import type { Book } from '@/types/Book'

export interface BooksState {
    books: Book[]
    filteredBooks?: Book[]
    isLoading?: boolean
    selectedBook?: Book
}
