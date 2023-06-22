import axios, { AxiosRequestConfig } from "axios";
import { AuthUser } from "./types";

const API_URL = import.meta.env.VITE_REACT_APP_API_SERVER_URL;

const axiosClient = axios.create({ baseURL: API_URL });
const config: AxiosRequestConfig = { withCredentials: true };

export const getAuthUser = () => axiosClient.get<AuthUser>(`/user`, config);
