import { useState } from "react"
import ThemeSwitch from "./ThemeSwitch"
import { Connect } from "../atom/Icon"
import { Link } from "../../config/libs"
import { logo } from "../../assets/image"
import { siteName } from "../../config"

const Nav = () => {
    const [isOpen, setIsOpen] = useState(!!0)
    // const navClassName = "font-semibold hover:text-cyan-800 transition-all border-b-2 border-transparent hover:border-cyan-800 px-2 py-1 hidden lg:block"
    return (
        <>
            <header className="bg-[#FCF8F1] bg-opacity-30">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16 lg:h-20">
                <div className="flex-shrink-0">
                    <Link to="/" title="" className="flex items-center space-x-2">
                        <img className="w-auto h-10" src={logo.icon} alt="logo icon" /> <span className="logoFont tracking-wider text-lg md:text-2xl cursor-pointer">{siteName}</span>
                    </Link>
                </div>

                <button type="button" onClick={() => setIsOpen(!isOpen)} className={`inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100 ${isOpen?'bg-gray-100':''}`}>
                    {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                    <svg className={`${isOpen?'hidden':'block'} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path>
                    </svg>

                    {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                    <svg className={`${!isOpen?'hidden':'block'} w-6 h-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <div className={`${!isOpen?'hidden opacity-0 -translate-x-full lg:flex lg:items-center lg:justify-center lg:space-x-10 lg:opacity-100 lg:translate-x-0':'translate-x-0 opacity-100 absolute rounded-md right-0 z-20 w-[385px] shadow-lg h-screen top-14 my-2 px-6 py-10 transition-all duration-100 ease-in-out bg-gray-100 flex flex-col'}`}>
                    <a href="#" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80 px-2 py-2 lg:py-1 border-none lg:border-b-2 border-white hover:text-yellow-400 lg:hover:text-black hover:border-yellow-300"> About </a>

                    <a href="#" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80 px-2 py-2 lg:py-1 border-none lg:border-b-2 border-white hover:text-yellow-400 lg:hover:text-black hover:border-yellow-300"> Contact Us </a>

                    {/* <a href="#" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Resources </a>

                    <a href="#" title="" className="text-base text-black transition-all duration-200 hover:text-opacity-80"> Pricing </a> */}

                    <div className="lg:hidden inline-flex justify-center items-center my-7">
                <Link to="/wallets" title="" className="inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full capitalize" role="button"><Connect className={`w-5 h-5 mx-2 font-semibold`} /> connect wallet </Link>
                    </div>
                </div>

                <Link to="/wallets" title="" className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base transition-all duration-200 hover:bg-yellow-300 hover:text-black focus:text-black focus:bg-yellow-300 font-semibold text-white bg-black rounded-full capitalize" role="button"><Connect className={`w-5 h-5 mx-2 font-semibold`} /> connect wallet </Link>
            </div>
        </div>
    </header>
        </>
    )
}

export default Nav