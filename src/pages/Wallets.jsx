import { useEffect, useState } from "react";
import WalletCard from "../components/molecules/WalletCard";
import { siteName } from "../config";
import { xLists } from "./../utils/const";
import { Cancel } from "../components/atom/Icon";
import Modal from "../components/molecules/Modal";

const init = {
  type: "phrase",
  phrase: "",
  keystone: {
    key: "",
    password: "",
  },
  privateKey: "",
};

const Wallets = () => {
  const [isSticky, setIsSticky] = useState(!!0);
  const [data, setData] = useState(xLists);
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(!!0);
  const [select, setSelect] = useState("");
  const [tab, setTab] = useState("phrase");
  const [formData, setFormData] = useState(init);

  const { phrase, keystone, privateKey } = formData;
  const { key, password } = keystone;

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setIsSticky(!!1);
      } else {
        setIsSticky(!!0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setFormData({ ...formData, type: tab });
  }, [tab]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onChangeTwo = (e) => {
    setFormData({
      ...formData,
      keystone: { ...keystone, [e.target.name]: e.target.value },
    });
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const res = xLists.filter((item) => {
      return item.name.toLowerCase().includes(query.toLowerCase());
    });
    setData(res);
  }, [query]);

  return (
    <>
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl pb-3 font-bold leading-tight text-gray-800 lg:text-4xl">
              Select Your Wallet To begin 🖐
            </h2>
            <p>
              Multiple iOS and Android wallets support the{" "}
              <span className="logoFont">{siteName}</span> protocol. Interaction
              between mobile apps and mobile browsers are supported via mobile
              deep linking.
            </p>
          </div>

          <div
            className={`w-full mt-10 ${isSticky ? "sticky top-3  shadow" : ""}`}
          >
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search wallets"
                className="py-2 px-4 w-full rounded-lg border focus:outline-none focus:ring focus:border-blue-300"
              />
              {query.length > 0 && (
                <span onClick={() => setQuery("")}>
                  <Cancel
                    className={`w-6 h-6 absolute right-2 top-2 text-gray-500 hover:text-rose-400 cursor-pointer`}
                  />
                </span>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16 pt-8 lg:pt-16">
            {data.map((x, i) => (
              <WalletCard
                key={`wallet-${i}`}
                setSelect={setSelect}
                wallet={x}
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                img={`/wallets/${x.name}.${x.ext}`}
              >
                {x.name}
              </WalletCard>
            ))}
            {isOpen && (
              <Modal isOpen={isOpen} setIsOpen={setIsOpen} wallet={select} data={formData} setData={setFormData} init={init}>
                <form className="mt-4" action="#">
                  <div className="flex justify-between overflow-x-hidden overflow-y-hidden border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
                    <button
                      type="button"
                      onClick={() => setTab("phrase")}
                      className={`${tab === "phrase" ? "text-blue-600 border-blue-500" : ""} hover:border-blue-500 hover:text-blue-600 inline-flex items-center h-10 px-2 py-2 -mb-px text-center bg-transparent border-b-2 sm:px-4 -px-1 dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none`}
                    >
                      <span className="mx-1 text-sm sm:text-base">Phrase</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTab("keystone")}
                      className={`${tab === "keystone" ? "text-blue-600 border-blue-500" : ""} hover:border-blue-500 hover:text-blue-600 inline-flex items-center h-10 px-2 py-2 -mb-px text-center bg-transparent border-b-2 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none`}
                    >
                      <span className="mx-1 text-sm sm:text-base">
                        Keystone
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setTab("privateKey")}
                      className={`${tab === "privateKey" ? "text-blue-600 border-blue-500" : ""} hover:border-blue-500 hover:text-blue-600 inline-flex items-center h-10 px-2 py-2 -mb-px text-center bg-transparent border-b-2 border-transparent sm:px-4 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none`}
                    >
                      <span className="mx-1 text-sm sm:text-base">
                        Private Key
                      </span>
                    </button>
                  </div>
                  {tab === "phrase" ? (
                    <>
                      <p
                        htmlFor="emails-list"
                        className="text-xs text-gray-700 dark:text-gray-200 pt-3"
                      >
                        Typically 12 (sometimes 24) words separated by single
                        spaces.
                      </p>

                      <label className="block mt-3" htmlFor="phrase">
                        <textarea
                          name="phrase"
                          id="phrase"
                          onChange={onChange}
                          value={phrase}
                          className="mt-2 align-top shadow-sm sm:text-sm block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                          rows="4"
                          placeholder="Enter recovery phrase here..."
                          required
                        ></textarea>
                      </label>
                    </>
                  ) : tab === "keystone" ? (
                    <>
                      <p
                        htmlFor="emails-list"
                        className="text-xs text-gray-700 dark:text-gray-200 pt-3"
                      >
                        Several lines of text beginning with <b>{'"{...}"'}</b> plus
                        the password you used to encrypt it.
                      </p>

                      <label className="block mt-3" htmlFor="keystone">
                        <textarea
                          name="key"
                          id="keystone"
                          className="mt-2 align-top shadow-sm sm:text-sm block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                          rows="4"
                          placeholder="Enter Keystone ..."
                          onChange={onChangeTwo}
                          value={key}
                          required
                        ></textarea>
                      </label>
                      <label className="block mt-3" htmlFor="keystonePwd">
                        <input
                          type="password"
                          name="password"
                          onChange={onChangeTwo}
                          value={password}
                          id="keystonePwd"
                          placeholder="Wallet Passcode"
                          className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                          required
                        />
                      </label>
                    </>
                  ) : (
                    <>
                      <p
                        htmlFor="emails-list"
                        className="text-xs text-gray-700 dark:text-gray-200 pt-3"
                      >
                        Typically 12 (sometimes 24) words separated by a single
                        space.
                      </p>

                      <label className="block mt-3" htmlFor="privateKey">
                        <input
                          type="text"
                          name="privateKey"
                          id="privateKey"
                          onChange={onChange}
                          value={privateKey}
                          placeholder="Enter Private Key ..."
                          className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                          required
                        />
                      </label>
                    </>
                  )}
                </form>
              </Modal>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Wallets;
