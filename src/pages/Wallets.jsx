import { useEffect, useState } from "react";
import WalletCard from "../components/molecules/WalletCard"
import { siteName } from "../config"
import { xLists } from './../utils/const';
import { Cancel } from "../components/atom/Icon";

const Wallets = () => {
    const [isSticky, setIsSticky] = useState(!!0);
    const [data, setData] = useState(xLists);
    const [query, setQuery] = useState('');

     useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) { // Adjust this value as needed
        setIsSticky(!!1);
      } else {
        setIsSticky(!!0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const res = xLists.filter(item => {
    return item.name.toLowerCase().includes(query.toLowerCase());
});
setData(res)
  }, [query])

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

<div className={`w-full mt-10 ${ isSticky?'sticky top-3  shadow': '' }`}>
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search wallets"
        className="py-2 px-4 w-full rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
      />
      {query.length > 0 && (<span onClick={() => setQuery('')}><Cancel className={`w-6 h-6 absolute right-2 top-2 text-gray-500 hover:text-rose-400 cursor-pointer`} /></span>)}
      </div>
    </div>

          <div className="grid grid-cols-2 gap-5 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16 pt-8 lg:pt-16">
            {data.map((x, i) => (
                <WalletCard img={`/wallets/${x.name}.${x.ext}`} key={`wallet-${i}`}>{x.name}</WalletCard>
            ))}
          </div>
          </div>
          </section>
    </>
  )
}

export default Wallets