import { StrictMode } from 'react'
import { ContextProvider } from '@/context/provider/ContextProvider'
import '@fontsource/poppins'
import '@fontsource/poppins/700.css'
import '@/styles/global.css'

interface RootProps {
    children: React.ReactNode
}

const Root = ({ children }: RootProps) => {
    return (
        <StrictMode>
            <ContextProvider>{children}</ContextProvider>
        </StrictMode>
    )
}

export default Root
