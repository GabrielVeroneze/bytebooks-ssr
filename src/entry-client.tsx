import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router'
import Root from '@/root'
import AppRoutes from '@/routes'

hydrateRoot(
    document.getElementById('root')!,
    <Root>
        <Router>
            <AppRoutes />
        </Router>
    </Root>
)
