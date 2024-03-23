import WalletCard from "../components/molecules/WalletCard"
import { siteName } from "../config"
import { xLists } from './../utils/const';

const Wallets = () => {
  return (
    <>
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl pb-3 font-bold leading-tight text-gray-800 lg:text-4xl">
              Select Your Wallet To begin 🖐
            </h2>
            <p>
               Multiple iOS and Android wallets support the <span className="logoFont">{siteName}</span> protocol. 
               Interaction between mobile apps and mobile browsers are supported via mobile deep linking.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16 pt-8 lg:pt-16">
            {xLists.map((x, i) => (
                <WalletCard img={`/wallets/${x.name}.${x.ext}`} key={`wallet-${i}`}>{x.name}</WalletCard>
            ))}
          </div>
          </div>
          </section>
    </>
  )
}

export default Wallets