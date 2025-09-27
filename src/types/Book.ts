export interface Book {
    id: number
    title: string
    image: string
    author: string
    shortDescription: string
    fullDescription: string
    prices: {
        ebook: number
        paper: number
    }
}
