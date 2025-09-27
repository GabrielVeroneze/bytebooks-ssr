import { useContext } from 'react'
import { BooksContext } from './BooksContext'

export const useBooks = () => {
    const { state, actions } = useContext(BooksContext)

    return {
        state,
        actions,
    }
}
