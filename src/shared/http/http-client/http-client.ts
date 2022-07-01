import Axios, { AxiosInstance } from "axios";
import { URLS } from "../../constants";

const baseURL = URLS.baseUrl;

export const httpClient: AxiosInstance = Axios.create({ baseURL });
