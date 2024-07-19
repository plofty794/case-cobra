import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const axiosRoute = axios.create({
  baseURL,
  withCredentials: true,
});
