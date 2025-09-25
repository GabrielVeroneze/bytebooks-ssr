import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { setIsCartOpen } from '@/store/reducers/cart'
import type { AppDispatch, RootState } from '@/store/store'
import Cart from '@/components/Cart'

const Header = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { isCartOpen } = useSelector((state: RootState) => state.cart)

    return (
        <>
            <div className="flex items-center bg-white h-20 px-10 w-full py-[18px] justify-between">
                <img alt="ByteBooks Logo" src="./logo.webp" height={70} />
                <div
                    className="flex items-center hover:opacity-80 cursor-pointer"
                    onClick={() => dispatch(setIsCartOpen(true))}
                >
                    <MdOutlineShoppingBag className="h-9 w-9 text-[#002F52]" />
                    <div className="text-[#221F20] text-lg font-bold pt-2 pl-1 hidden md:block">
                        Sacola
                    </div>
                </div>
            </div>
            {isCartOpen && (
                <Cart onClose={() => dispatch(setIsCartOpen(false))} />
            )}
        </>
    )
}

export default memo(Header)
