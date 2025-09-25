interface PageSectionProps {
    children: React.ReactNode
    isCatalog?: boolean
}

const PageSection = ({ children, isCatalog = false }: PageSectionProps) => {
    const sectionHeight = isCatalog ? 'h-96' : 'h-30'

    return (
        <div className={`bg-[url("./bg-section.webp")] ${sectionHeight}`}>
            <div
                className={`flex flex-col items-center justify-center ${sectionHeight} bg-gradient-to-r from-[#002F52] to-[#024271] to-95% w-full opacity-90`}
            >
                {children}
            </div>
        </div>
    )
}

export default PageSection
