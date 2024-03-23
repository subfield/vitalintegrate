const Testimonial = () => {
  return (
    <>
      <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
              Trusted by <span className="text-blue-600">90k<sup>+</sup></span> users and companies all over the world
            </h2>
          </div>

          <div className="grid max-w-xl grid-cols-1 mx-auto mt-8 text-center lg:max-w-full sm:mt-12 lg:mt-20 lg:grid-cols-3 gap-x-6 xl:gap-x-12 gap-y-6">
            <div className="overflow-hidden bg-white rounded-md shadow">
              <div className="px-8 py-12">
                <blockquote className="relative mt-1">
                  <p className="text-sm text-black">
                    “Using this Dapp website has been a game-changer for use at CoinBank Solutions! The seamless wallet integration and real-time updates make managing our assets a breeze. Plus, the security measures provide peace of mind knowing our data is safe. We highly recommend this platform to anyone looking for a user-friendly and secure decentralized experience.”
                  </p>
                  <div className="absolute -top-6 lg:-top-5 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">
                  Sofia Ramirez
                </p>
                <p className="mt-1 text-base text-gray-600">
                  Manager at CoinBank Solutions
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-md shadow">
              <div className="px-8 py-12">
                <blockquote className="mt-1 relative">
                  <p className="text-sm text-black">
                    “As the founder of TraceFlow Technologies, I've witnessed firsthand the transformative power of decentralized applications in revolutionizing supply chain management. Our Dapp website has empowered businesses to achieve unprecedented levels of transparency, efficiency, and trust across their supply chains. With real-time tracking, immutable data storage, and seamless interoperability, our platform has streamlined operations and fostered collaboration among stakeholders. I'm proud to say that our Dapp is paving the way for a more resilient and sustainable future in supply chain management.”
                  </p>
                  <div className="absolute -top-6 lg:-top-5 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">
                  Alix Cheema
                </p>
                <p className="mt-1 text-base text-gray-600">Founder at TraceFlow Technologies</p>
              </div>
            </div>

            <div className="overflow-hidden bg-white rounded-md shadow">
              <div className="px-8 py-12">
                <blockquote className="mt-1 relative">
                  <p className="text-sm text-black">
                    “As the IT manager at CryptoConnect, I've been thoroughly impressed by the functionality and reliability of our Dapp website. Our platform has seamlessly integrated blockchain technology to offer users unparalleled security and transparency in their cryptocurrency transactions. With features like wallet integration and real-time updates, our Dapp provides a user-friendly experience that exceeds expectations. I'm confident that CryptoConnect's Dapp will continue to lead the way in revolutionizing the cryptocurrency landscape”
                  </p>
                  <div className="absolute -top-6 lg:-top-5 right-0 flex items-center justify-center bg-blue-600 rounded-full w-7 h-7">
                    <svg
                      className="w-4 h-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                    </svg>
                  </div>
                </blockquote>
                <p className="text-base font-semibold tex-tblack mt-9">
                  Liam Thompson
                </p>
                <p className="mt-1 text-base text-gray-600">
                  IT manager at CryptoConnect
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
