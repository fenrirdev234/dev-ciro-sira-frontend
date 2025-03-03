import axios from "axios";

const API_ENDPOINTS = process.env.NEXT_PUBLIC_API_URL;

export const postAxios = axios.create({
	baseURL: API_ENDPOINTS,
	timeout: 150000000,
});
