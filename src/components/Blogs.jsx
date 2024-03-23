import { useCallback, useEffect, useRef, useState } from "react";
import { getBlog } from "../utils/getBlog";

import "swiper/css";
import { Swiper, SwiperSlide } from "../config/libs";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [isMobile, setIsMobile] = useState(!!0);
  const [p, setP] = useState(!!1);
  const [n, setN] = useState(!!0);

  const initX = async () => {
    const res = await getBlog(isMobile);
    // console.log(res)
    setBlogs(res);
  };

  useEffect(() => {
    initX();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const swiperRef = useRef(null);

  const handlePrev = useCallback(() => {
    swiperRef.current.swiper.slidePrev();
    Disable(swiperRef.current.swiper.activeIndex);
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef.current.swiper.slideNext();
    Disable(swiperRef.current.swiper.activeIndex);
  }, [swiperRef]);

  const Disable = (x) => {
    console.log(x);
    const len = isMobile ? 1 : 3
    if (x <= 0) {
      setP(!!1);
    } else {
      setP(!!0);
    }
    if (x >= blogs.length - len) {
      setN(!!1);
    } else {
      setN(!!0);
    }
  };

  return (
    <>
      <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-end justify-between">
            <div className="flex-1 text-center lg:text-left mb-3">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                Latest cryptocurrency news from all around the world
              </h2>
              <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0">
                Stay updated with the latest cryptocurrency news from across the globe. Explore insights, trends, and developments shaping the dynamic world of digital currencies.
              </p>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-3 mb-5 pb-3">
              <button
                type="button"
                onClick={handlePrev}
                className={`flex items-center justify-center transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 ${p ? "text-gray-300 cursor-not-allowed " : " cursor-pointer text-gray-400 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className={`flex items-center justify-center transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 ${n ? "text-gray-300 cursor-not-allowed " : " cursor-pointer text-gray-400 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          <Swiper
            spaceBetween={50}
            slidesPerView={isMobile ? 1 : 3}
            ref={swiperRef}
            onSlideChange={() => Disable(swiperRef.current.swiper.activeIndex)}
          >
            {blogs.map((x) => (
              <SwiperSlide
                key={x.id}
                className="overflow-hidden bg-white rounded shadow"
              >
                <div className="p-5">
                  <div className="relative">
                    <a
                      href={x.blogLink}
                      title={x.blogTitle}
                      target="_blank"
                      className="block aspect-w-4 aspect-h-3"
                    >
                      <img
                        className="object-cover w-full h-full"
                        src={x.blogImage}
                        alt={x.blogTitle}
                      />
                    </a>

                    <div className="absolute top-2 left-3 flex justify-between space-x-3 ">
                      {x.blogTags.map((y, i) => (
                        <span
                          key={`${x.id}-${i}`}
                          className="px-4 py-2 text-xs font-bold tracking-widest text-gray-900 uppercase bg-white rounded-full bg-opacity-75"
                        >
                          {y}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between items-center">
                    <span className="block text-sm font-semibold tracking-normal text-gray-500">
                    {x.blogDate}
                  </span>
                  <div className="flex items-center gap-x-1">
        <img className="object-cover w-8 h-8 rounded-full" src={x.blogAuthor.image} alt={x.blogAuthor.name} />
        
        <div>
            <h1 className="text-base font-semibold text-gray-600 capitalize dark:text-white">{x.blogAuthor.name}</h1>

        </div>
    </div>
                  </div>
                  <p className="mt-5 text-2xl font-semibold">
                    <a
                      href={x.blogLink}
                      title={x.blogTitle}
                      target="_blank"
                      className="text-black"
                    >
                      {x.blogTitle}
                    </a>
                  </p>
                  <p className="mt-4 text-base text-gray-600">{x.blogBody}</p>
                  <a
                    href={x.blogLink}
                    title={x.blogTitle}
                    target="_blank"
                    className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
                  >
                    Continue Reading
                    <svg
                      className="w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex items-center justify-center mt-5 space-x-3 lg:hidden">
            <button
              type="button"
              onClick={handlePrev}
              className={`flex items-center justify-center transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 ${p ? "text-gray-300 cursor-not-allowed " : " cursor-pointer text-gray-400 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              className={`flex items-center justify-center transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 ${n ? "text-gray-300 cursor-not-allowed " : " cursor-pointer text-gray-400 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white"}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
