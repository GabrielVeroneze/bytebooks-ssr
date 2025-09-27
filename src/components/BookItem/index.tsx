import { memo } from 'react'
import { useNavigate } from 'react-router'
import { useBooks } from '@/context/books/useBooks'
import type { Book } from '@/types/Book'

interface BookItemProps {
    book: Book
}

const BookItem = ({ book }: BookItemProps) => {
    const navigate = useNavigate()
    const {
        actions: { setSelectedBook },
    } = useBooks()

    return (
        <div
            className="flex flex-col items-start justify-center w-[246px] m-4 cursor-pointer"
            onClick={() => {
                setSelectedBook(book)
                navigate(`/book/${book.id}`)
            }}
        >
            <img
                src={book.image}
                alt={book.title}
                loading="lazy"
                className="hover:shadow-lg"
            />
            <div className="flex flex-col">
                <h3 className="text-lg text-[#002F52] font-bold text-left my-2">
                    {book.title}
                </h3>
                <p className="text-sm text-[#221F20]">Por: {book.author}</p>
            </div>
        </div>
    )
}

export default memo(BookItem)
