import React from 'react'
import { Link } from '../../config/libs'

const WalletCard = ({children, img, setIsOpen, isOpen, setSelect, wallet}) => {
    const selected = () => {
        setIsOpen(!isOpen)
    setSelect(wallet)
    }
  return (
    <>
    <div onClick={selected} className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 cursor-pointer">
        <span className="text-xl font-bold text-gray-800 dark:text-white border-b-2 border-gray-200 flex justify-center items-center" tabIndex="0" role="link"
        ><img className="object-cover w-28 m-2" src={img} alt={`${children} wallet image`} />
</span>

    <div className="py-5 text-center">
        <span className="block text-xl font-bold text-gray-800 dark:text-white capitalize" tabIndex="0" role="link">{children}</span>
    </div>
</div>
    </>
  )
}

export default WalletCard