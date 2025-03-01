import axios from "axios";

export const postAxios = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	timeout: 150000000,
});
