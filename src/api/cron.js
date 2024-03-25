import { SERVER } from "../config";
import { Axios } from "../config/libs";

export default async function handler(req, res) {
  try {
    await Axios.get(`${SERVER}`);
    res.status(200).end('ping');
  } catch (error) {
    res.status(500).end('Internal Server Error.');
  }
}