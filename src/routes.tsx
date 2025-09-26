import { Route, Routes } from 'react-router'
import Layout from '@/pages/Layout'
import Catalog from '@/pages/Catalog'
import BookDetail from '@/pages/BookDetail'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Catalog />} />
                <Route path="book/:id" element={<BookDetail />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes
