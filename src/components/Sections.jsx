import { siteName } from "../config";
import { Static } from "./../assets/image/index";

const Sections = () => {
  return (
    <>
      <section className="px-2 flex flex-col-reverse lg:flex-row items-center justify-between gap-5">
        <section className="mx-auto py-14 bg-white ">
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
              <div className="pr-12 sm:pr-0 flex justify-center">
                <div className="relative max-w-xs mb-12">
                  <img
                    className="object-bottom rounded-md"
                    src={Static.img05}
                    alt=""
                  />

                  <img
                    className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12"
                    src={Static.img02}
                    alt=""
                  />
                </div>
              </div>

              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                  Establish secure connections with <span className="logoFont px-2">{siteName}</span>.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Establishes a foolproof connection with <span className="logoFont px-2">{siteName}</span>,
                  fortifying Dapp functionality for enhanced security and
                  efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="mx-auto py-5 bg-gray-50 sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-20">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                High Connectivity.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Experience unparalleled connectivity for seamless<span className="logoFont px-2">{siteName}</span>Dapp performance and top speed.
              </p>
            </div>

            <div className="relative  lg:pr-6 pt-10 lg:pt-2pl-6 md:px-0 flex justify-center">
              <div className="relative w-full max-w-xs mt-4 mb-10 ml-auto">
                <img
                  className="ml-auto rotate-90 max-w-xs lg:max-w-md py-10"
                  src={Static.img04}
                  alt=""
                />

                <img
                  className="absolute -top-20 left-4"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/features/1/wavey-lines.svg"
                  alt=""
                />

                <div className="absolute -bottom-14 -left-24 lg:-bottom-10 lg:-left-14">
                  <div className="bg-yellow-300 bg-opacity-80">
                    <div className="px-8 py-10">
                      <span className="block text-4xl font-bold text-black lg:text-5xl">
                        {" "}
                        99%{" "}
                      </span>
                      <span className="block mt-2 text-base leading-tight text-black">
                        {" "}
                        High Conectivity
                        <br />
                        Rate{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;
