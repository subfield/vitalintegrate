import { BLOG_ACCESS, CCAPI } from "../config";
import { Axios, djs } from "../config/libs";

import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

djs.extend(utc);
djs.extend(timezone);

// // Set a default timezone (e.g., Europe/London)
// djs.tz.setDefault('America/Los_Angeles');
// djs.tz('America/Los_Angeles');

// djs.utcOffset(120)

const API = async (x) => {
  let res = [];
  try {
    const { data } = await Axios.get(
      `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${CCAPI}`,
    );

    const len = x ?10:20

    const news = data.Data.slice(0, len);

    news.forEach((x) => {
      const blogTags = x.tags
        .split("|")
        .filter((str) => str.trim() !== "")
        .slice(0, 3);

      const blogBody = `${x.body.slice(0, 251)}...`;

      const date = djs.unix(x.published_on);
      // March 21, 2020 at 12:18pM
      const d = date.format("MMMM DD, YYYY");
      const t = date.format("HH:mm a");
      const blogDate = `${d} at ${t}`;

      const y = {
        id: x.id,
        blogLink: x.guid,
        blogDate,
        blogImage: x.imageurl,
        blogTags,
        blogTitle: x.title,
        blogBody,
        blogAuthor: {
          name: x.source_info.name,
          image: x.source_info.img,
        },
      };

      res.push(y);
    });
  } catch (error) {
    res = JSON.parse(localStorage.getItem(BLOG_ACCESS));
      if (!res) res = [];
  }

  return res;
};

const Time = () => {
    const i = djs()
      const now = djs.tz(i, 'America/Los_Angeles');
      return now
}

const MiniApi = async (x) => {
    const res = await API(x);
      const now = Time()
      const next = now.add(150, "seconds").toString();
      sessionStorage.setItem(BLOG_ACCESS, next);
      localStorage.setItem(BLOG_ACCESS, JSON.stringify(res));
      return res
}

export const getBlog = async (x) => {
  let res = [];

  const run = sessionStorage.getItem(BLOG_ACCESS);

  if (run === undefined || run === null) {
    return await MiniApi(x);
  } else {
    const now = Time()
    const runTime = djs(now).isAfter(run);

    if (runTime) {
      res = await MiniApi(x);
    } else {
      res = JSON.parse(localStorage.getItem(BLOG_ACCESS));
      if (!res) res = [];
    }
    return res;
  }
};
