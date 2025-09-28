import { useEffect, useState } from 'react'
import { BooksContext } from './BooksContext'
import type { BooksState } from '@/types/BooksState'
import type { Book } from '@/types/Book'
import sleep from 'sleep-promise'

interface BooksProviderProps {
    children: React.ReactNode
}

export const BooksProvider = ({ children }: BooksProviderProps) => {
    const [state, setState] = useState<BooksState>({
        books: [],
    })

    const filterItems = (value: string) => {
        setState((prev) => ({
            ...prev,
            filteredBooks: prev.books.filter((item) =>
                item.title.toLowerCase().includes(value.toLowerCase())
            ),
        }))
    }

    const clearSelectedBook = () => {
        setState((prev) => ({
            ...prev,
            selectedBook: undefined,
        }))
    }

    const setSelectedBook = (book: Book) => {
        setState((prev) => ({
            ...prev,
            selectedBook: book,
        }))
    }

    const fetchBooks = async () => {
        setState((prev) => ({
            ...prev,
            isLoading: true,
        }))

        try {
            const response: Book[] = await fetch(
                'https://raw.githubusercontent.com/cicatriz-dev/bytebooks-assets/main/data.json'
            ).then((res) => res.json())

            await sleep(1500)

            setState((prev) => ({
                ...prev,
                books: response,
                isLoading: false,
            }))
        } catch {
            setState((prev) => ({
                ...prev,
                isLoading: false,
            }))
        }
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    return (
        <BooksContext.Provider
            value={{
                state: state,
                actions: {
                    filterItems,
                    clearSelectedBook,
                    setSelectedBook,
                    fetchBooks,
                },
            }}
        >
            {children}
        </BooksContext.Provider>
    )
}
