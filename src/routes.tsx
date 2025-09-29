import { Route, Routes } from 'react-router'
import Layout from '@/pages/Layout'
import Catalog from '@/pages/Catalog'
import BookDetail from '@/pages/BookDetail'
import Order from '@/pages/Order'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Catalog />} />
                <Route path="book/:id" element={<BookDetail />} />
                <Route path="order" element={<Order />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes
