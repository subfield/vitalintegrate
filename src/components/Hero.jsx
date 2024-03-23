import { bg } from "../assets/image"
import { Link } from "../config/libs"
import { Connect } from "./atom/Icon"
// import { HeroImage } from "./atom/Image"

const Hero = () => {
    return (
        <>
    <section className="bg-[#FCF8F1] bg-opacity-30 py-10 ">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-4 lg:grid-cols-2">
                <div>
                    <p className="text-center md:text-left text-base font-semibold tracking-wider text-blue-600 uppercase">Secure Open Protocol Communication.</p>
                    <h1 className="text-center md:text-left mt-2 text-5xl font-bold text-black lg:mt-5 xl:text-6xl leading-1 lg:leading-6">Leading Secure <br className="inline lg:hidden" /> <span className="text-yellow-400">Wallet-to-Dapp</span> <br className="inline lg:hidden" /> Communication Protocol</h1>
                    <p className="text-center md:text-left mt-4 text-base text-black lg:mt-8 sm:text-xl">Empower your transactions with our open protocol! Seamlessly connect wallets to Dapps for secure interactions. Join us in shaping the future of finance!</p>

                    <Link to="/wallets" title="Connect Wallet" className="capitalize flex lg:inline-flex justify-center items-center px-6 py-4 mt-4 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-8 hover:bg-yellow-400 focus:bg-yellow-400" role="button">
                        connect wallet
                        <svg className="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </Link>

                    {/* <p className="mt-5 text-gray-600">Already joined us? <a href="#" title="" className="text-black transition-all duration-200 hover:underline">Log in</a></p> */}
                </div>

                <div className="flex items-center justify-center ">
                    <img className="max-w-xl md:max-w-3xl" src={bg.hero02} alt="" />
                </div>
            </div>
        </div>
    </section>

        </>
    )
}

export default Hero