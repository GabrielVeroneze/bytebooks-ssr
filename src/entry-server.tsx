import { renderToString } from 'react-dom/server'
import { StaticRouter as Router } from 'react-router'
import Root from '@/root'
import AppRoutes from '@/routes'

export function render(url: string) {
    const html = renderToString(
        <Root>
            <Router location={url}>
                <AppRoutes />
            </Router>
        </Root>
    )
    return { html }
}
