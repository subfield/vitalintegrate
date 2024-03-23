import { Bolt, Clock, Connect, Currency, Cursor, DevicePhone, FingerPrint, Server, Shield, Wallet } from "./atom/Icon";

const Cards = () => {
  return (
    <>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Our Awesome Features
            </h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Explore the exceptional features that set us apart.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-3 lg:gap-y-16 pt-8 lg:pt-16">
            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-blue-100"
                  width="72"
                  height="75"
                  viewBox="0 0 72 75"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                </svg>
                <FingerPrint className={`absolute text-blue-600 w-9 h-9`} />
              </div>
              <h3 className="mt-8 textLg font-semibold text-black">
                Secure Connection
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Experience peace of mind with our secure connection feature, ensuring your data remains safe on our Dapp website.
              </p>
            </div>

            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-orange-100"
                  width="62"
                  height="64"
                  viewBox="0 0 62 64"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
                </svg>
                <Bolt className={`absolute text-orange-600 w-9 h-9`} />
              </div>
              <h3 className="mt-8 textLg font-semibold text-black">
                Blazing Fast Speed
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Get ready for lightning-fast speeds with our accelerated performance feature on our Dapp website
              </p>
            </div>

            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-green-100"
                  width="66"
                  height="68"
                  viewBox="0 0 66 68"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                </svg>
                <Wallet className={`absolute text-green-600 w-9 h-9`} />
              </div>
              <h3 className="mt-8 textLg font-semibold text-black">
                Wallet Integration
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Effortlessly manage your digital assets on our Dapp website with integrated wallet support
              </p>
            </div>

            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-purple-100"
                  width="66"
                  height="68"
                  viewBox="0 0 66 68"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                </svg>
                <Currency className={`absolute text-purple-600 w-9 h-9`} />
              </div>
              <h3 className="mt-8 textLg font-semibold text-black">
                Token Integration
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Streamline transactions with integrated token support on our Dapp website.
              </p>
            </div>

            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-gray-100"
                  width="65"
                  height="70"
                  viewBox="0 0 65 70"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M64.5 26C64.5 46.4345 56.4345 70 36 70C15.5655 70 0 53.9345 0 33.5C0 13.0655 13.0655 0 33.5 0C53.9345 0 64.5 5.56546 64.5 26Z" />
                </svg>
                <DevicePhone className={`absolute text-gray-600 w-9 h-9`} />
              </div>
              <h3 className="mt-8 textLg font-semibold text-black">
                Cross-Platform Compatibility
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Access our Dapp website seamlessly from any device or platform, ensuring a consistent experience across all platforms.
              </p>
            </div>

            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-yellow-100"
                  width="78"
                  height="78"
                  viewBox="0 0 78 78"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.49996 28.0002C4.09993 47.9554 14.1313 66.7885 35.5 71.5002C56.8688 76.2119 68.0999 58.4553 72.5 38.5001C76.9 18.5449 68.3688 12.711 47 7.99931C25.6312 3.28759 12.9 8.04499 8.49996 28.0002Z" />
                </svg>
                <Clock className={`absolute text-yellow-500 w-9 h-9`} />
              </div>
              <h3 className="mt-8 textLg font-semibold text-black">
                Real-Time Updates
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            </div>

            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-lime-100"
                  width="62"
                  height="64"
                  viewBox="0 0 62 64"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z"></path>
                </svg>
                <Shield className={`absolute text-lime-500 w-9 h-9`} />
              </div>
              <h3 className="mt-8 textLg font-semibold text-black">
                Security Measures
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Rest assured with robust security measures on our Dapp website, safeguarding your assets and data.
              </p>
            </div>

            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-rose-100"
                  width="72"
                  height="75"
                  viewBox="0 0 72 75"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                </svg>
                <Server className={`absolute text-rose-600 w-9 h-9`} />
              </div>
              <h3 className="mt-8 textLg font-semibold text-black">
                Immutable Data Storage
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Ensure data integrity with immutable storage on our Dapp website, providing tamper-resistant records.
              </p>
            </div>

            <div>
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-black"
                  width="62"
                  height="65"
                  viewBox="0 0 62 65"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 13.0264C0 33.4609 8.06546 64.0264 28.5 64.0264C48.9345 64.0264 62 50.4604 62 30.0259C62 9.59135 59.4345 4.0256 39 4.0256C18.5655 4.0256 0 -7.40819 0 13.0264Z" />
                </svg>

                <Connect className={`absolute text-white w-9 h-9`} />
              </div>
              <h3 className="mt-8 textLg font-semibold text-black">
                Interoperability
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Enhance connectivity with interoperability on our Dapp website, allowing seamless interaction with other decentralized applications.
              </p>
            </div>
            
            <div className="block md:hidden">
              <div className="relative flex items-center justify-center mx-auto">
                <svg
                  className="text-teal-100"
                  width="62"
                  height="65"
                  viewBox="0 0 62 65"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 13.0264C0 33.4609 8.06546 64.0264 28.5 64.0264C48.9345 64.0264 62 50.4604 62 30.0259C62 9.59135 59.4345 4.0256 39 4.0256C18.5655 4.0256 0 -7.40819 0 13.0264Z" />
                </svg>

                <Cursor className={`absolute text-teal-600 w-9 h-9`} />
              </div>
              <h3 className="mt-8 textLg font-semibold text-black">
                User Control
              </h3>
              <p className="mt-4 text-base text-gray-600">
                Take charge of your experience with user-controlled features on our Dapp website, ensuring autonomy and privacy
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
