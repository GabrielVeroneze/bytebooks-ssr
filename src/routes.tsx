import { Route, BrowserRouter as Router, Routes } from 'react-router'
import Layout from '@/pages/Layout'
import Catalog from '@/pages/Catalog'
import BookDetail from '@/pages/BookDetail'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Catalog />} />
                    <Route path="book/:id" element={<BookDetail />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
