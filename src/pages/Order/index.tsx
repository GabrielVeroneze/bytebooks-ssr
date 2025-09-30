import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useCart } from '@/context/cart/useCart'
import PageSection from '@/components/PageSection'

const Order = () => {
    const navigate = useNavigate()
    const {
        state: { books },
        actions: { resetCart },
    } = useCart()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (books.length) {
            setTimeout(() => {
                setIsLoading(false)
                resetCart()
            }, 3000)
        }
    }, [books, resetCart])

    return (
        <>
            <PageSection>
                <h1 className="text-2xl md:text-4xl text-white font-bold my-5">
                    Finalizar compra
                </h1>
            </PageSection>
            <div className="h-96 mb-60 mt-20 w-full items-center justify-center flex">
                {isLoading ? (
                    <img src="/loading.gif" alt="carregando" width={200} />
                ) : (
                    <div className="flex-row justify-center">
                        <h2 className="text-lg font-semibold">
                            Tudo certo com seu pedido! Agradecemos pela compra
                        </h2>
                        <img
                            src="/pedido_confirmado.webp"
                            alt="pedido confirmado"
                        />
                        <button
                            className="w-full rounded-lg py-3 bg-[#EB9B00] text-white font-bold mt-4"
                            onClick={() => navigate('/')}
                        >
                            Voltar ao inicio
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export default Order
