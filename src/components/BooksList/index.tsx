import type { Book } from '@/types/Book'
import BookItem from '@/components/BookItem'

interface BooksListProps {
    items: Book[]
}

const BooksList = ({ items }: BooksListProps) => {
    return (
        <>
            {items.map((item) => (
                <BookItem key={item.id} book={item} />
            ))}
        </>
    )
}

export default BooksList
