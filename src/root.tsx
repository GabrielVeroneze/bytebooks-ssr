import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import '@fontsource/poppins'
import '@fontsource/poppins/700.css'
import '@/styles/global.css'

interface RootProps {
    children: React.ReactNode
}

const Root = ({ children }: RootProps) => {
    return (
        <StrictMode>
            <Provider store={store}>{children}</Provider>
        </StrictMode>
    )
}

export default Root
