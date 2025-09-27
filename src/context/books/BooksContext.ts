import { createContext } from 'react'
import type { Book } from '@/types/Book'
import type { BooksState } from '@/types/BooksState'

interface BooksContextType {
    state: BooksState
    actions: {
        filterItems: (value: string) => void
        clearSelectedBook: () => void
        setSelectedBook: (book: Book) => void
        fetchBooks: () => void
    }
}

const defaultValue: BooksContextType = {
    state: {
        books: [],
        filteredBooks: [],
        isLoading: false,
        selectedBook: undefined,
    },
    actions: {
        filterItems: () => {},
        clearSelectedBook: () => {},
        setSelectedBook: () => {},
        fetchBooks: () => {},
    },
}

export const BooksContext = createContext<BooksContextType>(defaultValue)
BooksContext.displayName = 'Books'
