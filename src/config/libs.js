import axios from "axios";
import dayjs from "dayjs";
import { Link as LNK, NavLink as NLink } from "react-router-dom";
import { Swiper as S, SwiperSlide as SS} from "swiper/react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NavLink = NLink
export const Link = LNK

export const Axios = axios
export const djs = dayjs
export const Swiper = S
export const SwiperSlide = SS

export const Toast = (
  t = "",
  m,
  o = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  }
) => {
  if (t === "success") {
    toast.success(m, o);
  } else if (t === "error") {
    toast.error(m, o);
  } else if (t === "warning") {
    toast.warning(m, o);
  } else if (t === "info") {
    toast.info(m, o);
  } else if (t === "promise") {
    toast.loading(m, o);
  } else if (t === "default") {
    toast(m);
  } else {
    toast.dismiss();
  }
};
export const TC = ToastContainer;